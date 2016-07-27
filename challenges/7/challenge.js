function render(items) {
  var $target_div = $("div#target");
  items.forEach(function(item){
    $target_div.append("<p>" + item.message + "</p>");
  })
}

$(document).ready(function(){

  /*
   * When the user clicks "tweet", can you submit the form
   * using ajax and then depending on the response, either
   * render the ajax-response data, or alert the user of the error?
   * NOTE: When the user is logged in, the cookie is: `logged_in=true`;
  */
  $('form').submit(function handleSubmit(e) {
    e.preventDefault();
    var $form = $('form');
    var data = $form.serialize();

    $.post("/api/tweets", data)
     .success(function handleSuccess(response){
        // render response data
        render(response.data);
     })
     .error(function handleError(response, status){
        // alert the user that they need to login (401, "not authorized")
        alert('Error: log in, jackass', status);
     })
  });

})













// IGNORE

$(document).ready(function(){
  setupLoggedInButton();
})

function setupLoggedInButton(){
  eraseCookie("logged_in");
  $("button#login-logout").on("click", function(e){
    if ( readCookie("logged_in") ) {
      eraseCookie("logged_in")
      $(this).text("Add Login Cookie")
    } else {
      createCookie("logged_in", "true", 1)
      $(this).text("Remove Login Cookie")
    }
  })
}

// Cookie Manipulation
// Source: http://www.quirksmode.org/js/cookies.html

function createCookie(name,value,days) {
  if (days) {
    var date = new Date();
    date.setTime(date.getTime()+(days*24*60*60*1000));
    var expires = "; expires="+date.toGMTString();
  }
  else var expires = "";
  document.cookie = name+"="+value+expires+"; path=/";
}

function readCookie(name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(';');
  for(var i=0;i < ca.length;i++) {
    var c = ca[i];
    while (c.charAt(0)==' ') c = c.substring(1,c.length);
    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
  }
  return null;
}

function eraseCookie(name) {
  createCookie(name,"",-1);
}
