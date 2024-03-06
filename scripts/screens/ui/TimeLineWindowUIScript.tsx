import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';
/* interface */
import { Props, State } from '../interface/TimeLineWindowInterface';

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
        return (
            <>
                <Text>これはタイムラインです</Text>
            </>
        )
    }
}