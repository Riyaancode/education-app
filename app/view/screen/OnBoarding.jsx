import react from "react";
import { Text, View, StyleSheet, Image, FlatList, ImageBackground, TouchableOpacity } from "react-native";
import { COLORS, SIZES } from "../../constants/theme";
import onBoardingContent from '../../data/onBoarding'

export const OnBoarding = ({navigation}) => {


    const top = () => {
        return (
            <View style={styles.top}>
                <Text style={styles.skip}>Skip</Text>
            </View>
        )
    }

    const pages = ({ item }) => {
        return (
            <View style={styles.page}>
                <View style={{
                   
                    alignItems:"center"
                }}>
                    {/* <Image source={item.img} style={styles.img} /> */}
                    <ImageBackground source={item.img} style={styles.img} />
                </View>
                <View style={{marginVertical:SIZES.base, width:SIZES.width}}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.p}>{item.paragraph}</Text>
                </View>
            </View>
        )
    }

    const bottom = () => {
        return (
            <View style={styles.container}>
                <View style={styles.pagination}>
                    {
                        [...Array(onBoardingContent.length)].map((_, index) => (
                            <View style={styles.dot} key={index} />
                        ))
                    }
                </View>
                <View style={styles.btns}>
                    <TouchableOpacity style={styles.btn} onPress={()=> navigation.navigate("Registration")} >
                        <Text style={[{backgroundColor:COLORS.Primary, color:'#ffff'},styles.btn]}>Signup</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btn} onPress={()=> navigation.navigate("Login")} >
                        <Text style={[{color:COLORS.Primary},styles.btn]}>Login</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

    return (
        <View style={styles.OnBoarding}>
            {top()}
            <View style={styles.pageList}>
            <FlatList  data={onBoardingContent} keyExtractor={item => item._id} pagingEnabled horizontal showsHorizontalScrollIndicator={false} renderItem={pages} />
            </View>
            {bottom()}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        // backgroundColor:COLORS.Primary,
        alignItems:"stretch",
        justifyContent:"center",
        
    },
    btns:{
        flexDirection:"row",
        paddingVertical:SIZES.base
       
    },
    btn:{
        paddingHorizontal:25,
        paddingVertical:12,
        borderRadius:5
    },
    title:{
        fontSize:30,
        fontWeight:"700",
        color:COLORS.text1,
        textAlign:"center",
        marginBottom:SIZES.base * 1.5
    },
    p:{
        color:COLORS.text2,
        textAlign:"center",
        paddingHorizontal:SIZES.base*3,
       fontSize:24
        
    },
    page: {
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        // backgroundColor: COLORS.Primary,
       width:'100%'
    },
    pageList: {
        // backgroundColor: COLORS.text2,
        width:'100%',
        
    },
    img: {
        width: 260,
        height: 260,
        resizeMode:"contain"
    },
    pagination: {
        flexDirection: "row",
        justifyContent:"center"
    },
    dot: {
        width: 18,
        height: 10,
        borderRadius: 5,
        backgroundColor: COLORS.Primary,
        marginHorizontal: 5
    },
    skip: {
        fontSize: 24,
        color: COLORS.text2
    },
    top: {
        alignItems: "flex-end",
        // backgroundColor:COLORS.Primary,
        width: '100%',
        paddingVertical:SIZES.base*2,
        paddingHorizontal:SIZES.base*2
       
    },
    OnBoarding: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        width:SIZES.width
    }
})

function name(params) {
    
}


name('hELLO')