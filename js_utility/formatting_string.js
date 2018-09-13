// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
var TemplateLiterals = {
    // 01 多行字符串
    multilineStrings: function () {
        console.log('string text line 1\n' +
            'string text line 2');
        // string text line 1
        // string text line 2

        console.log(`string text line 1
string text line 2`);
        // string text line 1
        // string text line 2
    },

    // 02 表达式插值
    expressionInterpolation: function () {
        var a = 5;
        var b = 10;
        console.log('Fifteen is ' + (a + b) + ' and\nnot ' + (2 * a + b) + '.');
        // Fifteen is 15 and
        // not 20.
        // 用 `` 换行, 插值
        console.log(`Fifteen is ${a + b} and
not ${2 * a + b}.`);
        // Fifteen is 15 and
        // not 20.
    },

    // 03 嵌套模板
    nestingTemplates: function () {
        var templates = {
            // ES5
            Test1: function (isLargeScreen, item) {
                var classes = 'header';
                classes += (isLargeScreen ?
                    '' : item.isCollapsed ?
                        ' icon-expander' : ' icon-collapser');
                console.log(classes);
            },

            // ES5 模板
            Test2: function (isLargeScreen, item) {
                const classes = `header ${ isLargeScreen ? '' :
                    (item.isCollapsed ? 'icon-expander' : 'icon-collapser') }`;
                console.log(classes);
            },

            // ES5 嵌套模板
            Test3: function (isLargeScreen, item) {
                const classes = `header ${ isLargeScreen ? '' :
                    `icon-${item.isCollapsed ? 'expander' : 'collapser'}` }`;
                console.log(classes);
            },
        };

        templates.Test1(true, {isCollapsed: true});
        templates.Test1(false, {isCollapsed: true});
        templates.Test1(false, {isCollapsed: false});
        // header
        // header icon-expander
        // header icon-collapser

        templates.Test2(true, {isCollapsed: true});
        templates.Test2(false, {isCollapsed: true});
        templates.Test2(false, {isCollapsed: false});
        // header
        // header icon-expander
        // header icon-collapser

        templates.Test3(true, {isCollapsed: true});
        templates.Test3(false, {isCollapsed: true});
        templates.Test3(false, {isCollapsed: false});
        // header
        // header icon-expander
        // header icon-collapser
    },

    // 04 标记(tagged)模板
    taggedTemplates: function () {
        var templates = {
            // return 语句
            Test1: function (person, age) {
                function myTag(strings, personExp, ageExp) {
                    var str0 = strings[0]; // "That "
                    var str1 = strings[1]; // " is a "
                    var ageStr;
                    if (ageExp > 99) {
                        ageStr = 'centenarian';
                    } else {
                        ageStr = 'youngster';
                    }
                    // We can even return a string built using a template literal
                    return `${str0}${personExp}${str1}${ageStr}.`;
                }

                var output = myTag`That ${ person } is a ${ age }`;
                console.log(output);
            },

            // 不用 return 语句
            Test2: function () {
                function template(strings, ...keys) {
                    // strings [ '', '', '', '!' ]
                    // keys [ 0, 1, 0 ]
                    return (function (...values) {
                        // values [ 'Y', 'A' ]
                        var dict = values[values.length - 1] || {}; // 'A'
                        var result = [];
                        keys.forEach(function (key, i) {
                                result.push(strings[i]);
                                var value = Number.isInteger(key) ? values[key] : dict[key];
                                result.push(value);
                            }
                        );
                        return result.join('');
                    });
                }

                var t1Closure = template`${0}${1}${0}!`;
                console.log(t1Closure('Y', 'A')); // YAY
                var t2Closure = template`${0} ${'foo'}!`;
                console.log(t2Closure('Hello', {foo: 'World'})); // Hello World
            },
        };

        templates.Test1('Mike', 28);
        // That Mike is a youngster.
        templates.Test1('Gaga', 103);
        // That Gaga is a centenarian.
        templates.Test2();
    },

    // 05 原始(raw)字符串
    rawStrings: function () {
        function tag(strings) {
            console.log(strings.raw[0]);
        }

        tag`string text line 1 \n string text line 2`;

        var str = String.raw`Hi\n${2 + 3}!`;
        console.log("String.raw`Hi\\n${2+3}!` = ", str);
        // "Hi\n5!"

        console.log("str.length = ", str.length);
        // 6

        console.log("str.split('').join(',') = ", str.split('').join(','));
        // "H,i,\,n,5,!"
    },
};

// TemplateLiterals.multilineStrings();
// TemplateLiterals.expressionInterpolation();
// TemplateLiterals.nestingTemplates();
// TemplateLiterals.taggedTemplates();
// TemplateLiterals.rawStrings();
