import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Accueil  from './app/screens/accueil';
import Wishlist from './app/screens/wishlist';
import React, {Component} from 'react';
import { View, TouchableOpacity, ActivityIndicator, ScrollView, TextInput, FlatList, Keyboard, StyleSheet } from 'react-native';
import { Header } from 'react-native-elements';
import SearchBookCard from './app/components/Booklist';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default class Search extends Component {
  constructor(props) {
    super(props);
    this.books = [],
    this.state = {
        bookTitle: '',
        isLoading: false,
        errorMessage: '',
    };
  }
  SearchBook() {
    Keyboard.dismiss();
    this.setState({ isLoading: true })
    const bookTitle = this.state.bookTitle;
    for (var i=0; i<bookTitle.length; i++) {
      if (bookTitle[i] == ' ') {
        bookTitle[i] = '+';
      }
    }
    if (bookTitle.length != 0) {
      fetch('https://www.googleapis.com/books/v1/volumes?q=' + bookTitle)
      .then((response) => response.json())
      .then((responseData) => {
          if (responseData.items) {
            this.books = responseData.items;
            this.setState({ isLoading: false });
            console.log(responseData.items);
          } else {
              this.setState({ errorMessage: 'No results found', isLoading: false });
          }
      })
      .catch(error =>
          this.setState({
              isLoading: false,
              errorMessage: error 
          }))
    }
    else {
      alert('You must write a book title !');
    }
  }
  
  keyExtractor = (item, index) => index.toString()

  renderItem = ({ item }) => (
      <SearchBookCard
      title={item.volumeInfo.title}
      vote={item.volumeInfo.averageRating}
      description={item.volumeInfo.description}
      date={item.volumeInfo.publishedDate}/>
  )

  render() {
    if (this.state.isLoading) {
      return (
        
        <SafeAreaProvider>
        <View style={styles.container}>
          <Header
            centerComponent={
              <TextInput
                placeholder='Search..'
                style={styles.searchInput}
                placeholderTextColor='#7F7F7F'
                returnKeyType='search'
                onChangeText={ (bookTitle) => this.setState({bookTitle})} />}
            placement='left'
            rightComponent={{ icon: 'search', color: '#FFAEA5', onPress: () => this.SearchBook() }}
            statusBarProps={{ translucent: true }}
            backgroundColor='#ffffff'
          />
          <View style={{marginTop: 15, alignItems: 'center'}}>
            <ActivityIndicator size="large" color="#e74c3c" />
          </View>
        </View>
        </SafeAreaProvider>
      );
    }
    else {
      return (
        <SafeAreaProvider>
        <View style={styles.container}>
          <Header
            centerComponent={
              <TextInput
                placeholder='Search..'
                style={styles.searchInput}
                placeholderTextColor='#7F7F7F'
                returnKeyType='search'
                onChangeText={ (bookTitle) => this.setState({bookTitle})} />}
            placement='left'
            rightComponent={{ icon: 'search', color: '#e74c3c', onPress: () => this.SearchBook() }}
            statusBarProps={{ translucent: true }}
            backgroundColor='#ffffff'
          />
          <ScrollView>
            <FlatList
              keyExtractor={this.keyExtractor}
              data={this.books}
              renderItem={this.renderItem}
            />
          </ScrollView>
        </View>
        </SafeAreaProvider>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: 'white',
  },
  textInput: {
    borderColor: '#FFAEA5', 
    borderWidth: 1,
    borderRadius: 15,
    padding: 10,  
    color: 'black', 
    backgroundColor: 'white',
  }
});
// const Stack = createNativeStackNavigator();

//  export default function App() {
//    return (
//      <NavigationContainer>
//          <Stack.Navigator initialRouteName="Accueil">
//            <Stack.Screen name="Accueil" component={Accueil} />
//            <Stack.Screen name="Wishlist" component={Wishlist} />
//        </Stack.Navigator>
//    </NavigationContainer>
//    );
// }


// export default class Example extends Component {
  
//   constructor() {
//          super();
//          this.state = {
//             dataSource: []
//          };   
//   }

//   renderItem = ({item})=> {
//     return (
//       <View style={{ flex:1, flexDirection: 'row',}}>
//       {/* <Image style={{ width:100, height: 100 }} source={{uri: item.imageLinks.thumbnail}}/>
//       <View style={{ flex:1, justifyContent: 'center',}}>
//           <Text>
//               {item.volume_info.title}
//           </Text>
//           <Text>
//               {item.volume_info.authors}
//           </Text>
//           <Text>
//               {item.volume_info.publishedDate}
//           </Text> 
//     </View>*/}
//     {item.volumeInfo.title}

//   </View>
//       )
//   }


//   componentDidMount() {
//        const url = "https://www.googleapis.com/books/v1/volumes?q=manga";
//        fetch(url).then((response)=>response.json())
//                  .then((responseJson)=> {
//                    this.setState({
//                      dataSource : responseJson
//                    })
//                    console.log(this.state.dataSource);
//                    console.log(this.state.dataSource.items[0].volumeInfo.title)
//                   })
//                   .catch((error)=> {
//                     console.log(error);
//                   })      
//   }


//   render() {
//      return (
//        <View> 
//            <FlatList 
//             data={this.state.dataSource}
//             renderItem={this.renderItem}
//             />
//             {(this.state.dataSource[0])}
//        </View>
//         )

//   }
// }


// const styles = StyleSheet.create({
//   container: {
//     flex : 1,
//     justifyContent : 'center',
//     alignItems : 'center',
//     backgroundColor : '#F5FCFF',
//   },
// });
