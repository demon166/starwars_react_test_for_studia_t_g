import HomePage from 'pages/HomePage';
import CharactersPage from 'pages/CharactersPage';

export type RoutingConfigType = {
  label: string;
  path: string;
  element: () => JSX.Element;
}[];

export const PublicRouteConfig: RoutingConfigType = [
  {
    label: 'Home',
    path: '/',
    element: HomePage,
  },
  {
    label: 'Characters',
    path: '/characters',
    element: CharactersPage,
  },
];
