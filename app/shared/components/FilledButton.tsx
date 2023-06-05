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
        alignSelf: 'center'
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

interface IFilledButton {
    text: string
    width: string
    radius: number,
    pt: number,
    pb: number,
    pl: number,
    pr: number,
    onPress: () => void,
    txtColor: string,
    ftsize: number,
    ftweight: "normal" | "bold" | "100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900" | undefined,
    bgColor: Array<string>,
    disabled: boolean
}

const FilledButton = ({
    text,
    width,
    radius,
    pt,
    pb,
    pl,
    pr,
    onPress,
    txtColor,
    ftsize,
    ftweight,
    bgColor,
    disabled
}: IFilledButton) => {
    const disableMode = ['#2a3a54', '#1e3453']

    return (
        <LinearGradient
            colors={disabled ? disableMode : bgColor}
            style={{
                ...styles.filledButtonContainer,
                width: width,
                borderRadius: radius,
                paddingTop: pt,
                paddingBottom: pb,
                paddingLeft: pl,
                paddingRight: pr
            }}
        >
            <TouchableOpacity
                onPress={onPress}
            >
                <View
                    style={styles.buttonContainer}
                >
                    <Text style={{
                        color: txtColor,
                        fontSize: ftsize,
                        fontWeight: ftweight
                    }}>{text}</Text>
                </View>
            </TouchableOpacity>
        </LinearGradient>
    )
}

FilledButton.defaultProps = {
    width: '80%',
    radius: 5,
    pt: 14,
    pb: 14,
    pl: 0,
    pr: 0,
    txtColor: 'white',
    ftsize: 20,
    ftweight: 'normal',
    bgColor: ['#7AB5EC', '#1677CF' ],
    onPress: () => {  },
    disabled: false
}
export default FilledButton