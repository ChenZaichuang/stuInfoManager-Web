$( function() {
    $('#addStudent').click( function() {
        var data = {};
        $.get( "addStudent", data, success, "json" );

    } );

    function success( siteData ) {
        $("body").html(siteData.content);
        jQuery.getScript("../app/stuInfoOnChange.js")
            .done(function() {
            })
            .fail(function() {
            });
    }

    $('#printStudentScore').click( function() {
        var data = {};
        $.get( "printStudentScore", data, success2, "json" );
    } );

    function success2( siteData ) {
        $("body").html(siteData.content);
        jQuery.getScript("../app/stuNumOnChange.js")
            .done(function() {
            })
            .fail(function() {
            });
    }

    $('#removeStudentScore').click( function() {
        var data = {};
        $.get( "delStuInfo", data, success3, "json" );
    } );

    function success3( siteData ) {
        $("body").html(siteData.content);
        jQuery.getScript("../app/delStuInfoOnChange.js")
            .done(function() {
            })
            .fail(function() {
            });
    }

    $('#reviseStudentScore').click( function() {
        var data = {};
        $.get( "findStudent", data, success4, "json" );
    } );

    function success4( siteData ) {
        $("body").html(siteData.content);
        jQuery.getScript("../app/findStuNumOnChange.js")
            .done(function() {
            })
            .fail(function() {
            });
    }
} );