$(document).ready(function(){

 $('#animal').click(function (){
        $.ajax({
            url:"../html/animal.html",
            success:function(result){
                $("#main_div").html(result);
            }
        });
   
          
 });
 
});











