import React from 'react'
import {
    ScrollView,
    StyleSheet
} from 'react-native'

import Card from './Card'
import CardDetails from './CardDetails'

const styles = StyleSheet.create({
})

const AddCard = ({
    number, onChangeNumber,
    expireDate, onChangeExpireDate,
    cvv, onChangeCvv,
    name, onChangeName,
    cardNumber, validThru
}: any) => {

    return (
        <ScrollView>
            <Card mt={40} cardNumber={cardNumber} validThru={validThru} />
            <CardDetails
                number={number} onChangeNumber={onChangeNumber}
                expireDate={expireDate} onChangeExpireDate={onChangeExpireDate}
                cvv={cvv} onChangeCvv={onChangeCvv}
                name={name} onChangeName={onChangeName}
            />
        </ScrollView>
    )
}

export default AddCard