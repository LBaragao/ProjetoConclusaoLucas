import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

  constructor(
    private router: Router, private activedRoute: ActivatedRoute
) { }

navigate(route: string){
  this.router.navigate([route], {relativeTo: this.activedRoute});
}

}
