import regeneratorRuntime from "regenerator-runtime";
import * as Plus4U5 from "uu_plus4u5g01";
import Binary from "./binary.js";
import cache from "../cache.js";

const STATIC_DATA = {
  "ORDER_2020": [{
    "category": "woman",
    "hair": "short",
    "services": [{ "code": "cut", "sum": 230 }, { "code": "care", "sum": 170 }, { "code": "duoColor", "sum": 80, "quantity": 2, "unit": 15, "price": 0 },
      { "code": "duoMelodies", "sum": 360, "quantity": 1, "unit": 30, "price": 300 }],
    "sum": 840,
    "id": "31846f00aaae64b088ede9a1b1a49db3",
    "date": "2020-01-07T11:33:34.154Z"
  }, {
    "category": "woman",
    "hair": "middle",
    "services": [{ "code": "care", "sum": 230 }, { "code": "hairSpray", "sum": 390, "quantity": 2, "unit": 15, "price": 270 },
      { "code": "bondUltim", "sum": 250, "quantity": 1, "unit": 4, "price": 0 }],
    "sum": 870,
    "id": "2605f775c114d48988873b32ec15ced9",
    "date": "2020-01-07T12:03:46.421Z"
  }, { "eyelash": { "code": "renewal", "sum": 500 }, "sum": 500, "id": "c82308e89d7304f71905a0e581156cf4", "date": "2020-01-07T12:03:51.042Z" },
    { "category": "man", "services": [{ "code": "cut", "sum": 150 }], "sum": 150, "id": "93965b3205e6c4609b6ddf7ed1063099", "date": "2020-01-08T15:58:06.850Z" },
    { "category": "child", "hair": "short", "services": [{ "code": "cut", "sum": 100 }], "sum": 100, "id": "7e7f0a0550868417ba967309efc9d3d8", "date": "2020-01-08T15:58:11.650Z" }, {
      "category": "woman",
      "hair": "long",
      "services": [{ "code": "care", "sum": 290 }, { "code": "color", "sum": 410, "quantity": 3, "unit": 15, "price": 290 }],
      "sum": 700,
      "id": "6d47d91a2356c4486a5815e7004731fb",
      "date": "2020-01-08T17:06:31.594Z"
    }, {
      "category": "woman",
      "hair": "short",
      "services": [{ "code": "cut", "sum": 230 }, { "code": "care", "sum": 170 }, { "code": "duoColor", "sum": 80, "quantity": 2, "unit": 15, "price": 0 },
        { "code": "duoMelodies", "sum": 330, "quantity": 0.5, "unit": 30, "price": 300 }],
      "sum": 810,
      "id": "239c9eec31c614e61b3484f6f8dc916e",
      "date": "2020-01-08T17:32:04.784Z"
    }, {
      "category": "woman",
      "hair": "short",
      "services": [{ "code": "cut", "sum": 230 }, { "code": "care", "sum": 170 }],
      "sum": 400,
      "id": "058ea61be11cf4c39af78765656639f0",
      "date": "2020-01-09T14:00:42.192Z"
    }, {
      "category": "woman",
      "hair": "middle",
      "services": [{ "code": "cut", "sum": 230 }, { "code": "care", "sum": 230 }, { "code": "melodies", "sum": 430, "quantity": 2, "unit": 30, "price": 310 },
        { "code": "hairSpray", "sum": 510, "quantity": 4, "unit": 15, "price": 270 }],
      "sum": 1400,
      "id": "ac86aa8692cc54401aee289b60e14f8e",
      "date": "2020-01-09T14:21:28.544Z"
    }, { "category": "child", "hair": "short", "services": [{ "code": "cut", "sum": 100 }], "sum": 100, "id": "15d3d3f191b1b41f1afcd5d424cbe78d", "date": "2020-01-09T14:47:52.966Z" }, {
      "category": "woman",
      "hair": "short",
      "services": [{ "code": "cut", "sum": 230 }, { "code": "care", "sum": 170 }],
      "sum": 400,
      "id": "138c77a44e2ce45b486b9417c83f1ed6",
      "date": "2020-01-09T14:47:59.621Z"
    }, { "category": "man", "services": [{ "code": "cut", "sum": 150 }], "sum": 150, "id": "6b3020a43fa2b4906ba18dbf195acadb", "date": "2020-01-09T14:48:07.216Z" },
    { "eyelash": { "code": "renewal", "sum": 500 }, "sum": 500, "id": "a4be7a8e144a64558b0ca162db334f5f", "date": "2020-01-09T14:48:14.941Z" },
    { "category": "child", "hair": "short", "services": [{ "code": "cut", "sum": 100 }], "sum": 100, "id": "0cee4e27fdd5942ce97593d5a8328919", "date": "2020-01-09T14:48:20.099Z" },
    { "category": "child", "hair": "short", "services": [{ "code": "cut", "sum": 100 }], "sum": 100, "id": "cb3b704cdf1984828947eb5f3bc67de5", "date": "2020-01-09T14:48:30.630Z" },
    { "eyelash": { "code": "renewal", "sum": 500 }, "sum": 500, "id": "253a6aa4795b344a09deb3ba8e0061c2", "date": "2020-01-09T14:48:33.416Z" },
    { "category": "child", "hair": "short", "services": [{ "code": "cut", "sum": 100 }], "sum": 100, "id": "a7b791733beed4c02abb5747715ddd67", "date": "2020-01-09T15:36:23.171Z" },
    { "socialEvents": [{ "code": "hairstyle", "sum": 900 }], "sum": 900, "id": "540b23eb7a0514234a0ef9f0ed1a4792", "date": "2020-01-11T17:49:53.463Z" },
    { "socialEvents": [{ "code": "hairstyle", "sum": 900 }], "sum": 900, "id": "ca60f9bb5b91d4d7faf23ae5a962c910", "date": "2020-01-11T17:49:59.845Z" },
    { "category": "child", "hair": "short", "services": [{ "code": "cut", "sum": 100 }], "sum": 100, "id": "4ec26a3031ade4e45b93b61fe158ab1d", "date": "2020-01-11T17:51:27.193Z" }, {
      "category": "woman",
      "hair": "long",
      "services": [{ "code": "cut", "sum": 230 }, { "code": "care", "sum": 290 }],
      "sum": 520,
      "id": "7e48933a76f284d53a23ff0372165444",
      "date": "2020-01-13T13:41:51.511Z"
    }, { "category": "child", "hair": "short", "services": [{ "code": "cut", "sum": 100 }], "sum": 100, "id": "1b0e31b4ce9894254b5f8df181ab331e", "date": "2020-01-13T13:43:37.410Z" },
    { "category": "child", "hair": "short", "services": [{ "code": "cut", "sum": 100 }], "sum": 100, "id": "45c618a7a391a461cae2dd7605711187", "date": "2020-01-13T13:43:42.814Z" }, {
      "category": "woman",
      "hair": "long",
      "services": [{ "code": "cut", "sum": 230 }, { "code": "care", "sum": 290 }],
      "sum": 520,
      "id": "5251e89292def4500a541cb5096fd18c",
      "date": "2020-01-13T14:31:33.907Z"
    }, {
      "category": "woman",
      "hair": "long",
      "services": [{ "code": "cut", "sum": 230 }, { "code": "care", "sum": 290 }, { "code": "melodies", "sum": 520, "quantity": 1, "unit": 30, "price": 460 }],
      "sum": 1040,
      "id": "36e22a7f362cf451aade46e90d165221",
      "date": "2020-01-13T15:05:20.735Z"
    }, {
      "category": "woman",
      "hair": "short",
      "services": [{ "code": "cut", "sum": 230 }, { "code": "care", "sum": 170 }, { "code": "color", "sum": 310, "quantity": 2, "unit": 15, "price": 230 }],
      "sum": 710,
      "id": "9cbcbf8f2edca4bc19e4b187fa8ba410",
      "date": "2020-01-14T08:50:05.558Z"
    }, { "eyelash": { "code": "renewal", "sum": 500 }, "sum": 500, "id": "0308d59c113804c62825233bebde5394", "date": "2020-01-14T09:17:08.581Z" }, {
      "category": "woman",
      "hair": "long",
      "services": [{ "code": "care", "sum": 290 }, { "code": "color", "sum": 390, "quantity": 2.5, "unit": 15, "price": 290 }],
      "sum": 680,
      "id": "57c3b05394aa6470e9f2e620abf13af4",
      "date": "2020-01-15T15:19:00.266Z"
    }, {
      "category": "woman",
      "hair": "middle",
      "services": [{ "code": "bondUltim", "sum": 250, "quantity": 1, "unit": 4, "price": 0 }, { "code": "care", "sum": 230 }, { "code": "duoColor", "sum": 160, "quantity": 4, "unit": 15, "price": 0 },
        { "code": "duoMelodies", "sum": 530, "quantity": 3, "unit": 30, "price": 350 }],
      "sum": 1170,
      "id": "87260a48c6f714ebd9c29cf7a260a8d1",
      "date": "2020-01-16T10:04:24.466Z"
    }, {
      "category": "woman",
      "hair": "long",
      "services": [{ "code": "care", "sum": 290 }, { "code": "color", "sum": 450, "quantity": 4, "unit": 15, "price": 290 }],
      "sum": 740,
      "id": "a8c48dcc1f0ad48c6b1062317a23f14f",
      "date": "2020-01-16T15:43:24.040Z"
    }, {
      "category": "woman",
      "hair": "middle",
      "services": [{ "code": "cut", "sum": 230 }, { "code": "care", "sum": 230 }, { "code": "duoMelodies", "sum": 380, "quantity": 0.5, "unit": 30, "price": 350 },
        { "code": "duoColor", "sum": 100, "quantity": 2.5, "unit": 15, "price": 0 }],
      "sum": 940,
      "id": "2d604ed38723a4608af24ff585f66594",
      "date": "2020-01-16T15:44:03.005Z"
    }, { "category": "child", "hair": "short", "services": [{ "code": "cut", "sum": 100 }], "sum": 100, "id": "0aacab10772a545e989c1bcad7b0c11a", "date": "2020-01-16T16:55:57.987Z" }, {
      "category": "woman",
      "hair": "short",
      "services": [{ "code": "cut", "sum": 230 }, { "code": "care", "sum": 170 }],
      "sum": 400,
      "id": "f6de2df3b549d4b3e9214798a2e8d211",
      "date": "2020-01-17T08:17:46.393Z"
    }, {
      "category": "woman",
      "hair": "short",
      "services": [{ "code": "cut", "sum": 230 }, { "code": "care", "sum": 170 }],
      "sum": 400,
      "id": "56e7508deef5a4d7c8c60c9891094246",
      "date": "2020-01-17T10:34:24.280Z"
    }, {
      "category": "woman",
      "hair": "short",
      "services": [{ "code": "cut", "sum": 230 }, { "code": "care", "sum": 170 }],
      "sum": 400,
      "id": "cb27440742f9f41a79e7b919975f5ae8",
      "date": "2020-01-20T21:06:09.353Z"
    }, {
      "category": "woman",
      "hair": "long",
      "services": [{ "code": "cut", "sum": 230 }, { "code": "care", "sum": 290 }],
      "sum": 520,
      "id": "2b5211f8059d34adb9314c101817dd7f",
      "date": "2020-01-20T21:06:23.340Z"
    }, {
      "category": "woman",
      "hair": "short",
      "services": [{ "code": "cut", "sum": 230 }, { "code": "care", "sum": 170 }],
      "sum": 400,
      "id": "41d308a527ecb4e73b8353aeeb0d9f87",
      "date": "2020-01-22T11:53:15.562Z"
    }, {
      "category": "woman",
      "hair": "middle",
      "services": [{ "code": "cut", "sum": 230 }, { "code": "care", "sum": 230 }, { "code": "color", "sum": 350, "quantity": 2, "unit": 15, "price": 270 }],
      "sum": 810,
      "id": "f42e55b07f7f34563896ef6c87a3ae06",
      "date": "2020-01-22T18:54:43.029Z"
    }, {
      "category": "woman",
      "hair": "middle",
      "services": [{ "code": "cut", "sum": 230 }, { "code": "care", "sum": 230 }, { "code": "color", "sum": 350, "quantity": 2, "unit": 15, "price": 270 }],
      "sum": 810,
      "id": "9cbfcfa76917a4250bfae09a283d4154",
      "date": "2020-01-22T18:54:50.107Z"
    }, { "category": "woman", "hair": "long", "services": [{ "code": "care", "sum": 290 }], "sum": 290, "id": "7e5d5dddec12e4ee9ae0e3040e79ac51", "date": "2020-01-27T08:57:57.224Z" }, {
      "category": "woman",
      "hair": "middle",
      "services": [{ "code": "care", "sum": 230 }, { "code": "color", "sum": 390, "quantity": 3, "unit": 15, "price": 270 }],
      "sum": 620,
      "id": "598a1b52313a04aefa4c52c503feedf1",
      "date": "2020-01-27T14:00:08.480Z"
    }, { "category": "child", "hair": "short", "services": [{ "code": "cut", "sum": 100 }], "sum": 100, "id": "8c00db6822de74537b74a6a01ee2980b", "date": "2020-01-27T14:00:11.955Z" }, {
      "category": "woman",
      "hair": "long",
      "services": [{ "code": "cut", "sum": 230 }, { "code": "duoMelodies", "sum": 400 }, { "code": "duoColor", "sum": 160, "quantity": 4, "unit": 15, "price": 0 }],
      "sum": 790,
      "id": "a65d62042c8c1469b838f589260120f4",
      "date": "2020-01-28T11:33:38.247Z"
    }, { "eyelash": { "code": "renewal", "sum": 500 }, "sum": 500, "id": "0c669ce0d84a4444ea32f5eae8f856d5", "date": "2020-01-28T12:23:34.665Z" },
    { "eyelash": { "code": "renewal", "sum": 500 }, "sum": 500, "id": "33418ee3c7d3d409c9630e07e370cb6a", "date": "2020-01-28T12:23:37.641Z" },
    { "category": "child", "hair": "short", "services": [{ "code": "cut", "sum": 100 }], "sum": 100, "id": "cc521824b6d1444e6a8e8512530e4249", "date": "2020-01-28T12:23:42.425Z" }, {
      "category": "woman",
      "hair": "short",
      "services": [{ "code": "cut", "sum": 230 }, { "code": "care", "sum": 170 }, { "code": "duoMelodies", "sum": 330, "quantity": 0.5, "unit": 30, "price": 300 },
        { "code": "duoColor", "sum": 80, "quantity": 2, "unit": 15, "price": 0 }],
      "sum": 810,
      "id": "fe0cb5fde665d4880a60dd91672e3883",
      "date": "2020-01-29T15:39:30.447Z"
    }, {
      "category": "woman",
      "hair": "short",
      "services": [{ "code": "cut", "sum": 230 }, { "code": "care", "sum": 170 }, { "code": "color", "sum": 390, "quantity": 4, "unit": 15, "price": 230 }],
      "sum": 790,
      "id": "9e4f20ca44bb4421c955cdef87e2d19e",
      "date": "2020-01-29T16:06:50.990Z"
    }, { "category": "man", "services": [{ "code": "cut", "sum": 150 }], "sum": 150, "id": "8019e9dcf8a0247a7b95ff5bc1e54b9b", "date": "2020-01-29T16:06:56.611Z" },
    { "eyelash": { "code": "renewal", "sum": 500 }, "sum": 500, "id": "f758baf9c3fae47af8e257db382a94bb", "date": "2020-01-29T16:07:03.320Z" },
    { "eyelash": { "code": "renewal", "sum": 500 }, "sum": 500, "id": "1a1d266ebd0cf43c985547a1e1621b6b", "date": "2020-01-29T16:07:08.067Z" }, {
      "category": "woman",
      "hair": "middle",
      "services": [{ "code": "cut", "sum": 230 }, { "code": "care", "sum": 230 }, { "code": "melodies", "sum": 400, "quantity": 1.5, "unit": 30, "price": 310 }],
      "sum": 860,
      "id": "c94e78cf928aa48b49a479c169382829",
      "date": "2020-02-01T13:54:40.090Z"
    }, { "category": "woman", "hair": "short", "services": [{ "code": "cut", "sum": 230 }], "sum": 230, "id": "04c5b0c0760644dc0a320bb99c3866f6", "date": "2020-02-01T18:33:47.112Z" },
    { "socialEvents": [{ "code": "hairstyle", "sum": 900 }, { "code": "makeup", "sum": 800 }], "sum": 1700, "id": "f344522c0a335400a8444d6dd892dc4b", "date": "2020-02-01T18:33:58.143Z" },
    { "socialEvents": [{ "code": "hairstyle", "sum": 900 }], "sum": 900, "id": "f7b7a93ee6d5948f7b693e6a1659e261", "date": "2020-02-01T18:34:03.332Z" },
    { "socialEvents": [{ "code": "hairstyle", "sum": 900 }, { "code": "makeup", "sum": 800 }], "sum": 1700, "id": "c5697b52ce01241cf9c4170e2dbf559a", "date": "2020-02-02T10:47:53.421Z" },
    { "socialEvents": [{ "code": "makeup", "sum": 800 }], "sum": 800, "id": "e4e3adbd7fe164a36b3c584764f1ddd2", "date": "2020-02-02T10:47:57.381Z" }, {
      "category": "woman",
      "hair": "middle",
      "services": [{ "code": "care", "sum": 230 }, { "code": "melodies", "sum": 400, "quantity": 1.5, "unit": 30, "price": 310 },
        { "code": "hairSpray", "sum": 450, "quantity": 3, "unit": 15, "price": 270 }, { "code": "bondUltim", "sum": 250, "quantity": 1, "unit": 4, "price": 0 }],
      "sum": 1330,
      "id": "e7124d6de926548508df828da9ceb960",
      "date": "2020-02-03T09:33:08.388Z"
    }, {
      "category": "woman",
      "hair": "middle",
      "services": [{ "code": "cut", "sum": 230 }, { "code": "care", "sum": 230 }, { "code": "color", "sum": 390, "quantity": 3, "unit": 15, "price": 270 }],
      "sum": 850,
      "id": "61577425f81714aabad48f0414da9ee1",
      "date": "2020-02-04T08:49:40.160Z"
    }, {
      "category": "woman",
      "hair": "long",
      "services": [{ "code": "cut", "sum": 230 }, { "code": "care", "sum": 290 }, { "code": "melodies", "sum": 550, "quantity": 1.5, "unit": 30, "price": 460 }],
      "sum": 1070,
      "id": "8d1a6f75efb6d4683ab5ed6cbab38c91",
      "date": "2020-02-04T17:17:54.387Z"
    }, {
      "category": "woman",
      "hair": "long",
      "services": [{ "code": "cut", "sum": 230 }, { "code": "care", "sum": 290 }, { "code": "melodies", "sum": 580, "quantity": 2, "unit": 30, "price": 460 }],
      "sum": 1100,
      "id": "de2011bd773e24ebea61832f3e3a0fb4",
      "date": "2020-02-05T17:08:23.279Z"
    }, {
      "category": "woman",
      "hair": "long",
      "services": [{ "code": "care", "sum": 290 }, { "code": "color", "sum": 410, "quantity": 3, "unit": 15, "price": 290 }],
      "sum": 700,
      "id": "1a244d6dbdac54dd786f32c8d4033393",
      "date": "2020-02-05T17:08:37.599Z"
    }, { "eyelash": { "code": "renewal", "sum": 500 }, "sum": 500, "id": "4167f3bdd8987490382d19963747b73d", "date": "2020-02-06T14:20:19.245Z" }, {
      "category": "woman",
      "hair": "middle",
      "services": [{ "code": "cut", "sum": 230 }, { "code": "care", "sum": 230 }, { "code": "melodies", "sum": 430, "quantity": 2, "unit": 30, "price": 310 }],
      "sum": 890,
      "id": "6d1a9ddd356524f76b485c14b5a9cff9",
      "date": "2020-02-10T11:59:17.984Z"
    }, {
      "category": "woman",
      "hair": "short",
      "services": [{ "code": "cut", "sum": 230 }, { "code": "care", "sum": 170 }, { "code": "color", "sum": 350, "quantity": 3, "unit": 15, "price": 230 }],
      "sum": 750,
      "id": "b78d8a83985424ddab2197a76e41bd2d",
      "date": "2020-02-11T08:14:25.042Z"
    }, {
      "category": "woman",
      "hair": "long",
      "services": [{ "code": "care", "sum": 290 }, { "code": "melodies", "sum": 610, "quantity": 2.5, "unit": 30, "price": 460 }],
      "sum": 900,
      "id": "4ef0e4def5e6c4a39aafcce3d95f8c4f",
      "date": "2020-02-11T16:17:08.005Z"
    }, {
      "category": "woman",
      "hair": "middle",
      "services": [{ "code": "cut", "sum": 230 }, { "code": "care", "sum": 230 }],
      "sum": 460,
      "id": "7b004b1defede465f8bb732f550c23d3",
      "date": "2020-02-12T14:32:39.236Z"
    }, {
      "category": "woman",
      "hair": "long",
      "services": [{ "code": "care", "sum": 290 }, { "code": "melodies", "sum": 640, "quantity": 3, "unit": 30, "price": 460 }],
      "sum": 930,
      "id": "8f9a912252ccb45548190a51e23075fb",
      "date": "2020-02-12T14:34:32.995Z"
    }, {
      "category": "woman",
      "hair": "short",
      "services": [{ "code": "cut", "sum": 230 }, { "code": "care", "sum": 170 }, { "code": "melodies", "sum": 290, "quantity": 1, "unit": 30, "price": 230 }],
      "sum": 690,
      "id": "3ad729e17e18f47708c358a0c3bcd497",
      "date": "2020-02-12T16:35:46.528Z"
    }, {
      "category": "woman",
      "hair": "short",
      "services": [{ "code": "cut", "sum": 230 }, { "code": "care", "sum": 170 }, { "code": "duoMelodies", "sum": 330, "quantity": 0.5, "unit": 30, "price": 300 },
        { "code": "duoColor", "sum": 120, "quantity": 3, "unit": 15, "price": 0 }],
      "sum": 850,
      "id": "d4df05a3b8c8a4549987fa17d2731471",
      "date": "2020-02-12T16:36:37.212Z"
    }, {
      "category": "woman",
      "hair": "middle",
      "services": [{ "code": "cut", "sum": 230 }, { "code": "care", "sum": 230 }, { "code": "color", "sum": 390, "quantity": 3, "unit": 15, "price": 270 }],
      "sum": 850,
      "id": "b85ec413643f84b64a7989af1780d2f6",
      "date": "2020-02-13T08:26:53.340Z"
    }, {
      "category": "woman",
      "hair": "long",
      "services": [{ "code": "cut", "sum": 230 }, { "code": "care", "sum": 290 }],
      "sum": 520,
      "id": "15cfbef664f2b467391aa35af35efa0e",
      "date": "2020-02-13T10:03:36.748Z"
    }, {
      "category": "woman",
      "hair": "short",
      "services": [{ "code": "cut", "sum": 230 }, { "code": "care", "sum": 170 }, { "code": "color", "sum": 390, "quantity": 4, "unit": 15, "price": 230 }],
      "sum": 790,
      "id": "85ce6dc933deb4d6aae732ac95e08fa5",
      "date": "2020-02-13T10:04:26.309Z"
    }, {
      "category": "woman",
      "hair": "long",
      "services": [{ "code": "cut", "sum": 230 }, { "code": "care", "sum": 290 }],
      "sum": 520,
      "id": "976d5c44936e84516b6d665bf4e30799",
      "date": "2020-02-13T10:44:09.508Z"
    }, {
      "category": "woman",
      "hair": "middle",
      "services": [{ "code": "cut", "sum": 230 }, { "code": "care", "sum": 230 }, { "code": "melodies", "sum": 430, "quantity": 2, "unit": 30, "price": 310 }],
      "sum": 890,
      "id": "d67aed3b5e6a146b4ae029db8e2fbc57",
      "date": "2020-02-14T10:12:11.971Z"
    }, {
      "category": "woman",
      "hair": "short",
      "services": [{ "code": "cut", "sum": 230 }, { "code": "care", "sum": 170 }, { "code": "color", "sum": 390, "quantity": 4, "unit": 15, "price": 230 }],
      "sum": 790,
      "id": "c87c6130a8e054001a946356f4be31db",
      "date": "2020-02-14T10:43:26.320Z"
    }, {
      "category": "woman",
      "hair": "long",
      "services": [{ "code": "cut", "sum": 230 }, { "code": "care", "sum": 290 }, { "code": "melodies", "sum": 580, "quantity": 2, "unit": 30, "price": 460 }],
      "sum": 1100,
      "id": "2bcbb41df52ea42f3a29ce11a8b183da",
      "date": "2020-02-14T12:18:29.228Z"
    }, {
      "category": "woman",
      "hair": "short",
      "services": [{ "code": "cut", "sum": 230 }, { "code": "care", "sum": 170 }],
      "sum": 400,
      "id": "6cb8b55b13d8e4e22896805d0e4dfac1",
      "date": "2020-02-14T13:17:04.262Z"
    }, { "category": "child", "hair": "short", "services": [{ "code": "cut", "sum": 100 }], "sum": 100, "id": "932925d40b12241489670c0d17f97345", "date": "2020-02-14T13:18:36.416Z" },
    { "category": "man", "services": [{ "code": "cut", "sum": 150 }], "sum": 150, "id": "be29023c1af604e4b9e99d6ee7de1ca6", "date": "2020-02-14T13:18:41.572Z" },
    { "category": "child", "hair": "short", "services": [{ "code": "cut", "sum": 100 }], "sum": 100, "id": "81f491a6671364e79a43ccdad32e7769", "date": "2020-02-14T13:18:46.164Z" }, {
      "category": "woman",
      "hair": "long",
      "services": [{ "code": "cut", "sum": 230 }, { "code": "care", "sum": 290 }],
      "sum": 520,
      "id": "63a26e8f2974643d2bd87a88a47c7e83",
      "date": "2020-02-14T14:12:58.720Z"
    }, {
      "category": "woman",
      "hair": "long",
      "services": [{ "code": "cut", "sum": 230 }, { "code": "care", "sum": 290 }],
      "sum": 520,
      "id": "4bc9d99241ba9477097c240052b994d6",
      "date": "2020-02-14T15:00:48.458Z"
    }, { "socialEvents": [{ "code": "hairstyle", "sum": 900 }], "sum": 900, "id": "61939b1342de54cb78e8942e599d49c0", "date": "2020-02-14T15:56:24.752Z" }, {
      "category": "woman",
      "hair": "short",
      "services": [{ "code": "cut", "sum": 230 }, { "code": "care", "sum": 170 }],
      "sum": 400,
      "id": "7a92068cb986e44228af89b226b09598",
      "date": "2020-02-17T06:57:43.366Z"
    }, {
      "category": "woman",
      "hair": "middle",
      "services": [{ "code": "care", "sum": 230 }, { "code": "cut", "sum": 230 }, { "code": "color", "sum": 550, "quantity": 7, "unit": 15, "price": 270 }],
      "sum": 1010,
      "id": "0d76ae72f388f4218b8dea8e5f5e6ed2",
      "date": "2020-02-17T09:18:57.372Z"
    }, {
      "category": "woman",
      "hair": "middle",
      "services": [{ "code": "cut", "sum": 230 }, { "code": "care", "sum": 230 }, { "code": "color", "sum": 430, "quantity": 4, "unit": 15, "price": 270 }],
      "sum": 890,
      "id": "5593b46dfaf2b4f38bb1748533b42861",
      "date": "2020-02-17T10:57:05.171Z"
    }, {
      "category": "woman",
      "hair": "short",
      "services": [{ "code": "cut", "sum": 230 }, { "code": "care", "sum": 170 }],
      "sum": 400,
      "id": "a33002c757e0e4e688942a547af87187",
      "date": "2020-02-17T13:41:15.720Z"
    }, {
      "category": "woman",
      "hair": "middle",
      "services": [{ "code": "cut", "sum": 230 }, { "code": "care", "sum": 230 }, { "code": "melodies", "sum": 430, "quantity": 2, "unit": 30, "price": 310 }],
      "sum": 890,
      "id": "e5105e308de5a41419be999586e0cb3c",
      "date": "2020-02-17T14:19:24.709Z"
    }, {
      "category": "woman",
      "hair": "short",
      "services": [{ "code": "cut", "sum": 230 }, { "code": "care", "sum": 170 }],
      "sum": 400,
      "id": "99a874a8f8f1c4899875a3f74fa96087",
      "date": "2020-02-18T14:47:53.091Z"
    }, {
      "category": "woman",
      "hair": "short",
      "services": [{ "code": "care", "sum": 170 }, { "code": "color", "sum": 310, "quantity": 2, "unit": 15, "price": 230 }],
      "sum": 480,
      "id": "bd0f1ab412e794d24b7f0ce106d7690e",
      "date": "2020-02-18T16:02:18.014Z"
    }, { "category": "man", "services": [{ "code": "cut", "sum": 150 }], "sum": 150, "id": "bb04ecf88a325455bb139631ea3b3191", "date": "2020-02-18T16:03:04.346Z" },
    { "category": "child", "hair": "short", "services": [{ "code": "cut", "sum": 100 }], "sum": 100, "id": "dd79ef5272ab3464abb82ee966fd038a", "date": "2020-02-18T16:03:08.445Z" },
    { "eyelash": { "code": "renewal", "sum": 500 }, "sum": 500, "id": "4331df9681c7b4084b1c0ed0a9ce80ba", "date": "2020-02-18T18:29:09.536Z" },
    { "category": "woman", "hair": "middle", "services": [{ "code": "cut", "sum": 230 }], "sum": 230, "id": "40918f657aa7542afb39b9fe62ce17c4", "date": "2020-02-18T18:29:56.670Z" },
    { "eyelash": { "code": "renewal", "sum": 500 }, "sum": 500, "id": "417f57094b93c48a5ae4b809e128e77d", "date": "2020-02-18T18:31:48.314Z" }, {
      "category": "woman",
      "hair": "middle",
      "services": [{ "code": "color", "sum": 350, "quantity": 2, "unit": 15, "price": 270 }],
      "sum": 350,
      "id": "54d961c82f6ca490e8ba7d0579616a0d",
      "date": "2020-02-19T10:38:12.417Z"
    }, { "eyelash": { "code": "renewal", "sum": 500 }, "sum": 500, "id": "206314b87e41644e48f639603b813724", "date": "2020-02-19T11:58:31.420Z" }, {
      "category": "woman",
      "hair": "short",
      "services": [{ "code": "cut", "sum": 230 }, { "code": "care", "sum": 170 }, { "code": "color", "sum": 310, "quantity": 2, "unit": 15, "price": 230 }],
      "sum": 710,
      "id": "7397f4b6fa3b9413e8a75231deb42ae2",
      "date": "2020-02-19T12:43:21.668Z"
    }, {
      "category": "woman",
      "hair": "short",
      "services": [{ "code": "cut", "sum": 230 }, { "code": "care", "sum": 170 }, { "code": "color", "sum": 390, "quantity": 4, "unit": 15, "price": 230 }],
      "sum": 790,
      "id": "e4a5eb564894a40d8981e68906098e72",
      "date": "2020-02-19T14:15:33.681Z"
    }, { "category": "man", "services": [{ "code": "cut", "sum": 150 }], "sum": 150, "id": "7c383383e7bfa4c63b22b071f1a73993", "date": "2020-02-19T14:25:52.577Z" }, {
      "category": "woman",
      "hair": "middle",
      "services": [{ "code": "cut", "sum": 230 }, { "code": "care", "sum": 230 }, { "code": "color", "sum": 390, "quantity": 3, "unit": 15, "price": 270 }],
      "sum": 850,
      "id": "89991d11c4b6240fda2f254201b7203e",
      "date": "2020-02-20T14:37:09.017Z"
    }, { "eyelash": { "code": "renewal", "sum": 500 }, "sum": 500, "customer": "07daee27bdd59424a9a11b7bdcced22c", "id": "e581c5a14db4a45b99187bbdea56c784", "date": "2020-02-20T14:37:22.665Z" },
    { "socialEvents": [{ "code": "makeup", "sum": 800 }], "sum": 800, "id": "0e77971261a194770aaf38c152ad0d26", "date": "2020-02-23T06:36:05.826Z" },
    { "socialEvents": [{ "code": "hairstyle", "sum": 900 }, { "code": "makeup", "sum": 800 }], "sum": 1700, "id": "1b1564479529b4b6cb39806a48b83b0c", "date": "2020-02-23T06:36:22.556Z" },
    { "socialEvents": [{ "code": "hairstyle", "sum": 900 }, { "code": "makeup", "sum": 800 }], "sum": 1700, "id": "e43329ffe93984b509c4e552b897ce98", "date": "2020-02-23T06:37:27.740Z" },
    { "socialEvents": [{ "code": "hairstyle", "sum": 900 }, { "code": "makeup", "sum": 800 }], "sum": 1700, "id": "87871e1a8cbb54c0e8ab6fd97a8ccbfc", "date": "2020-02-23T06:37:33.899Z" },
    { "socialEvents": [{ "code": "hairstyle", "sum": 900 }, { "code": "makeup", "sum": 800 }], "sum": 1700, "id": "005a84562beb64ebbb3072d2e9c31675", "date": "2020-02-23T06:37:46.907Z" },
    { "socialEvents": [{ "code": "hairstyle", "sum": 900 }, { "code": "makeup", "sum": 800 }], "sum": 1700, "id": "bf2573c675f884d9091f4b90bf92ca46", "date": "2020-02-23T06:37:50.265Z" }, {
      "category": "woman",
      "hair": "middle",
      "services": [{ "code": "cut", "sum": 230 }, { "code": "care", "sum": 230 }, { "code": "melodies", "sum": 370, "quantity": 1, "unit": 30, "price": 310 }],
      "sum": 830,
      "id": "7276cdeff386c433f946a3de7ce45e98",
      "date": "2020-02-24T14:17:21.262Z"
    }, {
      "category": "woman",
      "hair": "middle",
      "services": [{ "code": "cut", "sum": 230 }, { "code": "care", "sum": 230 }, { "code": "color", "sum": 390, "quantity": 3, "unit": 15, "price": 270 }],
      "sum": 850,
      "id": "69dfd37d977e14a92acdedc521d61abd",
      "date": "2020-02-25T12:03:49.951Z"
    }, {
      "category": "woman",
      "hair": "middle",
      "services": [{ "code": "cut", "sum": 230 }, { "code": "care", "sum": 230 }],
      "sum": 460,
      "id": "77276cb16cdec411ca28981ff288d1c1",
      "date": "2020-02-26T08:02:44.195Z"
    }, {
      "category": "woman",
      "hair": "long",
      "services": [{ "code": "cut", "sum": 230 }, { "code": "care", "sum": 290 }],
      "sum": 520,
      "id": "8327fb3855fc24024bcbe627d3384462",
      "date": "2020-02-26T14:28:49.265Z"
    }, {
      "category": "woman",
      "hair": "middle",
      "services": [{ "code": "cut", "sum": 230 }, { "code": "care", "sum": 230 }, { "code": "melodies", "sum": 370, "quantity": 1, "unit": 30, "price": 310 }],
      "sum": 830,
      "id": "ab90a228a84374481a5d57f979ce72b3",
      "date": "2020-02-26T16:37:33.301Z"
    }, { "category": "man", "services": [{ "code": "cut", "sum": 150 }], "sum": 150, "id": "5aba7e9fa5b354cb781d6e982450f234", "date": "2020-02-26T16:37:36.400Z" },
    { "category": "child", "hair": "short", "services": [{ "code": "cut", "sum": 100 }], "sum": 100, "id": "97d03fa81c1644418b589d30101d011c", "date": "2020-02-26T17:58:46.074Z" }, {
      "category": "woman",
      "hair": "short",
      "services": [{ "code": "color", "sum": 270, "quantity": 1, "unit": 15, "price": 230 }, { "code": "care", "sum": 170 }, { "code": "cut", "sum": 230 }],
      "sum": 670,
      "id": "d66c879d3be004eb893e7bcbde31f57e",
      "date": "2020-02-27T08:11:38.535Z"
    }, {
      "category": "woman",
      "hair": "short",
      "services": [{ "code": "cut", "sum": 230 }, { "code": "care", "sum": 170 }, { "code": "color", "sum": 310, "quantity": 2, "unit": 15, "price": 230 }],
      "sum": 710,
      "id": "632998cedfb904f729e011a8f840c87f",
      "date": "2020-02-27T11:42:01.440Z"
    }, {
      "category": "woman",
      "hair": "short",
      "services": [{ "code": "cut", "sum": 230 }, { "code": "care", "sum": 170 }],
      "sum": 400,
      "id": "ca88ec402f29d42918d05310dcbe3ba2",
      "date": "2020-02-27T13:54:35.789Z"
    }, {
      "category": "woman",
      "hair": "short",
      "services": [{ "code": "cut", "sum": 230 }, { "code": "care", "sum": 170 }, { "code": "melodies", "sum": 350, "quantity": 2, "unit": 30, "price": 230 }],
      "sum": 750,
      "id": "04daf1770ea8f4f4cbc365327786ce04",
      "date": "2020-02-28T09:28:20.544Z"
    }, {
      "category": "woman",
      "hair": "short",
      "services": [{ "code": "cut", "sum": 230 }, { "code": "care", "sum": 170 }, { "code": "color", "sum": 390, "quantity": 4, "unit": 15, "price": 230 }],
      "sum": 790,
      "id": "07e3e3ee0fa5043d6b24c6baf247ae22",
      "date": "2020-02-28T09:31:24.251Z"
    }, { "socialEvents": [{ "code": "hairstyle", "sum": 900 }], "sum": 900, "id": "83fe45be7047f423f9dcf0e79a23582d", "date": "2020-02-29T16:22:47.166Z" }, {
      "category": "woman",
      "hair": "short",
      "services": [{ "code": "care", "sum": 170 }, { "code": "color", "sum": 390, "quantity": 4, "unit": 15, "price": 230 }],
      "sum": 560,
      "id": "725b990aa76dc4720992911898e17be9",
      "date": "2020-02-29T18:56:24.973Z"
    }, {
      "category": "woman",
      "hair": "short",
      "services": [{ "code": "cut", "sum": 230 }, { "code": "care", "sum": 170 }, { "code": "color", "sum": 390, "quantity": 4, "unit": 15, "price": 230 }],
      "sum": 790,
      "id": "c1d66424fbf2b49929adbd81c7e14f88",
      "date": "2020-03-03T13:17:06.238Z"
    }, {
      "category": "woman",
      "hair": "middle",
      "services": [{ "code": "cut", "sum": 230 }, { "code": "care", "sum": 230 }, { "code": "color", "sum": 410, "quantity": 3.5, "unit": 15, "price": 270 }],
      "sum": 870,
      "id": "8f2beadc940f444368526be472d1a1e5",
      "date": "2020-03-03T16:28:24.307Z"
    }, {
      "category": "woman",
      "hair": "long",
      "services": [{ "code": "care", "sum": 290 }, { "code": "color", "sum": 410, "quantity": 3, "unit": 15, "price": 290 }],
      "sum": 700,
      "id": "655133b2a053142d8ba015fb67f7d1ab",
      "date": "2020-03-04T16:47:25.449Z"
    }, { "category": "child", "hair": "short", "services": [{ "code": "cut", "sum": 100 }], "sum": 100, "id": "2289a8a7554174f328683cebe63ec207", "date": "2020-03-04T21:15:46.346Z" },
    { "category": "child", "hair": "short", "services": [{ "code": "cut", "sum": 100 }], "sum": 100, "id": "1ea1c657c57684ecd8da8f35132019db", "date": "2020-03-04T21:15:50.099Z" }, {
      "category": "woman",
      "hair": "middle",
      "services": [{ "code": "cut", "sum": 230 }, { "code": "care", "sum": 230 }, { "code": "melodies", "sum": 430, "quantity": 2, "unit": 30, "price": 310 }],
      "sum": 890,
      "id": "e6223eb817f534dfb95a9ff1e47b6827",
      "date": "2020-03-05T12:00:30.167Z"
    }, { "eyelash": { "code": "renewal", "sum": 500 }, "sum": 500, "id": "79d8b9189d9724a06b560b23d0a0a6c1", "date": "2020-03-05T14:00:34.220Z" }, {
      "category": "woman",
      "hair": "short",
      "services": [{ "code": "cut", "sum": 230 }, { "code": "care", "sum": 170 }, { "code": "color", "sum": 390, "quantity": 4, "unit": 15, "price": 230 }],
      "sum": 790,
      "id": "39cca3f246f924ba284e6e9dcbf6e18f",
      "date": "2020-03-09T16:00:48.015Z"
    }, {
      "category": "woman",
      "hair": "long",
      "services": [{ "code": "cut", "sum": 230 }, { "code": "care", "sum": 290 }, { "code": "melodies", "sum": 580, "quantity": 2, "unit": 30, "price": 460 }],
      "sum": 1100,
      "id": "720418dfd659d44b98d2eccde9b33b4f",
      "date": "2020-03-10T09:51:09.365Z"
    }, {
      "category": "woman",
      "hair": "long",
      "services": [{ "code": "cut", "sum": 230 }, { "code": "care", "sum": 290 }],
      "sum": 520,
      "id": "5e569e25761b7429e85a383fd6b229ef",
      "date": "2020-03-10T14:47:05.460Z"
    }, {
      "category": "woman",
      "hair": "long",
      "services": [{ "code": "care", "sum": 290 }, { "code": "color", "sum": 410, "quantity": 3, "unit": 15, "price": 290 }],
      "sum": 700,
      "id": "94d16bf220cc14ffdbca3707b282b022",
      "date": "2020-03-10T16:24:34.337Z"
    }, {
      "category": "woman",
      "hair": "short",
      "services": [{ "code": "care", "sum": 170 }, { "code": "hairSpray", "sum": 290, "quantity": 1, "unit": 15, "price": 230 }],
      "sum": 460,
      "id": "556422e346a8f4fbd9a61133d138d524",
      "date": "2020-03-10T16:25:18.970Z"
    }, { "category": "man", "services": [{ "code": "cut", "sum": 150 }], "sum": 150, "id": "eacad73b916684b39985e043154614c2", "date": "2020-03-10T16:25:24.276Z" },
    { "category": "child", "hair": "short", "services": [{ "code": "cut", "sum": 100 }], "sum": 100, "id": "a8ed016aae2584331b487bcc1f939104", "date": "2020-03-10T16:25:27.987Z" },
    { "category": "child", "hair": "short", "services": [{ "code": "cut", "sum": 100 }], "sum": 100, "id": "8b935b60afd6c408997e07bb44300fb2", "date": "2020-03-10T16:25:32.627Z" }, {
      "category": "woman",
      "hair": "short",
      "services": [{ "code": "cut", "sum": 230 }, { "code": "care", "sum": 170 }, { "code": "color", "sum": 490, "quantity": 6.5, "unit": 15, "price": 230 }],
      "sum": 890,
      "id": "82631e73a2e6649789fa81b8c9a1027b",
      "date": "2020-03-10T16:51:48.256Z"
    }, { "category": "man", "services": [{ "code": "cut", "sum": 150 }], "sum": 150, "id": "10a3304b186fc48238a3817f4ea53224", "date": "2020-03-10T17:22:28.435Z" },
    { "eyelash": { "code": "renewal", "sum": 500 }, "sum": 500, "id": "63ab4e1bef1f1472383c38d40e716a1e", "date": "2020-03-12T09:30:29.663Z" }, {
      "category": "woman",
      "hair": "long",
      "services": [{ "code": "cut", "sum": 230 }, { "code": "care", "sum": 290 }, { "code": "melodies", "sum": 580, "quantity": 2, "unit": 30, "price": 460 }],
      "sum": 1100,
      "id": "1a56950b1ea204f53ae7f2007866cb0b",
      "date": "2020-03-12T11:30:41.625Z"
    }, {
      "category": "woman",
      "hair": "middle",
      "services": [{ "code": "cut", "sum": 230 }, { "code": "color", "sum": 470, "quantity": 5, "unit": 15, "price": 270 }],
      "sum": 700,
      "id": "6b0a206a442644eed9bb1ecc248fec1c",
      "date": "2020-04-14T08:22:32.533Z"
    }, {
      "category": "woman",
      "hair": "long",
      "services": [{ "code": "cut", "sum": 230 }, { "code": "care", "sum": 290 }, { "code": "color", "sum": 370, "quantity": 2, "unit": 15, "price": 290 }],
      "sum": 890,
      "id": "c1f76c45656bf4982a6a9a24c324b95b",
      "date": "2020-04-14T16:13:06.227Z"
    }, {
      "category": "woman",
      "hair": "short",
      "services": [{ "code": "cut", "sum": 230 }, { "code": "care", "sum": 170 }, { "code": "color", "sum": 390, "quantity": 4, "unit": 15, "price": 230 }],
      "sum": 790,
      "id": "4f1f2d6dd42f148789c004ac39cc3d3f",
      "date": "2020-04-24T09:08:38.124Z"
    }, { "category": "man", "services": [{ "code": "cut", "sum": 150 }], "sum": 150, "id": "3b0c661e62a8b4d64b0085a356b6701d", "date": "2020-04-25T18:37:31.249Z" }, {
      "category": "woman",
      "hair": "middle",
      "services": [{ "code": "care", "sum": 230 }, { "code": "color", "sum": 370, "quantity": 2.5, "unit": 15, "price": 270 }],
      "sum": 600,
      "id": "30ea458e90cfb4c54bd80a0e559b72e6",
      "date": "2020-04-25T18:37:51.933Z"
    }, {
      "category": "woman",
      "hair": "short",
      "services": [{ "code": "cut", "sum": 230 }, { "code": "care", "sum": 170 }, { "code": "duoColor", "sum": 80, "quantity": 2, "unit": 15, "price": 0 },
        { "code": "duoMelodies", "sum": 330, "quantity": 0.5, "unit": 30, "price": 300 }],
      "sum": 810,
      "id": "7cf1fd83bcff24ff1b5669d4620fca61",
      "date": "2020-04-27T13:56:33.435Z"
    }, {
      "category": "woman",
      "hair": "middle",
      "services": [{ "code": "cut", "sum": 230 }, { "code": "care", "sum": 230 }, { "code": "color", "sum": 390, "quantity": 3, "unit": 15, "price": 270 }],
      "sum": 850,
      "id": "d555c81b767ed4c74aa87b3bc955d1e5",
      "date": "2020-04-28T09:01:49.692Z"
    }, {
      "category": "woman",
      "hair": "middle",
      "services": [{ "code": "cut", "sum": 230 }, { "code": "color", "sum": 390, "quantity": 3, "unit": 15, "price": 270 }],
      "sum": 620,
      "id": "b17a97c93890b4b37b53ebb5a252de23",
      "date": "2020-04-28T09:41:34.651Z"
    }, {
      "category": "woman",
      "hair": "short",
      "services": [{ "code": "cut", "sum": 230 }, { "code": "care", "sum": 170 }, { "code": "melodies", "sum": 350, "quantity": 2, "unit": 30, "price": 230 }],
      "sum": 750,
      "id": "0d6e2ac4445134b2696a950ae7f98e1f",
      "date": "2020-04-29T13:48:28.644Z"
    }, {
      "category": "woman",
      "hair": "short",
      "services": [{ "code": "cut", "sum": 230 }, { "code": "care", "sum": 170 }, { "code": "color", "sum": 390, "quantity": 4, "unit": 15, "price": 230 }],
      "sum": 790,
      "id": "a5983a574d69b4fbc8d47e91fe2341c3",
      "date": "2020-04-29T15:17:16.988Z"
    }, { "category": "man", "services": [{ "code": "cut", "sum": 150 }], "sum": 150, "id": "f52db2edafe7c4a9292b967c0fcd8c79", "date": "2020-04-29T15:49:46.749Z" }, {
      "category": "woman",
      "hair": "middle",
      "services": [{ "code": "cut", "sum": 230 }, { "code": "care", "sum": 230 }, { "code": "melodies", "sum": 730, "quantity": 7, "unit": 30, "price": 310 }],
      "sum": 1190,
      "id": "28ebe3e2748ae4d8a892eef8b3365ca7",
      "date": "2020-05-02T06:46:57.446Z"
    }, { "category": "man", "services": [{ "code": "cut", "sum": 150 }], "sum": 150, "id": "c8415d0c4d0e347a5ae2435a82a09635", "date": "2020-05-11T07:04:31.685Z" },
    { "category": "child", "hair": "short", "services": [{ "code": "cut", "sum": 100 }], "sum": 100, "id": "4cda2322e8e7042f495ac38ab11811b1", "date": "2020-05-11T07:04:36.717Z" }, {
      "category": "woman",
      "hair": "long",
      "services": [{ "code": "cut", "sum": 230 }, { "code": "care", "sum": 290 }, { "code": "melodies", "sum": 550, "quantity": 1.5, "unit": 30, "price": 460 }],
      "sum": 1070,
      "id": "969bef79936124eeeaaf9c20f51b5659",
      "date": "2020-05-11T08:43:00.348Z"
    }, {
      "category": "woman",
      "hair": "long",
      "services": [{ "code": "care", "sum": 290 }, { "code": "melodies", "sum": 580, "quantity": 2, "unit": 30, "price": 460 },
        { "code": "hairSpray", "sum": 530, "quantity": 4, "unit": 15, "price": 290 }],
      "sum": 1400,
      "id": "1ba249a3734824ac183efe3165a2c2e8",
      "date": "2020-05-11T11:36:45.211Z"
    }, {
      "category": "woman",
      "hair": "short",
      "services": [{ "code": "cut", "sum": 230 }, { "code": "care", "sum": 170 }, { "code": "duoMelodies", "sum": 360, "quantity": 1, "unit": 30, "price": 300 },
        { "code": "duoColor", "sum": 80, "quantity": 2, "unit": 15, "price": 0 }],
      "sum": 840,
      "id": "0097de24dc66242309807b014d272f62",
      "date": "2020-05-11T13:30:15.687Z"
    }, {
      "category": "woman",
      "hair": "middle",
      "services": [{ "code": "cut", "sum": 230 }, { "code": "care", "sum": 230 }, { "code": "melodies", "sum": 370, "quantity": 1, "unit": 30, "price": 310 }],
      "sum": 830,
      "id": "2cc1b3ebc5d8f43c5a317fdde25007c2",
      "date": "2020-05-11T15:04:41.003Z"
    }, { "category": "child", "hair": "short", "services": [{ "code": "cut", "sum": 100 }], "sum": 100, "id": "39dfb0932f6f5476b898407efaa4a76e", "date": "2020-05-11T15:21:54.892Z" },
    { "category": "child", "hair": "short", "services": [{ "code": "cut", "sum": 100 }], "sum": 100, "id": "d41f8360c4fde4b5ea51669fe0e3af9b", "date": "2020-05-11T15:21:59.724Z" }, {
      "category": "woman",
      "hair": "middle",
      "services": [{ "code": "cut", "sum": 230 }, { "code": "care", "sum": 230 }, { "code": "hairSpray", "sum": 480, "quantity": 3.5, "unit": 15, "price": 270 }],
      "sum": 940,
      "id": "5433433e2301a4cee85a32d3e440fb11",
      "date": "2020-05-12T08:08:51.004Z"
    }, {
      "category": "woman",
      "hair": "middle",
      "services": [{ "code": "cut", "sum": 230 }, { "code": "care", "sum": 230 }, { "code": "melodies", "sum": 460, "quantity": 2.5, "unit": 30, "price": 310 }],
      "sum": 920,
      "id": "9e0a40b1a3f1843209d9b4f99b292ac1",
      "date": "2020-05-12T08:46:28.736Z"
    }, {
      "category": "woman",
      "hair": "long",
      "services": [{ "code": "care", "sum": 290 }, { "code": "color", "sum": 450, "quantity": 4, "unit": 15, "price": 290 }],
      "sum": 740,
      "id": "8ef0a7dc03b4140929f0f1d65f4f15ef",
      "date": "2020-05-12T10:41:48.160Z"
    }, {
      "category": "woman",
      "hair": "long",
      "services": [{ "code": "cut", "sum": 230 }, { "code": "care", "sum": 290 }],
      "sum": 520,
      "id": "dc2e0924fc3bb467cb643ecd9320131b",
      "date": "2020-05-12T14:37:45.304Z"
    }, {
      "category": "woman",
      "hair": "middle",
      "services": [{ "code": "cut", "sum": 230 }, { "code": "care", "sum": 230 }, { "code": "melodies", "sum": 430, "quantity": 2, "unit": 30, "price": 310 },
        { "code": "hairSpray", "sum": 420, "quantity": 2.5, "unit": 15, "price": 270 }],
      "sum": 1310,
      "id": "63073f9a9097149b08348951ef194f8b",
      "date": "2020-05-13T13:55:35.464Z"
    }, {
      "category": "woman",
      "hair": "short",
      "services": [{ "code": "cut", "sum": 230 }, { "code": "care", "sum": 170 }, { "code": "duoMelodies", "sum": 360, "quantity": 1, "unit": 30, "price": 300 },
        { "code": "duoColor", "sum": 160, "quantity": 4, "unit": 15, "price": 0 }],
      "sum": 920,
      "id": "6d4fd4119335b48bda93726b2ec99fba",
      "date": "2020-05-13T15:28:39.018Z"
    }, {
      "category": "woman",
      "hair": "long",
      "services": [{ "code": "care", "sum": 290 }, { "code": "color", "sum": 410, "quantity": 3, "unit": 15, "price": 290 }],
      "sum": 700,
      "id": "0222a30ee59114fa8baac48a48b194d8",
      "date": "2020-05-13T16:02:39.510Z"
    }, { "category": "child", "hair": "short", "services": [{ "code": "cut", "sum": 100 }], "sum": 100, "id": "0a143b68198134d66a4d059a3a2e7fd5", "date": "2020-05-13T16:03:18.454Z" }, {
      "category": "woman",
      "hair": "short",
      "services": [{ "code": "cut", "sum": 230 }, { "code": "care", "sum": 170 }, { "code": "color", "sum": 390, "quantity": 4, "unit": 15, "price": 230 }],
      "sum": 790,
      "id": "c20d5d4ad0ef849a1aa1f4670df68de7",
      "date": "2020-05-14T07:51:04.551Z"
    }, {
      "category": "woman",
      "hair": "middle",
      "services": [{ "code": "cut", "sum": 230 }, { "code": "care", "sum": 230 }, { "code": "hairSpray", "sum": 480, "quantity": 3.5, "unit": 15, "price": 270 }],
      "sum": 940,
      "id": "f2ffb01a4701e4bb9bff9d69c9a6fe79",
      "date": "2020-05-14T08:41:04.498Z"
    }, { "category": "child", "hair": "short", "services": [{ "code": "cut", "sum": 100 }], "sum": 100, "id": "a49f6cbef80834031a1f6c86e5e9752b", "date": "2020-05-14T08:41:09.684Z" }, {
      "category": "woman",
      "hair": "long",
      "services": [{ "code": "cut", "sum": 230 }, { "code": "care", "sum": 290 }, { "code": "color", "sum": 410, "quantity": 3, "unit": 15, "price": 290 }],
      "sum": 930,
      "id": "f243e0983a4284edfb892fd70522000d",
      "date": "2020-05-14T09:59:06.352Z"
    }, { "category": "child", "hair": "short", "services": [{ "code": "cut", "sum": 100 }], "sum": 100, "id": "6e5391caa60054ccfa9a7edd13aa5718", "date": "2020-05-14T09:59:13.094Z" }, {
      "category": "woman",
      "hair": "long",
      "services": [{ "code": "cut", "sum": 230 }, { "code": "care", "sum": 290 }, { "code": "melodies", "sum": 700, "quantity": 4, "unit": 30, "price": 460 }],
      "sum": 1220,
      "id": "7ac06cfe50f2b44258b2a0f44bc6f562",
      "date": "2020-05-14T11:33:57.068Z"
    }, {
      "category": "woman",
      "hair": "long",
      "services": [{ "code": "cut", "sum": 230 }, { "code": "care", "sum": 290 }, { "code": "color", "sum": 490, "quantity": 5, "unit": 15, "price": 290 }],
      "sum": 1010,
      "id": "723bbe4b95756405e94caec4f551d284",
      "date": "2020-05-14T12:56:48.799Z"
    }, { "category": "child", "hair": "short", "services": [{ "code": "cut", "sum": 100 }], "sum": 100, "id": "512cee51c5162493595dc7f18c60eecb", "date": "2020-05-14T13:25:21.154Z" }, {
      "category": "woman",
      "hair": "middle",
      "services": [{ "code": "cut", "sum": 230 }, { "code": "care", "sum": 230 }],
      "sum": 460,
      "id": "1788a9ef389dc4a659a951c8ec4cf920",
      "date": "2020-05-15T08:07:42.680Z"
    }, { "category": "child", "hair": "short", "services": [{ "code": "cut", "sum": 100 }], "sum": 100, "id": "8fe8778f9b15d4723ac457ce1800a11d", "date": "2020-05-15T08:07:46.921Z" }, {
      "category": "woman",
      "hair": "middle",
      "services": [{ "code": "cut", "sum": 230 }, { "code": "care", "sum": 230 }, { "code": "melodies", "sum": 430, "quantity": 2, "unit": 30, "price": 310 },
        { "code": "hairSpray", "sum": 510, "quantity": 4, "unit": 15, "price": 270 }],
      "sum": 1400,
      "id": "7537e78d3a3484a1b9d04426158d6d81",
      "date": "2020-05-15T09:32:46.522Z"
    }, { "category": "child", "hair": "short", "services": [{ "code": "cut", "sum": 100 }], "sum": 100, "id": "891ef8f96412c4575810c3ed071eb047", "date": "2020-05-15T10:28:58.543Z" }, {
      "category": "woman",
      "hair": "short",
      "services": [{ "code": "cut", "sum": 230 }, { "code": "care", "sum": 170 }, { "code": "duoMelodies", "sum": 360, "quantity": 1, "unit": 30, "price": 300 },
        { "code": "duoColor", "sum": 100, "quantity": 2.5, "unit": 15, "price": 0 }],
      "sum": 860,
      "id": "dad802ddcd9f443998d7baaa3ddc8c26",
      "date": "2020-05-18T07:38:37.607Z"
    }, {
      "category": "woman",
      "hair": "short",
      "services": [{ "code": "cut", "sum": 230 }, { "code": "care", "sum": 170 }, { "code": "color", "sum": 350, "quantity": 3, "unit": 15, "price": 230 }],
      "sum": 750,
      "id": "813e3d835b06b4d5185545e61e8820a5",
      "date": "2020-05-18T08:07:57.740Z"
    }, {
      "category": "woman",
      "hair": "long",
      "services": [{ "code": "cut", "sum": 230 }, { "code": "care", "sum": 290 }, { "code": "melodies", "sum": 580, "quantity": 2, "unit": 30, "price": 460 }],
      "sum": 1100,
      "id": "a0940d62b6fa44531a05c9c4dbd7b7ba",
      "date": "2020-05-18T10:09:55.964Z"
    }, {
      "category": "woman",
      "hair": "long",
      "services": [{ "code": "cut", "sum": 230 }, { "code": "care", "sum": 290 }, { "code": "color", "sum": 570, "quantity": 7, "unit": 15, "price": 290 }],
      "sum": 1090,
      "id": "0f534c3c9fdff40588ec6ace1046033a",
      "date": "2020-05-18T12:12:26.890Z"
    }, {
      "category": "woman",
      "hair": "long",
      "services": [{ "code": "cut", "sum": 230 }, { "code": "care", "sum": 290 }, { "code": "duoMelodies", "sum": 820, "quantity": 7, "unit": 30, "price": 400 }],
      "sum": 1340,
      "id": "5fce470732ecb4912b6932b24778b08d",
      "date": "2020-05-18T12:13:51.649Z"
    }, { "category": "child", "hair": "short", "services": [{ "code": "cut", "sum": 100 }], "sum": 100, "id": "26ba6f1fd866147aca77e90cdc20e8c5", "date": "2020-05-18T13:35:33.038Z" },
    { "category": "child", "hair": "short", "services": [{ "code": "cut", "sum": 100 }], "sum": 100, "id": "43e6e8416c07049b0be15daa6ea09e4b", "date": "2020-05-18T13:35:36.812Z" },
    { "eyelash": { "code": "renewal", "sum": 500 }, "sum": 500, "id": "38da34595a8104317962e5312eef3728", "date": "2020-05-18T17:26:08.409Z" },
    { "category": "man", "services": [{ "code": "cut", "sum": 150 }], "sum": 150, "id": "c8813dc52c17446bf8b7b7538aeb7140", "date": "2020-05-19T15:45:57.696Z" },
    { "category": "man", "services": [{ "code": "cut", "sum": 150 }], "sum": 150, "id": "e5f7899f789384d5888dea46ae574367", "date": "2020-05-19T15:46:04.292Z" },
    { "category": "man", "services": [{ "code": "cut", "sum": 150 }], "sum": 150, "id": "d1dc026ad8b2541fdaa8cb437567ce27", "date": "2020-05-19T17:01:49.350Z" },
    { "category": "child", "hair": "short", "services": [{ "code": "cut", "sum": 100 }], "sum": 100, "id": "f395bb7041ed04d23af05c19dfa1b60d", "date": "2020-05-19T17:01:53.064Z" }, {
      "category": "woman",
      "hair": "short",
      "services": [{ "code": "cut", "sum": 230 }, { "code": "care", "sum": 170 }],
      "sum": 400,
      "id": "d2af1812c5acd453ea680c520c6dacaa",
      "date": "2020-05-20T09:00:26.835Z"
    }, {
      "category": "woman",
      "hair": "short",
      "services": [{ "code": "cut", "sum": 230 }, { "code": "care", "sum": 170 }, { "code": "hairSpray", "sum": 410, "quantity": 3, "unit": 15, "price": 230 }],
      "sum": 810,
      "id": "44881c4ee05b8435f8485e9a9a982e14",
      "date": "2020-05-20T12:11:30.055Z"
    }, {
      "category": "woman",
      "hair": "short",
      "services": [{ "code": "cut", "sum": 230 }, { "code": "care", "sum": 170 }],
      "sum": 400,
      "id": "c020f41e712a94c5d99703ee68f6b23e",
      "date": "2020-05-20T12:12:15.076Z"
    }, { "category": "child", "hair": "short", "services": [{ "code": "cut", "sum": 100 }], "sum": 100, "id": "c7d8a19789d11429abe76be8926089df", "date": "2020-05-20T12:12:19.412Z" },
    { "category": "child", "hair": "short", "services": [{ "code": "cut", "sum": 100 }], "sum": 100, "id": "2349daad158574381bd362453e405054", "date": "2020-05-20T12:12:22.882Z" },
    { "category": "child", "hair": "short", "services": [{ "code": "cut", "sum": 100 }], "sum": 100, "id": "ecf101df385264d399f1544a899e88a0", "date": "2020-05-20T12:12:26.949Z" },
    { "eyelash": { "code": "renewal", "sum": 500 }, "sum": 500, "id": "63d71702d606543d89443289b1549651", "date": "2020-05-20T12:12:31.331Z" }, {
      "category": "woman",
      "hair": "long",
      "services": [{ "code": "care", "sum": 290 }, { "code": "melodies", "sum": 520, "quantity": 1, "unit": 30, "price": 460 },
        { "code": "hairSpray", "sum": 470, "quantity": 3, "unit": 15, "price": 290 }],
      "sum": 1280,
      "id": "b12662b17fa8147b9b50de0d8a7e61e9",
      "date": "2020-05-21T09:56:28.727Z"
    }, { "eyelash": { "code": "renewal", "sum": 500 }, "sum": 500, "id": "9a3d973d2c05a40088e4613e87ef99bc", "date": "2020-05-21T11:10:48.629Z" },
    { "category": "child", "hair": "short", "services": [{ "code": "cut", "sum": 100 }], "sum": 100, "id": "6b42d7eb8ca7144859913c94dfeb1318", "date": "2020-05-21T19:46:36.991Z" },
    { "category": "child", "hair": "short", "services": [{ "code": "cut", "sum": 100 }], "sum": 100, "id": "3050b73db876e4e7285fc6b5fc8dc377", "date": "2020-05-21T19:46:40.270Z" }, {
      "category": "woman",
      "hair": "long",
      "services": [{ "code": "cut", "sum": 230 }, { "code": "care", "sum": 290 }, { "code": "color", "sum": 390, "quantity": 2.5, "unit": 15, "price": 290 }],
      "sum": 910,
      "id": "fcbdc2b1d636d4cb5b78cde30c4c2513",
      "date": "2020-05-22T09:28:49.197Z"
    }, { "category": "child", "hair": "short", "services": [{ "code": "cut", "sum": 100 }], "sum": 100, "id": "a06d7ec403ea84ed2ba9c849edea4351", "date": "2020-05-22T09:28:53.684Z" }, {
      "category": "woman",
      "hair": "long",
      "services": [{ "code": "cut", "sum": 230 }, { "code": "care", "sum": 290 }, { "code": "duoColor", "sum": 320, "quantity": 8, "unit": 15, "price": 0 },
        { "code": "duoMelodies", "sum": 670, "quantity": 4.5, "unit": 30, "price": 400 }],
      "sum": 1510,
      "id": "6d25db3da78214eb8991ec2aeccb643e",
      "date": "2020-05-22T11:42:16.897Z"
    }, {
      "category": "woman",
      "hair": "short",
      "services": [{ "code": "cut", "sum": 230 }, { "code": "care", "sum": 170 }],
      "sum": 400,
      "id": "29b7b3910a97f431aaff3e927be93f07",
      "date": "2020-05-22T11:42:43.709Z"
    }, { "category": "child", "hair": "short", "services": [{ "code": "cut", "sum": 100 }], "sum": 100, "id": "3ec6e224f545e400a968ba3f10a3e5ce", "date": "2020-05-22T11:42:47.194Z" }, {
      "category": "woman",
      "hair": "long",
      "services": [{ "code": "cut", "sum": 230 }, { "code": "care", "sum": 290 }],
      "sum": 520,
      "id": "68476ca9a54d54a1b9bb49e90d7effbe",
      "date": "2020-05-22T11:43:17.046Z"
    }, { "eyelash": { "code": "renewal", "sum": 500 }, "sum": 500, "id": "7c15b5e3802f24413bb48e021be7a72d", "date": "2020-05-23T07:02:43.327Z" }, {
      "category": "woman",
      "hair": "long",
      "services": [{ "code": "cut", "sum": 230 }, { "code": "care", "sum": 290 }],
      "sum": 520,
      "id": "7ec36cbb2337d478ab9ce8970e575dd2",
      "date": "2020-05-25T09:29:53.377Z"
    }, {
      "category": "woman",
      "hair": "long",
      "services": [{ "code": "cut", "sum": 230 }, { "code": "care", "sum": 290 }],
      "sum": 520,
      "id": "1f34cdd31febe4cfbaf286967e57dd25",
      "date": "2020-05-25T11:27:21.948Z"
    }, {
      "category": "woman",
      "hair": "long",
      "services": [{ "code": "care", "sum": 290 }, { "code": "color", "sum": 550, "quantity": 6.5, "unit": 15, "price": 290 }],
      "sum": 840,
      "id": "19fb338fbc1fe44a29b48540d10c7675",
      "date": "2020-05-25T13:08:52.415Z"
    }, {
      "category": "woman",
      "hair": "short",
      "services": [{ "code": "cut", "sum": 230 }, { "code": "care", "sum": 170 }, { "code": "hairSpray", "sum": 350, "quantity": 2, "unit": 15, "price": 230 }],
      "sum": 750,
      "id": "7204a0045cf2342b0a85005c3878eb80",
      "date": "2020-05-25T15:10:15.412Z"
    }, { "category": "child", "hair": "short", "services": [{ "code": "cut", "sum": 100 }], "sum": 100, "id": "72674126b449e4366a054785de48f6cf", "date": "2020-05-25T15:10:19.309Z" },
    { "category": "child", "hair": "short", "services": [{ "code": "cut", "sum": 100 }], "sum": 100, "id": "0ff918bb4110f4402b197c5f1a799cca", "date": "2020-05-25T15:10:23.440Z" },
    { "category": "man", "services": [{ "code": "cut", "sum": 150 }], "sum": 150, "id": "5f0ea5955048542ce8d5a8f883e111b2", "date": "2020-05-25T15:10:28.310Z" }, {
      "category": "woman",
      "hair": "short",
      "services": [{ "code": "cut", "sum": 230 }, { "code": "care", "sum": 170 }, { "code": "duoMelodies", "sum": 330, "quantity": 0.5, "unit": 30, "price": 300 },
        { "code": "duoColor", "sum": 80, "quantity": 2, "unit": 15, "price": 0 }],
      "sum": 810,
      "id": "be381489007a9474c85309df9733d6bf",
      "date": "2020-05-25T15:45:26.274Z"
    }, { "category": "child", "hair": "short", "services": [{ "code": "cut", "sum": 100 }], "sum": 100, "id": "b97c29490bb204606a368e64d33ef55c", "date": "2020-05-25T15:45:30.968Z" }, {
      "category": "woman",
      "hair": "middle",
      "services": [{ "code": "cut", "sum": 230 }, { "code": "care", "sum": 230 }],
      "sum": 460,
      "id": "299271821c3a14b2790d07cdf2d16ed6",
      "date": "2020-05-25T21:48:12.503Z"
    }, {
      "bride": { "code": "package", "sum": 3200 },
      "sum": 4950,
      "weddingDate": "2020-06-20T04:30:00.000Z",
      "customer": "7b29e0b48731a4f5f8a1d5687cf6fcfe",
      "id": "2fafebc1826a34df08b0924db3cb02b1",
      "date": "2020-05-25T21:52:22.077Z",
      "guests": [{ "makeup": 350 }, { "makeup": 350 }, { "makeup": 350 }, { "makeup": 350 }, { "makeup": 350 }],
      "deposit": 1500,
      "depositDate": "2020-05-25T21:53:05.518Z",
      "payDate": "2020-06-20T19:08:53.252Z"
    }, {
      "category": "woman",
      "hair": "middle",
      "services": [{ "code": "cut", "sum": 230 }, { "code": "care", "sum": 230 }],
      "sum": 460,
      "id": "ba265d68308e04bfa9c690232c983680",
      "date": "2020-05-26T08:21:17.031Z"
    }, {
      "category": "woman",
      "hair": "middle",
      "services": [{ "code": "cut", "sum": 230 }, { "code": "care", "sum": 230 }, { "code": "melodies", "sum": 430, "quantity": 2, "unit": 30, "price": 310 }],
      "sum": 890,
      "id": "e021b9666d86d412998915e2a251b972",
      "date": "2020-05-26T08:48:02.768Z"
    }, {
      "category": "woman",
      "hair": "middle",
      "services": [{ "code": "cut", "sum": 230 }, { "code": "care", "sum": 230 }, { "code": "duoMelodies", "sum": 410, "quantity": 1, "unit": 30, "price": 350 },
        { "code": "duoColor", "sum": 120, "quantity": 3, "unit": 15, "price": 0 }],
      "sum": 990,
      "id": "9487d4e4489a848648c2314009e4671d",
      "date": "2020-05-26T10:21:09.902Z"
    }, { "category": "child", "hair": "short", "services": [{ "code": "cut", "sum": 100 }], "sum": 100, "id": "b311230d858e246169b8aa9943af69a4", "date": "2020-05-26T10:21:31.299Z" }, {
      "category": "woman",
      "hair": "middle",
      "services": [{ "code": "care", "sum": 230 }, { "code": "melodies", "sum": 370, "quantity": 1, "unit": 30, "price": 310 }],
      "sum": 600,
      "id": "e91024373f73b41a4b44d2094b807b4e",
      "date": "2020-05-26T15:11:59.139Z"
    }, {
      "category": "woman",
      "hair": "short",
      "services": [{ "code": "cut", "sum": 230 }, { "code": "care", "sum": 170 }, { "code": "duoMelodies", "sum": 390, "quantity": 1.5, "unit": 30, "price": 300 },
        { "code": "duoColor", "sum": 80, "quantity": 2, "unit": 15, "price": 0 }],
      "sum": 870,
      "id": "cd2d8336d6b1a4b4ba02c70db55f516f",
      "date": "2020-05-26T15:36:27.896Z"
    }, {
      "category": "woman",
      "hair": "short",
      "services": [{ "code": "cut", "sum": 230 }, { "code": "care", "sum": 170 }, { "code": "color", "sum": 350, "quantity": 3, "unit": 15, "price": 230 }],
      "sum": 750,
      "id": "18d2f5813dfcd416298fec0d82729e17",
      "date": "2020-05-27T08:19:22.105Z"
    }, {
      "category": "woman",
      "hair": "middle",
      "services": [{ "code": "cut", "sum": 230 }, { "code": "care", "sum": 230 }, { "code": "melodies", "sum": 430, "quantity": 2, "unit": 30, "price": 310 },
        { "code": "color", "sum": 510, "quantity": 6, "unit": 15, "price": 270 }],
      "sum": 1400,
      "id": "a9064484315054e1591ad5388ad21f27",
      "date": "2020-05-27T11:14:20.425Z"
    }, {
      "bride": { "code": "makeupExam", "sum": 1800 },
      "sum": 1800,
      "id": "5927e04c13ae044c3bdc0ff2a12e925d",
      "date": "2020-05-27T12:33:55.232Z",
      "weddingDate": "2020-08-13T22:00:00.000Z",
      "customer": "2317f08e510564357aa8733e683dc967",
      "desc": "Platba 900,-",
      "deposit": 1000,
      "depositDate": "2020-06-18T09:22:08.578Z",
      "payDate": "2020-09-12T12:00:46.369Z"
    }, {
      "category": "woman",
      "hair": "middle",
      "services": [{ "code": "cut", "sum": 230 }, { "code": "care", "sum": 230 }, { "code": "melodies", "sum": 790, "quantity": 8, "unit": 30, "price": 310 }],
      "sum": 1250,
      "id": "8374350a15baf47c8b84cdc7afc66145",
      "date": "2020-05-27T15:30:20.978Z"
    }, { "category": "man", "services": [{ "code": "cut", "sum": 150 }], "sum": 150, "id": "cb91fa5a5ac7b4f9bbe3984f47be2d3b", "date": "2020-05-27T15:30:25.634Z" },
    { "category": "woman", "hair": "short", "services": [{ "code": "care", "sum": 170 }], "sum": 170, "id": "f7bd66d62671b4507a845eddb4b4da09", "date": "2020-05-27T15:30:35.751Z" },
    { "category": "man", "services": [{ "code": "cut", "sum": 150 }], "sum": 150, "id": "f1ee16bf96e584d4b96e3e4981c8c260", "date": "2020-05-27T15:30:39.933Z" },
    { "category": "child", "hair": "short", "services": [{ "code": "cut", "sum": 100 }], "sum": 100, "id": "3c41e7dd5de2545eba359d1ac0a1775d", "date": "2020-05-27T19:27:47.521Z" },
    { "category": "child", "hair": "short", "services": [{ "code": "cut", "sum": 100 }], "sum": 100, "id": "36e0d613c6b5a4891bbb6054dbc6feb1", "date": "2020-05-27T19:27:51.031Z" }, {
      "category": "woman",
      "hair": "long",
      "services": [{ "code": "cut", "sum": 230 }, { "code": "care", "sum": 290 }, { "code": "melodies", "sum": 580, "quantity": 2, "unit": 30, "price": 460 }],
      "sum": 1100,
      "id": "44c4e226e4a6a41d9b01543ff7acef45",
      "date": "2020-05-28T09:09:52.173Z"
    }, {
      "category": "woman",
      "hair": "long",
      "services": [{ "code": "cut", "sum": 230 }, { "code": "care", "sum": 290 }, { "code": "melodies", "sum": 580, "quantity": 2, "unit": 30, "price": 460 }],
      "sum": 1100,
      "id": "733b1589d024b441b820e05d712be69c",
      "date": "2020-05-28T09:10:00.809Z"
    }, {
      "category": "woman",
      "hair": "long",
      "services": [{ "code": "cut", "sum": 230 }, { "code": "care", "sum": 290 }, { "code": "hairSpray", "sum": 530, "quantity": 4, "unit": 15, "price": 290 }],
      "sum": 1050,
      "id": "18c07d4c3b743459cb3871a5c81424fd",
      "date": "2020-05-28T11:13:55.274Z"
    }, {
      "category": "woman",
      "hair": "long",
      "services": [{ "code": "cut", "sum": 230 }, { "code": "care", "sum": 290 }],
      "sum": 520,
      "id": "c6ca21b847dcb45d68ab4e2f7279b643",
      "date": "2020-05-29T07:02:34.847Z"
    }, {
      "category": "woman",
      "hair": "short",
      "services": [{ "code": "cut", "sum": 230 }, { "code": "care", "sum": 170 }, { "code": "color", "sum": 390, "quantity": 4, "unit": 15, "price": 230 }],
      "sum": 790,
      "id": "8bade6058981c43bd8376cbcb76c20fe",
      "date": "2020-05-29T07:29:06.780Z"
    }, {
      "category": "woman",
      "hair": "long",
      "services": [{ "code": "cut", "sum": 230 }, { "code": "care", "sum": 290 }, { "code": "melodies", "sum": 700, "quantity": 4, "unit": 30, "price": 460 }],
      "sum": 1220,
      "id": "92e95ddd9f3d24b37be46b02fae99ca3",
      "date": "2020-05-29T09:36:38.009Z"
    }, { "eyelash": { "code": "new", "sum": 850 }, "sum": 850, "id": "9cdaeb7b015104d8595fa16e0c16a68c", "date": "2020-05-29T11:09:00.196Z" },
    { "socialEvents": [{ "code": "makeup", "sum": 800 }], "sum": 800, "id": "1ec0cf5607b3847108494d1ade9579db", "date": "2020-05-29T13:02:07.961Z" },
    { "category": "woman", "hair": "middle", "services": [{ "code": "care", "sum": 230 }], "sum": 230, "id": "d28e68b1218014a9bb64f2465c1286bb", "date": "2020-05-29T13:02:16.958Z" }, {
      "category": "woman",
      "hair": "middle",
      "services": [{ "code": "care", "sum": 230 }, { "code": "color", "sum": 470, "quantity": 5, "unit": 15, "price": 270 }],
      "sum": 700,
      "id": "dce504b2834ff4644b61c33f638a50d6",
      "date": "2020-06-04T15:20:58.621Z"
    }, {
      "category": "woman",
      "hair": "long",
      "services": [{ "code": "cut", "sum": 230 }, { "code": "care", "sum": 290 }, { "code": "duoMelodies", "sum": 760, "quantity": 6, "unit": 30, "price": 400 },
        { "code": "bondUltim", "sum": 750, "quantity": 3, "unit": 4, "price": 0 }],
      "sum": 2030,
      "id": "23b7c4c70e0fd455ca1a4113cfec5816",
      "date": "2020-06-04T15:21:34.172Z"
    }, {
      "category": "woman",
      "hair": "long",
      "services": [{ "code": "cut", "sum": 230 }, { "code": "care", "sum": 290 }, { "code": "duoColor", "sum": 240, "quantity": 6, "unit": 15, "price": 0 },
        { "code": "bondUltim", "sum": 1250, "quantity": 5, "unit": 4, "price": 0 }],
      "sum": 2010,
      "id": "81bffa0af16fb4d179fc93d7a552458c",
      "date": "2020-06-04T15:21:57.210Z"
    }, {
      "category": "woman",
      "hair": "short",
      "services": [{ "code": "cut", "sum": 230 }, { "code": "care", "sum": 170 }],
      "sum": 400,
      "id": "c8ee6775d7b0e46309322ed1ab876d6e",
      "date": "2020-06-08T11:52:02.545Z"
    }, { "eyelash": { "code": "new", "sum": 850 }, "sum": 850, "id": "e120354ff423244df877911a63d82f24", "date": "2020-06-08T11:52:25.765Z" },
    { "eyelash": { "code": "renewal", "sum": 500 }, "sum": 500, "id": "c9b87c5045eea4b7c8047f1021598651", "date": "2020-06-08T11:52:28.616Z" }, {
      "category": "woman",
      "hair": "middle",
      "services": [{ "code": "cut", "sum": 230 }, { "code": "care", "sum": 230 }, { "code": "melodies", "sum": 430, "quantity": 2, "unit": 30, "price": 310 },
        { "code": "hairSpray", "sum": 510, "quantity": 4, "unit": 15, "price": 270 }],
      "sum": 1400,
      "id": "676553129e4084352af51802b0841e62",
      "date": "2020-06-08T14:07:16.473Z"
    }, {
      "category": "woman",
      "hair": "middle",
      "services": [{ "code": "cut", "sum": 230 }, { "code": "care", "sum": 230 }, { "code": "color", "sum": 350, "quantity": 2, "unit": 15, "price": 270 }],
      "sum": 810,
      "id": "ee9d29f58fa0741eba42d5d0997cc2e7",
      "date": "2020-06-08T17:47:25.559Z"
    }, {
      "category": "woman",
      "hair": "middle",
      "services": [{ "code": "cut", "sum": 230 }, { "code": "care", "sum": 230 }, { "code": "color", "sum": 350, "quantity": 2, "unit": 15, "price": 270 }],
      "sum": 810,
      "id": "039a624a0d85a4876b9aede4a37ad9f0",
      "date": "2020-06-08T17:47:32.284Z"
    }, {
      "category": "woman",
      "hair": "short",
      "services": [{ "code": "cut", "sum": 230 }, { "code": "care", "sum": 170 }],
      "sum": 400,
      "id": "f1475672197ec46e38b32ce1414e7304",
      "date": "2020-06-09T07:03:30.630Z"
    }, { "category": "child", "hair": "short", "services": [{ "code": "cut", "sum": 100 }], "sum": 100, "id": "eee70d30ab06044ea80e340802e6411e", "date": "2020-06-09T07:32:06.603Z" }, {
      "category": "woman",
      "hair": "long",
      "services": [{ "code": "care", "sum": 290 }, { "code": "color", "sum": 370, "quantity": 2, "unit": 15, "price": 290 }],
      "sum": 660,
      "id": "c9ed94f5e9c4b479388e7936276a4dd2",
      "date": "2020-06-10T08:20:59.957Z"
    }, {
      "category": "woman",
      "hair": "middle",
      "services": [{ "code": "cut", "sum": 230 }, { "code": "care", "sum": 230 }, { "code": "duoMelodies", "sum": 410, "quantity": 1, "unit": 30, "price": 350 },
        { "code": "duoColor", "sum": 160, "quantity": 4, "unit": 15, "price": 0 }],
      "sum": 1030,
      "id": "77a6e5fb8fdeb4be1b7271778d7d7344",
      "date": "2020-06-10T10:35:15.979Z"
    }, {
      "category": "woman",
      "hair": "short",
      "services": [{ "code": "cut", "sum": 230 }, { "code": "care", "sum": 170 }, { "code": "duoMelodies", "sum": 360, "quantity": 1, "unit": 30, "price": 300 },
        { "code": "duoColor", "sum": 80, "quantity": 2, "unit": 15, "price": 0 }],
      "sum": 840,
      "id": "a065d2e83ba5948298106e98b088ec23",
      "date": "2020-06-10T15:18:44.542Z"
    }, {
      "category": "woman",
      "hair": "long",
      "services": [{ "code": "care", "sum": 290 }, { "code": "color", "sum": 410, "quantity": 3, "unit": 15, "price": 290 }],
      "sum": 700,
      "id": "9746c17f28af74d9086368d15a34e710",
      "date": "2020-06-10T15:53:58.108Z"
    }, { "category": "child", "hair": "short", "services": [{ "code": "cut", "sum": 100 }], "sum": 100, "id": "950bbe1828e394c729479c3bf5d2327a", "date": "2020-06-10T19:37:03.827Z" }, {
      "category": "woman",
      "hair": "short",
      "services": [{ "code": "cut", "sum": 230 }, { "code": "care", "sum": 170 }, { "code": "duoMelodies", "sum": 330, "quantity": 0.5, "unit": 30, "price": 300 },
        { "code": "duoColor", "sum": 80, "quantity": 2, "unit": 15, "price": 0 }],
      "sum": 810,
      "id": "2cc6d82b4f78f48c7b28ca7acc397f4d",
      "date": "2020-06-11T09:59:29.728Z"
    }, {
      "category": "woman",
      "hair": "middle",
      "services": [{ "code": "cut", "sum": 230 }, { "code": "care", "sum": 230 }, { "code": "color", "sum": 490, "quantity": 5.5, "unit": 15, "price": 270 }],
      "sum": 950,
      "id": "30d7a122ef9fe45fab365447aec26141",
      "date": "2020-06-12T07:53:32.659Z"
    }, {
      "category": "woman",
      "hair": "middle",
      "services": [{ "code": "cut", "sum": 230 }, { "code": "care", "sum": 230 }, { "code": "color", "sum": 350, "quantity": 2, "unit": 15, "price": 270 }],
      "sum": 810,
      "id": "2b430a9fea2834e1f95a5de2981e6e77",
      "date": "2020-06-12T09:31:30.247Z"
    }, {
      "category": "woman",
      "hair": "short",
      "services": [{ "code": "cut", "sum": 230 }, { "code": "care", "sum": 170 }, { "code": "melodies", "sum": 470, "quantity": 4, "unit": 30, "price": 230 }],
      "sum": 870,
      "id": "3c45ea5e0021e4831b261094c5be6890",
      "date": "2020-06-12T10:10:27.663Z"
    }, {
      "category": "woman",
      "hair": "long",
      "services": [{ "code": "cut", "sum": 230 }, { "code": "care", "sum": 290 }],
      "sum": 520,
      "id": "943f7095912d7440aad238e93c4c2153",
      "date": "2020-06-17T08:13:52.306Z"
    }, { "category": "child", "hair": "short", "services": [{ "code": "cut", "sum": 100 }], "sum": 100, "id": "b1319b884c7da4f0ca756c250ea2afea", "date": "2020-06-17T08:13:56.275Z" }, {
      "category": "woman",
      "hair": "middle",
      "services": [{ "code": "cut", "sum": 230 }, { "code": "care", "sum": 230 }, { "code": "hairSpray", "sum": 510, "quantity": 4, "unit": 15, "price": 270 }],
      "sum": 970,
      "id": "9d1458d60693b450785efbb0c981f21d",
      "date": "2020-06-17T09:22:05.995Z"
    }, {
      "category": "woman",
      "hair": "middle",
      "services": [{ "code": "cut", "sum": 230 }, { "code": "care", "sum": 230 }, { "code": "melodies", "sum": 430, "quantity": 2, "unit": 30, "price": 310 },
        { "code": "hairSpray", "sum": 540, "quantity": 4.5, "unit": 15, "price": 270 }],
      "sum": 1430,
      "id": "f3e30d55f7dbb4e86a3ce6977d5f0911",
      "date": "2020-06-17T11:45:51.609Z"
    }, {
      "category": "woman",
      "hair": "middle",
      "services": [{ "code": "cut", "sum": 230 }, { "code": "care", "sum": 230 }, { "code": "melodies", "sum": 460, "quantity": 2.5, "unit": 30, "price": 310 }],
      "sum": 920,
      "id": "ee768eddd7d394bb6b58b78fa4897e4d",
      "date": "2020-06-17T12:06:16.006Z"
    }, {
      "bride": { "code": "makeupExam", "sum": 1800 },
      "sum": 2500,
      "weddingDate": "2020-08-15T06:00:00.000Z",
      "customer": "61f8ccf4107f54c9f979f48c0f3124db",
      "id": "1da5eb2ac02af46d9b240aa3aec35ab2",
      "date": "2020-06-17T13:19:08.633Z",
      "deposit": 1000,
      "depositDate": "2020-06-17T13:19:13.957Z",
      "guests": [{ "makeup": 350 }, { "makeup": 350 }],
      "payDate": "2020-08-18T18:07:48.971Z"
    }, {
      "category": "woman",
      "hair": "long",
      "services": [{ "code": "care", "sum": 290 }, { "code": "color", "sum": 390, "quantity": 2.5, "unit": 15, "price": 290 }],
      "sum": 680,
      "id": "6fe23d2c519a04791ad3569da0ad4c49",
      "date": "2020-06-18T08:13:10.921Z"
    }, {
      "category": "woman",
      "hair": "middle",
      "services": [{ "code": "cut", "sum": 230 }, { "code": "care", "sum": 230 }, { "code": "hairSpray", "sum": 750, "quantity": 8, "unit": 15, "price": 270 }],
      "sum": 1210,
      "id": "08fb3499985784b338681cf724908900",
      "date": "2020-06-18T11:12:38.727Z"
    }, {
      "category": "woman",
      "hair": "short",
      "services": [{ "code": "cut", "sum": 230 }, { "code": "care", "sum": 170 }, { "code": "color", "sum": 350, "quantity": 3, "unit": 15, "price": 230 }],
      "sum": 750,
      "id": "9671cf17786bc46bfbd130bd61986519",
      "date": "2020-06-18T15:08:53.016Z"
    }, {
      "category": "woman",
      "hair": "short",
      "services": [{ "code": "cut", "sum": 230 }, { "code": "care", "sum": 170 }, { "code": "hairSpray", "sum": 500, "quantity": 4.5, "unit": 15, "price": 230 }],
      "sum": 900,
      "id": "2f8d79ed985b0451e81f7ad015994846",
      "date": "2020-06-18T15:31:41.266Z"
    }, {
      "bride": { "code": "package", "sum": 3200 },
      "sum": 4200,
      "weddingDate": "2020-08-08T05:00:00.000Z",
      "customer": "bd7ad79fc3e6840b3b51360c91ddfce0",
      "id": "881163852ab8a455eb8fb57402179a63",
      "date": "2020-06-18T15:47:03.863Z",
      "guests": [{ "hairstyle": 500 }, { "hairstyle": 500 }],
      "desc": "NevÄ›sta zaplacena 3200,-",
      "deposit": 2000,
      "depositDate": "2020-06-18T15:47:54.147Z",
      "payDate": "2020-08-12T11:23:53.498Z"
    }, { "eyelash": { "code": "renewal", "sum": 500 }, "sum": 500, "id": "f57c7b7a6dfc0429abe73203812f7e91", "date": "2020-06-19T08:55:00.426Z" },
    { "eyelash": { "code": "renewal", "sum": 500 }, "sum": 500, "id": "68bde0e51ecfe4cdf9182f348aed8831", "date": "2020-06-19T08:55:45.601Z" },
    { "socialEvents": [{ "code": "makeup", "sum": 800 }], "sum": 800, "id": "ae360c179c531486cb3cd9a7a94f4fbc", "date": "2020-06-20T19:09:35.264Z" },
    { "eyelash": { "code": "renewal", "sum": 500 }, "sum": 500, "id": "b806556960e8f4d5d9b51d506429805a", "date": "2020-06-20T19:10:08.839Z" },
    { "category": "man", "services": [{ "code": "cut", "sum": 150 }], "sum": 150, "id": "b122924c11bf8493882c0613c2c4a5b0", "date": "2020-06-20T19:10:14.549Z" }, {
      "bride": { "code": "hairstyleExam", "sum": 1800 },
      "sum": 2500,
      "weddingDate": "2020-06-19T22:00:00.000Z",
      "customer": "5184312060f57418697a758082fa39da",
      "id": "2cef5a4ddc93342469305a8fc61678c7",
      "date": "2020-06-20T19:11:15.717Z",
      "guests": [{ "makeup": 350 }, { "makeup": 350 }],
      "payDate": "2020-06-20T19:11:54.571Z"
    }, { "eyelash": { "code": "renewal", "sum": 500 }, "sum": 500, "id": "14bfa410f1248475aa9ee7de0f53732c", "date": "2020-06-20T19:12:09.823Z" }, {
      "category": "woman",
      "hair": "middle",
      "services": [{ "code": "cut", "sum": 230 }, { "code": "care", "sum": 230 }, { "code": "melodies", "sum": 580, "quantity": 4.5, "unit": 30, "price": 310 }],
      "sum": 1040,
      "id": "8d64ce081a96047a6a3cf218fe0d24a8",
      "date": "2020-06-22T09:11:30.115Z"
    }, {
      "category": "woman",
      "hair": "long",
      "services": [{ "code": "cut", "sum": 230 }, { "code": "care", "sum": 290 }],
      "sum": 520,
      "id": "22b5e4c8aadee42a48edea50fae4fec7",
      "date": "2020-06-22T13:48:30.567Z"
    }, { "category": "child", "hair": "short", "services": [{ "code": "cut", "sum": 100 }], "sum": 100, "id": "8c7149c9bc3f648e98f05648f001f76f", "date": "2020-06-22T13:48:34.247Z" },
    { "category": "man", "services": [{ "code": "cut", "sum": 150 }], "sum": 150, "id": "8195247d05adc49eea4282c688f1bc17", "date": "2020-06-22T13:51:57.514Z" }, {
      "category": "woman",
      "hair": "short",
      "services": [{ "code": "cut", "sum": 230 }, { "code": "care", "sum": 170 }, { "code": "color", "sum": 410, "quantity": 4.5, "unit": 15, "price": 230 }],
      "sum": 810,
      "id": "a050c465b81cb4c8f97a0cf7edce2cba",
      "date": "2020-06-22T15:10:51.885Z"
    }, { "eyelash": { "code": "renewal", "sum": 500 }, "sum": 500, "id": "f16e36d54c53f452ba11a9a9c778ab6b", "date": "2020-06-22T19:52:25.371Z" }, {
      "category": "woman",
      "hair": "middle",
      "services": [{ "code": "cut", "sum": 230 }, { "code": "care", "sum": 230 }, { "code": "color", "sum": 390, "quantity": 3, "unit": 15, "price": 270 }],
      "sum": 850,
      "id": "3887c49397c8b4ee9a856cb7be0ec9e1",
      "date": "2020-06-23T08:45:51.504Z"
    }, { "eyelash": { "code": "renewal", "sum": 500 }, "sum": 500, "id": "daec5066ebf3b4f28b666e14b6e75a36", "date": "2020-06-25T09:32:52.316Z" },
    { "eyelash": { "code": "renewal", "sum": 500 }, "sum": 500, "id": "d63921e755e8c4ae2b37e5245e38fcc6", "date": "2020-06-25T09:32:54.783Z" },
    { "category": "child", "hair": "short", "services": [{ "code": "cut", "sum": 100 }], "sum": 100, "id": "d8f2844a6047149a7b8fe7b5facd4d4f", "date": "2020-06-25T09:32:59.875Z" }, {
      "bride": { "code": "package", "sum": 3200 },
      "sum": 3900,
      "weddingDate": "2020-07-25T05:00:00.000Z",
      "customer": "653351166533243558ff52c30e1032a4",
      "id": "5bde547fa539745bfa18fb3ae077038f",
      "date": "2020-06-25T09:33:48.051Z",
      "guests": [{ "hairstyleMin": 350, "makeup": 350 }],
      "deposit": 2000,
      "depositDate": "2020-06-25T09:34:12.001Z",
      "payDate": "2020-07-28T20:41:23.215Z"
    }, { "eyelash": { "code": "renewal", "sum": 500 }, "sum": 500, "id": "32f1fb2e481b4454ea8f37e472e130d3", "date": "2020-06-25T11:04:43.259Z" },
    { "category": "child", "hair": "short", "services": [{ "code": "cut", "sum": 100 }], "sum": 100, "id": "54a8379bbe2fd4a128b6a25eb89a65f9", "date": "2020-06-25T13:11:00.043Z" }, {
      "bride": { "code": "package", "sum": 3200 },
      "sum": 4050,
      "weddingDate": "2020-07-25T08:15:00.000Z",
      "customer": "86ce51fc83d9b4e1f902371931d6e1c6",
      "id": "772aecfe12f88424882c80db80b778f5",
      "date": "2020-06-25T13:11:46.419Z",
      "guests": [{ "hairstyle": 500, "makeup": 350 }],
      "deposit": 2000,
      "depositDate": "2020-06-25T13:12:04.249Z",
      "payDate": "2020-07-28T20:40:06.445Z"
    }, {
      "category": "woman",
      "hair": "middle",
      "services": [{ "code": "care", "sum": 230 }, { "code": "hairSpray", "sum": 540, "quantity": 4.5, "unit": 15, "price": 270 }],
      "sum": 770,
      "id": "2e46e255b0cf04c13a242777b3ea001f",
      "date": "2020-06-25T14:50:08.450Z"
    }, {
      "category": "woman",
      "hair": "middle",
      "services": [{ "code": "cut", "sum": 230 }, { "code": "care", "sum": 230 }, { "code": "color", "sum": 430, "quantity": 4, "unit": 15, "price": 270 }],
      "sum": 890,
      "id": "394c4f5dcf5b84ad98edcd5289e31e1b",
      "date": "2020-06-26T14:34:16.113Z"
    }, { "category": "man", "services": [{ "code": "cut", "sum": 150 }], "sum": 150, "id": "8dbbb1684d794475e87179adc045c385", "date": "2020-06-26T15:48:53.804Z" }, {
      "category": "woman",
      "hair": "long",
      "services": [{ "code": "cut", "sum": 230 }, { "code": "care", "sum": 290 }, { "code": "hairSpray", "sum": 590, "quantity": 5, "unit": 15, "price": 290 }],
      "sum": 1110,
      "id": "436ddea729d5e458ba1d5bf64b3d21cb",
      "date": "2020-06-29T09:03:16.325Z"
    }, {
      "category": "woman",
      "hair": "short",
      "services": [{ "code": "cut", "sum": 230 }, { "code": "care", "sum": 170 }, { "code": "color", "sum": 390, "quantity": 4, "unit": 15, "price": 230 }],
      "sum": 790,
      "id": "8515e3ee8b3094f63a419cf91fcedebd",
      "date": "2020-06-29T09:03:58.304Z"
    }, {
      "category": "woman",
      "hair": "middle",
      "services": [{ "code": "cut", "sum": 230 }, { "code": "care", "sum": 230 }],
      "sum": 460,
      "id": "f95d8c0d3752e4b109504d7d80f420fc",
      "date": "2020-06-29T09:45:00.728Z"
    }, {
      "category": "woman",
      "hair": "short",
      "services": [{ "code": "cut", "sum": 230 }, { "code": "care", "sum": 170 }, { "code": "melodies", "sum": 350, "quantity": 2, "unit": 30, "price": 230 }],
      "sum": 750,
      "id": "1c67c6e6de50a4bb08e8c067e8b7d30e",
      "date": "2020-07-02T08:08:58.202Z"
    }, { "eyelash": { "code": "renewal", "sum": 500 }, "sum": 500, "id": "5d5ca5208b4c141878f96faa5afc9a89", "date": "2020-07-02T08:42:44.779Z" },
    { "category": "child", "hair": "short", "services": [{ "code": "cut", "sum": 100 }], "sum": 100, "id": "a81bf77a16c154598b0618d13a8e35cd", "date": "2020-07-02T08:42:50.737Z" },
    { "category": "child", "hair": "short", "services": [{ "code": "cut", "sum": 100 }], "sum": 100, "id": "f0df36fe55d8c4dacbd6beb3037d29ec", "date": "2020-07-02T08:42:54.338Z" }, {
      "category": "woman",
      "hair": "short",
      "services": [{ "code": "cut", "sum": 230 }, { "code": "care", "sum": 170 }],
      "sum": 400,
      "id": "a5482fcd595f14d928b147264437ad50",
      "date": "2020-07-13T14:31:25.460Z"
    }, {
      "category": "woman",
      "hair": "long",
      "services": [{ "code": "care", "sum": 290 }, { "code": "color", "sum": 410, "quantity": 3, "unit": 15, "price": 290 }],
      "sum": 700,
      "id": "c692b9a4dce7f406da65ffc373c0fc78",
      "date": "2020-07-13T14:54:59.950Z"
    }, { "eyelash": { "code": "new", "sum": 850 }, "sum": 850, "id": "5c5b4d92e4bac4d448aae9657d623df9", "date": "2020-07-13T16:20:45.124Z" }, {
      "category": "woman",
      "hair": "short",
      "services": [{ "code": "cut", "sum": 230 }, { "code": "care", "sum": 170 }],
      "sum": 400,
      "id": "62064add296cf4e88a3134cc7324b101",
      "date": "2020-07-13T17:21:14.899Z"
    }, { "category": "child", "hair": "short", "services": [{ "code": "cut", "sum": 100 }], "sum": 100, "id": "9c9f44bf40f224472abe13030c870012", "date": "2020-07-13T17:21:55.002Z" },
    { "category": "child", "hair": "short", "services": [{ "code": "cut", "sum": 100 }], "sum": 100, "id": "e8dd6e68b43944575a9c5ebd6789d125", "date": "2020-07-13T17:21:58.703Z" },
    { "category": "man", "services": [{ "code": "cut", "sum": 150 }], "sum": 150, "id": "3c12a69f1ec134e618afd56bbaf9a5e3", "date": "2020-07-13T17:22:01.694Z" },
    { "category": "child", "hair": "short", "services": [{ "code": "cut", "sum": 100 }], "sum": 100, "id": "338f97c9a77b0472bab01b758c57c6de", "date": "2020-07-14T07:12:29.444Z" }, {
      "category": "woman",
      "hair": "short",
      "services": [{ "code": "cut", "sum": 230 }, { "code": "care", "sum": 170 }, { "code": "color", "sum": 330, "quantity": 2.5, "unit": 15, "price": 230 }],
      "sum": 730,
      "id": "9fc385c03ba5347fda7e27a028364e52",
      "date": "2020-07-14T09:18:42.218Z"
    }, {
      "category": "woman",
      "hair": "short",
      "services": [{ "code": "cut", "sum": 230 }, { "code": "care", "sum": 170 }, { "code": "color", "sum": 390, "quantity": 4, "unit": 15, "price": 230 }],
      "sum": 790,
      "id": "6d3d246e771ff465e9db83bd0c00aa80",
      "date": "2020-07-14T09:49:13.511Z"
    }, {
      "category": "woman",
      "hair": "long",
      "services": [{ "code": "care", "sum": 290 }, { "code": "color", "sum": 390, "quantity": 2.5, "unit": 15, "price": 290 }],
      "sum": 680,
      "id": "47beb2da842b64637b4903a615450f0c",
      "date": "2020-07-14T16:08:01.408Z"
    }, {
      "category": "woman",
      "hair": "short",
      "services": [{ "code": "cut", "sum": 230 }, { "code": "care", "sum": 170 }],
      "sum": 400,
      "id": "70110c08254a747858abc0ff25be1d4d",
      "date": "2020-07-16T06:53:58.460Z"
    }, {
      "category": "woman",
      "hair": "middle",
      "services": [{ "code": "cut", "sum": 230 }, { "code": "care", "sum": 230 }, { "code": "hairSpray", "sum": 510, "quantity": 4, "unit": 15, "price": 270 },
        { "code": "melodies", "sum": 610, "quantity": 5, "unit": 30, "price": 310 }, { "code": "bondUltim", "sum": 375, "quantity": 1.5, "unit": 4, "price": 0 }],
      "sum": 1955,
      "id": "fec7b67d07a5d46a2b7f2197d2fc3c32",
      "date": "2020-07-16T11:29:51.534Z"
    }, {
      "category": "woman",
      "hair": "short",
      "services": [{ "code": "cut", "sum": 230 }, { "code": "care", "sum": 170 }],
      "sum": 400,
      "id": "3e3315a1240a84ff8aef8faa14d4e45b",
      "date": "2020-07-16T13:26:41.745Z"
    }, {
      "category": "woman",
      "hair": "short",
      "services": [{ "code": "cut", "sum": 230 }, { "code": "care", "sum": 170 }],
      "sum": 400,
      "id": "1d5936f39eb5146b8b3bb5d316a699af",
      "date": "2020-07-16T14:48:20.552Z"
    }, { "category": "child", "hair": "short", "services": [{ "code": "cut", "sum": 100 }], "sum": 100, "id": "925f08302f2fa4260b35b2dcaaf4016b", "date": "2020-07-16T14:48:24.131Z" }, {
      "category": "woman",
      "hair": "short",
      "services": [{ "code": "cut", "sum": 230 }, { "code": "care", "sum": 170 }, { "code": "color", "sum": 310, "quantity": 2, "unit": 15, "price": 230 }],
      "sum": 710,
      "id": "d753caf813ef946779d2f533acd0b035",
      "date": "2020-07-16T15:15:50.972Z"
    }, { "category": "man", "services": [{ "code": "cut", "sum": 150 }], "sum": 150, "id": "f8fc6bfe7d89c4120b08ab65e9de78f7", "date": "2020-07-16T15:15:55.661Z" },
    { "category": "child", "hair": "short", "services": [{ "code": "cut", "sum": 100 }], "sum": 100, "id": "61d0bc5fa56a34c2e98bae830e2cff08", "date": "2020-07-16T17:09:19.645Z" },
    { "category": "child", "hair": "short", "services": [{ "code": "cut", "sum": 100 }], "sum": 100, "id": "fb1816f3659434eacac65e6ef8a608fd", "date": "2020-07-16T17:09:23.316Z" },
    { "category": "man", "services": [{ "code": "cut", "sum": 150 }], "sum": 150, "id": "2de4c9e35b17c479e80debe8e0e7ffed", "date": "2020-07-16T17:09:29.430Z" }, {
      "category": "woman",
      "hair": "short",
      "services": [{ "code": "cut", "sum": 230 }, { "code": "care", "sum": 170 }, { "code": "duoMelodies", "sum": 360, "quantity": 1, "unit": 30, "price": 300 },
        { "code": "duoColor", "sum": 80, "quantity": 2, "unit": 15, "price": 0 }],
      "sum": 840,
      "id": "2265ac632c41440d2ab9cf2a2a1aa41d",
      "date": "2020-07-21T13:38:07.874Z"
    }, { "eyelash": { "code": "renewal", "sum": 500 }, "sum": 500, "id": "ccc0e22ab16ef41e0bce061fcf72356c", "date": "2020-07-21T13:38:14.836Z" },
    { "category": "woman", "hair": "long", "services": [{ "code": "care", "sum": 290 }], "sum": 290, "id": "23ce2e6e1ae4446848c647e6aabe3e27", "date": "2020-07-21T13:38:27.096Z" },
    { "category": "woman", "hair": "short", "services": [{ "code": "cut", "sum": 230 }], "sum": 230, "id": "0fa3eb3e0eb564fc29cc0ea48dae2d44", "date": "2020-07-21T13:38:45.291Z" }, {
      "category": "woman",
      "hair": "middle",
      "services": [{ "code": "care", "sum": 230 }, { "code": "cut", "sum": 230 }, { "code": "melodies", "sum": 370, "quantity": 1, "unit": 30, "price": 310 }],
      "sum": 830,
      "id": "620206dfaaf84464ba60718fcf3f8ec3",
      "date": "2020-07-21T15:04:35.628Z"
    }, { "category": "man", "services": [{ "code": "cut", "sum": 150 }], "sum": 150, "id": "69e0d04eaed444ac6884908e41c78425", "date": "2020-07-21T15:04:39.607Z" }, {
      "category": "woman",
      "hair": "short",
      "services": [{ "code": "cut", "sum": 230 }, { "code": "care", "sum": 170 }],
      "sum": 400,
      "id": "47e1a27dc57744fa3bf936bb59be62a9",
      "date": "2020-07-22T07:47:09.689Z"
    }, { "category": "child", "hair": "short", "services": [{ "code": "cut", "sum": 100 }], "sum": 100, "id": "b8a55d6240c01417295b648404f7d4a5", "date": "2020-07-22T07:47:26.184Z" },
    { "category": "child", "hair": "short", "services": [{ "code": "cut", "sum": 100 }], "sum": 100, "id": "5ab70904ead914be38ea27cf381375df", "date": "2020-07-22T07:47:42.675Z" }, {
      "category": "woman",
      "hair": "long",
      "services": [{ "code": "care", "sum": 290 }, { "code": "hairSpray", "sum": 410, "quantity": 2, "unit": 15, "price": 290 },
        { "code": "color", "sum": 490, "quantity": 5, "unit": 15, "price": 290 }],
      "sum": 1190,
      "id": "e17ddcfec82a44a1098b299777319b82",
      "date": "2020-07-22T15:44:24.870Z"
    }, {
      "category": "woman",
      "hair": "short",
      "services": [{ "code": "care", "sum": 170 }, { "code": "cut", "sum": 230 }],
      "sum": 400,
      "id": "5478e48c76cc248d1830ca73eaa287b3",
      "date": "2020-07-22T17:06:10.834Z"
    }, { "eyelash": { "code": "renewal", "sum": 500 }, "sum": 500, "id": "5fe8adadbefc34445af25719ba50c4c9", "date": "2020-07-22T17:06:47.774Z" }, {
      "bride": { "code": "package", "sum": 3200 },
      "sum": 3700,
      "weddingDate": "2020-09-25T22:00:00.000Z",
      "customer": "7479c36bd88684dc4864b05ed858623d",
      "id": "6ef05405f0cce41bb83de140c55c456f",
      "date": "2020-07-22T17:07:48.591Z",
      "guests": [{ "hairstyle": 500 }],
      "deposit": 2000,
      "depositDate": "2020-07-22T17:07:55.143Z",
      "payDate": "2020-09-26T11:24:02.764Z"
    }, {
      "category": "woman",
      "hair": "long",
      "services": [{ "code": "cut", "sum": 230 }, { "code": "care", "sum": 290 }, { "code": "duoMelodies", "sum": 430, "quantity": 0.5, "unit": 30, "price": 400 },
        { "code": "duoColor", "sum": 120, "quantity": 3, "unit": 15, "price": 0 }],
      "sum": 1070,
      "id": "4d41e3cc4e5674a2384f8a021eea4c18",
      "date": "2020-07-23T08:04:22.355Z"
    }, {
      "category": "woman",
      "hair": "long",
      "services": [{ "code": "cut", "sum": 230 }, { "code": "care", "sum": 290 }],
      "sum": 520,
      "id": "780d469dcb3754a999018d20ed1d88d7",
      "date": "2020-07-23T08:48:32.072Z"
    }, { "category": "child", "hair": "short", "services": [{ "code": "cut", "sum": 100 }], "sum": 100, "id": "dbbb52fcb04974cb2913d42f117aa089", "date": "2020-07-23T08:59:13.784Z" },
    { "category": "child", "hair": "short", "services": [{ "code": "cut", "sum": 100 }], "sum": 100, "id": "e09e9e5ed8f914b7295e377f88298bb6", "date": "2020-07-23T08:59:16.876Z" },
    { "category": "child", "hair": "short", "services": [{ "code": "cut", "sum": 100 }], "sum": 100, "id": "7f3d7ff0136d148e89c6e060349841b7", "date": "2020-07-23T08:59:20.227Z" }, {
      "category": "woman",
      "hair": "short",
      "services": [{ "code": "cut", "sum": 230 }, { "code": "care", "sum": 170 }, { "code": "color", "sum": 390, "quantity": 4, "unit": 15, "price": 230 }],
      "sum": 790,
      "id": "ccf34d43e68264e768216657caa31fb8",
      "date": "2020-07-27T08:45:12.592Z"
    }, {
      "category": "woman",
      "hair": "short",
      "services": [{ "code": "cut", "sum": 230 }, { "code": "care", "sum": 170 }, { "code": "melodies", "sum": 350, "quantity": 2, "unit": 30, "price": 230 }],
      "sum": 750,
      "id": "fb5242c42607d484ca8082e617f0b990",
      "date": "2020-07-27T13:17:17.621Z"
    }, {
      "category": "woman",
      "hair": "middle",
      "services": [{ "code": "cut", "sum": 230 }, { "code": "care", "sum": 230 }, { "code": "color", "sum": 390, "quantity": 3, "unit": 15, "price": 270 }],
      "sum": 850,
      "id": "a1f174908895e4da581fd44958b07d73",
      "date": "2020-07-27T14:48:49.798Z"
    }, {
      "category": "woman",
      "hair": "short",
      "services": [{ "code": "cut", "sum": 230 }, { "code": "care", "sum": 170 }, { "code": "color", "sum": 430, "quantity": 5, "unit": 15, "price": 230 }],
      "sum": 830,
      "id": "3053a84a8d4344650bccbf82466c5c52",
      "date": "2020-07-27T15:18:35.803Z"
    }, {
      "category": "woman",
      "hair": "middle",
      "services": [{ "code": "care", "sum": 230 }, { "code": "color", "sum": 470, "quantity": 5, "unit": 15, "price": 270 }],
      "sum": 700,
      "id": "04205f644d3cc413592be73cde5618bc",
      "date": "2020-07-28T07:05:13.823Z"
    }, { "eyelash": { "code": "renewal", "sum": 500 }, "sum": 500, "id": "b8092247ecbd4466fbb2c5e2b1153969", "date": "2020-07-28T07:44:14.067Z" },
    { "socialEvents": [{ "code": "hairstyle", "sum": 900 }, { "code": "makeup", "sum": 800 }], "sum": 1700, "id": "5b11e7a138b7c49218f1c8c69ccd7b4b", "date": "2020-07-28T20:38:33.598Z" },
    { "socialEvents": [{ "code": "hairstyle", "sum": 900 }, { "code": "makeup", "sum": 800 }], "sum": 1700, "id": "e9e122eb1f9b2478d876f9555eb735c3", "date": "2020-07-28T20:38:38.166Z" },
    { "socialEvents": [{ "code": "hairstyle", "sum": 900 }, { "code": "makeup", "sum": 800 }], "sum": 1700, "id": "8a433cb4dacd14bc8ac0a51a6fe9ef01", "date": "2020-07-28T20:38:47.155Z" }, {
      "category": "woman",
      "hair": "short",
      "services": [{ "code": "cut", "sum": 230 }, { "code": "care", "sum": 170 }],
      "sum": 400,
      "id": "4ea1769f94f0a478f833b510a08ef5f0",
      "date": "2020-07-28T20:39:06.687Z"
    }, { "category": "child", "hair": "short", "services": [{ "code": "cut", "sum": 100 }], "sum": 100, "id": "1d2b087058e2b4b329e660690030db48", "date": "2020-07-28T20:41:38.989Z" }, {
      "category": "woman",
      "hair": "middle",
      "services": [{ "code": "cut", "sum": 230 }, { "code": "care", "sum": 230 }, { "code": "melodies", "sum": 400, "quantity": 1.5, "unit": 30, "price": 310 }],
      "sum": 860,
      "id": "35fce2ef3b36a40ef8475e455fdb6cfb",
      "date": "2020-07-30T08:07:16.166Z"
    }, { "category": "man", "services": [{ "code": "cut", "sum": 150 }], "sum": 150, "id": "5956f0eb5e36743db8504ddf0dd4da68", "date": "2020-07-30T08:07:20.047Z" }, {
      "category": "woman",
      "hair": "short",
      "services": [{ "code": "care", "sum": 170 }, { "code": "cut", "sum": 230 }, { "code": "color", "sum": 410, "quantity": 4.5, "unit": 15, "price": 230 }],
      "sum": 810,
      "id": "924d8ad0d706b4cd68e6185a85284a25",
      "date": "2020-07-30T08:35:03.015Z"
    }, {
      "category": "woman",
      "hair": "short",
      "services": [{ "code": "cut", "sum": 230 }, { "code": "care", "sum": 170 }],
      "sum": 400,
      "id": "afb2fa1fead004133bd67cb5bba69b3f",
      "date": "2020-07-30T13:03:26.644Z"
    }, {
      "category": "woman",
      "hair": "middle",
      "services": [{ "code": "cut", "sum": 230 }, { "code": "care", "sum": 230 }, { "code": "melodies", "sum": 520, "quantity": 3.5, "unit": 30, "price": 310 }],
      "sum": 980,
      "id": "83c01c6367a484ac4aded4843cf1fc1e",
      "date": "2020-07-30T13:31:33.579Z"
    }, {
      "category": "woman",
      "hair": "long",
      "services": [{ "code": "cut", "sum": 230 }, { "code": "care", "sum": 290 }, { "code": "color", "sum": 470, "quantity": 4.5, "unit": 15, "price": 290 }],
      "sum": 990,
      "id": "517b22cce141d42bc9241515bab1cdbc",
      "date": "2020-07-30T14:51:41.077Z"
    }, {
      "category": "woman",
      "hair": "short",
      "services": [{ "code": "cut", "sum": 230 }, { "code": "care", "sum": 170 }, { "code": "duoMelodies", "sum": 330, "quantity": 0.5, "unit": 30, "price": 300 },
        { "code": "duoColor", "sum": 180, "quantity": 4.5, "unit": 15, "price": 0 }],
      "sum": 910,
      "id": "8b483594142ed42debb4e87df06ac85b",
      "date": "2020-07-30T15:18:50.594Z"
    }, { "eyelash": { "code": "renewal", "sum": 500 }, "sum": 500, "id": "2331bb1ed683249a996d554f77ad1775", "date": "2020-07-30T17:01:43.944Z" }, {
      "category": "woman",
      "hair": "long",
      "services": [{ "code": "cut", "sum": 230 }, { "code": "care", "sum": 290 }],
      "sum": 520,
      "id": "811d97e5c27c84b9fa8e8c822da51913",
      "date": "2020-07-31T07:01:20.643Z"
    }, {
      "category": "woman",
      "hair": "middle",
      "services": [{ "code": "care", "sum": 230 }, { "code": "melodies", "sum": 490, "quantity": 3, "unit": 30, "price": 310 }],
      "sum": 720,
      "id": "e07c49c315fe24409b0f8a2bae37659b",
      "date": "2020-07-31T08:44:40.773Z"
    }, {
      "category": "woman",
      "hair": "long",
      "services": [{ "code": "care", "sum": 290 }, { "code": "melodies", "sum": 550, "quantity": 1.5, "unit": 30, "price": 460 },
        { "code": "hairSpray", "sum": 470, "quantity": 3, "unit": 15, "price": 290 }],
      "sum": 1310,
      "id": "11c68ee9d272b473f812eb0e5e7934d1",
      "date": "2020-07-31T09:15:32.219Z"
    }, {
      "category": "woman",
      "hair": "middle",
      "services": [{ "code": "care", "sum": 230 }, { "code": "color", "sum": 390, "quantity": 3, "unit": 15, "price": 270 }],
      "sum": 620,
      "id": "aa31a6b324680473e82035785c851641",
      "date": "2020-08-11T09:31:40.036Z"
    }, {
      "bride": { "code": "hairstyleExam", "sum": 1800 },
      "sum": 1800,
      "weddingDate": "2020-09-08T22:00:00.000Z",
      "customer": "556862569800047789c13cd032a07125",
      "id": "85600bcc35c44456585092db8b2052bb",
      "date": "2020-08-12T11:24:54.442Z"
    }, {
      "category": "woman",
      "hair": "long",
      "services": [{ "code": "care", "sum": 290 }, { "code": "color", "sum": 410, "quantity": 3, "unit": 15, "price": 290 }],
      "sum": 700,
      "id": "96bea09fedf7646f49b6de2c1bb5d3c5",
      "date": "2020-08-12T13:56:10.263Z"
    }, {
      "bride": { "code": "hairstyleExam", "sum": 1800 },
      "sum": 1800,
      "weddingDate": "2020-09-08T22:00:00.000Z",
      "customer": "303194760348d4f83bacf4f0d62d6cd1",
      "id": "b0b72f332f8524d0a8f997cea5fa9c4f",
      "date": "2020-08-12T13:57:11.219Z",
      "deposit": 1000,
      "depositDate": "2020-08-12T13:57:19.290Z",
      "payDate": "2020-09-09T13:19:30.130Z"
    }, {
      "category": "woman",
      "hair": "long",
      "services": [{ "code": "cut", "sum": 230 }, { "code": "care", "sum": 290 }, { "code": "melodies", "sum": 580, "quantity": 2, "unit": 30, "price": 460 }],
      "sum": 1100,
      "id": "9f086698adad343d1a0cceb4e4b7e448",
      "date": "2020-08-13T09:27:27.974Z"
    }, {
      "category": "woman",
      "hair": "middle",
      "services": [{ "code": "cut", "sum": 230 }, { "code": "care", "sum": 230 }],
      "sum": 460,
      "id": "1fdebeafb81eb4c1fb655f95c84480db",
      "date": "2020-08-13T09:28:44.525Z"
    }, { "category": "man", "services": [{ "code": "cut", "sum": 150 }], "sum": 150, "id": "21916d043827a46e9a853e6182d13f0b", "date": "2020-08-13T12:09:31.635Z" }, {
      "category": "woman",
      "hair": "long",
      "services": [{ "code": "care", "sum": 290 }, { "code": "color", "sum": 390, "quantity": 2.5, "unit": 15, "price": 290 }],
      "sum": 680,
      "id": "374261938ceb94ebb8fb8bc054a7186c",
      "date": "2020-08-13T15:05:08.212Z"
    }, {
      "category": "woman",
      "hair": "middle",
      "services": [{ "code": "cut", "sum": 230 }, { "code": "care", "sum": 230 }, { "code": "melodies", "sum": 490, "quantity": 3, "unit": 30, "price": 310 }],
      "sum": 950,
      "id": "5624e45cbde8d425f85ec242c6aa946f",
      "date": "2020-08-13T15:05:38.128Z"
    }, {
      "category": "woman",
      "hair": "short",
      "services": [{ "code": "cut", "sum": 230 }, { "code": "care", "sum": 170 }, { "code": "color", "sum": 270, "quantity": 1, "unit": 15, "price": 230 }],
      "sum": 670,
      "id": "108c664db0b2f4d6f8068bac06a3a3d6",
      "date": "2020-08-13T16:05:26.588Z"
    }, {
      "category": "woman",
      "hair": "long",
      "services": [{ "code": "care", "sum": 290 }, { "code": "color", "sum": 410, "quantity": 3, "unit": 15, "price": 290 }],
      "sum": 700,
      "id": "0b6bef009731c41c1866a4897d0703ea",
      "date": "2020-08-13T16:29:55.697Z"
    }, { "category": "child", "hair": "short", "services": [{ "code": "cut", "sum": 100 }], "sum": 100, "id": "3e09cfbd6182641a58a256625d4b9094", "date": "2020-08-13T16:30:01.573Z" }, {
      "category": "woman",
      "hair": "middle",
      "services": [{ "code": "care", "sum": 230 }, { "code": "melodies", "sum": 490, "quantity": 3, "unit": 30, "price": 310 },
        { "code": "hairSpray", "sum": 450, "quantity": 3, "unit": 15, "price": 270 }],
      "sum": 1170,
      "id": "f29b783f0e87944e795ae32ad7db368c",
      "date": "2020-08-17T10:37:01.895Z"
    }, {
      "category": "woman",
      "hair": "short",
      "services": [{ "code": "cut", "sum": 230 }, { "code": "care", "sum": 170 }],
      "sum": 400,
      "id": "b15a07297c2684047a2ad7066264bd06",
      "date": "2020-08-17T13:10:05.506Z"
    }, { "category": "child", "hair": "short", "services": [{ "code": "cut", "sum": 100 }], "sum": 100, "id": "3e0cd74c0dbbe433eb1aa34c4c6912e5", "date": "2020-08-17T13:10:09.406Z" }, {
      "category": "woman",
      "hair": "long",
      "services": [{ "code": "care", "sum": 290 }, { "code": "melodies", "sum": 700, "quantity": 4, "unit": 30, "price": 460 }],
      "sum": 990,
      "id": "3773671f70aa0429aa99914ae7878fee",
      "date": "2020-08-17T16:08:15.735Z"
    }, {
      "category": "woman",
      "hair": "long",
      "services": [{ "code": "care", "sum": 290 }, { "code": "melodies", "sum": 580, "quantity": 2, "unit": 30, "price": 460 }],
      "sum": 870,
      "id": "d9cba50fdfac645bea7de6908d0d70e6",
      "date": "2020-08-17T16:08:30.388Z"
    }, {
      "category": "woman",
      "hair": "middle",
      "services": [{ "code": "cut", "sum": 230 }, { "code": "care", "sum": 230 }],
      "sum": 460,
      "id": "a7770615d2f584a24937b087c67306b2",
      "date": "2020-08-18T10:21:32.095Z"
    }, {
      "category": "woman",
      "hair": "long",
      "services": [{ "code": "care", "sum": 290 }, { "code": "color", "sum": 450, "quantity": 4, "unit": 15, "price": 290 }],
      "sum": 740,
      "id": "891bd7c9124134a669b232a815e2e70e",
      "date": "2020-08-18T12:20:00.176Z"
    }, {
      "category": "woman",
      "hair": "middle",
      "services": [{ "code": "cut", "sum": 230 }, { "code": "care", "sum": 230 }],
      "sum": 460,
      "id": "f750ada77ab5b400782ad6552a4ca1be",
      "date": "2020-08-18T18:06:24.909Z"
    }, { "category": "woman", "hair": "short", "services": [{ "code": "cut", "sum": 230 }], "sum": 230, "id": "76e5abc739b554ae598e8933871457f9", "date": "2020-08-18T18:06:41.858Z" }, {
      "category": "woman",
      "hair": "short",
      "services": [{ "code": "cut", "sum": 230 }, { "code": "care", "sum": 170 }],
      "sum": 400,
      "id": "4aff14caa22f94d6e9cb786e972a9272",
      "date": "2020-08-18T18:07:08.736Z"
    }, {
      "category": "woman",
      "hair": "short",
      "services": [{ "code": "cut", "sum": 230 }, { "code": "care", "sum": 170 }],
      "sum": 400,
      "id": "d948d69ffbe754731a5475b1648f3bd3",
      "date": "2020-08-18T18:07:12.754Z"
    }, {
      "bride": { "code": "package", "sum": 3200 },
      "sum": 3900,
      "weddingDate": "2020-09-19T08:00:00.000Z",
      "customer": "52ccb338bf8104e27a6cdb8993ae0108",
      "id": "dc4594f14e524438e88234779fc947f0",
      "date": "2020-08-18T18:10:04.640Z",
      "guests": [{ "makeup": 350 }, { "makeup": 350 }],
      "deposit": 1500,
      "depositDate": "2020-08-18T18:10:22.845Z",
      "payDate": "2020-09-21T11:11:42.538Z"
    }, {
      "bride": { "code": "package", "sum": 3200 },
      "sum": 3200,
      "weddingDate": "2020-09-11T22:00:00.000Z",
      "customer": "1ac6b91b0245241c69d1dcceabddb778",
      "id": "f4d3958febf8944b2a20de0e6b1eabd5",
      "date": "2020-08-18T18:11:47.284Z",
      "deposit": 1500,
      "depositDate": "2020-08-18T18:11:52.695Z",
      "payDate": "2020-09-12T11:59:19.001Z"
    }, {
      "category": "woman",
      "hair": "short",
      "services": [{ "code": "care", "sum": 170 }, { "code": "melodies", "sum": 440, "quantity": 3.5, "unit": 30, "price": 230 }],
      "sum": 610,
      "id": "a53b4536447fe474b9c74fdf97a17de4",
      "date": "2020-08-18T18:12:47.195Z"
    }, {
      "category": "woman",
      "hair": "long",
      "services": [{ "code": "cut", "sum": 230 }, { "code": "care", "sum": 290 }, { "code": "duoMelodies", "sum": 640, "quantity": 4, "unit": 30, "price": 400 },
        { "code": "duoColor", "sum": 240, "quantity": 6, "unit": 15, "price": 0 }],
      "sum": 1400,
      "id": "054698985ffec4e5eb2af0d6021c034f",
      "date": "2020-08-18T18:14:19.186Z"
    }, { "category": "child", "hair": "short", "services": [{ "code": "cut", "sum": 100 }], "sum": 100, "id": "a2c01b4fc277b41e3b12f742c25c6157", "date": "2020-08-18T18:14:24.208Z" }, {
      "category": "woman",
      "hair": "long",
      "services": [{ "code": "care", "sum": 290 }, { "code": "duoMelodies", "sum": 760, "quantity": 6, "unit": 30, "price": 400 }, { "code": "cut", "sum": 230 },
        { "code": "duoColor", "sum": 160, "quantity": 4, "unit": 15, "price": 0 }],
      "sum": 1440,
      "id": "0f175294034fe4144be3f8b8032752aa",
      "date": "2020-08-18T18:15:24.936Z"
    }, { "eyelash": { "code": "renewal", "sum": 500 }, "sum": 500, "id": "a8d5c64f553bc42cf9c1bfd60b371e7f", "date": "2020-08-18T18:15:31.162Z" }, {
      "category": "woman",
      "hair": "middle",
      "services": [{ "code": "cut", "sum": 230 }, { "code": "care", "sum": 230 }],
      "sum": 460,
      "id": "f863fee74c93c492d842fcf492e28d00",
      "date": "2020-08-20T07:30:03.839Z"
    }, { "category": "child", "hair": "short", "services": [{ "code": "cut", "sum": 100 }], "sum": 100, "id": "58aebb5eed0b342d2bbbdb82f4b472fe", "date": "2020-08-20T07:58:50.924Z" }, {
      "category": "woman",
      "hair": "short",
      "services": [{ "code": "care", "sum": 170 }, { "code": "melodies", "sum": 380, "quantity": 2.5, "unit": 30, "price": 230 }],
      "sum": 550,
      "id": "329fc702bd2fd46a6a121207d77fb464",
      "date": "2020-08-20T07:59:11.359Z"
    }, { "category": "child", "hair": "short", "services": [{ "code": "cut", "sum": 100 }], "sum": 100, "id": "6a4fd6b00c239453583ed7f5e1a34ed2", "date": "2020-08-20T13:53:05.589Z" },
    { "category": "man", "services": [{ "code": "cut", "sum": 150 }], "sum": 150, "id": "352e6f6b55fe644c8a76451f40610d5b", "date": "2020-08-20T13:53:22.505Z" },
    { "category": "man", "services": [{ "code": "cut", "sum": 150 }], "sum": 150, "id": "f1950271ba4464a3fbc59391b18594d1", "date": "2020-08-20T13:53:25.081Z" },
    { "category": "woman", "hair": "short", "services": [{ "code": "cut", "sum": 230 }], "sum": 230, "id": "42b3267d8eefc4ab6baf9effc61907c4", "date": "2020-08-21T07:24:10.850Z" },
    { "eyelash": { "code": "renewal", "sum": 500 }, "sum": 500, "id": "2c14cf6401260427f8d12f590bf309b2", "date": "2020-08-21T07:24:14.653Z" }, {
      "category": "woman",
      "hair": "middle",
      "services": [{ "code": "cut", "sum": 230 }, { "code": "care", "sum": 230 }],
      "sum": 460,
      "id": "55d2171334ba2440289e83697af3f231",
      "date": "2020-08-21T08:20:16.844Z"
    }, {
      "category": "woman",
      "hair": "short",
      "services": [{ "code": "cut", "sum": 230 }, { "code": "care", "sum": 170 }],
      "sum": 400,
      "id": "106466388a5f244fb969bb7ef586d240",
      "date": "2020-08-21T09:04:40.618Z"
    }, {
      "category": "woman",
      "hair": "short",
      "services": [{ "code": "cut", "sum": 230 }, { "code": "care", "sum": 170 }],
      "sum": 400,
      "id": "08508680c007544fc99d6545c23a4dcf",
      "date": "2020-08-21T10:43:09.250Z"
    }, {
      "category": "woman",
      "hair": "long",
      "services": [{ "code": "care", "sum": 290 }, { "code": "melodies", "sum": 610, "quantity": 2.5, "unit": 30, "price": 460 }],
      "sum": 900,
      "id": "59895f0d865184477994bc2ff6fd69a0",
      "date": "2020-08-21T11:04:48.180Z"
    }, {
      "category": "woman",
      "hair": "short",
      "services": [{ "code": "cut", "sum": 230 }, { "code": "care", "sum": 170 }, { "code": "melodies", "sum": 470, "quantity": 4, "unit": 30, "price": 230 }],
      "sum": 870,
      "id": "3964eaef53b62419fa7e84f132e70189",
      "date": "2020-08-21T14:46:32.097Z"
    }, { "category": "child", "hair": "short", "services": [{ "code": "cut", "sum": 100 }], "sum": 100, "id": "84e7aff248f804aa486fbd6f4da92626", "date": "2020-08-21T14:46:38.221Z" },
    { "category": "child", "hair": "short", "services": [{ "code": "cut", "sum": 100 }], "sum": 100, "id": "d306454440e424b7c850207536ec1f9b", "date": "2020-08-21T14:46:45.699Z" }, {
      "category": "woman",
      "hair": "middle",
      "services": [{ "code": "cut", "sum": 230 }, { "code": "care", "sum": 230 }, { "code": "melodies", "sum": 430, "quantity": 2, "unit": 30, "price": 310 }],
      "sum": 890,
      "id": "c174325d5066641ef8ed1777b440ab02",
      "date": "2020-08-27T09:14:55.412Z"
    }, {
      "category": "woman",
      "hair": "short",
      "services": [{ "code": "cut", "sum": 230 }, { "code": "care", "sum": 170 }, { "code": "color", "sum": 350, "quantity": 3, "unit": 15, "price": 230 }],
      "sum": 750,
      "id": "99a35c0f0194c48e3968c9776776988a",
      "date": "2020-08-27T15:15:54.095Z"
    }, {
      "category": "woman",
      "hair": "short",
      "services": [{ "code": "cut", "sum": 230 }, { "code": "care", "sum": 170 }, { "code": "melodies", "sum": 290, "quantity": 1, "unit": 30, "price": 230 }],
      "sum": 690,
      "id": "c3572087fb05a4cffbaf3e7bfc588430",
      "date": "2020-08-27T15:35:00.108Z"
    }, { "category": "man", "services": [{ "code": "cut", "sum": 150 }], "sum": 150, "id": "643dbf054f5f44ee9bc64002abf5b69b", "date": "2020-08-27T15:35:09.001Z" },
    { "eyelash": { "code": "renewal", "sum": 500 }, "sum": 500, "id": "4c387c48e2f0f4ea8a311de6ec5a9199", "date": "2020-08-27T15:46:54.507Z" },
    { "category": "child", "hair": "short", "services": [{ "code": "cut", "sum": 100 }], "sum": 100, "id": "b6a1505d9b4704aa3930cd3e97136ee9", "date": "2020-08-27T15:47:35.869Z" }, {
      "category": "woman",
      "hair": "short",
      "services": [{ "code": "cut", "sum": 230 }, { "code": "care", "sum": 170 }, { "code": "duoMelodies", "sum": 330, "quantity": 0.5, "unit": 30, "price": 300 },
        { "code": "duoColor", "sum": 120, "quantity": 3, "unit": 15, "price": 0 }],
      "sum": 850,
      "id": "2520d853c0f7e47c3a9c419347583ebb",
      "date": "2020-08-28T09:47:40.678Z"
    }, {
      "category": "woman",
      "hair": "short",
      "services": [{ "code": "cut", "sum": 230 }, { "code": "care", "sum": 170 }, { "code": "duoMelodies", "sum": 330, "quantity": 0.5, "unit": 30, "price": 300 },
        { "code": "duoColor", "sum": 100, "quantity": 2.5, "unit": 15, "price": 0 }],
      "sum": 830,
      "id": "ab12dd4d7a8354bc6807f2fc0045b230",
      "date": "2020-08-31T13:27:57.123Z"
    }, { "category": "child", "hair": "short", "services": [{ "code": "cut", "sum": 100 }], "sum": 100, "id": "38824008d547343d89c11835dd9a6cfa", "date": "2020-08-31T13:32:33.330Z" },
    { "category": "man", "services": [{ "code": "cut", "sum": 150 }], "sum": 150, "id": "bb70b806ebf274467872f9b675571d25", "date": "2020-08-31T13:32:37.264Z" },
    { "socialEvents": [{ "code": "makeup", "sum": 800 }], "sum": 800, "id": "9222e62ba0ca347448eb294984571624", "date": "2020-08-31T13:33:20.192Z" },
    { "category": "child", "hair": "short", "services": [{ "code": "cut", "sum": 100 }], "sum": 100, "id": "ac817f79189674d06b5e915604166d50", "date": "2020-08-31T13:33:26.504Z" },
    { "category": "child", "hair": "short", "services": [{ "code": "cut", "sum": 100 }], "sum": 100, "id": "92715e0561ed04220962fa338135931d", "date": "2020-08-31T13:33:29.829Z" }, {
      "category": "woman",
      "hair": "short",
      "services": [{ "code": "cut", "sum": 230 }, { "code": "care", "sum": 170 }, { "code": "color", "sum": 350, "quantity": 3, "unit": 15, "price": 230 }],
      "sum": 750,
      "id": "56ff3d9d0b6f644328579e67df2995bd",
      "date": "2020-09-02T12:02:11.646Z"
    }, {
      "category": "woman",
      "hair": "middle",
      "services": [{ "code": "cut", "sum": 230 }, { "code": "care", "sum": 230 }, { "code": "hairSpray", "sum": 390, "quantity": 2, "unit": 15, "price": 270 },
        { "code": "melodies", "sum": 400, "quantity": 1.5, "unit": 30, "price": 310 }],
      "sum": 1250,
      "id": "f8c07bce75b0a4553a78a7ab68eccbb6",
      "date": "2020-09-02T12:30:45.910Z"
    }, {
      "category": "woman",
      "hair": "short",
      "services": [{ "code": "cut", "sum": 230 }, { "code": "care", "sum": 170 }],
      "sum": 400,
      "id": "d7e90c9d3f3c54e86a3ad853a45a2feb",
      "date": "2020-09-03T09:06:22.935Z"
    }, {
      "category": "woman",
      "hair": "long",
      "services": [{ "code": "cut", "sum": 230 }, { "code": "care", "sum": 290 }],
      "sum": 520,
      "id": "6b8d83f2f1eda4782b4b5ae079ba213a",
      "date": "2020-09-03T10:11:43.489Z"
    }, {
      "category": "woman",
      "hair": "short",
      "services": [{ "code": "cut", "sum": 230 }, { "code": "care", "sum": 170 }, { "code": "color", "sum": 310, "quantity": 2, "unit": 15, "price": 230 }],
      "sum": 710,
      "id": "08ab088f7c8044c9baa2bbf3282bdc2f",
      "date": "2020-09-03T10:13:03.376Z"
    }, { "eyelash": { "code": "renewal", "sum": 500 }, "sum": 500, "id": "309a48a61c7514d2189409980e024cf9", "date": "2020-09-07T09:21:23.071Z" },
    { "eyelash": { "code": "renewal", "sum": 500 }, "sum": 500, "id": "da4e7ea628cda45579f32e9c8d6e490e", "date": "2020-09-07T19:06:22.233Z" }, {
      "category": "woman",
      "hair": "short",
      "services": [{ "code": "cut", "sum": 230 }, { "code": "care", "sum": 170 }],
      "sum": 400,
      "id": "75f3103eeab5b405abac293feb5bfc2c",
      "date": "2020-09-07T19:06:34.966Z"
    }, {
      "category": "woman",
      "hair": "middle",
      "services": [{ "code": "care", "sum": 230 }, { "code": "melodies", "sum": 430, "quantity": 2, "unit": 30, "price": 310 },
        { "code": "hairSpray", "sum": 420, "quantity": 2.5, "unit": 15, "price": 270 }],
      "sum": 1080,
      "id": "1eb12946fc66d402e85ec5255e64cc41",
      "date": "2020-09-07T19:07:46.946Z"
    }, { "socialEvents": [{ "code": "hairstyle", "sum": 900 }], "sum": 900, "id": "0b7a23059d22c42fdba3aa813728d158", "date": "2020-09-09T13:18:52.112Z" },
    { "eyelash": { "code": "renewal", "sum": 500 }, "sum": 500, "id": "864ee1b977f5f433fa7a197e94a377bc", "date": "2020-09-09T13:18:56.557Z" }, {
      "bride": { "code": "package", "sum": 3200 },
      "sum": 3200,
      "weddingDate": "2020-10-09T22:00:00.000Z",
      "customer": "7d361fd5464464468a37489727dd42e6",
      "id": "4799f335c5fca462d8676ac9beb16c98",
      "date": "2020-09-09T13:20:00.565Z",
      "deposit": 1000,
      "depositDate": "2020-09-09T13:20:05.109Z"
    }, { "category": "child", "hair": "short", "services": [{ "code": "cut", "sum": 100 }], "sum": 100, "id": "f12a637adc092494595cbaad2abc3bf7", "date": "2020-09-09T13:20:24.507Z" }, {
      "category": "woman",
      "hair": "short",
      "services": [{ "code": "cut", "sum": 230 }, { "code": "care", "sum": 170 }, { "code": "color", "sum": 390, "quantity": 4, "unit": 15, "price": 230 }],
      "sum": 790,
      "id": "1abf425939fb7487f838c6c040e16405",
      "date": "2020-09-09T15:16:33.581Z"
    }, { "eyelash": { "code": "renewal", "sum": 500 }, "sum": 500, "id": "72f1de0e7c2cd47288625529c92c59a0", "date": "2020-09-09T17:17:23.507Z" }, {
      "category": "woman",
      "hair": "short",
      "services": [{ "code": "cut", "sum": 230 }, { "code": "care", "sum": 170 }],
      "sum": 400,
      "id": "a7e89df798c764ebb82196e720961e9b",
      "date": "2020-09-09T17:17:27.892Z"
    }, {
      "category": "woman",
      "hair": "middle",
      "services": [{ "code": "care", "sum": 230 }, { "code": "color", "sum": 470, "quantity": 5, "unit": 15, "price": 270 }],
      "sum": 700,
      "id": "cc1d4d7713cdf481b9f3e2e36c44e8cb",
      "date": "2020-09-10T10:57:00.943Z"
    }, {
      "category": "woman",
      "hair": "short",
      "services": [{ "code": "care", "sum": 170 }, { "code": "duoMelodies", "sum": 330, "quantity": 0.5, "unit": 30, "price": 300 },
        { "code": "duoColor", "sum": 140, "quantity": 3.5, "unit": 15, "price": 0 }],
      "sum": 640,
      "id": "8fdb09762041948a98a0fca99a6ce92a",
      "date": "2020-09-10T13:03:24.391Z"
    }, { "category": "man", "services": [{ "code": "cut", "sum": 150 }], "sum": 150, "id": "c5e84c60caaaf4d47b376d70f2eb7139", "date": "2020-09-10T15:38:44.509Z" },
    { "socialEvents": [{ "code": "makeup", "sum": 800 }], "sum": 800, "id": "70fdb112eb477461cb2da55f48174050", "date": "2020-09-12T08:35:08.106Z" }, {
      "category": "woman",
      "hair": "middle",
      "services": [{ "code": "cut", "sum": 230 }, { "code": "care", "sum": 230 }, { "code": "color", "sum": 430, "quantity": 4, "unit": 15, "price": 270 }],
      "sum": 890,
      "id": "86eab86fa36bd449283ea6747c663344",
      "date": "2020-09-14T07:15:26.791Z"
    }, { "socialEvents": [{ "code": "hairstyle", "sum": 900 }], "sum": 900, "id": "6e9fdc7e10c03450c93b62e8b3e3271d", "date": "2020-09-14T20:20:07.210Z" },
    { "socialEvents": [{ "code": "hairstyle", "sum": 900 }], "sum": 900, "id": "e67a8aec3072c480a85eb3a7b1ad884d", "date": "2020-09-14T20:20:10.723Z" },
    { "category": "child", "hair": "short", "services": [{ "code": "cut", "sum": 100 }], "sum": 100, "id": "31ff23527edb647c8b4ad5a4f6b55ada", "date": "2020-09-14T20:20:19.325Z" },
    { "category": "child", "hair": "short", "services": [{ "code": "cut", "sum": 100 }], "sum": 100, "id": "fcf2cee4c564842a0ae349abe877511c", "date": "2020-09-14T20:20:24.428Z" }, {
      "category": "woman",
      "hair": "long",
      "services": [{ "code": "care", "sum": 290 }, { "code": "color", "sum": 410, "quantity": 3, "unit": 15, "price": 290 }],
      "sum": 700,
      "id": "f4a4fa071071b4ff9a253bfd4972e1e2",
      "date": "2020-09-15T16:10:33.073Z"
    }, { "category": "man", "services": [{ "code": "cut", "sum": 150 }], "sum": 150, "id": "1fd159dac4de341cab094a484e01e7d5", "date": "2020-09-15T16:10:41.273Z" },
    { "category": "child", "hair": "short", "services": [{ "code": "cut", "sum": 100 }], "sum": 100, "id": "6f8ac854c7e754d5eba7a538b97332eb", "date": "2020-09-15T16:10:48.914Z" },
    { "category": "child", "hair": "short", "services": [{ "code": "cut", "sum": 100 }], "sum": 100, "id": "82e59d71c3ffe4658ab52501da279279", "date": "2020-09-16T06:27:01.968Z" }, {
      "category": "woman",
      "hair": "short",
      "services": [{ "code": "cut", "sum": 230 }, { "code": "care", "sum": 170 }, { "code": "color", "sum": 350, "quantity": 3, "unit": 15, "price": 230 }],
      "sum": 750,
      "id": "8dabb7f7401414e12834c706482b194d",
      "date": "2020-09-16T10:54:26.626Z"
    }, {
      "category": "woman",
      "hair": "short",
      "services": [{ "code": "cut", "sum": 230 }, { "code": "care", "sum": 170 }, { "code": "melodies", "sum": 350, "quantity": 2, "unit": 30, "price": 230 }],
      "sum": 750,
      "id": "7dc028f73dfad4af5bb71245ea265adb",
      "date": "2020-09-16T11:28:51.144Z"
    }, { "category": "woman", "hair": "long", "services": [{ "code": "cut", "sum": 230 }], "sum": 230, "id": "1bfc777be8fa74cddb126074c58db227", "date": "2020-09-16T11:44:23.968Z" }, {
      "category": "woman",
      "hair": "middle",
      "services": [{ "code": "care", "sum": 230 }, { "code": "melodies", "sum": 490, "quantity": 3, "unit": 30, "price": 310 }],
      "sum": 720,
      "id": "3ee2839710ab046a09e8b34322b2d316",
      "date": "2020-09-16T18:59:48.125Z"
    }, {
      "category": "woman",
      "hair": "middle",
      "services": [{ "code": "cut", "sum": 230 }, { "code": "care", "sum": 230 }, { "code": "duoMelodies", "sum": 440, "quantity": 1.5, "unit": 30, "price": 350 },
        { "code": "duoColor", "sum": 160, "quantity": 4, "unit": 15, "price": 0 }],
      "sum": 1060,
      "id": "aab536761fc1a406b8bb12967fe86ef2",
      "date": "2020-09-21T09:40:30.758Z"
    }, {
      "bride": { "code": "package", "sum": 3200 },
      "sum": 3200,
      "weddingDate": "2020-10-24T06:15:00.000Z",
      "customer": "08a822dc229e7490f93d08883eb55b7c",
      "id": "c710aa422dcda4dd6bffe24f6ea2ee41",
      "date": "2020-09-21T11:10:45.010Z",
      "deposit": 1000,
      "depositDate": "2020-09-21T11:10:49.821Z"
    }, {
      "category": "woman",
      "hair": "short",
      "services": [{ "code": "cut", "sum": 230 }, { "code": "care", "sum": 170 }, { "code": "melodies", "sum": 410, "quantity": 3, "unit": 30, "price": 230 }],
      "sum": 810,
      "id": "2429a8c058852418c874502214ceca52",
      "date": "2020-09-22T13:06:19.234Z"
    }, {
      "category": "woman",
      "hair": "long",
      "services": [{ "code": "cut", "sum": 230 }, { "code": "care", "sum": 290 }],
      "sum": 520,
      "id": "faef28a5fdee34ac5bd44a0132ca985b",
      "date": "2020-09-22T13:13:50.277Z"
    }, {
      "category": "woman",
      "hair": "middle",
      "services": [{ "code": "cut", "sum": 230 }, { "code": "care", "sum": 230 }, { "code": "melodies", "sum": 370, "quantity": 1, "unit": 30, "price": 310 }],
      "sum": 830,
      "id": "ad5bed5c805b248a380007c593423228",
      "date": "2020-09-22T15:39:24.890Z"
    }, { "category": "man", "services": [{ "code": "cut", "sum": 150 }], "sum": 150, "id": "c500c719729b14cb89a40fccd787f6e2", "date": "2020-09-22T15:39:28.934Z" }, {
      "category": "woman",
      "hair": "short",
      "services": [{ "code": "care", "sum": 170 }, { "code": "cut", "sum": 230 }],
      "sum": 400,
      "id": "0853221c29fae4d09ae62ab85afb42d0",
      "date": "2020-09-22T15:59:21.871Z"
    }, {
      "category": "woman",
      "hair": "short",
      "services": [{ "code": "cut", "sum": 230 }, { "code": "care", "sum": 170 }],
      "sum": 400,
      "id": "6edf45f5098e64a18ad0305cf0988420",
      "date": "2020-09-22T15:59:26.405Z"
    }, {
      "category": "woman",
      "hair": "long",
      "services": [{ "code": "cut", "sum": 230 }, { "code": "care", "sum": 290 }, { "code": "melodies", "sum": 520, "quantity": 1, "unit": 30, "price": 460 }],
      "sum": 1040,
      "id": "53835b83fd6684e6191664ce04c03496",
      "date": "2020-09-23T08:15:10.337Z"
    }, {
      "category": "woman",
      "hair": "long",
      "services": [{ "code": "cut", "sum": 230 }, { "code": "care", "sum": 290 }, { "code": "color", "sum": 530, "quantity": 6, "unit": 15, "price": 290 }],
      "sum": 1050,
      "id": "01ae9e5e119f4413b934b1610223ae90",
      "date": "2020-09-24T10:10:12.260Z"
    }, {
      "category": "woman",
      "hair": "middle",
      "services": [{ "code": "cut", "sum": 230 }, { "code": "care", "sum": 230 }, { "code": "hairSpray", "sum": 540, "quantity": 4.5, "unit": 15, "price": 270 }],
      "sum": 1000,
      "id": "7333895944fc64726be3dc1a03a1c091",
      "date": "2020-09-24T10:10:39.239Z"
    }, {
      "category": "woman",
      "hair": "middle",
      "services": [{ "code": "cut", "sum": 230 }, { "code": "care", "sum": 230 }, { "code": "color", "sum": 430, "quantity": 4, "unit": 15, "price": 270 }],
      "sum": 890,
      "id": "7b9e97d1e16d942fbac877c72b3851f3",
      "date": "2020-09-24T11:42:17.038Z"
    }, {
      "category": "woman",
      "hair": "short",
      "services": [{ "code": "cut", "sum": 230 }, { "code": "care", "sum": 170 }],
      "sum": 400,
      "id": "204c6373169a347fabc8a0ce973f6905",
      "date": "2020-09-24T12:26:08.004Z"
    }, {
      "category": "woman",
      "hair": "short",
      "services": [{ "code": "cut", "sum": 230 }, { "code": "care", "sum": 170 }, { "code": "duoMelodies", "sum": 330, "quantity": 0.5, "unit": 30, "price": 300 },
        { "code": "duoColor", "sum": 80, "quantity": 2, "unit": 15, "price": 0 }],
      "sum": 810,
      "id": "4df1d5ed13c7f49e9a153b1b58a07986",
      "date": "2020-09-24T15:05:01.629Z"
    }, {
      "category": "woman",
      "hair": "short",
      "services": [{ "code": "cut", "sum": 230 }, { "code": "care", "sum": 170 }, { "code": "color", "sum": 350, "quantity": 3, "unit": 15, "price": 230 }],
      "sum": 750,
      "id": "30cb86ec931f149acb735bc25c83b7ec",
      "date": "2020-09-24T16:30:25.652Z"
    }, {
      "category": "woman",
      "hair": "long",
      "services": [{ "code": "cut", "sum": 230 }, { "code": "care", "sum": 290 }, { "code": "hairSpray", "sum": 650, "quantity": 6, "unit": 15, "price": 290 }],
      "sum": 1170,
      "id": "0bf8a7e0412a441ac8771d4a38387bbb",
      "date": "2020-09-24T16:31:09.526Z"
    }, { "category": "child", "hair": "short", "services": [{ "code": "cut", "sum": 100 }], "sum": 100, "id": "c52bbfab25c504f979300106ceccc8a2", "date": "2020-09-24T16:31:20.899Z" },
    { "socialEvents": [{ "code": "hairstyle", "sum": 900 }, { "code": "makeup", "sum": 800 }], "sum": 1700, "id": "cfe4316859f5348809744fc4887d0a58", "date": "2020-09-26T06:39:32.755Z" }, {
      "category": "woman",
      "hair": "middle",
      "services": [{ "code": "cut", "sum": 230 }, { "code": "care", "sum": 230 }, { "code": "color", "sum": 430, "quantity": 4, "unit": 15, "price": 270 }],
      "sum": 890,
      "id": "b9b85f4b17b8445598a4441e3db6a77b",
      "date": "2020-09-29T14:03:23.967Z"
    }, {
      "category": "woman",
      "hair": "short",
      "services": [{ "code": "cut", "sum": 230 }, { "code": "care", "sum": 170 }],
      "sum": 400,
      "id": "65b5bdb7d9d90401e868ac461cf04c3c",
      "date": "2020-10-02T08:25:44.172Z"
    }, { "eyelash": { "code": "renewal", "sum": 500 }, "sum": 500, "id": "3f00457917b40499f8ad83736dbc6693", "date": "2020-10-02T08:27:32.833Z" }, {
      "category": "woman",
      "hair": "middle",
      "services": [{ "code": "cut", "sum": 230 }, { "code": "care", "sum": 230 }],
      "sum": 460,
      "id": "116be47e070954bb38aa9c4dca35b71d",
      "date": "2020-10-05T06:56:46.788Z"
    }, {
      "category": "woman",
      "hair": "middle",
      "services": [{ "code": "cut", "sum": 230 }, { "code": "care", "sum": 230 }, { "code": "color", "sum": 530, "quantity": 6.5, "unit": 15, "price": 270 }],
      "sum": 990,
      "id": "8755222d255414f63b897b66b2a83483",
      "date": "2020-10-05T08:44:34.966Z"
    }, {
      "category": "woman",
      "hair": "short",
      "services": [{ "code": "cut", "sum": 230 }, { "code": "care", "sum": 170 }, { "code": "color", "sum": 350, "quantity": 3, "unit": 15, "price": 230 }],
      "sum": 750,
      "id": "d31b1d5a6d96246788d8fc3a0ef47f9f",
      "date": "2020-10-07T08:22:44.554Z"
    }, {
      "category": "woman",
      "hair": "short",
      "services": [{ "code": "cut", "sum": 230 }, { "code": "care", "sum": 170 }, { "code": "color", "sum": 350, "quantity": 3, "unit": 15, "price": 230 }],
      "sum": 750,
      "id": "9e532182b448d434c9c1b0788b9c8e85",
      "date": "2020-10-07T09:49:57.236Z"
    }, {
      "category": "woman",
      "hair": "middle",
      "services": [{ "code": "cut", "sum": 230 }, { "code": "care", "sum": 230 }, { "code": "melodies", "sum": 370, "quantity": 1, "unit": 30, "price": 310 }],
      "sum": 830,
      "id": "9ec68725c6965471aaa7d13b81960e8a",
      "date": "2020-10-07T12:46:33.547Z"
    }, { "category": "man", "services": [{ "code": "cut", "sum": 150 }], "sum": 150, "id": "d0d0b0cae4ec44600b1227f172003acb", "date": "2020-10-07T12:46:41.381Z" },
    { "category": "child", "hair": "short", "services": [{ "code": "cut", "sum": 100 }], "sum": 100, "id": "5186b7fddc7764f9085dd51f95a15528", "date": "2020-10-07T12:52:05.904Z" },
    { "category": "child", "hair": "short", "services": [{ "code": "cut", "sum": 100 }], "sum": 100, "id": "488025444233e4c129a2645b44a8b011", "date": "2020-10-07T18:45:11.219Z" }, {
      "category": "woman",
      "hair": "middle",
      "services": [{ "code": "cut", "sum": 230 }, { "code": "care", "sum": 230 }, { "code": "melodies", "sum": 430, "quantity": 2, "unit": 30, "price": 310 },
        { "code": "hairSpray", "sum": 510, "quantity": 4, "unit": 15, "price": 270 }],
      "sum": 1400,
      "id": "1979057cf7e1444b5be263d718c43ae0",
      "date": "2020-10-09T08:39:54.430Z"
    }, {
      "category": "woman",
      "hair": "middle",
      "services": [{ "code": "cut", "sum": 230 }, { "code": "care", "sum": 230 }, { "code": "hairSpray", "sum": 510, "quantity": 4, "unit": 15, "price": 270 },
        { "code": "bondUltim", "sum": 250, "quantity": 1, "unit": 4, "price": 0 }, { "code": "melodies", "sum": 580, "quantity": 4.5, "unit": 30, "price": 310 }],
      "sum": 1800,
      "id": "0ec55e54bcd794e18982a91978842dda",
      "date": "2020-10-09T11:49:18.344Z"
    }, {
      "category": "woman",
      "hair": "middle",
      "services": [{ "code": "cut", "sum": 230 }, { "code": "care", "sum": 230 }],
      "sum": 460,
      "id": "f3600712ae82c48e689f6a1a0d0cf8ad",
      "date": "2020-10-12T13:12:23.931Z"
    }, {
      "category": "woman",
      "hair": "long",
      "services": [{ "code": "cut", "sum": 230 }, { "code": "care", "sum": 290 }, { "code": "color", "sum": 410, "quantity": 3, "unit": 15, "price": 290 }],
      "sum": 930,
      "id": "592bf7ed9af3d40e889a4c022493c103",
      "date": "2020-10-13T15:54:35.749Z"
    }, {
      "category": "woman",
      "hair": "middle",
      "services": [{ "code": "cut", "sum": 230 }, { "code": "care", "sum": 230 }, { "code": "color", "sum": 390, "quantity": 3, "unit": 15, "price": 270 }],
      "sum": 850,
      "id": "476042fda8d724ec1ae05efac19f68d5",
      "date": "2020-10-13T16:47:20.591Z"
    }, { "category": "child", "hair": "short", "services": [{ "code": "cut", "sum": 100 }], "sum": 100, "id": "e80342b7a7eee49948d1a4e66b1f1bdf", "date": "2020-10-13T16:48:09.984Z" }, {
      "category": "woman",
      "hair": "short",
      "services": [{ "code": "cut", "sum": 230 }, { "code": "care", "sum": 170 }, { "code": "color", "sum": 350, "quantity": 3, "unit": 15, "price": 230 }],
      "sum": 750,
      "id": "7d78a83c4efd845bfac31861ea718585",
      "date": "2020-10-14T07:37:10.994Z"
    }, {
      "category": "woman",
      "hair": "middle",
      "services": [{ "code": "cut", "sum": 230 }, { "code": "care", "sum": 230 }, { "code": "color", "sum": 430, "quantity": 4, "unit": 15, "price": 270 }],
      "sum": 890,
      "id": "8b245c53434d74d4e93ef7b1ec2cda7d",
      "date": "2020-10-14T08:17:47.504Z"
    }, { "category": "child", "hair": "short", "services": [{ "code": "cut", "sum": 100 }], "sum": 100, "id": "a2516346f5d704a30a482519f442b849", "date": "2020-10-14T08:17:55.977Z" }, {
      "category": "woman",
      "hair": "middle",
      "services": [{ "code": "cut", "sum": 230 }, { "code": "care", "sum": 230 }, { "code": "melodies", "sum": 340, "quantity": 0.5, "unit": 30, "price": 310 }],
      "sum": 800,
      "id": "babdff57d7f5a429a94d52835ccaa456",
      "date": "2020-10-14T10:07:00.728Z"
    }, { "category": "child", "hair": "short", "services": [{ "code": "cut", "sum": 100 }], "sum": 100, "id": "f1bd4f1cd7040481d8e230fd7a547647", "date": "2020-10-14T11:19:42.177Z" }, {
      "category": "woman",
      "hair": "middle",
      "services": [{ "code": "cut", "sum": 230 }, { "code": "care", "sum": 230 }, { "code": "color", "sum": 390, "quantity": 3, "unit": 15, "price": 270 }],
      "sum": 850,
      "id": "c10c7a3c68eae42c58ed70027b30d1ef",
      "date": "2020-10-14T14:19:47.003Z"
    }, {
      "category": "woman",
      "hair": "long",
      "services": [{ "code": "care", "sum": 290 }, { "code": "melodies", "sum": 580, "quantity": 2, "unit": 30, "price": 460 }],
      "sum": 870,
      "id": "47e5f029895a84239a38bb7322acf635",
      "date": "2020-10-14T15:03:46.756Z"
    }, {
      "category": "woman",
      "hair": "short",
      "services": [{ "code": "cut", "sum": 230 }, { "code": "care", "sum": 170 }],
      "sum": 400,
      "id": "b250a8ebcf5a941f09509829819ee6a2",
      "date": "2020-10-14T15:03:59.192Z"
    }, {
      "category": "woman",
      "hair": "long",
      "services": [{ "code": "care", "sum": 290 }, { "code": "duoColor", "sum": 320, "quantity": 8, "unit": 15, "price": 0 },
        { "code": "duoMelodies", "sum": 520, "quantity": 2, "unit": 30, "price": 400 }],
      "sum": 1130,
      "id": "dd50d9943baaa483db52efb0b13d62df",
      "date": "2020-10-15T16:10:36.205Z"
    }, { "category": "child", "hair": "short", "services": [{ "code": "cut", "sum": 100 }], "sum": 100, "id": "5585a6de516e1412886a39f131d0b3d1", "date": "2020-10-15T16:33:33.784Z" },
    { "category": "child", "hair": "short", "services": [{ "code": "cut", "sum": 100 }], "sum": 100, "id": "6976d71070e07453391bd8349c0d606d", "date": "2020-10-15T17:09:19.783Z" }, {
      "category": "woman",
      "hair": "short",
      "services": [{ "code": "cut", "sum": 230 }, { "code": "care", "sum": 170 }],
      "sum": 400,
      "id": "f3325f4e073654630a636b2a0ae664d0",
      "date": "2020-10-21T19:40:05.062Z"
    }, {
      "category": "woman",
      "hair": "middle",
      "services": [{ "code": "cut", "sum": 230 }, { "code": "care", "sum": 230 }],
      "sum": 460,
      "id": "a99a8fe10c4d64dad872a7688a31b5f2",
      "date": "2020-10-21T19:40:10.991Z"
    }, { "category": "child", "hair": "short", "services": [{ "code": "cut", "sum": 100 }], "sum": 100, "id": "5f786c4ec444c4959a55b68f9394f11c", "date": "2020-10-26T14:20:29.993Z" },
    { "category": "child", "hair": "short", "services": [{ "code": "cut", "sum": 100 }], "sum": 100, "id": "e2e561814a98f4287bc66b1cf9b16c67", "date": "2020-10-26T14:20:33.307Z" }, {
      "category": "woman",
      "hair": "short",
      "services": [{ "code": "cut", "sum": 230 }, { "code": "care", "sum": 170 }, { "code": "color", "sum": 350, "quantity": 3, "unit": 15, "price": 230 }],
      "sum": 750,
      "id": "a964f9fb298d545709872f9139b15fc0",
      "date": "2020-10-29T11:07:03.451Z"
    }, {
      "category": "woman",
      "hair": "short",
      "services": [{ "code": "care", "sum": 170 }, { "code": "melodies", "sum": 350, "quantity": 2, "unit": 30, "price": 230 }],
      "sum": 520,
      "id": "f3f328d967811405383087b055564813",
      "date": "2020-10-29T11:07:24.017Z"
    }, { "category": "child", "hair": "short", "services": [{ "code": "cut", "sum": 100 }], "sum": 100, "id": "132a72868c0ad46a9940587ff73162b8", "date": "2020-10-29T11:14:27.929Z" },
    { "eyelash": { "code": "renewal", "sum": 500 }, "sum": 500, "id": "8894312e9d7194fa0b46d51a403d02ab", "date": "2020-10-29T11:20:45.905Z" },
    { "category": "child", "hair": "short", "services": [{ "code": "cut", "sum": 100 }], "sum": 100, "id": "d96932fa780ed4517bfe91a3712b7c9d", "date": "2020-10-29T13:35:26.612Z" }, {
      "category": "woman",
      "hair": "short",
      "services": [{ "code": "cut", "sum": 230 }, { "code": "care", "sum": 170 }, { "code": "color", "sum": 350, "quantity": 3, "unit": 15, "price": 230 }],
      "sum": 750,
      "id": "290958fda26bb4750a41683f66a0ab11",
      "date": "2020-10-29T18:24:44.947Z"
    }, {
      "category": "woman",
      "hair": "short",
      "services": [{ "code": "cut", "sum": 230 }, { "code": "care", "sum": 170 }, { "code": "color", "sum": 350, "quantity": 3, "unit": 15, "price": 230 }],
      "sum": 750,
      "id": "1ef88754f0b044125b49f6e0e91ad9b9",
      "date": "2020-10-29T18:33:18.991Z"
    }, {
      "category": "woman",
      "hair": "middle",
      "services": [{ "code": "cut", "sum": 230 }, { "code": "care", "sum": 230 }, { "code": "melodies", "sum": 430, "quantity": 2, "unit": 30, "price": 310 }],
      "sum": 890,
      "id": "fc095de0289154b1684fcd3322eeaaea",
      "date": "2020-10-31T14:49:32.501Z"
    }, {
      "category": "woman",
      "hair": "middle",
      "services": [{ "code": "cut", "sum": 230 }, { "code": "care", "sum": 230 }, { "code": "melodies", "sum": 550, "quantity": 4, "unit": 30, "price": 310 }],
      "sum": 1010,
      "id": "656010853ba7a44869b51b15f5a80113",
      "date": "2020-11-02T13:58:45.203Z"
    }, {
      "category": "woman",
      "hair": "short",
      "services": [{ "code": "cut", "sum": 230 }, { "code": "care", "sum": 170 }, { "code": "color", "sum": 350, "quantity": 3, "unit": 15, "price": 230 }],
      "sum": 750,
      "id": "c2f1c228d05554c498e5c8d4a512a1fe",
      "date": "2020-11-10T15:34:52.757Z"
    }, {
      "category": "woman",
      "hair": "short",
      "services": [{ "code": "cut", "sum": 230 }, { "code": "care", "sum": 170 }, { "code": "color", "sum": 310, "quantity": 2, "unit": 15, "price": 230 }],
      "sum": 710,
      "id": "97a09c92e95fd4750a40354e051ee3a4",
      "date": "2020-11-11T13:32:31.647Z"
    }, { "category": "child", "hair": "short", "services": [{ "code": "cut", "sum": 100 }], "sum": 100, "id": "3fce5e9a15bd14eb0911f6e0e1637fa1", "date": "2020-11-11T15:16:27.896Z" }, {
      "category": "woman",
      "hair": "long",
      "services": [{ "code": "cut", "sum": 230 }, { "code": "care", "sum": 290 }],
      "sum": 520,
      "id": "06b7b2a126bac4fbf8cc9db198adbc8f",
      "date": "2020-11-11T15:16:36.561Z"
    }, {
      "category": "woman",
      "hair": "middle",
      "services": [{ "code": "care", "sum": 230 }, { "code": "hairSpray", "sum": 510, "quantity": 4, "unit": 15, "price": 270 }],
      "sum": 740,
      "id": "1d5d4ee9d492040ef8ab32fbe37682da",
      "date": "2020-11-12T15:11:54.221Z"
    }, { "eyelash": { "code": "renewal", "sum": 500 }, "sum": 500, "id": "c8c6f0ae3f68e46368a78e97acc783ad", "date": "2020-11-12T15:12:02.195Z" }, {
      "category": "woman",
      "hair": "short",
      "services": [{ "code": "care", "sum": 170 }, { "code": "color", "sum": 330, "quantity": 2.5, "unit": 15, "price": 230 },
        { "code": "hairSpray", "sum": 350, "quantity": 2, "unit": 15, "price": 230 }],
      "sum": 850,
      "id": "32e4ef44879da49b6a44809982182a9c",
      "date": "2020-11-23T13:50:43.930Z"
    }, {
      "category": "woman",
      "hair": "middle",
      "services": [{ "code": "cut", "sum": 230 }, { "code": "care", "sum": 230 }, { "code": "color", "sum": 370, "quantity": 2.5, "unit": 15, "price": 270 }],
      "sum": 830,
      "id": "e9b54f200babb4b46a14f39dab940f2b",
      "date": "2020-11-23T13:51:39.148Z"
    }, { "category": "man", "services": [{ "code": "cut", "sum": 150 }], "sum": 150, "id": "b9928dba2b6e842b2ac1f4178436f85e", "date": "2020-11-23T20:21:48.785Z" }, {
      "category": "woman",
      "hair": "short",
      "services": [{ "code": "cut", "sum": 230 }, { "code": "care", "sum": 170 }],
      "sum": 400,
      "id": "670169bee9a8a43c3a0f055f203de144",
      "date": "2020-11-23T20:22:10.765Z"
    }, { "category": "man", "services": [{ "code": "cut", "sum": 150 }], "sum": 150, "id": "7088ad4aefd2c4bb9a738b6b9c40555a", "date": "2020-11-23T20:22:14.033Z" }, {
      "category": "woman",
      "hair": "middle",
      "services": [{ "code": "care", "sum": 230 }, { "code": "color", "sum": 370, "quantity": 2.5, "unit": 15, "price": 270 }],
      "sum": 600,
      "id": "148cbe6af8d5f4f0e85adcb0b64cfb03",
      "date": "2020-11-24T15:27:06.357Z"
    }, { "socialEvents": [{ "code": "hairstyle", "sum": 900 }], "sum": 900, "id": "56e4cd885800645dcb9e779ad47f2a1a", "date": "2020-11-24T20:11:15.372Z" },
    { "category": "woman", "hair": "long", "services": [{ "code": "care", "sum": 290 }], "sum": 290, "id": "9eed7a55016b04494adc3064913a1edb", "date": "2020-11-24T20:11:28.045Z" }, {
      "category": "woman",
      "hair": "short",
      "services": [{ "code": "care", "sum": 170 }, { "code": "color", "sum": 310, "quantity": 2, "unit": 15, "price": 230 }],
      "sum": 480,
      "id": "5de3166f2b3c7419499ab2db9419f5fb",
      "date": "2020-11-24T20:11:38.277Z"
    }, { "category": "man", "services": [{ "code": "cut", "sum": 150 }], "sum": 150, "id": "cb47884a6ecc84154ba9d7daeeaa9648", "date": "2020-11-24T20:11:43.276Z" },
    { "category": "man", "services": [{ "code": "cut", "sum": 150 }], "sum": 150, "id": "8ff2a83898ac846a085e815e0956a2b7", "date": "2020-11-24T20:14:15.772Z" }, {
      "category": "woman",
      "hair": "short",
      "services": [{ "code": "cut", "sum": 230 }, { "code": "care", "sum": 170 }, { "code": "duoMelodies", "sum": 360, "quantity": 1, "unit": 30, "price": 300 },
        { "code": "duoColor", "sum": 80, "quantity": 2, "unit": 15, "price": 0 }],
      "sum": 840,
      "id": "1bdcc6bfe294946468c5b91d895bfd02",
      "date": "2020-11-25T13:37:02.317Z"
    }, {
      "category": "woman",
      "hair": "short",
      "services": [{ "code": "cut", "sum": 230 }, { "code": "care", "sum": 170 }, { "code": "color", "sum": 390, "quantity": 4, "unit": 15, "price": 230 }],
      "sum": 790,
      "id": "782ef853d628c46059a4aae3cf003aad",
      "date": "2020-11-26T09:29:10.104Z"
    }, {
      "category": "woman",
      "hair": "long",
      "services": [{ "code": "care", "sum": 290 }, { "code": "color", "sum": 410, "quantity": 3, "unit": 15, "price": 290 }],
      "sum": 700,
      "id": "fc57c2b9f64a14fdcb628c47d976ce5c",
      "date": "2020-11-26T17:38:05.847Z"
    }, {
      "category": "woman",
      "hair": "short",
      "services": [{ "code": "cut", "sum": 230 }, { "code": "care", "sum": 170 }],
      "sum": 400,
      "id": "8ca8161d866df4650ae1c6163bff3a52",
      "date": "2020-11-26T17:47:41.635Z"
    }, {
      "category": "woman",
      "hair": "middle",
      "services": [{ "code": "care", "sum": 230 }, { "code": "melodies", "sum": 430, "quantity": 2, "unit": 30, "price": 310 },
        { "code": "color", "sum": 370, "quantity": 2.5, "unit": 15, "price": 270 }],
      "sum": 1030,
      "id": "e63deb9d223084c18aa8baedac78e412",
      "date": "2020-11-27T11:06:22.968Z"
    }, {
      "category": "woman",
      "hair": "long",
      "services": [{ "code": "cut", "sum": 230 }, { "code": "care", "sum": 290 }],
      "sum": 520,
      "id": "4052b105c0c4c482791aa8e5adf4a6f2",
      "date": "2020-11-27T17:51:38.347Z"
    }],
  "CUSTOMER": [{ "name": "Lucka", "id": "f5e27471f3c4341d38389b1e756935a2", "date": "2019-02-20T22:30:11.348Z" },
    { "name": "Verča Daňková", "id": "c8d81358ba26e4898b110f088247877f", "date": "2019-02-20T22:30:11.348Z" },
    { "name": "Stáňa Čáslav", "id": "ecf8df4b8a6de42da90abc1a18368ffe", "date": "2019-02-20T22:30:11.348Z" },
    { "name": "Rázgová", "id": "a526c5c28ff88413c9a0fa43f5e78fbf", "date": "2019-02-20T22:30:11.348Z" },
    { "name": "Vondráčková", "id": "4e4c46937bf3f43cdbea8a0a855f5b8c", "date": "2019-02-20T22:30:11.348Z" },
    { "name": "Moravcová", "id": "07daee27bdd59424a9a11b7bdcced22c", "date": "2019-02-20T22:30:11.348Z" },
    { "name": "Sovová", "id": "42522b4189998404bb8c3376b68cf50c", "date": "2019-02-20T22:30:11.348Z" },
    { "name": "Sobotková", "id": "1af1d87c384334a158efc30305e30851", "date": "2019-02-20T22:30:11.348Z" },
    { "name": "Sajdlova", "id": "8734563cce3844117a6c5417513a370f", "date": "2019-02-20T22:30:11.348Z" },
    { "name": "Vášková Míša", "id": "6de616b8d2165491d8cd87e5f74f4c48", "date": "2019-02-20T22:30:11.348Z" },
    { "name": "Denisa", "id": "f726ff3efc4214b4e8fb1102cbbf66fc", "date": "2019-02-20T22:30:11.348Z" },
    { "name": "Lukáš", "id": "28da4ecb976d64c23a47eca66d49b3b7", "date": "2019-02-20T22:30:11.348Z" },
    { "name": "Zilova", "id": "a33f98d4fd75745bd883c2666d7c39b3", "date": "2019-02-20T22:30:11.348Z" },
    { "name": "Piskorová", "id": "79a523cde8f7b4d298fed3486602b0a2", "date": "2019-02-20T22:30:11.348Z" },
    { "name": "Danča", "id": "da24fd87ea6cb4748a2612a1640297f8", "date": "2019-02-20T22:30:11.348Z" },
    { "name": "Katka Lásková - vana", "id": "2e5ee92fb5db741f1b16c186bb7df30b", "date": "2019-02-20T22:30:11.348Z" },
    { "name": "Ludmila řasy", "id": "28eca0e977497412aa56b1c51691403a", "date": "2019-02-20T22:30:11.348Z" },
    { "name": "Terka", "id": "4d79b28f36771421e867235314ffcd97", "date": "2019-02-20T22:30:11.348Z" },
    { "name": "Veronika vinici", "id": "e46bdf1ab813f45a7af7bbd537db7506", "date": "2019-02-20T22:30:11.348Z" },
    { "name": "Žílová-syn", "id": "3ccb53e5c020b485690e965800074d49", "date": "2019-02-21T13:28:22.287Z" },
    { "name": "Pája Sahulková", "id": "e7d779594890e44dd9bb130e879efc80", "date": "2019-02-21T19:57:19.001Z" },
    { "name": "Hanka Výletová", "id": "c3ba6a4cf8a2d4571bee86f52e4b5d7b", "date": "2019-02-22T08:31:33.542Z" },
    { "name": "Toník", "id": "ffd074702171a43888cf11b98e19d497", "date": "2019-02-22T12:52:17.552Z" },
    { "name": "Tůmová", "id": "55486f135d91b479f9acc3a7ebd5a8b6", "date": "2019-02-22T12:53:38.063Z" },
    { "name": "Hanka Rosičková", "id": "4442ae4a0b97344c8b702dff7f4cb4f4", "date": "2019-02-26T08:19:20.557Z" },
    { "name": "Dana", "id": "e3433a3a4971044ffac7dc7e6cb5c92f", "date": "2019-02-26T13:28:31.845Z" },
    { "name": "Terezka...meliry", "id": "efeb0cb1ebff54a3ea810cb212314f61", "date": "2019-02-26T18:57:06.151Z" },
    { "name": "Brožová nevěsta", "id": "48e425e9525f745f78689d67a0ccaf9e", "date": "2019-02-26T18:57:54.604Z" },
    { "name": "Luděk Radil", "id": "ca6896e1caf9043259eea9fed84c03a3", "date": "2019-02-26T18:58:17.378Z" },
    { "name": "Lenka Radilová", "id": "d5f551552b4f445329e8faec1ab595b6", "date": "2019-02-26T18:58:54.633Z" },
    { "name": "Králová nevěsta zkouška", "id": "76191a830db88411ca7b559f32f50741", "date": "2019-02-26T19:01:50.309Z" },
    { "name": "", "id": "5229311e5ac1c423cb614e1af7062679", "date": "2019-02-26T19:08:10.022Z" }, { "name": "Irenka", "id": "a9bfc81d4e24a42b392f940a7f0d6a28", "date": "2019-02-26T19:08:58.429Z" },
    { "name": "Burianova", "id": "7212bc9e29c804056a3805385b28ea98", "date": "2019-02-27T16:00:22.268Z" },
    { "name": "Kristýnka", "id": "ed4d2c6dd016140159e52136cc10a2aa", "date": "2019-02-28T11:40:31.340Z" },
    { "name": "Brizova", "id": "dfcf4a71c15aa4ea68a180c5825e904a", "date": "2019-02-28T16:25:59.993Z" },
    { "name": "Yveta Horynová", "id": "0c8a2adc6f870433dbde888023935b9b", "date": "2019-02-28T16:26:55.072Z" },
    { "name": "Míša", "id": "b088ed55f64eb415cb5cd1d36a9eb507", "date": "2019-03-01T10:03:40.666Z" }, { "name": "Filip", "id": "18aa7ed3a5f824d4d9ab59fce86e7fd5", "date": "2019-03-01T10:39:38.429Z" },
    { "name": "Maierova", "id": "80f80c11a95ff4864be392a00c8e0e1d", "date": "2019-03-01T17:25:16.665Z" },
    { "name": "Havlovicova", "id": "81a8881033c2947ec8f4cb29a9ddd7c8", "date": "2019-03-01T17:26:26.388Z" },
    { "name": "Slováková", "id": "fd224416ac2ad4f84bafc56445f517fb", "date": "2019-03-01T17:27:38.862Z" },
    { "name": "Hanka ", "id": "10c6d5f8e7502493fbdf32cd0d72a906", "date": "2019-03-03T15:06:21.767Z" },
    { "name": "Mocová", "id": "a6b2e0479115749bbac5f8837728d7ba", "date": "2019-03-04T07:52:52.062Z" },
    { "name": "Jana Košťálová", "id": "7ad70b088384946c2bf0fbbcb74cbfa8", "date": "2019-03-04T20:55:12.960Z" },
    { "name": "Ála", "id": "06764ae66d4f2483891f9e459a0c6c34", "date": "2019-03-04T20:57:16.580Z" },
    { "name": "Kristýnka Bartunkova účes", "id": "c6a4b8aae1389464eb366b6e05d5052f", "date": "2019-03-09T17:44:20.268Z" },
    { "name": "Bára Mocová", "id": "eabc4f8aa9c4d4e41bbfdbb14fe6951e", "date": "2019-03-09T17:44:49.466Z" },
    { "name": "Bára", "id": "435fd15510e0d4bd8895b4dcec9bb15f", "date": "2019-03-09T17:45:03.452Z" },
    { "name": "Veronika Timmis", "id": "8e628357fe09342dcb22fb34f4e3c3a6", "date": "2019-03-11T10:13:30.866Z" },
    { "name": "Šárka", "id": "8a55bda23ef234f80b400314c7139f1c", "date": "2019-03-11T14:34:45.350Z" },
    { "name": "Novotná", "id": "b438c739696b840a9a6d7fea8aad59fb", "date": "2019-03-12T13:59:19.823Z" },
    { "name": "Jirušová", "id": "4336462f3f4684748b85006e9b8fe073", "date": "2019-03-12T15:53:12.048Z" },
    { "name": "Pecnova", "id": "44db85ca34d7041a3b9d1ac195628db5", "date": "2019-03-12T16:42:05.632Z" },
    { "name": "Terka V", "id": "7b5a166bca3234716af0da138c36cbf4", "date": "2019-03-13T16:40:21.768Z" },
    { "name": "Veprekova", "id": "fe40aec3e6e634a53a7bfa9406482e24", "date": "2019-03-13T17:17:10.807Z" },
    { "name": "Caklova", "id": "ca12932c93af8448aa195e29dd8e76d9", "date": "2019-03-13T17:19:11.036Z" },
    { "name": "Vašková stříhání", "id": "acffcacd4fd894d17911b9642af0ef30", "date": "2019-03-14T09:10:29.229Z" },
    { "name": "Hanka a Jitka", "id": "f7378662214ef4c6e873eb0ed7ab8db5", "date": "2019-03-14T09:10:55.877Z" },
    { "name": "Ludmila", "id": "3844d4aa5f5eb47a1a843cf08513fc57", "date": "2019-03-14T11:29:48.724Z" },
    { "name": "Fuxová", "id": "cfb0db6281ca9427bbdb2e705a6aec37", "date": "2019-03-14T13:20:34.772Z" },
    { "name": "Libor", "id": "7565f076bd7ec4111b21e79782165f0d", "date": "2019-03-14T16:33:00.724Z" },
    { "name": "Milaberská", "id": "d1f7f67fd113d42368227a760f32e076", "date": "2019-03-17T10:15:45.934Z" },
    { "name": "Vendulka", "id": "b4273152d49fd4139b0ac754b3e67b98", "date": "2019-03-17T19:58:08.844Z" },
    { "name": "Adam", "id": "a3be4ee4a47ec4c67a55a2e4279db96d", "date": "2019-03-21T10:33:46.938Z" },
    { "name": "Martina Adamová", "id": "7626d8ba381ba4e87b31b03e06c7272f", "date": "2019-03-21T10:34:08.053Z" },
    { "name": "Petr Košťál", "id": "caf7d9ba687dc4e41836bc9bd93396ce", "date": "2019-03-21T10:34:30.458Z" },
    { "name": "Rylichová", "id": "b42a55cc2d4014015a4c336f1b247ab8", "date": "2019-03-21T10:41:01.269Z" },
    { "name": "Záleská", "id": "13440c222cab74b9d8abcb60be1024e3", "date": "2019-03-22T11:06:55.877Z" },
    { "name": "Bukovičová", "id": "b9dfd7dc3aa454223b618c2bb78e296e", "date": "2019-03-25T15:04:35.670Z" },
    { "name": "Buriánová", "id": "054fd0dcd27994e6581686da23dbce75", "date": "2019-03-26T17:25:21.560Z" },
    { "name": "Nováková Terka", "id": "be82e9b6b453745eca1fa6246cdbac40", "date": "2019-03-30T19:51:07.529Z" },
    { "name": "Svatba Jirušová", "id": "c5655f42680ab4b49b8fc77f3d0c6569", "date": "2019-03-30T19:53:38.183Z" },
    { "name": "Štíbrová", "id": "9cc3dfb9be57743239eb732fff55da33", "date": "2019-04-01T08:53:59.777Z" },
    { "name": "Pokorná", "id": "21595604a3a79433ebe199b20e802acb", "date": "2019-04-03T19:10:58.621Z" },
    { "name": "Hanka", "id": "e638459251bdb4b539cb122c1c6c1e58", "date": "2019-04-04T07:33:55.744Z" },
    { "name": "Lucka Podána", "id": "88bea4dfe46574e0190a91283efa18c3", "date": "2019-04-04T09:29:48.703Z" },
    { "name": "Jelinkova", "id": "2061c0dd58aeb4596b4d520ff970ae98", "date": "2019-04-04T10:00:36.494Z" },
    { "name": "Andrlová", "id": "5b6f904e3f8dd45bba1772787ae6e381", "date": "2019-04-04T12:21:44.800Z" },
    { "name": "Jaromír", "id": "f4bbfcf35c69e46e6b2726bcf2cae7b2", "date": "2019-04-04T18:31:11.061Z" },
    { "name": "Ratzova", "id": "99acd15d9cd264d899418591a222d5a4", "date": "2019-04-05T11:42:30.420Z" },
    { "name": "Nováková Marcela", "id": "c56e7e31e689f4945ba8d0b63a57cff3", "date": "2019-04-05T13:20:01.939Z" },
    { "name": "Šírová", "id": "2778fed97247d44ccacbfa42a2d4f88c", "date": "2019-04-08T08:05:08.750Z" },
    { "name": "Chourová", "id": "b2902dc737ff54554a5da222dee305ad", "date": "2019-04-08T08:05:52.499Z" }, { "name": "", "id": "f0cc93b6b31c54e4ca8af02bbd2b21b2", "date": "2019-04-08T18:40:47.529Z" },
    { "name": "Šťastná", "id": "a0e174a9a7a754bbeb3d27d4722a04e9", "date": "2019-04-09T07:36:50.964Z" },
    { "name": "Vyčítalová", "id": "0b9c7720b4aca46daa0347d3a5fa926a", "date": "2019-04-09T15:13:12.300Z" },
    { "name": "Babička", "id": "c87340f9e48424e7e96d1eac78a227c0", "date": "2019-04-23T13:59:41.016Z" },
    { "name": "Vančurova-doplatek svatba", "id": "1a0529e547b734b6c9f5b5f572d6fb5d", "date": "2019-04-23T14:00:54.474Z" },
    { "name": "Veprekova simča", "id": "4ca33b02be932474385baf41dd270b20", "date": "2019-04-23T14:02:40.454Z" },
    { "name": "Sojkova", "id": "c7db86fe689c6465c9bef27fb23efad0", "date": "2019-04-23T15:25:27.317Z" },
    { "name": "Vaskova", "id": "4d9153cf85ac44a378e3f6124857a3b2", "date": "2019-04-24T07:50:48.977Z" },
    { "name": "Břízová", "id": "afc354f8600e7451fa1d0d422bf148e5", "date": "2019-04-24T11:03:11.952Z" },
    { "name": "Dušáková", "id": "2f1beb460ea6149db8c5966e2bcdbf59", "date": "2019-04-25T19:53:48.092Z" },
    { "name": "Steklá", "id": "735d907489a144ba68ea19bf72bfc83b", "date": "2019-04-25T19:55:53.466Z" },
    { "name": "Ruthova 8.6.", "id": "27a58447ed64549529b1b8e9e9a9598c", "date": "2019-05-07T18:18:05.345Z" },
    { "name": "Králová nevěsta svatba", "id": "1b78ae1e0058a4456a2ced0838fe5ed9", "date": "2019-05-25T20:25:36.778Z" },
    { "name": "Jarka Ságlová", "id": "43ec2337f30224c8fa1b29fee8063740", "date": "2019-05-26T19:31:51.272Z" },
    { "name": "Daová 21.6.", "id": "e7e3ec0338b7b4f24b25770b3c2b005b", "date": "2019-05-28T11:04:29.917Z" },
    { "name": "Pollakova 31.8.", "id": "204cb0006cfe24132adb9a78301c7653", "date": "2019-08-15T19:36:59.013Z" },
    { "name": "Vydrova 17.8.", "id": "2eaacb8910f894f7498e428be065f7e2", "date": "2019-08-15T19:37:35.015Z" },
    { "name": "Kohlschuterova 7.9.", "id": "4ef97eb3b9f3e4b6390e555268990386", "date": "2019-09-05T18:19:19.827Z" },
    { "name": "Chramostová", "id": "4309a6e52f5a54c49bb27a3830743a5c", "date": "2020-05-25T21:52:18.117Z" },
    { "name": "Chramostová", "id": "7b29e0b48731a4f5f8a1d5687cf6fcfe", "date": "2020-05-25T21:53:05.518Z" },
    { "name": "Sirinka...okresanec", "id": "cc2a462a3a5a040a8a7b4ed8b97de136", "date": "2020-06-17T13:19:06.720Z" },
    { "name": "Sirinka...okresanec", "id": "61f8ccf4107f54c9f979f48c0f3124db", "date": "2020-06-17T13:19:13.957Z" },
    { "name": "Šabatská", "id": "8d8ecb67ef3584c5c85a594427513fb5", "date": "2020-06-18T09:21:34.735Z" },
    { "name": "Šabatská", "id": "c7d96ce6436db4efd9e861e414a6f9f6", "date": "2020-06-18T09:22:01.299Z" },
    { "name": "Šabatská", "id": "b8c4383b3133d437ba24aa50fa87a05e", "date": "2020-06-18T09:22:03.866Z" },
    { "name": "Šabatská", "id": "2317f08e510564357aa8733e683dc967", "date": "2020-06-18T09:22:08.578Z" },
    { "name": "Steklá - stary kolín", "id": "713f2d30cf62b42a9a35d8c2b41c0ce9", "date": "2020-06-18T15:47:02.911Z" },
    { "name": "Steklá - stary kolín", "id": "eb077e7eea7fa4e18903a31d0c25de31", "date": "2020-06-18T15:47:25.804Z" },
    { "name": "Steklá - stary kolín", "id": "bd7ad79fc3e6840b3b51360c91ddfce0", "date": "2020-06-18T15:47:54.147Z" },
    { "name": "Andrlova", "id": "44daf1450c53f49419a8f5b34bc08f1f", "date": "2020-06-20T19:11:13.887Z" },
    { "name": "Andrlova", "id": "58d46b080e40643e283d9c518d26f5a4", "date": "2020-06-20T19:11:43.682Z" },
    { "name": "Andrlova", "id": "5184312060f57418697a758082fa39da", "date": "2020-06-20T19:11:54.571Z" },
    { "name": "Serchovcová", "id": "b7944ed908ef640dfb51c3565c88d110", "date": "2020-06-25T09:33:46.917Z" },
    { "name": "Serchovcová", "id": "6ac023355930843fb90a786c51453c0a", "date": "2020-06-25T09:34:04.028Z" },
    { "name": "Serchovcová", "id": "653351166533243558ff52c30e1032a4", "date": "2020-06-25T09:34:12.002Z" },
    { "name": "Simča Peroutková", "id": "7cd9b136ef99a40d1914ae364c39dc32", "date": "2020-06-25T13:11:45.346Z" },
    { "name": "Simča Peroutková", "id": "86ce51fc83d9b4e1f902371931d6e1c6", "date": "2020-06-25T13:12:04.250Z" },
    { "name": "Ceeova potehy", "id": "026a380e1b1fd42bebd9eb09c82da4c3", "date": "2020-07-22T17:07:47.092Z" },
    { "name": "Ceeova potehy", "id": "7479c36bd88684dc4864b05ed858623d", "date": "2020-07-22T17:07:55.143Z" },
    { "name": "Labudová", "id": "556862569800047789c13cd032a07125", "date": "2020-08-12T11:24:53.152Z" },
    { "name": "Labutova", "id": "29fe039af007a4eff940a0845d897c23", "date": "2020-08-12T13:57:10.187Z" },
    { "name": "Labutova", "id": "303194760348d4f83bacf4f0d62d6cd1", "date": "2020-08-12T13:57:19.290Z" },
    { "name": "Jandalusova", "id": "923edfb0b24fd47e0b8b2a7a54b58c9a", "date": "2020-08-18T18:10:03.360Z" },
    { "name": "Jandalusova", "id": "52ccb338bf8104e27a6cdb8993ae0108", "date": "2020-08-18T18:10:22.846Z" },
    { "name": "Konradova", "id": "81f3494c5070a40ca889f57ce0f4a8e2", "date": "2020-08-18T18:11:45.608Z" },
    { "name": "Konradova", "id": "1ac6b91b0245241c69d1dcceabddb778", "date": "2020-08-18T18:11:52.695Z" },
    { "name": "Kubiskova", "id": "3eecb85a0455d4f07ba2337b4c26935f", "date": "2020-09-09T13:19:59.327Z" },
    { "name": "Kubiskova", "id": "7d361fd5464464468a37489727dd42e6", "date": "2020-09-09T13:20:05.109Z" },
    { "name": "Hrboková", "id": "c4dd240be44aa47d6893b6054fa327de", "date": "2020-09-21T11:10:43.206Z" },
    { "name": "Hrboková", "id": "08a822dc229e7490f93d08883eb55b7c", "date": "2020-09-21T11:10:49.822Z" }]
};

