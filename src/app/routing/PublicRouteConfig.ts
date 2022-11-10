import { PublicRouteEnum } from './RouteEnums';
import { CharactersPage, HomePage } from 'pages';

export type TPublicRouteConfig = {
  label: string;
  to: PublicRouteEnum;
  element: () => JSX.Element;
};

export const PublicRouteConfig: TPublicRouteConfig[] = [
  {
    label: 'Home',
    to: PublicRouteEnum.home,
    element: HomePage,
  },
  {
    label: 'Characters',
    to: PublicRouteEnum.characters,
    element: CharactersPage,
  },
];
