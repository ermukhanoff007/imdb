import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header-component/header.component';
import { HeroSection } from '../../components/hero-section/hero-section';

@Component({
  selector: 'app-main-page',
  imports: [HeaderComponent, HeroSection],
  templateUrl: './main-page.html',
  styleUrl: './main-page.scss',
})
export class MainPage {}
