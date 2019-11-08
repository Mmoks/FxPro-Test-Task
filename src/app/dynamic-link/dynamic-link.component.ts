import {
  Component,
  OnInit,
  ChangeDetectionStrategy
} from "@angular/core";
import { Subject, interval, Observable } from "rxjs";
import { map, tap, distinctUntilChanged } from "rxjs/operators";
import { TimeService } from '../services/time.service';

@Component({
  selector: "app-dynamic-link",
  templateUrl: "./dynamic-link.component.html",
  styleUrls: ["./dynamic-link.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DynamicLinkComponent implements OnInit {

  constructor(public timeService: TimeService) {}

  ngOnInit() {
  }

  getMinutes(time: Date): number {
    return time.getMinutes();
  }
}
