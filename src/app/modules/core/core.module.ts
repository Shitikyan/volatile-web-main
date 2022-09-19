import { RouterModule } from '@angular/router';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { APP_CONFIG, AppConfig } from '@configs/app.config';
import { ROUTES_CONFIG, RoutesConfig } from '@configs/routes.config';
import { ENDPOINTS_CONFIG, EndpointsConfig } from '@configs/endpoints.config';
import { TimingInterceptor } from '@modules/core/interceptors/timing.interceptor';

@NgModule({
  imports: [
    RouterModule,
  ],
  providers: [
    { provide: APP_CONFIG, useValue: AppConfig },
    { provide: ROUTES_CONFIG, useValue: RoutesConfig },
    { provide: ENDPOINTS_CONFIG, useValue: EndpointsConfig },
    { provide: HTTP_INTERCEPTORS, useClass: TimingInterceptor, multi: true },
  ]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(`CoreModule has already been loaded. Import Core modules in the AppModule only.`);
    }
  }
}
