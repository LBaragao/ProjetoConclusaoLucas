import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-baseboard-navigation',
  standalone: false,
  templateUrl: './baseboard-navigation.component.html',
  styleUrl: './baseboard-navigation.component.css'
})
export class BaseboardNavigationComponent {

  constructor(private router: Router, private location: Location, private activedRoute: ActivatedRoute) {}

  back(): void {
    //this.router.navigate([".."]);
    this.location.back();
  }
  navigate(route: string){
    this.router.navigate([route], {relativeTo: this.activedRoute});
  }
}
