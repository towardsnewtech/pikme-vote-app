import React, { useEffect, useRef } from 'react';
import { Animated, StyleSheet } from 'react-native';

const DisappearingText = ({children, fontSize, fontWeight, color}: any) => {
  const position = useRef(new Animated.Value(0)).current;
  const opacity = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    // Animate the position and opacity when the component mounts
    Animated.parallel([
      Animated.timing(position, {
        toValue: 1,
        duration: 1500, // Adjust the duration as needed
        useNativeDriver: true,
      }),
      Animated.timing(opacity, {
        toValue: 0,
        duration: 1500, // Adjust the duration as needed
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  return (
    <Animated.Text
      style={[
        {
          fontSize: fontSize,
          fontWeight: fontWeight,
          width: '70%',
          textAlign: 'center',
          color: color,
        },
        {
          transform: [
            {
              translateX: position.interpolate({
                inputRange: [0, 1],
                outputRange: [0, 100], // Adjust the destination position as needed
              }),
            },
            {
              translateY: position.interpolate({
                inputRange: [0, 1],
                outputRange: [0, -20], // Adjust the destination position as needed
              }),
            },
          ],
          opacity: opacity,
        },
      ]}
    >
      {children}
    </Animated.Text>
  );
};

export default DisappearingText;

DisappearingText.defaultProps = {
  fontSize : 24,
  fontWeight: 'bold',
  color: 'white'
}