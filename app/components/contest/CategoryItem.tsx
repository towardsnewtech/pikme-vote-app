import React from 'react'
import {
    StyleSheet,
    View
} from 'react-native'

import _Text from '../../shared/components/_Text';
import { Image } from 'react-native-animatable';

const styles = StyleSheet.create({
    main: {
        height: 205,
        width: 140,
        marginRight: 30,
        justifyContent: 'flex-end'
    },
    container: {
        backgroundColor: '#1c2133',
        width: 140,
        height: 140,
        borderRadius: 20,
        overflow: 'visible',

        position: 'relative',

        alignItems: 'center'
    },
})

const CategoryItem = ({ info }: any) => {

    return (
        <View style={styles.main}>
            <View style={styles.container}>
                <Image
                    style={{
                        position: 'absolute',
                        top: -60,
                        left: 0
                    }}
                    source={info.shadow}
                />
                <Image
                    style={{
                        position: 'absolute',
                        top: -60,
                        left: 0
                    }}
                    source={info.src}
                />
                <View
                    style={{
                        position: 'absolute',
                        bottom: 20,
                        alignItems: "center"
                    }}
                >
                    <_Text
                        name={info.title}
                        ftsize={18}
                    />
                    <_Text
                        name={info.description}
                        color='#ccc'
                        ftsize={14}
                    />
                </View>
            </View>
        </View>
    )
}

export default CategoryItem