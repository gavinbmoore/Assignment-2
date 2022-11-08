var xmmhttps = new XMLHttpRequest();
var url = 'senators.json'

var data;
var senatorDisplayList = [];
var filteredSenatorList = [];
var partyFilter = "";
var rankFilter = "";
var stateFilter = "";

xmmhttps.onreadystatechange = function() {
    if (xmmhttps.readyState == 4 && xmmhttps.status == 200) {
        data = JSON.parse(xmmhttps.responseText)
        console.log(data)
        
        partyCount(data);
        leadershipRoles(data);
        senatorDisplay(data);
        // filterByParty(data);
        // filterByState(data,stateFilter)
        // filterByRank(data,stateFilter)
        
    }
}
xmmhttps.open('GET', url, true)
xmmhttps.send()


function submit(type) {
    console.log(type)
}

function partyCount(data){
    var republicanCount = 0;
    var democratCount = 0;
    var independentCount = 0;
    for(let i = 0; i < data.objects.length; i++) {
        
        if(data.objects[i].party=="Republican"){
            republicanCount++;
        }
        if(data.objects[i].party=="Democrat"){
            democratCount++;
        }
        if(data.objects[i].party=="Independent"){
            independentCount++;
        }

    }
    document.getElementById("Democrats").innerHTML = democratCount;
    document.getElementById("Republicans").innerHTML = republicanCount;
    document.getElementById("Independents").innerHTML = independentCount;

}

function leadershipRoles(data){
    leadershipRolesList = [];
    for(let i = 0; i < data.objects.length; i++) {
        if(data.objects[i].leadership_title != null) {
            leadershipRolesList.push(data.objects[i].leadership_title,data.objects[i].person.firstname, data.objects[i].person.lastname, "("+data.objects[i].party+")" + "<br>")
        }
        
        // document.getElementById("demo").innerHTML = leadershipRolesList;
    }   
    console.log(leadershipRolesList);
    document.getElementById("leadershipRoles").innerHTML = leadershipRolesList;
}


function senatorDisplay(data){
    
    for(let i = 0; i < data.objects.length; i++) {
        senatorDisplayList.push(data.objects[i].person.firstname, data.objects[i].person.lastname, data.objects[i].party, data.objects[i].state,data.objects[i].person.gender,data.objects[i].senator_rank + "<br>")
    }
    document.getElementById("senatorDisplay").innerHTML = senatorDisplayList;
    filteredSenatorList = senatorDisplayList;

}




// function filterByParty(data,partyFilt) {
//     var partyFiltered = [];
//     var partyFilter = partyFilt;

//     if(partyFilter==""){
//         for(let i = 0; i < data.objects.length; i++) {
//             partyFiltered.push(data.objects[i].person.firstname + " "+ data.objects[i].person.lastname +" " +data.objects[i].party+ " " + data.objects[i].state+ " " + data.objects[i].person.gender +" " +data.objects[i].senator_rank + "<br>");
//         }

//     }
//     else {
//         for(let i = 0; i < data.objects.length; i++) {
//             if(data.objects[i].party == partyFilter){
//                 partyFiltered.push(data.objects[i].person.firstname + " "+ data.objects[i].person.lastname +" " +data.objects[i].party+ " " + data.objects[i].state+ " " + data.objects[i].person.gender +" " +data.objects[i].senator_rank + "<br>");
//             }
//         }

//     }
//     // document.getElementById("senatorDisplay").innerHTML = partyFiltered;
//     return partyFiltered;
//     partyFiltered = [];
// }

// function filterByRank(data,rankFilt) {
//     var rankFiltered = [];
//     var rankFilter = rankFilt;

//     if(rankFilter==""){
//         for(let i = 0; i < data.objects.length; i++) {
//             rankFiltered.push(data.objects[i].person.firstname + " "+ data.objects[i].person.lastname +" " +data.objects[i].party+ " " + data.objects[i].state+ " " + data.objects[i].person.gender +" " +data.objects[i].senator_rank + "<br>");
//         }

//     }
//     else {
//         for(let i = 0; i < data.objects.length; i++) {
//             if(data.objects[i].senator_rank == rankFilter){
//                 rankFiltered.push(data.objects[i].person.firstname, data.objects[i].person.lastname, data.objects[i].party, data.objects[i].state,data.objects[i].person.gender,data.objects[i].senator_rank + "<br>")
//             }
//         }

//     }
//     document.getElementById("senatorDisplay").innerHTML = rankFiltered;
// }


// function filterByState(data,stateFilt) {
//     var stateFiltered = [];
//     var stateFilter = stateFilt;
//     if(stateFilter==""){
//         for(let i = 0; i < data.objects.length; i++) {
//             stateFiltered.push(data.objects[i].person.firstname + " "+ data.objects[i].person.lastname +" " +data.objects[i].party+ " " + data.objects[i].state+ " " + data.objects[i].person.gender +" " +data.objects[i].senator_rank + "<br>");
//         }

//     }
//     else {
//         for(let i = 0; i < data.objects.length; i++) {
//             if(data.objects[i].state == stateFilter){
//                 stateFiltered.push(data.objects[i].person.firstname + " "+ data.objects[i].person.lastname +" " +data.objects[i].party+ " " + data.objects[i].state+ " " + data.objects[i].person.gender +" " +data.objects[i].senator_rank + "<br>");
//             }
//         }

//     }
 
//     document.getElementById("senatorDisplay").innerHTML = stateFiltered;
//     console.log(stateFiltered);
//     stateFiltered = [];
// }



// function masterFilter(data) {
//     filterByParty(data,partyFilt);

    
// }

// masterFilter(data);

function masterFilter(partyFilter, stateFilter, rankFilter ) {
    var senDisplay = [];
    partyFilter = partyFilter;
    const senatorList = data.objects.filter(senator => senator.party == partyFilter);
    // console.log(senatorList);
    for(let senator of senatorList) {
        senDisplay.push(senator.person.firstname + " "+ senator.person.lastname +" " +senator.party+ " " + senator.state+ " " + senator.person.gender +" " +senator.senator_rank + "<br>");
    }
    document.getElementById("senatorDisplay").innerHTML = senDisplay;


    // for (let senator of data.objects) { 
    //     if(senator.party==partyFilter){
    //         console.log(senator.party)

    //     }
        
        // if (senator.party == 'Rep') { 

        // }
    
}

// function filter(data,party,state,rank) {
//     var partyFilter = party;
//     var stateFilter = state;
//     var rankFilter = rank;
//     senatorFilter = [];
//     for(let i = 0; i < data.objects.length; i++) {
//         senatorFilter.push(data.objects[i].person.firstname + " "+ data.objects[i].person.lastname +" " +data.objects[i].party+ " " + data.objects[i].state+ " " + data.objects[i].person.gender +" " +data.objects[i].senator_rank + "<br>")
//     }
//     if(partyFilter != ""){
//         var partyFiltered = [];
//         for(let i = 0; i < data.objects.length; i++) {
//             if(data.objects[i].party == partyFilter){
//                 partyFiltered.push(data.objects[i].person.firstname + " "+ data.objects[i].person.lastname +" " +data.objects[i].party+ " " + data.objects[i].state+ " " + data.objects[i].person.gender +" " +data.objects[i].senator_rank + "<br>");
//         }
//     }
//     console.log(partyFiltered);
        
//     }
//     if(stateFilter != ""){
//         filterByState(data,stateFilter);
//     }
//     if(rankFilter != ""){
//         rankFilter(data,rankFilter);
//     }
//     document.getElementById("demo").innerHTML = senatorFilter;
//     senatorFilter = [];

// }
