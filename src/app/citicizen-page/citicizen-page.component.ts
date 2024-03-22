import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-citicizen-page',
  standalone: false,
  templateUrl: './citicizen-page.component.html',
  styleUrl: './citicizen-page.component.css'
})
export class CiticizenPageComponent {

  constructor(
    private router: Router, private activedRoute: ActivatedRoute) {}

  navigate(route: string){
    this.router.navigate([route], {relativeTo: this.activedRoute});
  }
}
