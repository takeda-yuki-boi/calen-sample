//actionを受け取って実際にstateに処理を行う=reducer
import UserData from "../data/userData";
import PostData from "../data/postData";
import { actionObject } from "./actions";
import { USER_DATA, USER_POST_LIST } from "./types";

//stateの初期値
export interface ReduxData {
    userData: UserData | null;
    postData: PostData[] | null;
}

//stateの初期値
export const INITIAL_STATE: ReduxData = {
    userData: {
        userName: '山田太郎',
        userImageUrl: '',
    },
    postData: [
        {
            userName: '山田太郎',
            userImageUrl: '',
            postTitle: 'テスト',
            postImageUrl: '',
            postGoods: 0,
            postTime: 0
        }
    ],
}

//渡されたアクションオブジェクトのtype別でstateを更新
export default (state = INITIAL_STATE, action: actionObject) => {
    switch(action.type) {
        case USER_DATA:
            return Object.assign({}, state, { userData: action.userData });
        case USER_POST_LIST:
            return Object.assign({}, state, { userPostList: action.postData });
        default:
            return state;
    }
}