$(function(){
    if(localStorage.getItem("linkname")){
        $("#admin").html("欢迎"+localStorage.getItem("linkname")+"回来")
    }
    else{
        alert("请登录");
        location.href="../login.html";
    }
    $("#btn").click(function () {
        localStorage.clear();
        window.opener=null;
        window.open(" ","_self").close(); 
    })
})