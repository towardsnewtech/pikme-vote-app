import React from 'react'

import {
    StyleSheet,
    View,
    Image,
    Text,
    KeyboardAvoidingView,
    Platform
} from 'react-native'
import LinearGradient from 'react-native-linear-gradient'


const cameraImage = require("../../assets/images/auth/camera.png");

const styles = StyleSheet.create({
    borderGradientContainer: {
        width: '100%',
        position: 'absolute',
        bottom: 0,
        left: 0,
        padding: 1,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
    },
    backgroundGradientContainer: {
        width: '100%',
        height: '100%',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingBottom: 40
    },
    cameraImageContainer: {
        paddingTop: 30,
        width: '100%',
        alignItems: 'center'
    },
    welcomeText: {
        textAlign: 'center',
        color: 'white',
        fontSize: 30,
        fontWeight: 'bold',
        paddingTop: 20
    },
    descText: {
        textAlign: 'center',
        color: '#919DA8',
        fontSize: 18,
        paddingTop: 4
    }
})

const WelcomeContainer = ({
    children
}: any) => {
    return (
        <LinearGradient
            start={{ x: 0, y: 0 }}
            end={{ x: 0, y: 1 }}
            colors={['#FFFFFF', '#2A3E83']}
            style={styles.borderGradientContainer}
        >
            <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
                <LinearGradient
                    style={styles.backgroundGradientContainer}
                    colors={['#101E4F', '#2A3E83']}
                >
                    <View
                        style={styles.cameraImageContainer}
                    >
                        <Image source={cameraImage} />
                    </View>
                    <View>
                        <Text
                            style={styles.welcomeText}
                        >
                            Welcome to PikMe!
                        </Text>
                    </View>
                    <View>
                        <Text
                            style={styles.descText}
                        >
                            Get paid to share your photos
                        </Text>
                    </View>
                    {children}
                </LinearGradient>
            </KeyboardAvoidingView>
        </LinearGradient>
    )
}

export default WelcomeContainer;