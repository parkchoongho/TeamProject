$(document).ready(function(){
    $('#etc').click(function (){
        $.ajax({
            url:"../html/etc.html",
            success:function(result){
                $("#main_div").html(result);
            }
        });
   
          
    });

});











