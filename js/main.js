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
                items:3
            },
            1000:{
                items:6
            }
        }
    })


    //scroll to top

    $("footer #copy .moveTop a").click(function (e) { 
        e.preventDefault();
        $("html").animate({scrollTop: 0}, 1000);
    });
})