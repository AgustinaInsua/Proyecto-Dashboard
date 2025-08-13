import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  HostListener,
  ViewChild,
  inject,
  signal,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './header.component.html',
  host: { class: 'block w-full fixed top-0 z-50' },
})
export class HeaderComponent implements AfterViewInit {
  private router = inject(Router);
  readonly open = signal(false);
  private readonly headerOffset = signal(80);

  @ViewChild('hdr', { static: true }) hdr!: ElementRef<HTMLElement>;

  ngAfterViewInit(): void {
    this.updateHeaderOffset();
  }

  @HostListener('window:resize')
  onResize(): void {
    this.updateHeaderOffset();
  }

  private updateHeaderOffset(): void {
    const h = this.hdr?.nativeElement?.offsetHeight ?? 80;
    this.headerOffset.set(h);
  }

  toggle(): void { this.open.update(v => !v); }
  close(): void { this.open.set(false); }

  @HostListener('document:keydown.escape')
  onEsc(): void { if (this.open()) this.close(); }


  navigateTo(fragment: string): void {

    if (fragment === 'home' || fragment === 'top') {
      this.router.navigate([], { fragment }).then(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        this.close();
      });
      return;
    }

    this.router.navigate([], { fragment }).then(() => {

      requestAnimationFrame(() => {
        const el = document.getElementById(fragment);
        if (!el) return;

        const y = el.getBoundingClientRect().top + window.scrollY - this.headerOffset();
        window.scrollTo({ top: y, behavior: 'smooth' });
        this.close();
      });
    });
  }
}