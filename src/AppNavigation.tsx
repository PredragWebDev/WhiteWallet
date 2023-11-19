import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Explorer from './Tabs/Explorer';
import Send from './Tabs/Send';
import Receive from './Tabs/Receive';
import CoinJoin from './Tabs/CoinJoin';
import Settings from './Tabs/Settings';
import Demo from '@/containers/DemoScreen';
import Welcome from './containers/Welcome';
import GenerateWallet from './containers/GenerateWallet';
import RecoverWallet from './containers/RecoverWallet';

export const ExplorerScreen = 'WhiteWallet.ExplorerScreen';
export const CoinJoinScreen = 'WhiteWallet.CoinJoinScreen';
export const ReceiveScreen = 'WhiteWallet.ReceiveScreen';
export const SendScreen = 'WhiteWallet.SendScreen';
export const SettingsScreen = 'WhiteWallet.SettingsScreen';
export const TabsScreen = 'WhiteWallet.TabsScreen';

export const DemoScreen = 'WhiteWallet.DemoScreen';

export const WelcomeScreen = 'WhiteWallet.WelcomeScreen';
export const GenerateWalletScreen = 'WhiteWallet.GenerateWalletScreen';
export const RecoverWalletScreen = 'WhiteWallet.RecoverWalletScreen';

const AppStack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const TabNavigation = () => {
    return (
        <Tab.Navigator
            initialRouteName={ExplorerScreen}
            screenOptions={{
                headerTitleAlign: 'center'
            }}
        >
            <Tab.Screen
                name={ExplorerScreen}
                component={Explorer}
                options={{
                    title: 'Expoloer'
                }}
            />
            <Tab.Screen
                name={SendScreen}
                component={Send}
                options={{
                    title: 'Send'
                }}
            />
            <Tab.Screen
                name={ReceiveScreen}
                component={Receive}
                options={{
                    title: 'Receive'
                }}
            />
            <Tab.Screen
                name={CoinJoinScreen}
                component={CoinJoin}
                options={{
                    title: 'CoinJoin'
                }}
            />
            <Tab.Screen
                name={SettingsScreen}
                component={Settings}
                options={{
                    title: 'Settings'
                }}
            />
        </Tab.Navigator>
    )
}

const MainNavigation = () => {
    return (
        <AppStack.Navigator
            screenOptions={{
                headerTitleAlign: 'center',
                headerTitleStyle: {

                }
            }}
        >
            <AppStack.Group screenOptions={{
                headerShown: false
            }}>
                <AppStack.Screen
                    name={WelcomeScreen}
                    component={Welcome}
                />
                <AppStack.Screen
                    name={GenerateWalletScreen}
                    component={GenerateWallet}
                />
                <AppStack.Screen
                    name={RecoverWalletScreen}
                    component={RecoverWallet}
                />
                <AppStack.Screen
                    name={DemoScreen}
                    component={Demo}
                />
            </AppStack.Group>
            <AppStack.Screen
                name={TabsScreen}
                component={TabNavigation}
                options={{
                    headerShown: false
                }}
            />
        </AppStack.Navigator>
    )
}

const AppNavigation = () => {
    return (
        <NavigationContainer>
            <MainNavigation />
        </NavigationContainer>
    )
}

export default AppNavigation