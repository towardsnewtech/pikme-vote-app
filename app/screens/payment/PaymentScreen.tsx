import React from 'react'

import { StyleSheet, TextInput, View } from 'react-native'
import PaymentLayout from '../../components/layout/paymentLayout'
import FilledButton from '../../shared/components/FilledButton'
import Balance from '../../components/payment/Balance'
import Text from '../../shared/components/_Text'
import DebitCard from '../../components/payment/DebitCard'
import AddCard from '../../components/payment/AddCard'
import DebitCardAdded from '../../components/payment/DeditCardAdded'
import PaymentMethod from '../../components/payment/PaymentMethod'

const styles = StyleSheet.create({
    buttonView: {
        // position: 'absolute',
        bottom: 10,
        width: '100%',
    }
})

const PaymentScreen = () => {
    const titleList = ["Enter Amount", "Choose Payment Method", "Add A Card", "Choose Payment Method", "Choose Payment Method"]
    const btnNameList = ["Next", "Next", "Add", "Proceed", "Proceed"]
    const [selectedIndex, setSelectedIndex] = React.useState(0)
    const [amount, setAmount] = React.useState(0)

    const handleNext = () => {
        if (selectedIndex < titleList.length - 1 )
            setSelectedIndex(selectedIndex + 1)
    }

    const handlePrev = () => {
        if (selectedIndex > 0)
            setSelectedIndex(selectedIndex - 1)
    }

    return (
        <PaymentLayout handlePrev={handlePrev}>
            <Text mt={50} name={titleList[selectedIndex]} />

            { selectedIndex == 0 && <Balance amount={amount} setAmount={setAmount} /> }
            { selectedIndex == 1 && <DebitCard amount={amount} /> }
            { selectedIndex == 2 && <AddCard /> }
            { selectedIndex == 3 && <DebitCardAdded amount={amount} /> }
            { selectedIndex == 4 && <PaymentMethod amount={amount} /> }

            <View style={styles.buttonView}>
                <FilledButton text={btnNameList[selectedIndex]} onPress={handleNext}/>
            </View>
        </PaymentLayout>
    )
}

export default PaymentScreen