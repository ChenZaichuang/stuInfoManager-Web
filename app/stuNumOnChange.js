function stuNumOnChange()
{
    $(document).ready(function(){
        $("#stuNumber").keyup(function(){
            // alert('执行了');
            var regularExpressionForCheck = /^\d+(,\d+)*$/;
            var StuNumberString = $("#stuNumber").val();
            // alert(StuNumberString);
            if(regularExpressionForCheck.test(StuNumberString)){
                // alert('合法');
                $("#Submit").attr("disabled",false);
            }
            else {
                // alert('不合法');
                $("#Submit").attr("disabled",true);
            }
        });
    });
}
stuNumOnChange();

$( function() {
    $('#Submit').click( function() {
        var data = {content:$("#stuNumber").val()};
        $.get( "checkNumber", data, success, "json" );
    } );

    function success( siteData ) {
//         $("head").html(siteData.head);
        $("body").html(siteData.content);
        $("#showinfo").html(siteData.showInfo);
        jQuery.getScript("../app/indexScript.js")
            .done(function() {
                // alert('66666');
                /* 执行成功后的处理 */
            })
            .fail(function() {
                // alert('77777');
                /* 执行失败后的处理 */
            });
    }
} );