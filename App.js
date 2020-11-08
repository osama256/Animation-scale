import { View, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import React from 'react';
import Animated, {useSharedValue, useAnimatedStyle, withTiming} from 'react-native-reanimated'
const App: () => React$Node = () => {

  const animation = useSharedValue(1)

  const animationStyle = useAnimatedStyle(() => {
    return{
    transform:[
      {
        scale: withTiming(animation.value,{
          duration: 1000
        },() => {
          animation.value =1
        })
      }
    ]
  }
  })
  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback  onPress={() => {
        animation.value = 1.5
      }}>
        <Animated.View style={[styles.box,animationStyle]} />
      </TouchableWithoutFeedback>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  box: {
    width: 200,
    height: 200,
    backgroundColor: '#631d94'
  }
});

export default App;