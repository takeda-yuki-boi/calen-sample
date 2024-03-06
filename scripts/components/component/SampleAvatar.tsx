/*
    アバター表示用汎用コンポーネント
    Interfaceの作成は省略
*/
import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Props, State } from '../interface/SampleAvatarInterface';
import { Avatar } from 'react-native-elements';


export default class SampleAvatar extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
    
        this.state = {
            // iconUrl: this.props.iconUrl,
            iconUrl: require('../../../resources/icon_images/post.png'), //暫定
        };
    }

    //ライフサイクル系処理
    //Reduxから情報取得か？

    //TODO
    //アバター押下時の処理 => プロフィール設定画面遷移
    onPress() {
        if(this.props.onPress){
            this.props.onPress();
        }
    };

    //レンダリング
    render() {
        //let iconUrl = this.props.iconUrl ?? this.state.iconUrl;
        let iconUrl = 'https://picsum.photos/350/165?random' //暫定
        return (
            <View style={styles.container}>
                <Avatar
                    size={'small'}
                    rounded
                    source={{ uri: iconUrl }}
                    containerStyle={[{ backgroundColor:'#AAAAAA' }, this.props.style]}
                    onPress={() => this.onPress()}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        paddingTop: 8,
        height: 64,
        marginTop: 20,
        backgroundColor: '#FFFFFF',
    },
});
