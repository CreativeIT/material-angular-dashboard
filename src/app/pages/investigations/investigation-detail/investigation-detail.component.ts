import { Component, HostBinding, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { InvestigationsService } from '@services/investigation.service';
import { UpgradableComponent } from 'theme/components/upgradable';

@Component({
  selector: 'app-investigation-detail',
  templateUrl: './investigation-detail.component.html',
})
export class InvestigationDetailComponent extends UpgradableComponent implements OnInit {
  @HostBinding('class.employer-form') public readonly employerForm = true;

  public investigation;

  @ViewChild('form') form;

  constructor(
    public investigationsService: InvestigationsService,
    public router: Router,
    public route: ActivatedRoute,
  ) {
    super();
  }

  ngOnInit() {
    this.investigationsService.getInvestigation(+this.route.snapshot.paramMap.get('id'))
      .subscribe((investigation) => {
        this.investigation = investigation;
        console.log(JSON.stringify(this.investigation));
      });
  }
}
