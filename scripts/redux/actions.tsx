//stateに変更を加える処理の単位=action
//actionのタイプはstringで区別する
import UserData from "../data/userData";
import PostData from "../data/postData";
import { ReduxData } from "./reducer";
import { USER_DATA, USER_POST_LIST } from './types'

//actionオブジェクト
export interface actionObject extends ReduxData {
    type: string;
};

export const setUserData = (userData: UserData | null) => ({
    type: USER_DATA,
    userData,
});

export const setUserPostList = (userPostList: PostData[] | null) => ({
    type: USER_POST_LIST,
    userPostList
})