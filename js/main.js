$(document).ready(function () {


    //navBar 
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


    //digital-tab


    $("#digital .digital-tab li").each(function(){
        $(this).click(function(){
        $(".digital-tab li.active").removeClass("active")
        $(this).addClass("active")})


    })



    var photoContent=$("#digital div.photo-content")
    

    $("#digital .show-all").click(function(){
        $(photoContent).each(function(){
            if(!$(photoContent).hasClass("show")){
                $(photoContent).parent().css("display","none")
            }else{
                $(photoContent).parent().css("display","block")
            }
        })
    })


    $("#digital .branding").click(function(){
        $(photoContent).each(function(){
            if(!$(photoContent).hasClass("brand")){
                $(photoContent).parent().css("display","none")
            }else{
                $(photoContent).parent().css("display","block")
            }
        })

        
    })
    $("#digital .digit").click(function(){
        
        
        $(photoContent).each(function(){
            if(!$(photoContent).hasClass("digi")){
                $(photoContent).parent().css("display","none")
            }else{
                $(photoContent).parent().css("display","block")
            }
        })
    })
    $("#digital .packaging").click(function(){
        
        $(photoContent).each(function(){
            if(!$(photoContent).hasClass("pack")){
                
                $(photoContent).parent().css({display:"none"})
            }else{
                $(photoContent).parent().css({display:"block"})
            }
        })
    })



    //slider

    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:0,
        nav:false,
        mouseDrag:false,
        dots:false,
        autoplay:true,
        autoplayTimeout:1750,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:6
            }
        }
    })
})