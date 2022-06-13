import {EventEmitter, Injectable, Output} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {catchError} from 'rxjs/operators';
import {HttpUtil} from './http-util';


@Injectable({
  providedIn: 'root'
})
export class BillService {
  private fileEndpoint = '/api/generate';
  private header = new HttpHeaders({'Content-Type': 'application/json'});

  @Output() removeTask: EventEmitter<Task> = new EventEmitter();
  @Output() addTask: EventEmitter<Task> = new EventEmitter();

  constructor(private http: HttpClient) {
  }

  generateBill(formData: FormData): void {
    this.http.post(this.fileEndpoint, formData).pipe(catchError(err => HttpUtil.handleError(err)))
      .subscribe(
        (response) => {
          //this.addTask.emit(response);
          console.log('Uploaded succesfully');
        }
      );
  }

}
