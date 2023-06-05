import React from 'react'

import { StyleSheet, Text, View } from 'react-native'
import ContestLayout from '../../components/layout/contestLayout'
import FilledButton from '../../shared/components/FilledButton'
import FooterLayout from '../../components/layout/footerLayout'
import Votes from '../../components/statistics/Votes'
import Contests from '../../components/statistics/Contests'

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 70,
        borderWidth: 1,
        borderColor: '#999',
        padding: 5,
        borderRadius: 30,
        backgroundColor: '#191e2d'
    },
    passive: {
        color: 'white',
        width: '40%',
        textAlign: 'center'
    }
})

const StatisticsScreen = ({navigation}: any) => {
    const btnList = [ 'Votes',  'Contests' ]
    const [ curBtn, setCurBtn ] = React.useState('Votes')

    return (
        <ContestLayout>
            <View style={styles.header}>
            {
                btnList.map((btn, index) => (
                    curBtn == btn ?
                    <FilledButton
                        key={index}
                        text={btn}
                        width='45%'
                        ftsize={15}
                        radius={20}
                        pt={5}
                        pb={5}
                        onPress={() => setCurBtn(btn)}
                    />:
                    <Text key={index} style={styles.passive} onPress={() => setCurBtn(btn)}>{btn}</Text>
                ))
            }
            </View>
            { curBtn == 'Votes' && <Votes navigation={navigation} /> }
            { curBtn == 'Contests' && <Contests navigation={navigation} /> }
            <FooterLayout activeIndex={3} navigation={navigation} />
        </ContestLayout>
    )
}

export default StatisticsScreen