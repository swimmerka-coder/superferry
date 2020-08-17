jQuery("document").ready(function () {
    alert("Would you like to see first Olya's website?")
    jQuery("button").on('click', function(){
        
    'use strict';

    let value = $('.car-input').val();
    
        
        
    if (value == 'STANDARD CAR') {
       var car, width, height, lenght, weight;
        
        width = jQuery('.width-input').val();
        lenght = jQuery('.lenght-input').val();
        height = jQuery('.height-input').val();
        weight = jQuery('.weight-input').val();
        
        lenght = parseFloat(lenght);
        height = parseFloat(height);
        width = parseFloat(width);
        weight = parseFloat(weight);
        if(((width >= 0.1) && (width <= 2)) && ((weight >= 0.1) && (weight <= 3.5)) && ((lenght >= 0.1) && (lenght <= 5)) && ((height >= 0.1) && (height <= 1.85))){
            $('.result').empty();
            $('.result').html("You choose 'standard car'. You car is great for SupperFeries");
            $('div.result_img1').empty();
            $('div.result_img2').empty();
            $('div.result_img3').empty();
            $('div.result_img4').empty();
            $('div.error_img').empty();
            $('div.error_text').empty();
            $('div.result_img1').append('<img src="img/olya.png"/>');
        }else if(((width >= 0.1) && (width <= 2)) && ((weight >= 0.1) && (weight <= 3.5)) && ((lenght > 5) && (lenght <= 7)) &&  ((height >=1.85) && (height <= 3))){
            $('.result').empty();
           $('.result').html("Your car is great. But your car is large. Please, choose this type and check it again");
            $('div.result_img1').empty();
            $('div.result_img2').empty();
            $('div.result_img3').empty();
            $('div.result_img4').empty();
            $('div.error_img').empty();
            $('div.error_text').empty();
            $('div.result_img2').append('<img src="img/dog.png"/>');
        }else if(((width >= 0.1) && (width <= 2)) && ((weight >= 0.1) && (weight <= 3.5)) && ((lenght >= 0.1) && (lenght <= 5)) && ((height >=1.85) && (height <= 3))){
            $('.result').empty();
            $('.result').html("Your car is great. But your car is high. Please, choose this type and check it again");
            $('div.result_img1').empty();
            $('div.result_img2').empty();
            $('div.result_img3').empty();
            $('div.result_img4').empty();
            $('div.error_img').empty();
            $('div.error_text').empty();
            $('div.result_img2').append('<img src="img/dom.png"/>');
        }else if((weight > 3.5) || (width > 2) || (lenght > 7) || (height > 2.9) ) {
            $('.result').empty();
            $('.result').html("Your car is too big for SuperFerries"); 
            $('div.result_img1').empty();
            $('div.result_img2').empty();
            $('div.result_img3').empty();
            $('div.result_img4').empty();
            $('div.error_img').empty();
            $('div.error_text').empty();
        }else{
            $('.result').empty();
            $('div.result_img1').empty();
            $('div.result_img2').empty();
            $('div.result_img3').empty();
            $('div.result_img4').empty();
            $('div.error_img').empty();
            $('div.error_text').empty();
            $('div.error_img').append('<img src="img/error.png"/>');
            $('.error_text').html('error');   
        }
    }else if(value == 'LARGE CAR'){
        var car, width, height, lenght, weight;
        
        width = jQuery('.width-input').val();
        lenght = jQuery('.lenght-input').val();
        height = jQuery('.height-input').val();
        weight = jQuery('.weight-input').val();
        
        lenght = parseFloat(lenght);
        height = parseFloat(height);
        width = parseFloat(width);
        weight = parseFloat(weight);
        if(((width >= 0.1) && (width <= 2)) && ((weight >= 0.1) && (weight <= 3.5)) && ((lenght > 5) && (lenght <= 7)) && ((height > 1.85) && (height <= 2.9))){
            $('div.result').empty();
            $('.result').html("You choose large car. You car is great for SupperFeries"); 
            $('div.result_img1').empty();
            $('div.result_img2').empty();
            $('div.result_img3').empty();
            $('div.result_img4').empty();
            $('div.error_img').empty();
            $('div.error_text').empty();
            $('div.result_img3').append('<img src="img/dog.png"/>');
        }else if(((width >= 0.1) && (width <= 2)) && ((weight >= 0.1) && (weight <= 3.5)) && ((lenght >= 0.1) && (lenght <= 5)) && ((height >= 1.85) && (height <= 2.9))){
            $('div.result').empty();
            $('.result').html("Your car is great. But your car is high. Please, choose this type and check it again");
            $('div.result_img1').empty();
            $('div.result_img2').empty();
            $('div.result_img3').empty();
            $('div.result_img4').empty();
            $('div.error_img').empty();
            $('div.error_text').empty();
            $('div.result_img3').append('<img src="img/dom.png"/>');
            
            
            
        }else if(((width >= 0.1) && (width <= 2)) && ((weight >= 0.1) && (weight <= 3.5)) && ((lenght >= 0.1) && (lenght <= 5)) && ((height >= 0.1) && (height <= 1.85))){
            $('div.result').empty();
            $('.result').html("Your car is too big");
            $('div.result_img1').empty();
            $('div.result_img2').empty();
            $('div.result_img3').empty();
            $('div.result_img4').empty();
            $('div.error_img').empty();
            $('div.error_text').empty();
            $('div.result_img3').append('<img src="img/olya.png"/>');
        }else if((weight > 3.5) || (width > 2) || (lenght > 7) || (height > 2.9))  {
            $('div.result').empty();
            $('.result').html("You choose car and trailer. You car is great for SupperFeries"); 
            $('div.result_img1').empty();
            $('div.result_img2').empty();
            $('div.result_img3').empty();
            $('div.result_img4').empty();
            $('div.error_img').empty();
            $('div.error_text').empty();
            $('div.img_4').append('<img src="img/cat.png"/>'); 
        }else{
            $('div.result').empty();
            $('div.result_img1').empty();
            $('div.result_img2').empty();
            $('div.result_img3').empty();
            $('div.result_img4').empty();
            $('div.error_img').append('<img src="img/error.png"/>');
            $('.error_text').html('error');   
        }
    }else if(value == 'HIGH CAR'){
        var car, width, height, lenght, weight;
        
        width = jQuery('.width-input').val();
        lenght = jQuery('.lenght-input').val();
        height = jQuery('.height-input').val();
        weight = jQuery('.weight-input').val();
        
        lenght = parseFloat(lenght);
        height = parseFloat(height);
        width = parseFloat(width);
        weight = parseFloat(weight);
        if(((width >= 0.1) && (width <= 2)) && ((weight >= 0.1) && (weight <= 3.5)) && ((lenght >= 0.1) && (lenght <= 5)) && ((height > 1.85) && (height <= 2.9))){
            $('.result').html("You choose high car. You car is great for SupperFeries"); 
            $('div.result_img1').empty();
            $('div.result_img2').empty();
            $('div.result_img3').empty();
            $('div.result_img4').empty();
            $('div.error_text').empty();
            $('div.error_img').empty();
            $('div.result_img3').append('<img src="img/dom.png"/>');
       }else if(((width >= 0.1) && (width <= 2)) && ((weight >= 0.1) && (weight <= 3.5)) && ((lenght > 5) && (lenght <= 7)) &&  ((height >=1.85) && (height <= 3))){
            $('.result').html("Your car is great. But your car is large. Please, choose this type and check it again");
            $('div.result_img1').empty();
            $('div.result_img2').empty();
            $('div.result_img3').empty();
            $('div.result_img4').empty();
            $('div.error_text').empty();
            $('div.error_img').empty();
            $('div.result_img2').append('<img src="img/dog.png"/>');
        }else if(((width >= 0.1) && (width <= 2)) && ((weight >= 0.1) && (weight <= 3.5)) && ((lenght >= 0.1) && (lenght <= 5)) && ((height >= 0.1) && (height <= 1.85))){
            $('.result').html("Your car is great. But your car is standard. Please, choose this type and check it again");
            $('div.result_img1').empty();
            $('div.result_img2').empty();
            $('div.result_img3').empty();
            $('div.result_img4').empty();
            $('div.error_img').empty();
            $('div.error_text').empty();
            $('div.result_img3').append('<img src="img/olya.png"/>');
        }else if((weight > 0) && (width  > 0) && (lenght > 0) && (height > 0) && (weight > 3.5) || (width > 2) || (lenght > 7) || (height > 2.9))  {
            $('.result').html("You car is too big for SupperFeries"); 
            $('div.result_img1').empty();
            $('div.result_img2').empty();
            $('div.result_img3').empty();
            $('div.result_img4').empty();
            $('div.error_img').empty();
            $('div.error_text').empty();
       }else{
            $('div.result').empty();
            $('div.result_img1').empty();
            $('div.result_img2').empty();
            $('div.result_img3').empty();
            $('div.result_img4').empty();
            $('div.error_img').empty();
            $('div.error_img').append('<img src="img/error.png"/>');
            $('.error_text').html('error');     
        }
    }else if(value == 'CAR AND TRAILER'){
        var car, width, height, lenght, weight;
        
        width = jQuery('.width-input').val();
        lenght = jQuery('.lenght-input').val();
        height = jQuery('.height-input').val();
        weight = jQuery('.weight-input').val();
        
        lenght = parseFloat(lenght);
        height = parseFloat(height);
        width = parseFloat(width);
        weight = parseFloat(weight);
        if(((width >= 0.1) && (width > 2)) || ((weight >= 0.1) && (weight > 3.5)) && ((lenght >= 0.1) && (lenght > 7)) && ((height >= 0.1) && (height > 2.9))){
            $('.result').html("You car is too big"); 
            $('div.result_img1').empty();
            $('div.result_img2').empty();
            $('div.result_img3').empty();
            $('div.result_img4').empty();
            $('div.error_text').empty();
            $('div.error_img').empty();
            $('div.result_img3').append('<img src="img/dom.png"/>');
       }else if(((width >= 0.1) && (width <= 2)) && ((weight >= 0.1) && (weight <= 3.5)) && ((lenght >= 0.1) && (lenght <= 7)) &&  ((height > 1.85) && (height <= 3))){
            $('.result').html("Your car is great for SuperFerries.");
            $('div.result_img1').empty();
            $('div.result_img2').empty();
            $('div.result_img3').empty();
            $('div.result_img4').empty();
            $('div.error_text').empty();
            $('div.error_img').empty();
            $('div.result_img2').append('<img src="img/cat.png"/>');
        }else{
            $('div.result').empty();
            $('div.result_img1').empty();
            $('div.result_img2').empty();
            $('div.result_img3').empty();
            $('div.result_img4').empty();
            $('div.error_img').empty();
            $('div.error_img').append('<img src="img/error.png"/>');
            $('.error_text').html('error');     
        }
    }else{
        $('div.result').empty();
        $('div.result_img1').empty();
        $('div.result_img2').empty();
        $('div.result_img3').empty();
        $('div.result_img4').empty();
        $('div.error_img').empty();
        $('div.error_img').append('<img src="img/error.png"/>');
        $('.error_text').html('error');  
    }
    })

    jQuery(".search").on('click', function(){
            alert("Sorry, but now our website can't search information for you:(");
        })
    
})
