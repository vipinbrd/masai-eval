var favdata=JSON.parse(localStorage.getItem("favourites"))||[]
console.log(favdata)
displaydata(favdata)


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
colom5.innerText="DELETE"
colom5.style.color="red"
colom5.addEventListener("click",function(){
    myfav(ele)
})
row.append(colom0,colom1,colom2,colom3,colom4,colom5)
document.querySelector("tbody").append(row)

    })
}
function myfav(ele){
 var filterd=favdata.filter(function(abc){
return ele !=abc

 })
 localStorage.setItem("favourites",JSON.stringify(filterd))
   event.target.parentNode.remove()
}