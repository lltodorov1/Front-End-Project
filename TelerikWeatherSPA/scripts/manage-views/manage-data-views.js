var name1 = 'London';
var name2 = "Berlin";

jQuery(document).ready(function($) {
    $("<p>")
        .appendTo("#partOne")
        .html(destination(name1).getDataCity().name);
});


jQuery(document).ready(function ($) {
    // console.log( destination(name2).getDataCity());
});
