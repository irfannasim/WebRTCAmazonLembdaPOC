import {Component} from "@angular/core";
import {Router} from "@angular/router";
import {RequestsService} from "../services/requests.service";
import {Title} from "@angular/platform-browser";

@Component({
    selector: 'picture-component',
    templateUrl: '../templates/picture.template.html',
    styleUrls: ['../styles/picture.style.css']
})
export class PictureComponent {
    constructor(private requestsService: RequestsService,
                private router: Router,
                private titleService: Title) {
    };

    ngOnInit() {
        this.titleService.setTitle('Upload Picture');
    }

    capture(){
        const video = <any>document.getElementsByTagName('video')[0];
        const canvas = <any>document.getElementsByTagName('canvas')[0];
        if (video) {
            canvas.width = video.videoWidth;
            canvas.height = video.videoHeight;
            canvas.getContext('2d').drawImage(video, 0, 0);
        }
    }

    uploadToServer(){
        console.log('uploda to server');
    }
}
