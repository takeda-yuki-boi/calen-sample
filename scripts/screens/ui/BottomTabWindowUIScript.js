import { Component } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Overlay } from 'react-native-elements';
import ScreenNameType from '../../enum/ScreenNameType';
import { WindowStackNavigator } from '../../navigation';
import SampleIcon from '../../components/component/SampleIcon';
import SampleIconType from '../../enum/SampleIconType';
import SampleSafeAreaView from '../../components/component/SampleSafeAreaView';

// 各タブに表示する画面の設定
class TimelineWindowStack extends Component {
    render() {
        return <WindowStackNavigator initialRouteName={ScreenNameType.TimelineWindow} />;
    }
}

class PostWindowStack extends Component {
    render() {
        return <WindowStackNavigator initialRouteName={ScreenNameType.PostWindow} />;
    }
}

// ボトムタブの描画設定
class BottomTabBar extends Component {
    constructor() {
        super();
        this.state = {
            shouldVisibledPostMenu: false,
        };
    }

    render() {
        let state = this.props.state;
        let descriptors = this.props.descriptors;
        let navigation = this.props.navigation;
        let tabLabelList = ['タイムライン', '投稿'];
        let tabIconTypeList = [
            SampleIconType.Timeline,
            SampleIconType.Post,
        ];
        let postTabIndex = 1;

        return (
            <View
                style={{
                flexDirection: 'row',
                backgroundColor: '#FFFFFF',
                alignItems: 'center',
                height: 56,
                borderTopWidth: 0.3,
                borderColor: '#EEEEEE',
                }}
            >
                {state.routes.map((route, index) => {
                    const { options } = descriptors[route.key];
                    const label = tabLabelList[index];
                    const SampleIconType = tabIconTypeList[index];
                    const isFocused = state.index === index;
                    const isPostTabIndex = index == postTabIndex;
                    //タブ押下時
                    const onPress = () => {
                        const event = navigation.emit({
                          type: 'tabPress',
                          target: route.key,
                          canPreventDefault: true,
                        });
                        //タブタップ時に対応した画面に遷移
                        navigation.navigate({ name: route.name, merge: true });
                    };
                    //タブ長押し
                    const onLongPress = () => {
                        navigation.emit({
                            type: 'tabLongPress',
                            target: route.key,
                        });
                    };
                    const iconColor = isFocused ? '#3F51B5' : '#AAAAAA';
                    const iconSize = 25;
                    return (
                        <TouchableOpacity
                            key={index}
                            accessibilityRole="button"
                            accessibilityState={isFocused ? { selected: true } : {}}
                            accessibilityLabel={options.tabBarAccessibilityLabel}
                            testID={options.tabBarTestID}
                            onPress={onPress}
                            onLongPress={onLongPress}
                            style={{
                                flex: 1,
                                height: '100%',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}
                        >
                            <SampleIcon type={SampleIconType} style={{ width: iconSize, height: iconSize, tintColor: iconColor }} />
                        </TouchableOpacity>
                    );
                })}
            </View>
        )
    }
}

const BottomTab = createBottomTabNavigator();
export default class BottomTabNavigator extends Component {
    render() {
        return (
            <SampleSafeAreaView>
                <BottomTab.Navigator initialRouteName="TimeLineWindowStack" tabBar={(props) => <BottomTabBar {...props} />}>
                    <BottomTab.Screen
                        name={ScreenNameType.TimelineWindow}
                        component={TimelineWindowStack}
                        options={({ navigation, route }) => ({ headerShown: false })}
                    />
                    <BottomTab.Screen
                        name={ScreenNameType.PostWindow}
                        component={PostWindowStack}
                        options={({ navigation, route }) => ({ headerShown: false })}
                    />
                </BottomTab.Navigator>
            </SampleSafeAreaView>
        )
    }
}