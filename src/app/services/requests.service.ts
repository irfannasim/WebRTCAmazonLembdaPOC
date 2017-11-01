import {Injectable} from '@angular/core';
import {Headers, Http, RequestOptions, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';
import {Router} from '@angular/router';
import {AppConfig} from '../configuration/app.config';

@Injectable()
export class RequestsService {
    constructor(private http: Http,
                private router: Router,
                private appConfig: AppConfig) {
    };

    getThisUrl() {

    }

    getToken() {
        return window.localStorage.getItem('access_token')
    }

    getBEAPIServer() {
        var protocol = AppConfig.BE_HTTP_PROTOCOL; // http
        var server = AppConfig.BE_API_ENDPOINT; // 192.168.1.188
        var port = AppConfig.BE_API_PORT; // 8080 Leave Empty to if running on port 80
        var contextPath = '/' + AppConfig.BE_API_CONTEXT_PATH;
        if (protocol === '' || !protocol || server === '' || !server)
            return ''
        else {
            if (port === '' || !port) {
                return protocol + AppConfig.BE_HTTP_SEPARATOR + server
            }
            else {
                return protocol + AppConfig.BE_HTTP_SEPARATOR + server + ':' + port + contextPath
            }
        }
    }

    getBEAPITestPOCServer() {
        var protocol = AppConfig.BE_HTTP_PROTOCOL; // http
        var server = AppConfig.BE_API_TEST_ENDPOINT; // 192.168.1.188
        var port = AppConfig.BE_API_PORT; // 8080 Leave Empty to if running on port 80
        var contextPath = '/' + AppConfig.BE_API_CONTEXT_PATH;
        if (protocol === '' || !protocol || server === '' || !server)
            return ''
        else {
            if (port === '' || !port) {
                return protocol + AppConfig.BE_HTTP_SEPARATOR + server
            }
            else {
                return protocol + AppConfig.BE_HTTP_SEPARATOR + server + ':' + port + contextPath
            }
        }
    }

    getRequest(url: any, _params: any) {
        const headers = new Headers();
        const params = this.transformRequest(_params);
        if (this.getToken()) {
            headers.append('Authorization', 'Bearer ' + this.getToken());
        }
        if (params.length > 0) {
            return this.http.get(this.getBEAPIServer() + url + '?' + params, {headers: headers})
                .map((response: Response) => response.json());
        }
        else {
            return this.http.get(this.getBEAPIServer() + url, {headers: headers})
                .map((response: Response) => response.json());
        }
    }

    deleteRequest(url: any, _params: any) {
        const headers = new Headers();
        if (this.getToken()) {
            headers.append('Authorization', 'auth_token ' + this.getToken());
        }
        return this.http.delete(this.getBEAPIServer() + url, {headers: headers})
            .map((response: Response) => response.json());
    };

    removeUndefined(obj: any) {
        var cleanObj = new Object;
        for (var p in obj) {
            try {
                if (obj[p].isArray) {
                    var cleanSubObj = new Object;
                    for (var i in obj[p]) {
                        if (obj[p][i]) {
                            cleanSubObj[i] = obj[p][i];
                        }
                    }
                    cleanObj[p] = cleanSubObj;
                }
                else {
                    if (obj[p]) {
                        cleanObj[p] = obj[p]
                    }
                }
            }
            catch (err) {
                continue
            }
        }
        return cleanObj;
    }

    transformRequest(obj: any) {
        var clr = new Object();
        var str = new Array();
        for (var p in obj) {
            if (obj[p] != undefined) {
                clr[p] = obj[p]
            }
        }
        for (var p in clr) {
            if ('object'.indexOf(typeof(clr[p])) > -1) {
                clr[p] = JSON.stringify(clr[p]);
            }
            str.push(encodeURIComponent(p) + '=' + clr[p]);
        }
        return str.join('&');
    }

    postRequest(url: any, _params: any) {
        _params = this.removeUndefined(_params);
        const headers = new Headers();
        if (this.getToken()) {
            headers.append('Authorization', 'Bearer ' + this.getToken());
        }
        headers.append('Content-Type', 'application/json');
        return this.http.post(this.getBEAPIServer() + url, _params, {headers: headers})
            .map((response: Response) => {
                return response.json();
            })
    }

    postRequestToLambda(url: any, _params: any) {
        _params = this.removeUndefined(_params);
        const headers = new Headers();
        //headers.append('Content-Type', 'application/json');
        headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
        headers.append('x-api-key', AppConfig.BE_X_AUTH_KEY)
        return this.http.post(this.getBEAPIServer() + url, _params, {headers: headers})
            .map((response: Response) => {
                return response.json();
            })
    }

    postRequestMultipartFormData(url: any, data: any) {
        //data = this.removeUndefined(data);
        let formData: FormData = new FormData()
        const headers = new Headers();
        formData.append('file', data, data.name);
        if (this.getToken()) {
            headers.append('Authorization', 'Bearer ' + this.getToken());
        }
        //headers.append('Accept', 'application/json');
        //headers.append('Content-Type', 'undefined');
        let options = new RequestOptions({headers: headers});
        return this.http.post(this.getBEAPIServer() + url, formData, options)
            .map((response: Response) => {
                return response.json();
            })
    }

    postRequestMultipartFormData1(url: any, data: any, files: any) {
        data = this.removeUndefined(data);
        var formData = new FormData();
        //for (var i in files) {
        formData.append('file', files, files.name);
        //}
        console.log(formData);
        const headers = new Headers();
        // for (var i in data) {
        //     formData.append(i, data[i]);
        // }
        if (this.getToken()) {
            headers.append('Authorization', 'Bearer ' + this.getToken());
        }
        headers.append('Content-Type', 'multipart/form-data');
        return this.http.post(this.getBEAPIServer() + url, formData, {headers: headers})
            .map((response: Response) => {
                return response.json();
            })
    }

    postRequestXFormData(url: any, data: any) {
        data = this.removeUndefined(data);
        const headers = new Headers();
        var formData = new FormData();
        for (var i in data) {
            formData.append(i, data[i]);
        }
        if (this.getToken()) {
            headers.append('Authorization', 'auth_token ' + this.getToken());
        }
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        return this.http.post(this.getBEAPIServer() + url, data, {headers: headers})
            .map((response: Response) => {
                return response.json();
            })
    }

    putRequest(url: any, _params: any) {
        _params = this.removeUndefined(_params);
        const headers = new Headers();
        if (this.getToken()) {
            headers.append('Authorization', 'Bearer ' + this.getToken());
        }
        headers.append('Content-Type', 'application/json');
        return this.http.put(this.getBEAPIServer() + url, _params, {headers: headers})
            .map((response: Response) => {
                return response.json()
            }).catch(this.handleError);
    }

    private handleError(error: any) {
        let errMsg: string;
        if (error instanceof Response) {
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable.throw(errMsg);
    }

}
