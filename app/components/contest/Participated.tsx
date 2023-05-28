import React from 'react'
import { View } from 'react-native'

import _ContestCard from '../../shared/components/_ContestCard'

const Participated = () => {

    return (
        <View
            style={{
                marginTop: 30,
                width: '100%',
                alignItems: 'center'
            }}
        >
            <_ContestCard />
        </View>
    )
}

export default Participated