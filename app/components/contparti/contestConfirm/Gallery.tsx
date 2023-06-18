import React from 'react'
import { View, StyleSheet, ActivityIndicator, Image, TouchableOpacity, Dimensions } from 'react-native'
import _Text from '../../../shared/components/_Text'
import FilledButton from '../../../shared/components/FilledButton'
import { useAppSelector } from '../../../store/hooks';
import useScreen from '../../../shared/hooks/useScreen';

const item = require('../../../assets/images/contparti/contestconfirm/item.png');

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%'
    },
    loading: {
        marginTop: '10%'
    },
    invite: {
        marginTop: '5%',
        alignItems: 'center',
    },
    cropped: {
        position: 'relative',

        marginTop: 20,
        width: '100%',
        height: 200,
        overflow: 'hidden',
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#999',
    }
})

const Gallery = ({ navigation }: any) => {
    const { screen } = useScreen() ;
    const { img, pic, curY } = useAppSelector(state => state.image)

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
                <TouchableOpacity style={{ width: '100%' }} onPress={() => navigation.navigate('ContestResult', { name: 'ContestResult' })}>
                    <View style={styles.cropped}>
                        {
                            pic == null ?
                                <Image
                                    source={{ uri: img.uri }}
                                    style={{
                                        position: 'absolute',
                                        width: screen.w,
                                        height: img.height * screen.w / img.width,
                                        left: 0,
                                        top: -curY
                                    }}
                                /> :
                                <Image
                                    source={pic}
                                    style={{
                                        position: 'absolute',
                                        width: screen.w,
                                        height: screen.w,
                                        left: 0,
                                        top: -curY
                                    }}
                                />
                        }
                    </View>
                </TouchableOpacity>
            </View>
        </>
    )
}

export default Gallery