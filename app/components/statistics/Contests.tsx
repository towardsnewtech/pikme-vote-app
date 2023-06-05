import React from 'react'
import { View } from 'react-native'

import _ContestCard from '../../shared/components/_ContestCard'

const Contests = ({navigation}: any) => {

    return (
        <View
            style={{
                marginTop: "25%",
                width: '100%',
                alignItems: 'center'
            }}
        >
            <_ContestCard btnText={'Claim now'} navigation={navigation} />
        </View>
    )
}

export default Contests