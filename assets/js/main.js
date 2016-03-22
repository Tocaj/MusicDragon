var artists = [];
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
    artists = ["coldplay", "kent", "omnium gatherum", "frans", "adele"];
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
    setIndexes();   
    appendResults();
//    appendResults(result2);
    
    
   
}


function clearResults (id) {
    document.getElementById(id).innerHTML = "<br>";
}

function setIndexes () {
    index = resultCounter.indexOf(Math.max.apply(null, resultCounter)); 
    
//    console.log("index");
//    console.log(index);
//    
    result1 = artists[index];
    
//    console.log("rC v1");
//    console.log(resultCounter);
    
    resultCounter.splice(index, 1);
    
//    console.log("rC v2");
//    console.log(resultCounter);
//    
//    console.log("artists[] v1");
//    console.log(artists);
//    
    artists.splice(index, 1);
    
//    console.log("artists[] v2");
//    console.log(artists);
    
    sIndex = resultCounter.indexOf(Math.max.apply(null, resultCounter));
    
//    console.log("sIndex");
//    console.log(sIndex);
    
    result2 = artists[sIndex];
  
}

function appendResults() {
    resultString = result1.substring(0, 1).toUpperCase() + result1.substring(1); 
    $("#divResult").append("<div class='showArtist'><a href='" + result1 + ".html'>" + resultString + "</a><br></div>");    
    
    resultString = result2.substring(0, 1).toUpperCase() + result2.substring(1); 
    $("#divResult").append("<div class='showArtist'><a href='" + result2 + ".html'>" + resultString + "</a><br></div>"); 
}

















