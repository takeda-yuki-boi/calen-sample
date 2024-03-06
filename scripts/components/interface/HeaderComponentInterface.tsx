//共通汎用ヘッダーコンポーネント
import SampleIconType from '../../enum/SampleIconType';

// クラス内で使用するProps
interface IProps {
    title: string; //ヘッダータイトル
    isShowAvatar: boolean //アバターを表示するかフラグ
}

// クラス内で使用するState
interface IState {}

export type Props = IProps;
export type State = IState;