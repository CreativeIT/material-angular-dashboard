import { Component, HostBinding, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { InvestigationsService } from '@services/investigation.service';
import { UpgradableComponent } from 'theme/components/upgradable';

@Component({
  selector: 'app-investigation-detail',
  templateUrl: './investigation-detail.component.html',
})
export class InvestigationDetailComponent extends UpgradableComponent implements OnInit {
  @HostBinding('class.employer-form') private readonly employerForm = true;

  private investigation;

  @ViewChild('form', { static: false }) form;

  constructor(
    private investigationsService: InvestigationsService,
    private router: Router,
    private route: ActivatedRoute,
  ) {
    super();
  }

  ngOnInit() {
    this.investigationsService.getInvestigation(+this.route.snapshot.paramMap.get('id'))
      .subscribe((investigation) => {
        this.investigation = investigation;
        getmdlSelect.init('.getmdl-select');
      });
  }
}
