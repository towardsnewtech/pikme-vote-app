import React from 'react'
import FooterLayout from '../../components/layout/footerLayout'
import Swipe from '../../components/vote/swipe'
import Bonus from '../../components/vote/bonus'
import VoteLayout from '../../components/layout/voteLayout'
import SwiperFlatList from 'react-native-swiper-flatlist';

const VoteScreen = ({navigation} : any) => {
    return (
        <VoteLayout>
            {/* <SwiperFlatList> */}
                <Swipe />
                {/* <Swipe top1Img={top2Img} bottom1Img={bottom2Img} />
                <Swipe top1Img={top3Img} bottom1Img={bottom3Img} /> */}
                {/* <Bonus /> */}
            {/* </SwiperFlatList> */}
            {/* <Bonus /> */}
            <FooterLayout 
                activeIndex={0}
                navigation={navigation}
            />
        </VoteLayout>
    )
}

export default VoteScreen