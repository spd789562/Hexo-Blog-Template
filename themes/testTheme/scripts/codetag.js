'use strict';
var cheerio = require('cheerio')

function codetag(source) {
  var $ = cheerio.load(source, {
    decodeEntities: false
  })
  $('.highlight').each(function(index, element) {
//   let $(element) = $(element)
  let classList = $(element).attr('class').split(' '),
    className,
    tagElement
  //若長度大於等於2代表markdown撰寫時有標註語言
  if(classList.length >= 2)
    //取出第二個元素
    className = classList[1]
    //建立元素
    tagElement = '<span class="tag">' + className + '</span>'
    //插入codeblock中
    $(element).append(tagElement)
  });
  return $.html();
}
hexo.extend.filter.register('after_render:html', codetag)