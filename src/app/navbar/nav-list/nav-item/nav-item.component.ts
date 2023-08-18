import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-nav-item',
  templateUrl: './nav-item.component.html',
  styleUrls: ['./nav-item.component.css'],
})
export class NavItemComponent {
  @Input() title!: string;
  @Input() link!: string;
  hover: boolean = false;

  toggleHover(): void {
    this.hover = !this.hover;
  }
}
