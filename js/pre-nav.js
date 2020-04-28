$(document).ready(function () {
    //navBar 
    $(window).scroll(function () { 
        if($("html").scrollTop() >= 57){
            $("#navBar .navbar").addClass("scrolled");
            // $("#navBar .navbar-brand").children("img.first").addClass("d-none")
            // $("#navBar .navbar-brand").children("img.last").removeClass("d-none")
        }else{
            $("#navBar .navbar").removeClass("scrolled");
            // $("#navBar .navbar-brand").children("img.last").addClass("d-none")
            // $("#navBar .navbar-brand").children("img.first").removeClass("d-none")
        }
    });



    //search button

    $("#modal").hide()

    $("#myModal").click(function(){
        $("#modal").fadeIn()
        
    })

    $(".closeBtn").click(function(){
        $("#modal").fadeOut()
    })


    $("html , body").keydown(function(x){
        if(x.which==27){
            $("#modal").fadeOut()
        }
    })


    //cart button

    $("#cartBtn").click(function(){
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

    //digital-tab

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

    //scroll to top

    $("footer #copy .moveTop a").click(function (e) { 
        e.preventDefault();
        $("html").animate({scrollTop: 0}, 1000);
    });
});