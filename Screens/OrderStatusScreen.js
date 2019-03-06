import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

class OrderStatus extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Order Status</Text>
      </View>
    );
  }
}

export default OrderStatus

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
