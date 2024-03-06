/*
    タイムライン上で表示されるカード用コンポーネント
    投稿データを1件受け取って表示する
    いいねボタンを押下したら+1する
*/
import React, { Component } from 'react';
import { Platform } from 'react-native';
import {Props, State} from '../interface/PostCardInterface'
import { StyleSheet, View, Text, Image } from 'react-native';
import { Button } from 'react-native-elements';
import SampleAvatar from './SampleAvatar';

export default class PostCard extends Component<Props, State> {
    //コンストラクター
    constructor(props: Props) {
        super(props);
    
        this.state = {
            goods: this.props.goods,
        };
      }
    
    //サンプル用のデフォルト詳細表示設定
    public static defaultProps: Props = {
        title: '', //見出し
        imageUrl: '', //画像URL
        avatarUrl: '', //アバター画像URL
        goods: 0, //いいね数
    }

    //いいねボタンが押された時
    onPressGoodButton = ():void => {
        this.setState({goods: this.state.goods + 1})
    }

    //レンダリング
    render() {
        return (
            <View style={Platform.OS === 'android' ? styles.containerAndroid : styles.containerIos}>
                <Image style={{width: '100%', height: 150}} source={{uri: this.props.imageUrl}}/>
                <View style={styles.cardContet}>
                    <View style={styles.cardAvatar}>
                        <SampleAvatar />
                    </View>
                    <View style={styles.cardTitle}>
                        <Text>{this.props.title}</Text>
                    </View>
                    <View style={styles.cardGood}>
                        <Button
                            title={String(this.state.goods) + ' いいね!'}
                            titleStyle={{fontSize: 10}}
                            onPress={() => this.onPressGoodButton()}
                        />
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    //カード全体(iOS)
    containerIos: {
        height: 200,
        paddingHorizontal: 0,
        backgroundColor: '#FFFFFF',
        marginRight: 10,
        marginLeft: 10,
        marginTop: 10,
        shadowColor: '#000000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowRadius: 0,
        shadowOpacity: 1,
    },
    //カード全体(Android)
    containerAndroid: {
        height: 250,
        paddingHorizontal: 0,
        backgroundColor: '#FFFFFF',
        marginRight: 10,
        marginLeft: 10,
        marginTop: 10,
        shadowColor: '#000000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowRadius: 0,
        shadowOpacity: 1,
        elevation: 2,
    },
    //カードコンテンツ部分
    cardContet: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    //アバター部分
    cardAvatar: {
        flex: 0.2
    },
    //タイトル部分
    cardTitle: {
        flex: 0.6,
        alignItems: 'center'
    },
    //いいね部分
    cardGood: {
        flex: 0.2,
        alignItems: 'center'
    }
});