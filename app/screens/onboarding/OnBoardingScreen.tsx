import React from 'react'

import OnBoardingLayout from '../../components/layout/onboardingLayout'
import CarouselOne from '../../components/onboarding/CarouselOne'
import CarouselTwo from '../../components/onboarding/CarouselTwo'
import CarouselThree from '../../components/onboarding/CarouselThree'

import {
    FlatList,
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from 'react-native'

import FilledButton from '../../shared/components/FilledButton'

const styles = StyleSheet.create({
    descView: {
        paddingTop: 20,
        paddingBottom: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    descText: {
        color: 'white'
    },
    linkText: {
        color: "#1677CF",
    }
})

const OnBoardingScreen = ({navigation}: any) => {
    const [step, setStep] = React.useState<number>(0)

    const handleStep = (step: number) => {
        if(step == 3) return
        setStep(step)
    }

    const handleNext = () => {
        if (step == 2) {
            navigation.navigate('Interest', { name: "Interest" })
        }
        handleStep(step+1)
    }

    return (
        <OnBoardingLayout>
            { step == 0 && <CarouselOne 
                navigation={navigation}
                handleStep={handleStep}
                step={step}
            /> }
            {
                step == 1 && <CarouselTwo />
            }
            {
                step == 2 && <CarouselThree />
            }
            <FilledButton text={'Next'} onPress={handleNext}/>
            <View style={styles.descView}>
                <Text style={styles.descText}>
                    Already have an account? &nbsp;
                </Text>
                <TouchableOpacity onPress={() => {navigation.navigate('Interest', { name: "Interest" })}}>
                        <Text style={styles.linkText}>Log in</Text>
                    </TouchableOpacity> 
            </View>
        </OnBoardingLayout>
    )
}

export default OnBoardingScreen