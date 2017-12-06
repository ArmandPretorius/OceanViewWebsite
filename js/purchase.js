$(function(){
    
    console.log("Ready!");
    
    //remove items
    $(".remove").on("click", function(){
        $(this).parent("tr").remove();
        $(".noItems").hide();
    });
    
    $(".removeall").on("click", function(){
        
        $("tbody").remove();
        $(".noItems").hide();
        $(".noItems").show();
    });
    
    //date picker
    
    $(".date").datepicker({
        minDate: "+7D",
        dateformat: "yy-mm-dd"
    });
    
    //spinner
    
    $(".quantity").spinner({
        stop:function(event, ui){
            $(this).change();
        }
    });
    
    $(".quantity2").spinner({
        stop:function(event, ui){
            $(this).change();
        }
    });
    
    
    var calculateTotal = function(){
        var tripPrice = +$("#price").data("cost");
        var quant = +$(".quantity").val();
        var total = tripPrice * quant;
        $("#price").text(total);
    };
    
    $(".quantity").on("change", calculateTotal);
    $("#price").on("change", calculateTotal);
    
    
    var calculateTotal = function(){
        var tripPrice = +$("#price2").data("cost");
        var quant = +$(".quantity2").val();
        var total = tripPrice * quant;
        $("#price2").text(total);
    };
    
    $(".quantity2").on("change", calculateTotal);
    $("#price2").on("change", calculateTotal);
    
    //modal
    
    
    $(".purchasebutton").on("click", function(event){

        $("#dialog-confirm").show();
        $("#dialog-confirm").dialog({
            resizable:false,
            height:340,
            modal: true,
            buttons: {
                "Confirm": function(){
                    $(this).dialog("close");
                    $(this).hide();
                    $(".table").submit();
                    window.location.href = '../index.html';
                },
                "Cancel": function(){
                    $(this).dialog("close");
                    $(this).hide();
                }
            }
            
        });
        
    });
    
});