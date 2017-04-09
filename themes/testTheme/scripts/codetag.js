'use strict';
var cheerio = require('cheerio'); 

function codetag(source) {
    var LZ= cheerio.load(source, {
        decodeEntities: false
    });
    //遍历所有 img 标签，添加data-original属性
    LZ('.highlight').each(function(index, element) {
      
    });
    return LZ.html();
}
//在渲染之前，更改 img 标签
hexo.extend.filter.register('after_render:html', codetag);