import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
})
export class ItemComponent implements OnInit {
  @Input() index = 0;
  @Input() from = '';
  @Input() assigned_to = '';
  @Input() date = '';
  @Input() details = '';
  constructor() {}

  ngOnInit(): void {}
}
