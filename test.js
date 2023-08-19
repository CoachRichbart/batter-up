 //get the lineups from api
 //deal with double headers


window.onload = function() {
    // const queryString = window.location.search;
    // const urlParams = new URLSearchParams(queryString);
    // const team = urlParams.get('team')

    // document.getElementsByClassName("pagetitle")[0].innerHTML = team;

    var obj;
    var games;
    var actualLineup = [];
    var allTheDiffs;

    // var awayLineup = [];
    // var homeLineup = [];

    var teamsPlaying = [];
    // var doubleHeaderTeamsPlaying = [];

    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    // const team = urlParams.get('team');

    const teamsContainer = document.getElementsByClassName("team-container");

    // document.getElementsByClassName("pagetitle")[0].innerHTML = team;


    fetch('https://statsapi.mlb.com/api/v1/schedule?sportId=1&language=en&hydrate=lineups', {

    })

    .then(res => res.json())
  .then(data => {
    obj = data;
    // console.log(data);

   })
  .then(() => {
    //console.log(obj);
    obj.dates[0].games.forEach(game => {
        // console.log(game.gameNumber);
        // var x = [game.teams.home.team.name, game.teams.away.team.name];
        // teamsPlaying.push(x);
        teamsPlaying.push(game.teams.away.team.name, game.teams.home.team.name);

        // if(game.gameNumber == 2){
        //     doubleHeaderTeamsPlaying.push(game.teams.away.team.name, game.teams.home.team.name);
        // }


        // // var selectors = [];
        // var away = '#' + game.teams.away.team.name.replace(/\s+/g, '').replace('.','') + 'Actual';
        // var home = '#' + game.teams.home.team.name.replace(/\s+/g, '').replace('.','') + 'Actual';

        // // selectors.push('#' + away + 'Actual', '#' + home + 'Actual');
        // //console.log('{{{{{{{{{{{{{{');
        // //console.log(away);
        // var awaySelector = document.querySelector(away);
        // //console.log(awaySelector);
        // var homeSelector = document.querySelector(home);

        // var awayCounter =  0;
        // game.lineups.awayPlayers.forEach(player => {
            //console.log(player.fullName);
        //     // awayLineup.push(player.fullName);
        //     awaySelector.children[awayCounter] = player.fullName;
        //     awayCounter += 1;

        // })

        // var homeCounter = 0;
        // game.lineups.homePlayers.forEach(player => {
            //console.log(player.fullName);
        //     // homeLineup.push(player.fullName);
        //     homeSelector.children[homeCounter] = player.fullName;
        //     homeCounter += 1;
        // })


    })


        // for (let i = 0; i < teamsContainer.length; i++) {
        // // for (let i = 0; i < teamsContainer.length; i++) {
        //     const teamName = teamsContainer[i].querySelector("h2").textContent;

        //     // const guessedList = teamsContainer[i].querySelector(`#${teamName.replace(/\s+/g, '').replace('.','')}Guess`);
        //     // const actualList = teamsContainer[i].querySelector(`#${teamName.replace(/\s+/g, '').replace('.','')}Actual`);

        //     // const guessedPlayers = [];
        //     // const actualPlayers = [];
        //     const fdLineup = [];
        //     const actualLineup = [];

        //     //for each player on that team
        //     for (let j = 0; j < guessedList.children.length; j++) {
        //         // const guessedInput = guessedList.children[j].querySelector("input");
        //         // const actualInput = actualList.children[j].querySelector("input");

        //         // fdLineup.push(guessedInput.value);
        //         // actualLineup.push(actualInput.value);
                //console.log('xxxxxxxxxxxxxx');
                // //console.log(guessedPlayers);

        //         // guessedInput.style.backgroundColor = guessedInput.value === actualInput.value ? "lightgreen" : "pink";
        //         // actualInput.style.backgroundColor = guessedInput.value === actualInput.value ? "lightgreen" : "pink";
        //     }

        // }




    //         if(game.teams.away.team.name == team){
            //console.log('*********' + game.teams.away.team.name);

//             game.lineups.awayPlayers.forEach(player => {
                //console.log(player.fullName);
//                 actualLineup.push(player.fullName);
//             })
//         } else if(game.teams.home.team.name == team){

            //console.log('*********' + game.teams.home.team.name);
//             game.lineups.homePlayers.forEach(player => {
                //console.log(player.fullName);
//                 actualLineup.push(player.fullName);
//             })
//         }
        // //console.log(actualLineup);
//     var battingNumber = 1;
//     actualLineup.forEach(actualBatter => {
        //console.log(battingNumber);
//         document.getElementById(battingNumber + "a").value = actualBatter;
//         battingNumber += 1;
//     })
//     });
//    })
//    .then(() => {
//         teamsPlaying.forEach(element => {
//                     document.body.innerHTML += '<div class="item">' + element.join(' at ') + '</div>'
//                 });
//    })



//    .then(() => {this.allTheDiffs = this.evaluateLineupDiffs();
        // //console.log(teamsPlaying);
//         teamsPlaying.forEach(element => {
//             document.body.innerHTML += '<div class="item">' + element + '</div>'
//         });

//     })
//    .then(() => {this.updateTheColors(this.allTheDiffs);})
//    ;


//    var allTheDiffs = this.evaluateLineupDiffs();
//    this.updateTheColors(allTheDiffs);

// const xteamsPlaying = ['Mets', 'Cardinals', 'Pirates', 'Yankees', 'Dodgers', 'Red Sox', 'Cubs', 'Blue Jays'];

        var alreadyAdded = [];
        function addTeamsPlaying() {
            //console.log('Pizza');
            //console.log(teamsPlaying);
            // //console.log(this.teamsPlaying[2]);
            //console.log(teamsPlaying.length);
            const teamsColumn1 = document.getElementById("teamsColumn1");
            const teamsColumn2 = document.getElementById("teamsColumn2");

            for (let i = 0; i < teamsPlaying.length; i++) {
                //console.log('yup');
                const teamName = teamsPlaying[i];
                var gameNum = 1;
                if(alreadyAdded.includes(teamName)){
                    gameNum = 2;
                }
                //console.log(teamName);
                const teamContainer = document.createElement("div");
                teamContainer.className = "team-container";
                teamContainer.innerHTML = `
                    <h2 class="teamName">${teamName}</h2>
                    <div class="lineup-container">
                        <div class="column">
                            <h3 class="center">Fanduel</h3>
                            <ul id="${teamName.replace(/\s+/g, '').replace('.','')}Guess${gameNum}" class="order-list">
                                <li><input type="text" name="${teamName.replace(/\s+/g, '').replace('.','')}Guess${gameNum}" placeholder="1st"></li>
                                <li><input type="text" name="${teamName.replace(/\s+/g, '').replace('.','')}Guess${gameNum}" placeholder="2nd"></li>
                                <li><input type="text" name="${teamName.replace(/\s+/g, '').replace('.','')}Guess${gameNum}" placeholder="3rd"></li>
                                <li><input type="text" name="${teamName.replace(/\s+/g, '').replace('.','')}Guess${gameNum}" placeholder="4th"></li>
                                <li><input type="text" name="${teamName.replace(/\s+/g, '').replace('.','')}Guess${gameNum}" placeholder="5th"></li>
                                <li><input type="text" name="${teamName.replace(/\s+/g, '').replace('.','')}Guess${gameNum}" placeholder="6th"></li>
                                <li><input type="text" name="${teamName.replace(/\s+/g, '').replace('.','')}Guess${gameNum}" placeholder="7th"></li>
                                <li><input type="text" name="${teamName.replace(/\s+/g, '').replace('.','')}Guess${gameNum}" placeholder="8th"></li>
                                <li><input type="text" name="${teamName.replace(/\s+/g, '').replace('.','')}Guess${gameNum}" placeholder="9th"></li>
                            </ul>
                        </div>
                        <div class="column">
                            <h3 class="center">Actual</h3>
                            <ul id="${teamName.replace(/\s+/g, '').replace('.','')}Actual${gameNum}" class="order-list">
                                <li><input type="text" name="${teamName.replace(/\s+/g, '').replace('.','')}Actual${gameNum}" placeholder="1st" readonly="true"></li>
                                <li><input type="text" name="${teamName.replace(/\s+/g, '').replace('.','')}Actual${gameNum}" placeholder="2nd" readonly="true"></li>
                                <li><input type="text" name="${teamName.replace(/\s+/g, '').replace('.','')}Actual${gameNum}" placeholder="3rd" readonly="true"></li>
                                <li><input type="text" name="${teamName.replace(/\s+/g, '').replace('.','')}Actual${gameNum}" placeholder="4th" readonly="true"></li>
                                <li><input type="text" name="${teamName.replace(/\s+/g, '').replace('.','')}Actual${gameNum}" placeholder="5th" readonly="true"></li>
                                <li><input type="text" name="${teamName.replace(/\s+/g, '').replace('.','')}Actual${gameNum}" placeholder="6th" readonly="true"></li>
                                <li><input type="text" name="${teamName.replace(/\s+/g, '').replace('.','')}Actual${gameNum}" placeholder="7th" readonly="true"></li>
                                <li><input type="text" name="${teamName.replace(/\s+/g, '').replace('.','')}Actual${gameNum}" placeholder="8th" readonly="true"></li>
                                <li><input type="text" name="${teamName.replace(/\s+/g, '').replace('.','')}Actual${gameNum}" placeholder="9th" readonly="true"></li>
                            </ul>
                        </div>
                    </div>
                `;

                // if (i < teamsPlaying.length / 2) {
                if (i % 2 == 0) {
                    teamsColumn1.appendChild(teamContainer);
                } else {
                    teamsColumn2.appendChild(teamContainer);
                }

                alreadyAdded.push(teamName);
            }
        }

        // function compareLineups() {
        //     const teamsContainer = document.getElementsByClassName("team-container");

        //     for (let i = 0; i < teamsContainer.length; i++) {
        //         const teamName = teamsContainer[i].querySelector("h2").textContent;
        //         const guessedList = teamsContainer[i].querySelector(`#${teamName.replace(/\s+/g, '')}Guess`);
        //         const actualList = teamsContainer[i].querySelector(`#${teamName.replace(/\s+/g, '')}Actual`);

        //         const guessedPlayers = [];
        //         const actualPlayers = [];

        //         for (let j = 0; j < guessedList.children.length; j++) {
        //             const guessedInput = guessedList.children[j].querySelector("input");
        //             const actualInput = actualList.children[j].querySelector("input");

        //             guessedPlayers.push(guessedInput.value);
        //             actualPlayers.push(actualInput.value);

        //             guessedInput.style.backgroundColor = guessedInput.value === actualInput.value ? "lightgreen" : "pink";
        //             actualInput.style.backgroundColor = guessedInput.value === actualInput.value ? "lightgreen" : "pink";
        //         }

                // //console.log(`${teamName} - Guessed: ${guessedPlayers.join(", ")} | Actual: ${actualPlayers.join(", ")}`);
        //     }
        // }

        // Add the teams that are playing that day
        addTeamsPlaying();

    })

    .then(() => {getLineups();})

}

