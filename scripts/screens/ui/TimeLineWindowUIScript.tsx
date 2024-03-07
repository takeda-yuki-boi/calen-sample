import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
/* interface */
import { Props, State } from '../interface/TimeLineWindowInterface';
/* component */
import HeaderComponent from '../../components/component/HeaderComponent';
import SampleSafeAreaView from '../../components/component/SampleSafeAreaView';
import PostCard from '../../components/component/PostCard';

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
                    navigation={this.props.navigation}
                />
                <ScrollView>
                    {/* 投稿カードリスト(暫定) */}
                    <PostCard title='午前中仕事' imageUrl='https://picsum.photos/500/300?image=1' goods={10}/>
                    <PostCard title='会議用資料作成中' imageUrl='https://picsum.photos/500/300?image=2' goods={0}/>
                    <PostCard title='小休止' imageUrl='https://picsum.photos/500/300?image=3' goods={0}/>
                    <PostCard title='お気に入りの文房具' imageUrl='https://picsum.photos/500/300?image=4' goods={3}/>
                    <PostCard title='もうひと踏ん張り' imageUrl='https://picsum.photos/500/300?image=5' goods={0}/>
                </ScrollView>
            </SampleSafeAreaView>
        )
    }
}