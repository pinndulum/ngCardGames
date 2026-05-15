import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { FooterComponent } from './footer.component';

describe('FooterComponent', () => {
    let component: FooterComponent;
    let fixture: ComponentFixture<FooterComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [FooterComponent],
            providers: [provideRouter([])]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(FooterComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should show the back-to-top button after scrolling down', () => {
        spyOnProperty(window, 'scrollY', 'get').and.returnValue(101);

        window.dispatchEvent(new Event('scroll'));
        fixture.detectChanges();

        const button = fixture.nativeElement.querySelector('.back-to-top') as HTMLButtonElement;

        expect(button.classList).toContain('active');
    });

    it('should scroll smoothly to the top when the back-to-top button is clicked', () => {
        const scroll = spyOn(window, 'scroll');
        const button = fixture.nativeElement.querySelector('.back-to-top') as HTMLButtonElement;

        button.click();

        const [options] = scroll.calls.mostRecent().args as unknown as [ScrollToOptions];

        expect(scroll).toHaveBeenCalled();
        expect(options).toEqual({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    });
});
