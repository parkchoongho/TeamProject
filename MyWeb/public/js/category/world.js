$(document).ready(function(){
$('#world').click(function (){
        $.ajax({
            url:"../html/world.html",
            success:function(result){
                $("#main_div").html(result);
            }
        });
   
          
    });
   
});











