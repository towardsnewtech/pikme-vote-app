import React from 'react'
import {
    Image,
    ScrollView,
    StyleSheet,
    View
} from 'react-native'

const libon = require('../../assets/images/contest/libon.png')
const libon_ = require('../../assets/images/contest/libonbottom.png')
import AntDesign from 'react-native-vector-icons/AntDesign';
import _Text from '../../shared/components/_Text';

const styles = StyleSheet.create({
    imageGroup: {
        marginRight: 20,
        borderWidth: 2,
        borderRadius: 15,
        borderColor: '#ed7e67',
        height: 195,

        position: 'relative'
    },
    timeMask: {
        position: 'absolute',
        top: 10,
        left: 10,
        padding: 5,
        backgroundColor: 'rgba(255,255,255,0.1)',
        flexDirection: 'row'
    },

})

const ImageCard = ({src}: any) => {

    return (
        <View style={styles.imageGroup}>
            <Image
                source={src}
            />
            <View style={styles.timeMask}>
                <AntDesign name="clockcircleo" size={20} color="#999" />
                <_Text
                    name='Ends in 2hrs'
                    color='#999'
                    ftsize={14}
                    ml={10}
                />
            </View>
            <View style={{
                position: 'absolute',
                bottom: 20,
                left: 10
            }}>
                <_Text
                    name='Travel Life'
                    color='white'
                    ftsize={18}
                />
            </View>
            <Image
                style={{
                    position: 'absolute',
                    right: -15,
                    bottom: 15
                }}
                source={libon}
            />
            <Image
                style={{
                    position: 'absolute',
                    right: -8,
                    bottom: 20
                }}
                source={libon_}
            />
            <View
                style={{
                    position: 'absolute',
                    bottom: 30,
                    right: 10
                }}
            >
                <_Text
                    name='Free contest'
                    color='white'
                    ftsize={16}
                />
            </View>
        </View>
    )
}

export default ImageCard