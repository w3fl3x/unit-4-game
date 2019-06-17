$(document).ready(function() {
    //Variable counts
    var wins = 0;
    var losses = 0;
    var score = 0;
    
    //Computer pick random starting number
    var compPick = Math.floor(Math.random() * 102) + 19;
        $('#randomNumber').html(compPick);

    var imgOne = Math.floor(Math.random() * 12) + 1;
        // $('#one').html('')
    var imgTwo = Math.floor(Math.random() * 12) +1;
    var imgThree = Math.floor(Math.random() * 12) +1;
    var imgFour = Math.floor(Math.random() * 12) +1;

    function reset () {
        compPick = Math.floor(Math.random() * 102) + 19;
            $('#randomNumber').html(compPick);

        score = 0;
            $('#totalScore').html(score);

        imgOne = Math.floor(Math.random() * 12) + 1;
            $('#one').html
    };

    $('img').on('click', function () {
        var newScore = score += parseInt($(this).attr('value'));
            $('#totalScore').html(newScore);

            if(newScore === compPick) {
                win++;
                $('#wins').html('Wins: ' + wins);
                reset();
            } else if (newScore > compPick) {
                losses++;
                $('#losses').html('Losses: ' + losses);
                reset();
            }
    });
});