// Modules
import {NgModule, OnInit} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';
// App Components
import {AppComponent} from './components/app.component';
import {MainRequestComponent} from './components/main-request.component';
import {IndexComponent} from './components/index.component';

// Errors
import {NotFound404Component} from './components/errors/not-found-404.component';
// Routes
import {routes} from './app.routes';
// Services
import {WindowService} from './services/window.service';
import {RequestsService} from './services/requests.service';
//Constants / Configuration
import {AppConfig} from './configuration/app.config';
import {RequestUrlsConstants} from "./configuration/request-urls-constants";
import {PictureComponent} from "./components/picture.component";
import {WebCamComponent} from './components/webcam/webcam.component';


// ========================================================================== //

@NgModule({
    providers: [
        // Services
        WindowService,
        RequestsService,
        AppConfig,
        RequestUrlsConstants,
    ],
    imports: [
        // Modules
        BrowserModule,
        FormsModule,
        HttpModule,
        routes,
    ],
    declarations: [
        // Third Party Components

        // App Components
        AppComponent,
        MainRequestComponent,
        PictureComponent,
        WebCamComponent,
        IndexComponent,

        // Errors
        NotFound404Component,
    ],
    bootstrap: [AppComponent]
})
export class AppModule implements OnInit {
    ngOnInit() {
    }
}
