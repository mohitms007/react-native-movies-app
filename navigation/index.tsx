/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import {AntDesign, MaterialIcons, Ionicons} from "@expo/vector-icons";
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer, DefaultTheme, DarkTheme} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as React from 'react';
import {ColorSchemeName, Pressable} from 'react-native';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import ModalScreen from '../screens/ModalScreen';
import NotFoundScreen from '../screens/NotFoundScreen';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import SearchScreen from '../screens/SearchScreen';
import {HomeParamList, RootStackParamList, RootTabParamList, RootTabScreenProps} from '../types';
import LinkingConfiguration from './LinkingConfiguration';
import DetailScreen from "../screens/DetailScreen";

export default function Navigation({colorScheme}: { colorScheme: ColorSchemeName }) {
    return (
        <NavigationContainer
            linking={LinkingConfiguration}
            theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
            <RootNavigator/>
        </NavigationContainer>
    );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Root" component={BottomTabNavigator} options={{headerShown: false}}/>
            <Stack.Screen name="NotFound" component={NotFoundScreen} options={{title: 'Oops!'}}/>
            <Stack.Group screenOptions={{presentation: 'modal'}}>
                <Stack.Screen name="Modal" component={ModalScreen}/>
            </Stack.Group>
        </Stack.Navigator>
    );
}

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {
    const colorScheme = useColorScheme();

    return (
        <BottomTab.Navigator
            initialRouteName="Home"
            screenOptions={{
                tabBarActiveTintColor: Colors[colorScheme].tint,
            }}>
            <BottomTab.Screen
                name="Home"
                component={TabOneNavigator}
                options={{
                    headerShown: false,
                    tabBarIcon: ({color}) => <AntDesign name={"home"} size={24} color={color}
                    />
                }}
            />
            <BottomTab.Screen
                name="Coming_Soon"
                component={SearchScreen}
                options={{
                    // title: 'Coming Soon',
                    tabBarIcon: ({color}) => <MaterialIcons name='video-library' size={24} color={color}/>,
                }}
            />
            <BottomTab.Screen
                name="Search"
                component={SearchScreen}
                options={{
                    // title: 'Search',
                    headerShown: false,
                    tabBarIcon: ({color}) => <Ionicons name='search' size={24} color={color}/>,
                }}
            />
            <BottomTab.Screen
                name="Downloads"
                component={SearchScreen}
                options={{
                    // title: 'Coming Soon',
                    tabBarIcon: ({color}) => <AntDesign name='download' size={24} color={color}/>,
                }}
            />
        </BottomTab.Navigator>
    );
}


const HomeStack = createNativeStackNavigator<HomeParamList>()


function TabOneNavigator() {
    return (
        <HomeStack.Navigator>
                  <HomeStack.Screen name="HomeScreen"
                              component={HomeScreen}
                              options={{headerShown: false}}
            />
            <HomeStack.Screen name="DetailScreen"
                              component={DetailScreen}
                              options={{title: ''}}
            />
       
        </HomeStack.Navigator>
    )
}

