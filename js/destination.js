$(function(){
 
    console.log("Ready");
    
    
    //filter
    
    $(".accordion").on("click", function(){
        $(".headers").show();
        $(".panel").show();
    });
    
    $("#allF").click(function(){
        $("h4").text("All available Destinations");
        if ($("#allF").val() === "ALL"){
            $(".options").show();
        } 
     });       
    
    
    $("#shortF").click(function(){
        $("h4").text("Trip durations less than 5 days");
        
        if ($("#shortF").val() === "SHO"){
            
            $(".options").hide();
            $(".options").each(function(){
                if ($(this).data("lenght") === "short"){
                    $(this).show();
                }
            });
            
        }
    });
        
        
    $("#longF").click(function(){
        $("h4").text("Trip duration more than 10 days");
        
        if ($("#longF").val() === "LON"){
            
            $(".options").hide();
            $(".options").each(function(){
                if ($(this).data("lenght") === "long"){
                    $(this).show();
                }
            });
            
        }
    });
    $("#singleF").click(function(){
        $("h4").text("Trips that stop at one destination");
        
        if ($("#singleF").val() === "SIN"){
            
            $(".options").hide();
            $(".options").each(function(){
                if ($(this).find("#stops").data("stop") === "n"){
                    $(this).show();
                }
            });
            
        }
    });
    $("#multiF").click(function(){
        $("h4").text("Trips that stop at multiple destinations");
        
        if ($("#multiF").val() === "MUL"){
            
            $(".options").hide();
            $(".options").each(function(){
                if ($(this).find("#stops").data("stop") === "y"){
                    $(this).show();
                }
            });
            
        }
    });
    $("#returnF").click(function(){
        $("h4").text("Trips that returns to the port of origin");
        
        if ($("#returnF").val() === "RET"){
            
            $(".options").hide();
            $(".options").each(function(){
                if ($(this).find("#returns").data("return") === "y"){
                    $(this).show();
                }
            });
            
        }
    });

    $("#rowF").click(function(){
        $("h4").text("Cheapest Destination");
        
        if ($("#rowF").val() === "ROW"){
            
            $(".options").hide();
            $(".options").each(function(){
                if ($(this).find("#cheaps").data("cheap") === "y"){
                    $(this).show();
                }
            });
            
        }
    });
    
    
    $(".options").on("mouseenter", function(){
        $(this).children("h3").css({
            "background-color" : "#ddd",
        });
    });
    
    $(".options").on("mouseleave", function(){
        $(this).children("h3").css({
            "background-color" : "white"});
    });
    
    $(".options").on("click", function(){
     $(".options").find("img").hide();
     $(this).find("img").show();
    });

});