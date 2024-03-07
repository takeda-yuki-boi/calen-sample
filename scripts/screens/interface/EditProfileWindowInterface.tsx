import { NavigationScreenProp } from 'react-navigation';
import { NavigationState } from './NavigationInterface';
import { RouteProp } from '@react-navigation/native';
//import ScreenResponseType from '../../enum/ScreenResponseType';
import { ReduxData } from '../../redux/reducer';
import { Action, Dispatch } from 'redux';
import UserData from '../../data/userData';

// navigation.navigate()で渡されるProps
interface NavigationProps {
    handleOnNavigateBack(iconUrl: string): void;
  }
  
  // navigation.navigate()で渡されるProps（遷移先の画面のStateで保持する）
  interface NavigationPropsForState {
    userData?: UserData | null;
  }
  
  // navigation.navigate()で渡されるProps（Factory内で代入するから呼び出し時には必要ない）
  interface NavigationPropsForFactory {
    /** 閉じるボタン押下時処理 */
    onClose(): void;
  }
  
  // クラス内で使用するProps
  interface IProps {
    navigation: NavigationScreenProp<NavigationState>;
    route: RouteProp<{ params: ProfileEditWindowRequest }, 'params'>;
    redux: ReduxData;
    dispatch: Dispatch<Action>;
  }
  
  // クラス内で使用するState
  interface IState {
    // statusBarStyle?: 'light' | 'dark';
    // temporaryIconUri: string;
    // isIconChanged: boolean;
    // isDatepickerOpened: boolean;
  }
  
  // 画面を閉じた際に渡す戻り値
  interface ScreenResponse {
    //responseType: ScreenResponseType;
  }
  
  export type Props = IProps;
  export type State = IState & NavigationPropsForState;
  export type ProfileEditWindowNavigateRequest = NavigationProps & NavigationPropsForState;
  export type ProfileEditWindowRequest = ProfileEditWindowNavigateRequest & NavigationPropsForFactory;
  export type ProfileEditWindowResponse = ScreenResponse;
  