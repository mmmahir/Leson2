import React from "react";
import { Text,StyleSheet,View ,FlatList,Button,TouchableOpacity,Image} from "react-native";

class UserScreen extends React.Component {
    constructor() {
        super();
        this.state = {
            users:[],
        };
    }
    async componentDidMount() {
        const data = await fetch("https://jsonplaceholder.typicode.com/users");
        const jasonData = await data.json();
        this.setState({
            users: jasonData,
        });
    }
    render() {
        const { users } = this.state;
        return (
        <View >
            <Text>Users Screen </Text>
            <FlatList
                keyExtractor={users => users.id}
                data = {users}
                initialNumToRender={10}
                renderItem={({item}) => (
                    <View> 
                        <Text>{item.name}</Text>
                        <Text>{item.email}</Text>
                    </View>
                )}
            />
        </View>

    );
    }
}





const style = StyleSheet.create({
    
})


export default UserScreen;