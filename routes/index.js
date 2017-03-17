const menuManager = require("../app/menuManager.js").menuManager;
const menuNodeHead = require("../app/menuNodeHead.js").menuNodeHead;
const menuNodeHead1 = require("../app/menuNodeHead1.js").menuNodeHead1;
const stuInfo = require("../app/stuInfo.js").stuInfo;
const menuNode1 = require("../app/menuNode1.js").menuNode1;
const menuNode2 = require("../app/menuNode2.js").menuNode2;
const Student = require('../app/student.js').Student;

var nodeHead = require('../app.js').nodeHead;
var nodeHead1 = require('../app.js').nodeHead1;
var node1 = require('../app.js').node1;
var node2 = require('../app.js').node2;
var node3 = require('../app.js').node3;
var node4 = require('../app.js').node4;
var stuInfoBase = require('../app.js').stuInfoBase;

exports.index=function(req,res){
    res.render("index",{title:"主页"});
}
exports.index1=function(req,res) {
    res.render("index1", {title:"主页1",printinfo:''});
}
exports.addStudent=function(req,res){
    var newNode = node1;
    var data={content:'要添加的学生信息: <input type="text" id="stuInfo"><br/>' +
    '<button id="Submit" disabled=true>确认添加</button>' +
    `<div id="showinfo">${newNode.printInfo.mainInterfaceMessage}</div>`,
    head:'<script src="../jquery.min.js"></script>' + '<script src="../app/stuInfoOnChange.js"></script>'};
    // console.log(req);
    res.send(data);
    // res.render("addStudent",{title:"添加学生信息",printinfo:newNode.printInfo.mainInterfaceMessage});
}
exports.checkStudent=function(req,res){  //这里调用结点
    var newNode = node1;
    var result;
    var inputString = req.query.content;
    var data={};

    result = newNode.programOfMenuNode(stuInfoBase , inputString);
    data.content = '<div id="showinfo"></div>'+'<button id="addStudent">添加学生</button>' +
        '<button id="printStudentScore">生成成绩单</button>' +
        '<button id="removeStudentScore">删除学生信息</button>' +
        '<button id="reviseStudentScore">修改学生信息</button>';
    data.head='<script src="../jquery.min.js"></script><script src="../app/indexScript.js"></script>';
    data.showInfo = result.printInfo;
    res.send(data);
}
exports.printStudentScore=function(req,res){
    var newNode = node2;
    var data={content:'要打印的学生学号: <input type="text" id="stuNumber"><br/>' +
    '<button id="Submit" disabled=true>打印</button>' +
    `<div id="showinfo">${newNode.printInfo.mainInterfaceMessage}</div>`,
     head:'<script src="../jquery.min.js"></script><script src="../app/stuNumOnChange.js"></script>'};
    // console.log(req);
    res.send(data);
}
exports.checkNumber=function(req,res){
    var newNode = node2;
    var result;
    var inputString = req.query.content;
    var data={};
    result = newNode.programOfMenuNode(stuInfoBase , inputString);
    data.content = '<div id="showinfo"></div>'+'<button id="addStudent">添加学生</button>' +
        '<button id="printStudentScore">生成成绩单</button>' +
        '<button id="removeStudentScore">删除学生信息</button>' +
        '<button id="reviseStudentScore">修改学生信息</button>';
    data.showInfo = result.printInfo;
    res.send(data);
}
exports.delStuInfo=function(req,res){
    var newNode = node3;
    var data={content:'要删除的学生学号: <input type="text" id="stuNumber"><br/>' +
    '<button id="Submit" disabled=true>删除</button>' +
    `<div id="showinfo">${newNode.printInfo.mainInterfaceMessage}</div>`};
    // console.log(req);
    res.send(data);
}

exports.delStudent=function(req,res){
    var inputString = req.query.content;
    var data={};
    var student = stuInfoBase.findStudent(inputString);
    if(student === null){
        data={content:'要删除的学生学号: <input type="text" id="stuNumber"><br/>' +
        '<button id="Submit" disabled=true>删除</button>' +
        `<div id="showinfo"></div>`};
        data.showInfo = `未找到学号为${inputString}的学生信息，请重新输入`;
        data.result = false;
    }else{
        var newNode = node3;
        var returnPack = newNode.programOfMenuNode(stuInfoBase , inputString);
        data.content = '<div id="showinfo"></div>'+'<button id="addStudent">添加学生</button>' +
            '<button id="printStudentScore">生成成绩单</button>' +
            '<button id="removeStudentScore">删除学生信息</button>' +
            '<button id="reviseStudentScore">修改学生信息</button>';
        data.showInfo = returnPack.printInfo;
        data.result = true;
    }
    res.send(data);
}

exports.findStudent=function(req,res){
    var newNode = node4;
    var data={content:'要修改的学生学号: <input type="text" id="stuNumber"><br/>' +
    '<button id="Submit" disabled=true>查找</button>' +
    `<div id="showinfo">${newNode.printInfo.mainInterfaceMessage}</div>`};
    res.send(data);
}

exports.newStuInfo=function(req,res){
    var newNode = node4;
    var inputString = req.query.content;
    var data={};
    var returnPack = newNode.programOfMenuNode(stuInfoBase , inputString);
    var student = returnPack.student;
    if(returnPack.result === true){
        data.content = '<p>更改信息为：<br></p>' +
            `姓名: <input type="text" id="name" value=${student.name}> 学号: <input type="text" id="number" value=${student.number} disabled=true><br>` +
            `民族: <input type="text" id="nation" value=${student.nation}> 班级: <input type="text" id="klass" value=${student.klass}><br>` +
            `数学: <input type="text" id="math" value=${student.subjectScore.math}> 语文: <input type="text" id="chinese" value=${student.subjectScore.chinese}><br>` +
            `英语: <input type="text" id="english"  value=${student.subjectScore.English}> 编程: <input type="text" id="programming"  value=${student.subjectScore.programming}><br>` +
            '<button id="Submit">确认修改</button>';
        data.result = true;
    }else{
        var data={content:'要修改的学生学号: <input type="text" id="stuNumber"><br/>' +
        '<button id="Submit" disabled=true>查找</button>' +
        `<div id="showinfo">${returnPack.printInfo}</div>`};
        data.result = false;
    }
    res.send(data);

//这里由于还要分输入的学号是否存在的情况讨论，所以还是用模板比较好
}

exports.reviseStudent=function(req,res){
    var inputString = req.query.content;
    var data={};
    var returnPack = stuInfoBase.reviseStuInfo(inputString);
    data.content = '<div id="showinfo"></div>'+'<button id="addStudent">添加学生</button>' +
        '<button id="printStudentScore">生成成绩单</button>' +
        '<button id="removeStudentScore">删除学生信息</button>' +
        '<button id="reviseStudentScore">修改学生信息</button>';
    data.showInfo = returnPack.printInfo;
    res.send(data);
}

exports.quit=function(req,res){
    res.render("quit",{title:"已退出"});
}