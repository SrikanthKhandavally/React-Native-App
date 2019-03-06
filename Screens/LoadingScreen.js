import React from 'react';
import { StyleSheet, Text, View, Image, ActivityIndicator, Button } from 'react-native';
import Expo from 'expo'


class Login extends React.Component {


    render() {
        return (
            <Button title="signin" onPress = {() => this.signIn()}/>
        );
    }
}


export default Login

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
