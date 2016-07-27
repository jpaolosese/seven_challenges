function render(items) {
  // DO NOT MODIFY
  var $target_div = $("div#target");
  items.forEach(function(item){
    $target_div.append("<p>" + item.message + "</p>");
  })
}

$(document).ready(function(){

  /*
   * Can you request tweets from `/api/tweets/1`,
   * `/api/tweets/2`, `/api/tweets/3`, etc.
   * and render the corresponding tweet to the page
   * using the `render` function, above?
   * (HINT: you will need to update the server logic!)
  */

  // AJAX request to `/api/tweets/1`
    // render(response.data);
  //
  $.get('/api/tweets/2', function success(response) {
    render(response.data);
  })

})
