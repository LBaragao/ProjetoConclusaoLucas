import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-vaccination-page',
  standalone: false,
  templateUrl: './vaccination-page.component.html',
  styleUrl: './vaccination-page.component.css'
})
export class VaccinationPageComponent {

  constructor(
    private router: Router, private activedRoute: ActivatedRoute) {}

  navigate(route: string){
    this.router.navigate([route], {relativeTo: this.activedRoute})
  }

}
