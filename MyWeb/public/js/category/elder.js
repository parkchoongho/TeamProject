$(document).ready(function(){
    
    $('#elder').click(function (){
        $.ajax({
            url:"../html/elder.html",
            success:function(result){
                $("#main_div").html(result);
            }
        });
   
          
    });
});
    
    
      