import React from 'react'

import { StyleSheet, Text, TextInput, View } from 'react-native'
import ContestLayout from '../../components/layout/contestLayout'
import FilledButton from '../../shared/components/FilledButton'
import AllContests from '../../components/contest/AllContests'
import FooterLayout from '../../components/layout/footerLayout'
import Participated from '../../components/contest/Participated'

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

const ContestScreen = ({navigation}: any) => {
    const btnList = [ 'All Contests',  'Participated' ]
    const [ curBtn, setCurBtn ] = React.useState('All Contests')

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
                        radius={20}
                        ftsize={15}
                        pt={5}
                        pb={5}
                        onPress={() => setCurBtn(btn)}
                    />:
                    <Text key={index} style={styles.passive} onPress={() => setCurBtn(btn)}>{btn}</Text>
                ))
            }
            </View>
            { curBtn == 'All Contests' && <AllContests navigation={navigation} /> }
            { curBtn == 'Participated' && <Participated navigation={navigation} setCurBtn={setCurBtn} /> }
            <FooterLayout activeIndex={1} navigation={navigation} />
        </ContestLayout>
    )
}

export default ContestScreen