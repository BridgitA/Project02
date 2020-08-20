
function getData(){

    var input = $("#search").val()
    

    var xhr = $.get("https://api.giphy.com/v1/gifs/search?api_key=rLYdhrgwH4Bt3A5luRaleol4AHs891pb&q=dogs&limit=30");

    xhr.done(function(response) { console.log("success got data", response); 

    var giffs = response.data

    for(i in giffs){
        $('.inner').append("<img src="+giffs[i].images.original.url+">")
    }

});

}


