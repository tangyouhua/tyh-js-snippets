// 01 var 语句
var aGlobalVariable = 'global';

function InnerFunc() {
    var aPrivateVariable = 'private';
    console.log("在函数内部访问全局变量 ", aGlobalVariable);
}

InnerFunc(); // 在函数内部访问全局变量  global

// console.log("访问局部变量 ", aPrivateVariable);
// 抛出异常 ReferenceError: aPrivateVariable is not defined

// 02 语句
var stmt = {
    // switch 语句
    SwitchStmt: function (switchLabel) {
        switch (switchLabel) {
            case "A":
                console.log("case A");
                break;
            case "B":
                console.log("case B");
                break;
            default:
                console.log("default");
        }
        // case A
    },

    // while 语句
    WhileStmt: function (whileLoopNum) {
        var count = 0;
        while (count < whileLoopNum) {
            console.log("While counter ", count++);
        }
        // While counter  0
        // While counter  1
        // While counter  2
    },

    // do/while 语句
    DoWhileStmt: function (whileLoopNum) {
        var count = 0;
        do {
            console.log("Do while counter ", count++);
        } while (count < whileLoopNum);
        // Do while counter  0
        // Do while counter  1
        // Do while counter  2
    },

    // for 语句
    ForStmt: function (forLoopNum) {
        for (var i = 0; i < forLoopNum; i++) {
            console.log("For counter ", i);
        }
        // For counter  0
        // For counter  1
        // For counter  2
    },

    // for in 语句
    ForInStmt: function (obj) {
        console.log(obj);
        // { SwitchStmt: [Function: SwitchStmt],
        //     WhileStmt: [Function: WhileStmt],
        //     DoWhileStmt: [Function: DoWhileStmt],
        //     ForStmt: [Function: ForStmt],
        //     ForInStmt: [Function: ForInStmt],
        //     IfStmt: [Function: IfStmt] }
        for (const myvar in obj) {
            console.log(myvar);
        }
        // SwitchStmt
        // WhileStmt
        // DoWhileStmt
        // ForStmt
        // ForInStmt
        // IfStmt
    },

    // if 语句
    IfStmt: function (ifLabel) {
        if (ifLabel) {
            console.log("ifLabel 判定 真");
        }
        else {
            console.log("ifLabel 判定 假");
        }
    },
};

stmt.DoWhileStmt(3);
stmt.WhileStmt(3);
stmt.ForStmt(3);
stmt.IfStmt(true);
stmt.SwitchStmt('A');
stmt.ForInStmt(stmt);

// 03 假 值
var label = {
    falsyValues: [false, null, undefined, '', 0, NaN],
    truthValues: [true, 'a string', 'false', 1],

    TestFalsy: function () {
        for (var value of this.falsyValues) {
            this.Display(value);
        }
    },

    TestTruth: function () {
        for (var value of this.truthValues) {
            this.Display(value);
        }
    },
    // false 值为假
    // null 值为假
    // undefined 值为假
    // '' 值为假
    // 0 值为假
    // NaN 值为假

    Display: function (value) {
        var type = typeof(value);
        var strValue = value;
        if (type === 'string') {
            strValue = "'" + value + "'";
        }
        console.log("%s 值为%s", strValue, value ? '真' : '假');
    }
    // true 值为真
    // 'a string' 值为真
    // 'false' 值为真
    // 1 值为真
};

label.TestFalsy();
label.TestTruth();

// 04 异常处理
var exception = {
    ThrowError: function () {
        throw "throw 语句抛出的错误";
    },

    TryCatch: function () {
        try {
            this.ThrowError();
        }
        catch (err) {
            console.log("捕捉到错误: " + err);
        }
    }
    // 捕捉到错误: throw 语句抛出的错误
};

exception.TryCatch();




