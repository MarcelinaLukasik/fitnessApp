import { StyleSheet, Text, View, ImageBackground, TouchableOpacity } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack'; 
import { MainStackParamList, MainRoutes } from '../navigation/NavigationTypes';
const startScreenBg = require("./../../assets/start_screen_bg.jpg");

type ScreenProps = NativeStackScreenProps<MainStackParamList, MainRoutes.Home>;

export default function StartScreen( { navigation: { replace } } : ScreenProps) {

  const navigateToHome = () => {
    replace(MainRoutes.Home);
  };

  return (
    <View style={styles.container}>        
      <ImageBackground source= {startScreenBg} style={styles.backgroundImage}>
        <Text style={styles.header}>MyFitness</Text> 
        <View style={styles.buttonCard}>
          <Text style={styles.cardText}>Every step is a stride toward a stronger, healthier you</Text>
          <TouchableOpacity onPress={ navigateToHome } style={styles.button}>
              <Text style={styles.text}>Start</Text>
          </TouchableOpacity> 
        </View>                 
      </ImageBackground>   
    </View>
  );
}
// TODO: refactor styles 
const styles = StyleSheet.create({
    container: {
      flex: 1, 
      justifyContent: 'flex-end',     
    },
    header: {
      fontSize: 40,
      color: 'white',
      textAlign: 'center',
    },
    text: {
      fontSize: 24,
      color: 'white',
      textAlign: 'center',
    },
    backgroundImage: {
      flex:1,     
      alignItems: 'center',
      justifyContent: 'flex-end', 
    }, 
    button:
    {
      marginBottom: 50, 
      padding: 18,
      backgroundColor: '#412258',
      width: 220,
      borderRadius: 40,
      borderWidth: 1.5,
      borderColor: 'rgba(166, 94, 244, .8)',
    },
    buttonCard:
    {
      alignSelf: 'auto',
      backgroundColor: '#230B32',
      opacity: 0.6,
      width:300,
      alignItems: 'center',
      marginTop: 220,
      marginBottom: 120, 
      borderRadius: 40,    
    },
    cardText:
    {
      fontSize: 16,
      color: '#BFA8CE',
      textAlign: 'center',
      margin: 50
    }
});