function compareLineups() {
    const teamsContainer = document.getElementsByClassName("team-container");

    //for each team
    var alreadyAdded = [];
    for (let i = 0; i < teamsContainer.length; i++) {
    // for (let i = 0; i < 1; i++) {
        const teamName = teamsContainer[i].querySelector("h2").textContent;

        // console.log(teamName);
        // console.log(alreadyAdded);

        var gameNum = 1;
        if(alreadyAdded.includes(teamName)){
            gameNum = 2;
        }
        // console.log(gameNum);
        //console.log('kkkkkkkkkkkkkkkkkkkkkkk');
        //console.log(teamName.replace(/\s+/g, ''));
        //console.log(teamsContainer[i]);
        const guessedList = teamsContainer[i].querySelector(`#${teamName.replace(/\s+/g, '').replace('.','')}Guess` + gameNum);
        const actualList = teamsContainer[i].querySelector(`#${teamName.replace(/\s+/g, '').replace('.','')}Actual` + gameNum);

        // const guessedPlayers = [];
        // const actualPlayers = [];
        const fdLineup = [];
        const actualLineup = [];

        //for each player on that team
        for (let j = 0; j < guessedList.children.length; j++) {
            const guessedInput = guessedList.children[j].querySelector("input");
            const actualInput = actualList.children[j].querySelector("input");

            fdLineup.push(guessedInput.value);
            actualLineup.push(actualInput.value);
            //console.log('xxxxxxxxxxxxxx');
            // //console.log(guessedPlayers);

            // guessedInput.style.backgroundColor = guessedInput.value === actualInput.value ? "lightgreen" : "pink";
            // actualInput.style.backgroundColor = guessedInput.value === actualInput.value ? "lightgreen" : "pink";
        }

        var allTheDiffs = [];

        actualLineup.forEach(batter => {



            allTheDiffs.push(getThreeBattersAhead(fdLineup, actualLineup, batter));



        });

        updateTheColors(allTheDiffs, teamsContainer, teamName, actualList);

    //console.log('iiiiiiiiiiiiiiiii');
    //console.log(allTheDiffs);
//    return allTheDiffs;

        //console.log(`${teamName} - Guessed: ${fdLineup.join(", ")} | Actual: ${actualLineup.join(", ")}`);
        alreadyAdded.push(teamName);
    }
}

