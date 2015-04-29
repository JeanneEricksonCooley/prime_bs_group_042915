var i;

var apikey = '10d0a85137d94904c75e456dcdf91468227c09ca'; // Put your API key here
// Use this function to do stuff with your results.
// It is called after 'search' is executed.


function searchCallback(results) {
    for(i=0; i < 8; i++) {
        console.log(results[i]);
    }

}






$(document).ready(function() {
// Start the search here!
    $(".searchButton").on("click", function(){
       //take in the user input, call search function
    });
});

search("batman");

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