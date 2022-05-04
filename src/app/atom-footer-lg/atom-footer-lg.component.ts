import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-atom-footer-lg',
  templateUrl: './atom-footer-lg.component.html',
  styleUrls: ['./atom-footer-lg.component.scss'],
})
export class AtomFooterLgComponent implements OnInit {
  @Input() displayIcons: boolean;
  @Input() footerText: string;

  constructor() {
  }

  ngOnInit() {
  }

}
