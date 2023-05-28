import React from 'react'

import {
    StyleSheet,
} from 'react-native'
import LinearGradient from 'react-native-linear-gradient'

const styles = StyleSheet.create({
    borderGradientContainer: {
        width: '100%',
        position: 'absolute',
        bottom: 0,
        left: 0,
        padding: 1,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
    },
    backgroundGradientContainer: {
        width: '100%',
        height: '100%',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        padding: 30
    }
})

const SingleContainer = ({
    children
}: any ) => {
    return (
        <LinearGradient
            start={{x: 0 , y: 0}}
            end={{x:0, y:1}}
            colors={['#FFFFFF', '#2A3E83' ]}
            style={styles.borderGradientContainer}
        >
            <LinearGradient
                style={styles.backgroundGradientContainer}
                colors={['#101E4F', '#2A3E83' ]}
            >
                {children}
            </LinearGradient>
        </LinearGradient>
    )
}

export default SingleContainer;