import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions, Button } from 'react-native';

const {height, width} = Dimensions.get('window')


class Eatables extends React.Component {
  render() {
    return (
        
        <View  style={{ width: width/2 - 20, height: 150, borderWidth: 0.5, borderColor: '#dddddd', paddingTop: 10 }}>

            <View style={{ flex: 1 }}>
                <Image style={{ flex: 1, width: null, height: null, resizeMode: 'cover' }} source={this.props.imageUri} />
            </View>

            <View style={{ flex: 1, alignItems:'flex-start', paddingLeft: 10, justifyContent: 'space-evenly' }}>
                <Text onClick={() => console.log("Hello")} style={{fontSize: 13, fontWeight:'800'}}>Kandipappu</Text>
                <Text style={{fontSize: 10, fontWeight:'700', float: 'right'}}>78/-</Text>
            </View>

        </View>
    );
  }
}


export default Eatables

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
