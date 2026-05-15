import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { SidebarStateService } from '../sidebar-state.service';

import { SidebarComponent } from './sidebar.component';

describe('SidebarComponent', () => {
  let component: SidebarComponent;
  let fixture: ComponentFixture<SidebarComponent>;
  let sidebarState: jasmine.SpyObj<SidebarStateService>;

  beforeEach(async () => {
    sidebarState = jasmine.createSpyObj<SidebarStateService>('SidebarStateService', ['closeOnMobileNavigation']);

    await TestBed.configureTestingModule({
      imports: [SidebarComponent],
      providers: [
        provideRouter([]),
        { provide: SidebarStateService, useValue: sidebarState }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('renders primary card-game links', () => {
    const links = Array.from(
      fixture.nativeElement.querySelectorAll('.nav-link') as NodeListOf<HTMLAnchorElement>
    )
      .map(link => link.textContent?.trim())
      .filter(Boolean);

    expect(links).toContain('Klondike');
    expect(links).toContain('Freecell');
    expect(links).toContain('Spider');
    expect(links).toContain('Free Play');
  });

  it('delegates mobile sidebar close from each route link', () => {
    const routeLinks = Array.from(
      fixture.nativeElement.querySelectorAll('a.nav-link') as NodeListOf<HTMLAnchorElement>
    );

    routeLinks.forEach(link => link.click());

    expect(sidebarState.closeOnMobileNavigation).toHaveBeenCalledTimes(routeLinks.length);
  });
});
