import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-search-universities',
  templateUrl: './search-universities.component.html',
  styleUrls: ['./search-universities.component.css']
})
export class SearchUniversitiesComponent implements OnInit {
  universities: any[] = [];
  constructor(private route: ActivatedRoute, private search: SearchService) {
     this.route.queryParams.subscribe(param => search.searchUniversities(param['country']).subscribe(
       res => this.universities = res.slice(0, 5)
     ));
   }

  ngOnInit(): void {
  }
}
