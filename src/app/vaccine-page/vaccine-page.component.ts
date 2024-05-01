import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-vaccine-page',
  standalone: false,
  templateUrl: './vaccine-page.component.html',
  styleUrl: './vaccine-page.component.css'
})
export class VaccinePageComponent {
  
  constructor(
    private router: Router, private activedRoute: ActivatedRoute) {}

  navigate(route: string){
    this.router.navigate([route], {relativeTo: this.activedRoute});
  }

}
