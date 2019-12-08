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

```html
<div id="carousel" class="carousel slide position-relative" data-ride="carousel">
    <ol class="carousel-indicators">
        <li data-target="#carousel" data-slide-to="0" class="active"></li>
        <li data-target="#carousel" data-slide-to="1"></li>
        <li data-target="#carousel" data-slide-to="2"></li>
    </ol>
    <div class="carousel-inner position-relative">
        <div class="carousel-item carousel__inner__pic active bg-cover"
                style="background-image:url(https://images.unsplash.com/photo-1533540499377-cf2dec26c3d7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80) ">
        </div>
        <div class="carousel-item carousel__inner__pic bg-cover "
                style="background-image:url(https://images.unsplash.com/photo-1486533803613-e0ce3d009238?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1789&q=80)">
        </div>
        <div class="carousel-item carousel__inner__pic bg-cover "
                style="background-image:url(https://images.unsplash.com/photo-1481882563558-a1b9f5f7744a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80)">
        </div>
        <div class="carousel__inner__caption">
            <div class="carousel__inner__caption__title">
                <h1>台中拉麵特選</h1>
                <h4 class="notification">提醒: 拉麵熱量高，少喝湯可以避免過多的鹽和脂肪</h4>
            </div>
        </div>
    </div>
    <a class="carousel-control-prev" href="#carousel" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
    </a>
    <a class="carousel-control-next" href="#carousel" role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
    </a>
</div>
```

4. 用Modal呈現各店家介紹內容避免主版面資訊過多。
5. 使用hover當滑鼠移過卡片時設定transform和transition製造zoom in zoom out的效果。

二、程式設計

1. 使用jQuery Ajax串接API取得JSON資料。
2. 用querySelectorAll選取各拉麵風格的按鈕(DOM)再以forEach迭代解決多項選取回傳的類陣列NodeList無法直接監聽的問題。
3. 使用BEM結合SCSS設計方便管理的程式碼。
4. 在卡片外層添加card-zoom效果時外層div內也要加入h-100避免卡片大小長短不一。
