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

    $(".cart-button").click(function(e){
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

    var $digitalItem=$('.digital-item')

    window.onload = function () {
        $digitalItem.isotope({
          itemSelector: ".item",
          layoutMode: "fitRows",
        });
    };

    $('#digital .digital-tab ul li').click(function(){
        $('#digital .digital-tab ul li').removeClass("active")
        $(this).addClass("active")

        var selector=$(this).attr("data-filter")
        $digitalItem.isotope({
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
        autoplayHoverPause: true,
        autoplayTimeout:1750,
        responsiveClass: true,
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

  

    //shop-tab

    var $shopItem=$('.shop-item')

    window.onload = function () {
        $shopItem.isotope({
          itemSelector: ".item",
          layoutMode: "fitRows",
        });
    };

    

    $('#shopCards .shop-tab ul li').click(function(){
        $('#shopCards .shop-tab ul li').removeClass("active")
        $(this).addClass("active")

        var selector=$(this).attr("data-filter")
        $shopItem.isotope({
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

    //contact page value control

    var name=$("input[name=username]")
    var email=$("input[name=email]")
    var phone=$("input[name=phone]")
    var message=$("textarea[name=message]")
    
    

    $("button[type=submit]").click(function(e){
        e.preventDefault()
        console.log("clikck")

        if($(name).val()=="" || $(email).val()=="" || $(phone).val()=="" || $(message).val()==""){
            alert("please fill the spaces")
        }else if(/[0-9]/.test($(name).val())){
            alert("Please enter your name correctly without any number")
        }else if(!/[0-9]/.test($(phone).val())){
            alert("Please enter your phone correctly")
        }else{
            alert("We'll get in touch you soon")
        }
    })

    //footer email input value control

    var footerEmail=$(".typing input[type=text]")
    $(".typing .emailBtn").click(function(e){

        e.preventDefault()

        if($(footerEmail).val()==""){
            alert("please enter your email")
        }else{
            alert("We'll get in touch you soon")
        }

        
    })

    //login page value control


    var loginName=$("#login .typing-info .login-name")
    var loginPass=$("#login .typing-info .login-pass")

    $("#login .logBtn").click(function(e){
        e.preventDefault()

        if($(loginName).val()=="" || $(loginPass).val()==""){
            alert("please enter your username and password")
        }else{
            alert("Welcome " + loginName.val())
        }

    })
})