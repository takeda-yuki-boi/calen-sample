import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';
/* interface */
import { Props, State } from '../interface/TimeLineWindowInterface';
/* component */
import HeaderComponent from '../../components/component/HeaderComponent';
import SampleSafeAreaView from '../../components/component/SampleSafeAreaView';

export class TimelineWindowUIScript extends Component<Props, State> {
    //コンストラクタ
    constructor(props: Props) {
        super(props);
        this.state = {
          isRefreshing: false,
        };
    }

    //レンダリング
    render(): React.ReactNode {
        const title = 'タイムライン';
        return (
            <SampleSafeAreaView>
                <HeaderComponent
                    title={title}
                    isShowAvatar={true}
                />
                <Text>これはタイムラインです</Text>
            </SampleSafeAreaView>
        )
    }
}