import { ViewProps } from 'react-native';

// クラス内で使用するProps
interface IProps {
  statusBarStyle?: 'light' | 'dark';
}

// クラス内で使用するState
interface IState {}

export type Props = IProps & ViewProps;
export type State = IState;
