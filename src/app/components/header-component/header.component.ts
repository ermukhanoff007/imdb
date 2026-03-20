import { Component } from '@angular/core';
import { NaviList } from '../../shared/navi-list/navi-list';

@Component({
  selector: 'app-header',
  imports: [NaviList],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  standalone: true,
})
export class HeaderComponent {}
