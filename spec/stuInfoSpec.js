const stuInfo = require("../app/stuInfo.js").stuInfo;
const Student = require("../app/student.js").Student;
describe("stuInfo addStudent test", () => {

    const zhangSan = new Student ('张三' , 1 , '汉' , 1 , {math : 60,
        chinese : 60,
        English : 60,
        programming : 60,
        averageScore : 60,
        scoreSum : 240
    });
    const liSi = new Student ('李四' , 2 , '汉' , 2 , {math : 80,
        chinese : 80,
        English : 80,
        programming : 80,
        averageScore : 80,
        scoreSum : 320
    });
    const stuInfoBase = new stuInfo();

    stuInfoBase.addStudent(zhangSan);
    stuInfoBase.addStudent(liSi);
    it('should add the students to the stuInfoBase', () => {
        expect(stuInfoBase.students).toEqual([zhangSan,liSi]);
    });
});

describe("stuInfo addStudent test", () => {

    const zhangSan = new Student ('张三' , 1 , '汉' , 1 , {math : 60,
        chinese : 60,
        English : 60,
        programming : 60,
        averageScore : 60,
        scoreSum : 240
    });
    const liSi = new Student ('李四' , 1 , '汉' , 2 , {math : 80,
        chinese : 80,
        English : 80,
        programming : 80,
        averageScore : 80,
        scoreSum : 320
    });
    const stuInfoBase = new stuInfo();

    stuInfoBase.addStudent(zhangSan);
    stuInfoBase.addStudent(liSi);
    it('should not add the students to the stuInfoBase because of the number conflict', () => {
        expect(stuInfoBase.students).toEqual([zhangSan]);
    });
});

describe("stuInfo checkStuNumberString test", () => {

    const stuNumString = '1,2';
    const stuInfoBase = new stuInfo();
    const zhangSan = new Student ('张三',1);
    const liSi = new Student ('李四',2);
    const wangWu  = new Student ('王五',3);

    stuInfoBase.addStudent(zhangSan);
    stuInfoBase.addStudent(liSi);
    stuInfoBase.addStudent(wangWu);

    it('should add the students to the stuInfoBase', () => {
        expect(stuInfoBase.checkStuNumberString(stuNumString)).toEqual([zhangSan , liSi]);
    });
});

describe("stuInfo getClassAveScore test", () => {

    const stuInfoBase = new stuInfo();
    const zhangSan = new Student ('张三' , 1 , '汉' , 1 , {math : 60,
        chinese : 60,
        English : 60,
        programming : 60,
        averageScore : 60,
        scoreSum : 240
    });
    const liSi = new Student ('李四' , 2 , '汉' , 2 , {math : 80,
        chinese : 80,
        English : 80,
        programming : 80,
        averageScore : 80,
        scoreSum : 320
    });
    const wangWu = new Student ('王五' , 3 , '汉' , 3 , {math : 76,
        chinese : 76,
        English : 76,
        programming : 76,
        averageScore : 76,
        scoreSum : 304
    });

    var expectResult = 288;

    stuInfoBase.addStudent(zhangSan);
    stuInfoBase.addStudent(liSi);
    stuInfoBase.addStudent(wangWu);

    it('should calculate and return the average of the students\' score sum', () => {
        expect(stuInfoBase.getClassAveScore()).toEqual(expectResult);
    });
});

describe("stuInfo getClassMedianScore test", () => {

    const stuInfoBase = new stuInfo();
    const zhangSan = new Student ('张三' , 1 , '汉' , 1 , {math : 60,
        chinese : 60,
        English : 60,
        programming : 60,
        averageScore : 60,
        scoreSum : 240
    });
    const liSi = new Student ('李四' , 2 , '汉' , 2 , {math : 80,
        chinese : 80,
        English : 80,
        programming : 80,
        averageScore : 80,
        scoreSum : 320
    });
    const wangWu = new Student ('王五' , 3 , '汉' , 3 , {math : 76,
        chinese : 76,
        English : 76,
        programming : 76,
        averageScore : 76,
        scoreSum : 304
    });
    var expectResult = 304;


    stuInfoBase.addStudent(zhangSan);
    stuInfoBase.addStudent(liSi);
    stuInfoBase.addStudent(wangWu);

    it('should calculate and return the median of the students\' score sum', () => {
        expect(stuInfoBase.getClassMedianScore()).toEqual(expectResult);
    });
});

describe("stuInfo printStuScore test", () => {

    const stuInfoBase = new stuInfo();
    const stuNumString = '1,2';
    const zhangSan = new Student ('张三' , 1 , '汉' , 1 , {math : 60,
        chinese : 60,
        English : 60,
        programming : 60,
        averageScore : 60,
        scoreSum : 240
    });
    const liSi = new Student ('李四' , 2 , '汉' , 2 , {math : 80,
        chinese : 80,
        English : 80,
        programming : 80,
        averageScore : 80,
        scoreSum : 320
    });
    const wangWu = new Student ('王五' , 3 , '汉' , 3 , {math : 76,
        chinese : 76,
        English : 76,
        programming : 76,
        averageScore : 76,
        scoreSum : 304
    });
    var expectResult = '成绩单\n' +
                        '姓名|数学|语文|英语|编程|平均分|总分|\n' +
                        '========================\n' +
                        '张三|60|60|60|60|60|240\n' +
                        '李四|80|80|80|80|80|320\n' +
                        '========================\n' +
                        '全班总分平均分：288\n' +
                        '全班总分中位数：304';


    stuInfoBase.addStudent(zhangSan);
    stuInfoBase.addStudent(liSi);
    stuInfoBase.addStudent(wangWu);

    it('should print the specified students\' score information correctly', () => {
        expect(stuInfoBase.printStuScore(stuNumString)).toEqual(expectResult);
    });
});
