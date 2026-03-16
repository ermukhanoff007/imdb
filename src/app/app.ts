import { Component } from '@angular/core';
import { HeaderComponent } from './components/header-component/header.component';
import { HeroSection } from './components/hero-section/hero-section';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, HeroSection],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}
