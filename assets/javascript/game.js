$(document).ready(function() {
    //Variable counts
    var wins = 0;
    var losses = 0;
    var score = 0;
    
    //Computer pick random starting number
    var compPick = Math.floor(Math.random() * 102) + 19;
        $('#randomNumber').html(compPick);

    var picOne = Math.floor(Math.random() * 12) + 1;
    var picTwo = Math.floor(Math.random() * 12) +1;
    var picThree = Math.floor(Math.random() * 12) +1;
    var picFour = Math.floor(Math.random() * 12) +1;

    function reset () {
        compPick = Math.floor(Math.random() * 102) + 19;
            $('#randomNumber').html(compPick);
        score = 0;
            $('#score').html(score);
        picOne = Math.floor(Math.random() * 12) + 1;
        picTwo = Math.floor(Math.random() * 12) +1;
        picThree = Math.floor(Math.random() * 12) +1;
        picFour = Math.floor(Math.random() * 12) +1;
    };

    $('#one').on('click', function () {
        score += picOne;
        WinLoose();
        $('#score').text(score);
    });
    $('#two').on('click', function () {
        score += picTwo;
        WinLoose();
        $('#score').text(score);
    });
    $('#three').on('click', function () {
        score += picThree;
        WinLoose();
        $('#score').text(score);
    });
    $('#four').on('click', function () {
        score += picFour;
        WinLoose();
        $('#score').text(score);
    });

    function WinLoose () {
        if (score === compPick) {
            wins += 1;
            $('#wins').text(wins)
            reset();
        } else if (score > compPick) {
            losses += 1;
            $('#losses').text(losses);
            reset();
        }
    }
});