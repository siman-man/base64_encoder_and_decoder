$(function(){
    $("#decode").click(function(){
        var str = $("#input").val();
        $("#output").val(Base64.decode(str));
    });

    $("#encode").click(function(){
        var str = $("#input").val();
        $("#output").val(Base64.encode(str));
    });
});