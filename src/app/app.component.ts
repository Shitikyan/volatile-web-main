import { DOCUMENT } from '@angular/common';
import {
  Component,
  HostListener,
  Inject,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  public title = 'Volatile Solutions';
  public isVisibleTopButton: boolean = false;
  @HostListener('window:scroll', []) onWindowScroll($event) {
    if (this.document.documentElement.scrollTop > 50) {
      this.isVisibleTopButton = true;
    } else {
      this.isVisibleTopButton = false;
    }
  }

  constructor(@Inject(DOCUMENT) private document: Document) {}

  scrollToTop() {
    window.scrollTo(0, 0);
  }
}
