import React from 'react'
import {View, StyleSheet, ActivityIndicator} from 'react-native'
import _Text from '../../../shared/components/_Text'
import FilledButton from '../../../shared/components/FilledButton'

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%'
    },
    loading: {
        marginTop: '30%'
    },
    invite: {
        marginTop: '20%',
        alignItems: 'center'
    }
})

const Details = () => {
    return (
        <>
            <View style={styles.loading}>
                <ActivityIndicator size="large" color="#ffffff" />
                <_Text
                    name='Waiting for opponent'
                    align='center'
                    mt={10}
                />
            </View>
            <View style={styles.invite}>
                <_Text
                    name="Don't Find Opponents ?"
                    color='#999'
                    ftsize={12}
                />
                <View style={{marginTop: 10, marginBottom: 10, width: '50%'}}>
                    <_Text
                        name='Invite Your Friend to the Contest'
                        ftsize={20}
                        align="center"
                    />
                </View>
                <FilledButton
                    text='Invite'
                    width='40%'
                    pt={5}
                    pb={5}
                />
            </View>
        </>
    )
}

export default Details