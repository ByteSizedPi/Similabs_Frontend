import { Component } from '@angular/core';
import { QueriesService } from '../../services/queries.service';

@Component({
  selector: 'upload-doc-button',
  templateUrl: './upload-doc-button.component.html',
  styleUrls: ['./upload-doc-button.component.scss'],
})
export class UploadDocButtonComponent {
  constructor(private queryService: QueriesService) {}
  onFileSelected(event: any) {
    console.log('onFileSelected');
    const selectedFile: File = event.target.files[0];
    this.queryService.uploadFile(selectedFile).subscribe((res) => {
      console.log(res);
    });
  }
}
