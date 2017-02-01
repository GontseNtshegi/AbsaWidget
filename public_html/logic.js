       $(document).ready(function(){         
                $('#star').hide();
                $('.toggler').hide();
                
                $('button').click(function(){// hide Rate us button 
                    $( ".toggler" ).show( "blind", 1000 );
                    $('#star').show("highlight",500);
                    $('button').hide();
                    
                });
                
                $('input[type=submit]').click(function(){//when clicking send feedback
                    alert("Rating and Feedback sent successfully");
                    $('button').show();
                    $( ".toggler" ).hide("blind");
                    $('#star').hide();
                   
                });
                
                });