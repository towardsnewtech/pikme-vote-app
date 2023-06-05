import React from 'react'

import RewardsLayout from '../../components/layout/rewardsLayout'
import Rewards from '../../components/rewards'
import FooterLayout from '../../components/layout/footerLayout'

const RewardsScreen = ({navigation}: any) => {

    return (
        <RewardsLayout>
            <Rewards />
            <FooterLayout activeIndex={2} navigation={navigation} />
        </RewardsLayout>
    )
}

export default RewardsScreen