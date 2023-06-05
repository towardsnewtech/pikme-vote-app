import React from 'react'
import { View } from 'react-native'

import _ContestCard from '../../shared/components/_ContestCard'

const Participated = ({navigation, setCurBtn}: any) => {

    return (
        <View
            style={{
                marginTop: 30,
                width: '100%',
                alignItems: 'center'
            }}
        >
            <_ContestCard navigation={navigation} setCurBtn={setCurBtn} type={1} />
        </View>
    )
}

export default Participated