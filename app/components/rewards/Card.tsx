import React from 'react'
import { View, StyleSheet, Image } from 'react-native'

import _Text from '../../shared/components/_Text'
import _Favourite from '../../shared/components/_Favourite'

const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        borderColor: '#999',
        borderRadius: 20,
        width: '100%',
        marginTop: 20,

        position: 'relative'
    },
    lefttop: {
        position: 'absolute',
        top: 10,
        left: 10
    },
    righttop: {
        position: 'absolute',
        top: 10,
        right: 0,
        paddingLeft: 10,
        paddingRight: 10,

        width: '50%'
    },
    rightbottom: {
        position: 'absolute',
        bottom: 10,
        right: 0,
        width: '50%',
        paddingLeft: 10,
        paddingRight: 10
    },
    priceitem: {
        position: 'absolute', 
        bottom: 0, 
        left: 60,
        borderRadius: 20, 
        width: 35,
        height: 35,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

interface IInfo {
    info: any
}

const Card = ({
    info
}: IInfo) => {
    return (
        <View style={styles.container}>
            <Image
                style={{ width: '50%', borderTopLeftRadius: 20, borderBottomLeftRadius: 20 }}
                source={info.src}
            />
            <View style={styles.lefttop}>
                <_Favourite amount={1600} bgColor='rgba(0, 0, 0, 0.3)' isBorder={true} />
            </View>
            <View style={styles.righttop}>
                <_Text
                    name={info.text}
                    ftsize={20}
                />
            </View>
            <View style={styles.rightbottom}>
                <View style={{ position: 'relative' }}>
                    {
                        info.images.map((item: any, index: number) => (
                            <Image style={{ position: 'absolute', bottom: 0, left: index*20 }} source={item} key={index} />
                        ))
                    }
                    <View style={{
                        ...styles.priceitem,
                        backgroundColor: info.bgColor
                    }}>
                        <_Text
                            name={info.price}
                            ftsize={12}
                        />
                    </View>
                    <View
                        style={{
                            position: 'absolute',
                            bottom: 0,
                            right: -10,
                            width: 80
                        }}
                    >
                        <_Text
                            name="Others bought this"
                            color='#999'
                            ftsize={12}
                            pl={10}
                        />
                    </View>
                </View>
            </View>
        </View>
    )
}

export default Card