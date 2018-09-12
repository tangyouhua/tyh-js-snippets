// https://developer.mozilla.org/en-US/docs/Web/API/console#Outputting_text_to_the_console
console.log("Failed to open the specified link");

// 01 输出单个对象
var someObject1 = {str: "Some text", id: 5};
console.log(someObject1);
// 结果：
// { str: 'Some text', id: 5 }

// 02 输出多个对象
var car = "Dodge Charger";
var someObject2 = {str: "Some text", id: 5};
console.info("My first car was a", car, ". The object is:", someObject2);
// 结果：
// My first car was a Dodge Charger . The object is: { str: 'Some text', id: 5 }

// 03 用字符串替换
// %o 或 %O - JavaScript对象
// %d 或 %i - 整形
// %s - 字符串
// %f - 浮点型
for (var i = 0; i < 5; i++) {
    console.log("Hello, %s. You've called me %d times.", "Bob", i + 1);
}
// 结果：
// Hello, Bob. You've called me 1 times.
// Hello, Bob. You've called me 2 times.
// Hello, Bob. You've called me 3 times.
// Hello, Bob. You've called me 4 times.
// Hello, Bob. You've called me 5 times.

// 04 CSS 格式化输出
// 注意: 在 chrome console 中执行下列代码
console.log("This is %cMy stylish message", "color: yellow; font-style: italic; background-color: blue;padding: 2px");
// 结果：My stylish message 显示样式定义颜色
// This is My stylish message

// 05 分组显示(缩进)
console.log("This is the outer level");
console.group();
console.log("Level 2");
console.group();
console.log("Level 3");
console.warn("More of level 3");
console.groupEnd();
console.log("Back to level 2");
console.groupEnd();
console.debug("Back to the outer level");
// 结果：
// This is the outer level
//   Level 2
//     Level 3
//   Back to level 2
// Back to the outer level

//  06 调用堆栈
// 注意: 在 chrome console 中执行下列代码
function foo() {
    function bar() {
        console.trace();
    }

    bar();
}

foo();
// 结果：
// VM164:3 console.trace
// bar @ VM164:3
// foo @ VM164:5
// (anonymous) @ VM164:8
