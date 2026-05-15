import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { SIDEBAR_TOGGLE_CLASS } from '../layout.constants';

import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
    let component: HeaderComponent;
    let fixture: ComponentFixture<HeaderComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [HeaderComponent],
            providers: [provideRouter([])]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(HeaderComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    afterEach(() => {
        window.document.body.classList.remove(SIDEBAR_TOGGLE_CLASS);
        sessionStorage.removeItem(SIDEBAR_TOGGLE_CLASS);
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should toggle sidebar state from the header button', () => {
        const button = fixture.nativeElement.querySelector('button[aria-controls="sidebar"]') as HTMLButtonElement;
        const expanded = button.getAttribute('aria-expanded');

        button.click();
        fixture.detectChanges();

        expect(window.document.body.classList.contains(SIDEBAR_TOGGLE_CLASS)).toBeTrue();
        expect(button.getAttribute('aria-expanded')).not.toBe(expanded);
    });
});
