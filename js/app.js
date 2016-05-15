var JSON_Encoded;
var JSON_Decoded;

function listFreeChamps() {
    var API_KEY = "";
    API_KEY = $("#theKey").val();

    if (API_KEY !== "") {

        $.ajax({
            url: 'https://na.api.pvp.net/api/lol/na/v1.2/champion?freeToPlay=true&api_key=' + API_KEY,
            type: 'GET',
            dataType: 'json',
            data: {

            },
            success: function (json) {
                
                championID = [json.champions[0].id,
                              json.champions[1].id,
                              json.champions[2].id,
                              json.champions[3].id,
                              json.champions[4].id,
                              json.champions[5].id,
                              json.champions[6].id,
                              json.champions[7].id,
                              json.champions[8].id,
                              json.champions[9].id];
                for(var i = 0; i < 10; i++)
                {
                document.getElementById("s"+(i+1)+"ID").innerHTML = championID[i];
                }
                //JSON_Encoded = json;
                //JSON_Decoded = JSON.stringify(json);
            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                alert("error getting Summoner data!");
            }
        });
    } else {}
}

/*function encoded() {
    alert(JSON_Encoded);
}

function decoded() {
    alert(JSON_Decoded);
}*/