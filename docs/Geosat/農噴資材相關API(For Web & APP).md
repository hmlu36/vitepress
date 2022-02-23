# 農噴資材相關API(For Web & APP)


###### tags: `經緯航太`


[TOC]

---

### 1-1 作物代碼下載 ![GET](https://img.shields.io/badge/-GET-blue.svg)
URL: https://cloud.geosat.com.tw/Geoapi/ResumeRecord/GetCrop/{userId?}

|參數名稱|參數說明|備註|
|---|---|---|
|userId|使用者Id||

Response:
1. ![200](https://img.shields.io/badge/-200-brightgreen.svg)
```json=
{
  "success": true,
  "message": null,
  "data": [
    {
      "cropName": "水稻",
      "cropId": 11101
    },
    {
      "cropName": "旱稻",
      "cropId": 11108
    },
    {
      "cropName": "太空包菇",
      "cropId": 11111
    },
    ...
  ]
}
```
|回傳欄位名稱|回傳欄位說明|備註|
|---|---|---|
|cropId|作物代碼||
|cropName|作物描述||


### 1-2 品種資料下載 ![GET](https://img.shields.io/badge/-GET-blue.svg)
URL: https://cloud.geosat.com.tw/Geoapi/ResumeRecord/GetClassBreed/{cropId}/{userId?}

|參數名稱|參數說明|備註|
|---|---|---|
|cropId|作物代碼||
|userId|使用者Id||

Response:
1. ![200](https://img.shields.io/badge/-200-brightgreen.svg)
```json=
{
  "success": true,
  "message": null,
  "data": [
    {
      "cropId": "12201",
      "breedNo": 200748,
      "breedName": "椪柑",
    ,
    ...
  ]
}
```

|回傳欄位名稱|回傳欄位說明|備註|
|---|---|---|
|cropId|作物代碼||
|breedNo|品種代碼||
|breedName|品種描述||


### 1-3 認證類型下載 ![GET](https://img.shields.io/badge/-GET-blue.svg)
URL: https://cloud.geosat.com.tw/Geoapi/ResumeRecord/GetClassBreedCertification/{cropId}/{breedNo}/{userId}

|參數名稱|參數說明|
|---|---|
|cropId|作物代碼|
|breedNo|品種代碼|
|userId|使用者Id|

Response:
1. ![200](https://img.shields.io/badge/-200-brightgreen.svg)
```json=
{
  "success": true,
  "message": null,
  "data": [
    {
      "cropId": 15601,
      "cropName": "茶葉",
      "breedNo": 203009,
      "breedName": "金萱紅茶",
      "userId": "34303831-26c5-442d-9c1d-d04eca57e9ab",
      "certificationType": "有機"
    },
    {
      "cropId": 12201,
      "cropName": "椪柑",
      "breedNo": 200748,
      "breedName": "椪柑",
      "userId": "34303831-26c5-442d-9c1d-d04eca57e9ab",
      "certificationType": "產銷履歷"
    },
    {
      "cropId": 12201,
      "cropName": "椪柑",
      "breedNo": 200748,
      "breedName": "椪柑",
      "userId": "34303831-26c5-442d-9c1d-d04eca57e9ab",
      "certificationType": "有機"
    },
    ...
}
```

|回傳欄位名稱|回傳欄位說明|備註|
|---|---|---|
|cropId|作物代碼||
|cropName|作物描述||
|breedNo|品種代碼||
|breedName|品種描述||
|userId|使用者Id||
|certificationType|認證類型||


### 1-4 所有作物品種下載 ![GET](https://img.shields.io/badge/-GET-blue.svg)
URL: https://cloud.geosat.com.tw/Geoapi/ResumeRecord/GetAllClassBreed/{userId}

|參數名稱|參數說明|
|---|---|
|userId|使用者Id|

Response:
1. ![200](https://img.shields.io/badge/-200-brightgreen.svg)
```json=
{
  "success": true,
  "data": [
    {
      "id": "e1367419-529f-4982-a9a8-d165ff3486ee",
      "cropId": 11101,
      "cropName": "水稻",
      "breedNo": 535,
      "breedName": "台農71號",
      "userId": "29c465d1-c680-44db-a567-74b1454c8c64",
      "certificationType": ""
    }
  ]
}
```

|回傳欄位名稱|回傳欄位說明|屬性|
|---|---|---|
|id|作物代碼流水號|guid|
|cropId|作物代碼|int|
|cropName|作物描述|string|
|breedNo|品種代碼|int|
|breedName|品種描述|string|
|userId|使用者Id|guid|
|certificationType|認證類型|string|

### 1-5 作物代碼上傳 ![POST](https://img.shields.io/badge/-POST-brightgreen.svg)
URL: https://cloud.geosat.com.tw/Geoapi/ResumeRecord/CreateClassBreed

|欄位|名稱|屬性|
|---|---|---|
|CropId|作物代碼|int|
|BreedNo|品種代碼|int|
|UserId|使用者ID|guid|
|CertificationType|認證類型|string|


Response:
1. ![200](https://img.shields.io/badge/-200-brightgreen.svg)
```json=
{
  "success": true,
  "message": null,
  "data": null
}
```


### 1-6 作物代碼刪除 ![POST](https://img.shields.io/badge/-POST-brightgreen.svg)
URL: https://cloud.geosat.com.tw/Geoapi/ResumeRecord/DeleteClassBreed

|欄位|名稱|屬性|
|---|---|---|
|Id|作物流水號ID|guid|
|UserId|使用者ID|guid|


Response:
1. ![200](https://img.shields.io/badge/-200-brightgreen.svg)
```json=
{
  "success": true,
  "message": null,
  "data": null
}
```


### 1-7 作物代碼編輯 ![POST](https://img.shields.io/badge/-POST-brightgreen.svg)
URL: https://cloud.geosat.com.tw/Geoapi/ResumeRecord/EditClassBreed


|欄位|名稱|屬性|備註|
|---|---|---|---|
|Id|作物流水號|guid||
|CropId|作物代碼|int||
|BreedNo|品種代碼|int||
|UserId|使用者ID|guid|
|CertificationType|認證類型|string|可不填|


Response:
1. ![200](https://img.shields.io/badge/-200-brightgreen.svg)
```json=
{
  "success": true,
  "message": null,
  "data": null
}
```

### 2-1 農藥種類下載 ![GET](https://img.shields.io/badge/-GET-blue.svg)
URL: https://cloud.geosat.com.tw/Geoapi/ResumeRecord/GetPestCategory/{userId?}

|參數名稱|參數說明|備註|
|---|---|---|
|userId|使用者Id||

Response:
1. ![200](https://img.shields.io/badge/-200-brightgreen.svg)
```json=
{
  "success": true,
  "message": null,
  "data": [
    {
      "key": "殺蟎劑(ACARICIDE)",
      "value": "殺蟎劑(ACARICIDE)"
    },
    {
      "key": "殺茵劑(FUNGICIDE)",
      "value": "殺茵劑(FUNGICIDE)"
    },
    {
      "key": "除藻劑(ALGECIDE)",
      "value": "除藻劑(ALGECIDE)"
    },
    ...
  ]
}
```
|參數名稱|參數說明|
|---|---|
|key|農藥種類名稱|
|value|農藥種類名稱|


### ~~2-2 農藥資材類型下載(Deprecated)~~ ![GET](https://img.shields.io/badge/-GET-blue.svg)
URL: https://cloud.geosat.com.tw/Geoapi/ResumeRecord/GetPestType/{category}/{userId}

|參數名稱|參數說明|備註|
|---|---|---|
|category|農藥種類||
|userId|使用者Id||

Response:
1. ![200](https://img.shields.io/badge/-200-brightgreen.svg)
```json=
{
  "success": true,
  "message": null,
  "data": [
    {
      "category": "G-除藻劑(ALGECIDE)"
      "pestType": "液"
    },
    ...
  ]
}
```
|參數名稱|參數說明|
|---|---|
|category|農藥種類名稱|
|pestType|農藥資材類型|



### 2-3 農藥明細下載 ![GET](https://img.shields.io/badge/-GET-blue.svg)
URL: https://cloud.geosat.com.tw/Geoapi/ResumeRecord/GetPest/{category}/{pestType?}/{userId?}

|參數名稱|參數說明|備註|
|---|---|---|
|category|農藥種類||
|pestType|農藥資材類型||
|userId|使用者Id||

Response:
1. ![200](https://img.shields.io/badge/-200-brightgreen.svg)
```json=
{
  "success": true,
  "message": null,
  "data": [
    {
      "category": "F-殺茵劑(FUNGICIDE)",
      "pestName": "貝芬錳",
      "brandName": "DELSCENE M",
      "companyName": null,
      "id": "3de9e7c3-3f24-427d-8d2e-0009f9f35a7e"
    },
    {
      "category": "F-殺茵劑(FUNGICIDE)",
      "pestName": "凡殺護矽得",
      "brandName": null,
      "companyName": "台灣杜邦",
      "id": "0b07451f-da95-4e42-87ef-00ceb312b0a2"
    },
    {
      "category": "F-殺茵劑(FUNGICIDE)",
      "pestName": "殺紋依得利",
      "brandName": null,
      "companyName": null,
      "id": "4486ef81-2159-45c2-a00a-02f56df01683"
    },
    ...
  ]
}
```

|參數名稱|參數說明|備註|
|---|---|---|
|id|農藥ID|Web才會有|
|category|農藥種類名稱|App才會有|
|pestType|農藥資材類型||
|pestName|商品名稱||
|brandName|原始廠商||
|companyName|登記廠商||


### 2-4 所有農藥明細下載 ![GET](https://img.shields.io/badge/-GET-blue.svg)
URL: https://cloud.geosat.com.tw/Geoapi/ResumeRecord/GetAllPest/{userId}

|參數名稱|參數說明|備註|
|---|---|---|
|userId|使用者Id||

Response:
1. ![200](https://img.shields.io/badge/-200-brightgreen.svg)
```json=
{
  "success": true,
  "data": [
    {
      "id": "03e0a5e3-157a-4351-8ade-2afc9e23b3b4",
      "category": "殺線虫劑",
      "pestName": "福賽絕",
      "brandName": "IKI-1145",
      "companyName": "台灣石原產業",
      "pestType": "液"
    }
  ]
}
```

|參數名稱|參數說明|備註|
|---|---|---|
|id|流水號Id||
|category|農藥種類名稱||
|pestType|農藥資材類型||
|pestName|商品名稱||
|brandName|原始廠商||
|companyName|登記廠商||


### 2-5 農藥設定上傳 ![POST](https://img.shields.io/badge/-POST-brightgreen.svg)
URL: https://cloud.geosat.com.tw/Geoapi/ResumeRecord/CreatePest

|欄位|名稱|屬性|
|---|---|---|
|PestId|農藥ID|guid|
|PestType|農藥資材類型|string|
|UserId|使用者ID|guid|


Response:
1. ![200](https://img.shields.io/badge/-200-brightgreen.svg)
```json=
{
  "success": true,
  "message": null,
  "data": null
}
```


### 2-6 農藥設定刪除 ![POST](https://img.shields.io/badge/-POST-brightgreen.svg)
URL: https://cloud.geosat.com.tw/Geoapi/ResumeRecord/DeletePest

|欄位|名稱|屬性|
|---|---|---|
|Id|農藥流水號ID|guid|
|UserId|使用者ID|guid|

Response:
1. ![200](https://img.shields.io/badge/-200-brightgreen.svg)
```json=
{
  "success": true,
  "message": null,
  "data": null
}
```

### 2-7 農藥設定編輯 ![POST](https://img.shields.io/badge/-POST-brightgreen.svg)
URL: https://cloud.geosat.com.tw/Geoapi/ResumeRecord/EditPest


|欄位|名稱|屬性|備註|
|---|---|---|---|
|Id|農藥流水號|guid||
|PestId|農藥ID|guid|
|PestType|農藥資材類型|string|可不填|
|UserId|使用者ID|guid||

Response:
1. ![200](https://img.shields.io/badge/-200-brightgreen.svg)
```json=
{
  "success": true,
  "message": null,
  "data": null
}
```

### 3-1 肥料種類下載 ![GET](https://img.shields.io/badge/-GET-blue.svg)
URL: https://cloud.geosat.com.tw/Geoapi/ResumeRecord/GetFertCategory/{userId?}

|參數名稱|參數說明|備註|
|---|---|---|
|userId|使用者Id||

Response:
1. ![200](https://img.shields.io/badge/-200-brightgreen.svg)
```json=
{
  "success": true,
  "message": null,
  "data": [
    {
      "key": "一般堆肥",
      "value": "一般堆肥"
    },
    {
      "key": "乾燥茵體肥料",
      "value": "乾燥茵體肥料"
    },
    {
      "key": "硫酸鎂肥料",
      "value": "硫酸鎂肥料"
    },
    {
      "key": "硫酸鋅肥料",
      "value": "硫酸鋅肥料"
    },
    ...
  ]
}
```
|參數名稱|參數說明|
|---|---|
|key|肥料種類名稱|
|value|肥料種類名稱|


### ~~3-2 肥料資材類型下載(Deprecated)~~ ![GET](https://img.shields.io/badge/-GET-blue.svg)
URL: https://cloud.geosat.com.tw/Geoapi/ResumeRecord/GetFertType/{userId?}

|參數名稱|參數說明|備註|
|---|---|---|
|userId|使用者Id||

Response:
1. ![200](https://img.shields.io/badge/-200-brightgreen.svg)
```json=
{
  "success": true,
  "message": null,
  "data": [
    {
      "category": "1-12-硝酸銨鈣肥料"
      "fertType": "乳膠"
    },
    ...
  ]
}
```
|參數名稱|參數說明|
|---|---|
|category|肥料種類名稱|
|fertType|肥料資材類型|

### 3-3 肥料明細下載 ![GET](https://img.shields.io/badge/-GET-blue.svg)
URL: https://cloud.geosat.com.tw/Geoapi/ResumeRecord/GetFert/{category}/{fertType?}/{userId?}

|參數名稱|參數說明|備註|
|---|---|---|
|category|肥料種類||
|fertType|肥料資材類型||
|userId|使用者Id||

Response:
1. ![200](https://img.shields.io/badge/-200-brightgreen.svg)
```json=
{
  "success": true,
  "message": null,
  "data": 
    {
        "id":"326b349b-2c0e-4755-aed6-d76877fbd9ad",
        "category":"硝酸銨鈣肥料",
        "brandName":"亞拉牌硝酸銨鈣",
        "companyName":"0411-豪鑫貿易有限公司",
        "fertType":"乳膠"
    },
    ...
  ]
}
```
|參數名稱|參數說明|備註|
|---|---|---|
|id|肥料種類||
|category|肥料種類||
|brandName|商品名稱||
|companyName|登記廠商||
|fertType|肥料資材類型||


### 3-4 所有肥料明細下載 ![GET](https://img.shields.io/badge/-GET-blue.svg)
URL: https://cloud.geosat.com.tw/Geoapi/ResumeRecord/GetAllFert/{userId}

|參數名稱|參數說明|備註|
|---|---|---|
|userId|使用者Id||

Response:
1. ![200](https://img.shields.io/badge/-200-brightgreen.svg)
```json=
{
  "success": true,
  "data": [
    {
      "id": "ec239ad4-356e-45b8-9b9b-c63f5c52fd77",
      "category": "雜項次量微量要素肥料",
      "brandName": "精準奧綠313S",
      "companyName": "大漢園景科技有限公司",
      "fertType": "液"
    },
  ]
}
```
|參數名稱|參數說明|備註|
|---|---|---|
|id|流水號Id||
|category|肥料種類||
|brandName|商品名稱||
|companyName|登記廠商||
|fertType|肥料資材類型||

### 3-5 肥料設定上傳 ![POST](https://img.shields.io/badge/-POST-brightgreen.svg)
URL: https://cloud.geosat.com.tw/Geoapi/ResumeRecord/CreateFert

|欄位|名稱|屬性|
|---|---|---|
|FertId|肥料ID|guid|
|FertType|肥料資材類型|string|
|UserId|使用者ID|guid|


Response:
1. ![200](https://img.shields.io/badge/-200-brightgreen.svg)
```json=
{
  "success": true,
  "message": null,
  "data": null
}
```


### 3-6 肥料設定刪除 ![POST](https://img.shields.io/badge/-POST-brightgreen.svg)
URL: https://cloud.geosat.com.tw/Geoapi/ResumeRecord/DeleteFert

|欄位|名稱|屬性|
|---|---|---|
|Id|肥料流水號ID|guid|
|UserId|使用者ID|guid|

Response:
1. ![200](https://img.shields.io/badge/-200-brightgreen.svg)
```json=
{
  "success": true,
  "message": null,
  "data": null
}
```

### 3-7 肥料設定編輯 ![POST](https://img.shields.io/badge/-POST-brightgreen.svg)
URL: https://cloud.geosat.com.tw/Geoapi/ResumeRecord/EditFert

|欄位|名稱|屬性|備註|
|---|---|---|---|
|Id|肥料流水號|guid||
|FertId|肥料ID|guid||
|FertType|肥料資材類型|string|可不填|
|UserId|使用者ID|guid||


Response:
1. ![200](https://img.shields.io/badge/-200-brightgreen.svg)
```json=
{
  "success": true,
  "message": null,
  "data": null
}