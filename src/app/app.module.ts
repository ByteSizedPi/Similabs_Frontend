import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HeatMapModule } from '@syncfusion/ej2-angular-heatmap';
import { NgApexchartsModule } from 'ng-apexcharts';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ScoreCardComponent } from './shared/components/score-card/score-card.component';
import { TopNavComponent } from './shared/components/top-nav/top-nav.component';
import { UploadDocButtonComponent } from './shared/components/upload-doc-button/upload-doc-button.component';
import { ComparisonComponent } from './views/comparison/comparison.component';
import { DocComparisonComponent } from './views/doc-comparison/doc-comparison.component';
import { IndexComponent } from './views/index/index.component';
import { MainComponent } from './views/main/main.component';
import { TextComparisonComponent } from './views/text-comparison/text-comparison.component';
// import { HeatMapComponent, Legend, Tooltip } from '@syncfusion/ej2-ng-heatmap';
@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    TextComparisonComponent,
    TopNavComponent,
    ScoreCardComponent,
    UploadDocButtonComponent,
    DocComparisonComponent,
    MainComponent,
    ComparisonComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgApexchartsModule,
    HeatMapModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
