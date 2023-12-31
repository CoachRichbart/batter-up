window.onload = function() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const team = urlParams.get('team')

    document.getElementsByClassName("pagetitle")[0].innerHTML = team;
  };





function updateLineups(){
    var obj;
    var games;
    var actualLineup = [];
    var allTheDiffs;

    var todaysGames = [];

    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const team = urlParams.get('team')

    // document.getElementsByClassName("pagetitle")[0].innerHTML = team;


    fetch('https://statsapi.mlb.com/api/v1/schedule?sportId=1&language=en&hydrate=lineups', {

    })

    .then(res => res.json())
  .then(data => {
    obj = data;
    console.log(data);

   })
  .then(() => {
    console.log(obj);
    obj.dates[0].games.forEach(game => {

        var x = [game.teams.home.team.name, game.teams.away.team.name];
        todaysGames.push(x);

        if(game.teams.away.team.name == team){
            // console.log('*********' + game.teams.away.team.name);

            game.lineups.awayPlayers.forEach(player => {
                // console.log(player.fullName);
                actualLineup.push(player.fullName);
            })
        } else if(game.teams.home.team.name == team){

            // console.log('*********' + game.teams.home.team.name);
            game.lineups.homePlayers.forEach(player => {
                // console.log(player.fullName);
                actualLineup.push(player.fullName);
            })
        }
        console.log(actualLineup);
    var battingNumber = 1;
    actualLineup.forEach(actualBatter => {
        // console.log(battingNumber);
        document.getElementById(battingNumber + "a").value = actualBatter;
        battingNumber += 1;
    })
    });
   })
   .then(() => {this.allTheDiffs = this.evaluateLineupDiffs();
        console.log(todaysGames);
        // todaysGames.forEach(element => {
        //     document.body.innerHTML += '<div class="item">' + element + '</div>'
        // });

    })
   .then(() => {this.updateTheColors(this.allTheDiffs);})
   ;


//    var allTheDiffs = this.evaluateLineupDiffs();
//    this.updateTheColors(allTheDiffs);

}

function evaluateLineupDiffs() {
    var fdLineup = [];
    var one = document.getElementById("1").value;
    var two = document.getElementById("2").value;
    var three = document.getElementById("3").value;
    var four = document.getElementById("4").value;
    var five = document.getElementById("5").value;
    var six = document.getElementById("6").value;
    var seven = document.getElementById("7").value;
    var eight = document.getElementById("8").value;
    var nine = document.getElementById("9").value;

    fdLineup.push(one,two,three,four,five,six,seven,eight,nine);

    // console.log(fdLineup[2]);

    var actualLineup = [];
    var one = document.getElementById("1a").value;
    var two = document.getElementById("2a").value;
    var three = document.getElementById("3a").value;
    var four = document.getElementById("4a").value;
    var five = document.getElementById("5a").value;
    var six = document.getElementById("6a").value;
    var seven = document.getElementById("7a").value;
    var eight = document.getElementById("8a").value;
    var nine = document.getElementById("9a").value;

    actualLineup.push(one,two,three,four,five,six,seven,eight,nine);

    // console.log(actualLineup[2]);
    var allTheDiffs = [];

    actualLineup.forEach(batter => {



        allTheDiffs.push(getThreeBattersAhead(fdLineup, actualLineup, batter));


        // var fdThreeAhead = this.getThreeBattersAhead(fdLineup, fdBatter);
        // console.log('FANDUEL');
        // console.log(fdThreeAhead);

        // var actualThreeAhead = this.getThreeBattersAhead(actualLineup, fdBatter);
        // console.log('ACTUAL');
        // console.log(actualThreeAhead);

        // console.log(fdBatter);
        // console.log(fdLineup.findIndex('Ronald Acuna'));
        // console.log(fdLineup.findIndex(fdBatter));

        // let actualPosition = actualLineup.indexOf(fdBatter);

        // let fdPosition = fdLineup.indexOf(fdBatter);
        // let fdOneAhead = batterAhead(fdPosition);
        // let fdTwoAhead = batterAhead(fdOneAhead);
        // let fdThreeAhead = batterAhead(fdTwoAhead);

        // let fdOneAhead = this.getOneAheadFd(fdLineup, fdPosition);
        // let fdTwoAhead = this.getOneAheadFd(fdLineup, batterAhead(fdPosition));
        // let fdThreeAhead = this.getOneAheadFd(fdLineup, fdPosition);

    });

   return allTheDiffs;


}

function updateTheColors(allTheDiffs){


    var battingPosition = 1;
    allTheDiffs.forEach(batterDiffs => {
        let numberOfDiffs = batterDiffs.length;
        // console.log('***********');
        // console.log(battingPosition);
        // console.log(numberOfDiffs);
        // console.log(batterDiffs);

        if(numberOfDiffs == 1){
            document.getElementById(battingPosition + "a").style.backgroundColor = 'orange';
        } else if(numberOfDiffs == 2){
            document.getElementById(battingPosition + "a").style.backgroundColor = 'blue';
        } else if(numberOfDiffs == 3){
            document.getElementById(battingPosition + "a").style.backgroundColor = 'green';
        } else if(numberOfDiffs == 4){
            document.getElementById(battingPosition + "a").style.backgroundColor = 'red';
        } else if(numberOfDiffs == 0){
            document.getElementById(battingPosition + "a").style.backgroundColor = '';
        }

        battingPosition += 1;

    });
}

