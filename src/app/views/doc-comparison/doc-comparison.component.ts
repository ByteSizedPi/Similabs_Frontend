import { Component, ElementRef, ViewChild } from '@angular/core';
import {
  ApexAxisChartSeries,
  ApexChart,
  ApexDataLabels,
  ApexTitleSubtitle,
} from 'ng-apexcharts';
import { QueriesService } from '../../shared/services/queries.service';

type Upload = {
  name: string;
  file: File;
  text: string;
};

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  title: ApexTitleSubtitle;
  colors: any;
};

@Component({
  selector: 'app-doc-comparison',
  templateUrl: './doc-comparison.component.html',
  styleUrls: ['./doc-comparison.component.scss'],
})
export class DocComparisonComponent {
  @ViewChild('canvasElement') canvasRef: ElementRef;
  public chartOptions: ChartOptions;
  suspect: Upload | undefined;
  heatmaps: number[][][];
  comparison: Upload[] = [];
  selected: number = 0;

  constructor(private query: QueriesService) {}

  setSuspect(event: any) {
    this.query.getTextFromDocx(event.target.files[0]).subscribe((res) => {
      this.suspect = {
        file: event.target.files[0],
        name: event.target.files[0].name,
        text: res,
      };
      this.getHeatmaps();
    });
  }

  clearSuspect() {
    setTimeout(() => (this.suspect = undefined), 10);
  }

  pushComparison(event: any) {
    this.query.getTextFromDocx(event.target.files[0]).subscribe((res) => {
      this.comparison.push({
        file: event.target.files[0],
        name: event.target.files[0].name,
        text: res,
      });
      this.getHeatmaps();
    });
  }

  popComparison(idx: number) {
    this.comparison.splice(idx, 1);
  }

  cellClick(event: any) {
    console.log(event);
  }

  getHeatmaps() {
    if (!this.suspect || this.comparison.length === 0) return;
    this.query
      .heatmaps(
        this.suspect?.file!,
        this.comparison.map((f) => f.file)
      )
      .subscribe((res) => {
        this.heatmaps = res;
        this.drawOnCanvas();
      });
  }

  drawOnCanvas() {
    const canvas = this.canvasRef.nativeElement;
    const ctx = canvas.getContext('2d');
    const imageData = ctx.createImageData(canvas.width, canvas.height);

    for (let y = 0; y < this.heatmaps[0].length; y++) {
      for (let x = 0; x < this.heatmaps[0][y].length; x++) {
        const value = this.heatmaps[0][y][x];
        const idx = (y * canvas.width + x) * 4;

        imageData.data[idx] = value * 255; // Red
        imageData.data[idx + 1] = value * 0; // Green
        imageData.data[idx + 2] = value * 0; // Blue
        imageData.data[idx + 3] = 255;
      }
    }

    ctx.putImageData(imageData, 0, 0);
  }
}
