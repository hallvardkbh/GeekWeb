import { Injectable } from '@angular/core';
import { AngularFireStorage } from 'angularfire2/storage';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InfoService {
  constructor(private afStorage: AngularFireStorage) {}

  public getFileDownloadUrl(fileName: string): Observable<string> {
    return this.afStorage.ref(`/info/${fileName}`).getDownloadURL();
  }
}
