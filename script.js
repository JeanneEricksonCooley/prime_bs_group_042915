var i = 0;
var gameArray = [];

var apikey = '10d0a85137d94904c75e456dcdf91468227c09ca'; // Put your API key here
// Use this function to do stuff with your results.
// It is called after 'search' is executed.

//search("batman");



function searchCallback(results) {
    $(".bob").empty();
    gameArray = results;
        $(".displayGames").append("<div class='bob'><h1>" + gameArray[0].name + "</h1><br><img src='" +     gameArray[0].image.thumb_url + "'/><br><p>" + gameArray[0].deck + "<br>" + gameArray[0].platforms[0].name + "</p></div>");

}
//$(".displayGames").append("<div class='bob'><h1>" + gameArray[0].name + "</h1><br><img src='" +     gameArray[0].image.thumb_url + "'/><br><p>" + gameArray[0].deck + "<br>" + gameArray[0].platforms[0].name + "</p></div>");


//function displayStuff(results) {

//}





$(document).ready(function() {
// Start the search here!

       //take in the user input, call search function
        $(".container").on("click", ".searchButton", function() {
            array = [];
            var searchVal = $(".searchField").val();
            console.log(searchVal);
            search(searchVal);
        });

    $(".left").on("click", function(){
        $(".bob").empty();
        i--;
        if(i == -1) {
            i = 7;
            //gameArray
            $(".displayGames").append("<div class='bob'><h1>" + gameArray[i].name + "</h1><br><img src='" +     gameArray[i].image.thumb_url + "'/><br><p>" + gameArray[i].deck + "<br>" + gameArray[i].platforms[0].name + "</p></div>");
        } else {
            $(".displayGames").append("<div class='bob'><h1>" + gameArray[i].name + "</h1><br><img src='" +     gameArray[i].image.thumb_url + "'/><br><p>" + gameArray[i].deck + "<br>" + gameArray[i].platforms[0].name + "</p></div>");

        }

    });

    $(".right").on("click", function(){
        $(".bob").empty();
        i++;
        if(i == 8){
            i = 0;
            //gameArray, use the information here, to append to the DOM, JUST LIKE YOU DO BEFORE!
            console.log(gameArray[i]);
            $(".displayGames").append("<div class='bob'><h1>" + gameArray[i].name + "</h1><br><img src='" +     gameArray[i].image.thumb_url + "'/><br><p>" + gameArray[i].deck + "<br>" + gameArray[i].platforms[0].name + "</p></div>");
        } else {
            $(".displayGames").append("<div class='bob'><h1>" + gameArray[i].name + "</h1><br><img src='" +     gameArray[i].image.thumb_url + "'/><br><p>" + gameArray[i].deck + "<br>" + gameArray[i].platforms[0].name + "</p></div>");
        }
    });
});


// HELPER FUNCTION
// Executes a search using 'query' and runs searchCallback on the results of a success.
function search(query){
    $.ajax ({
        type: 'GET',
        dataType: 'jsonp',
        crossDomain: true,
        jsonp: 'json_callback',
        url: 'http://www.giantbomb.com/api/search/?format=jsonp&resources=game&api_key=' + apikey +'&query=' + encodeURI(query),
        complete: function() {
            console.log('ajax complete');
        },
        success: function(data) {
            searchCallback(data.results);
        }
    });
}