$(document).ready(function(){


    $('#kid').click(function (){
        $.ajax({
            url:"../html/kid.html",
            success:function(result){
                $("#main_div").html(result);
            }
        });
   
          
    });

});











