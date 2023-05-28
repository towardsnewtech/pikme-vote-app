import React from 'react'

import SwiperFlatList from 'react-native-swiper-flatlist'
import FooterLayout from '../../components/layout/footerLayout'
import Swipe from '../../components/vote/swipe'
import Bonus from '../../components/vote/bonus'
import VoteLayout from '../../components/layout/voteLayout'

const VoteScreen = ({navigation} : any) => {
    return (
        <VoteLayout>
            <Swipe />
            {/* <Bonus /> */}
            <FooterLayout 
                activeIndex={0}
                navigation={navigation}
            />
        </VoteLayout>
    )
}

export default VoteScreen