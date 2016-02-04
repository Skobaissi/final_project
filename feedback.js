$(document).ready(function() {
  $(".btn").on("click", addItem);
  $("ol").on("click",".link-delete", deleteItem);
});

function addItem() {
  var text = $(".feedback")
  var delete_link = 'a href ="#" class="link-delete">(Delete)</a>'
  $(".addlist").append("<li>" + text + " " + delete_link + "<li>");
  // $(".addlist").html(text);
  var numItems = $("li").length;

  if (numItems ==1) {
    $(".total").html(numItems + " feedback item");
  }
  else {
    $(".total").html(numItems + " feedback items");
  }
}
function deleteItem(event) {
  console.info(event);
  $(event.target).parent().fadeOut();
}