export class Attachment {

  static URI = "https://api.plus4u.net/ues/wcp/ues/core/attachment/UESAttachment/";

  static async getBinary(uri) {
    return await new Promise((resolve, reject) => {
      let commandUri = this.URI + "getAttachmentData";
      Plus4U5.Common.Calls.call("get", commandUri, {
        data: { uesuri: uri },
        done: dtoOut => {
          let binary = new Binary(dtoOut);
          resolve(binary);
        },
        fail: reject
      });
    });
  }

  static async setBinary(uri, binary) {
    // TODO oidc
    // return await new Promise((resolve, reject) => {
    //   let commandUri = this.URI + "checkIn?uesuri=" + encodeURIComponent(uri);
    //   Plus4U5.Common.Calls.call("post", commandUri,
    //     { data: { data: binary.toStream() }, done: resolve, fail: reject }
    //   );
    // });

    const code = uri.split(":").pop();
    localStorage.setItem("oc-lenavisage-" + code, JSON.stringify(binary.toData()));
  }

  static async create(artUri, attch) {
    let { code, value } = attch;

    // TODO oidc
    // return await new Promise((resolve, reject) => {
    //   let commandUri = this.URI + "create?uesuri=" + encodeURIComponent(artUri);
    //
    //   Plus4U5.Common.Calls.call("post", commandUri,
    //     { data: { data: value.toStream(), code }, done: resolve, fail: reject }
    //   );
    // });

    localStorage.setItem("oc-lenavisage-" + code, JSON.stringify(value.toData()));
  }

  static async getData(uri) {
    let data;
    if (cache.isCached(uri)) {
      data = cache.get(uri);
    } else {
      // TODO oidc
      // let binary = await this.getBinary(uri);
      // data = binary.toData();

      const code = uri.split(":").pop();
      const lsData = localStorage.getItem("oc-lenavisage-" + code);
      data = lsData ? JSON.parse(lsData) : STATIC_DATA[code];

      cache.set(uri, data);
    }
    return data;
  }

  static async setData(uri, data, fileName) {
    await this.setBinary(uri, new Binary(JSON.stringify(data), fileName));
    cache.set(uri, data);
  }

  static async updateData(uri, updateFn) {
    let binary = await this.getBinary(uri);
    let newData = updateFn(binary.toData());
    return await this.setData(uri, newData, binary.fileName);
  }
}

export default Attachment;
