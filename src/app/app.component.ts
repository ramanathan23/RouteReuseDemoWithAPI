import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularCachingDemo';
  useCache = false;
  constructor(private router: Router) {
  }

  search(country: string){
    this.router.navigate([this.useCache ? 'search-cache' : 'search'], {
        queryParams:{
          country: country
        }
    });
  }
}
