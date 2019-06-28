import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { GoogleAuthService } from '@services/*';
import { Subscription } from 'rxjs';

@Component({
  selector: 'google-sign-in',
  styles: [`
    .container {
      width: 30px;
      height: 30px;
      background-image: url("./assets/images/google.png");
      background-size: contain;
      background-repeat: no-repeat;
      background-position: 50% 50%;
      margin: auto;
    }    ​
  `],
  template: `
    <button class="mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect" (click)="onSignIn()">
      <div class="container"></div>
    </button>`,
})
export class GoogleLoginComponent implements OnInit, OnDestroy {
  @Output() signedIn = new EventEmitter();
  subscription = new Subscription();

  constructor(private authService: GoogleAuthService) {
  }

  ngOnInit() {
    this.subscription.add(this.authService.user$.subscribe((googleUser) => {
      if (googleUser) {
        const profile = googleUser.getBasicProfile();
        this.signedIn.emit({ token: profile.getId(), username: profile.getName(), email: profile.getEmail(), avatar: profile.getImageUrl() });
      }
    }));

    this.subscription.add(this.authService.isLoaded$.subscribe((value) => {
      if (value && this.authService.isLoggedIn$.getValue()) {
        this.authService.signOut();
      }
    }));
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
    this.authService.onDestroyComponent();
  }

  onSignIn() {
    this.authService.signIn();
  }

}
