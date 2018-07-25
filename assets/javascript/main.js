$(document).ready(function() {

    var gem1 = 0;
    
    var gem2 = 0;
    
    var gem3 = 0;
    
    var gem4 = 0;
    
    var wins = 0;
    
    var losses = 0;
    
    var totalScore = 0;
    
    var randomNumber;
    
    var randomize = false;
    
    
    $(".gems").on("click", function(){
    
        if (randomize === false) {
        
            randomNumber = Math.floor(Math.random() * 200) + 100;
            gem1 = Math.floor(Math.random() * 20) + 1;
            gem2 = Math.floor(Math.random() * 20) + 1;
            gem3 = Math.floor(Math.random() * 20) + 1;
            gem4 = Math.floor(Math.random() * 20) + 1;
            $(".random").text("Random Number: " + randomNumber);
            randomize = true;
        }
    })
    
    function statUpdate() {
        if (totalScore === randomNumber) {
            alert("Congratz!");
            wins++;
            totalScore = 0;
            $(".wins").html("Wins: " + wins);
            $(".score").html("Total Score: " + totalScore);
        }
        
        if (totalScore > randomNumber) {
            alert("Ouch! You went over, try again");
            losses++;
            totalScore = 0;
            $(".losses").html("Losses: " + losses);
            $(".score").html("Total Score: " + totalScore);
            randomize = false;
        }
    }
    
    $(".gem1").on("click", function(){
    
        totalScore = totalScore + gem1;
        $(".score").html("Total Score: " + totalScore);
        
       statUpdate();
    
    })
    
    $(".gem2").on("click", function(){
    
        totalScore = totalScore + gem2;
        $(".score").html("Total Score: " + totalScore);
        
        statUpdate();
    
    })
    
    $(".gem3").on("click", function(){
    
        totalScore = totalScore + gem3;
        $(".score").html("Total Score: " + totalScore);
        
        statUpdate();
    
    })
    
    $(".gem4").on("click", function(){
        
        totalScore = totalScore + gem4;
        $(".score").html("Total Score: " + totalScore);
        
        statUpdate();
    
    })
    
    })