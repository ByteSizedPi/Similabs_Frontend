import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CompareTextResponse } from '../models/Misc';

@Injectable({
  providedIn: 'root',
})
export class QueriesService {
  private apiUrl = 'http://127.0.0.1:5000/';

  constructor(private http: HttpClient) {}

  httpGet = <T>(url: string) => this.http.get<T>(`${this.apiUrl}${url}`);

  httpPost = <T>(url: string, body: FormData) =>
    this.http.post<T>(`${this.apiUrl}${url}`, body);

  compareText = (text1: string, text2: string) => {
    const body = new FormData();
    body.append('text1', text1);
    body.append('text2', text2);
    return this.httpPost<CompareTextResponse>('compare', body);
  };

  uploadFile(file: File) {
    const body = new FormData();
    body.append('file', file);
    return this.httpPost('docx_to_html', body);
  }

  getTextFromDocx(file: File) {
    const formData = new FormData();
    formData.append('file', file);
    return this.httpPost<string>('docx_to_html', formData);
  }

  heatmaps(suspect: File, comparison: File[]) {
    const formData = new FormData();
    formData.append('files', suspect);
    comparison.forEach((file) => formData.append('files', file));
    return this.httpPost<number[][][]>('heatmaps', formData);
  }
}
