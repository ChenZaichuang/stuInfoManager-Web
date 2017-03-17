function findStuNumOnChange()
{
    $(document).ready(function(){
        $("#stuNumber").keyup(function(){
            var regularExpressionForCheck = /^\d*$/;
            var StuNumberString = $("#stuNumber").val();
            if(regularExpressionForCheck.test(StuNumberString)){
                $("#Submit").attr("disabled",false);
            }
            else {
                $("#Submit").attr("disabled",true);
            }
        });
    });
}
findStuNumOnChange();

$( function() {
    $('#Submit').click( function() {
        var data = {content:$("#stuNumber").val()};
        $.get( "newStuInfo", data, success, "json" );
    } );

    function success( siteData ) {
        $("body").html(siteData.content);
        $("#showinfo").html(siteData.showInfo);
        jQuery.getScript("../app/indexScript.js")//各种监听
            .done(function() {
            })
            .fail(function() {
            });
    }
} );