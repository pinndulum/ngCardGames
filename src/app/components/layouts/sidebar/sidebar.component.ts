import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SidebarStateService } from '../sidebar-state.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  imports: [RouterLink]
})
export class SidebarComponent {
  private readonly sidebarState = inject(SidebarStateService);

  protected readonly closeMobileSidebar = (): void => this.sidebarState.closeOnMobileNavigation();
}
