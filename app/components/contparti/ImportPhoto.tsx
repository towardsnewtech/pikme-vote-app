import React from 'react'
import { StyleSheet, View, TouchableOpacity, Image, ScrollView } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign'
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import FilledButton from '../../shared/components/FilledButton'
import _Text from '../../shared/components/_Text'
import * as ImagePicker from 'react-native-image-picker';
import { showToastWithGravity } from '../../common/toast';

const pic1 = require('../../assets/images/contparti/upload/pic1.png')
const pic2 = require('../../assets/images/contparti/upload/pic2.png')
const pic3 = require('../../assets/images/contparti/upload/pic3.png')

const styles = StyleSheet.create({
    container: {
        paddingLeft: 20,
        paddingRight: 20,
        width: '100%',
        height: '100%',
        position: 'relative',
        alignItems: 'center'
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#999',
        padding: 5,
        borderRadius: 30,
        backgroundColor: '#191e2d',
        marginTop: 20
    },
    body: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        flexWrap: 'wrap'
    },
    footer: {
        position: 'absolute',
        bottom: 20,
        width: '100%',
    },
    topbanner: {
        width: '100%',
        marginTop: 70,
        alignItems: 'center',
        position: 'relative'
    },
    icon: {
        color: 'white',
        fontSize: 25,
        position: 'absolute',
        left: 0
    },
    importphotocontainer: {
        width: '50%',
        paddingTop: 10,
        paddingRight: 20,
    },
    importphoto: {
        height: '100%',
        borderRadius: 20,

        borderWidth: 1,
        borderStyle: 'dashed',
        borderColor: 'white',
        justifyContent: 'center',
        alignItems: 'center'
    },
    importedphoto: {
        height: '100%',
        borderRadius: 20,

        borderWidth: 1,
        borderColor: 'white',
        justifyContent: 'center',
        alignItems: 'center'
    }
})

const ImportPhoto = ({ setStep, navigation, setImg, img }: any) => {
    const btnList = ['Library', 'Previous']
    const picList = [pic1, pic2, pic3]

    const [curBtn, setCurBtn] = React.useState('Library')

    const handleImportImgae = async () => {

        try {
            ImagePicker.launchImageLibrary({
                mediaType: 'photo',
                includeBase64: false,
                maxHeight: 200,
                maxWidth: 200,
            }, (response) => {
                if (response.assets) {
                    if (response.assets[0].fileSize)
                        setImg(response.assets[0])
                    else showToastWithGravity("Not Image Format");
                }
            });
        } catch (err) {
            showToastWithGravity("Not Image Format");
        }
        // await ImagePicker.launchImageLibrary({
        //     mediaType: 'photo',
        //     includeBase64: false,
        //     maxHeight: 200,
        //     maxWidth: 200,
        // }, res => {
        //     console.log(res);
        //     if (res.assets) {
        //         setImg(res.assets[0])
        //     }
        // });
    }

    return (
        <View style={styles.container}>
            <View style={styles.topbanner}>
                <AntDesign style={styles.icon} name="arrowleft" onPress={() => navigation.navigate("Category", { name: "Category" })} />
                <_Text
                    name='Upload a photo'
                />
            </View>
            <View style={styles.header}>
                {
                    btnList.map((btn, index) => (
                        curBtn == btn ?
                            <FilledButton
                                key={index}
                                text={btn}
                                width='50%'
                                radius={20}
                                ftsize={15}
                                pt={5}
                                pb={5}
                                onPress={() => setCurBtn(btn)}
                            /> :
                            <TouchableOpacity key={index} style={{ width: '50%' }} onPress={() => setCurBtn(btn)}>
                                <_Text name={btn} align='center' />
                            </TouchableOpacity>
                    ))
                }
            </View>
            <ScrollView style={{ maxHeight: '70%' }}>
                <View style={styles.body}>
                    <View style={styles.importphotocontainer}>
                        <TouchableOpacity style={{ height: '65%' }} onPress={handleImportImgae}>
                            {
                                img != "" ?
                                    <Image source={{ uri: img.uri }} style={styles.importedphoto} />
                                    :
                                    <View style={styles.importphoto}>
                                        <FontAwesome name="photo" size={24} color="#999" />
                                        <_Text
                                            pl={20}
                                            pr={20}
                                            name='Import from gallery'
                                            color='#999'
                                            align='center'
                                        />
                                    </View>
                            }
                        </TouchableOpacity>
                    </View>
                    {
                        picList.map((pic, index) => (
                            <View key={index} style={{ width: '50%', marginTop: 10 }}>
                                <Image source={pic} />
                            </View>
                        ))
                    }
                </View>
            </ScrollView>
            <View style={styles.footer}>
                <FilledButton
                    disabled={img == ""}
                    onPress={img == "" ? () => {} : () => setStep(1)}
                    width='100%'
                    text='Choose'
                />
            </View>
        </View>
    )
}

export default ImportPhoto