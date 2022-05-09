import { Component, Input, OnInit } from '@angular/core';
import { MenuItems } from '../public-api';

@Component({
  selector: 'ngx-multi-menu-NgMultiLevelMenu',
  templateUrl: './ng-multi-level-menu.component.html',
  styleUrls: ['./ng-multi-level-menu.component.scss']
})
export class NgMultiLevelMenuComponent implements OnInit {
  @Input() items: MenuItems[] = [];
  public isExpanded: boolean = false;
  @Input() set expanded(value: boolean) {
    this.isExpanded = value;
    if(this.items && this.items.length) {
      this.items.forEach(item => {
        if(item.expanded === undefined || item.expanded === null) {
          item.expanded = value
        } else {
          if(item.subItems && item.subItems.length && item.expanded === false) {
            this.changeSubItemsExpandState(item.subItems);
          }
        }
      })
    }
  }

  private changeSubItemsExpandState(subItems: MenuItems[]) {
    subItems.forEach(item => {
      item.expanded = false;
      if(item.subItems && item.subItems.length) {
        this.changeSubItemsExpandState(item.subItems)
      }
    })
  }

  constructor() { }

  onClick(item:MenuItems) {
    item.expanded = !item.expanded;
    if(!item.expanded && item.subItems && item.subItems.length) {
      this.changeSubItemsExpandState(item.subItems);
    }
  }

  ngOnInit(): void {
    console.log(this.items)
  }

}
