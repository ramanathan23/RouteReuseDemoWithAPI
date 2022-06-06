import {
  ActivatedRouteSnapshot,
  BaseRouteReuseStrategy,
  DetachedRouteHandle,
} from '@angular/router';

export class CustomRouteReuseStrategy implements BaseRouteReuseStrategy {
  private cache: any = [];

  shouldDetach(route: ActivatedRouteSnapshot): boolean {
    if (route?.data['reuse']) {
      return true;
    }
    return false;
  }
  store(
    route: ActivatedRouteSnapshot,
    detachedTree: DetachedRouteHandle
  ): void {
    if (route?.data['reuse']) {
      this.cache[this.getCacheKey(route)] = detachedTree;
    }
  }
  shouldAttach(route: ActivatedRouteSnapshot): boolean {
    if (route?.data['reuse'] && this.cache[this.getCacheKey(route)]) {
      return true;
    }
    return false;
  }
  retrieve(route: ActivatedRouteSnapshot): DetachedRouteHandle | null {
    if (route?.data['reuse'] && this.cache[this.getCacheKey(route)]) {
      return this.cache[this.getCacheKey(route)];
    }
    return null;
  }
  shouldReuseRoute(
    future: ActivatedRouteSnapshot,
    curr: ActivatedRouteSnapshot
  ): boolean {
    if (future?.data['reuse']) return true;
    return false;
  }
  getCacheKey(route: ActivatedRouteSnapshot): any {
    return route.queryParams['country'] || '';
  }
}
