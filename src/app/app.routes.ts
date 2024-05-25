import { Routes } from '@angular/router';
import { AuthModule } from './auth/auth.module';

export const routes: Routes = [
    {
      path: '',
      loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
    },
    
  ];