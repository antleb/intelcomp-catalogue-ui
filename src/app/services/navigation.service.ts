import {Injectable} from '@angular/core';
import {BehaviorSubject, Subject} from 'rxjs';

@Injectable()
export class NavigationService {

    public dataRequestIds: BehaviorSubject<{instanceId:string, datasetId:string}> = new BehaviorSubject<{instanceId:string, datasetId:string}>(null);

    constructor() {
    }

    go(url: string) {
      location.href = url;
    }

    goOffsite(url: string) {
        window.location.href = url;
    }

    public setDataRequestIds(instanceId: string, datasetId: string) {
      console.log('setting instanceID', instanceId);
      console.log('setting instanceID', datasetId);
      console.log('set dataRequestIdsObservable', this.dataRequestIds);
      this.dataRequestIds.next({instanceId:instanceId, datasetId:datasetId});
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
