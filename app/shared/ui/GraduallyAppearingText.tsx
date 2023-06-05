import React, { useEffect, useRef } from 'react';
import { Animated, Text, View } from 'react-native';

const GraduallyAppearingText = ({children, fontSize, fontWeight, color, type}: any) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const scale = React.useRef(new Animated.Value(type == "two" ? 0.7 : 0.1)).current;

  useEffect(() => {
    Animated.parallel([
        Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 2000, // Adjust the duration as needed
            useNativeDriver: true,
        }),
        Animated.timing(scale, {
          toValue: 1, // Adjust this value to control the zoom out scale
          duration: 1000, // Adjust this value to control the animation duration
          delay: type == "two" ? 500 : 0,
          useNativeDriver: true,
        }),
      ]).start();
  }, []);

  return (
    <Animated.Text
        style={{
            opacity: fadeAnim,
            fontSize: fontSize,
            fontWeight: fontWeight,
            width: '70%',
            textAlign: 'center',
            color: color,
            transform: [
                { scale: scale },
            ]
        }}
    >
    {children}
    </Animated.Text>
  );
};

export default GraduallyAppearingText;

GraduallyAppearingText.defaultProps = {
    fontSize : 24,
    fontWeight: 'bold',
    color: 'white'
}