import React from "react";
import { Text,StyleSheet,View ,FlatList,Button,TouchableOpacity,Image} from "react-native";




const Projects = (props) => {
    return <View>
        <View style={style.flex}>
            <View>
                <Text>Projects</Text>
            </View>
            <View>
                <Button title="View all" />
            </View>
        </View>
    </View>;
};

const style = StyleSheet.create({
flex:{
    flex:1
}

}
)


export default Projects;