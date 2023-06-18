import * as React from 'react'

import {
    View,
    Text,
    Image,
    StyleSheet,
    TouchableOpacity
} from 'react-native'
import LinearGradient from 'react-native-linear-gradient'

const styles = StyleSheet.create({
    borderContainer: {
        padding: 1,
        width: '80%',
        borderRadius: 25,
    },
    circleButtonContainer: {
        paddingTop: 14,
        paddingBottom: 14,
        borderRadius: 25,
    },
    buttonContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        gap: 15
    },
    textcolor: {
        color: 'white',
        fontSize: 20
    }
})

interface ICircleButton {
    text: string
    icon: any
}

const CircleButton = ({
    text,
    icon
}: ICircleButton) => {
    return (
        <LinearGradient
            colors={['#FFFFFF', '#BEBEBE']}
            style={styles.borderContainer}
        >
            <LinearGradient
                colors={['#5C678E', '#071444']}
                style={styles.circleButtonContainer}
            >
                <View
                    style={styles.buttonContainer}
                >
                    <Image source={icon} />
                    <Text style={styles.textcolor}>{text}</Text>
                </View>
            </LinearGradient>
        </LinearGradient>
    )
}

export default CircleButton