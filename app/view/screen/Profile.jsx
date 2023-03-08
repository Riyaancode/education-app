import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ImageBackground, TextInput, ScrollView } from 'react-native';

import { Ionicons } from '@expo/vector-icons';
import theme from '../../constants/theme';

export default function Profile() {
  return (

    <View style={styles.container} >
      <View style={styles.top}>

        <Image style={styles.userImg} source={require("../../assets/large.png")} />
        {/* <Text style={styles.title}>Zaeri Babu</Text> */}
        <Text style={styles.infoTitle}>Personal information</Text>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.field}>
            <Text style={styles.label}>Name</Text>
            <Text style={styles.textField}>Zaeri Babu</Text>
          </View>
          <View style={styles.field}>
            <Text style={styles.label}>Contact Number</Text>
            <Text style={styles.textField}>+8801800000000</Text>
          </View>
          <View style={styles.field}>
            <Text style={styles.label}>Date of birth</Text>
            <Text style={styles.textField}>1-JAN-1980</Text>
          </View>
          <View style={styles.field}>
            <Text style={styles.label}>Location</Text>
            <Text style={styles.textField}>2216 Oakway Lane, Woodland Hills, California, United States</Text>
          </View>

        </ScrollView>

      </View>
     
       
      
    </View>

  );
}

const styles = StyleSheet.create({
  top: {
    flex: 1,
    // backgroundColor: theme.COLORS.Primary,
    justifyContent: 'center',
    alignItems: 'center',
    
  
  },
  container: {
    flex: 1,
    justifyContent:'center',
    alignItems:'center',
    paddingTop:theme.SIZES.base*2
  },
  information: {
    flex: 1,
    paddingHorizontal: 20

  },
  userImg: {
  width:100,
  height:100
  
    

  },

  title: {
    fontSize: 30,
    fontWeight: '500',
    marginTop: 16
  },
  subtitle: {
    textAlign: 'center',
    color: "white",
    fontSize: 16,
    marginBottom: 20
  },

  field: {
    backgroundColor: "#ffff",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 14,
    marginVertical: 10
  },
  textField: {
    fontSize: 20,
    color: theme.COLORS.secText
  },
  label: {
    color: theme.COLORS.Primary,
    fontSize: 16,
    marginBottom: 5,
    fontWeight: "500"

  },
  infoTitle: {
    fontSize: 25,
    marginVertical: 10,
    fontWeight: "500",

  }

});
