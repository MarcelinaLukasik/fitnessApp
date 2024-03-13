export enum MainRoutes {
    Start = 'Start',
    Home = 'Home',
    Profile = 'Profile',
  }
  
  export type MainStackParamList = {
    [MainRoutes.Start]: undefined;
    [MainRoutes.Home]: undefined;
    [MainRoutes.Profile]: undefined;
  };