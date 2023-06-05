import React from 'react'
import {
    Image,
    ScrollView,
    StyleSheet,
    TouchableOpacity,
    View
} from 'react-native'

import _Text from '../../shared/components/_Text';
import ImageCard from './ImageCard';
import CategoryItem from './CategoryItem';
import FooterImage from './FooterImage';

const watch = require('../../assets/images/contest/watch.png')
const watch_ = require('../../assets/images/contest/watch_shadow.png')
const car = require('../../assets/images/contest/car.png')
const car_ = require('../../assets/images/contest/car_shadow.png')
const carousel = require('../../assets/images/contest/carousel.png');
const footer1 = require('../../assets/images/contest/footer1.png')
const footer2 = require('../../assets/images/contest/footer2.png')

const styles = StyleSheet.create({
    scrollLayout: {
        alignItems: 'center',
        padding: 10
    },
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

const AllContests = ({navigation}: any) => {

    const imgList = [
        {
            src: carousel
        },
        {
            src: carousel
        }
    ]

    const categoryList = [
        {
            shadow: watch_,
            src: watch,
            title: 'Watches',
            description: '700 players Joined'
        },
        {
            shadow: car_,
            src: car,
            title: 'Cars',
            description: '543 players Joined'
        },
        {
            shadow: watch_,
            src: watch,
            title: 'Watches',
            description: '700 players Joined'
        },
        {
            shadow: car_,
            src: car,
            title: 'Cars',
            description: '543 players Joined'
        }
    ]

    const footerList = [
        {
            title: 'Amazing Architecture',
            src: footer1
        },
        {
            title: 'Sci-Fi Fantasy',
            src: footer2
        }
    ]

    return (
        <ScrollView>
            <View style={styles.scrollLayout}>
                <ScrollView horizontal={true} style={{ maxHeight: 200 }}>
                    {
                        imgList.map((item, index) => (
                            <ImageCard src={item.src} key={index} />
                        ))
                    }
                </ScrollView>
                <View style={{
                    width: '100%'
                }}>
                    <_Text
                        name='Top Trending Categories'
                        ftsize={18}
                        mt={5}
                        align='left'
                    />
                </View>
                <ScrollView horizontal={true} style={{ maxHeight: 205 }}>
                    {
                        categoryList.map((category, index) => (
                            <TouchableOpacity key={index} onPress={() => navigation.navigate("Category", {name: "Category"})}>
                                <CategoryItem info={category} />
                            </TouchableOpacity>
                        ))
                    }
                </ScrollView>
                <View style={{
                    width: '100%'
                }}>
                    <_Text
                        name='Comming Soon'
                        ftsize={18}
                        mt={5}
                    />
                </View>
                <View style={{ marginTop: 10, marginBottom: 150 }}>
                    {/* <ScrollView style={{ height: 200 }}> */}
                    {
                        footerList.map((footer, index) => (
                            <FooterImage info={footer} key={index} />
                        ))
                    }
                    {/* </ScrollView> */}
                </View>
            </View>
        </ScrollView>
    )
}

export default AllContests