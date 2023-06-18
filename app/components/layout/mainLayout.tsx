import React from 'react'
import {
    StyleSheet,
    SafeAreaView,
    View,
    Image,
    ImageBackground,
    useWindowDimensions
} from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
// import {BlurView} from '@react-native-community/blur';

const catImage = require("../../assets/images/auth/cat.png");
const catBlurImage = require("../../assets/images/auth/catblurimg.png");

const styles = StyleSheet.create({
    container: {
        flexDirection:'column',
        alignItems: 'center'
    },
    linearBackground: {
        alignItems: 'center',
        position: 'relative',
        width: '100%',
        height: '100%'
    },
    catImage: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%'
    },
    blurBackground: {
        top: 0,
        left: 0,
        position: 'absolute',
        width: '100%',
        height: '100%'
    }
})

const MainLayout = ({
    children
}: any) => {
    const { width, height } = useWindowDimensions()

    return (
        // <SafeAreaView>
            <View style={styles.container}>
                <LinearGradient
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                    colors={['#1b202f', '#1b202f' ]}
                    style={styles.linearBackground}
                >
                    <Image 
                        source={catBlurImage} 
                        style={styles.catImage}
                    />
                    {children}
                </LinearGradient>
            </View>
        // </SafeAreaView>
    )
}

export default MainLayout