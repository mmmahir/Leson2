import React from "react";
import { Text,StyleSheet,View ,FlatList,Button,TouchableOpacity} from "react-native";




const ProfileScreen = (props) => {
    return <View>
        <Button title="Go back" onPress={() => props.navigation.goBack("Home")} />
    </View>;
};

const style = StyleSheet.create({

})


export default ProfileScreen;