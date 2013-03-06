$(document).ready(function(){

  var keywordInput = $('#keyword'),
      searchButton = $('#search'),
      displayFeed = $('#feed'),
      keyword ='',
      content = '';

      // .focus is when you click inside a form
      // .blur is when you click outside a form
      keywordInput.focus(function(){
        displayFeed.empty(); // clear the tweets
        keywordInput.val('');    
      });	

      // search and display the tweets
      searchButton.click(function(){
        keyword = keywordInput.val();

        // request our query from twitter
        $.getJSON('http://search.twitter.com/search.json?callback=?&q=' + keyword, function(data){

          console.log(data);

          $.each(data.results, function(i,value){
            content = '<p>' + value.from_user_name + '<a href="https://twitter.com/' + value.from_user + '"target="_blank" > <img src="'+ value.profile_image_url + '"/> </a>' + ' - '+ value.text + '</p>';

            displayFeed.append(content);

            displayFeed.find('p').highlight(keyword);

          }); // end .each loop

        }); // end .getJSON

      }); //end search click

});

/* RESOURCES

Twitter API: https://dev.twitter.com/

jQuery AJAX reference: http://api.jquery.com/category/ajax/

*/