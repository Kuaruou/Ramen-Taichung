# Ramen-Taichung

### [[網站連結]](https://kuaruou.github.io/Ramen-Taichung/) ###

一、版面規劃

1. 依照不同載具瀏覽畫面大小卡片單排呈現的數量設定不同尺寸的圖片
2. 用子元素選取器讓不同色調的按鈕相間產生對比。
3. 在開頭使用Carousel讓封面有動態變化。
4. 用Modal呈現各店家介紹內容避免主版面資訊過多。

二、程式設計

1. 使用jQuery Ajax串接API取得JSON資料。
2. 用querySelectorAll選取各拉麵風格的按鈕(DOM)再以forEach迭代解決多項選取回傳的類陣列NodeList無法直接監聽的問題。
3. 使用BEM結合SCSS設計方便管理的程式碼。
