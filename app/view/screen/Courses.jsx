import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import react from "react";
import { Text, View, StyleSheet, Image, FlatList, TouchableOpacity, TouchableOpacityComponent, ImageBackground } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import theme, { COLORS, SIZES } from "../../constants/theme";
import bannerContent from '../../data/bannerContent';
import * as Progress from 'react-native-progress';
export const Courses = ({ navigation }) => {

  const firstYear = {
    year: 1,
    th: 14,
    pr: 21,
    c: 21,
    subjects: [
    { name: "Islamiat & Pakistan Studies-I", code: "Gen 111" },
    { name: "English", code: "Eng 112" },
    { name: "Applied Mathematics – I", code: "Math 123" },
    { name: "Applied Physics", code: "Phy 132" },
    { name: "Applied Chemistry", code: "Ch 132" },
    { name: "Occupational Health, Safety & Environment", code: "OHSE 111" },
    { name: "MS-Office 2016", code: "DSE 111" },
    { name: "HTML5 and CSS3", code: "DSE 112" },
    { name: "Introduction to PHP", code: "DSE 113" },
    { name: "Database Programming with MySQL", code: "DSE 114" },
    { name: "SEO", code: "DSE 116" }
  ]
  }

  const secondYear = {
    year: 2,
    th: 14,
    pr: 21,
    c: 21,
    subjects: [
    { name: "Islamiat & Pakistan Studies-I", code: "Gen 111" },
    { name: "English", code: "Eng 112" },
    { name: "Applied Mathematics – I", code: "Math 123" },
    { name: "Applied Physics", code: "Phy 132" },
    { name: "Applied Chemistry", code: "Ch 132" },
    { name: "Occupational Health, Safety & Environment", code: "OHSE 111" },
    { name: "MS-Office 2016", code: "DSE 111" },
    { name: "HTML5 and CSS3", code: "DSE 112" },
    { name: "Introduction to PHP", code: "DSE 113" },
    { name: "Database Programming with MySQL", code: "DSE 114" },
    { name: "SEO", code: "DSE 116" }
  ]
  }
  const thirdYear = {
    year: 3,
    th: 14,
    pr: 21,
    c: 21,
    subjects: [
    { name: "Islamiat & Pakistan Studies-I", code: "Gen 111" },
    { name: "English", code: "Eng 112" },
    { name: "Applied Mathematics – I", code: "Math 123" },
    { name: "Applied Physics", code: "Phy 132" },
    { name: "Applied Chemistry", code: "Ch 132" },
    { name: "Occupational Health, Safety & Environment", code: "OHSE 111" },
    { name: "MS-Office 2016", code: "DSE 111" },
    { name: "HTML5 and CSS3", code: "DSE 112" },
    { name: "Introduction to PHP", code: "DSE 113" },
    { name: "Database Programming with MySQL", code: "DSE 114" },
    { name: "SEO", code: "DSE 116" }
  ]
  }
  return (
    <>
      <View style={styles.container}>
        <View style={styles.subContainer}>
          <TouchableOpacity onPress={() => navigation.navigate("SchemeOfStudies", firstYear)}>
            <View style={{ flexDirection: "row", alignItems: "baseline" }}>
              <Text style={styles.year}>1st Year</Text>
              <Text style={styles.status}>/Completed</Text>
            </View>
            <Progress.Bar style={styles.progress} progress={10} width={300} />
          </TouchableOpacity>
        </View>
        <View style={styles.subContainer}>
          <TouchableOpacity onPress={() => navigation.navigate("SchemeOfStudies", secondYear)}>
            <View style={{ flexDirection: "row", alignItems: "baseline" }}>
              <Text style={styles.year}>2nd Year</Text>
              <Text style={styles.status}>/Completed</Text>
            </View>
            <Progress.Bar style={styles.progress} progress={10} width={300} />
          </TouchableOpacity>
        </View>
        <View style={styles.subContainer}>
          <TouchableOpacity onPress={() => navigation.navigate("SchemeOfStudies", thirdYear)}>
            <View style={{ flexDirection: "row", alignItems: "baseline" }}>
              <Text style={styles.year}>3rd Year</Text>
              <Text style={styles.status}>/Completed</Text>
            </View>
            <Progress.Bar style={styles.progress} progress={0.8} width={300} />
          </TouchableOpacity>
        </View>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    alignItems: "center",
    paddingHorizontal: 20
  },
  subContainer: {
    width: "100%",
    backgroundColor: "#fff",
    paddingHorizontal: 18,
    paddingVertical: 30,
    borderRadius: 10,
    marginVertical: 10
  },
  year: {
    fontSize: 30,
    fontWeight: "600"
  },
  status: {
    fontSize: 18
  },
  progress: {
    marginVertical: 10,

  }
})