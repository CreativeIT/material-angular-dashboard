import { Injectable, NgZone } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

declare var gapi: any;

const CLIENT_ID = '1037028933315-tadn63p6dvd3iu3r7venmvc2fh6qtoik.apps.googleusercontent.com';

@Injectable()
export class GoogleAuthService {
  public auth2: any;
  public user$: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  public isLoggedIn$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public isLoaded$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(private zone: NgZone) {
    this.loadAuth2();
  }

  signIn(): void {
    this.auth2.signIn().then((user) => {
        this.zone.run(() => {
          this.user$.next(user);
          this.isLoggedIn$.next(true);
        });
      }, () => {
        // catch error here
      },
    );
  }

  signOut(): void {
    if (this.auth2) {
      this.auth2.signOut().then(() => {
        this.zone.run(() => {
          this.isLoggedIn$.next(false);
          this.user$.next(null);
        });
      }, () => {
        // catch error here
      });
    }
  }

  // only for example
  onDestroyComponent() {
    this.isLoggedIn$.next(false);
    this.user$.next(false);
    this.isLoaded$.next(false);
  }

  loadAuth2(): void {
    gapi.load('auth2', () => {
      gapi.auth2.init({
        client_id: CLIENT_ID,
        fetch_basic_profile: true,
      })
        .then((auth) => {
            this.zone.run(() => {
              this.auth2 = auth;
              this.isLoggedIn$.next(auth.isSignedIn.get());
              this.isLoaded$.next(true);
            });
          },
        );
    });
  }
}
