import React from 'react'
import {
    StyleSheet,
    View
} from 'react-native'

import _Text from '../../shared/components/_Text';
import { Image } from 'react-native-animatable';
const libon = require('../../assets/images/contest/libon.png')
const libon_ = require('../../assets/images/contest/libonbottom.png')

const styles = StyleSheet.create({
    container: {
        position: 'relative',
        marginBottom: 15,
        borderRadius: 20
    }
})

const FooterImage = ({ info }: any) => {

    return (
        <View style={styles.container}>
            <Image
                source={info.src}
            />
            <View 
                style={{
                    position: 'absolute',
                    top: 20,
                    left: 20
                }}
            >
                <_Text
                    ftsize={20}
                    name={info.title}
                />
            </View>
            <Image
                style={{
                    position: 'absolute',
                    right: -13,
                    bottom: 15
                }}
                source={libon}
            />
            <Image
                style={{
                    position: 'absolute',
                    right: -5,
                    bottom: 20
                }}
                source={libon_}
            />
            <View 
                style={{
                    position: 'absolute',
                    bottom: 32,
                    right: 20
                }}
            >
                <_Text
                    ftsize={14}
                    name='Begins in 2hrs'
                />
            </View>
        </View>
    )
}

export default FooterImage