// function evaluateLineupDiffs() {
//     var fdLineup = [];
//     var one = document.getElementById("1").value;
//     var two = document.getElementById("2").value;
//     var three = document.getElementById("3").value;
//     var four = document.getElementById("4").value;
//     var five = document.getElementById("5").value;
//     var six = document.getElementById("6").value;
//     var seven = document.getElementById("7").value;
//     var eight = document.getElementById("8").value;
//     var nine = document.getElementById("9").value;

//     fdLineup.push(one,two,three,four,five,six,seven,eight,nine);

//     // //console.log(fdLineup[2]);

//     var actualLineup = [];
//     var one = document.getElementById("1a").value;
//     var two = document.getElementById("2a").value;
//     var three = document.getElementById("3a").value;
//     var four = document.getElementById("4a").value;
//     var five = document.getElementById("5a").value;
//     var six = document.getElementById("6a").value;
//     var seven = document.getElementById("7a").value;
//     var eight = document.getElementById("8a").value;
//     var nine = document.getElementById("9a").value;

//     actualLineup.push(one,two,three,four,five,six,seven,eight,nine);

//     // //console.log(actualLineup[2]);
//     var allTheDiffs = [];

//     actualLineup.forEach(batter => {



//         allTheDiffs.push(getThreeBattersAhead(fdLineup, actualLineup, batter));


