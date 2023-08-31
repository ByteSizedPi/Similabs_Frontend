import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComparisonComponent } from './views/comparison/comparison.component';
import { DocComparisonComponent } from './views/doc-comparison/doc-comparison.component';
import { TextComparisonComponent } from './views/text-comparison/text-comparison.component';

const routes: Routes = [
  {
    path: 'compare',
    component: ComparisonComponent,
    children: [
      {
        path: 'TEXT',
        component: TextComparisonComponent,
      },
      {
        path: 'DOC',
        component: DocComparisonComponent,
      },
      { path: '', redirectTo: 'DOC', pathMatch: 'prefix' },
    ],
  },
  {
    path: '**',
    redirectTo: 'compare',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
