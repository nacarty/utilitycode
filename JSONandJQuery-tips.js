


$.getJSON( "ajax/test.json", function( data ) {

  var items = [];

  $.each( data, function( key, val ) {

    items.push( "<li id='" + key + "'>" + val + "</li>" );

  });

 

  $( "<ul/>", {

    "class": "my-new-list",

    html: items.join( "" )

  }).appendTo( "body" );

});

//-------------------------Try to Pick it apart -----------------------------------------//

var items = [];

function extract( key, val ) 
{

    items.push( "<li id='" + key + "'>" + val + "</li>" );

  
}

function getData(data)
{


$.each( data, extract(key, val));

$.getJSON( "ajax/test.json", getData );

 
 $( "<ul/>", {

    "class": "my-new-list",

    html: items.join( "" )

  }).appendTo( "body" );

});
