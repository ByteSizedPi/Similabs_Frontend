import { Component } from '@angular/core';
import { Router } from '@angular/router';

const Tab = {
  DOC: 'DOC',
  TEXT: 'TEXT',
  REPORT: 'REPORT',
} as const;

type TabIdx = (typeof Tab)[keyof typeof Tab];

@Component({
  selector: 'app-comparison',
  templateUrl: './comparison.component.html',
  styleUrls: ['./comparison.component.scss'],
})
export class ComparisonComponent {
  constructor(private router: Router) {}
  curIdx: TabIdx = 'DOC';

  setActive(idx: TabIdx) {
    this.curIdx = idx;
    this.router.navigate([`/compare/${idx}`]);
  }
}
