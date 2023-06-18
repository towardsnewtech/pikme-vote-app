import React from 'react'
import { Dimensions, Image, StyleSheet, View } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign'
import Entypo from 'react-native-vector-icons/Entypo'; 

import FilledButton from '../../shared/components/FilledButton';
import _Text from '../../shared/components/_Text';
import { useAppDispatch } from '../../store/hooks';
import { setSelectedImage } from '../../store/slices/image.slice';
import useScreen from '../../shared/hooks/useScreen';

const topback = require('../../assets/images/contparti/upload/select/topback.png');

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        paddingLeft: 20,
        paddingRight: 20,
        position: 'relative'
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 70
    },
    icon: {
        color: 'white',
        fontSize: 25,
        position: 'absolute',
        left: 0
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
    },
    footer: {
        width: '100%',
        bottom: 20,
        left: 20,
        position: 'absolute',
    }
})

const UploadPhoto = ({setStep, navigation, img, curY, pic}: any) => {
    const { screen } = useScreen() ;
    const dispatch = useAppDispatch() ;

    const handleImageSave = () => {
        dispatch(setSelectedImage({
            img: img,
            pic: pic,
            curY: curY
        }))

        navigation.navigate("PayConfirmation", {name: "PayConfirmation"})
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <AntDesign style={styles.icon} name="arrowleft" onPress={() => setStep(1)} />
                <_Text
                    name='Upload a photo'
                />
            </View>
            <View style={styles.cropped}>
                {
                    pic == null ?
                    <Image 
                        source={{uri: img.uri + `?crop=${10},${10},${10},${10}`}}
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
            <_Text
                name='Photo Uploaded Successfully!'
                mt={20}
                ftsize={24}
                align='center'
            />
            <_Text
                name="Wait for the contest to be over and we'll let you know if you won."
                color='#ccc'
                align='center'
                pl={40}
                pr={40}
                mt={20}
            />
            <View style={styles.footer}>
                <View style={{ flexDirection: 'row', justifyContent: 'center', marginBottom: 20 }}>
                    <Entypo name="link" size={24} color="#3389d7" />
                    <_Text
                        name='Copy Link to Invite'
                        color='#3389d7'
                        pl={5}
                    />
                </View>
                <FilledButton
                    onPress={handleImageSave}
                    width='100%'
                    text='Confirm Entry'
                />
            </View>
        </View>
    )
}

export default UploadPhoto