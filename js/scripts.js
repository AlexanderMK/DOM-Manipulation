$(document).ready(function() {
        $("button#hello").click(function() {
          $("ul").before("<li>Hello!</li>");
        });

        $("button#goodbye").click(function() {
          $("ul").append("<li>Goodbye!</li>");
        });

        $("button#stop").click(function() {
          $("ul").append("<li>Stop copying me!</li>");
        });
      });
