playerPlay = function(){
    var selection={
        rock:"#rock",
        paper:"#paper",
        scissors:"#scissors",
          
    }
    return{
       
        selct: function(){
            return selection
        }      



    }
}()
computerPlay = function(){
    list=['rock','paper','scissors']
    return{
        cselect: function(){
            return list[Math.floor(Math.random()*list.length)]
        }
        
    }
    
}()

playRound = function (playerSelection,computerSelection) {
    var eventMatters = function(){
        var player =playerSelection.selct()
        var Rock = document.querySelector(player.rock)
        Rock.addEventListener("click",  function(){
            if(computer() == "rock"){
                alert('it is a tie')
            }else if(computer()=="paper"){
                alert('Computer wins')
            }else if(computer() == "scissors"){
                alert('you have won')
            }
        })
        var Paper = document.querySelector(player.paper)
        Paper.addEventListener("click",  function(){
            if(computer() == "paper"){
                alert('it is a tie')
            }
            else if(computer() == "rock"){
                alert('you have won')
            }
            else if(computer()=="scissors"){
                alert('Computer wins')
            }
        })
        var Scissors = document.querySelector(player.scissors)
        Scissors.addEventListener("click",  function(){
            if(computer() == "scissors"){
                alert('it is a tie')
            }
            else if(computer()=="rock"){
                alert('Computer wins')
            }
            else if(computer() == "paper"){
                alert('you have won')
            }
        })
    }
    var computer = function(){
        return computerSelection.cselect()
    }
    
    
    return{
        init:function(){
            eventMatters()
        }
    }
}(playerPlay,computerPlay)

playRound.init()