function getThreeBattersAhead(fdLineup, actualLineup, batter){

    var threeAheadDiffs = [];

    // let fdPosition = fdLineup.indexOf(batter);
    let fdPosition = findBatterInLineup(fdLineup, batter);
    // let fdPosition = fdLineup.indexOf(batter);
    let fdPosition = findBatterInLineup(fdLineup, batter);
    if(fdPosition < 0){
        //silly way of identifying player not in FD lineup.
        threeAheadDiffs = ['','','',''];
        return threeAheadDiffs;
    }
    let fdOnePositionAhead = batterAhead(fdPosition);
    let fdTwoPositionsAhead = batterAhead(fdOnePositionAhead);
    let fdThreePositionsAhead = batterAhead(fdTwoPositionsAhead);

    let actualPosition = actualLineup.indexOf(batter);
    let actualOnePositionAhead = batterAhead(actualPosition);
    let actualTwoPositionsAhead = batterAhead(actualOnePositionAhead);
    let actualThreePositionsAhead = batterAhead(actualTwoPositionsAhead);

    var fdAllThreeAhead = [fdLineup[fdOnePositionAhead], fdLineup[fdTwoPositionsAhead], fdLineup[fdThreePositionsAhead]];
    var actualAllThreeAhead = [actualLineup[actualOnePositionAhead], actualLineup[actualTwoPositionsAhead], actualLineup[actualThreePositionsAhead]];



    actualAllThreeAhead.forEach(actual => {

        if(!fdAllThreeAhead.includes(actual)){
            threeAheadDiffs.push(actual);
        }
    });

    // if(fdLineup[fdOnePositionAhead] != actualLineup[actualOnePositionAhead]){
    //     threeAheadDiffs.push(actualLineup[actualOnePositionAhead]);
    // } else {
    //     threeAheadDiffs.push('');
    // }

    // if(fdLineup[fdTwoPositionsAhead] != actualLineup[actualTwoPositionsAhead]){
    //     threeAheadDiffs.push(actualLineup[actualTwoPositionsAhead]);
    // } else {
    //     threeAheadDiffs.push('');
    // }

    // if(fdLineup[fdThreePositionsAhead] != actualLineup[actualThreePositionsAhead]){
    //     threeAheadDiffs.push(actualLineup[actualThreePositionsAhead]);
    // } else {
    //     threeAheadDiffs.push('');
    // }

    return threeAheadDiffs;
    // for (let index = 0; index < 3; index++) {
    //     console.log("zzzzzzzzzzzzzzzzzzzzzzzz");



    // }
}

// function getOneAheadActual(actualLineup, actualActualBatter){

//     let actualPosition = actualLineup.indexOf(fdBatter);
//     let fdOneAhead = batterAhead(fdPosition);
//     let fdTwoAhead = batterAhead(fdOneAhead);
//     let fdThreeAhead = batterAhead(fdTwoAhead);

//     return [fdLineup[fdOneAhead], fdLineup[fdTwoAhead], fdLineup[fdThreeAhead]];


// }

function batterAhead(batterPosition){
    let x = batterPosition - 1;
    if(x >= 0){
        return x;
    }else{
        return 8;
    }
}


function findBatterInLineup(lineup, batter){
    let lowercaseLineup = lineup.map((x) => x.toLowerCase());
    let lowercaseBatter = batter.toLowerCase();

    //Matched exactly
    let exact = lowercaseLineup.indexOf(lowercaseBatter);
    if(exact >= 0){
        return exact;
    }

    //Matched assuming last name is after first space
    let lastName = lowercaseLineup.map(lastNameOnly);
    let fuzzy = lastName.indexOf(lastNameOnly(lowercaseBatter));

    if(fuzzy >= 0){
        return fuzzy;
    }

    //Matched assuming whole thing is last name
    return lowercaseLineup.indexOf(lastNameOnly(lowercaseBatter));

}

function lastNameOnly(name){

    if(name == ''){return name;}
    let y = name.split(' ');
    y.shift();
    return y.join(' ');

}


function openCity(evt, cityName) {
        var i, tabcontent, tablinks;
        tabcontent = document.getElementsByClassName("tabcontent");
        for (i = 0; i < tabcontent.length; i++) {
          tabcontent[i].style.display = "none";
        }
        tablinks = document.getElementsByClassName("tablinks");
        for (i = 0; i < tablinks.length; i++) {
          tablinks[i].className = tablinks[i].className.replace(" active", "");
        }
        document.getElementById(cityName).style.display = "block";
        evt.currentTarget.className += " active";
      }
