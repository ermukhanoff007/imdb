import { Component, input, OnInit, signal, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ListboxModule } from 'primeng/listbox';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navi-list',
  imports: [ListboxModule, FormsModule],
  templateUrl: './navi-list.html',
  styleUrl: './navi-list.scss',
  standalone: true,
})
export class NaviList implements OnInit {
  item = input.required<string>();

  private router = inject(Router);

  movieNavi = [
    { name: 'Popular', route: '/films' },
    { name: 'Top Movies', route: '/film/top-rate' },
  ];
  seriesNavi = [
    { name: 'Popular', route: '/series' },
    { name: 'Top Series', route: '/serie/top-rate' },
  ];

  navi = signal<{ name: string; route: string }[]>([]);
  selectedNav = signal<{ name: string; route: string } | null>(null);

  ngOnInit() {
    if (this.item() === 'movies') {
      this.navi.set(this.movieNavi);
      this.selectedNav.set(this.movieNavi[0]);
    } else {
      this.navi.set(this.seriesNavi);
      this.selectedNav.set(this.seriesNavi[0]);
    }
  }
  onNavChange(selected: { name: string; route: string }) {
    this.selectedNav.set(selected);
    this.router.navigate([selected.route]);
  }
}
