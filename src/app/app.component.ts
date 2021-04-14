import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { environment as env } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  public readonly title = env.title;
  public readonly appname: string = env.appname;
  public readonly links: { [key: string]: { name: string; href: string; }[] } = env.links;
  private readonly mediaQ: MediaQueryList;

  public get isMobile(): boolean {
    return this.mediaQ.matches;
  }

  public get mode(): 'Side' | 'Over' | 'Push' {
    return this.isMobile ? 'Over' : 'Side';
  }

  public get topMargin(): number {
    return this.isMobile ? 56 : 0;
  }

  constructor(media: MediaMatcher,
    private chgref: ChangeDetectorRef
  ) {
    this.mediaQ = media.matchMedia('(max-width: 600px)');
    this.mediaQ.addEventListener('change', this.chgref.detectChanges);
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.mediaQ.removeEventListener('change', this.chgref.detectChanges);
  }
}
