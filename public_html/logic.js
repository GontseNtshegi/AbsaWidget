       $(document).ready(function(){         
                $('#star').hide();
                $('.toggler').hide();
                
                $('button').click(function(){// hide Rate us button 
                    $('#star').show("highlight",1000);
                    $('button').hide();
                    $( ".toggler" ).show( "blind", 1000 );
                });
                
                $('input[type=submit]').click(function(){//when clicking send feedback
                    alert("Rating and Feedback sent successfully");
                    $('button').show();
                    $( ".toggler" ).hide("blind");
                    $('#star').hide();
                   
                });
                
                });