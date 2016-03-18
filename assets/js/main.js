var artists = ["coldplay", "kent", "omnium gatherum", "frans", "adele"];
var newArtists = [];
var resultCounter = [];
var searchString, resultString, index, sIndex, result1, result2;


$("#searchInput").on("change", function () {
    search();
});


$("#buttonSearch").on("click", function() {
    search();
});

function search () {
    searchString = $("#searchInput").val(); 
    resultCounter = [0, 0, 0, 0, 0];
    searchString = searchString.toLowerCase();
    
    for (i=0; i<artists.length;i++) {
        
        for(j=0; j<artists[i].length; j++) {
            
            for(k=0; k<searchString.length; k++) {

                if (searchString.charAt(k) == artists[i].charAt(j)) {                  
                resultCounter[i] += 1;
                }                 
            }
        }        
    }
    
    clearResults("divResult");
    setIndexes(resultCounter);   
    appendResults(result1);
//    appendResults(result2);
    
    
   
}


function clearResults (id) {
    document.getElementById(id).innerHTML = "<br>";
}

function setIndexes (array) {
    newArtists = ["coldplay", "kent", "omnium gatherum", "frans", "adele"];
    index = array.indexOf(Math.max.apply(null, array)); 
//    result1 = artists[index];
//    console.log(result1);
    array.splice(index, 1); 
    newArtists.splice(index, 1);
    sIndex = Math.max.apply(null, array); 
//    result2 = newArtists[sIndex];
}

function appendResults(result) {
    var ph = result;
//    resultString = result.substring(0, 1).toUpperCase() + result.substring(1);    
    resultString = artists[index].substring(0, 1).toUpperCase() + artists[index].substring(1); 
    $("#divResult").append("<div class='showArtist'><a href='" + result + ".html'>" + resultString + "</a><br></div>");    
}

















