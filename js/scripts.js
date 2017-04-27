$(document).ready(function() {
        $("button#hello").click(function() {
          $("ul").append("<li>Hello!</li>");
        });

        $("button#goodbye").click(function() {
          $("ul").prepend("<li>Goodbye!</li>");
        });

        $("button#stop").click(function() {
          $("ul").prepend("<li>Stop copying me!</li>");
        });
      });
//The prepend() method inserts specified content at the beginning (or on top)of the selected elements.
//after( content )Insert content after each of the matched elements.
//appendTo( selector )Append all of the matched elements to another, specified, set of elements.
//before( content )Insert content before each of the matched elements
//clone( bool )Clone matched DOM Elements, and all their event handlers, and select the clones.
//clone( )Clone matched DOM Elements and select the clones.
//empty( ) Remove all child nodes from the set of matched elements.
//html( val ) Set the html contents of every matched element.
// html( ) Get the html contents (innerHTML) of the first matched element.
//insertAfter( selector ) Insert all of the matched elements after another, specified, set of elements.
//insertBefore( selector ) Insert all of the matched elements before another, specified, set of elements.
//prepend( content ) Prepend content to the inside of every matched element.
// prependTo( selector ) Prepend all of the matched elements to another, specified, set of elements.
// remove( expr ) Removes all matched elements from the DOM.
//replaceAll( selector ) Replaces the elements matched by the specified selector with the matched elements.
//replaceWith( content ) Replaces all matched elements with the specified HTML or DOM elements.
//text( val ) Set the text contents of all matched elements.
//text( ) Get the combined text contents of all matched elements.
//wrap( elem ) Wrap each matched element with the specified element.
//wrap( html ) Wrap each matched element with the specified HTML content.
//wrapAll( elem ) Wrap all the elements in the matched set into a single wrapper element.
//wrapAll( html ) Wrap all the elements in the matched set into a single wrapper element.
//wrapInner( elem ) Wrap the inner child contents of each matched element (including text nodes) with a DOM element.
//wrapInner( html ) Wrap the inner child contents of each matched element (including text nodes) with an HTML structure.
