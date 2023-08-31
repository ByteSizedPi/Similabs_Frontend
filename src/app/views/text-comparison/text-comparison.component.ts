import { Component, ElementRef, ViewChild } from '@angular/core';
// import { Diff } from '../../shared/services/Diff';
import { CompareTextResponse } from 'src/app/shared/models/Misc';
import { QueriesService } from '../../shared/services/queries.service';
const Diff = require('text-diff');
@Component({
  selector: 'text-comparison-view',
  templateUrl: './text-comparison.component.html',
  styleUrls: ['./text-comparison.component.scss'],
})
export class TextComparisonComponent {
  public output: string = '';
  simScores: CompareTextResponse;
  @ViewChild('suspect') suspect: ElementRef<HTMLTextAreaElement>;
  @ViewChild('source') source: ElementRef<HTMLTextAreaElement>;

  constructor(private query: QueriesService) {}

  public compare(): void {
    let output = document.getElementById('output') as HTMLDivElement;

    let diff = new Diff();
    const susText = this.suspect.nativeElement.value;
    const srcText = this.source.nativeElement.value;

    const out = diff.main(susText, srcText);
    output.innerHTML = diff.prettyHtml(out);

    this.query.compareText(susText, srcText).subscribe((res) => {
      this.simScores = res;
    });
  }
}
