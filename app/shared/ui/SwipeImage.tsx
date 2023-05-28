import React, { useState, useRef } from 'react';
import { View, Image, PanResponder, Animated } from 'react-native';

const SwipeImage = ({imagePath, handleSelect, handleAnimationEnded}: any) => {
  const pan = useRef(new Animated.ValueXY()).current;
  const [originX, setOriginX] = useState(0);

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: Animated.event(
      [
        null,
        { dx: pan.x, dy: pan.y }
      ],
      { useNativeDriver: false }
    ),
    onPanResponderRelease: (e, gesture) => {
      handleSelect(true)
      setTimeout(() => {
        handleAnimationEnded()
      }, 1000)
      
      if (gesture.dx > 150) {
        // Perform animation when dragged to the right
        Animated.timing(pan, {
          toValue: { x: 0, y: 100 },
          duration: 1000,
          useNativeDriver: false
        }).start();
      } else {
        // Reset to the original position
        Animated.spring(pan, {
          toValue: { x: originX, y: 0 },
          useNativeDriver: false
        }).start();
      }
    }
  });

  const rotate = pan.x.interpolate({
    inputRange: [-200, 0, 200],
    outputRange: ['-30deg', '0deg', '30deg']
  });

  return (
    <Animated.View
        style={{
            transform: [{ translateX: pan.x }, { rotate }, {translateY: pan.y}],
        }}
        {...panResponder.panHandlers}
        onLayout={(event) => {
            // Get the initial x-coordinate of the image
            const { x } = event.nativeEvent.layout;
            setOriginX(x);
        }}
    >
        { imagePath && <Image
            source={imagePath}
        />}
    </Animated.View>
  );
};

export default SwipeImage;
