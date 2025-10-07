import { Component, signal } from '@angular/core';
import { Header } from './landing/header/header';
import { Footer } from './landing/footer/footer';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Header, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('GBCode');
}
