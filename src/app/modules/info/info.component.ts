import { InfoService } from './../../services/info.service';
import { Component, OnInit } from '@angular/core';
import { Subscription, Observable } from 'rxjs';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {
  public fileNames = ['readme.pdf', 'sc2intro.pdf', 'deeplearning.pdf'];
  constructor(private infoService: InfoService) {}

  ngOnInit() {}

  downloadClicked(fileName: string) {
    this.infoService.getFileDownloadUrl(fileName).subscribe(url => {
      window.open(url, '_blank');
    });
  }
}
