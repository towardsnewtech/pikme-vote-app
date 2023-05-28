import React from 'react'
import {
    ScrollView,
    StyleSheet
} from 'react-native'

import Card from './Card'
import CardDetails from './CardDetails'

const styles = StyleSheet.create({
})

const AddCard = () => {
    return (
        <ScrollView>
            <Card mt={40} />
            <CardDetails />
        </ScrollView>
    )
}

export default AddCard