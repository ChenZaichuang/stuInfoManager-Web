const Student = require('../app/student.js').Student;

describe("student calculateScoreSum test", () => {

    const name = '张三';
    const number = 123;
    const nation = '汉';
    const klass = 1;
    const subjectScore = {
        math : 60,
        chinese : 60,
        English : 60,
        programming : 60,
        averageScore : 0,
        scoreSum : 0
    };
    const expectResult = {
        math : 60,
        chinese : 60,
        English : 60,
        programming : 60,
        averageScore : 0,
        scoreSum : 240
    };
    const zhangSan = new Student (name , number , nation , klass , subjectScore);
    zhangSan.calculateScoreSum();
    it('should calcute and revise the scoreSum', () => {
        expect(zhangSan.subjectScore).toEqual(expectResult);
    });
});

describe("student calculateScoreSum test", () => {

    const name = '张三';
    const number = 123;
    const nation = '汉';
    const klass = 1;
    const subjectScore = {
        math : 60,
        chinese : 60,
        English : 60,
        programming : 60,
        averageScore : 0,
        scoreSum : 0
    };
    const expectResult = {
        math : 60,
        chinese : 60,
        English : 60,
        programming : 60,
        averageScore : 60,
        scoreSum : 240
    };
    const zhangSan = new Student (name , number , nation , klass , subjectScore);
    zhangSan.calculateScoreSum();
    zhangSan.calculateAveagerScore();
    it('should calcute and revise the scoreSum', () => {
        expect(zhangSan.subjectScore).toEqual(expectResult);
    });
});

describe("student checkStuInfoString test", () => {
    const zhangSan = new Student ();
    const inputString = '张三,1234,汉,1,math:60,chinese:70,English:80,programming:90';
    const expectResult = new Student ('张三' , 1234 , '汉' , 1 , {math : 60,
                                                                chinese : 70,
                                                                English : 80,
                                                                programming : 90,
                                                                averageScore : 75,
                                                                scoreSum : 300
                                                            });
    zhangSan.checkStuInfoString(inputString);

    it('should check the input student information string', () => {
        expect(zhangSan).toEqual(expectResult);
    });
});

describe("student printMyScore test", () => {

    const zhangSan = new Student ('张三' , 1234 , '汉' , 1 , {math : 60,
        chinese : 70,
        English : 80,
        programming : 90,
        averageScore : 0,
        scoreSum : 0
    });
    var expectResult = '张三|60|70|80|90|75|300';
    zhangSan.calculateScoreSum();
    zhangSan.calculateAveagerScore();

    it('should return the score information string of the student', () => {
        expect(zhangSan.printMyScore()).toEqual(expectResult);
    });
});