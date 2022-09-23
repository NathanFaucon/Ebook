import React, {Component} from "react";
import { FlatList, SafeAreaView, StyleSheet, Text, View, Image } from "react-native";
import {GoogleBookSearch} from 'react-native-google-books';

require("dotenv").config();

{/* <GoogleBookSearch
apikey={process.env.REACT_APP_GOOGLE_API_KEY}
onResultPress={(book)=> console.log(book)}
/> */}



const SearchBookCard = () => {
    const renderItem = ({item}) => {
        return (
            <View style={{ flex:1, flexDirection: 'row',}}>
                <Image style={{ width:100, height: 100 }} source={{uri: item.imageLinks.thumbnail}}/>
                <View style={{ flex:1, justifyContent: 'center',}}>
                    <Text>
                        {item.volume_info.title}
                    </Text>
                    <Text>
                        {item.volume_info.averageRating}
                    </Text>
                    <Text>
                        {item.volume_info.description}
                    </Text>
                </View>
    
            </View>
        )
    }
    
    // function componentDidMount() {
    //     const url ='https://www.googleapis.com/books/v1/volumes?q=manga'
    //     fetch(url)
    //     .then((response)=>response.json())
    //     .then((responseJson)=> {
    //         this.setState({
    //             datasource: responseJson.book_array
    //         })
    //     })
    //     .catch((error)=> {
    //         console.log(error)
    //     })
    
    // }
       return (
           <View>
                
           </View>    
        );
       
    }

export default SearchBookCard;


