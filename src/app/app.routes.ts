import { Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';

export const routes: Routes = [
  {path: "", component: HomePageComponent},
  {path: "home", component: HomePageComponent},
  {path: "citicizen", loadChildren: () => import('./citicizen-page/citicizen-page.module').then(m => m.CiticizenPageModule) },
  {path: 'register', loadChildren: () => import('./register-citicizen/register-citicizen.module').then(m => m.RegisterCiticizenModule) },
  {path: 'update', loadChildren: () => import('./update-citicizen/update-citicizen.module').then(m => m.UpdateCiticizenModule) },
  {path: 'search', loadChildren: () => import('./search-citicizen/search-citicizen.module').then(m => m.SearchCiticizenModule) },
  {path: 'delete', loadChildren: () => import('./delete-citicizen/delete-citicizen.module').then(m => m.DeleteCiticizenModule) },
  {path: "vaccine", loadChildren: () => import('./vaccine-page/vaccine-page.module').then(m => m.VaccinePageModule) },
  {path: "registerVaccine", loadChildren: () => import('./register-vaccine/register-vaccine.module').then(m => m.RegisterVaccineModule) },
  {path: "updateVaccine", loadChildren: () => import('./update-vaccine/update-vaccine.module').then(m => m.UpdateVaccineModule) },
  {path: "searchVaccine", loadChildren: () => import('./search-vaccine/search-vaccine.module').then(m => m.SearchVaccineModule) },
  {path: "deleteVaccine", loadChildren: () => import('./delete-vaccine/delete-vaccine.module').then(m => m.DeleteVaccineModule) },
  {path: "vaccination", loadChildren: () => import('./vaccination-page/vaccination-page.module').then(m => m.VaccinationPageModule)},
  {path: "registerVaccination", loadChildren: () => import('./register-vaccination/register-vaccination.module').then(m => m.RegisterVaccinationModule)},
  {path: "personalApplicationReport", loadChildren: () => import('./personal-application-report/personal-application-report.module').then(m => m.PersonalApplicationReportModule)},
  {path: "vaccineApplicationReport", loadChildren: () => import('./vaccine-application-report/vaccine-application-report.module').then(m => m.VaccineApplicationReportModule)}
];
