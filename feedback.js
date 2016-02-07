$(document).ready(function() {
  $(".btn").on("click", addItem);
  $("ol").on("click",".link-delete", deleteItem);
});

function addItem() {
  var text = window.prompt("Enter feedback here");
  // var x = document.getElementById("name");
  // var text = $("name")
  var delete_link = '<a href ="#" class="link-delete">(Delete)</a>'
  // var i;
  //   for (i = 0; i < x.length ;i++) {
  //       text += x.elements[i].value + "<br>";
  //   }
  // document.getElementById("addlist").innerHTML = text
  $("ol").append("<li>" + text + " " + delete_link + "</li>");

}

function deleteItem(event) {
  console.info(event);
  $(event.target).parent().fadeOut();
}
