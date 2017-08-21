

    var characters=[];

    function alertCharacterName(){
        var characterName=$(this).attr("data-name");
    };

    function renderbuttons(){
        $("#buttons-view").empty();

        for (var i=0; i<characters.length; i++){
            var a=$("<button>");
            a.addClass("characterButtons");
            a.attr("data-name", characters[i]);
            a.text(characters[i])
            $("#buttons-view").append(a);
        }
    };
    // var queryURL= "http://api.giphy.com/v1/gifs/search?q="+alertCharacterName()+"&api_key=4b53e1ef074945a5b3899becc4e451c4";



$(document).ready(function(){

    $("#addCharacter").click(function(event) {

    event.preventDefault();
    var character = $("#character-input").val().trim();
    characters.push(character);
    console.log(characters);

        renderbuttons();
$(document).on("click", ".characterButtons", alertCharacterName);

    var queryURL= "http://api.giphy.com/v1/gifs/search?q="+character+"&api_key=4b53e1ef074945a5b3899becc4e451c4&limit=10";

            console.log(queryURL);

        $.ajax({url: queryURL,
            method: "GET"
        })
        .done(function(response){
            console.log(response);
            for (var i=0; i<response.data.length;i++){
                $(".col-xs-8").prepend("<p>Rating: "+response.data[i].rating+"</p>");
                $(".col-xs-8").prepend("<img src= '"+response.data[i].images.downsized.url+"'>")

            }
        })


    });
    // alertCharacterName();


})
