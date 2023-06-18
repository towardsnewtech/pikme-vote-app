import React from 'react'
import { View, StyleSheet, Image } from 'react-native'
import FooterLayout from '../layout/footerLayout'

import _Text from '../../shared/components/_Text'
import _OutLinedButton from '../../shared/components/_OutLinedButton'

const backImg = require('../../assets/images/vote/back.png')
const star1 = require('../../assets/images/vote/star-1.png')
const star2 = require('../../assets/images/vote/star-2.png')
const star3 = require('../../assets/images/vote/star-3.png')
const star4 = require('../../assets/images/vote/star-4.png')


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#1c2340',
        width: '100%',
        height: '100%',
        alignItems: 'center',
        position: 'relative'
    },
    main: {
        backgroundColor: 'rgba(28, 35, 64, 0.9)',
        borderWidth: 1,
        borderColor: '#d27f64',
        borderRadius: 15,
        width: '70%',
        alignItems: 'center',
        paddingBottom: 20,
        position: 'absolute',
        top: 300
    }
})
const Won = ({ navigation }: any) => {
    return (
        <View style={styles.container}>
            <Image
                style={{
                    position: 'absolute',
                    top: 610,
                    right: 30
                }}
                source={star4} 
            />
            <Image
                style={{
                    width: '80%',
                    height: 270,
                    borderRadius: 20,
                    marginTop: 70,
                    marginBottom: 40
                }}
                source={backImg}
            />
            <View style={styles.main}>
                <_Text
                    name='Congratulations!'
                    ftweight='600'
                    ftsize={24}
                    mt={20}
                />
                <_Text
                    name="You Won"
                    ftsize={12}
                    mt={20}
                />
                <_Text
                    name='Architecture Contest'
                    ftsize={20}
                />
                <_Text
                    name='$99'
                    color='#e4b964'
                    ftsize={48}
                    ftweight='600'
                    mt={20}
                />
                <_Text
                    name='New balance : $648'
                />
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center'
                }}>
                    <_Text
                        name='+42'
                        color='#d5ad60'
                    />
                    <_Text
                        name=' Points added'
                        ftsize={12}
                    />
                </View>


                <View style={{
                    width: '100%',
                    marginTop: 30
                }}>
                    <_OutLinedButton
                        text='View Contest'
                        width='90%'
                    />
                </View>
                <_Text
                    mt={10}
                    color='#237ed3'
                    name='Share'
                />
            </View>
            <Image
                style={{
                    position: 'absolute',
                    top: 270,
                    right: 20
                }}
                source={star1} 
            />
            <Image
                style={{
                    position: 'absolute',
                    top: 350,
                    left: 15
                }}
                source={star2} 
            />
            <Image
                style={{
                    position: 'absolute',
                    top: 600,
                    left: 30
                }}
                source={star3} 
            />
            <FooterLayout activeIndex={0} navigation={navigation} />
        </View>
    )
}

export default Won