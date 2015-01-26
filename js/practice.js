function incrementLastArray(_array){
  var newArray = [];
  newArray = _array.slice(0);
  var lastNumber = newArray.pop();
  newArray.push(lastNumber + 1);
  return newArray;
}

function nameChanger(oldName){
 var finalName = oldName;
 var names = finalName.split(" ");
 names[1] = names[1].toUpperCase;
 names[0] = names[0].slice(0,1).toUpperCase() + names[0].slice(1).toLowerCase();
finalName = names.join(" ");

return finalName;

};

//JQuery

var navList;
navList = $('.nav-list');
var firstItem = navList.children().first();
var link = firstItem.find('a');
link.attr('href', '#1');


/*
For this quiz, change the font-size of all the article-items to 20px!

You must use jQuery's css() method!
*/

// Start with this variable!
var articleItems;

articleItems = $('.article-item');
articleItems.css('font-size', '20px');


/*
For this quiz, use jQuery's val method to make live changes to the 'Cool Articles' <h1>!

The starter code below creates an event listener that will run any time the input changes.
For more on events, check the instructor notes.
*/


$('#input').on('change', function() {
    var val, h1;
    val = $('#input').val(); //collect the value
    h1 = $('.articles').children('h1');
    h1.text(val);
});


/*
For this quiz, remove the <ul> from the first article item!

You must use jQuery's remove() method.
*/

// Start with this variable!
var articleItems;

articleItems = $('.article-item');
var ul = articleItems.find('ul');
ul.remove();


var family1, family2, bruce, madison, hunter;

family1 = $('#family1');
family2 = $('<div id= "family2"><h1>Family 2 </h1></div>');
bruce = $('<div id="bruce"><h2>Bruce</h2></div>');
madison = $('<div id="madison"><h3>Madison</h3></div>');
hunter = $('<div id="hunter"><h3>Hunter</h3></div>');
family2.insertAfter(family1);
family2.append(bruce);
bruce.append(madison);
bruce.append(hunter);






function numberAdder(){
	var text, number;
	text = $(this).text();
	number = text.length;
	$(this).text(text + " " + number);
}

$('p').each(numberAdder);




//anonymous function
	$(function(){
		$('img').attr('src', 'http://placepuppy.it/350/150');
	})








