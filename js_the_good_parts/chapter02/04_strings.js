// '单引号字符串'
// "双引号字符串"
// "字符串里的转义符\n"
// 字符编码 \u
console.log('"A" === "\\u0041" 结果', "A" === "\u0041");
// "A" === "\u0041" 结果 true

// 字符串 length 属性
console.log('"seven".length = ', "seven".length); // "seven".length =  5
console.log('"seven中文字".length = ', "seven中文字".length); // "seven中文字".length =  8

// 字符串连接
console.log("'c' + 'a' + 't' === 'cat' 结果 ", 'c' + 'a' + 't' === 'cat');
// 'c' + 'a' + 't' === 'cat' 结果  true

// 字符串内建方法

function StringSnipCharAt() {
    // 01 charAt(pos) pos: 0 或大于等于字符串长度
    console.log("'Curly'.charAt(0) = ", 'Curly'.charAt(0)); // 'Curly'.charAt(0) =  C
    console.log("'Curly'.charAt(10) = ", 'Curly'.charAt(10)); // 没有找到时返回空字符串
    console.log("'Curly'.charAt(-1) = ", 'Curly'.charAt(-1)); // 小于0时返回空字符串
    // // 自己实现 charAt 方法
    // // 报错 TypeError: String.method is not a function
    // String.method('tyhCharAt', function (pos) {
    //     return this.slice(pos, pos + 1);
    // });
    // console.log("'Tyh'.tyhCharAt(0) = ", 'Tyh'.tyhCharAt(0)); // 'Curly'.charAt(0) =  C
}

function StringSnipCharCodeAt() {
    // 02 charCodeAt(pos)
    // pos: 0 或大于等于字符串长度
    console.log("'Curly'.charCodeAt(0) = ", 'Curly'.charCodeAt(0)); // 'Curly'.charCodeAt(0) =  67
    console.log("'Curly'.charCodeAt(10) = ", 'Curly'.charCodeAt(10)); // 没有找到时返回NaN
    console.log("'Curly'.charCodeAt(-1) = ", 'Curly'.charCodeAt(-1)); // 小于0时返回NaN
}

function StringSnipConcat() {
    // 03 concat(string...) 连接多个字符串
    // 通常用 +
    console.log("'C'.concat('a','t') = ", 'C'.concat('a', 't')); // 'C'.concat('a','t') =  Cat
}

function StringSnipIndexOf() {
    // 04 indexOf(searchString, pos)
    // pos: 从头开始查找的位置
    console.log("'Mississippi'.indexOf('ss') = ", 'Mississippi'.indexOf('ss'));
    // 'Mississippi'.indexOf('ss') =  2
    console.log("'Mississippi'.indexOf('ss', 3) = ", 'Mississippi'.indexOf('ss', 3));
    // 'Mississippi'.indexOf('ss', 3) =  5
    console.log("'Mississippi'.indexOf('ss', 6) = ", 'Mississippi'.indexOf('ss', 6));
    // 'Mississippi'.indexOf('ss', 6) =  -1
}

function StringSnipLastIndexOf() {
    // 05 lastIndexOf(searchString, pos)
    // pos: 从末尾开始查找的位置
    console.log("'Mississippi'.lastIndexOf('ss') = ", 'Mississippi'.lastIndexOf('ss'));
    // 'Mississippi'.lastIndexOf('ss') =  5
    console.log("'Mississippi'.lastIndexOf('ss', 3) = ", 'Mississippi'.lastIndexOf('ss', 3));
    // 'Mississippi'.lastIndexOf('ss', 3) =  2
    console.log("'Mississippi'.lastIndexOf('ss', 1) = ", 'Mississippi'.lastIndexOf('ss', 1));
    // 'Mississippi'.lastIndexOf('ss', 1) =  -1
}

function StringSnipLocaleCompare() {
    // 06 localeCompare(that)
    console.log("'a'.localeCompare('A') = ", 'a'.localeCompare('A')); // 字符串小，返回负数
    // 'a'.localeCompare('A') =  -1
    console.log("'aa'.localeCompare('A') = ", 'aa'.localeCompare('A')); // 字符串大，返回正数
    // 'aa'.localeCompare('A') =  1
    console.log("'A'.localeCompare('\\u0041') = ", 'A'.localeCompare('\u0041')); // 字符串相等，返回0
    // 'A'.localeCompare('\u0041') =  0
    // 数组自定义排序
    var m = ['AAA', 'A', 'aa', 'a', 'Aa', 'aaa'];
    m.sort(function (a, b) {
        return a.localeCompare(b);
    });
    console.log('用localeCompare排序后数组: ', m);
    // 用localeCompare排序后数组:  [ 'a', 'A', 'aa', 'Aa', 'aaa', 'AAA' ]
}

