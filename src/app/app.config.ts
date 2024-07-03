import { ApplicationConfig, provideZoneChangeDetection, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient, withFetch, withInterceptors, withInterceptorsFromDi } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideToastr } from 'ngx-toastr';
import { authInterceptor } from './interceptors/auth.interceptor';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideRouterStore } from '@ngrx/router-store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { routes } from './app.routes';
import { reducers, effects } from './store';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideClientHydration(),
    provideAnimationsAsync(),
    provideHttpClient(),
    provideAnimations(),
    provideToastr(),
    provideHttpClient(withInterceptorsFromDi(), withFetch()),
    provideHttpClient(withInterceptors([authInterceptor])),
    provideStore(reducers),
    provideEffects(effects),
    provideRouterStore(),
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() })
  ]
};
