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
        paddingBottom: 20
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

    React.useEffect(() => {
        Animated.parallel([
            Animated.timing(translateY, {
              toValue: 0, // Adjust this value to control the zoom out effect
              duration: 1000, // Adjust this value to control the animation duration
              useNativeDriver: true,
            }),
            Animated.timing(scale, {
              toValue: 1, // Adjust this value to control the zoom out scale
              duration: 1000, // Adjust this value to control the animation duration
              useNativeDriver: true,
            }),
          ]).start();
    }, []);

    return (
        <View
            style={styles.container}
        >
            <Image 
                source={contestImage} 
                style={styles.contestImage}
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
            <LinearGradient 
                colors={['transparent', '#2A3E83']}
                start={{x: 0 , y: 0}}
                end={{x:0, y:1}}
                style={styles.linearBackground}
            >
                <GraduallyAppearingText>
                    Join the Contests with Huge Pool
                </GraduallyAppearingText>
                <GraduallyAppearingText
                    fontSize={18}
                    color={'rgba(255, 255, 255, 0.4)'}
                    fontWeight={'500'}
                >
                    Share your photos or buy something awesome.
                </GraduallyAppearingText>
            </LinearGradient>
        </View>
    )
}

export default CarouselTwo