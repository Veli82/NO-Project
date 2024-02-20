let info; //fetch data
let ul = document.querySelector('ul');

let urlGetCompInfo = "http://liveresultat.orientering.se/api.php?method=getcompetitioninfo&comp=28840"
let urlGetLastPassings = "http://liveresultat.orientering.se/api.php?method=getlastpassings&comp=28840"
let urlGetClasses = "http://liveresultat.orientering.se/api.php?method=getclasses&comp=28840"
let urlGetClassResults = "http://liveresultat.orientering.se/api.php?comp=28808&method=getclassresults&unformattedTimes=false&class=M20"


async function fetchData() {
const request = new Request(urlGetClassResults);
const response = await fetch(request);
info = await response.json();
//console.log(info);
for (const child of ul.children) {
    for (const result of info.results) {
        if (child.firstElementChild.innerText === result.name)
        {
            child.children[1].innerText = result.result
        }
    }
}
}
fetchData();

let refreshBtn = document.querySelector("#refreshBtn")
{
    let newLi = document.createElement('li')
    newLi.innerText = addCompetitorInput.value
    ul.append(newLi)
}

//28840 - mom chasing start
//28808 - дп ски
//&last_hash=17ff0842ee425b9dd2c37c886d7523e2


//GUI implementation
