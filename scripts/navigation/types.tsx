import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { CompositeScreenProps, NavigatorScreenParams } from "@react-navigation/native";
import { NativeStackNavigationProp, NativeStackScreenProps } from "@react-navigation/native-stack";

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export type RootStackParamList = {
  Root: undefined;
  Modal1: undefined;
  Modal2: undefined;
  Modal3: undefined;
  Modal4: undefined;
  Modal5: undefined;
};

export type RootTabParamList = {
  HomeTab: NavigatorScreenParams<MainStackParamList> & {modalNavigation: NativeStackNavigationProp<RootStackParamList>};
  TimelineTab: NavigatorScreenParams<MainStackParamList> & {modalNavigation: NativeStackNavigationProp<RootStackParamList>};
  ChatTab: NavigatorScreenParams<MainStackParamList> & {modalNavigation: NativeStackNavigationProp<RootStackParamList>};
  NotificationTab: NavigatorScreenParams<MainStackParamList> & {modalNavigation: NativeStackNavigationProp<RootStackParamList>};
};

export type MainStackParamList = {
  Home: {modalNavigation: NativeStackNavigationProp<RootStackParamList>};
  Timeline: {modalNavigation: NativeStackNavigationProp<RootStackParamList>};
  ChatList: {modalNavigation: NativeStackNavigationProp<RootStackParamList>};
  Notification: {modalNavigation: NativeStackNavigationProp<RootStackParamList>};
  Stack1: undefined;
  Stack2: undefined;
  Stack3: undefined;
  Stack4: undefined;
  Stack5: undefined;
}

export type ModalStackParamList = {
  Modal1: undefined;
  Modal2: undefined;
  Modal3: undefined;
  Modal4: undefined;
  Modal5: undefined;
}

export type RootTabScreenProps<Screen extends keyof RootTabParamList> = CompositeScreenProps<
  BottomTabScreenProps<RootTabParamList, Screen>,
  NativeStackScreenProps<RootStackParamList>
>;

export type RootStackScreenProps<Screen extends keyof RootStackParamList> = NativeStackScreenProps<
  RootStackParamList,
  Screen
>;

export type MainStackScreenProps<Screen extends keyof MainStackParamList> = NativeStackScreenProps<
  MainStackParamList,
  Screen
>;

export type ModalStackScreenProps<Screen extends keyof ModalStackParamList> = NativeStackScreenProps<
  ModalStackParamList,
  Screen
>;
