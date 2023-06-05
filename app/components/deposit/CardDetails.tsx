import React from 'react'

import { StyleSheet, View, Text, TextInput } from 'react-native'
import _Text from '../../shared/components/_Text'
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
        color: 'white',
        backgroundColor: 'transparent',
        borderWidth: 1,
        borderColor: '#999',
        borderRadius: 10,
        padding: 10,
        paddingLeft: 20
    },
    inputComment: {
        position: 'absolute',
        top: -10,
        left: 15,
        zIndex: 1,
        paddingLeft: 3,
        paddingRight: 3
    }
})

const CardDetails = ({
    number, onChangeNumber,
    expireDate, onChangeExpireDate,
    cvv, onChangeCvv,
    name, onChangeName
}: any) => {

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
                        <View style={{ position: 'relative' }}>
                            <View style={{ ...styles.inputComment, backgroundColor: '#1b202f' }}>
                                <_Text
                                    name='Card Number'
                                    color='#999'
                                />
                            </View>
                            <TextInput
                                placeholder="0000 0000 0000 0000"
                                style={styles.input}
                                placeholderTextColor={'#999'}
                                onChangeText={onChangeNumber}
                                value={number}
                            />
                        </View>
                        <View
                            style={{
                                flexDirection: 'row',
                                justifyContent: 'space-between'
                            }}
                        >
                            <View style={{ position: 'relative', width: '50%' }}>
                                <View style={{ ...styles.inputComment, backgroundColor: '#1b202f' }}>
                                    <_Text
                                        name='Expiry Date'
                                        color='#999'
                                    />
                                </View>
                                <TextInput
                                    placeholder='10/25'
                                    placeholderTextColor={'#999'}
                                    style={{ ...styles.input, width: '90%' }}
                                    onChangeText={onChangeExpireDate}
                                    value={expireDate}
                                />
                            </View>
                            <View style={{ position: 'relative', width: '50%', alignItems: 'flex-end' }}>
                                <View style={{ ...styles.inputComment, backgroundColor: '#1b202f' }}>
                                    <_Text
                                        name='CVV'
                                        color='#999'
                                    />
                                </View>
                                <TextInput
                                    placeholder='100'
                                    placeholderTextColor={'#999'}
                                    style={{ ...styles.input, width: '90%' }}
                                    onChangeText={onChangeCvv}
                                    value={cvv}
                                />
                            </View>
                        </View>
                        <View style={{ position: 'relative' }}>
                            <View style={{ ...styles.inputComment, backgroundColor: '#1b202f' }}>
                                <_Text
                                    name="Cardholder's Full Name"
                                    color='#999'
                                />
                            </View>
                            <TextInput
                                placeholder="John Smith"
                                style={styles.input}
                                placeholderTextColor={'#999'}
                                onChangeText={onChangeName}
                                value={name}
                            />
                        </View>
                    </View>
                </LinearGradient>
            </LinearGradient>
        </View>
    )
}

export default CardDetails