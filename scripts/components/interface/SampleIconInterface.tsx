import { ImageStyle } from 'react-native';
import SampleIconSizeType from '../../enum/SampleIconSizeType';
import SampleIconType from '../../enum/SampleIconType';

// クラス内で使用するProps
interface IProps {
  // アイコンタイプ
  type: SampleIconType;

  // サイズタイプ
  sizeType?: SampleIconSizeType;

  // スタイル
  style?: ImageStyle;
}

// クラス内で使用するState
interface IState {}

export type Props = IProps;
export type State = IState;
