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
        borderRadius: 15,
        alignSelf: 'center',
        borderWidth: 1,
        borderColor: '#4775a4',
        padding: 10
    },
    buttonContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'transparent'
    },
    textcolor: {
        color: 'white',
        fontSize: 18
    }
})

interface IFilledButton {
    text: string
    width: string
    onPress: () => void
}

const _OutLinedButton = ({
    text,
    width,
    onPress
}: IFilledButton) => {
    return (
        <LinearGradient
            colors={['transparent', 'transparent' ]}
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

_OutLinedButton.defaultProps = {
    width: '80%',
    onPress: () => {  }
}
export default _OutLinedButton