// 串接API
var url = 'data/RamenTaichung.json';//'https://data.kcg.gov.tw/api/action/datastore_search?resource_id=92290ee5-6e61-456f-80c0-249eae2fcc97';

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
console.log(initialData);
// 全域變數
const data = initialData.responseJSON;
const noDataText = '查無資料'
const btnValue = document.querySelectorAll('.content__buttons-btn');
const dataLen = data.length;
const contentBox = document.querySelector('.box');

// 首次載入所有卡片
loadAll();

// 選單 value 變更時重新載入
btnValue.forEach(function(el){
    el.addEventListener('click', mainFunction)
});

function mainFunction(e) {
    let typeValue = e.target.value;
    console.log(typeValue);
    if (typeValue === "全部") {
        loadAll()
    } else {
        loadType(typeValue)
    }
};

// 載入所有卡片內容
function loadAll() {
    contentBox.innerHTML = '';
    for (let i = 0; i < dataLen; i++) {
        // 卡片字串
        let id = data[i].Number;
        let siteBox =
            '<div class="col-md-6 col-lg-4 mb-3">' +
            '<div class="card bg-light h-100">' +
            '<div class="card-body d-flex flex-column">' +
            '<img class="card-img-top modal-img-height";" src="' + data[i].Picture + '" alt="">' +
            '<span class="card-title"><b>' + data[i].Name + '</b></span>' +
            '<span class="card-span"><i class="fas fa-mortar-pestle"></i><b>類型:</b>' + data[i].Type + '</span>' +
            '<span class="card-span"><i class="fas fa-map-marker-alt" style="width: 18px"></i><b>地址:</b>' + data[i].Address + '</span>' +
            '<span class="card-span"><i class="fas fa-phone-square-alt" style="width: 18px"></i><b>電話:</b>' + data[i].Tel + '</span>' +
            '<span class="card-span"><i class="far fa-clock" style="width: 18px"></i><b>時間:</b>' + data[i].OpenTime + '</span>' +
            '</div>' +
            '<div class="card-body d-flex flex-column">' +
            '<button type="button" class="introBtn button button-info mt-auto btn btn-info" data-toggle="modal" data-target="#ModalCenter" onclick="showIntro(&#39;' + id + '&#39;)">店家介紹</button>' +
            '</div>' +
            '</div>' +
            '</div>';
        contentBox.innerHTML += siteBox;
    }
}
// 載入風味分類卡片內容
function loadType(type) {
    contentBox.innerHTML = '';
    data.filter(function (item, index, array) {
        if (item.Type === type) {
            let id = item.Number;
            let siteBox =
                '<div class="col-md-6 col-lg-4 mb-3">' +
                '<div class="card bg-light h-100">' +
                '<div class="card-body d-flex flex-column">' +
                '<img class="card-img-top" style="height: 12rem;" src="' + item.Picture + '" alt="">' +
                '<span class="card-title"><b>' + item.Name + '</b></span>' +
                '<span class="card-span"><i class="fas fa-mortar-pestle"></i><b>類型:</b>' + item.Type + '</span>' +
                '<span class="card-span"><i class="fas fa-map-marker-alt" style="width: 18px"></i><b>地址:</b>' + item.Address + '</span>' +

                '<span class="card-span"><i class="fas fa-phone-square-alt" style="width: 18px"></i><b>電話:</b>' + item.Tel + '</span>' +
                '<span class="card-span"><i class="far fa-clock" style="width: 18px"></i><b>時間:</b>' + item.OpenTime + '</span>' +
                '</div>' +
                '<div class="card-body d-flex flex-column">' +
                '<button type="button" class="introBtn button button-info mt-auto btn btn-info" data-toggle="modal" data-target="#ModalCenter" onclick="showIntro(&#39;' + id + '&#39;)">店家介紹</button>' +
                '</div>' +
                '</div>' +
                '</div>';
            contentBox.innerHTML += siteBox;
        }
    });
}

// 載入 modal 內容
function showIntro(id) {
    console.log(id)
    document.querySelector('.modal-body').innerHTML = '';
    for (let i = 0; i < dataLen; i++) {
        if (id === data[i].Number) {
            console.log(id)
            let modal = 
            '<img class="card-img-top " style="height: 12%;" src="' + data[i].RamenPic + '" alt="">' +
            '<p class="card-span mt-3">' + data[i].Description + '</p>';
            document.querySelector('.modal-body').innerHTML += modal;
        }
    }
}
