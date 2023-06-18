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

const signatureImage = require("../../assets/images/onboarding/signature.png");
const dollarImage = require("../../assets/images/onboarding/dollar.png");

const styles = StyleSheet.create({
    container: {
        width: 400,
        position: 'relative'
    },
    signatureImage: {
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
        width: '80%',
        textAlign: 'center'
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

    }
})

const CarouselThree = () => {
    const translateY = React.useRef(new Animated.Value(100)).current;
    const scale = React.useRef(new Animated.Value(0.3)).current;

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
                source={signatureImage} 
                style={styles.signatureImage}
            />
            <View 
                style={styles.overView}
            >
                <Animated.Image
                    source={dollarImage}
                    style={{ transform: [
                        { translateY: translateY },
                        { scale: scale },
                    ]}}
                />
            </View>
            <LinearGradient 
                colors={['transparent', '#1b202f']}
                start={{x: 0 , y: 0}}
                end={{x:0, y:1}}
                style={styles.linearBackground}
            >
                <GraduallyAppearingText type="three">Win Huge Prizes</GraduallyAppearingText>
                <GraduallyAppearingText
                    type="three"
                    fontSize={18}
                    color={'rgba(255, 255, 255, 0.7)'}
                    fontWeight={'500'}
                >Share your photos or buy something awesome.
                </GraduallyAppearingText>
            </LinearGradient>
        </View>
    )
}

export default CarouselThree