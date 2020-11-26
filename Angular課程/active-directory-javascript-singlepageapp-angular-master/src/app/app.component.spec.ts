import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BroadcastService, MsalService, MsalAngularConfiguration } from '@azure/msal-angular';
import { MSAL_CONFIG, MSAL_CONFIG_ANGULAR } from '@azure/msal-angular';
import { Configuration } from 'msal';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        MatToolbarModule,
        MatButtonModule,
        MatListModule,
      ],
      declarations: [
        AppComponent
      ],
      providers: [
        MsalService,
        {
          provide: MSAL_CONFIG,
          useValue: {
            auth: {
              clientId: '9ad7e03b-6a13-4d85-a95b-5be156688810', // This is your client ID
              authority: 'https://login.microsoftonline.com/03c0aa26-9cee-48df-a393-c3ed6d87160b', // This is your tenant info
              redirectUri: 'http://localhost:4200' // This is your redirect URI
            },
            cache: {
              cacheLocation: 'localStorage',
              storeAuthStateInCookie: false
            },
          } as Configuration
        },
        {
          provide: MSAL_CONFIG_ANGULAR,
          useValue: {
            popUp: false,
            consentScopes: [ 'user.read' ],
            unprotectedResources: [],
            protectedResourceMap: [
              ['https://graph.microsoft.com/v1.0/me', ['user.read']]
            ]
          } as MsalAngularConfiguration
        },
        BroadcastService
      ]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'MSAL Angular - Sample App'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('MSAL Angular - Sample App');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.title').textContent).toContain('MSAL Angular - Sample App');
  });
});