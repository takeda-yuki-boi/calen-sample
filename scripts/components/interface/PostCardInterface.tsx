//タイムライン上で表示されるカード用インターフェース
import { ImageProps } from 'react-native';

// クラス内で使用するProps
interface IProps {
    imageUrl: string, //投稿画像URL
    avatarUrl: string, //投稿者アバター画像URL
    title: string, //投稿タイトル
    goods: number, //いいね数
}

// クラス内で使用するState
interface IState {
    goods: number,
}

export type Props = IProps & ImageProps;
export type State = IState;