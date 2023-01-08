import { TRoutes } from '@/types/types/constantTypes';

export const routes: TRoutes = [
  { url: '/', name: 'home', pathname: '/', active: false },
  {
    url: '/coins-list',
    name: 'coinsList',
    pathname: '/coins-list',
    active: false,
  },
];
