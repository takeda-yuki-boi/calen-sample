import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';
/* interface */
import { Props, State } from '../interface/PostWindowInterface';
/* component */
import HeaderComponent from '../../components/component/HeaderComponent';
import SampleSafeAreaView from '../../components/component/SampleSafeAreaView';

export class PostWindowUIScript extends Component<Props, State> {
    //コンストラクタ
    constructor(props: Props) {
        super(props);
        this.state = {
          isRefreshing: false,
        };
    }

    //レンダリング
    render(): React.ReactNode {
        const title = '新規投稿';
        return (
            <SampleSafeAreaView>
                <HeaderComponent
                    title={title}
                    isShowAvatar={true}
                    navigation={this.props.navigation}
                />
                <Text>これは投稿画面です</Text>
            </SampleSafeAreaView>
        )
    }
}