$(document).ready(function(){
    $('#people').click(function (){
        $.ajax({
            url:"../html/people.html",
            success:function(result){
                $("#main_div").html(result);
            }
        });
   
          
    });
   
 
});











