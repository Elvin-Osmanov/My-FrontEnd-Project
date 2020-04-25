$(document).ready(function () {
    $(window).scroll(function () { 
        if($("html").scrollTop() >= 72){
            $("#navBar .navbar").addClass("scrolled");
            $("#navBar .navbar-brand").children("img.first").addClass("d-none")
            $("#navBar .navbar-brand").children("img.last").removeClass("d-none")
        }else{
            $("#navBar .navbar").removeClass("scrolled");
            $("#navBar .navbar-brand").children("img.last").addClass("d-none")
            $("#navBar .navbar-brand").children("img.first").removeClass("d-none")
        }
    });
   

});