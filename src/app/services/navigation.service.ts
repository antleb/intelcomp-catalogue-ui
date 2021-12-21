import {Injectable} from '@angular/core';
import {BehaviorSubject, Subject} from 'rxjs';

@Injectable()
export class NavigationService {

    public dataRequestIds: BehaviorSubject<string> = new BehaviorSubject<string>(null);

    constructor() {
    }

    go(url: string) {
      location.href = url;
    }

    goOffsite(url: string) {
        window.location.href = url;
    }

    public setDataRequestIds(instanceId: any) {
      console.log('setting instanceID', instanceId);
      console.log('set dataRequestIdsObservable', this.dataRequestIds);
      this.dataRequestIds.next(instanceId);
    }

    public get dataRequestIds$() {
      console.log('get dataRequestIdsObservable', this.dataRequestIds);
      return this.dataRequestIds.asObservable();
    }
    // public get dataRequestIdsObservable() {
    //   console.log('get dataRequestIdsObservable', this.dataRequestIds);
    //   return this.dataRequestIds;
    // }

}
