import { Location } from '@angular/common';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { EMPTY, Observable } from 'rxjs';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  @ViewChild('grp_menu') private readonly grp_menu!: ElementRef<HTMLLIElement>;

  needsauth: Observable<boolean> = EMPTY;

  constructor (
    private loc: Location,
  ) {
  }

  async ngOnInit (): Promise<void> {
    this.loc.onUrlChange(url => {
      const nav_item = this.grp_menu.nativeElement;
      const links = Array.from(nav_item.querySelectorAll('.nav-link'));
      links.forEach(x => x.classList.remove('active'));

      const selected = links.find(x => {
        const rlnk = x.getAttribute('routerLink');
        return rlnk && url.includes(x.getAttribute('routerLink') ?? '')
      });
      if (selected) {
        selected.classList.add('active');
        nav_item.querySelector('.nav-content')?.classList.add('show');
        nav_item.querySelector('.nav-link')?.classList.remove('collapsed');
      }
    });
  }
}
