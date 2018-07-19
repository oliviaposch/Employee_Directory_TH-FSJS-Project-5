$(document).ready(function(){
    console.log('ready!');
    $.ajax({
        //Get API data 
        url: 'https://randomuser.me/api/?results=12&nat=de',
        dataType: 'json',
        success: function(data) {
            //var employeeCards = '<div class="cards">';
            var employeeCards = '';
            var employeeMore = '';
            //for each person create one card
            $.each(data.results, function(index, employee){

                employeeCards += '<div class="card">';
                    employeeCards += '<div class="person-img">';
                        employeeCards += '<img src="' + employee.picture.large +'">';
                    employeeCards +='</div>'
                    employeeCards += '<div class="person-info">';
                        employeeCards += '<h2>'+ employee.name.first + ' '+ employee.name.last + '</h2>';
                        employeeCards += '<p class="email">' + employee.email + '</p>';
                        employeeCards += '<p class="city">' + employee.location.city + '</p>';
                    employeeCards += '</div>';
                   employeeCards += '<hr class="line none">';
                    employeeCards += '<div class="more none">'
                        employeeCards += '<p>' + employee.cell + '</p>';
                        employeeCards += '<p>' + employee.location.street + ' ' + employee.location.state + ', ' + employee.location.postcode + '</p>';
                        //display just the date
                        var brth = new Date(employee.dob.date).toLocaleString('en-GB').split(',');
                        var date = brth[0];
                        employeeCards += '<p class="brth">Birthday: '+ date +'</p>';
                    employeeCards += '</div>';
                employeeCards += '</div>'; 

            })//end loop 
            //html output
           $('.cards').html(employeeCards);
           //overlay Animation
           $('.card').on('click', function(event){
                $('.popup-window').append($(this).clone()).show();
                $('.popup-window .card hr').removeClass('none');
                $('.popup-window .card div.more').removeClass('none');
                //add event to a close button 
                $('.popup-window .card').append('<strong class="close">&#10006;</trong>');
                $('.close').on('click', function(event){ 
                    event.preventDefault();
                    $('.popup-window').hide();
                    $('.popup-window').children('div').remove();
                }) //end of close event  
                
            }) //end of click event     
        }
    });

}) 
