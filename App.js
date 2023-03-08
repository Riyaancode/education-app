import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from './app/view/screen/HomeScreen';
import { OnBoarding } from './app/view/screen/OnBoarding';
import { Registration } from './app/view/screen/Registration';
import { Login } from './app/view/screen/Login';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Tabs } from './app/view/screen/Tabs';
import { Courses } from './app/view/screen/Courses';
import { SchemeOfStudies } from './app/view/screen/SchemeOfStudies';


export default function App() {
  const Stack = createNativeStackNavigator();
  

  return (
    <NavigationContainer>
      
      <Stack.Navigator initialRouteName='Tabs'>
      <Stack.Screen  name="Onboarding" component={OnBoarding} options={{ headerShown: false }} />
        <Stack.Screen  name="Registration" component={Registration}  />
        <Stack.Screen  name="Login" component={Login}  />
        <Stack.Screen  name="Courses" component={Courses}   />
        <Stack.Screen  name="SchemeOfStudies" component={SchemeOfStudies}  />
        <Stack.Screen  name="Tabs" component={Tabs} options={{ headerShown: false }}  />
       

      </Stack.Navigator>
    </NavigationContainer>
    // <OnBoarding />
    // <Registration />

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
