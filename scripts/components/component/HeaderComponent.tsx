import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity, View, Text } from 'react-native';
import { Props, State } from '../interface/HeaderComponentInterface';
/* component */
import SampleAvatar from './SampleAvatar';
import SampleIcon from '../../components/component/SampleIcon';
/* enum */
import SampleIconType from '../../enum/SampleIconType';

export default class HeaderComponent extends Component<Props, State> {
    //Headerのデフォルト詳細表示設定
    public static defaultProps: Props = {
        title: '', //ヘッダー見出し
        isShowAvatar: true, //アバターを表示するかフラグ
    }

    constructor(props: Props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                {/* アバター */}
                <View style={styles.leftArea}>
                    <SampleAvatar />
                </View>
                {/* 見出し */}
                <View style={styles.centerArea}>
                    <Text style={styles.title}>{this.props.title}</Text>
                </View>
                {/* オプションアイコン(ダミー) */}
                <View style={styles.rightArea}>
                    <SampleIcon type={SampleIconType.Hamburger} style={{ width: 30, height: 30, tintColor: '#AAAAAA' }} />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    //ヘッダー全体
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 64,
        paddingHorizontal: 0,
        backgroundColor: '#FFFFFF',
    },
    leftArea: {
        flex: 0.2,
        alignItems: 'center'
    },
    //見出し領域(中央)
    centerArea: {
        flex: 0.6,
        alignItems: 'center'

    },
    //オプション領域(右側)
    rightArea: {
        flex: 0.2,
        alignItems: 'center'
    },
    //見出し
    title: {
        fontWeight: 'bold'
    },
});