import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { CadBiometricComponent } from "./cad-biometric/cad-biometric.component";
import { ModuleWithProviders } from "@angular/core";

const APP_ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'cad-biometric', component: CadBiometricComponent }
];

export const routing: ModuleWithProviders<RouterModule> = RouterModule.forRoot(APP_ROUTES);