function StringSnipMatch() {
    // 07 match(regexp)
    // - regexp 带有 g 标识, 生成一个包含所有匹配的数组
    // - regexp 不带 g 标识, 功能与 regex.exec 一样
    var text = '<html><body bgcolor=#faf0e6><p>This is <b>bold<\/b>!<\/p><\/body><\/html>';
    var tags = /[^<>]+|<(\/?)([A-Za-z]+)([^<>]*)>/g;
    var a, i;
    a = text.match(tags);
    for (i = 0; i < a.length; i++) {
        console.log(('// [' + i + '] ' + a[i]));
    }
    // [0] <html>
    // [1] <body bgcolor=#faf0e6>
    // [2] <p>
    // [3] This is
    // [4] <b>
    // [5] bold
    // [6] </b>
    // [7] !
    // [8] </p>
    // [9] </body>
    // [10] </html>
}

function StringSnipReplace() {
    // 08 replace(searchValue, replaceValue)
    // searchValue 如果是字符串, 只在第一次出现的地方替换
    console.log('"mother_in_law".replace(\'_\', \'-\') 结果 ', "mother_in_law".replace('_', '-'));
    // "mother_in_law".replace('_', '-') 结果  mother-in_law

    // searchValue 如果是正则表达式且带有 g 标识, 会全部替换
    console.log('"mother_in_law".replace(/_/g, \'-\') 结果 ', "mother_in_law".replace(/_/g, '-'));
    // "mother_in_law".replace(/_/g, '-') 结果  mother-in-law

    // replaceValue 可以是一个字符串或一个函数
    // 如果是字符串, $ 有特殊含义:
    // $$ 替换 $
    // $& 整个匹配的文本
    // $number 分组捕获的文本
    // $` 匹配之前的文本
    // $' 匹配之后的文本
    var oldareacode = /\((\d{3})\)/g;

    // $$ 替换 $
    console.log("'(555)666-1212'.replace(oldareacode, '$$-') 结果 ", '(555)666-1212'.replace(oldareacode, '$$-'));
    // '(555)666-1212'.replace(oldareacode, '$$-') 结果  $-666-1212

    // $& 整个匹配的文本
    console.log("'(555)666-1212'.replace(oldareacode, '$&-') 结果 ", '(555)666-1212'.replace(oldareacode, '$&-'));
    // '(555)666-1212'.replace(oldareacode, '$&-') 结果  (555)-666-1212

    // $number 分组捕获的文本, 下面例子中分组 (d{3})
    console.log("'(555)666-1212'.replace(oldareacode, '$1-') 结果 ", '(555)666-1212'.replace(oldareacode, '$1-'));
    // '(555)666-1212'.replace(oldareacode, '$1-') 结果  555-666-1212
    var oldareacode2 = /\((\d{3})\)\((\d{3})\)/g;
    console.log("'(555)(333)666-1212'.replace(oldareacode2, '$1-$2-') 结果 ", '(555)(333)666-1212'.replace(oldareacode2, '$1-$2-'));
    // '(555)(333)666-1212'.replace(oldareacode2, '$1-$2-') 结果  555-333-666-1212
    // 这里 $1 表示匹配的555, $2 表示匹配的333

    // $` 匹配之前的文本
    console.log("'021(555)666-1212'.replace(oldareacode, '($`)') 结果 ", '021(555)666-1212'.replace(oldareacode, '($`)'));
    // '021(555)666-1212'.replace(oldareacode, '($`)') 结果  021(021)666-1212
    // 这里匹配之前的文本是 021

    // $' 匹配之后的文本
    console.log("'(555)666-1212'.replace(oldareacode, '$'-') 结果 ", '(555)666-1212'.replace(oldareacode, '$\'-'));
    // '(555)666-1212'.replace(oldareacode, '$'-') 结果  666-1212-666-1212
    // 这里匹配之后的文本是 666-1212

    // 如果 replaceValue 是一个函数, 那么每遇到一次匹配就会调用一次
    var character = {
        '<': '&lt;',
        '>': '&gt;',
        '&': '&amp;',
        '"': '&quot;',
    };
    console.log("<&><copyright&>".replace(/[<>&"]/g, function (c) {
        return character[c];
    }));
    // &lt;&amp;&gt;&lt;copyright&amp;&gt;
}

