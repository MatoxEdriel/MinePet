import { HttpInterceptorFn } from '@angular/common/http';
import { LoadingService } from '../services/loading.service';
import { inject } from '@angular/core';
import { finalize } from 'rxjs';

export const loadingInterceptorInterceptor: HttpInterceptorFn = (req, next) => {

  const _loading = inject(LoadingService);
  _loading.show()

  return next(req).pipe(finalize(() => _loading.hide()));

};
