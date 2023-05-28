import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from '../screens/auth/LoginScreen';
import ForgotScreen from '../screens/auth/ForgotScreen';
import SingUpScreen from '../screens/auth/SignUpScreen';
import OnBoardingScreen from '../screens/onboarding/OnBoardingScreen';
import SettingScreen from '../screens/settings/SettingScreen';
import ChangePassword from '../components/settings/ChangePassword';
import Faq from '../components/settings/Faq';
import PaymentScreen from '../screens/payment/PaymentScreen';
import ContestScreen from '../screens/contest/contestScreen';
import ProfileScreen from '../screens/profile/ProfileScreen';
import WalletScreen from '../components/profile/WalletScreen';
import EditProfile from '../components/profile/EditProfile';
import VoteScreen from '../screens/vote/VoteScreen';
import StatisticsScreen from '../screens/statistics/StatisticsScreen';
import RewardsScreen from '../screens/rewards/RewardsScreen';
import Lost from '../components/vote/Lost';
import Won from '../components/vote/Won';
import PaymentTest from '../screens/payment';

const RootStack = createNativeStackNavigator();

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator
        initialRouteName={'PaymentTest'}
      >
        <RootStack.Group
          screenOptions={{ headerShown: false }}
        >
          <RootStack.Screen name="PaymentTest" component={PaymentTest} />
        </RootStack.Group>
        <RootStack.Group
          screenOptions={{ headerShown: false }}
        >
          <RootStack.Screen name="Rewards" component={RewardsScreen} />
        </RootStack.Group>
        <RootStack.Group
          screenOptions={{ headerShown: false }}
        >
          <RootStack.Screen name="Statistics" component={StatisticsScreen} />
        </RootStack.Group>
        <RootStack.Group
          screenOptions={{ headerShown: false }}
        >
          <RootStack.Screen name="Contest" component={ContestScreen} />
        </RootStack.Group>
        <RootStack.Group
          screenOptions={{ headerShown: false }}
        >
          <RootStack.Screen name="Payment" component={PaymentScreen} />
        </RootStack.Group>
        <RootStack.Group
          screenOptions={{ headerShown: false }}
        >
          <RootStack.Screen name="OnBoarding" component={OnBoardingScreen} />
        </RootStack.Group>
        <RootStack.Group
          screenOptions={{ headerShown: false }}
        >
          <RootStack.Screen name="Login" component={LoginScreen} />
          <RootStack.Screen name="Forgot" component={ForgotScreen} />
          <RootStack.Screen name="SignUp" component={SingUpScreen} />
        </RootStack.Group>
        <RootStack.Group
          screenOptions={{ headerShown: false }}
        >
          <RootStack.Screen name="Setting" component={SettingScreen} />
          <RootStack.Screen name="ChangePassword" component={ChangePassword} />
          <RootStack.Screen name="Faq" component={Faq} />
        </RootStack.Group>
        <RootStack.Group
          screenOptions={{ headerShown: false }}
        >
          <RootStack.Screen name="Profile" component={ProfileScreen} />
          <RootStack.Screen name='Wallet' component={WalletScreen} />
          <RootStack.Screen name="EditProfile" component={EditProfile} />
        </RootStack.Group>
        <RootStack.Group
          screenOptions={{ headerShown: false }}
        >
          <RootStack.Screen name="Vote" component={VoteScreen} />
          <RootStack.Screen name="Lost" component={Lost} />
          <RootStack.Screen name="Won" component={Won} />
        </RootStack.Group>
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;