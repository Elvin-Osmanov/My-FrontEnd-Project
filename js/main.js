$(document).ready(function () {
    


    //navBar 
    $(window).scroll(function () { 
        if($("html").scrollTop() >= 127){
            $("#navBar .homepage-nav").addClass("scrolled");
            $("#navBar .navbar").addClass("fadeInDown");
            $("#navBar .homepage-nav .navbar-brand").children("img.first").addClass("d-lg-none")
            $("#navBar .homepage-nav .navbar-brand").children("img.last").removeClass("d-lg-none")
            $("#navBar .loginpage").addClass("login-pos-nav");
            
        }else{
            $("#navBar .homepage-nav").removeClass("scrolled");
            $("#navBar .navbar").removeClass("fadeInDown");
            $("#navBar .homepage-nav .navbar-brand").children("img.last").addClass("d-lg-none")
            $("#navBar .homepage-nav .navbar-brand").children("img.first").removeClass("d-lg-none")
            $("#navBar .loginpage").removeClass("login-pos-nav");
            
        }
    });

    //search button

    

    $("#myModal").click(function(e){
        e.preventDefault()
        $("#modal").fadeIn()
        
    })

    $(".closeBtn").click(function(e){
        e.preventDefault()
        $("#modal").fadeOut()
    })


    $("html , body").keydown(function(x){
        if(x.which==27){
            $("#modal").fadeOut()
        }
    })


    //cart button

    $("#cartBtn").click(function(e){
        e.preventDefault()
        $("#cart-content").css({
            transform:"translateX(0)",
            transition:"all .5s"
        })
    })

    $(".close-cart-icon").click(function(){
        $("#cart-content").css({
            transform:"translateX(400px)",
            transition:"all .5s"
        })
    })
    


    //digital-tab

    

    $('.digital-item').isotope({
        
        itemSelector: '.item',
        layoutMode: 'fitRows'
    });

    $('#digital .digital-tab ul li').click(function(){
        $('#digital .digital-tab ul li').removeClass("active")
        $(this).addClass("active")

        var selector=$(this).attr("data-filter")
        $(".digital-item").isotope({
            filter:selector
        })

        return false
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
                items:6
            },
            1000:{
                items:6
            }
        }
    })

      // keep logged

      $("i.circled").click(function(){
        if(!$("i.circled").hasClass("d-lg-none")){
            $("i.circled").addClass("d-lg-none")
            $("i.circled").next().removeClass("d-lg-none")


        }else{
            $("i.circled").removeClass("d-lg-none")
            $("i.circled").next().addClass("d-lg-none")

        }

        
    })
    $("i.checked").click(function(){
        if(!$("i.checked").hasClass("d-lg-none")){
            $("i.checked").addClass("d-lg-none")
            $("i.checked").prev().removeClass("d-lg-none")


        }else{
            $("i.checked").removeClass("d-lg-none")
            $("i.checked").prev().addClass("d-lg-none")

        }

        
    })

    //shop-tab

    $('.shop-item').isotope({
        
        itemSelector: '.item',
        layoutMode: 'fitRows'
    });

    $('#shopCards .shop-tab ul li').click(function(){
        $('#shopCards .shop-tab ul li').removeClass("active")
        $(this).addClass("active")

        var selector=$(this).attr("data-filter")
        $(".shop-item").isotope({
            filter:selector
        })

        return false
    })

    //shopCards section dots

    $("#shopCards .dots span").click(function(){
        $('#shopCards .dots span').removeClass("active")
        $(this).addClass("active")
    })


    //scroll to top

    $("footer #copy .moveTop a").click(function (e) { 
        e.preventDefault();
        $("html").animate({scrollTop: 0}, 1000);
    });
})