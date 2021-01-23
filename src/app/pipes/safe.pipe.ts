import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml, SafeResourceUrl, SafeScript, SafeStyle, SafeUrl } from '@angular/platform-browser';

export type SafeValue = string | File;
export type SafeTransform = 'html' | 'style' | 'script' | 'url' | 'resourceUrl';
export type SafeResult = SafeHtml | SafeStyle | SafeScript | SafeUrl | SafeResourceUrl;

/* html example:
        <div [innerHtml]="html | safe: 'html'"></div>
   url example 1:
        <a [href]="url | safe: 'url'" />
   url example 2:
        <a [href]="files[key] | safe: 'url'" />
   resource url example 1:
        <a [href]="files[key].url | safe: 'resourceUrl'" />
   resource url example 2:
        <a [href]="files[key] | safe: 'resourceUrl'" />
*/

@Pipe({ name: 'safe' })
export class SafePipe implements PipeTransform {

    constructor(protected sanitizer: DomSanitizer) {
    }

    public transform(value: SafeValue, type: SafeTransform): SafeResult {
        if (value instanceof File) {
            value = window.URL.createObjectURL(value);
            type = type === 'url' || type === 'resourceUrl' ? type : 'url';
        }

        if (value && typeof value !== 'string') {
            throw new Error(`Invalid safe transformation of "${typeof value}" to "${type}"`);
        }

        switch (type) {
            case 'html':
                return this.sanitizer.bypassSecurityTrustHtml(value);
            case 'style':
                return this.sanitizer.bypassSecurityTrustStyle(value);
            case 'script':
                return this.sanitizer.bypassSecurityTrustScript(value);
            case 'url':
                return this.sanitizer.bypassSecurityTrustUrl(value);
            case 'resourceUrl':
                return this.sanitizer.bypassSecurityTrustResourceUrl(value);
            default:
                throw new Error(`Invalid safe type specified: ${type}`);
        }
    }
}
