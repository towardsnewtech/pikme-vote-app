import React from 'react'
import { View, StyleSheet, ScrollView } from 'react-native';

import _Text from '../../shared/components/_Text';
import _Favourite from '../../shared/components/_Favourite';
import Card from './Card';

const back1 = require('../../assets/images/rewards/back1.png')
const back2 = require('../../assets/images/rewards/back2.png')
const back3 = require('../../assets/images/rewards/back3.png')
const person1 = require('../../assets/images/rewards/person1.png')
const person2 = require('../../assets/images/rewards/person2.png')
const person3 = require('../../assets/images/rewards/person3.png')

const styles = StyleSheet.create({
    container: {
        marginTop: 50,
        marginBottom: 100,
        paddingLeft: 10,
        paddingRight: 10,
        width: '100%'
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%'
    }
})

const Rewards = () => {
    const cardList = [
        {
            src: back1,
            amount: 1600,
            text: 'Git voucher of $20 at Uber',
            images: [person1, person2, person3],
            price: '3.4k',
            bgColor: '#40453f',
            comment: 'Others bought this'
        },
        {
            src: back2,
            amount: 1600,
            text: 'Get 20% off at Starbucks',
            images: [person2, person3, person1],
            price: '+4k',
            bgColor: '#2e201f',
            comment: 'Others bought this'
        },
        {
            src: back3,
            amount: 1600,
            text: '$100 Gift Card by Amazon',
            images: [person1, person2, person3],
            price: '1.2k',
            bgColor: '#40453f',
            comment: 'Others bought this'
        }
    ]
    return (
        <ScrollView style={{ width: '100%' }}>
            <View style={styles.container}>
                <View style={styles.header}>
                    <_Text
                        name='Rewards for you'
                    />
                    <_Favourite
                        amount={145460}
                    />
                </View>
                {
                    cardList.map((card, index) => (
                        <Card info={card} key={index} />
                    ))
                }
            </View>
        </ScrollView>
    )
}

export default Rewards