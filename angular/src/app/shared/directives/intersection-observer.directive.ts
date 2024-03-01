import { Directive, ElementRef, Renderer2, AfterViewInit } from '@angular/core';

@Directive({
    selector: '[appIntersectionObserver]',
})
export class IntersectionObserverDirective implements AfterViewInit {
    constructor(private el: ElementRef, private renderer: Renderer2) {}

    ngAfterViewInit() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    this.renderer.addClass(entry.target, 'show');
                }
            });
        });

        observer.observe(this.el.nativeElement);
    }
}