//         // var fdThreeAhead = this.getThreeBattersAhead(fdLineup, fdBatter);
//         // //console.log('FANDUEL');
//         // //console.log(fdThreeAhead);

//         // var actualThreeAhead = this.getThreeBattersAhead(actualLineup, fdBatter);
//         // //console.log('ACTUAL');
//         // //console.log(actualThreeAhead);

//         // //console.log(fdBatter);
//         // //console.log(fdLineup.findIndex('Ronald Acuna'));
//         // //console.log(fdLineup.findIndex(fdBatter));

//         // let actualPosition = actualLineup.indexOf(fdBatter);

//         // let fdPosition = fdLineup.indexOf(fdBatter);
//         // let fdOneAhead = batterAhead(fdPosition);
//         // let fdTwoAhead = batterAhead(fdOneAhead);
//         // let fdThreeAhead = batterAhead(fdTwoAhead);

//         // let fdOneAhead = this.getOneAheadFd(fdLineup, fdPosition);
//         // let fdTwoAhead = this.getOneAheadFd(fdLineup, batterAhead(fdPosition));
//         // let fdThreeAhead = this.getOneAheadFd(fdLineup, fdPosition);

//     });

//    return allTheDiffs;


// }

function updateTheColors(allTheDiffs, teamsContainer, teamName, actualList){



     //console.log('in update colors');

     //console.log(allTheDiffs);


     for (let i = 0; i < teamsContainer.length; i++) {
        if(teamName != teamsContainer[i].querySelector("h2").textContent){continue;};
        // console.log(i);
        // console.log(teamName);
        // console.log(gameNum);
        // console.log('zzzzzzzzzzzzzzzz');
        // // const guessedList = teamsContainer[i].querySelector(`#${teamName.replace(/\s+/g, '')}Guess`);
        // console.log(teamsContainer);
        // console.log(teamsContainer[i]);
        // console.log(teamsContainer[i].querySelector(`#${teamName.replace(/\s+/g, '').replace('.','')}Actual` + gameNum));
        // const actualList = teamsContainer[i].querySelector(`#${teamName.replace(/\s+/g, '').replace('.','')}Actual` + gameNum);

        // console.log(actualList);

        // const guessedPlayers = [];
        // const actualPlayers = [];
        // const fdLineup = [];
        // const actualLineup = [];

        //for each player on that team
        for (let j = 0; j < actualList.children.length; j++) {
            // const guessedInput = guessedList.children[j].querySelector("input");
            const actualInput = actualList.children[j].querySelector("input");

            // fdLineup.push(guessedInput.value);
            // actualLineup.push(actualInput.value);
            // //console.log('xxxxxxxxxxxxxx');
            // //console.log(guessedPlayers);

            // guessedInput.style.backgroundColor = guessedInput.value === actualInput.value ? "lightgreen" : "pink";
            // actualInput.style.backgroundColor = guessedInput.value === actualInput.value ? "lightgreen" : "pink";
            // actualInput.style.backgroundColor = "lightgreen";

            let numberOfDiffs = allTheDiffs[j].length;
            // //console.log('***********');
            // //console.log(battingPosition);
            // //console.log(numberOfDiffs);
            // //console.log(batterDiffs);

            if(numberOfDiffs == 1){
                actualInput.style.backgroundColor = 'orange';
            } else if(numberOfDiffs == 2){
                actualInput.style.backgroundColor = 'blue';
                // document.getElementById(battingPosition + "a").style.backgroundColor = 'blue';
            } else if(numberOfDiffs == 3){
                actualInput.style.backgroundColor = 'green';
                // document.getElementById(battingPosition + "a").style.backgroundColor = 'green';
            } else if(numberOfDiffs == 4){
                actualInput.style.backgroundColor = 'red';
                // document.getElementById(battingPosition + "a").style.backgroundColor = 'red';
            } else if(numberOfDiffs == 0){
                actualInput.style.backgroundColor = '';
                // document.getElementById(battingPosition + "a").style.backgroundColor = '';
            }

        }
    }







    // var battingPosition = 1;
    // allTheDiffs.forEach(batterDiffs => {
    //     let numberOfDiffs = batterDiffs.length;
        //console.log('***********');
        //console.log(battingPosition);
        //console.log(numberOfDiffs);
        //console.log(batterDiffs);

    //     if(numberOfDiffs == 1){
    //         document.getElementById(battingPosition + "a").style.backgroundColor = 'orange';
    //     } else if(numberOfDiffs == 2){
    //         document.getElementById(battingPosition + "a").style.backgroundColor = 'blue';
    //     } else if(numberOfDiffs == 3){
    //         document.getElementById(battingPosition + "a").style.backgroundColor = 'green';
    //     } else if(numberOfDiffs == 4){
    //         document.getElementById(battingPosition + "a").style.backgroundColor = 'red';
    //     } else if(numberOfDiffs == 0){
    //         document.getElementById(battingPosition + "a").style.backgroundColor = '';
    //     }

    //     battingPosition += 1;

    // });
}

