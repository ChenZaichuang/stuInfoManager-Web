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
        `<br>全班总分平均分：${(this.getClassAveScore(students)).toFixed(1)}` +
        `<br>全班总分中位数：${(this.getClassMedianScore(students)).toFixed(1)}</p>`;

        return printScoreString;
    }
    findStudent(StuNumberString){
        for(var i = 0; i < this.students.length; i++){
            if(Number(StuNumberString) === this.students[i].number){
                return this.students[i];
            }
        }
        return null;
    }
    deleteStudent(StuNumberString){
        var returnPack = this.checkStuNumberString(StuNumberString);
        if(returnPack.result == false){
            return false;
        }
        var students = returnPack.studentArray;
        for(var studentObj of students){
            for(var i = 0; i < this.students.length; i++){
                if(studentObj.number === this.students[i].number){
                    this.students.splice(i , 1);
                }
            }
        }
        return true;
    }
    getClassAveScore(students){
        var sum = 0;
        for(var student of students){
            sum += student.subjectScore.scoreSum;
        }
        console.log(sum);
        console.log(sum/students.length);
        return (students.length == 0) ? 0 : Math.round(sum/students.length*10)/10;
    }
    getClassMedianScore(students){
        if(students.length == 0){
            return 0.0;
        }
        var scoreSumArray = [];
        for(var student of this.students){
            scoreSumArray.push(student.subjectScore.scoreSum);
        }
        scoreSumArray.sort();
        return Math.round(scoreSumArray[Math.floor((scoreSumArray.length-1)/2)]*10)/10;
    }

}

module.exports.stuInfo = stuInfo;