function StringSnipSerach() {
    // 09 search(regexp)
    // - regexp 这里会自动忽略 g 标识
    // 找到匹配, 返回第一个匹配的首字符位置
    var text = 'and in it he says "Any damn fool could"';
    console.log('text.search(/["\']/)" 结果', text.search(/["']/));
    // text.search(/["']/)" 结果 18

    // 找不到, 返回-1
    console.log('text.search(/[j]/) 结果', text.search(/[j]/));
    // text.search(/[j]/) 结果 -1
}

function StringSnipSlice() {
    // 10 slice(start, end)
    var text = 'and in it he says "Any damn fool could';

    // 从 start 位置开始, 到 end 位置结束
    console.log("text.slice(0, 3) 结果 ", text.slice(0, 3));
    // text.slice(0, 3) 结果  and
    console.log("text.slice(19, 32) 结果 ", text.slice(19, 32));
    // text.slice(19, 32) 结果  Any damn fool

    // end 参数可选, 默认 string.length
    console.log("text.slice(18) 结果 ", text.slice(18));
    // text.slice(18) 结果  "Any damn fool could

    // start 是负数, 将与 string.length 相加
    console.log("text.slice(-5) 结果 ", text.slice(-5));
    // text.slice(-5) 结果  could
}

function StringSnipSplit() {
    // 11 split(separator, limit)
    // - limit 限制分割片段的数量

    // separator 是空字符, 返回单字符数组
    var digits = '0123456789';
    console.log("'0123456789'.split('',5) 结果 ", digits.split('', 5));
    // '0123456789'.split('',5) 结果  [ '0', '1', '2', '3', '4' ]

    // sepearator 非空字符, 返回分隔符两边内容到数组
    var ip = '192.168.1.0';
    console.log("'192.168.1.0'.split('.') 结果 ", ip.split('.'));
    // '192.168.1.0'.split('.') 结果  [ '192', '168', '1', '0' ]
    console.log("'|a|b|c'.split('|') 结果 ", '|a|b|c'.split('|'));
    // '|a|b|c'.split('|') 结果  [ '', 'a', 'b', 'c' ]
    // 结果数组中第一个为空字符, 因为 |a 拆分后，左边为空

    // separator 可以为正则表达式
    console.log("'last, first ,middle'.split(/\\s*(,)\\s*)/ 结果 ", 'last, first ,middle'.split(/\s*(,)\s*/));
    // 'last, first ,middle'.split(/\s*(,)\s*)/ 结果  [ 'last', ',', 'first', ',', 'middle' ]
    // 分组捕获的内容也会加到数组, 这里 , 就是分组捕获内容, (,)
    console.log("'last, first ,middle'.split(/\\s*,\\s*)/ 结果 ", 'last, first ,middle'.split(/\s*,\s*/));
    // 不用分组, 'last, first ,middle'.split(/\s*,\s*)/ 结果  [ 'last', 'first', 'middle' ]
    console.log("'|a|b|c'.split(/\\|/) 结果 ", '|a|b|c'.split(/\|/));
    // '|a|b|c'.split(/\|/) 结果  [ '', 'a', 'b', 'c' ]
}

// 12 substring(start,end)
// 建议用 slice 替代

// 13 toLocaleLowerCase()
// 用于土耳其语

// 14 toLocaleUpperCase()
// 用于土耳其语

function StringSnipToLowerCase() {
    // 15 toLowerCase()
    console.log("'Cat'.toLowerCase() 结果 ", 'Cat'.toLowerCase());
    // 'Cat'.toLowerCase() 结果  cat
}

function StringSnipToUpperCase() {
    // 16 toUpperCase()
    console.log("'Cat'.toUpperCase() 结果 ", 'Cat'.toUpperCase());
    // 'Cat'.toUpperCase() 结果  CAT
}

function StringSnipFromCharCode() {
    // 17 fromCharCode(char...)
    // 根据一串数字编码返回一个字符串
    console.log("String.fromCharCode(67, 97, 116) 结果 ", String.fromCharCode(67, 97, 116));
    // String.fromCharCode(67, 97, 116) 结果  Cat
}

StringSnipCharAt();
StringSnipCharCodeAt();
StringSnipConcat();
StringSnipIndexOf();
StringSnipLastIndexOf();
StringSnipLocaleCompare();
StringSnipMatch();
StringSnipReplace();
StringSnipSerach();
StringSnipSlice();
StringSnipSplit();
StringSnipToLowerCase();
StringSnipToUpperCase();
StringSnipFromCharCode();