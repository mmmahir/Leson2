import React from "react";
import { Text,StyleSheet,View ,FlatList,Button,TouchableOpacity,Image} from "react-native";
import ProfileInfo from "../components/ProfileInfo";
import Projects from "../components/Projects";




const ProfileScreen = (props) => {
    return <View>
    <Image source={require("../assets/avatar3.jpg")} style={style.img}></Image>
    <ProfileInfo name="John Doe" job="UI/UX designer" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nec ligula ac ex laoreet pellentesque."/>
    <Projects />
    </View>;
};

const style = StyleSheet.create({
    img:{
        width:"100%",
        borderBottomLeftRadius:30,
        borderBottomRightRadius:30
    }
})


export default ProfileScreen;