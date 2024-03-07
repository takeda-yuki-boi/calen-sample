//投稿情報を定義
import UserData from "./userData";
export default class PostData extends UserData {
    //投稿タイトル
    public postTitle!: string;

    //投稿画像URL
    public postImageUrl!: string;

    //投稿いいね数
    public postGoods!: number;

    //投稿日時UNIX
    public postTime!: number;
}