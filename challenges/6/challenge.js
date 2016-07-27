function render(items) {
  var $target_div = $("div#target");
  items.forEach(function(item){
    $target_div.append("<p>" + item.message + "</p>");
  });
}

$(document).ready(function(){

  /*
   * When the user clicks the "tweet" button, can you submit the form
   * using ajax and then render the ajax-response data?
  */
  $('form').submit(function (e) {
    e.preventDefault();
    var $form = $('form');
    var data = $form.serialize();
    $.post('/api/tweets', data, function success(response) {
      render(response.data);
    });
  });
});


























// IGNORE
document.cookie = "logged_in=; path=/";
