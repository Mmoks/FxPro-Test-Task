import { Injectable } from "@angular/core";
import { Subject, interval, Observable, BehaviorSubject } from "rxjs";
import { map, tap, distinctUntilChanged } from "rxjs/operators";

@Injectable()
export class TimeService {
  private time: BehaviorSubject<Date> = new BehaviorSubject<Date>(new Date());
  time$: Observable<Date> = this.time.asObservable();

  constructor() {
    interval(100)
      .pipe(
        map(() => new Date()),
        distinctUntilChanged(
          (a: Date, b: Date) => a.getMinutes() === b.getMinutes()
        ),
        tap(date => {
          this.time.next(date);
        })
      )
      .subscribe();
  }
}
