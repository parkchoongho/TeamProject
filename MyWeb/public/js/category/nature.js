$(document).ready(function(){

$('#nature').click(function (){
        $.ajax({
            url:"../html/nature.html",
            success:function(result){
                $("#main_div").html(result);
            }
        });
   
          
    });
   
});











