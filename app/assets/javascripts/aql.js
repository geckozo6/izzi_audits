
        function calcs() {
            document.getElementById("Singlecal").style.display = 'block';
            document.getElementById("DoubleCal").style.display = 'none';
        }
        function calcd() {
            document.getElementById("Singlecal").style.display = 'none';
            document.getElementById("DoubleCal").style.display = 'block';
        }




        $(window).load(function () {
        $('#cAQL21').val("0");
        $('#cAQL22').val("6");
        $('#cAQL23').val("7");
    });



    function cLavelTypeChangeaql() {

    }

    function GetAql1v() {
    
    }

    function FillAQLSucceed(result) {
        try {
            if (IsNull(result)) {
                jAlert(NoDataFromServer, AppTitle);
                return;
            }

            if (result.IsError) {
                jAlert(result.ErrorMessage, AppTitle);
                return;
            }
            $('#txtAcceptPoints').val(result.Value[0].AC);
            $('#txtRejectPoint').val(result.Value[0].RE);
            $('#txtAcceptPoints0').val(result.Value[1].AC);
            $('#txtRejectPoint0').val(result.Value[1].RE);
            $('#txtAcceptPoints1').val(result.Value[2].AC);
            $('#txtRejectPoint1').val(result.Value[2].RE);
        }
        catch (err) {
            jAlert(err.description, AppTitle);
        }
        finally {
            FILLSAMPLESIZE();
            ShowHideProgress(false);
        }
    }
    function FILLSAMPLESIZE() {
        debugger;
        var samp = $('#t1SSz2').val();
        var maj = $('#cAQL22 option:selected').text();
        var min = $('#cAQL23 option:selected').text();
        debugger;
        if (samp == 2) {
            if (maj == 0.25) { $('#majsize1').val(32); $('#majsize2').val(32); } else if (maj == 0.40) { $('#majsize1').val(32); $('#majsize2').val(32); }
            else if (maj == 0.65) { $('#majsize1').val(20); $('#majsize2').val(20); } else if (maj == 1.0) { $('#majsize1').val(13); $('#majsize2').val(13); }
            else if (maj == 1.5) { $('#majsize1').val(8); $('#majsize2').val(8); } else if (maj == 2.5) { $('#majsize1').val(5); $('#majsize2').val(5); }
            else if (maj == 4.0) { $('#majsize1').val(2); $('#majsize2').val(2); } else if (maj == 6.5) { $('#majsize1').val(2); $('#majsize2').val(2); }
            else if (maj == 10) { $('#majsize1').val(3); $('#majsize2').val(6); } else if (maj == 15) { $('#majsize1').val(2); $('#majsize2').val(4); }
            else if (maj == 25) { $('#majsize1').val(2); $('#majsize2').val(4); } else if (maj == 40) { $('#majsize1').val(2); $('#majsize2').val(4); }
            else if (maj == 65) { $('#majsize1').val(2); $('#majsize2').val(4); }
        }
        if (samp == 2) {
             if (min == 0.25) { $('#minsize1').val(32); $('#minsize2').val(32); }
            else if (min == 0.40) { $('#minsize1').val(32); $('#minsize2').val(32); } else if (min == 0.65) { $('#minsize1').val(20); $('#minsize2').val(20); }
            else if (min == 1.0) { $('#minsize1').val(13); $('#minsize2').val(13); } else if (min == 1.5) { $('#minsize1').val(8); $('#minsize2').val(8); }
            else if (min == 2.5) { $('#minsize1').val(5); $('#minsize2').val(5); } else if (min == 4.0) { $('#minsize1').val(2); $('#minsize2').val(2); }
            else if (min == 6.5) { $('#minsize1').val(2); $('#minsize2').val(2); } else if (min == 10) { $('#minsize1').val(3); $('#minsize2').val(6); }
            else if (min == 15) { $('#minsize1').val(2); $('#minsize2').val(4); }else if (min == 25) { $('#minsize1').val(2); $('#minsize2').val(4); }
            else if (min == 40) { $('#minsize1').val(2); $('#minsize2').val(4); } else if (min == 65) { $('#minsize1').val(2); $('#minsize2').val(4); }
        }
        if (samp == 3) {
            if (maj == 0.25) { $('#majsize1').val(32); $('#majsize2').val(32); } else if (maj == 0.40) { $('#majsize1').val(32); $('#majsize2').val(32); }
            else if (maj == 0.65) { $('#majsize1').val(20); $('#majsize2').val(20); } else if (maj == 1.0) { $('#majsize1').val(13); $('#majsize2').val(13); }
            else if (maj == 1.5) { $('#majsize1').val(8); $('#majsize2').val(8); } else if (maj == 2.5) { $('#majsize1').val(5); $('#majsize2').val(5); }
            else if (maj == 4.0) { $('#majsize1').val(2); $('#majsize2').val(2); } else if (maj == 6.5) { $('#majsize1').val(8); $('#majsize2').val(8); }
            else if (maj == 10) { $('#majsize1').val(3); $('#majsize2').val(6); } else if (maj == 15) { $('#majsize1').val(3); $('#majsize2').val(6); }
            else if (maj == 25) { $('#majsize1').val(3); $('#majsize2').val(6); } else if (maj == 40) { $('#majsize1').val(3); $('#majsize2').val(6); }
            else if (maj == 65) { $('#majsize1').val(3); $('#majsize2').val(6); }
        }
        if (samp == 3) {
             if (min == 0.25) { $('#minsize1').val(32); $('#minsize2').val(32); }
            else if (min == 0.40) { $('#minsize1').val(32); $('#minsize2').val(32); } else if (min == 0.65) { $('#minsize1').val(20); $('#minsize2').val(20); }
            else if (min == 1.0) { $('#minsize1').val(13); $('#minsize2').val(13); } else if (min == 1.5) { $('#minsize1').val(8); $('#minsize2').val(8); }
            else if (min == 2.5) { $('#minsize1').val(5); $('#minsize2').val(5); } else if (min == 4.0) { $('#minsize1').val(2); $('#minsize2').val(2); }
            else if (min == 6.5) { $('#minsize1').val(8); $('#minsize2').val(8); } else if (min == 10) { $('#minsize1').val(3); $('#minsize2').val(6); }
            else if (min == 15) { $('#minsize1').val(3); $('#minsize2').val(6); } else if (min == 25) { $('#minsize1').val(3); $('#minsize2').val(6); }
            else if (min == 40) { $('#minsize1').val(3); $('#minsize2').val(6); } else if (min == 65) { $('#minsize1').val(3); $('#minsize2').val(6); }
        }
        if (samp == 5) {
            if (maj == 0.25) { $('#majsize1').val(32); $('#majsize2').val(32); } else if (maj == 0.40) { $('#majsize1').val(32); $('#majsize2').val(32); }
            else if (maj == 0.65) { $('#majsize1').val(20); $('#majsize2').val(20); } else if (maj == 1.0) { $('#majsize1').val(13); $('#majsize2').val(13); }
            else if (maj == 1.5) { $('#majsize1').val(8); $('#majsize2').val(8); } else if (maj == 2.5) { $('#majsize1').val(5); $('#majsize2').val(5); }
            else if (maj == 4.0) { $('#majsize1').val(2); $('#majsize2').val(2); } else if (maj == 6.5) { $('#majsize1').val(8); $('#majsize2').val(8); }
            else if (maj == 10) { $('#majsize1').val(5); $('#majsize2').val(10); } else if (maj == 15) { $('#majsize1').val(5); $('#majsize2').val(10); }
            else if (maj == 25) { $('#majsize1').val(5); $('#majsize2').val(10); } else if (maj == 40) { $('#majsize1').val(5); $('#majsize2').val(10); }
            else if (maj == 65) { $('#majsize1').val(5); $('#majsize2').val(10); }
        }
        if (samp == 5) {
            if (min == 0.25) { $('#minsize1').val(32); $('#minsize2').val(32); }
            else if (min == 0.40) { $('#minsize1').val(32); $('#minsize2').val(32); } else if (min == 0.65) { $('#minsize1').val(20); $('#minsize2').val(20); }
            else if (min == 1.0) { $('#minsize1').val(13); $('#minsize2').val(13); } else if (min == 1.5) { $('#minsize1').val(8); $('#minsize2').val(8); }
            else if (min == 2.5) { $('#minsize1').val(5); $('#minsize2').val(5); } else if (min == 4.0) { $('#minsize1').val(2); $('#minsize2').val(2); }
            else if (min == 6.5) { $('#minsize1').val(8); $('#minsize2').val(8); } else if (min == 10) { $('#minsize1').val(5); $('#minsize2').val(10); }
            else if (min == 15) { $('#minsize1').val(5); $('#minsize2').val(10); } else if (min == 25) { $('#minsize1').val(5); $('#minsize2').val(10); }
            else if (min == 40) { $('#minsize1').val(5); $('#minsize2').val(10); } else if (min == 65) { $('#minsize1').val(5); $('#minsize2').val(10); }
        }
        if (samp == 8) {
            if (maj == 0.25) { $('#majsize1').val(32); $('#majsize2').val(32); } else if (maj == 0.40) { $('#majsize1').val(32); $('#majsize2').val(32); }
            else if (maj == 0.65) { $('#majsize1').val(20); $('#majsize2').val(20); } else if (maj == 1.0) { $('#majsize1').val(13); $('#majsize2').val(13); }
            else if (maj == 1.5) { $('#majsize1').val(8); $('#majsize2').val(8); } else if (maj == 2.5) { $('#majsize1').val(20); $('#majsize2').val(20); }
            else if (maj == 4.0) { $('#majsize1').val(13); $('#majsize2').val(13); } else if (maj == 6.5) { $('#majsize1').val(8); $('#majsize2').val(8); }
            else if (maj == 10) { $('#majsize1').val(8); $('#majsize2').val(16); } else if (maj == 15) { $('#majsize1').val(8); $('#majsize2').val(16); }
            else if (maj == 25) { $('#majsize1').val(8); $('#majsize2').val(16); } else if (maj == 40) { $('#majsize1').val(8); $('#majsize2').val(16); }
            else if (maj == 65) { $('#majsize1').val(8); $('#majsize2').val(16); }
        }
        if (samp == 8) {
             if (min == 0.25) { $('#minsize1').val(32); $('#minsize2').val(32); }
            else if (min == 0.40) { $('#minsize1').val(32); $('#minsize2').val(32); } else if (min == 0.65) { $('#minsize1').val(20); $('#minsize2').val(20); }
            else if (min == 1.0) { $('#minsize1').val(13); $('#minsize2').val(13); } else if (min == 1.5) { $('#minsize1').val(8); $('#minsize2').val(8); }
            else if (min == 2.5) { $('#minsize1').val(20); $('#minsize2').val(20); } else if (min == 4.0) { $('#minsize1').val(13); $('#minsize2').val(13); }
            else if (min == 6.5) { $('#minsize1').val(8); $('#minsize2').val(8); } else if (min == 10) { $('#minsize1').val(8); $('#minsize2').val(16); }
            else if (min == 15) { $('#minsize1').val(8); $('#minsize2').val(16); } else if (min == 25) { $('#minsize1').val(8); $('#minsize2').val(16); }
            else if (min == 40) { $('#minsize1').val(8); $('#minsize2').val(16); } else if (min == 65) { $('#minsize1').val(8); $('#minsize2').val(16); }
        }
        if (samp == 13) {
            if (maj == 0.25) { $('#majsize1').val(32); $('#majsize2').val(32); } else if (maj == 0.40) { $('#majsize1').val(32); $('#majsize2').val(32); }
            else if (maj == 0.65) { $('#majsize1').val(20); $('#majsize2').val(20); } else if (maj == 1.0) { $('#majsize1').val(13); $('#majsize2').val(13); }
            else if (maj == 1.5) { $('#majsize1').val(32); $('#majsize2').val(32); } else if (maj == 2.5) { $('#majsize1').val(20); $('#majsize2').val(20); }
            else if (maj == 4.0) { $('#majsize1').val(13); $('#majsize2').val(13); } else if (maj == 6.5) { $('#majsize1').val(13); $('#majsize2').val(13); }
            else if (maj == 10) { $('#majsize1').val(13); $('#majsize2').val(26); } else if (maj == 15) { $('#majsize1').val(13); $('#majsize2').val(26); }
            else if (maj == 25) { $('#majsize1').val(13); $('#majsize2').val(26); } else if (maj == 40) { $('#majsize1').val(13); $('#majsize2').val(26); }
            else if (maj == 65) { $('#majsize1').val(13); $('#majsize2').val(26); }
        }
        if (samp == 13) {
            if (min == 0.25) { $('#minsize1').val(32); $('#minsize2').val(32); }
            else if (min == 0.40) { $('#minsize1').val(32); $('#minsize2').val(32); } else if (min == 0.65) { $('#minsize1').val(20); $('#minsize2').val(20); }
            else if (min == 1.0) { $('#minsize1').val(13); $('#minsize2').val(13); } else if (min == 1.5) { $('#minsize1').val(32); $('#minsize2').val(32); }
            else if (min == 2.5) { $('#minsize1').val(20); $('#minsize2').val(20); } else if (min == 4.0) { $('#minsize1').val(13); $('#minsize2').val(13); }
            else if (min == 6.5) { $('#minsize1').val(13); $('#minsize2').val(13); } else if (min == 10) { $('#minsize1').val(13); $('#minsize2').val(26); }
            else if (min == 15) { $('#minsize1').val(13); $('#minsize2').val(26); } else if (min == 25) { $('#minsize1').val(13); $('#minsize2').val(26); }
            else if (min == 40) { $('#minsize1').val(13); $('#minsize2').val(26); } else if (min == 65) { $('#minsize1').val(13); $('#minsize2').val(26); }
        }
        if (samp == 20) {
            if (maj == 0.25) { $('#majsize1').val(32); $('#majsize2').val(32); } else if (maj == 0.40) { $('#majsize1').val(32); $('#majsize2').val(32); }
            else if (maj == 0.65) { $('#majsize1').val(20); $('#majsize2').val(20); } else if (maj == 1.0) { $('#majsize1').val(50); $('#majsize2').val(50); }
            else if (maj == 1.5) { $('#majsize1').val(32); $('#majsize2').val(32); } else if (maj == 2.5) { $('#majsize1').val(20); $('#majsize2').val(20); }
            else if (maj == 4.0) { $('#majsize1').val(20); $('#majsize2').val(20); } else if (maj == 6.5) { $('#majsize1').val(20); $('#majsize2').val(20); }
            else if (maj == 10) { $('#majsize1').val(20); $('#majsize2').val(40); } else if (maj == 15) { $('#majsize1').val(20); $('#majsize2').val(40); }
            else if (maj == 25) { $('#majsize1').val(20); $('#majsize2').val(40); } else if (maj == 40) { $('#majsize1').val(20); $('#majsize2').val(40); }
            else if (maj == 65) { $('#majsize1').val(13); $('#majsize2').val(26); }
        }
        if (samp == 20) {
            if (min == 0.25) { $('#minsize1').val(32); $('#minsize2').val(32); }
            else if (min == 0.40) { $('#minsize1').val(32); $('#minsize2').val(32); } else if (min == 0.65) { $('#minsize1').val(20); $('#minsize2').val(20); }
            else if (min == 1.0) { $('#minsize1').val(50); $('#minsize2').val(50); } else if (min == 1.5) { $('#minsize1').val(32); $('#minsize2').val(32); }
            else if (min == 2.5) { $('#minsize1').val(20); $('#minsize2').val(20); } else if (min == 4.0) { $('#minsize1').val(20); $('#minsize2').val(20); }
            else if (min == 6.5) { $('#minsize1').val(20); $('#minsize2').val(20); } else if (min == 10) { $('#minsize1').val(20); $('#minsize2').val(40); }
            else if (min == 15) { $('#minsize1').val(20); $('#minsize2').val(40); } else if (min == 25) { $('#minsize1').val(20); $('#minsize2').val(40); }
            else if (min == 40) { $('#minsize1').val(20); $('#minsize2').val(40); } else if (min == 65) { $('#minsize1').val(13); $('#minsize2').val(26); }
        }
        if (samp == 32) {
            if (maj == 0.25) { $('#majsize1').val(32); $('#majsize2').val(32); } else if (maj == 0.40) { $('#majsize1').val(32); $('#majsize2').val(32); }
            else if (maj == 0.65) { $('#majsize1').val(80); $('#majsize2').val(80); } else if (maj == 1.0) { $('#majsize1').val(50); $('#majsize2').val(50); }
            else if (maj == 1.5) { $('#majsize1').val(32); $('#majsize2').val(32); } else if (maj == 2.5) { $('#majsize1').val(32); $('#majsize2').val(32); }
            else if (maj == 4.0) { $('#majsize1').val(32); $('#majsize2').val(32); } else if (maj == 6.5) { $('#majsize1').val(32); $('#majsize2').val(32); }
            else if (maj == 10) { $('#majsize1').val(32); $('#majsize2').val(64); } else if (maj == 15) { $('#majsize1').val(32); $('#majsize2').val(64); }
            else if (maj == 25) { $('#majsize1').val(32); $('#majsize2').val(64); } else if (maj == 40) { $('#majsize1').val(20); $('#majsize2').val(40); }
            else if (maj == 65) { $('#majsize1').val(13); $('#majsize2').val(26); }
        }
        if (samp == 32) {
            if (min == 0.25) { $('#minsize1').val(32); $('#minsize2').val(32); }
            else if (min == 0.40) { $('#minsize1').val(32); $('#minsize2').val(32); } else if (min == 0.65) { $('#minsize1').val(80); $('#minsize2').val(80); }
            else if (min == 1.0) { $('#minsize1').val(50); $('#minsize2').val(50); } else if (min == 1.5) { $('#minsize1').val(32); $('#minsize2').val(32); }
            else if (min == 2.5) { $('#minsize1').val(32); $('#minsize2').val(32); } else if (min == 4.0) { $('#minsize1').val(32); $('#minsize2').val(32); }
            else if (min == 6.5) { $('#minsize1').val(32); $('#minsize2').val(32); } else if (min == 10) { $('#minsize1').val(32); $('#minsize2').val(64); }
            else if (min == 15) { $('#minsize1').val(32); $('#minsize2').val(64); } else if (min == 25) { $('#minsize1').val(32); $('#minsize2').val(64); }
            else if (min == 40) { $('#minsize1').val(20); $('#minsize2').val(40); } else if (min == 65) { $('#minsize1').val(13); $('#minsize2').val(26); }
        }
        if (samp == 50) {
            if (maj == 0.25) { $('#majsize1').val(32); $('#majsize2').val(32); } else if (maj == 0.40) { $('#majsize1').val(125); $('#majsize2').val(125); }
            else if (maj == 0.65) { $('#majsize1').val(80); $('#majsize2').val(80); } else if (maj == 1.0) { $('#majsize1').val(50); $('#majsize2').val(50); }
            else if (maj == 1.5) { $('#majsize1').val(50); $('#majsize2').val(50); } else if (maj == 2.5) { $('#majsize1').val(50); $('#majsize2').val(50); }
            else if (maj == 4.0) { $('#majsize1').val(50); $('#majsize2').val(50); } else if (maj == 6.5) { $('#majsize1').val(50); $('#majsize2').val(50); }
            else if (maj == 10) { $('#majsize1').val(50); $('#majsize2').val(100); } else if (maj == 15) { $('#majsize1').val(50); $('#majsize2').val(100); }
            else if (maj == 25) { $('#majsize1').val(32); $('#majsize2').val(64); } else if (maj == 40) { $('#majsize1').val(20); $('#majsize2').val(40); }
            else if (maj == 65) { $('#majsize1').val(13); $('#majsize2').val(26); }
        }
        if (samp == 50) {
          if (min == 0.25) { $('#minsize1').val(32); $('#minsize2').val(32); }
            else if (min == 0.40) { $('#minsize1').val(125); $('#minsize2').val(125); } else if (min == 0.65) { $('#minsize1').val(80); $('#minsize2').val(80); }
            else if (min == 1.0) { $('#minsize1').val(50); $('#minsize2').val(50); } else if (min == 1.5) { $('#minsize1').val(50); $('#minsize2').val(50); }
            else if (min == 2.5) { $('#minsize1').val(50); $('#minsize2').val(50); } else if (min == 4.0) { $('#minsize1').val(50); $('#minsize2').val(50); }
            else if (min == 6.5) { $('#minsize1').val(50); $('#minsize2').val(50); } else if (min == 10) { $('#minsize1').val(50); $('#minsize2').val(100); }
            else if (min == 15) { $('#minsize1').val(50); $('#minsize2').val(100); } else if (min == 25) { $('#minsize1').val(32); $('#minsize2').val(64); }
            else if (min == 40) { $('#minsize1').val(20); $('#minsize2').val(40); } else if (min == 65) { $('#minsize1').val(13); $('#minsize2').val(26); }
        }
        if (samp == 80) {
            if (maj == 0.25) { $('#majsize1').val(200); $('#majsize2').val(200); } else if (maj == 0.40) { $('#majsize1').val(125); $('#majsize2').val(125); }
            else if (maj == 0.65) { $('#majsize1').val(80); $('#majsize2').val(80); } else if (maj == 1.0) { $('#majsize1').val(80); $('#majsize2').val(80); }
            else if (maj == 1.5) { $('#majsize1').val(80); $('#majsize2').val(80); } else if (maj == 2.5) { $('#majsize1').val(80); $('#majsize2').val(80); }
            else if (maj == 4.0) { $('#majsize1').val(80); $('#majsize2').val(80); } else if (maj == 6.5) { $('#majsize1').val(80); $('#majsize2').val(80); }
            else if (maj == 10) { $('#majsize1').val(80); $('#majsize2').val(160); } else if (maj == 15) { $('#majsize1').val(50); $('#majsize2').val(100); }
            else if (maj == 25) { $('#majsize1').val(32); $('#majsize2').val(64); } else if (maj == 40) { $('#majsize1').val(20); $('#majsize2').val(40); }
            else if (maj == 65) { $('#majsize1').val(13); $('#majsize2').val(26); }
        }
        if (samp == 80) {
            if (min == 0.25) { $('#minsize1').val(200); $('#minsize2').val(200); }
            else if (min == 0.40) { $('#minsize1').val(125); $('#minsize2').val(125); } else if (min == 0.65) { $('#minsize1').val(80); $('#minsize2').val(80); }
            else if (min == 1.0) { $('#minsize1').val(80); $('#minsize2').val(80); } else if (min == 1.5) { $('#minsize1').val(80); $('#minsize2').val(80); }
            else if (min == 2.5) { $('#minsize1').val(80); $('#minsize2').val(80); } else if (min == 4.0) { $('#minsize1').val(80); $('#minsize2').val(80); }
            else if (min == 6.5) { $('#minsize1').val(80); $('#minsize2').val(80); } else if (min == 10) { $('#minsize1').val(80); $('#minsize2').val(160); }
            else if (min == 15) { $('#minsize1').val(50); $('#minsize2').val(100); } else if (min == 25) { $('#minsize1').val(32); $('#minsize2').val(64); }
            else if (min == 40) { $('#minsize1').val(20); $('#minsize2').val(40); } else if (min == 65) { $('#minsize1').val(13); $('#minsize2').val(26); }
        }
        if (samp == 125) {
            if (maj == 0.25) { $('#majsize1').val(125); $('#majsize2').val(125); } else if (maj == 0.40) { $('#majsize1').val(125); $('#majsize2').val(125); }
            else if (maj == 0.65) { $('#majsize1').val(125); $('#majsize2').val(125); } else if (maj == 1.0) { $('#majsize1').val(125); $('#majsize2').val(125); }
            else if (maj == 1.5) { $('#majsize1').val(125); $('#majsize2').val(125); } else if (maj == 2.5) { $('#majsize1').val(125); $('#majsize2').val(125); }
            else if (maj == 4.0) { $('#majsize1').val(125); $('#majsize2').val(125); } else if (maj == 6.5) { $('#majsize1').val(125); $('#majsize2').val(125); }
            else if (maj == 10) { $('#majsize1').val(80); $('#majsize2').val(160); } else if (maj == 15) { $('#majsize1').val(50); $('#majsize2').val(100); }
            else if (maj == 25) { $('#majsize1').val(32); $('#majsize2').val(64); } else if (maj == 40) { $('#majsize1').val(20); $('#majsize2').val(40); }
            else if (maj == 65) { $('#majsize1').val(13); $('#majsize2').val(26); }
        }
        if (samp == 125) {
            if (min == 0.25) { $('#minsize1').val(200); $('#minsize2').val(200); }
            else if (min == 0.40) { $('#minsize1').val(125); $('#minsize2').val(125); } else if (min == 0.65) { $('#minsize1').val(125); $('#minsize2').val(125); }
            else if (min == 1.0) { $('#minsize1').val(125); $('#minsize2').val(125); } else if (min == 1.5) { $('#minsize1').val(125); $('#minsize2').val(125); }
            else if (min == 2.5) { $('#minsize1').val(125); $('#minsize2').val(125); } else if (min == 4.0) { $('#minsize1').val(125); $('#minsize2').val(125); }
            else if (min == 6.5) { $('#minsize1').val(125); $('#minsize2').val(125); } else if (min == 10) { $('#minsize1').val(80); $('#minsize2').val(160); }
            else if (min == 15) { $('#minsize1').val(50); $('#minsize2').val(100); } else if (min == 25) { $('#minsize1').val(32); $('#minsize2').val(64); }
            else if (min == 40) { $('#minsize1').val(20); $('#minsize2').val(40); } else if (min == 65) { $('#minsize1').val(13); $('#minsize2').val(26); }
        }
        if (samp == 200) {
            if (maj == 0.25) { $('#majsize1').val(200); $('#majsize2').val(200); } else if (maj == 0.40) { $('#majsize1').val(200); $('#majsize2').val(200); }
            else if (maj == 0.65) { $('#majsize1').val(200); $('#majsize2').val(200); } else if (maj == 1.0) { $('#majsize1').val(200); $('#majsize2').val(200); }
            else if (maj == 1.5) { $('#majsize1').val(200); $('#majsize2').val(200); } else if (maj == 2.5) { $('#majsize1').val(200); $('#majsize2').val(200); }
            else if (maj == 4.0) { $('#majsize1').val(200); $('#majsize2').val(200); } else if (maj == 6.5) { $('#majsize1').val(200); $('#majsize2').val(200); }
            else if (maj == 10) { $('#majsize1').val(80); $('#majsize2').val(160); } else if (maj == 15) { $('#majsize1').val(50); $('#majsize2').val(100); }
            else if (maj == 25) { $('#majsize1').val(32); $('#majsize2').val(64); } else if (maj == 40) { $('#majsize1').val(20); $('#majsize2').val(40); }
            else if (maj == 65) { $('#majsize1').val(13); $('#majsize2').val(26); }
        }
        if (samp == 200) {
            if (min == 0.25) { $('#minsize1').val(200); $('#minsize2').val(200); }
            else if (min == 0.40) { $('#minsize1').val(200); $('#minsize2').val(200); } else if (min == 0.65) { $('#minsize1').val(200); $('#minsize2').val(200); }
            else if (min == 1.0) { $('#minsize1').val(200); $('#minsize2').val(200); } else if (min == 1.5) { $('#minsize1').val(200); $('#minsize2').val(200); }
            else if (min == 2.5) { $('#minsize1').val(200); $('#minsize2').val(200); } else if (min == 4.0) { $('#minsize1').val(200); $('#minsize2').val(200); }
            else if (min == 6.5) { $('#minsize1').val(200); $('#minsize2').val(200); } else if (min == 10) { $('#minsize1').val(80); $('#minsize2').val(160); }
            else if (min == 15) { $('#minsize1').val(50); $('#minsize2').val(100); } else if (min == 25) { $('#minsize1').val(32); $('#minsize2').val(64); }
            else if (min == 40) { $('#minsize1').val(20); $('#minsize2').val(40); } else if (min == 65) { $('#minsize1').val(13); $('#minsize2').val(26); }
        }
        if (samp == 315) {
            if (maj == 0.25) { $('#majsize1').val(315); $('#majsize2').val(315); } else if (maj == 0.40) { $('#majsize1').val(315); $('#majsize2').val(315); }
            else if (maj == 0.65) { $('#majsize1').val(315); $('#majsize2').val(315); } else if (maj == 1.0) { $('#majsize1').val(315); $('#majsize2').val(315); }
            else if (maj == 1.5) { $('#majsize1').val(315); $('#majsize2').val(315); } else if (maj == 2.5) { $('#majsize1').val(315); $('#majsize2').val(315); }
            else if (maj == 4.0) { $('#majsize1').val(200); $('#majsize2').val(200); } else if (maj == 6.5) { $('#majsize1').val(200); $('#majsize2').val(200); }
            else if (maj == 10) { $('#majsize1').val(80); $('#majsize2').val(160); } else if (maj == 15) { $('#majsize1').val(50); $('#majsize2').val(100); }
            else if (maj == 25) { $('#majsize1').val(32); $('#majsize2').val(64); } else if (maj == 40) { $('#majsize1').val(20); $('#majsize2').val(40); }
            else if (maj == 65) { $('#majsize1').val(13); $('#majsize2').val(26); }
        }
        if (samp == 315) {
            if (min == 0.25) { $('#minsize1').val(315); $('#minsize2').val(315); }
            else if (min == 0.40) { $('#minsize1').val(315); $('#minsize2').val(315); } else if (min == 0.65) { $('#minsize1').val(315); $('#minsize2').val(315); }
            else if (min == 1.0) { $('#minsize1').val(315); $('#minsize2').val(315); } else if (min == 1.5) { $('#minsize1').val(315); $('#minsize2').val(315); }
            else if (min == 2.5) { $('#minsize1').val(315); $('#minsize2').val(315); } else if (min == 4.0) { $('#minsize1').val(200); $('#minsize2').val(200); }
            else if (min == 6.5) { $('#minsize1').val(200); $('#minsize2').val(200); } else if (min == 10) { $('#minsize1').val(80); $('#minsize2').val(160); }
            else if (min == 15) { $('#minsize1').val(50); $('#minsize2').val(100); } else if (min == 25) { $('#minsize1').val(32); $('#minsize2').val(64); }
            else if (min == 40) { $('#minsize1').val(20); $('#minsize2').val(40); } else if (min == 65) { $('#minsize1').val(13); $('#minsize2').val(26); }
        }
        if (samp == 500) {
            if (maj == 0.25) { $('#majsize1').val(500); $('#majsize2').val(500); } else if (maj == 0.40) { $('#majsize1').val(500); $('#majsize2').val(500); }
            else if (maj == 0.65) { $('#majsize1').val(500); $('#majsize2').val(500); } else if (maj == 1.0) { $('#majsize1').val(500); $('#majsize2').val(500); }
            else if (maj == 1.5) { $('#majsize1').val(500); $('#majsize2').val(500); } else if (maj == 2.5) { $('#majsize1').val(315); $('#majsize2').val(315); }
            else if (maj == 4.0) { $('#majsize1').val(200); $('#majsize2').val(200); } else if (maj == 6.5) { $('#majsize1').val(200); $('#majsize2').val(200); }
            else if (maj == 10) { $('#majsize1').val(80); $('#majsize2').val(160); } else if (maj == 15) { $('#majsize1').val(50); $('#majsize2').val(100); }
            else if (maj == 25) { $('#majsize1').val(32); $('#majsize2').val(64); } else if (maj == 40) { $('#majsize1').val(20); $('#majsize2').val(40); }
            else if (maj == 65) { $('#majsize1').val(13); $('#majsize2').val(26); }
        }
        if (samp == 500) {
            if (min == 0.25) { $('#minsize1').val(500); $('#minsize2').val(500); }
            else if (min == 0.40) { $('#minsize1').val(500); $('#minsize2').val(500); } else if (min == 0.65) { $('#minsize1').val(500); $('#minsize2').val(500); }
            else if (min == 1.0) { $('#minsize1').val(500); $('#minsize2').val(500); } else if (min == 1.5) { $('#minsize1').val(500); $('#minsize2').val(500); }
            else if (min == 2.5) { $('#minsize1').val(315); $('#minsize2').val(315); } else if (min == 4.0) { $('#minsize1').val(200); $('#minsize2').val(200); }
            else if (min == 6.5) { $('#minsize1').val(200); $('#minsize2').val(200); } else if (min == 10) { $('#minsize1').val(80); $('#minsize2').val(160); }
            else if (min == 15) { $('#minsize1').val(50); $('#minsize2').val(100); } else if (min == 25) { $('#minsize1').val(32); $('#minsize2').val(64); }
            else if (min == 40) { $('#minsize1').val(20); $('#minsize2').val(40); } else if (min == 65) { $('#minsize1').val(13); $('#minsize2').val(26); }
        }
        if (samp == 800) {
            if (maj == 0.25) { $('#majsize1').val(800); $('#majsize2').val(800); } else if (maj == 0.40) { $('#majsize1').val(800); $('#majsize2').val(800); }
            else if (maj == 0.65) { $('#majsize1').val(800); $('#majsize2').val(800); } else if (maj == 1.0) { $('#majsize1').val(800); $('#majsize2').val(800); }
            else if (maj == 1.5) { $('#majsize1').val(500); $('#majsize2').val(500); } else if (maj == 2.5) { $('#majsize1').val(315); $('#majsize2').val(315); }
            else if (maj == 4.0) { $('#majsize1').val(200); $('#majsize2').val(200); } else if (maj == 6.5) { $('#majsize1').val(200); $('#majsize2').val(200); }
            else if (maj == 10) { $('#majsize1').val(80); $('#majsize2').val(160); } else if (maj == 15) { $('#majsize1').val(50); $('#majsize2').val(100); }
            else if (maj == 25) { $('#majsize1').val(32); $('#majsize2').val(64); } else if (maj == 40) { $('#majsize1').val(20); $('#majsize2').val(40); }
            else if (maj == 65) { $('#majsize1').val(13); $('#majsize2').val(26); }
        }
        if (samp == 800) {
            if (min == 0.25) { $('#minsize1').val(800); $('#minsize2').val(800); }
            else if (min == 0.40) { $('#minsize1').val(800); $('#minsize2').val(800); } else if (min == 0.65) { $('#minsize1').val(800); $('#minsize2').val(800); }
            else if (min == 1.0) { $('#minsize1').val(800); $('#minsize2').val(800); } else if (min == 1.5) { $('#minsize1').val(500); $('#minsize2').val(500); }
            else if (min == 2.5) { $('#minsize1').val(315); $('#minsize2').val(315); } else if (min == 4.0) { $('#minsize1').val(200); $('#minsize2').val(200); }
            else if (min == 6.5) { $('#minsize1').val(200); $('#minsize2').val(200); } else if (min == 10) { $('#minsize1').val(80); $('#minsize2').val(160); }
            else if (min == 15) { $('#minsize1').val(50); $('#minsize2').val(100); } else if (min == 25) { $('#minsize1').val(32); $('#minsize2').val(64); }
            else if (min == 40) { $('#minsize1').val(20); $('#minsize2').val(40); } else if (min == 65) { $('#minsize1').val(13); $('#minsize2').val(26); }
        }
        if (samp == 1250) {
            if (maj == 0.25) { $('#majsize1').val(1250); $('#majsize2').val(1250); } else if (maj == 0.40) { $('#majsize1').val(1250); $('#majsize2').val(1250); }
            else if (maj == 0.65) { $('#majsize1').val(1250); $('#majsize2').val(1250); } else if (maj == 1.0) { $('#majsize1').val(800); $('#majsize2').val(800); }
            else if (maj == 1.5) { $('#majsize1').val(500); $('#majsize2').val(500); } else if (maj == 2.5) { $('#majsize1').val(315); $('#majsize2').val(315); }
            else if (maj == 4.0) { $('#majsize1').val(200); $('#majsize2').val(200); } else if (maj == 6.5) { $('#majsize1').val(200); $('#majsize2').val(200); }
            else if (maj == 10) { $('#majsize1').val(80); $('#majsize2').val(160); } else if (maj == 15) { $('#majsize1').val(50); $('#majsize2').val(100); }
            else if (maj == 25) { $('#majsize1').val(32); $('#majsize2').val(64); } else if (maj == 40) { $('#majsize1').val(20); $('#majsize2').val(40); }
            else if (maj == 65) { $('#majsize1').val(13); $('#majsize2').val(26); }
        }
        if (samp == 1250) {
            if (min == 0.25) { $('#minsize1').val(1250); $('#minsize2').val(1250); }
            else if (min == 0.40) { $('#minsize1').val(1250); $('#minsize2').val(1250); } else if (min == 0.65) { $('#minsize1').val(1250); $('#minsize2').val(1250); }
            else if (min == 1.0) { $('#minsize1').val(800); $('#minsize2').val(800); } else if (min == 1.5) { $('#minsize1').val(500); $('#minsize2').val(500); }
            else if (min == 2.5) { $('#minsize1').val(315); $('#minsize2').val(315); } else if (min == 4.0) { $('#minsize1').val(200); $('#minsize2').val(200); }
            else if (min == 6.5) { $('#minsize1').val(200); $('#minsize2').val(200); } else if (min == 10) { $('#minsize1').val(80); $('#minsize2').val(160); }
            else if (min == 15) { $('#minsize1').val(50); $('#minsize2').val(100); } else if (min == 25) { $('#minsize1').val(32); $('#minsize2').val(64); }
            else if (min == 40) { $('#minsize1').val(20); $('#minsize2').val(40); } else if (min == 65) { $('#minsize1').val(13); $('#minsize2').val(26); }
        }
        var majsam1 = parseInt($('#majsize1').val());
        var minsam1 = parseInt($('#minsize1').val());
        var c = Math.max(majsam1, minsam1);
        $('#crisize1').val(c);
        $('#crisize2').val(c);


    }
    function GetAql2v() {
        ShowHideProgress(true);
        if (!IsNull($('#tTotalQty2').val()) && !IsNull($('#cILTyp2').val()) && !IsNull($('#cILvl2').val())) {
            PageMethods.CalAql2($('#tTotalQty2').val(), $('#cILTyp2').val(), $('#cILvl2').val(), $('#cAQL21').val(), $('#cAQL22').val(), $('#cAQL23').val(), FillAQL2Succeed, AjaxCallBackStandarError);
        }
    }

    function FillAQL2Succeed(result) {

        try {
            if (IsNull(result)) {
                jAlert(NoDataFromServer, AppTitle);
                return;
            }

            if (result.IsError) {
                jAlert(result.ErrorMessage, AppTitle);
                return;
            }
            $('#t1SAP21').val(result.Value[0].AC);
            $('#t1SRP21').val(result.Value[0].RE);
            $('#t2SAP21').val(result.Value[1].AC);
            $('#t2SRP21').val(result.Value[1].RE);

            $('#t1SAP22').val(result.Value[2].AC);
            $('#t1SRP22').val(result.Value[2].RE);
            $('#t2SAP22').val(result.Value[3].AC);
            $('#t2SRP22').val(result.Value[3].RE);

            $('#t1SAP23').val(result.Value[4].AC);
            $('#t1SRP23').val(result.Value[4].RE);
            $('#t2SAP23').val(result.Value[5].AC);
            $('#t2SRP23').val(result.Value[5].RE);
        }
        catch (err) {
            jAlert(err.description, AppTitle);
        }
        finally {
            FILLSAMPLESIZE();
            ShowHideProgress(false);
        }
    }

    function GetSize2() {
        ShowHideProgress(true);
        if (!IsNull($('#tTotalQty2').val()) && !IsNull($('#cILTyp2').val()) && !IsNull($('#cILvl2').val()))
           PageMethods.CalSample2($('#tTotalQty2').val(), $('#cILTyp2').val(), $('#cILvl2').val(), CalSample2Succeed, AjaxCallBackStandarError);
    }

    function CalSample2Succeed(result) {

        try {
            if (IsNull(result)) {
                jAlert(NoDataFromServer, AppTitle);
                return;
            }

            if (result.IsError) {
                jAlert(result.ErrorMessage, AppTitle);
                return;
            }
            $('#t1SSz2').val(result.Value[0].SampleSize);
            $('#t2SSz2').val(result.Value[1].SampleSize);
            $('#tTSSz2').val(result.Value[1].TotalSampleSize);
            GetAql2v();
        }
        catch (err) {
            jAlert(err.description, AppTitle);
        }
        finally {
            ShowHideProgress(false);
        }
    }

    function GetSize1alq() {
      }

    function FillSucceed(result) {

        try {
            if (IsNull(result)) {
                jAlert(NoDataFromServer, AppTitle);
                return;
            }

            if (result.IsError) {
                jAlert(result.ErrorMessage, AppTitle);
                return;
            }
            $('#txtSampleSize').val(result.Value);
            GetAql1v();
        }
        catch (err) {
            jAlert(err.description, AppTitle);
        }
        finally {
            ShowHideProgress(false);
        }
    }
    </script>
 
 <script type="text/javascript">

     $(window).load(function () {

     });

     function cLavelTypeChange() {

     }

     function GetSize1() {
     
     }

     function FillSucceedz(result) {

         try {
             if (IsNull(result)) {
                 jAlert(NoDataFromServer, AppTitle);
                 return;
             }

             if (result.IsError) {
                 jAlert(result.ErrorMessage, AppTitle);
                 return;
             }
             $('#txtSampleSizem').val(result.Value);
             Calculation();
         }
         catch (err) {
             jAlert(err.description, AppTitle);
         }
         finally {
             ShowHideProgress(false);
         }
     }

     function QtyTypeChange() {
       
     }

     function HowMayTypeProdu(e) {
         var unicode = e.charCode ? e.charCode : e.keyCode;
         var val = String.fromCharCode(unicode);
         if (val == '1' || val == '2' || val == '3' || val == '4')
             return true;
         else return false;
     }

     function HowMayTypeReff(e) {
         var unicode = e.charCode ? e.charCode : e.keyCode;
         var val = String.fromCharCode(unicode);
         if (val == '1' || val == '2' || val == '3' || val == '4' || val == '5' || val == '6' || val == '7' || val == '8' || val == '9' || val == '0') {
             var value = $("#" + GetSenderID(e)).val() == "" ? "0" : $("#" + GetSenderID(e)).val() + val;
             if (parseInt(value) > 20)
             { return false; }
             return true;
         }
         else return false;
     }

     function FillProductName() {
       
     }

     function FillSucceedP(result) {
         
     }

     function Calculation() {
        
     }
     function FillSucceedC(result) {
         try {
             if (IsNull(result)) {
                 jAlert(NoDataFromServer, AppTitle);
                 return;
             }

             if (result.IsError) {
                 jAlert(result.ErrorMessage, AppTitle);
                 return;
             }
             else {
                 $('#txtRequiredMd').val(result.Value);
                 return;
             }
         }
         catch (err) {
             jAlert(err.description, AppTitle);
         }
         finally {
             ShowHideProgress(false);
         }
     }