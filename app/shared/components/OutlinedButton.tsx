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
    outlinedButtonContainer: {
        padding: 1,
        borderRadius: 10,
        alignSelf: 'center',
        color: 'white',
        overflow: 'hidden'
    },
    buttonContainer: {
        color: 'white',
        borderRadius: 10,
        paddingTop: 14,
        paddingBottom: 14,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 15,
        backgroundColor: '#283563',
    },
    textcolor: {
        color: 'white',
        fontSize: 20
    }
})

interface IOutlinedButton {
    text: string
    width: string
    onPress: () => void
}

const OutlinedButton = ({
    text,
    width,
    onPress
}: IOutlinedButton) => {
    return (
        <LinearGradient
            colors={['#7AB5EC', '#1677CF' ]}
            style={{
                ...styles.outlinedButtonContainer,
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

OutlinedButton.defaultProps = {
    width: '80%',
    onPress: () => {  }
}
export default OutlinedButton