function getThreeBattersAhead(fdLineup, actualLineup, batter){

    //console.log('in 3 ahead');

    var threeAheadDiffs = [];

    // let fdPosition = fdLineup.indexOf(batter);
    let fdPosition = findBatterInLineup(fdLineup, batter);
    //console.log(batter);
    //console.log(fdLineup);
    //console.log(fdPosition);
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


    console.log(actualAllThreeAhead);
    console.log(fdAllThreeAhead);

    actualAllThreeAhead.forEach(actual => {

        // if(!fdAllThreeAhead.includes(actual)){
        //     threeAheadDiffs.push(actual);
        // }

        if(findBatterInLineup(fdAllThreeAhead, actual) < 0){
            threeAheadDiffs.push(actual);
        }

    });





    return threeAheadDiffs;
    // for (let index = 0; index < 3; index++) {
        // //console.log("zzzzzzzzzzzzzzzzzzzzzzzz");



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

    // console.log('**************');
    // console.log(lineup);
    // console.log(batter);

    //Matched exactly
    let exact = lowercaseLineup.indexOf(lowercaseBatter);
    if(exact >= 0){
        // console.log('exact');
        return exact;
    }

    //Matched assuming last name is after first space
    let lastName = lowercaseLineup.map(lastNameOnly);

    // if(lastNameOnly(lowercaseBatter) == ''){return -1;}

    let fuzzy = lastName.indexOf(lastNameOnly(lowercaseBatter));

    if(lastNameOnly(lowercaseBatter) != '' && fuzzy >= 0){
        // console.log('fuzzy');
        return fuzzy;
    }


    //Matched assuming whole thing is last name
    if(lastNameOnly(lowercaseBatter) != ''){
        // console.log('last name is whole thing');
        return lowercaseLineup.indexOf(lastNameOnly(lowercaseBatter));
    }

    // console.log('not matched');
    return -1;

}

