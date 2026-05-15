import { Component, HostListener, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import dates from '../../../utils/dates';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss'],
    imports: [RouterLink]
})
export class FooterComponent {
    protected readonly year = dates.current.year();
    protected readonly showBackToTop = signal(false);

    @HostListener('window:scroll')
    protected onWindowScroll (): void {
        this.showBackToTop.set(window.scrollY > 100);
    }

    protected scrollTop () {
        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    }
}
