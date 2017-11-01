import {Component} from "@angular/core";
import {NgForm} from "@angular/forms";
import {Router} from "@angular/router";
import * as _ from "lodash";
import {RequestsService} from "../services/requests.service";
import {Title} from "@angular/platform-browser";
import {RequestUrlsConstants} from "../configuration/request-urls-constants";

@Component({
    selector: 'index-component',
    templateUrl: '../templates/index.template.html',
    styleUrls: ['../styles/main-request.style.css']
})
export class IndexComponent {
    constructor(private requestsService: RequestsService,
                private router: Router,
                private titleService: Title) {
    };

    ngOnInit() {
        this.titleService.setTitle('VMM App');
    }

}
