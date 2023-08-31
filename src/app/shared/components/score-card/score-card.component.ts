import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'score-card',
  templateUrl: './score-card.component.html',
  styleUrls: ['./score-card.component.scss'],
})
export class ScoreCardComponent implements AfterViewInit {
  @Input() score: number = 0;
  @Input() title: string = '';
  @Input() description: number = 0;
  descriptions: string[] = [
    CosineDescription,
    JaccardDescription,
    LevenshteinDescription,
  ];
  @ViewChild('i') info: ElementRef<HTMLElement>;
  @ViewChild('info') infoEl: ElementRef<HTMLElement>;

  colors: string[] = [
    '#00cc00',
    '#33cc00',
    '#66cc00',
    '#99cc00',
    '#cccc00',
    '#ffcc00',
    '#ff9933',
    '#ff6633',
    '#ff3333',
    '#ff0000',
  ];

  ngAfterViewInit(): void {
    this.info.nativeElement.addEventListener('mouseenter', () => {
      this.infoEl.nativeElement.style.display = 'block';
    });

    this.info.nativeElement.addEventListener('mouseleave', () => {
      this.infoEl.nativeElement.style.display = 'none';
    });
  }

  bg = () => this.colors[Math.floor(this.score * this.colors.length)];
}

export const CosineDescription =
  'Cosine text similarity measures the similarity between two texts based on word frequencies. It outputs a similarity between 0 and 1. Context and word order are not considered.';

export const JaccardDescription =
  'Jaccard similarity measures the overlap between two texts. It considers presence or absence of words, not their frequency or order.';

export const LevenshteinDescription =
  'Levenshtein distance measures the difference between two strings by counting the minimum number of single-character edits needed to transform one string into another. It outputs a non-negative integer representing the distance.';
