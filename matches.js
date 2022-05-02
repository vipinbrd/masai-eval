var masaidata=JSON.parse(localStorage.getItem("schedule"))

function handleVenue() {
    var selected = document.querySelector("#filterVenue").value;
 

    var filteredList = masaidata.filter(function (elem) {
      return elem.venue == selected;
    });

    displaydata(filteredList);
  }



displaydata(masaidata)
function displaydata(masaidata){
    document.querySelector("tbody").innerHTML=""
    masaidata.forEach(function(ele){
      
var row=document.createElement("tr")
var colom0=document.createElement("td")
colom0.innerText=ele.matchnum
var colom1=document.createElement("td")
colom1.innerText=ele.teamA
var colom2=document.createElement("td")
colom2.innerText=ele.teamB
var colom3=document.createElement("td")
colom3.innerText=ele.date
var colom4=document.createElement("td")
colom4.innerText=ele.venue
var colom5=document.createElement("p")
colom5.innerText="Add as Favourites"
colom5.style.color="green"
colom5.addEventListener("click",function(){
    myfav(ele)
})
row.append(colom0,colom1,colom2,colom3,colom4,colom5)
document.querySelector("tbody").append(row)

    })
}
var arrfav=JSON.parse(localStorage.getItem("favourites"))||[]
function myfav(ele){
    arrfav.push(ele)
   
    localStorage.setItem("favourites",JSON.stringify(arrfav))
}



