import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchUniversitiesComponent } from './search-universities/search-universities.component';

const routes: Routes = [
  {
    path: 'search',
    component: SearchUniversitiesComponent,
  },
  {
    path: 'search-cache',
    component: SearchUniversitiesComponent,
    data: {
      reuse: true,
    },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
