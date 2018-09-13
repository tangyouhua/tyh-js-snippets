// 表达式与运算符
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators

// 01 基本表达式(Primary Expression)
var primaryExpression = {
    // 01-1 this
    // 函数定义位置的不同 this 的值也不同
    // strict mode, 非 strict mode 也会影响 this 的值
    // - 函数调用决定了 this 值, 调用地方不同 this 值也可能不同
    // - ES5 提供的 bind 方法可以设置 this 值
    // - ES2015 提供的 箭头函数(arrow function) 保持 this 的值为调用的上下文
    TestThisObjMethod: function () {
        // this 绑定对象上下文
        var test = {
            prop: 42,
            func: function () {
                return this.prop;
            },
        };
        console.log(test.func()); // 42

        // 先定义对象, 后绑定方法
        var o = {prop: 37};

        function independent() {
            return this.prop;
        }

        o.f = independent;
        console.log(o.f()); // 37

        // this 只访问最近的成员
        o.b = {g: independent, prop: 42}; // 最近的成员是 o.b
        console.log(o.b.g()); // 42
    },

    // 函数上下文
    TestThisFuncCtx: function () {
        function f1() {
            return this;
        }

        // Node 环境下
        console.log(f1() === global); // true

        // 浏览器环境下
        // console.log(f1() === window); // true
    },

    // 函数上下文 strict 模式
    // this 默认值为 undefined
    TestThisFuncStrictCtx: function () {
        function f1() {
            'use strict';
            return this;
        }

        // Node 环境下
        console.log(f1() === global); // false
        console.log(f1() === undefined); // true

        // 浏览器环境下
        // console.log(f1() === window); // true
    },

    // 函数上下文传递 this 值
    // 使用 call, apply 方法
    TestThisCallApply: function () {
        var obj = {a: 'Custom'};
        var a = 'Global';

        function whatsThis() {
            return this.a;
        }

        console.log('whatsThis ', whatsThis());
        console.log('whatsThis.call(obj) ', whatsThis.call(obj));
        console.log('whatsThis.apply(obj) ', whatsThis.apply(obj));
        // whatsThis  undefined
        // whatsThis.call(obj)  Custom
        // whatsThis.apply(obj)  Custom
    },

    // 带参数调用 call, apply 方法
    TestThisCallApplyArg: function () {
        function add(c, d) {
            return this.a + this.b + c + d;
        }

        var o = {a: 1, b: 3};

        console.log('add.call(o, 5, 7) ', add.call(o, 5, 7));
        // apply 参数
        // - thisArg The object to be used as the this object.
        // - argArray A set of arguments to be passed to the function.
        // 对象 o 作为 thisArg 传入
        // 数组 [10, 20] 成员作为 argArray 传入
        console.log('add.apply(o, [10, 20]) ', add.apply(o, [10, 20]));
        // add.call(o, 5, 7)  16
        // add.apply(o, [10, 20])  34
    },

    // 使用 bind 方法绑定 this 值
    // ES5 bind 方法
    TestThisBind: function () {
        function f() {
            return this.a;
        }

        var g = f.bind({a: 'azerty'});
        console.log(g()); // azerty

        var h = g.bind({a: 'yoo'}); // bind 只在第一次起效
        console.log(h()); // azerty

        var o = {a: 37, f: f, g: g, h: h};
        console.log(o.a, o.f(), o.g(), o.h()); // 37,37, azerty, azerty
    },

    // 箭头函数没有 this, arguments, super 或 new.target
    // 也不能用 call, bind 方法设置 this
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
    TestThisArrowFunc: function () {
        var globalObject = this;
        var foo = (() => this); // 返回 this
        console.log(foo() === globalObject); // true
        // 作为对象的方法调用
        var obj = {func: foo};
        console.log(obj.func() === globalObject); // true
        // 试着用 call 方法设置 this
        console.log(foo.call(obj) === globalObject); // true
        // 试着用 bind 方法设置 this
        foo = foo.bind(obj);
        console.log(foo() === globalObject); // true

        obj = {
            bar: function () {
                return (() => this);
            }
        };
        var fn = obj.bar(); // 调用的时候, 返回 bar 函数中的 this, 即 obj 对象
        console.log(fn() === obj); // true

        var fn2 = obj.bar; // 注意, 这次没调用
        console.log(fn2()() === global); // true
        // 这里调用了两个匿名函数
        // fn2() this 指向 obj
        // fn2() this 指向 global
    },

    // 使用原型链
    TestThisProtoChain: function () {
        var o = {
            f: function () {
                return this.a + this.b;
            }
        };
        var p = Object.create(o); // 对象 o 作为原型 Prototype 创建对象 p
        p.a = 1;
        p.b = 4;

        console.log(p.f()); // 5
    },

    // setter getter
    TestThisSetGet: function () {
        // this 与 get 调用时的对象绑定
        // 这里 this 是 o
        function sum() {
            return this.a + this.b + this.c;
        }

        var o = {
            a: 1,
            b: 2,
            c: 3,
            // this 与 get 调用时的对象绑定
            // 这里 this 是 o
            get average() {
                return (this.a + this.b + this.c) / 3;
            }
        };

        Object.defineProperty(o, 'sum', {
            get: sum, enumberable: true, configurable: true
        });

        console.log(o.average, o.sum); // 2 6
    },

    // 构造函数
    // new 新建一个对象时, this 绑定到新创建的对象
    TestThisConstructor: function () {
        function C() {
            this.a = 37;
        }

        var o = new C();
        console.log(`C.a = ${o.a}`); // 37

        function C2() {
            this.a = 37; // dead code
            return {a: 38}; // new 调用得到 return 语句返回的对象
        }

        o = new C2();
        console.log(`C2.a = ${o.a}`); // 38
    },

    // DOM 事件处理函数
    // this 绑定触发的事件

    // 内联事件处理
    // this 绑定监听的 DOM 元素
};

// primaryExpression.TestThisObjMethod();
// primaryExpression.TestThisFuncCtx();
// primaryExpression.TestThisFuncStrictCtx();
// primaryExpression.TestThisCallApply();
// primaryExpression.TestThisCallApplyArg();
// primaryExpression.TestThisBind();
// primaryExpression.TestThisArrowFunc();
// primaryExpression.TestThisProtoChain();
// primaryExpression.TestThisSetGet();
// primaryExpression.TestThisConstructor();

// 02 左手边表达式

// 03 递增,递减

// 04 一元运算符

// 05 算数运算符

// 06 关系运算符

// 07 等式运算符

// 08 位移运算符

// 09 二进制位运算符

// 10 二进制逻辑运算符

// 11 条件(三元)运算符

// 12 赋值运算符

// 13 逗号分隔符