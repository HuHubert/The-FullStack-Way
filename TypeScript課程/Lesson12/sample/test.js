"use strict";
exports.__esModule = true;
var request = require("request");
request('http://api.komavideo.com/news/list', function(error, response, body) {
    if (error)
        console.error(error);
    else {
        console.log(body);
        var body = JSON.parse(body);
        for (var i = 0; i < body.length; i++) {
            var item = body[i];
            console.log(item.title);
        }
    }
});
//尋找tsd文件 https://www.typescriptlang.org/dt/search?search=
//安裝tsd文件 npm...
//編輯TSC ... .ts
//運行js