import { Component } from '@angular/core';
import { MenuItems } from 'ng-multi-level-menu';

@Component({
  selector: 'multi-menu-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'NgMultiLevelMenuLibrary';
  menuItems:MenuItems[] = [
    {
      name: 'Item1',
      link: 'contact',
      expanded: true,
      icon:'<i class="fa fa-american-sign-language-interpreting" aria-hidden="true"> </i>',
      subItems: [
        {
          name: 'Item 1 Subitem 1',
          link: 'teams',
          icon:'<i class="fa fa-american-sign-language-interpreting" aria-hidden="true"> </i>',
          subItems: [
            {
              name: 'Item 1 Subitem 1-2',
              link: 'teams',
              icon:'<i class="fa fa-american-sign-language-interpreting" aria-hidden="true"> </i>',
            }
          ]
        }
      ]
    },
    {
      name: 'Item2',
      expanded: false,
      icon:'<i class="fa fa-american-sign-language-interpreting" aria-hidden="true"> </i>',
      subItems: [
        {
          name: 'Item 2 Subitem 1',
          link: 'about',
          subItems: [
            {
              name: 'Item 2 Subitem 1-2',
              link: 'teams',
              icon:'<i class="fa fa-american-sign-language-interpreting" aria-hidden="true"> </i>',
            },
            {
              name: 'Item 2 Subitem 2-2',
              link: 'teams',
              subItems: [
                {
                  name: 'Item 2 Subitem 2-2-1',
                  link: 'teams',
                  subItems: [
                    {
                      name: 'Item 2 Subitem 2-2-1-1',
                      link: 'teams',
                      icon:'<i class="fa fa-american-sign-language-interpreting" aria-hidden="true"> </i>'
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          name: 'Item 2 Subitem 2',
          link: 'teams'
        }
      ]
    },
    {
      name: 'Item3'
    },
    {
      name: 'Item4',
      subItems: [
        {
          name: 'Item 4 Subitem 1'
        }
      ]
    },
  ];
}
