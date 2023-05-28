import React from 'react'

import { StyleSheet, View, Text, TextInput } from 'react-native'

import LinearGradient from 'react-native-linear-gradient'

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '70%',

        position: 'relative'
    },
    borderGradientContainer: {
        bottom: 0,
        left: 0,
        paddingTop: 1,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
    },
    backgroundGradientContainer: {
        width: '100%',
        height: '100%',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        padding: 30
    },
    historyTitle: {
        color: '#8893A8',
        fontSize: 18,
        paddingBottom: 20,
        paddingLeft: 10
    },
    carddetails: {
        gap: 20
    },
    input: {
        backgroundColor: 'transparent',
        borderWidth: 1,
        borderColor: '#999',
        borderRadius: 10,
        padding: 10,
        paddingLeft: 20
    }
})

const CardDetails = () => {

    return (
        <View style={styles.container}>
            <LinearGradient
                start={{ x: 0, y: 0 }}
                end={{ x: 0, y: 1 }}
                colors={['#FFFFFF', '#2A3E83']}
                style={styles.borderGradientContainer}
            >
                <LinearGradient
                    style={styles.backgroundGradientContainer}
                    colors={['#1b202f', '#1b202f']}
                >
                    <Text style={styles.historyTitle}>Card Details</Text>
                    <View style={styles.carddetails}>
                        <TextInput placeholder="0000 0000 0000 0000" style={styles.input} placeholderTextColor={'white'} />
                        <View
                            style={{
                                flexDirection: 'row',
                                justifyContent: 'space-between'
                            }}
                        >
                            <TextInput placeholder='10/25' placeholderTextColor={'white'} style={{ ...styles.input, width: '45%' }} />
                            <TextInput placeholder='100' placeholderTextColor={'white'} style={{ ...styles.input, width: '45%' }} />
                        </View>
                        <TextInput placeholder="John Smith" style={styles.input} placeholderTextColor={'white'} />
                    </View>
                </LinearGradient>
            </LinearGradient>
        </View>
    )
}

export default CardDetails