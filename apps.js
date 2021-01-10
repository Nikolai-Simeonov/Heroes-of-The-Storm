

$(function() {

    $(".heroes-container").mixItUp();
  
    var inputText;
    var $matching = $();
  
    // Delay function
    var delay = (function(){
      var timer = 0;
      return function(callback, ms){
        clearTimeout (timer);
        timer = setTimeout(callback, ms);
      };
    })();
  
    $("#input").keyup(function(){
      // Delay function invoked to make sure user stopped typing
      delay(function(){
        inputText = $("#input").val().toLowerCase();
        
        // Check to see if input field is empty
        if ((inputText.length) > 0) {            
          $( '.mix').each(function() {
            $this = $("this");
            
             // add item to be filtered out if input text matches items inside the title   
             if($(this).children('.title').text().toLowerCase().match(inputText)) {
              $matching = $matching.add(this);
            }
            else {
              // removes any previously matched item
              $matching = $matching.not(this);
            }
          });
          $(".heroes-container").mixItUp('filter', $matching);
        }
  
        else {
          // resets the filter to show all item if input is empty
          $(".heroes-container").mixItUp('filter', 'all');
        }
      }, 0 );
    });
  })
  


 /* // Select
  $(document).ready(function(){
  $('.showcase ').on('click', function(){
    $('.showcase').removeClass('selected');
    $(this).addClass('selected');
  })})
*/
// Select
/*$(document).ready(function(){
  $('.dropdown-menu button').on('click', function(){
    $('.dropdown-menu button').removeClass('select');
    $(this).addClass('select');
  })})
*/

// Lucio
$(function(){
  $(".lucio-dropdown-menu").on('click', 'button', function(){
    $(".lucio-dropdown:first-child").text($(this).text());
    $(".lucio-dropdown:first-child").val($(this).text());
 });
});

// Hanzo
$(function(){
  $(".hanzo-dropdown-menu").on('click', 'button', function(){
    $(".hanzo-dropdown:first-child").text($(this).text());
    $(".hanzo-dropdown:first-child").val($(this).text());
 });
});

// Valla
$(function(){
  $(".valla-dropdown-menu").on('click', 'button', function(){
    $(".valla-dropdown:first-child").text($(this).text());
    $(".valla-dropdown:first-child").val($(this).text());
 });
});

// Cassia
$(function(){
  $(".cassia-dropdown-menu").on('click', 'button', function(){
    $(".cassia-dropdown:first-child").text($(this).text());
    $(".cassia-dropdown:first-child").val($(this).text());
 });
});

// Greymane
$(function(){
  $(".greymane-dropdown-menu").on('click', 'button', function(){
    $(".greymane-dropdown:first-child").text($(this).text());
    $(".greymane-dropdown:first-child").val($(this).text());
 });
});

// Raynor
$(function(){
  $(".raynor-dropdown-menu").on('click', 'button', function(){
    $(".raynor-dropdown:first-child").text($(this).text());
    $(".raynor-dropdown:first-child").val($(this).text());
 });
});

// Imperius
$(function(){
  $(".imperius-dropdown-menu").on('click', 'button', function(){
    $(".imperius-dropdown:first-child").text($(this).text());
    $(".imperius-dropdown:first-child").val($(this).text());
 });
});

// Johanna
$(function(){
  $(".johanna-dropdown-menu").on('click', 'button', function(){
    $(".johanna-dropdown:first-child").text($(this).text());
    $(".johanna-dropdown:first-child").val($(this).text());
 });
});

// Abathur
$(function(){
  $(".abathur-dropdown-menu").on('click', 'button', function(){
    $(".abathur-dropdown:first-child").text($(this).text());
    $(".abathur-dropdown:first-child").val($(this).text());
 });
});
// Uther
$(function(){
  $(".abathur-dropdown-menu").on('click', 'button', function(){
    $(".abathur-dropdown:first-child").text($(this).text());
    $(".abathur-dropdown:first-child").val($(this).text());
 });
});
// Auriel
$(function(){
  $(".abathur-dropdown-menu").on('click', 'button', function(){
    $(".abathur-dropdown:first-child").text($(this).text());
    $(".abathur-dropdown:first-child").val($(this).text());
 });
});

