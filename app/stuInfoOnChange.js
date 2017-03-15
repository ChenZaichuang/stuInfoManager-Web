function stuInfoOnChange(x)
{
    var stuInfoString=document.getElementById(x).value;
    var student = new Student();
    student.checkStuInfoString(stuInfoString);
    alert('qwer');
}