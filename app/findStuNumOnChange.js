function findStuNumOnChange()
{
    $(document).ready(function(){
        $("#stuNumber").keyup(function(){
            var regularExpressionForCheck = /^\d+$/;
            var StuNumberString = $("#stuNumber").val();
            // alert(StuNumberString);
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
        if(siteData.result === true){
            jQuery.getScript("../app/newStuInfoOnChange.js")//各种监听
                .done(function() {
                    // alert('newStuInfoOnChange.js');
                })
                .fail(function() {
                });
        }else{
            jQuery.getScript("../app/findStuNumOnChange.js")//各种监听
                .done(function() {
                    // alert('findStuNumOnChange.js');
                })
                .fail(function() {
                });
        }
    }
} );