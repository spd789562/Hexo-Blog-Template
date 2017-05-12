---
title: 為codeblock增加語言標籤 - Hexo技巧
date: 2017-05-06 15:54:57
tags:
- hexo
---
雖然看文章就會知道程式碼內是使用什麼程式語言，但還是會想要有一個標記對吧？寫個簡單的script就可以解決這個問題拉！

<!-- more -->

首先先在scripts底下建立一個js，這裡叫codeTag.js好了

``` javascript
const cheerio = require('cheerio');
function codetag(source) {
	let $= cheerio.load(source, {
		decodeEntities: false
	})
	//遍歷codeblock
	$('.highlight').each(function(index, element) {
	  
	})
	return $.html()
}
//在載入前變更html
hexo.extend.filter.register('after_render:html', codetag)
```

遍歷codeblock時，第二個參數是元素本身`LZ(element)`來操作他
並且切分他的classList找出這個codeblock用的語言
``` javascript
$('.highlight').each(function(index, element) {
	let $codeblock = $(element)
	let classList = $codeblock.attr('class'),
		className,
		tagElement
	//若長度大於等於2代表markdown撰寫時有標註語言
	if(classList.length >= 2)
		//取出第二個元素
		className = classList[1]
		//建立元素
		tagElement = '<span class="tag">' + className + '</span>'
		//插入codeblock中
		$codeblock.append(tagElement)
})
```
再加點css
``` css
.tag
	position: absolute;
	right: 1rem;
	top: .5rem;
	font-size: 1.2rem;
```

就可以有漂亮的程式碼Tag拉