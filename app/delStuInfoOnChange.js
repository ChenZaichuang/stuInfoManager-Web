function delStuInfoOnChange()
{
    $(document).ready(function(){
        $("#stuNumber").keyup(function(){
            var regularExpressionForCheck = /^\d+(,\d+)*$/;
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
delStuInfoOnChange();

$( function() {
    $('#Submit').click( function() {
        var data = {content:$("#stuNumber").val()};
        $.get( "delStudent", data, success, "json" );
    } );

    function success( siteData ) {
        $("body").html(siteData.content);
        $("#showinfo").html(siteData.showInfo);
        if(siteData.result === true){
            // alert('true');
            jQuery.getScript("../app/indexScript.js")
                .done(function() {
                })
                .fail(function() {
                });
        }else{
            // alert('false');
            jQuery.getScript("../app/delStuInfoOnChange.js")
                .done(function() {
                })
                .fail(function() {
                });
        }

    }
} );