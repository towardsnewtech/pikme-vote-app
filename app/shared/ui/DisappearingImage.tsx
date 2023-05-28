import React, { useEffect, useRef } from 'react';
import { View, Image, Animated } from 'react-native';

const DisappearingImage = ({imagePath}: any) => {
  const fadeAnimation = useRef(new Animated.Value(1)).current;
  const scale = React.useRef(new Animated.Value(1)).current;
  const translateY = React.useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const fadeOut = () => {
        Animated.parallel([
            Animated.timing(translateY, {
                toValue: -400, // Adjust this value to control the zoom out effect
                duration: 1000, // Adjust this value to control the animation duration
                useNativeDriver: true,
            }),
            Animated.timing(scale, {
                toValue: 0, // Adjust this value to control the zoom out scale
                duration: 1000, // Adjust this value to control the animation duration
                useNativeDriver: true,
            }),
            Animated.timing(fadeAnimation, {
                toValue: 0,
                duration: 1000, // Adjust the duration as needed
                useNativeDriver: true,
            })
          ]).start();
    };

    fadeOut();
  }, [fadeAnimation]);

  return (
    <>
    { imagePath && <Animated.Image
        source={imagePath}
        style={{
            opacity: fadeAnimation,
            transform: [{ scale: scale }, { translateY: translateY }]
        }}
    />  }
    </>
  );
};

export default DisappearingImage;
