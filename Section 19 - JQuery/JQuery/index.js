// JQuery in Action

// 1. Selecting Elements
// $("h1"); //selects only 1 h1 element since we had only 1 h1 tag
// $("button"); //selects 5 buttons since we had 5 buttons
// $(".heading");
// $("#heading");
// $(".container h1"); //selects h1 inside container


// 2. Styling Elements (do in css - recommended)
// let thirdBtn = $("button").eq(2); //selects third button based on 2nd index
// thirdBtn.css("color","red");
// $("h1").css("color","red");
// adding heading class we defined in css
// $("h1").addClass("heading");
// // removing heading class
// $("h1").removeClass("heading");
// // checking if class exists
// console.log($("h1").hasClass("heading"));
// //adding multiple classes
// $("h1").addClass("heading font-shadow");


// 3. Manipulating Text
// $("h1").text("Welcome to JQuery"); //changes inner text only but affects all h1 bcz we are targeting using tag
// $("button").html("<em>Don't Click Me</em>>"); //changes inner text as well as add html shorthand of innerHTML
// //Changing text/inner html of specific button using eq (index)
// $("button").eq(2).html("<strong>Third Button</strong>");
// $("button").eq(0).text("First Button");


// 4. Manipulating Attribute
// console.log($("a").attr("href")); //checking what is value of href
// $("a").attr("href","https://www.google.com"); //getting and setting defined attribute
// $("a").attr("target","_blank"); //getting and setting new attribute


// 5. Adding Event Listener
// $("button").click(function(){
//     $("h1").addClass("heading font-shadow");
// });

// For more events visit
// https://developer.mozilla.org/en-US/docs/Web/Events
// $("button").eq(0).click(function(){
//     $("h1").addClass("heading font-shadow");
// });
//
// $("button").eq(1).click(function(){
//     $("h1").removeClass("heading font-shadow");
// });
//
// $(document).on("keydown", function(event){
//     let pressedKey = event.key;
//     // console.log(pressedKey);
//     $("h1").text(`You pressed ${pressedKey} key`);
// });


// 6. Adding and Removing HTML Elements
// $("h1").on("mouseover", function(){
//     $("h1").before("<a>New Link inserted</a><br>");
// });

// $("h1").on("mouseover", function(){
//     $("h1").after("<a>New Link inserted</a><br>");
// });

//prepend will add the a tag inside h1 html before content like h1 has hello as content it added before but inside
// $("h1").prepend("<a href='#'>Link Tag</a>"); //added before html content
//
// //append will add the a tag after html content
// $("h1").append("<a href='#'>More Link Tag</a>");
//
// // when button is clicked the a tags inside h1 will be removed
// $(".rem-btn").on("click", function(){
//     $("h1 a").remove();
//     $(".rem-btn").css("display", "none");
// });

// Toggle effect on click
$('.faq-question').click(function() {
    // Then $(this) is that question ('faq-question'), and .next('.faq-answer') selects this
    // 'slow' adds an animation effect to show/hide the element slowly.
    $(this).next('.faq-answer').toggle('slow');
});