/* ========== JQ ========== */
$(document).ready(function(){
    // ex-1
	$('#alert').on('click',function(){
        alert("Welcome!")
    });
    // ex-2
    $('#btnh').on('click',function(){
        $('#text').hide()
    });
    $('#btns').on('click',function(){
        $('#text').show()
    });
    $('#btnt').on('click',function(){
        $('#text').toggle()
    });
    // ex-3
    $('p').on('click',function(){
        $(this).hide()
    });
    // ex-4
    $('#btnfo').on('click',function(){
        $('#text_2').fadeOut()
    });
    $('#btnfi').on('click',function(){
        $('#text_2').fadeIn()
    });
    $('#btnft').on('click',function(){
        $('#text_2').fadeToggle()
    });
    // ex-5
    $('#alert_2').on('dblclick',function(){
        alert("Hello jQuery!")
    });
    // ex-6
    $('#btnname').on('click',function(){
        $('#text_3').append("<strong>Farhan Sadik</strong>")
    });
    // ex-7
    $('#btnpre').on('click',function(){
        $('#text_4').prepend("<b>Hello </b>")
    });
    // ex-8
    $('#btncon').on('click',function(){
        $('#text_5').text("Hello World!")
    });
    // ex-9
    $('#btnweb').on('click',function(){
        $('a').attr("href","https://farhansadik77.xyz")
    });
    // ex-10
    $('#btnc').on('click',function(){
        $('#text_6').css("color","orange")
    });
    // ex-11
    $('#btnst').on('click',function(){
        $('#text_7').css("font-size","3em")
    });
    // ex-12
    $('#btnon').on('click',function(){
        $('#bulb').attr("src","images/bulbon.gif")
    });
    $('#btnoff').on('click',function(){
        $('#bulb').attr("src","images/bulboff.gif")
    });
    // ex-13
    $('#btnblush').on('click',function(){
        $('#emoji').attr("src","images/blush.png")
    });
    $('#btnsob').on('click',function(){
        $('#emoji').attr("src","images/sob.png")
    });
    // ex-14
    $('#btnmouse').on('mouseenter',function(){
        alert("You Have Entered")
    });
    // ex-15
    $('#btnsl').on('click',function(){
        $('#text_8').slideToggle("slow")
    });
    // ex-16
    $('#btnmove').on('click',function(){
        $('#text_9').animate({
            width: "70%",
            opacity: 0.5,
            marginLeft: "0.7in",
            fontSize: "3em",
            borderWidth: "10px"
        })
    });
    // ex-17
    




	
});
