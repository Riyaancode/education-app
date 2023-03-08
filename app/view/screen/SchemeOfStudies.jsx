import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import react from "react";
import { Text, View, StyleSheet, Image, FlatList, TouchableOpacity, TouchableOpacityComponent, ImageBackground } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import theme, { COLORS, SIZES } from "../../constants/theme";
import bannerContent from '../../data/bannerContent';
import * as Progress from 'react-native-progress';
export const SchemeOfStudies = ({ route }) => {

    const { year, th, pr, c, subjects } = route.params;
    const getCardColor = (index) => {
        // define an array of colors
        const colors = ['#FFE7EE', '#BAD6FF', '#BAE0DB', '#CEECC0'];

        // return a color from the array based on the index
        return colors[index % colors.length];
    };
    return (
        <>
            <View style={styles.container}>
                <View style={styles.head}>
                    <View style={{ flexDirection: "row", alignItems: "baseline" }}>
                        <Text style={styles.year}>{year} Year</Text>
                        <Text style={styles.status}>/TH{th} PR{pr} C{c}</Text>
                    </View>
                    <Progress.Bar style={styles.progress} progress={10} width={300} />
                </View>
                <FlatList data={subjects} keyExtractor={(item) => item.code} numColumns={2} renderItem={({ item, index }) => (


                    <View style={[styles.card, { backgroundColor: getCardColor(index) }]}>
                        <Text style={styles.name}>{item.name}</Text>
                        <Text style={styles.code}>{item.code}</Text>
                    </View>

                )} />
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical: 20,
        paddingHorizontal: 10,
        backgroundColor: "white"
    },
    card: {
        flex: 1,
        margin: 5, // add margin to create spacing between cards
        borderRadius: 10, // add borderRadius for rounded corners
        backgroundColor: '#fff', // set background color for card
        height: 200, // set a fixed height for each card
        padding: 15,
        justifyContent: 'center', // center contents vertically
    },
    name: {
        fontSize: 24,
        fontWeight: '800',
        color: '#333', // set color for text
    },
    code: {
        fontSize: 16,
        color: '#666', // set color for text
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
    
      },
      head:{
       
        marginHorizontal: 10,
      }
});
