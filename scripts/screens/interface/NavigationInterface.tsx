import { NavigationParams, NavigationRoute } from 'react-navigation';

export interface NavigationState {
  index: number;
  routes: NavigationRoute[];
  isTransitioning: boolean;
  key: string;
  params: NavigationParams;
}
