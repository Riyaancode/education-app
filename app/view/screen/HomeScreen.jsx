import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import react from "react";
import { Text, View, StyleSheet, Image, FlatList, TouchableOpacity, TouchableOpacityComponent, ImageBackground, ScrollView } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { COLORS, SIZES } from "../../constants/theme";
import bannerContent from '../../data/bannerContent';
import { PeriodTimer } from "../components/PeriodTimer";
import { Profile } from "./Profile";

export const HomeScreen = ({ }) => {


    // const startTime = new Date('2023-03-01T03:50:00Z');

    const carousel = ({ item }) => {
        return (
            <View style={styles.card}>
                {item.title !== "" ?
                    <View style={{ width: "50%", alignItems: "flex-start" }}>
                        <Text style={styles.title}>{item.title}</Text>
                        <TouchableOpacity style={styles.btn}><Text style={styles.btnText}>{item.btn}</Text></TouchableOpacity>
                    </View> : ""}
                <View style={styles.illus}><Image source={item.img} /></View>
            </View>
        )
    }

    

    return (
        <>
        <View style={styles.main}>
            <View style={styles.top}>
                <View>
                    <Text style={styles.userName} >Mohammad Uzair</Text>
                    <Text style={styles.technologyName} >Technology Name</Text>
                </View>
                <View><Image style={styles.avatar} source={require("../../assets/Avatar.png")} /></View>
            </View>
            {/* <View style={styles.periodSec}> */}
            <View style={styles.currentPeriod}>
                <View style={styles.currentPerCont}>
                    <Text style={{ color: COLORS.text2, fontSize: 15 }}>Current Period</Text>
                    {/* <PeriodTimer startTime={startTime} /> */}
                    <View style={styles.minutes}><Text style={styles.totalMin}>/45min</Text></View>

                </View>
                <View style={{ color: COLORS.Primary }}><Text style={{ color: COLORS.Primary, fontSize: 17 }}>Web Programming</Text></View>
            </View>
            {/* </View> */}
           
            <View style={styles.carousel}>
                <FlatList data={bannerContent} keyExtractor={item => item._id} pagingEnabled horizontal showsHorizontalScrollIndicator={false} renderItem={carousel} />
            </View>
            <ScrollView showsVerticalScrollIndicator={false} >
            <View style={styles.todayPlan}>
                <Text style={styles.planTitle}>Today Plan</Text>
                <View style={{ marginTop: 10 }}>
                    <View style={{ flexDirection: "row", justifyContent: "space-between", marginVertical: 5, marginHorizontal: 12 }}><Text>Today Periods</Text><Text>01/06</Text></View>
                    <View style={{ flexDirection: "row", justifyContent: "space-between", marginVertical: 5, marginHorizontal: 12 }}><Text>Today Periods</Text><Text>01/06</Text></View>
                </View>
            </View>
            <View style={styles.classBanner}>
                <View>
                    <Text style={{fontSize:26, fontWeight:"600", color:"#440687"}}>Where is My class</Text>
                    <Text style={{fontSize:18, color:"#440687"}}>Where is My class...</Text>
                    <Text style={{fontSize:22, fontWeight:"600", color:"#440687"}}>(Software Lab)</Text>
                </View>
                <View>
                    <Image source={require("../../assets/Avatar-group.png")} />
                </View>
            </View>
            </ScrollView>
        </View>
       
      </>
    )
}

const styles = StyleSheet.create({
    classBanner:{
        backgroundColor:"#EFE0FF",
        flexDirection:"row",
        justifyContent:"space-between",
        marginHorizontal:20,
        borderRadius:18,
        paddingHorizontal:20,
        alignItems:"center",
        paddingVertical:10,
        marginVertical:10
    },
    todayPlan: {
        paddingHorizontal: 20
    },
    planTitle: {
        fontSize: 22,
        fontWeight: "600"
    },
    top: {
        backgroundColor: COLORS.Primary,
        height: SIZES.height / 5,
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 26,
        flexDirection: "row"
    },
    main: {
        backgroundColor: '#ffff',
        flex:1
    },
    card: {
        backgroundColor: COLORS.text2,
        marginHorizontal: SIZES.base,
        width: SIZES.width / 1.3,
        paddingVertical: SIZES.base * 2,
        borderRadius: 20,
        flexDirection: "row",
        justifyContent: "space-evenly",
        backgroundColor: '#CEECFE'
    },
    carousel: {
        position: "relative",
        top: -20

    },
    btn: {
        backgroundColor: "#FF6905",
        paddingVertical: 10,
        paddingHorizontal: 14,
        marginVertical: 8,
        borderRadius: 10
    },
    btnText: {
        fontSize: 18,
        color: "white",
        fontWeight: '600',
        margin: 0
    },
    title: {
        fontSize: 22,
        fontWeight: "600"
    },
    minutes: {
        flexDirection: "row",
        alignItems: "flex-end",
    },
    currentPeriod: {
        paddingVertical: SIZES.base * 3,
        marginHorizontal: SIZES.base * 2,
        position: "relative",
        top: -30,
        borderRadius: 10,
        paddingHorizontal: SIZES.base * 2,
        backgroundColor: '#fff',
        flexDirection: "row",
        justifyContent: "space-between",

    },
    currMin: {
        fontSize: SIZES.base * 4,

    },
    totalMin: {
        fontSize: SIZES.base * 2,
        marginBottom: 5,
        color: COLORS.text2,

    },
    currentPerCont: {


        // backgroundColor:'#7878',
    },
    userName: {
        color: '#fff',
        fontSize: SIZES.base * 2.5,
        fontWeight: "600"
    },
    technologyName: {
        color: '#EAEAEA',

    },
    avatar: {
        width: 40,
        height: 40,
    }
})