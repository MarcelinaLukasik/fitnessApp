import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import ProfileScreen from "../screens/ProfileScreen";
import StartScreen from "../screens/StartScreen";
import { MainStackParamList, MainRoutes } from "./NavigationTypes";

const MainStack = createNativeStackNavigator<MainStackParamList>();

export default function Navigation() {
    return (
      <NavigationContainer>
        <MainStack.Navigator>
            <MainStack.Screen name={MainRoutes.Start} component={ StartScreen } options={{ headerShown: false}}/>
            <MainStack.Screen name={MainRoutes.Home} component={ HomeScreen }/>
            <MainStack.Screen name={MainRoutes.Profile} component={ ProfileScreen }/>
        </MainStack.Navigator>
      </NavigationContainer>
    );
  }
  