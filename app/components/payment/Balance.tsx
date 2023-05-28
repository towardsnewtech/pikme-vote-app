import React from 'react'
import {
    ScrollView,
    StyleSheet,
    TextInput
} from 'react-native'

const styles = StyleSheet.create({
    amount: {
        color: 'white',
        fontSize: 60,
        textAlign: 'center',
        marginTop: 100
    }
})

const Balance = ({amount, setAmount}: any) => {

    return (
        <ScrollView>
            <TextInput
                value={`$${amount}`}
                onChangeText={val => setAmount(Number(val.slice(1, val.length))) }
                style={styles.amount}
                placeholderTextColor="white"
                placeholder='AMOUNT'
                keyboardType='numeric'
            />
        </ScrollView>
    )
}

export default Balance