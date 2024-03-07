import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity, View, Text } from 'react-native';
import { Props, State } from '../interface/HeaderComponentInterface';
import { NavigationScreenProp, NavigationState, NavigationParams } from 'react-navigation';
/* component */
import SampleAvatar from './SampleAvatar';
import SampleIcon from '../../components/component/SampleIcon';
/* enum */
import SampleIconType from '../../enum/SampleIconType';
import ScreenNameType from '../../enum/ScreenNameType';

export default class HeaderComponent extends Component<Props, State> {
    //Headerのデフォルト詳細表示設定
    public static defaultProps: Props = {
        title: '', //ヘッダー見出し
        isShowAvatar: true, //アバターを表示するかフラグ
    }

    constructor(props: Props) {
        super(props);
    }

    //アバタータップ時
    onPressAvatar = () => {
        console.log('aaaaa')
        this.props.navigation?.navigate(ScreenNameType.EditProfileWindow);
    }

    render() {
        return (
            <View style={styles.container}>
                {/* アバター */}
                <View style={styles.leftArea}>
                    {this.props.isShowAvatar ?
                    <TouchableOpacity>
                        <SampleAvatar
                            navigation={this.props.navigation}
                            userId={'ID'}
                            isSetNavigateUserWindowAction={true}
                            onPress={() => this.onPressAvatar()}/>
                    </TouchableOpacity>
                    : <></>}
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