import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, TextInput, Platform, StatusBar, ScrollView, Image,
   Dimensions, navigation, navigate, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
import GlobalStyles from '../GlobalStyles';
import Category from './Components/Search/Category'
import Eatables from './Components/Search/Eatables';
import Saved from '../Screens/SavedScreen'

const {height, width} = Dimensions.get('window');
class Search extends React.Component {
  componentWillMount(){
    this.startHeaderHeight = 80;
    if(Platform.OS == 'android'){
      this.startHeaderHeight =  100 + StatusBar.currentHeight;
    }

  }
  render() {
    return (
      <SafeAreaView style = { {flex:1} }>
        <View style = {{ flex:1 }}>
          <View style = {{height: this.startHeaderHeight, backgroundColor: 'white', borderBottomWidth: 1, borderBottomColor: '#dddddd'}}>
            <View style = {{flexDirection: 'row', padding: 5, justifyContent: 'space-around', backgroundColor: 'white', marginHorizontal: 30, shadowOffset:{width:0, height:0}, shadowColor: 'black', shadowOpacity: 0.2, elevation: 1, marginTop: Platform.OS == 'android' ? 50 : null}}>
              <Icon name="ios-search" size = {20} />
              <TextInput placeholder = "What would you like to cook?" underlineColorAndroid = "transparent" placeholderTextColor = "grey" style = {{flex:1, fontWeight: '700', backgroundColor: 'white'}} />
            </View>
          </View>
          <ScrollView scrollEventThrottle = {16}>
            <View style = {{flex: 1, backgroundColor: 'white', paddingTop: 20}}>
              <Text style = {{fontSize:24, fontWeight: '700', paddingHorizontal: 20}}>
                What can we help you find, Srikanth?
              </Text>
              <View style={{height: 130,  marginTop: 20}}>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                  <Category imageUri={require('../assets/vegetables.jpg')} name="Vegetables"/>
                  <Category imageUri={require('../assets/dairyProducts.jpg')} name="Milk Products"/>
                  <Category imageUri={require('../assets/staples.jpg')} name="Staples"/>
                </ScrollView>              
              </View>
              <Text style = {{fontSize:24, fontWeight: '700', paddingHorizontal: 20}}>
                What humans eat :P
              </Text>
              <View style={{paddingLeft: 10, paddingTop: 20, flexDirection:'row', flexWrap: 'wrap', justifyContent:'space-evenly'}}>
                <TouchableOpacity onPress={()=> this.props.navigation.navigate('Eatables') }>
                <Eatables imageUri = {require('../assets/staples.jpg')} />
                </TouchableOpacity>
                <Eatables imageUri = {require('../assets/staples.jpg')} />
                <Eatables imageUri = {require('../assets/vegetables.jpg')} />
                <Eatables imageUri = {require('../assets/dairyProducts.jpg')} />
                <Eatables imageUri = {require('../assets/staples.jpg')} />
                <Eatables imageUri = {require('../assets/dairyProducts.jpg')} />
                <Eatables imageUri = {require('../assets/staples.jpg')} />
                <Eatables imageUri = {require('../assets/dairyProducts.jpg')} />
              </View>
             </View>
          </ScrollView>
         </View>
      </SafeAreaView>
    );
  }
}

export default Search

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
