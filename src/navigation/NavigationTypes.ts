export enum MainRoutes {
    Home = 'Home',
    Profile = 'Profile',
  }
  
  export type MainStackParamList = {
    [MainRoutes.Home]: undefined;
    [MainRoutes.Profile]: undefined;
  };