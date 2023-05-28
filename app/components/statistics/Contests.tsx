import React from 'react'
import { View } from 'react-native'

import _ContestCard from '../../shared/components/_ContestCard'

const Contests = () => {

    return (
        <View
            style={{
                marginTop: 130,
                width: '100%',
                alignItems: 'center'
            }}
        >
            <_ContestCard btnText={'Claim now'} />
        </View>
    )
}

export default Contests