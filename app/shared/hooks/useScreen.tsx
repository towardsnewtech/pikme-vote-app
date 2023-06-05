import React from 'react'
import { Dimensions } from 'react-native';

const useScreen = () => {
    const screen = {w: Dimensions.get('window').width - 40, h: 250} ;

    return {
        screen
    }
}

export default useScreen