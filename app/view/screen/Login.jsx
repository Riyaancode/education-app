import React from "react";
import { Text, View, StyleSheet, Image, FlatList, ImageBackground, TouchableOpacity, TextInput } from "react-native";
import { COLORS, SIZES } from "../../constants/theme";

export const Login = ({navigation}) => {

    const [text, onChangeText] = React.useState('Useless Text');

    return (
        <View style={styles.regForm}>

            <View style={styles.inputCol}>
                <Text style={styles.inputText} >Class Roll No</Text>
                <TextInput style={styles.input} onChangeText={onChangeText} value={text} />
            </View>
        
            <View style={styles.inputCol}>
                <Text style={styles.inputText} >Password</Text>
                <TextInput style={styles.input} onChangeText={onChangeText} value={text} />
            </View>
            <View style={styles.btns}>
                <TouchableOpacity style={styles.btn}  >
                    <Text style={[{ backgroundColor: COLORS.Primary, color: '#ffff' }, styles.btn]} onPress={()=> navigation.replace("Tabs")} >Login</Text>
                </TouchableOpacity>
            </View>

            <TouchableOpacity style={styles.link} onPress={()=> navigation.navigate("Registration")}  >
                <Text style={styles.linkText}>Don’t have an account? Sign up </Text>
            </TouchableOpacity>



        </View>
    )

}

const styles = StyleSheet.create({
    input: {
        height: 40,
        borderWidth: 1,
        padding: 20,
        borderRadius: 5,
        borderColor: '#B8B8D2'
    },
    inputText: {
        color: '#858597',
        fontSize: 18,
        marginBottom: 8
    },
    inputCol: {
        paddingHorizontal: 30,
        marginVertical: SIZES.base
    },
    link: {
        paddingHorizontal: 30,

    },
    linkText: {
        color: '#858597',
        textAlign:"center"
    },
    btns: {

        paddingVertical: SIZES.base,

    },
    btn: {
        paddingHorizontal: 25,
        paddingVertical: 12,
        borderRadius: 5,
        textAlign: "center"
    },
    regForm: {
        marginTop: SIZES.base * 2
    }
});