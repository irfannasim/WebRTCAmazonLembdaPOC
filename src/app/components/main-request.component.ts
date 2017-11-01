import {Component} from "@angular/core";
import {NgForm} from "@angular/forms";
import {Router} from "@angular/router";
import * as _ from "lodash";
import {RequestsService} from "../services/requests.service";
import {Title} from "@angular/platform-browser";
import {RequestUrlsConstants} from "../configuration/request-urls-constants";

@Component({
    selector: 'login-component',
    templateUrl: '../templates/main-request.template.html',
    styleUrls: ['../styles/main-request.style.css']
})
export class MainRequestComponent {
    constructor(private requestsService: RequestsService,
                private router: Router,
                private titleService: Title) {
    };

    requestJson: string = '{"SourceURL" : "https://s3-eu-west-1.amazonaws.com/s3vmmtest/images/rz/rz-passport.png","OCRType" : "PASSPORT"}'; // {"SourceURL" : "https://s3-eu-west-1.amazonaws.com/s3vmmtest/images/rz/rz-passport.png","OCRType" : "PASSPORT"}
    responseJson: string;
    firstName: string;
    lastName: string;

    ngOnInit() {
        this.titleService.setTitle('VMME Dashboard');
    }

    doRequest(form: NgForm) {
        _.each(form.form.controls, function (control) {
            control['_touched'] = true
        });

        this.requestsService.postRequestToLambda(
            RequestUrlsConstants.VMME_REMOTE_ORC,
            JSON.parse(this.requestJson)
        )
            .subscribe(
                (response: Response) => {
                    if (response) {
                        //console.log(response);
                        this.responseJson = JSON.stringify({response});
                        this.firstName = response['FirstName'];
                        this.lastName = response['LastName'];
                    } else {
                        this.responseJson = "Error, Lambda not responding";
                    }
                },
                (error: any) => {
                    console.log(error.json());
                });
        /*
        this.requestsService.postRequestToLambda(
            RequestUrlsConstants.VMME_TEST_POC
            , {
                'param_nm': 'debugging',
                'param_cde': '10001',
            })
            .subscribe(
                (response: Response) => {
                    if (response) {
                        console.log(response);
                        //console.log(response.json());
                        //console.log(response.json() + "");
                        this.responseJson = JSON.stringify({response});

                    } else {
                        this.responseJson = "Error, Lambda not responding";
                    }
                },
                (error: any) => {
                    console.log(error.json());
                });*/
    }
}
