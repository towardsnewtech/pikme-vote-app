import React from 'react'
import { View, StyleSheet, Image } from 'react-native'
import FooterLayout from '../layout/footerLayout'

import _Text from '../../shared/components/_Text'
import _OutLinedButton from '../../shared/components/_OutLinedButton'

const backImg = require('../../assets/images/vote/back.png')

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#1c2340',
        width: '100%',
        height: '100%',
        alignItems: 'center',
    },
    main: {
        borderWidth: 1,
        borderColor: '#d27f64',
        borderRadius: 15,
        width: '80%',
        alignItems: 'center',
        marginTop: 120,
        paddingBottom: 20
    }
})

const Lost = ({navigation}: any) => {
    return (
        <View style={styles.container}>
            <View style={styles.main}>
                <_Text
                    name='Whoops! You Lost'
                    ftsize={24}
                    mt={20}
                />
                <_Text
                    name="Today wasn't your day at"
                    ftsize={12}
                    mt={20}
                    color='#eb8868'
                />
                <_Text
                    name='Architecture Contest'
                    ftsize={20}
                />
                <Image
                    style={{
                        marginTop: 20,
                        marginBottom: 40
                    }}
                    source={backImg}
                />
                <_OutLinedButton
                    text='View Contest'
                    width='50%'
                />
            </View>
            <FooterLayout activeIndex={0} navigation={navigation} />
        </View>
    )
}

export default Lost