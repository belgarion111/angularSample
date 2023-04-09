import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Auth} from "../types/login";

@Injectable()
export class LoginService {
    constructor(private http: HttpClient) {
    }

    url = "/api/articles";

    getAllArticles(): Observable<Auth> {
        return this.http.get<Auth>(this.url);
    }
}
