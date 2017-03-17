function stuInfoOnChange()
{
    $(document).ready(function(){
        $("#stuInfo").keyup(function(){
            // alert('zhixingle');
            var regularExpression = /^([\u4e00-\u9fa5]+),(\d+),([\u4e00-\u9fa5]+),(\d+),math:(\d+),chinese:(\d+),English:(\d+),programming:(\d+)$/;
            var stuInfoString = $("#stuInfo").val();
            // alert(stuInfoString);
            var result = stuInfoString.match(regularExpression);
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
stuInfoOnChange();
$( function() {
    $('#Submit').click( function() {
        var data = {content:$("#stuInfo").val()};
        $.get( "checkStudent", data, success, "json" );
    } );

    function success( siteData ) {
        // alert(siteData.content);
        // $("head").html(siteData.head);
        $("body").html(siteData.content);
        // alert(siteData.showInfo);
        $("#showinfo").html(siteData.showInfo);
        jQuery.getScript("../app/indexScript.js")
            .done(function() {
                ;
                // alert('66666');
                // /!* 执行成功后的处理 *!/
            })
            .fail(function() {
                ;
                // alert('77777');
                // /!* 执行失败后的处理 *!/
            });
    }
} );


