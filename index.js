






var masaidata=JSON.parse(localStorage.getItem("schedule"))||[]
document.querySelector("#masaiForm").addEventListener("submit",myfunc)
function myfunc(){
    event.preventDefault()
var obj={
    matchnum:masaiForm.matchNum.value,
    teamA:masaiForm.teamA.value,
    teamB:masaiForm.teamB.value,
    date:masaiForm.date.value,
    venue:masaiForm.venue.value,

}
masaidata.push(obj)
localStorage.setItem("schedule",JSON.stringify(masaidata))
}