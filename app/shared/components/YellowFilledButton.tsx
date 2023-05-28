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
    filledButtonContainer: {
        paddingTop: 14,
        paddingBottom: 14,
        borderRadius: 10,
        alignSelf: 'center'
    },
    buttonContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#1E1E1E',
        gap: 15
    },
    textcolor: {
        color: '#1E1E1E',
        fontSize: 20,
        fontWeight: '700'
    }
})

interface IYellowFilledButton {
    text: string
    width: string
    onPress: () => void
}

const YellowFilledButton = ({
    text,
    width,
    onPress
}: IYellowFilledButton) => {
    return (
        <LinearGradient
            colors={['#D0A44A', '#FAD27D', '#E3AA42' ]}
            style={{
                ...styles.filledButtonContainer,
                width: width
            }}
        >
            <TouchableOpacity
                onPress={onPress}
            >
                <View
                    style={styles.buttonContainer}
                >
                    <Text style={styles.textcolor}>{text}</Text>
                </View>
            </TouchableOpacity>
        </LinearGradient>
    )
}

YellowFilledButton.defaultProps = {
    width: '80%',
    onPress: () => {  }
}
export default YellowFilledButton