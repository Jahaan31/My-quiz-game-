class Contestant{
constructor(){
   this.index = null 
   this.answer = 0 
   this.name = null  
}

getCount(){
    var count = database.ref('ContestantCount').on("value", function(data){
        contestantCount = data.val()
    })
}

updateCount(hi){
    database.ref('/').update({
     ContestantCount : hi 
    })
}

update(){
    var contestantIndex = "contestants/contestant" + this.index
    database.ref(contestantIndex).set({
        name : this.name,
        answer : this.answer
    })
}

static getPlayerInfo(){
    var contestant = database.ref('contestants'). on("value", function(data){
    allContestant = data.val()
})
}
}