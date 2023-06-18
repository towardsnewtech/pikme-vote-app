import React from 'react'
import {
    ScrollView,
    StyleSheet,
    TextInput
} from 'react-native'
import _Text from '../../shared/components/_Text'

const styles = StyleSheet.create({
    amount: {
        color: 'white',
        fontSize: 60,
        textAlign: 'center',
        marginTop: 10
    }
})

const Balance = ({balance, amount, setAmount}: any) => {

    return (
        <ScrollView>
            <_Text
                name={`$${balance}`}
                align='center'
                mt={10}
                ftsize={24}
            />
            <_Text
                name='Withdraw amount'
                align='center'
                mt={150}
            />
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