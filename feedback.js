$(document).ready(function() {
  $(".btn").on("click", addItem);
  $("#myTable tbody").on("click",".link-delete", deleteItem);
});

function addItem() {
  var text = window.prompt("Enter feedback here");
  var delete_link = '<a href ="#" class="link-delete">(Delete)</a>'
  $("#myTable tbody").append("<tr><td><li>" + text + " " + delete_link + "</td></tr></li>");

  var numItems = $("li").length-4;
    if (numItems == 1) {
      $(".total").html(numItems + " item");
    }
    else {
      $(".total").html(numItems + " items");
    }
}

function deleteItem(event) {
  console.info(event);
  $(event.target).parent().fadeOut();
}
