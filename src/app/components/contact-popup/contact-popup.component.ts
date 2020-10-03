import {
  AfterViewInit, ChangeDetectorRef, Component, HostBinding, OnDestroy, ViewChild,
} from '@angular/core';
import { NgForm, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';

import { UpgradableComponent } from 'theme/components/upgradable/upgradable.component';
import { ContactPopupService } from './contact-popup.service';

declare var componentHandler: any;

@Component({
  selector: 'app-contact-card',
  styleUrls: ['./contact-popup.component.scss'],
  templateUrl: './contact-popup.component.html',
})
export class ContactPopupComponent extends UpgradableComponent implements AfterViewInit, OnDestroy {
  @HostBinding('class.contact-popup') private readonly contact = true;
  public isOpen = false;

  public readonly socials = [
    {
      name: 'github',
      url: 'https://github.com/CreativeIT',
    },
    {
      name: 'facebook',
      url: 'https://www.facebook.com/creativeit.io/',
    },
    {
      name: 'twitter',
      url: 'https://twitter.com/CreativeITeam',
    },
    {
      name: 'linkedin',
      url: 'https://www.linkedin.com/company/creativeit/',
    },
    {
      name: 'behance',
      url: 'https://www.behance.net/CreativeIT_group',
    },
    {
      name: 'dribbble',
      url: 'https://dribbble.com/CreativeIT_Team',
    },
  ];

  public form = {
    email: '',
    message: '',
  };
  public submitted = false;
  private timeout;
  public isError = false;
  private subscription: Subscription;
  @ViewChild('formContact', { static: true }) formContact: NgForm;

  constructor(private service: ContactPopupService,
              private ref: ChangeDetectorRef) {
    super();
  }

  public ngAfterViewInit() {
    this.form = this.service.dataForm;
    this.subscription = this.service.isOpen().subscribe((value) => {
      this.isOpen = value;
      this.updateDom();
      if (value) {
        setTimeout(() => {
          this.formContact.form.patchValue({
            email: this.form.email,
            message: this.form.message,
          });
          this.formContact.controls['email'].updateValueAndValidity();
          this.formContact.controls['message'].updateValueAndValidity();
          this.updateDom();
        },         0);
      }
    });
  }

  private setValidation() {
    this.formContact.controls['email'].setValidators([
      Validators.required,
      Validators.minLength(2),
      Validators.email]);
    this.formContact.controls['message'].setValidators([
      Validators.required,
      Validators.minLength(2)]);
    this.formContact.controls['email'].updateValueAndValidity();
    this.formContact.controls['message'].updateValueAndValidity();
  }

  private updateDom() {
    this.ref.detectChanges();
    componentHandler.upgradeDom();
  }

  public ngOnDestroy() {
    this.subscription.unsubscribe();
    this.service.dataForm = this.form;
    this.ref.detach();
  }

  public sendMessage(e) {
    this.setValidation();
    if (this.formContact.invalid) {
      return;
    }

    this.service.sendMessage(this.formContact.form.getRawValue())
      .subscribe(
        (response) => {
          this.submitted = true;
          this.isError = (response.status !== 'success');
          if (response.status === 'success') {
            this.formContact.resetForm();
            this.form = this.formContact.form.getRawValue();
          }
          this.timeout = setTimeout(this.closeWindow.bind(this), 6000);
        },
        (error) => {
          this.submitted = true;
          this.isError = true;
          this.timeout = setTimeout(this.closeWindow.bind(this), 6000);
        });
    this.form = this.formContact.form.getRawValue();
    e.preventDefault();
  }

  public toggleWindow() {
    clearTimeout(this.timeout);
    if (this.isOpen) {
      if (this.formContact !== undefined) {
        this.form = this.formContact.form.getRawValue();
        this.timeout = setTimeout(this.closeWindow.bind(this), 100);
      } else {
        this.timeout = setTimeout(this.closeWindow.bind(this), 100);
      }
    }
    this.service.setIsOpen(!this.isOpen);
  }

  private closeWindow() {
    this.service.dataForm = this.form;
    this.submitted = false;
    this.isError = false;
    this.service.setIsOpen(false);
  }
}
