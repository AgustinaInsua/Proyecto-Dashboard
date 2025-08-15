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
 readonly open = signal(false);

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
    document.documentElement.style.setProperty('--hdr', `${h}px`);
  }

  toggle(): void { this.open.update(v => !v); }
  close(): void { this.open.set(false); }

  @HostListener('document:keydown.escape')
  onEsc(): void { if (this.open()) this.close(); }

  navigateTo(fragment: string): void {
    this.close();

    if (fragment === 'home' || fragment === 'top') {
      history.replaceState(null, '', '#home');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const el = document.getElementById(fragment);
    if (el) {
      history.replaceState(null, '', `#${fragment}`); 
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}