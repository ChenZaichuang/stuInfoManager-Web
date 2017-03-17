function newStuInfoOnChange()
{
    $(document).ready(function(){
        $("input").keyup(function(){
            // alert('come in');
            var regularExpression = /^([\u4e00-\u9fa5]+),(\d+),([\u4e00-\u9fa5]+),(\d+),math:(\d+),chinese:(\d+),English:(\d+),programming:(\d+)$/;
            var StuInfoString = $("#name").val() + ',' + $("#number").val() + ',' + $("#nation").val() + ',' +
                                $("#klass").val() + ',' + 'math:' + $("#math").val() + ',' + 'chinese:' + $("#chinese").val() +
                                ',' + 'English:' + $("#english").val() + ',' + 'programming:' + $("#programming").val() ;
            // alert(StuInfoString);
            // console.log(StuInfoString);
            var result = StuInfoString.match(regularExpression);
            if(result != null) {
                // alert('合法');
                $("#Submit").attr("disabled",false);
            }else {
                // alert('不合法');
                $("#Submit").attr("disabled",true);
            }
        });
    });
}
newStuInfoOnChange();

$( function() {
    $('#Submit').click( function() {
        var StuInfoString = $("#name").val() + ',' + $("#number").val() + ',' + $("#nation").val() + ',' +
            $("#klass").val() + ',' + 'math:' + $("#math").val() + ',' + 'chinese:' + $("#chinese").val() +
            ',' + 'English:' + $("#english").val() + ',' + 'programming:' + $("#programming").val() ;

        var data = {content:StuInfoString};
        $.get( "reviseStudent", data, success, "json" );
    } );

    function success( siteData ) {
        $("body").html(siteData.content);
        $("#showinfo").html(siteData.showInfo);
        if(siteData.result === true){

        }else{
            jQuery.getScript("../app/indexScript.js")//各种监听
                .done(function() {
                })
                .fail(function() {
                });
        }

    }
} );