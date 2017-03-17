(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function (process){
const menuNode = require("./menuNode.js").menuNode;
const stuInfo = require("./stuInfo.js").stuInfo;
var readline = require('readline');

class menuManager{
    setFarther(farther , child){
        farther.children.push(child);
        child.farther.push(farther);
    }
    runMenuNode(node ,stuInfoBase){
        var newNode = node;
        var result;
        var input = readline.createInterface(process.stdin, process.stdout);
        var inputString = '';
        input.setPrompt(newNode.printInfo.mainInterfaceMessage);
        input.prompt();
        input.on('line', function(line) {
            inputString = line.trim();
            if((result = newNode.programOfMenuNode(stuInfoBase , inputString)).result == true){
                newNode = result.node;
                if (newNode === null) {
                    input.close();
                    process.exit(0);
                }
                input.setPrompt(newNode.printInfo.mainInterfaceMessage);
                input.prompt();
            }
        });
    }
}
module.exports.menuManager = menuManager;
}).call(this,require('_process'))
},{"./menuNode.js":2,"./stuInfo.js":7,"_process":11,"readline":10}],2:[function(require,module,exports){
class menuNode{
    constructor(farther = [] , children = [] , printInfo = {}) {
        this.farther = farther;
        this.children = children;
        this.printInfo = printInfo;
    }
    programOfMenuNode(){
        alert('have not revised yet');
    }
}
module.exports.menuNode = menuNode;
},{}],3:[function(require,module,exports){
const menuNode = require("./menuNode.js").menuNode;
const Student = require('./student.js').Student;


class menuNode1 extends menuNode{
    constructor(){
        super([] , [] , {
            mainInterfaceMessage : '<p>请输入学生信息（格式：姓名,学号,民族,班级,学科:成绩,...），按回车提交：<br></p>',
            inputError : '<p>请按正确的格式输入（格式：姓名,学号,民族,班级,学科:成绩,...）：<br></p>'
        });
    }
    programOfMenuNode(stuInfoBase , inputString){
        var student = new Student();
        var returnPack = {};

        if(student.checkStuInfoString(inputString) == true){
            console.log('here2');
            stuInfoBase.addStudent(student);
            returnPack.result = true;
            returnPack.node = this.farther[1];
            returnPack.printInfo = `<p>学生${student.name}的成绩被添加<br></p>`;
        }else{
            console.log('here3');
            returnPack.result = false;
            returnPack.node = null;
            returnPack.printInfo = this.printInfo.inputError;
        }
        console.log('here4');
        return returnPack;
    }

}


module.exports.menuNode1 = menuNode1;
},{"./menuNode.js":2,"./student.js":9}],4:[function(require,module,exports){
const menuNode = require("./menuNode.js").menuNode;
const Student = require('./student.js').Student;


class menuNode2 extends menuNode{
    constructor(){
        super([] , [] , {
            mainInterfaceMessage : '<p>请输入要打印的学生的学号（格式： 学号, 学号,...），按回车提交：<br></p>',
            inputError : '<p>请按正确的格式输入要打印的学生的学号（格式： 学号, 学号,...），按回车提交：<br></p>'
        });
    }
    programOfMenuNode(stuInfoBase , inputString){
        var student = new Student();
        var returnPack = {};
        var string = '';
        if((string = stuInfoBase.printStuScore(inputString)) != ''){
            returnPack.result = true;
            returnPack.node = this.farther[1];
            returnPack.printInfo = string;
        }else{
            returnPack.result = false;
            returnPack.node = null;
            returnPack.printInfo = this.printInfo.inputError;
        }

        return returnPack;
    }
}


module.exports.menuNode2 = menuNode2;
},{"./menuNode.js":2,"./student.js":9}],5:[function(require,module,exports){
const menuNode = require("./menuNode.js").menuNode;

class menuNodeHead extends menuNode{
    constructor(){
        super([] , [] , {
            mainInterfaceMessage : '<p>1. 添加学生<br>2. 生成成绩单<br>请输入你的选择（1～2）：<br></p>',
            inputError : '<p>输入错误，请重新输入：<br></p>'
        });
    }
    programOfMenuNode(stuInfoBase , inputString){
        var regularExpressionForCheck = /^[1-2]$/g;
        var regularExpressionForExtract = /(^\d$)/g;
        var returnPack = {};
        if(regularExpressionForCheck.test(inputString) == true) {
            var result = inputString.match(regularExpressionForExtract)[0];
            returnPack.result = true;
            returnPack.node = this.children[Number(result)-1];
            returnPack.printInfo = '';
        }else{
            returnPack.result = false;
            returnPack.node = null;
            returnPack.printInfo = this.printInfo.inputError;
        }

        return returnPack;
    }
}


module.exports.menuNodeHead = menuNodeHead;

},{"./menuNode.js":2}],6:[function(require,module,exports){
const menuNode = require("./menuNode.js").menuNode;

class menuNodeHead1 extends menuNode{
    constructor(){
        super([] , [] , {
            mainInterfaceMessage : '<p>1. 添加学生<br>2. 生成成绩单<br>3. 退出\n请输入你的选择（1～3）：<br></p>',
            inputError : '<p>输入错误，请重新输入：<br></p>'
        });
    }
    programOfMenuNode(stuInfoBase , inputString){
        var regularExpressionForCheck = /^[1-3]$/g;
        var regularExpressionForExtract = /(^\d$)/g;
        var returnPack = {};
        if(regularExpressionForCheck.test(inputString) == true) {
            var result = inputString.match(regularExpressionForExtract)[0];
            returnPack.result = true;
            returnPack.node = (result === '3') ? null : this.children[Number(result)-1];
            returnPack.printInfo = '';
        }else{
            alert(this.printInfo.inputError);
            returnPack.result = false;
            returnPack.node = null;
            returnPack.printInfo = this.printInfo.inputError;
        }
        return returnPack;
    }
}


module.exports.menuNodeHead1 = menuNodeHead1;

},{"./menuNode.js":2}],7:[function(require,module,exports){
const Student = require("./student.js").Student;
class stuInfo{
    constructor(students = []){
        this.students = students;
    }
    addStudent(student){
        for (var i = 0; i < this.students.length; i++){
            if(this.students[i].number == student.number){
                break;
            }
        }
        if(i == this.students.length){
            this.students.push(student);
        }
    }
    checkStuNumberString(StuNumberString){
        var regularExpressionForCheck = /^\d+(,\d+)*$/;
        var regularExpressionForExtract = /(\d+)/g;
        var resultPack = {};
        console.log('StuNumberString='+StuNumberString);
        if(regularExpressionForCheck.test(StuNumberString)){
            var result = StuNumberString.match(regularExpressionForExtract);
            var studentArray = [];
            var temp = '';
            for (var number of result){
                temp = this.students.filter(function(studentObj){
                    if(studentObj.number == number){
                        return studentObj;
                    }
                })[0];
                if(temp != undefined){
                    studentArray.push(temp);
                }
            }
            resultPack.result = true;
            resultPack.studentArray = studentArray;
        }else{
            resultPack.result = false;
            resultPack.studentArray = [];
        }
        return resultPack;
    }
    printStuScore(StuNumberString){
        var returnPack = this.checkStuNumberString(StuNumberString);
        console.log(returnPack);
        if(returnPack.result == false){
            return '';
        }
        var students = returnPack.studentArray;
        var printScoreString = '<p>成绩单<br>姓名|数学|语文|英语|编程|平均分|总分|' +
                                '<br>========================';
        for(var studentObj of students){
            printScoreString += studentObj.printMyScore();
        }
        printScoreString += '<br>========================' +
        `<br>全班总分平均分：${this.getClassAveScore(students)}` +
        `<br>全班总分中位数：${this.getClassMedianScore(students)}</p>`;

        return printScoreString;
    }
    getClassAveScore(students){
        var sum = 0;
        for(var student of students){
            sum += student.subjectScore.scoreSum;
        }
        return (sum == 0) ? sum : sum/students.length;
    }
    getClassMedianScore(students){
        if(students.length == 0){
            return 0;
        }
        var scoreSumArray = [];
        for(var student of this.students){
            scoreSumArray.push(student.subjectScore.scoreSum);
        }
        scoreSumArray.sort();
        return scoreSumArray[Math.floor((scoreSumArray.length-1)/2)];
    }
}

module.exports.stuInfo = stuInfo;
},{"./student.js":9}],8:[function(require,module,exports){
const menuManager = require("./menuManager.js").menuManager;
const menuNodeHead = require("./menuNodeHead.js").menuNodeHead;
const menuNodeHead1 = require("./menuNodeHead1.js").menuNodeHead1;
const stuInfo = require("./stuInfo.js").stuInfo;
const menuNode1 = require("./menuNode1.js").menuNode1;
const menuNode2 = require("./menuNode2.js").menuNode2;
const Student = require('./student.js').Student;
function stuNumOnChange()
{
    $(document).ready(function(){
        $("#stuNumber").keyup(function(){
            var stuInfoBase = new stuInfo();
            var stuNumberString = document.getElementById("stuNumber").value;
            if(stuInfoBase.checkStuNumberString(stuNumberString).result){
                document.getElementById("Submit").disabled=false;
            }
            else {
                document.getElementById("Submit").disabled=true;
            }
        });
    });
}
stuNumOnChange();
},{"./menuManager.js":1,"./menuNode1.js":3,"./menuNode2.js":4,"./menuNodeHead.js":5,"./menuNodeHead1.js":6,"./stuInfo.js":7,"./student.js":9}],9:[function(require,module,exports){
class Student{
    constructor(name = '' , number = 0 , nation = '' , klass = 0 , subjectScore = {
        math : 0,
        chinese : 0,
        English : 0,
        programming : 0,
        averageScore : 0,
        scoreSum : 0
    }){
        this.name = name;
        this.number = number;
        this.nation = nation;
        this.klass = klass;
        this.subjectScore = subjectScore;
        console.log("go to here");
    }
    calculateScoreSum(){
        this.subjectScore.scoreSum = this.subjectScore.math+
                                        this.subjectScore.chinese +
                                        this.subjectScore.English +
                                        this.subjectScore.programming;
    }
    calculateAveagerScore(){
        this.subjectScore.averageScore = this.subjectScore.scoreSum/4;
    }
    checkStuInfoString(StuInfoString){
        var regularExpression = /^([\u4e00-\u9fa5]+),(\d+),([\u4e00-\u9fa5]+),(\d+),math:(\d+),chinese:(\d+),English:(\d+),programming:(\d+)$/;
        var result = StuInfoString.match(regularExpression);
        console.log('here1');
        if(result != null){
            this.name = result[1];
            this.number = Number(result[2]);
            this.nation = result[3];
            this.klass = Number(result[4]);
            this.subjectScore.math = Number(result[5]);
            this.subjectScore.chinese = Number(result[6]);
            this.subjectScore.English = Number(result[7]);
            this.subjectScore.programming = Number(result[8]);
            this.calculateScoreSum();
            this.calculateAveagerScore();
            return true;
        }else{
            return false;
        }
    }
    printMyScore(){
        return `<br>${this.name}|${this.subjectScore.math}|${this.subjectScore.chinese}|${this.subjectScore.English}|${this.subjectScore.programming}|${this.subjectScore.averageScore}|${this.subjectScore.scoreSum}`;
    }
}
module.exports.Student = Student;
},{}],10:[function(require,module,exports){

},{}],11:[function(require,module,exports){
// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };

},{}]},{},[8]);