function lastNameOnly(name){

    if(name == ''){return name;}
    let y = name.split(' ');
    y.shift();
    return y.join(' ');

}


function getLineups(){
    var obj;
    // var games;
    // var actualLineup = [];
    // var allTheDiffs;

    // var awayLineup = [];
    // var homeLineup = [];

    // var teamsPlaying = [];

    // const queryString = window.location.search;
    // const urlParams = new URLSearchParams(queryString);
    // const team = urlParams.get('team');

    // const teamsContainer = document.getElementsByClassName("team-container");

    // document.getElementsByClassName("pagetitle")[0].innerHTML = team;


    fetch('https://statsapi.mlb.com/api/v1/schedule?sportId=1&language=en&hydrate=lineups', {

    })

    .then(res => res.json())
  .then(data => {
    obj = data;
    //console.log(data);

   })
  .then(() => {
    //console.log(obj);
    obj.dates[0].games.forEach(game => {

        // var x = [game.teams.home.team.name, game.teams.away.team.name];
        // teamsPlaying.push(x);
        // teamsPlaying.push(game.teams.away.team.name, game.teams.home.team.name);


        // var selectors = [];
        var away = game.teams.away.team.name.replace(/\s+/g, '').replace('.','') + 'Actual' + game.gameNumber;
        var home = game.teams.home.team.name.replace(/\s+/g, '').replace('.','') + 'Actual' + game.gameNumber;

        // selectors.push('#' + away + 'Actual', '#' + home + 'Actual');

        var awayElements = document.querySelectorAll("input[name=" + away + "]");
        var homeElements = document.querySelectorAll("input[name=" + home + "]");
        //console.log('{{{{{{{{{{{{{{');
        //console.log(away);
        // var awaySelector = document.querySelector(away);
        // //console.log(awaySelector);
        // var homeSelector = document.querySelector(home);

        //console.log(game);
        //console.log(game.lineups);
        //console.log(game.lineups.awayPlayers);
        //console.log(game.lineups == undefined);
        //console.log(game.lineups === undefined);
        //console.log(game.lineups == 'undefined');
        //console.log(game.lineups === 'undefined');
        // //console.log(game.lineups.awayPlayers);

        if(game.lineups.awayPlayers !== undefined){
            var awayCounter =  0;

            game.lineups.awayPlayers.forEach(player => {
                // //console.log(player.fullName);
                // awayLineup.push(player.fullName);
                //console.log(player.fullName);
                // awaySelector.children[awayCounter].value = player.fullName;
                awayElements[awayCounter].value = player.fullName;
                awayCounter += 1;

            })
        }

        if(game.lineups.homePlayers !== undefined){

            var homeCounter = 0;
            game.lineups.homePlayers.forEach(player => {
                // //console.log(player.fullName);
                // homeLineup.push(player.fullName);
                homeElements[homeCounter].value = player.fullName;
                homeCounter += 1;
            })
        }


        })
    })
    .then(() => {compareLineups();})
}
