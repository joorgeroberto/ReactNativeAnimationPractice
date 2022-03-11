import React, { useEffect, useRef } from 'react';
import { View, Animated, StyleSheet } from 'react-native';


const Ball = () => { 
  const position = useRef(new Animated.ValueXY()).current;

  useEffect(() => {
    Animated.spring(position, { 
      toValue: { x: 200, y: 500 }, 
      useNativeDriver: false
    } 
    ).start();
  }, [])

  return (
    <Animated.View style={position.getLayout()}>
      <View style={styles.ball} />
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  ball: {
    width: 100,
    height: 100,
    borderRadius: 100,
    borderColor: 'black',
    backgroundColor: 'black'
  }
})

export default Ball;