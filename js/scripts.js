// This code adds the same text to both lists.

// $(document).ready(function() {
//   $("button#hello").click(function() {
//     $("ul").append("<li>Hello!</li>");
//   });
//   $("button#goodbye").click(function() {
//     $("ul").append("<li>GoodBye!</li>");
//   });
//   $("button#stop").click(function() {
//     $("ul").append("<li>Stop copying me!</li>");
//   });
// });

$(document).ready(function() {
  $("button#hello").click(function() {
    $("ul#user").prepend("<li>Hello!</li>");
    $("ul#webpage").prepend("<li>Why hello there!</li>");
  });

  $("button#goodbye").click(function() {
    $("ul#user").prepend("<li>GoodBye!</li>");
    $("ul#webpage").prepend("<li>GoodBye, dear user!</li>")
  });
  $("button#stop").click(function() {
    $("ul#user").prepend("<li>Stop copying me!</li>");
    $("ul#webpage").prepend("<li>Pardon me. I meant no offense.</li>")
  });
});
