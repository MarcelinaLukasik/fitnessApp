import { StyleSheet, Text, View, Button } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack'; 
import { MainStackParamList, MainRoutes } from '../navigation/NavigationTypes';

type ScreenProps = NativeStackScreenProps<MainStackParamList, MainRoutes.Home>;

export default function HomeScreen( { navigation: { navigate } } : ScreenProps) {

  const navigateToProfile = () => {
    navigate(MainRoutes.Profile);
  };

  return (
    <View style={styles.container}>
      <Text>Home</Text>
      <Button title="Profile" onPress={ navigateToProfile }>
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    text: {
        fontSize: 24
    }
});