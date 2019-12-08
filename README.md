# Ramen-Taichung

### [[網站連結]](https://kuaruou.github.io/Ramen-Taichung/) ###

一、版面規劃

1. 依照不同載具瀏覽畫面大小卡片單排呈現的數量設定不同尺寸的圖片

```css
.modal-img-height {
    height: 12rem;
    @media (max-width: 1200px) {
        height: 10rem;
    }
    @media (max-width: 767px) {
        height: 16rem;
    }
    @media (max-width: 572px) {
        height: 12rem;
    }
    @media (max-width: 420px) {
        height: 10rem;
    }
}
```

2. 用子元素選取器讓不同色調的按鈕相間產生對比。
3. 在開頭使用Carousel讓封面有動態變化。
4. 用Modal呈現各店家介紹內容避免主版面資訊過多。
5. 使用hover當滑鼠移過卡片時設定transform和transition製造zoom in zoom out的效果。

二、程式設計

1. 使用jQuery Ajax串接API取得JSON資料。
2. 用querySelectorAll選取各拉麵風格的按鈕(DOM)再以forEach迭代解決多項選取回傳的類陣列NodeList無法直接監聽的問題。
3. 使用BEM結合SCSS設計方便管理的程式碼。
4. 在卡片外層添加card-zoom效果時外層div內也要加入h-100避免卡片大小長短不一。
