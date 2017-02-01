/*
 * Javascript to display the widget on any host page
 * Author gontse Ntshegi
 * Senior Full Stack Developer and Architect 
 */
(function() {

// Localize jQuery variables in case the host page has a similar variable
var jQuery;

/******** Load jQuery if not present *********/
function loadScript(url, callback) {
  /* Load script from url and calls callback once it's loaded */
  var scriptTag = document.createElement('script');
  scriptTag.setAttribute("type", "text/javascript");
  scriptTag.setAttribute("src", url);
  if (typeof callback !== "undefined") {
    if (scriptTag.readyState) {
      /* For old versions of IE */
      scriptTag.onreadystatechange = function () { 
        if (this.readyState === 'complete' || this.readyState === 'loaded') {
          callback();
        }
      };
    } else {
      scriptTag.onload = callback;
    }
  }
  (document.getElementsByTagName("head")[0] || document.documentElement).appendChild(scriptTag);
}


/******** Our main function ********/
function main() { 
    
    jQuery(document).ready(function($) { 
        /******* Load CSS *******/
        var css_link = $("<link>", { 
            rel: "stylesheet", 
            type: "text/css", 
            href: "style.css" 
        });
        css_link.appendTo('head');      
        
        css_link = $("<link>", { 
            rel: "stylesheet", 
            type: "text/css", 
            href: "//code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css" 
        });
        css_link.appendTo('head');
  
  /*********************************** SCRIPT  **********************************/      
                    
    });
    $("div.rate-me-widget").html("<button id='rate' class='ui-button ui-widget ui-corner-all'>Rate us</button>"+
            "<span class='starRating' id='star'>"+
              "<input id='star1' type='radio' name='rating' value='1'>"+
              "<label for='star1'>1</label>"+
              "<input id='star2' type='radio' name='rating' value='2'>"+
              "<label for='star2'>2</label>"+
              "<input id='star3' type='radio' name='rating' value='3'>"+
              "<label for='star3'>3</label>"+
              "<input id='star4' type='radio' name='rating' value='4'>"+
              "<label for='star4'>4</label>"+
              "<input id='star5' type='radio' name='rating' value='5'>"+
              "<label for='star5'>5</label>"+
           "</span>"+       
           "<div class='toggler' class='ui-widget-content ui-corner-all'>"+       
            "<textarea rows='5' cols='50' id='area'>Enter your feedback here...</textarea>"+    
            "<form name='feedbackform' action=''>"+        
            "<input type='submit' class='ui-button ui-widget ui-corner-all' value='Send Feedback'>"+
            "</form>"+           
           "</div>"
            );
   
}

loadScript("https://code.jquery.com/ui/1.12.1/jquery-ui.js", function() {
  /* Restore $ and window.jQuery to their previous values and store the
     new jQuery in our local jQuery variables. */
  $ = jQuery = window.jQuery.noConflict(true);
  main(); /* Execute the main logic of our widget once jQuery is loaded */
});
loadScript("https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js", function() {
  /* Restore $ and window.jQuery to their previous values and store the
     new jQuery in our local jQuery variables. */
  $ = jQuery = window.jQuery.noConflict(true);
  main(); /* Execute the main logic of our widget once jQuery is loaded */
});
//loadScript("logic.js", function() {
  /* Restore $ and window.jQuery to their previous values and store the
     new jQuery in our local jQuery variables. */
  //$ = jQuery = window.jQuery.noConflict(true);
 // main(); /* Execute the main logic of our widget once jQuery is loaded */
//});
})(); // We call our anonymous function immediately

