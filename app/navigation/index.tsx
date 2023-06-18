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
  import DepositScreen from '../screens/deposit/DepositScreen';
  import WithdrawScreen from '../screens/withdraw/WithdrawScreen';
  import ContestScreen from '../screens/contest/contestScreen';
  import ProfileScreen from '../screens/profile/ProfileScreen';
  import WalletScreen from '../components/profile/WalletScreen';
  import EditProfile from '../components/profile/EditProfile';
  import VoteScreen from '../screens/vote/VoteScreen';
  import StatisticsScreen from '../screens/statistics/StatisticsScreen';
  import RewardsScreen from '../screens/rewards/RewardsScreen';
  import Lost from '../components/vote/Lost';
  import Won from '../components/vote/Won';
  import Interest from '../screens/auth/Interest';
  import CategoryScreen from '../screens/contparti/CategoryScreen';
  import UploadPhotoScreen from '../screens/contparti/UploadPhotoScreen';
  import PayConfirmation from '../components/contparti/PayConfirmation';
  import ContestConfirmScreen from '../screens/contparti/ContestConfirmScreen';
  import ContestResultScreen from '../screens/contparti/ContestResultScreen';

  const RootStack = createNativeStackNavigator();

  const RootNavigator = () => {
    return (
      <NavigationContainer>
        <RootStack.Navigator
          initialRouteName={'OnBoarding'}
          screenOptions={{
            headerShown: false,
            gestureEnabled: false,
            animation: 'none'
          }}
        >
          <RootStack.Group
            screenOptions={{ headerShown: false, animation: 'none' }}
          >
            <RootStack.Screen name="Vote" component={VoteScreen} />
            <RootStack.Screen name="Contest" component={ContestScreen} />
            <RootStack.Screen name="Rewards" component={RewardsScreen} />
            <RootStack.Screen name="Statistics" component={StatisticsScreen} />
            <RootStack.Screen name="Profile" component={ProfileScreen} />
          </RootStack.Group>
          <RootStack.Group
            screenOptions={{ headerShown: false }}
          >
            <RootStack.Screen name="Category" component={CategoryScreen} />
            <RootStack.Screen name="UploadPhoto" component={UploadPhotoScreen} />
            <RootStack.Screen name="PayConfirmation" component={PayConfirmation} />
            <RootStack.Screen name='ContestConfirm' component={ContestConfirmScreen} />
            <RootStack.Screen name='ContestResult' component={ContestResultScreen} />
          </RootStack.Group>
          <RootStack.Group
            screenOptions={{ headerShown: false }}
          >
            <RootStack.Screen name='Wallet' component={WalletScreen} />
            <RootStack.Screen name="EditProfile" component={EditProfile} />
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
            <RootStack.Screen name="Deposit" component={DepositScreen} />
            <RootStack.Screen name="Withdraw" component={WithdrawScreen} />
          </RootStack.Group>
          <RootStack.Group
            screenOptions={{ headerShown: false }}
          >
            <RootStack.Screen name="OnBoarding" component={OnBoardingScreen} />
          </RootStack.Group>
          <RootStack.Group
            screenOptions={{ headerShown: false }}
          >
            <RootStack.Screen name='Interest' component={Interest} />
            <RootStack.Screen name="Login" component={LoginScreen} />
            <RootStack.Screen name="Forgot" component={ForgotScreen} />
            <RootStack.Screen name="SignUp" component={SingUpScreen} />
          </RootStack.Group>
          <RootStack.Group
            screenOptions={{ headerShown: false }}
          >
            <RootStack.Screen name="Lost" component={Lost} />
            <RootStack.Screen name="Won" component={Won} />
          </RootStack.Group>
        </RootStack.Navigator>
      </NavigationContainer>
    );
  };

  export default RootNavigator;