$(document).ready(function(){
     $('#grandma').click(function (){
        $.ajax({
            url:"../html/grandma.html",
            success:function(result){
                $("#main_div").html(result);
            }
        });
   
          
    });




});











