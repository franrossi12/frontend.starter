import { Component, OnDestroy } from '@angular/core';
import { AuthService } from "angular2-social-login";

@Component({
  selector: 'my-app',
  template: 'social.component.html'
})
export class AppComponent implements OnDestroy {
  public user;
  sub: any;
  constructor(public _auth: AuthService){ }

  signIn(provider){
    this.sub = this._auth.login(provider).subscribe(
      (data) => {
        console.log(data);this.user=data;}
    )
  }

  logout(){
    this._auth.logout().subscribe(
      (data)=>{console.log(data);this.user=null;}
    )
  }

  ngOnDestroy(){
    this.sub.unsubscribe();
  }

}
