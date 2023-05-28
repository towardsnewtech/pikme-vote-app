import React from 'react'
import {
    StyleSheet,
    SafeAreaView,
    View,
    Image,
    ImageBackground
} from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import {BlurView} from '@react-native-community/blur';

const catImage = require("../../assets/images/auth/cat.png");

const styles = StyleSheet.create({
    container: {
        flexDirection:'column',
        alignItems: 'center',
        minHeight: '100%',
        position: 'relative'
    },
    linearBackground: {
        alignItems: 'center',
        height: '100%',
        width: '100%',
    },
    catImage: {
        marginTop: 150
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

    return (
        <SafeAreaView>
            <View style={styles.container}>
                <LinearGradient
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                    colors={['#1b202f', '#1b202f' ]}
                    style={styles.linearBackground}
                >
                    <Image 
                        source={catImage} 
                        style={styles.catImage}
                    />
                   <BlurView
                        blurType="light"
                        blurAmount={20}
                        blurRadius={2}
                        downsampleFactor={10}
                        style={styles.blurBackground}
                        overlayColor={'rgba(0, 0, 0, .1)'}
                    />
                    {children}
                </LinearGradient>
            </View>
        </SafeAreaView>
    )
}

export default MainLayout