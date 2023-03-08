import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { Text, View, StyleSheet, Image, FlatList, ImageBackground, TouchableOpacity, TextInput } from "react-native";

import { HomeScreen } from "./HomeScreen";
import  Profile  from "./Profile";
import Ionicons from 'react-native-vector-icons/Ionicons';
import theme from "../../constants/theme";
import { TimeTable } from "./TimeTable";
import { Courses } from "./Courses";

export const Tabs = ({navigation}) => {

    const Tab = createBottomTabNavigator();

    return (
        <Tab.Navigator screenOptions={({ route, }) => ({
          tabBarIcon: ({ focused, color, size, }) => {
            let iconName;
        
            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'TimeTable') {
              iconName = focused ? 'time' : 'time-outline';
            } else if (route.name === 'Courses') {
              iconName = focused ? 'book' : 'book-outline';
            } else if (route.name === 'Profile') {
              iconName = focused ? 'person' : 'person-outline';
            } else if (route.name === 'AddAppointment') {
              iconName = focused ? 'add-circle' : 'add-circle';
            }
        
            // Return the Icon component for Android
            if ( route.name === 'AddAppointment') {
              const CustomIcon = () => (
                <Ionicons style={styles.addBtn} name={iconName} size={60} color={theme.COLORS.Primary} />
              );
              return <CustomIcon />;
            }
        
            // Return the Icon component for iOS and other platforms
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: theme.COLORS.Primary,
          tabBarInactiveTintColor: 'gray',
          headerTitleAlign: 'left',
          headerTitleStyle: {
            marginLeft: 8,
            fontSize: 20,
          },
        })} >
        <Tab.Screen  name="Home" component={HomeScreen} options={{ headerShown: false }}  />
        <Tab.Screen  name="TimeTable" component={TimeTable} options={{ headerShown: false }}  />
        <Tab.Screen  name="Courses" component={Courses} options={{ }}  />
        <Tab.Screen  name="Profile" component={Profile}  />

      </Tab.Navigator>
    )

}

const styles = StyleSheet.create({
 
});