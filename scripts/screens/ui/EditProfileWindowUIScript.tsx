import React, { Component } from 'react';
import { Switch, TextInput, TouchableOpacity, View, Button, Text } from 'react-native';
import { Props, State } from '../interface/EditProfileWindowInterface';
import HeaderComponent from '../../components/component/HeaderComponent';
import SampleSafeAreaView from '../../components/component/SampleSafeAreaView';
/* redux(暫定的にpropsなどを経由せず) */
import store from '../../redux/store';

export class EditProfileWindowUIScript extends Component<Props, State> {
    //コンストラクタ(現在のプロフィールを取得)
    constructor(props: Props) {
        super(props);

        console.log(store.getState().redux)
    
        this.state = {
            //userData: props.route.params.userData,
        //   temporaryIconUri: '',
        //   isIconChanged: false,
        //   isDatepickerOpened: false,
        };
    }

    //Reduxユーザープロフィール更新メソッド

    //戻る
    onPressGoBack = () => {
        this.props.navigation.goBack();
    }

    //レンダリング
    render() {
        const title = 'プロフィール編集';
        return (
            <SampleSafeAreaView>
                <HeaderComponent
                    title={title}
                    isShowAvatar={false}
                />
                {/* 戻るボタン */}
                <Button
                    title={'戻る'}
                    onPress={() => this.onPressGoBack()}
                />
                {/* 編集領域 */}
                <Text>{store.getState().redux!['userData']}</Text>
            </SampleSafeAreaView>
        )
    }
}