import React from "react";
import { Text,StyleSheet,View ,FlatList,Button,TouchableOpacity} from "react-native";




const HomeScreen = (props) => {
    return <View>
        <Button title="Go back" onPress={() => props.navigation.goBack("Menu")} />
        <TouchableOpacity onPress={() => props.navigation.navigate("Profile")}><Text>Go to  profile</Text></TouchableOpacity>
    </View>;
};

const style = StyleSheet.create({

})


export default HomeScreen;