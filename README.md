# Ramen-Taichung

![image]()

### [[網站連結]](https://kuaruou.github.io/Ramen-Taichung/) ###

一、版面規劃

1. 依照不同載具瀏覽畫面大小卡片單排呈現的數量設定不同尺寸的圖片，避免圖片尺寸變形過於嚴重。

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

```css
.btn {
    width: 120px;
    font-size: 18px;
    @media (max-width: 960px) {
        width: 90px;
        font-size: 14px;
        }
        
        &:nth-child(2n-1) {
            color: #fff;
            background-color: #78c2c4;
            border-color: #78c2c4;
            }
        &:nth-child(2n) {
            color: #947A6D;
            background-color:#fdefe1;
            border-color: navajowhite;
            }
    }
```
        
3. 在開頭使用Carousel讓封面有動態變化。

4. 用Modal呈現各店家介紹內容避免主版面資訊過多。

5. 使用hover當滑鼠移過卡片時設定transform和transition製造zoom in zoom out的效果。

```css
.card-zoom {
    overflow: hidden;

    &:hover {
        transform: scale(1.05);
        transition: all 0.3s ease;
    }
}
```

二、程式設計

1. 使用jQuery Ajax串接API取得JSON資料。

```javascript
var initialData = $.ajax({
    type: "GET",
    url: url,
    data: {},
    dataType: "json",
    async: false, // 取消非同步
    success: function (msg) {
        console.log('success')
    }
})
```

2. 用querySelectorAll選取各拉麵風格的按鈕(DOM)再以forEach迭代解決多項選取回傳的類陣列NodeList無法直接監聽的問題。

```javascript
const btnValue = document.querySelectorAll('.content__buttons-btn');

btnValue.forEach(function(el){
    el.addEventListener('click', mainFunction)
});
```

3. 在卡片外層添加card-zoom效果時外層div內也要加入h-100避免卡片大小長短不一。

```javascript
'<div class="card-zoom h-100">'+ 
'<div class="card bg-light h-100">' +
```
