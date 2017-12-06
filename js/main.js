$(function(){
  
 //logo image change
    
    $(".logo").children("img").on("mouseenter",function(){
        var currentSource = $(this).attr("src");
        var newSource = currentSource.replace("images/", "images/hover_");
        $(this).attr("src", newSource);
        
    });
    
    $(".logo").children("img").on("mouseleave",function(){
        var currentSource = $(this).attr("src");
        var newSource = currentSource.replace("images/hover_", "images/");
        $(this).attr("src", newSource);
        
    });   
    
    
});
