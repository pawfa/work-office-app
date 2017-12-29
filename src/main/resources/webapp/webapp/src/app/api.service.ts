import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Observable";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {News} from "./shared/news";

@Injectable()
export class ApiService {

  private server = "http://localhost:8080/";
  private headers: HttpHeaders;
  private test;

  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders().set('Content-Type', 'application/json');
  }

  login(user) {
    //   return this.http.post("http://localhost:8080/login", JSON.stringify(user),{headers : this.httpOptions}).subscribe(
    //     (event) => console.log(event)
    //   );
    // }

    this.test = this.http.post("http://localhost:8080/login", JSON.stringify({
      username: "admin",
      password: "pass"
    }), {observe: 'response', headers: this.headers, withCredentials: true});
    this.test.subscribe(
      (resp) => console.log(resp.headers.get('Authorization'))
    );
  }

  getHomePageData(): Observable<any> {
    return this.http.get(this.server);
  }

  getAllOffers(): Observable<any> {
    return this.http.get(this.server + "get/offers");
  }

  getAllNews(): Observable<any> {
    return this.http.get(this.server + "get/news");
  }

  createNews(news: News) {
    return this.http.post(this.server + "put/news", news, {headers: this.headers}).subscribe();

  }


  createOffer() {

  }

  updateOffer() {

  }

  updateNews() {

  }

  deleteOffer() {

  }

  deleteNews() {

  }

}
