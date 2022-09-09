$(function(){
    
    
    var div1 = '<iframe class="myIframe" height="1000px" width="100%" src="https://fumbling-zoo55.surge.sh" title="description"><iframe>';


    $("<div class='zppy'>You must be logged in to view the content of the next page</div>").appendTo('#cntnt');

    setTimeout( function(){ 
        $(".zppy").replaceWith(div1);
      }  , 4000 );
    
    
    // ======= word "OR" Center
    var apsWidth = $('.aps p').width();
    var realWidth = 'calc(50% - (' + apsWidth + 'px / 2))';
    $('.aps p').css('left',realWidth);
    //======================
});
