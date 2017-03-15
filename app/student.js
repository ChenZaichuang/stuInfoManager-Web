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