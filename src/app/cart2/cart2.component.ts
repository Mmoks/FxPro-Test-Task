import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Renderer2,
  AfterContentInit,
  ViewChild,
  ElementRef
} from "@angular/core";

@Component({
  selector: "app-cart2",
  templateUrl: "./cart2.component.html",
  styleUrls: ["./cart2.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Cart2Component implements OnInit, AfterContentInit {
  constructor(private renderer: Renderer2) {}

  @ViewChild("text", { static: true }) textElement: ElementRef<HTMLElement>;

  ngOnInit() {}

  ngAfterContentInit() {
    const textElement = this.textElement.nativeElement.innerText
      .trim()
      .split("");
    const targetCharIndex = textElement.length - 1;
    textElement[targetCharIndex] = textElement[targetCharIndex].toUpperCase();
    this.textElement.nativeElement.innerText = textElement.join("");
  }
}
