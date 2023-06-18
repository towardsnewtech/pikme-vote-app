import React from 'react'
import {
    Image,
    StyleSheet,
    View,
    Text,
    Animated 
} from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
import GraduallyAppearingText from '../../shared/ui/GraduallyAppearingText';

const contestImage = require("../../assets/images/onboarding/contest.png");
const entryImage = require("../../assets/images/onboarding/entry.png");

const styles = StyleSheet.create({
    container: {
        width: 400,
        position: 'relative'
    },
    contestImage: {
        alignSelf: 'center'
    },
    linearBackground: {
        alignItems: 'center',
        width: '100%',
        position: 'absolute',
        bottom: 0,
        paddingBottom: 70
    },
    titleLabel: {
        color: 'white',
        fontSize: 26,
        fontWeight: "700",
        textAlign: 'center',
    },
    descText: {
        color: 'lightgray',
        width: '80%',
        alignSelf: 'center',
        textAlign: 'center',
        fontSize: 20,
        lineHeight: 30
    },
    overView: {
        position: 'absolute',
        alignSelf: 'center',
        top: 150
    },
    overImage: {

    },
    textView: {
        borderColor:'red',
        borderWidth: 1,
        textAlign: 'center',
        width: 300
    }
})

const CarouselTwo = () => {
    const translateY = React.useRef(new Animated.Value(100)).current;
    const scale = React.useRef(new Animated.Value(0.1)).current;
    const opacity = React.useRef(new Animated.Value(0)).current;
    const translateX = React.useRef(new Animated.Value(-200)).current;

    React.useEffect(() => {
        Animated.parallel([
            Animated.timing(translateX, {
                toValue: 1,
                duration: 500,
                useNativeDriver: true
            })
        ]).start();

        Animated.parallel([
            Animated.timing(opacity, {
                toValue: 1,
                duration: 1000,
                useNativeDriver: true,
            })
        ]).start();

        Animated.parallel([
            Animated.timing(translateY, {
              toValue: 0, // Adjust this value to control the zoom out effect
              duration: 1000, // Adjust this value to control the animation duration
              delay: 1000,
              useNativeDriver: true,
            }),
            Animated.timing(scale, {
              toValue: 1, // Adjust this value to control the zoom out scale
              duration: 1000, // Adjust this value to control the animation duration
              delay: 1000,
              useNativeDriver: true,
            }),
          ]).start();
    }, []);

    return (
        <View
            style={styles.container}
        >
            <Animated.Image 
                source={contestImage} 
                style={{ ...styles.contestImage,
                    opacity: opacity
                }}
            />
            <View 
                style={styles.overView}
            >
                <Animated.Image
                    source={entryImage}
                    style={{ transform: [
                        { translateY: translateY },
                        { scale: scale },
                    ]}}
                />
                {/* <Image
                    source={entryImage}
                    style={styles.overImage}
                /> */}
            </View>
            <Animated.View style={{ transform: [ {translateX: translateX} ] }}>
                <LinearGradient 
                    colors={['rgba(27,32,47,0.97)', 'rgb(27,32,47)']}
                    start={{x: 0 , y: 0}}
                    end={{x:0, y:1}}
                    style={styles.linearBackground}
                >
                    <GraduallyAppearingText fontSize={24} type="two">
                        Join the Contests with Huge Pool
                    </GraduallyAppearingText>
                    <GraduallyAppearingText
                        type="two"
                        fontSize={18}
                        color={'rgba(255, 255, 255, 0.7)'}
                        fontWeight={'500'}
                    >
                        Share your photos or buy something awesome!
                    </GraduallyAppearingText>
                </LinearGradient>
            </Animated.View>
        </View>
    )
}

export default CarouselTwo