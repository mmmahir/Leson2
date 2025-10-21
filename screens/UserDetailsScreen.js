import React from "react";
import { Text,StyleSheet,View ,FlatList,Button,TouchableOpacity,Image} from "react-native";

class PostScreen extends React.Component {
    constructor(props) {
        super();
        this.state = {
            posts:[],
        };
    }
    async componentDidMount() {
        const data = await fetch("https://jsonplaceholder.typicode.com/posts");
        const jasonData = await data.json();
        this.setState({
            posts: jasonData,
        });
    }
    render() {
        const { posts } = this.state;
        return (
        <View >
            <Text>Post Screen </Text>
            <FlatList
                keyExtractor={posts => posts.id}
                data = {posts}
                initialNumToRender={10}
                renderItem={({item}) => (
                    <View> 
                        <Text>{item.title}</Text>
                        <Text>{item.body}</Text>
                    </View>
                )}
            />
        </View>

    );
    }
}





const style = StyleSheet.create({
    
})


export default PostScreen;