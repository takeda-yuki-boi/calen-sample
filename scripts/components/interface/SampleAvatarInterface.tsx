import { ViewProps } from 'react-native';
//import SampleAvatarSizeType from '../../enum/SampleAvatarSizeType';
import { NavigationScreenProp, NavigationState, NavigationParams } from 'react-navigation';
//import UserData from '../../data/server/UserData';

//アバターサイズenum
enum SampleAvatarSizeType {
    None = 0,
    Small,
    MediumSmall,
    Medium,
    Large,
  }
  

// クラス内で使用するProps
interface IProps {
  // アバターサイズ
  sizeType?: SampleAvatarSizeType;

  // ユーザーID
  userId?: string;

  // アイコンURL
  iconUrl?: string;

  // グループか否か
  isGroup?: boolean;

  // タップ時処理
  onPress?(): void;

  // タップ時にユーザー画面に遷移する処理を設定するか否か
  isSetNavigateUserWindowAction?: boolean;

  // ユーザー画面遷移用navigation（オプション）
  navigation?: NavigationScreenProp<NavigationState, NavigationParams>;

  // ユーザー画面遷移用ユーザーデータ（オプション）
  //userData?: UserData;

  // タップ処理を無効にするか否か
  disableOnPress?: boolean;
}

// クラス内で使用するState
interface IState {
  // アイコンURL
  iconUrl?: string;
}

export type Props = IProps & ViewProps;
export type State = IState;
