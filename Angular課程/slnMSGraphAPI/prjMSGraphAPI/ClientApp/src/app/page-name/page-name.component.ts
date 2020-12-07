import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MsalService } from '@azure/msal-angular';



const graphMeEndpoint = "https://graph.microsoft.com/v1.0/me";

const requestObj = {
    scopes: ["user.read"]
};


@Component({
  selector: 'app-page-name',
  templateUrl: './page-name.component.html',
  styleUrls: ['./page-name.component.css']
})


export class PageNameComponent implements OnInit {
  profile;

  constructor(private authService: MsalService, private http: HttpClient) { }

  ngOnInit(): void {
    this.getProfile();
  }

  getProfile() {

    this.http.get(graphMeEndpoint).toPromise()
      .then(profile => {
        this.profile = profile;
      });


    this.authService.acquireTokenPopup(requestObj).then(function (tokenResponse) {
    // Callback code here
    console.log(tokenResponse.accessToken);
  }).catch(function (error) {
    console.log(error);
  });
  }


  logout() {
    this.authService.logout();
  }





}
