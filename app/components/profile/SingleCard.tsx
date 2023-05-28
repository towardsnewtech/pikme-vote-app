import React from 'react'

import {
    StyleSheet,
    View,
    Text,
    Image
} from 'react-native'

import LinearGradient from 'react-native-linear-gradient'

const smallStarImage = require('../../assets/images/profile/smallStar.png')
const bigStarImage = require('../../assets/images/profile/bigStar.png')

const styles = StyleSheet.create({
    borderBackground: {
        width: '95%',
        alignSelf: 'center',
        borderRadius: 10,
        marginBottom: 30,
        position: 'relative',
        padding: 1,
    },
    cardContainer: {
        height: '100%',
        borderRadius: 10,
        padding: 20
    },
    rightTopCornerSmallStar: {
        position: 'absolute',
        right: 0,
        top: -30
    },
    rightTopCornerBigStar: {
        position: 'absolute',
        right: -30,
        top: -10
    },
    leftTopCornerSmallStar: {
        position: 'absolute',
        left: -25,
        bottom: 20
    },
    leftTopCornerBigStar: {
        position: 'absolute',
        left: -20,
        bottom: -30
    }
})

const SingleCard = ({children, height, showStar}: any) => {
    return (
        <LinearGradient
            start={{x: 0 , y: 0}}
            end={{x:0, y:1}}
            colors={['#6c737a', '#4F5861' ]}
            style={[styles.borderBackground, { height: height || 200 }]}
        >
            <LinearGradient
                start={{x: 0 , y: 0}}
                end={{x:0, y:1}}
                colors={['#18275E', '#2B3E83' ]}
                style={styles.cardContainer}
            >
                {children}
                { showStar && <> 
                    <View style={styles.rightTopCornerSmallStar}>
                        <Image source={smallStarImage} />
                    </View>
                    <View style={styles.rightTopCornerBigStar}>
                        <Image source={bigStarImage} />
                    </View>
                    <View style={styles.leftTopCornerSmallStar}>
                        <Image source={smallStarImage} />
                    </View>
                    <View style={styles.leftTopCornerBigStar}>
                        <Image source={bigStarImage} />
                    </View>
                </>}
            </LinearGradient>
        </LinearGradient>
    )
}

SingleCard.defaultProps = {
    height: 200,
    showStar: false
}

export default SingleCard