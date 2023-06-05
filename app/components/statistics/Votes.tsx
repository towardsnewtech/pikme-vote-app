import React from 'react'
import { StyleSheet, View } from 'react-native'

import _ContestCard from '../../shared/components/_ContestCard'
import _Text from '../../shared/components/_Text'
import _Favourite from '../../shared/components/_Favourite'
import VotesCard from './VotesCard'

const styles = StyleSheet.create({
    cardContainer: {
        marginTop: 30,
        width: '100%',
        alignItems: 'center'
    },
    streak: {
        borderWidth: 1,
        borderColor: '#999',
        width: '90%',
        marginTop: 10,
        borderRadius: 10,
        padding: 10
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    sliderbody: {
        backgroundColor: '#323342',
        width: '100%',
        marginTop: 15,
        borderRadius: 20
    },
    slider: {
        backgroundColor: '#d9aa58',
        width: '10%',
        height: 10,
        borderRadius: 20
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20
    }
})

const Votes = ({navigation}: any) => {

    const footerList = [
        {
            width: '25%',
            amount: 0,
            comment: 'Votes'
        },
        {
            width: '25%',
            amount: 0,
            comment: 'Won'
        },
        {
            width: '45%',
            amount: 0,
            comment: 'In Progress'
        }
    ]

    return (
        <>
            <_Text
                name='You have not voted yet!'
                ftsize={14}
                mt={20}
            />
            <View style={styles.streak}>
                <View style={styles.header}>
                    <View
                        style={{
                            flexDirection: 'row'
                        }}
                    >
                        <_Text
                            name='Current Streak  '
                            ftsize={15}
                        />
                        <_Text
                            name='1x'
                            color='#e2b762'
                            italic={true}
                        />
                    </View>
                    <_Favourite amount={0} />
                </View>
                <View style={styles.sliderbody}>
                    <View style={styles.slider} />
                </View>
                <View style={styles.footer}>
                    {
                        footerList.map((item, index) => (
                            <VotesCard key={index} width={item.width} amount={item.amount} comment={item.comment} />
                        ))
                    }
                </View>
            </View>
            {/* <View
                style={styles.cardContainer}
            >
                <_ContestCard navigation={navigation} />
            </View> */}
        </>
    )
}

export default Votes