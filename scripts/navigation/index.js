import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
/* navigator */
import { createStackNavigator } from '@react-navigation/stack';
import BottomTabNavigator from '../screens/ui/BottomTabWindowUIScript';
/* enum */
import ScreenNameType from '../enum/ScreenNameType';
/* screen */
import { TimelineWindowUIScript } from '../screens/ui/TimeLineWindowUIScript';
import { PostWindowUIScript } from '../screens/ui/PostWindowUIScript';
import { EditProfileWindowUIScript } from '../screens/ui/EditProfileWindowUIScript';
/* redux */
import store, { persistor } from '../redux/store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';


/**
 * フッタータブの下に表示される画面 = WindowStack
*/
const WindowStack = createStackNavigator();
export class WindowStackNavigator extends Component {
    render() {
        return (
            <WindowStack.Navigator initialRouteName={this.props.initialRouteName}>
                {/* タイムライン画面 */}
                <WindowStack.Screen
                    name={ScreenNameType.TimelineWindow}
                    component={TimelineWindowUIScript}
                    options={({ navigation, route }) => ({ headerShown: false })}
                />
                {/* 投稿画面 */}
                <WindowStack.Screen
                    name={ScreenNameType.PostWindow}
                    component={PostWindowUIScript}
                    options={({ navigation, route }) => ({ headerShown: false })}
                />
            </WindowStack.Navigator>
        )
    }
}

/**
 * フッタータブの上に表示される画面(ボトムナビ含む) = AppStack
*/
const AppStack = createStackNavigator();
class AppStackNavigator extends Component {
    render() {
        return (
            <AppStack.Navigator>
                <AppStack.Screen
                    name={'BottomTab'}
                    component={BottomTabNavigator}
                    options={({ navigation, route }) => ({ headerShown: false })}
                />
                <AppStack.Screen
                    name={ScreenNameType.EditProfileWindow}
                    component={EditProfileWindowUIScript}
                    options={({ navigation, route }) => ({ headerShown: false })}
                />
            </AppStack.Navigator>
        )
    }
}

const SwitchStack = createStackNavigator();
class SwitchStackNavigator extends Component {
  render() {
    return (
      <SwitchStack.Navigator>
        <SwitchStack.Screen
            name={'App'}
            component={AppStackNavigator}
            options={({ navigation, route }) => ({ headerShown: false, gestureEnabled: false })}
        />
      </SwitchStack.Navigator>
    );
  }
}


export default class Naviation extends Component {
    render() {
        return (
            //Redux・PersistGate導入したら
            // <Provider store={store}>
            //   <PersistGate loading={null} persistor={persistor}>
            //     <NavigationContainer>
            //       <WindowStackNavigator />
            //     </NavigationContainer>
            //   </PersistGate>
            // </Provider>
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                    <NavigationContainer>
                        <SwitchStackNavigator />
                    </NavigationContainer>
                </PersistGate>
            </Provider>
        );
    }
  }