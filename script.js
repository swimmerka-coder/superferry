jQuery("document").ready(function () {
    
        jQuery("button").on('click', function(){
            var width, lenght, height, weight;
            
            width = jQuery('.width-input').val();
            lenght = jQuery('.lenght-input').val();
            height = jQuery('.height-input').val();
            weight = jQuery('.weight-input').val();
            
            lenght = parseFloat(lenght);
            height = parseFloat(height);
            
            if ((lenght <= 7) && (height <= 2.9) && (width <= 2) && (weight <= 3.5)){
                $('.result').html('Congratulations, your car is grear for SuperFerries');
                if (((lenght >= 5) && (lenght < 7)) && ((height > 1.85) && (height <= 2.9))){
                    $('div.result_img1').empty();
                    $('div.result_img2').empty();
                    $('div.result_img3').empty();
                    $('div.result_img4').empty();
                    $('div.result_img1').append('<img src="img/dom.png"/>');
                    $('.result').html('Congratulations, your car is grear for SuperFerries');
                }else if(((lenght >= 4) && (lenght <= 5)) && ((height <= 1.85) && (height >= 1))){
                    $('div.result_img1').empty();
                    $('div.result_img2').empty();
                    $('div.result_img3').empty();
                    $('div.result_img4').empty();
                    $('div.result_img2').append('<img src="img/olya.png"/>');
                    $('.result').html('Congratulations, your car is grear for SuperFerries');
                }else{
                    $('div.result_img1').empty();
                    $('div.result_img2').empty();
                    $('div.result_img3').empty();
                    $('div.result_img4').empty();
                    $('.result').html('Car not found')
                }
                
            }else if (((lenght >= 0.1) && (lenght <= 8)) && ((height >= 0.1) && (height <= 4)) && ((width >= 0.1) && (width <= 4)) && ((weight >= 0.1) && (weight <= 7))){
                if (((lenght <= 7.6) && (lenght > 7)) && ((height < 3.6) && (height >= 3.1))){
                    $('div.result_img1').empty();
                    $('div.result_img2').empty();
                    $('div.result_img3').empty();
                    $('div.result_img4').empty();
                    $('div.result_img3').append('<img src="img/cat.png"/>');
                    $('.result').html("I'm sorry, but your car is too big!");
                }else if(((lenght >= 5) && (lenght <= 7)) && ((height < 3.1) && (height <= 3.5))){
                    $('div.result_img1').empty();
                    $('div.result_img2').empty();
                    $('div.result_img3').empty();
                    $('div.result_img4').empty();
                    $('div.result_img4').append('<img src="img/dog.png"/>');
                    $('.result').html("I'm sorry, but your car is too big!");
                }else{
                    $('div.result_img1').empty();
                    $('div.result_img2').empty();
                    $('div.result_img3').empty();
                    $('div.result_img4').empty();
                    $('.result').html('Car not found')
                }
            }else{
                $('div.result_img1').empty();
                $('div.result_img2').empty();
                $('div.result_img3').empty();
                $('div.result_img4').empty();
                $('.result').html('Car not found')    
            }
    jQuery(".search").on('click', function(){
            alert("Sorry, but now our website can't search information for you:(");
        })
    
})
})