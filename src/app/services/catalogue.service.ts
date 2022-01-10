import {Injectable} from "@angular/core";
import {environment} from "../../environments/environment";
import {HttpClient, HttpParams} from "@angular/common/http";

@Injectable()
export class CatalogueService {

  private options = {withCredentials: true};
  base = environment.API_ENDPOINT;

  constructor(public http: HttpClient) {
  }

  getResourceTypeById(id: string, resourceType: string) {
    console.log('knocking on:', this.base + `/items/${id}?resourceType=${resourceType}`);
    return this.http.get(this.base + `/items/${id}?resourceType=${resourceType}`);
  }

}
