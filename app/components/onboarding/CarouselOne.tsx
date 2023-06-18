import React from 'react'
import {
    Image,
    StyleSheet,
    View,
    Text,
    Animated,
    Easing,
    PanResponder
} from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
import DisappearingText from '../../shared/ui/DisappearingText';

const phoneImage = require("../../assets/images/onboarding/phone.png");
const carImage = require("../../assets/images/onboarding/car.png");

const styles = StyleSheet.create({
    container: {
        width: 400,
        position: 'relative'
    },
    phoneImage: {
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
        fontWeight: "700"
    },
    descText: {
        color: 'lightgray',
        width: '70%',
        alignSelf: 'center',
        textAlign: 'center',
        fontSize: 18,
        lineHeight: 30
    },
    overView: {
        position: 'absolute',
        alignSelf: 'center',
        top: 80
    },
    overImage: {

    }
})

interface ICarouselOne {
    navigation: any
    handleStep : (step: number) => void
    step: number
}

const CarouselOne = ({
    navigation,
    handleStep,
    step
}: ICarouselOne) => {
    const [visibleImage, setVisibleImage] = React.useState(true)
    const [visibleText, setVisibleText] = React.useState(true)

    const [rotation] = React.useState(new Animated.Value(0));

    const panResponder = PanResponder.create({
        onStartShouldSetPanResponder: () => true,
        onPanResponderMove: (_, gesture) => {
            const { dx } = gesture;
            if(dx < 0 ) return 

            if(dx > 230) {
                setVisibleImage(false)
                setVisibleText(false)

                setTimeout(() => {
                    handleStep(step+1)
                }, 1500)
                return 
            }
            rotation.setValue(dx);
        },
        onPanResponderRelease: () => {
            Animated.spring(rotation, {
                toValue: 0,
                useNativeDriver: true,
            }).start();
        },
    });

    const animatedStyle = {
        transform: [{ translateX: rotation }, { rotate: rotation.interpolate({
            inputRange: [0, 300],
            outputRange: ['0deg', '45deg'],
        }) }],
    };

    return (
        <View
            style={styles.container}
        >
            <Image 
                source={phoneImage} 
                style={styles.phoneImage}
            />
            <View 
                style={styles.overView}
            >
                <Animated.View
                    style={[animatedStyle]}
                    {...panResponder.panHandlers}
                >
                    { visibleImage && <Image 
                        source={carImage}
                        style={styles.phoneImage}
                    /> }
                </Animated.View>
            </View>
            <LinearGradient 
                colors={['#1b202fb8', '#1b202f']}
                start={{x: 0 , y: 0}}
                end={{x:0, y:1}}
                style={styles.linearBackground}
            >
                {
                    visibleText ? <>
                        <Text style={styles.titleLabel}>Vote For the Best Picture!</Text>
                        <Text style={styles.descText}>Surf through Contests and Swipe Right for the Best Picture</Text>
                    </>
                    : <>
                        <DisappearingText>
                            Vote For the Best Picture!
                        </DisappearingText>
                        <DisappearingText
                            fontSize={18}
                            color={'rgba(255, 255, 255, 0.4)'}
                            fontWeight={'500'}
                        >
                            Surf through Contests and Swipe Right for the Best Picture
                        </DisappearingText>
                    </>
                }
            </LinearGradient>
        </View>
    )
}

export default CarouselOne