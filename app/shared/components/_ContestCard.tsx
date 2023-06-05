import React from 'react'
import {
    Image,
    StyleSheet,
    View
} from 'react-native'

import _Text from './_Text';
import FilledButton from './FilledButton';

const styles = StyleSheet.create({
    mainCard: {
        alignItems: 'center',

        borderWidth: 1,
        borderColor: '#aaa',
        borderRadius: 10,
        width: '90%',

        position: 'relative'
    }
})

const dollor_left = require('../../assets/images/global/dollar-left.png')
const dollor_right = require('../../assets/images/global/dollar-right.png')

const _ContestCard = ({btnText, navigation, setCurBtn, type}: any) => {

    return (
        <View style={styles.mainCard}>
            <_Text
                name='No Contests joined yet!'
                ftsize={14}
                mt={20}
            />
            <_Text
                name="Get your first free contest"
                ftsize={36}
                ftweight='600'
                color='#d4a653'
                mt={30}
                pl={50}
                pr={50}
                align='center'
            />
            <View
                style={{
                    width: '100%',
                    marginTop: 30,
                    marginBottom: 30
                }}
            >
                <FilledButton 
                    text={btnText}
                    radius={50} 
                    width={'50%'}
                    pt={10} 
                    pb={10}
                    bgColor={['#d4a653', '#f8d17b', '#d4a653']}
                    txtColor='black'
                    ftsize={14}
                    ftweight='800'
                    onPress={() => { if (type == 1) {setCurBtn('All Contests')}; navigation.navigate('Contest', { name: "Contest" })} }
                />
            </View>
            <Image
                style={{
                    position: 'absolute',
                    left: -20,
                    top: 120
                }}
                source={dollor_left}
            />
            <Image
                style={{
                    position: 'absolute',
                    right: -15,
                    top: 30
                }}
                source={dollor_right}
            />
        </View>
    )
}

_ContestCard.defaultProps = {
    btnText: 'Claim free contest',
    type: 0
}

export default _ContestCard