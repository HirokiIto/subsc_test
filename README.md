1. gitにファイルを置く
2. stripes 定期購読実装
3. login実装
4. ストリーミング実装
5. push通知
6. 動画アップロード実装

# user login
ユーザーのページ作成
/user/profile
/user/broadcast 定期購読している方だけ見れるように切り替えれる
/user/setting 本人だけ見れる

# home
ユーザー名クリックでprofile
サムネクリックでbroadcast


## 参考
React + ExpressでStripeの決済処理を実装する
https://code-log.hatenablog.com/entry/2019/09/01/234124
Stripeの決済をReactで使う
https://qiita.com/zaburo/items/7d4de7723b6d2445f356



################
react-stripe直下にconfigフォルダを作りシークレットキーなど記述