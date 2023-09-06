 //get the lineups from api
 //deal with double headers

/*
 var bigThing  = {
    "copyright": "Copyright 2023 MLB Advanced Media, L.P.  Use of any content on this page acknowledges agreement to the terms posted here http://gdx.mlb.com/components/copyright.txt",
    "totalItems": 15,
    "totalEvents": 0,
    "totalGames": 15,
    "totalGamesInProgress": 0,
    "dates": [
      {
        "date": "2023-08-30",
        "totalItems": 15,
        "totalEvents": 0,
        "totalGames": 15,
        "totalGamesInProgress": 0,
        "games": [
          {
            "gamePk": 716787,
            "gameGuid": "f4ca11e3-c23b-48d7-81b6-0ffc6e4881b4",
            "link": "/api/v1.1/game/716787/feed/live",
            "gameType": "R",
            "season": "2023",
            "gameDate": "2023-08-30T17:05:00Z",
            "officialDate": "2023-08-30",
            "status": {
              "abstractGameState": "Final",
              "codedGameState": "F",
              "detailedState": "Final",
              "statusCode": "F",
              "startTimeTBD": false,
              "abstractGameCode": "F"
            },
            "teams": {
              "away": {
                "leagueRecord": { "wins": 64, "losses": 70, "pct": ".478" },
                "score": 10,
                "team": {
                  "id": 108,
                  "name": "Los Angeles Angels",
                  "link": "/api/v1/teams/108"
                },
                "isWinner": true,
                "splitSquad": false,
                "seriesNumber": 43
              },
              "home": {
                "leagueRecord": { "wins": 74, "losses": 59, "pct": ".556" },
                "score": 8,
                "team": {
                  "id": 143,
                  "name": "Philadelphia Phillies",
                  "link": "/api/v1/teams/143"
                },
                "isWinner": false,
                "splitSquad": false,
                "seriesNumber": 43
              }
            },
            "venue": {
              "id": 2681,
              "name": "Citizens Bank Park",
              "link": "/api/v1/venues/2681"
            },
            "content": { "link": "/api/v1/game/716787/content" },
            "isTie": false,
            "gameNumber": 1,
            "publicFacing": true,
            "doubleHeader": "N",
            "gamedayType": "P",
            "tiebreaker": "N",
            "calendarEventID": "14-716787-2023-08-30",
            "seasonDisplay": "2023",
            "dayNight": "day",
            "scheduledInnings": 9,
            "reverseHomeAwayStatus": false,
            "inningBreakLength": 120,
            "gamesInSeries": 3,
            "seriesGameNumber": 3,
            "seriesDescription": "Regular Season",
            "recordSource": "S",
            "ifNecessary": "N",
            "ifNecessaryDescription": "Normal Game",
            "lineups": {
              "awayPlayers": [
                {
                  "id": 694384,
                  "fullName": "Nolan Schanuel",
                  "link": "/api/v1/people/694384",
                  "firstName": "Nolan",
                  "lastName": "Schanuel",
                  "primaryPosition": {
                    "code": "3",
                    "name": "First Base",
                    "type": "Infielder",
                    "abbreviation": "1B"
                  },
                  "useName": "Nolan"
                },
                {
                  "id": 650859,
                  "fullName": "Luis Rengifo",
                  "link": "/api/v1/people/650859",
                  "firstName": "Luis",
                  "lastName": "Rengifo",
                  "primaryPosition": {
                    "code": "8",
                    "name": "Outfielder",
                    "type": "Outfielder",
                    "abbreviation": "CF"
                  },
                  "useName": "Luis"
                },
                {
                  "id": 660271,
                  "fullName": "Shohei Ohtani",
                  "link": "/api/v1/people/660271",
                  "firstName": "Shohei",
                  "lastName": "Ohtani",
                  "primaryPosition": {
                    "code": "10",
                    "name": "Designated Hitter",
                    "type": "Hitter",
                    "abbreviation": "DH"
                  },
                  "useName": "Shohei"
                },
                {
                  "id": 592273,
                  "fullName": "Brandon Drury",
                  "link": "/api/v1/people/592273",
                  "firstName": "Brandon",
                  "lastName": "Drury",
                  "primaryPosition": {
                    "code": "4",
                    "name": "Second Base",
                    "type": "Infielder",
                    "abbreviation": "2B"
                  },
                  "useName": "Brandon"
                },
                {
                  "id": 545341,
                  "fullName": "Randal Grichuk",
                  "link": "/api/v1/people/545341",
                  "firstName": "Randal",
                  "lastName": "Grichuk",
                  "primaryPosition": {
                    "code": "7",
                    "name": "Outfielder",
                    "type": "Outfielder",
                    "abbreviation": "LF"
                  },
                  "useName": "Randal"
                },
                {
                  "id": 681351,
                  "fullName": "Logan O'Hoppe",
                  "link": "/api/v1/people/681351",
                  "firstName": "Logan",
                  "lastName": "O'Hoppe",
                  "primaryPosition": {
                    "code": "2",
                    "name": "Catcher",
                    "type": "Catcher",
                    "abbreviation": "C"
                  },
                  "useName": "Logan"
                },
                {
                  "id": 592669,
                  "fullName": "Hunter Renfroe",
                  "link": "/api/v1/people/592669",
                  "firstName": "Dustin",
                  "lastName": "Renfroe",
                  "primaryPosition": {
                    "code": "9",
                    "name": "Outfielder",
                    "type": "Outfielder",
                    "abbreviation": "RF"
                  },
                  "useName": "Hunter"
                },
                {
                  "id": 500871,
                  "fullName": "Eduardo Escobar",
                  "link": "/api/v1/people/500871",
                  "firstName": "Eduardo",
                  "lastName": "Escobar",
                  "primaryPosition": {
                    "code": "5",
                    "name": "Third Base",
                    "type": "Infielder",
                    "abbreviation": "3B"
                  },
                  "useName": "Eduardo"
                },
                {
                  "id": 623205,
                  "fullName": "Andrew Velazquez",
                  "link": "/api/v1/people/623205",
                  "firstName": "Andrew",
                  "lastName": "Velazquez",
                  "primaryPosition": {
                    "code": "6",
                    "name": "Shortstop",
                    "type": "Infielder",
                    "abbreviation": "SS"
                  },
                  "useName": "Andrew"
                }
              ]
            }
          },
          {
            "gamePk": 716786,
            "gameGuid": "e611e560-5472-4d41-a718-9629b9184073",
            "link": "/api/v1.1/game/716786/feed/live",
            "gameType": "R",
            "season": "2023",
            "gameDate": "2023-08-30T17:05:00Z",
            "officialDate": "2023-08-30",
            "status": {
              "abstractGameState": "Final",
              "codedGameState": "F",
              "detailedState": "Final",
              "statusCode": "F",
              "startTimeTBD": false,
              "abstractGameCode": "F"
            },
            "teams": {
              "away": {
                "leagueRecord": { "wins": 53, "losses": 81, "pct": ".396" },
                "score": 10,
                "team": {
                  "id": 145,
                  "name": "Chicago White Sox",
                  "link": "/api/v1/teams/145"
                },
                "isWinner": true,
                "splitSquad": false,
                "seriesNumber": 43
              },
              "home": {
                "leagueRecord": { "wins": 83, "losses": 50, "pct": ".624" },
                "score": 5,
                "team": {
                  "id": 110,
                  "name": "Baltimore Orioles",
                  "link": "/api/v1/teams/110"
                },
                "isWinner": false,
                "splitSquad": false,
                "seriesNumber": 43
              }
            },
            "venue": {
              "id": 2,
              "name": "Oriole Park at Camden Yards",
              "link": "/api/v1/venues/2"
            },
            "content": { "link": "/api/v1/game/716786/content" },
            "isTie": false,
            "gameNumber": 1,
            "publicFacing": true,
            "doubleHeader": "N",
            "gamedayType": "P",
            "tiebreaker": "N",
            "calendarEventID": "14-716786-2023-08-30",
            "seasonDisplay": "2023",
            "dayNight": "day",
            "scheduledInnings": 9,
            "reverseHomeAwayStatus": false,
            "inningBreakLength": 120,
            "gamesInSeries": 3,
            "seriesGameNumber": 3,
            "seriesDescription": "Regular Season",
            "recordSource": "S",
            "ifNecessary": "N",
            "ifNecessaryDescription": "Normal Game",
            "lineups": {
              "homePlayers": [
                {
                  "id": 683002,
                  "fullName": "Gunnar Henderson",
                  "link": "/api/v1/people/683002",
                  "firstName": "Gunnar",
                  "lastName": "Henderson",
                  "primaryPosition": {
                    "code": "5",
                    "name": "Third Base",
                    "type": "Infielder",
                    "abbreviation": "3B"
                  },
                  "useName": "Gunnar"
                },
                {
                  "id": 623993,
                  "fullName": "Anthony Santander",
                  "link": "/api/v1/people/623993",
                  "firstName": "Anthony",
                  "lastName": "Santander",
                  "primaryPosition": {
                    "code": "9",
                    "name": "Outfielder",
                    "type": "Outfielder",
                    "abbreviation": "RF"
                  },
                  "useName": "Anthony"
                },
                {
                  "id": 663624,
                  "fullName": "Ryan Mountcastle",
                  "link": "/api/v1/people/663624",
                  "firstName": "Ryan",
                  "lastName": "Mountcastle",
                  "primaryPosition": {
                    "code": "10",
                    "name": "Designated Hitter",
                    "type": "Hitter",
                    "abbreviation": "DH"
                  },
                  "useName": "Ryan"
                },
                {
                  "id": 656811,
                  "fullName": "Ryan O'Hearn",
                  "link": "/api/v1/people/656811",
                  "firstName": "Ryan",
                  "lastName": "O'Hearn",
                  "primaryPosition": {
                    "code": "3",
                    "name": "First Base",
                    "type": "Infielder",
                    "abbreviation": "1B"
                  },
                  "useName": "Ryan"
                },
                {
                  "id": 656775,
                  "fullName": "Cedric Mullins",
                  "link": "/api/v1/people/656775",
                  "firstName": "Boyce",
                  "lastName": "Mullins",
                  "primaryPosition": {
                    "code": "8",
                    "name": "Outfielder",
                    "type": "Outfielder",
                    "abbreviation": "CF"
                  },
                  "useName": "Cedric"
                },
                {
                  "id": 624428,
                  "fullName": "Adam Frazier",
                  "link": "/api/v1/people/624428",
                  "firstName": "Adam",
                  "lastName": "Frazier",
                  "primaryPosition": {
                    "code": "7",
                    "name": "Outfielder",
                    "type": "Outfielder",
                    "abbreviation": "LF"
                  },
                  "useName": "Adam"
                },
                {
                  "id": 676059,
                  "fullName": "Jordan Westburg",
                  "link": "/api/v1/people/676059",
                  "firstName": "Jordan",
                  "lastName": "Westburg",
                  "primaryPosition": {
                    "code": "4",
                    "name": "Second Base",
                    "type": "Infielder",
                    "abbreviation": "2B"
                  },
                  "useName": "Jordan"
                },
                {
                  "id": 543510,
                  "fullName": "James McCann",
                  "link": "/api/v1/people/543510",
                  "firstName": "James",
                  "lastName": "McCann",
                  "primaryPosition": {
                    "code": "2",
                    "name": "Catcher",
                    "type": "Catcher",
                    "abbreviation": "C"
                  },
                  "useName": "James"
                },
                {
                  "id": 622761,
                  "fullName": "Jorge Mateo",
                  "link": "/api/v1/people/622761",
                  "firstName": "Jorge",
                  "lastName": "Mateo",
                  "primaryPosition": {
                    "code": "6",
                    "name": "Shortstop",
                    "type": "Infielder",
                    "abbreviation": "SS"
                  },
                  "useName": "Jorge"
                }
              ],
              "awayPlayers": [
                {
                  "id": 641313,
                  "fullName": "Tim Anderson",
                  "link": "/api/v1/people/641313",
                  "firstName": "Timothy",
                  "lastName": "Anderson",
                  "primaryPosition": {
                    "code": "6",
                    "name": "Shortstop",
                    "type": "Infielder",
                    "abbreviation": "SS"
                  },
                  "useName": "Tim"
                },
                {
                  "id": 643217,
                  "fullName": "Andrew Benintendi",
                  "link": "/api/v1/people/643217",
                  "firstName": "Andrew",
                  "lastName": "Benintendi",
                  "primaryPosition": {
                    "code": "7",
                    "name": "Outfielder",
                    "type": "Outfielder",
                    "abbreviation": "LF"
                  },
                  "useName": "Andrew"
                },
                {
                  "id": 673357,
                  "fullName": "Luis Robert",
                  "link": "/api/v1/people/673357",
                  "firstName": "Luis",
                  "lastName": "Robert",
                  "primaryPosition": {
                    "code": "8",
                    "name": "Outfielder",
                    "type": "Outfielder",
                    "abbreviation": "CF"
                  },
                  "useName": "Luis"
                },
                {
                  "id": 650391,
                  "fullName": "Eloy Jimenez",
                  "link": "/api/v1/people/650391",
                  "firstName": "Eloy",
                  "lastName": "Jimenez",
                  "primaryPosition": {
                    "code": "10",
                    "name": "Designated Hitter",
                    "type": "Hitter",
                    "abbreviation": "DH"
                  },
                  "useName": "Eloy"
                },
                {
                  "id": 683734,
                  "fullName": "Andrew Vaughn",
                  "link": "/api/v1/people/683734",
                  "firstName": "Andrew",
                  "lastName": "Vaughn",
                  "primaryPosition": {
                    "code": "3",
                    "name": "First Base",
                    "type": "Infielder",
                    "abbreviation": "1B"
                  },
                  "useName": "Andrew"
                },
                {
                  "id": 518735,
                  "fullName": "Yasmani Grandal",
                  "link": "/api/v1/people/518735",
                  "firstName": "Yasmani",
                  "lastName": "Grandal",
                  "primaryPosition": {
                    "code": "2",
                    "name": "Catcher",
                    "type": "Catcher",
                    "abbreviation": "C"
                  },
                  "useName": "Yasmani"
                },
                {
                  "id": 462101,
                  "fullName": "Elvis Andrus",
                  "link": "/api/v1/people/462101",
                  "firstName": "Elvis",
                  "lastName": "Andrus",
                  "primaryPosition": {
                    "code": "5",
                    "name": "Third Base",
                    "type": "Infielder",
                    "abbreviation": "3B"
                  },
                  "useName": "Elvis"
                },
                {
                  "id": 693049,
                  "fullName": "Oscar Colas",
                  "link": "/api/v1/people/693049",
                  "firstName": "Oscar",
                  "lastName": "Colas",
                  "primaryPosition": {
                    "code": "9",
                    "name": "Outfielder",
                    "type": "Outfielder",
                    "abbreviation": "RF"
                  },
                  "useName": "Oscar"
                },
                {
                  "id": 672820,
                  "fullName": "Lenyn Sosa",
                  "link": "/api/v1/people/672820",
                  "firstName": "Lenyn",
                  "lastName": "Sosa",
                  "primaryPosition": {
                    "code": "4",
                    "name": "Second Base",
                    "type": "Infielder",
                    "abbreviation": "2B"
                  },
                  "useName": "Lenyn"
                }
              ]
            }
          },
          {
            "gamePk": 716784,
            "gameGuid": "e0866863-4210-4ea4-8da7-92250ff415cc",
            "link": "/api/v1.1/game/716784/feed/live",
            "gameType": "R",
            "season": "2023",
            "gameDate": "2023-08-30T17:10:00Z",
            "officialDate": "2023-08-30",
            "status": {
              "abstractGameState": "Final",
              "codedGameState": "F",
              "detailedState": "Final",
              "statusCode": "F",
              "startTimeTBD": false,
              "abstractGameCode": "F"
            },
            "teams": {
              "away": {
                "leagueRecord": { "wins": 64, "losses": 70, "pct": ".478" },
                "score": 5,
                "team": {
                  "id": 114,
                  "name": "Cleveland Guardians",
                  "link": "/api/v1/teams/114"
                },
                "isWinner": true,
                "splitSquad": false,
                "seriesNumber": 43
              },
              "home": {
                "leagueRecord": { "wins": 69, "losses": 65, "pct": ".515" },
                "score": 2,
                "team": {
                  "id": 142,
                  "name": "Minnesota Twins",
                  "link": "/api/v1/teams/142"
                },
                "isWinner": false,
                "splitSquad": false,
                "seriesNumber": 43
              }
            },
            "venue": {
              "id": 3312,
              "name": "Target Field",
              "link": "/api/v1/venues/3312"
            },
            "content": { "link": "/api/v1/game/716784/content" },
            "isTie": false,
            "gameNumber": 1,
            "publicFacing": true,
            "doubleHeader": "N",
            "gamedayType": "P",
            "tiebreaker": "N",
            "calendarEventID": "14-716784-2023-08-30",
            "seasonDisplay": "2023",
            "dayNight": "day",
            "scheduledInnings": 9,
            "reverseHomeAwayStatus": false,
            "inningBreakLength": 120,
            "gamesInSeries": 3,
            "seriesGameNumber": 3,
            "seriesDescription": "Regular Season",
            "recordSource": "S",
            "ifNecessary": "N",
            "ifNecessaryDescription": "Normal Game",
            "lineups": {
              "homePlayers": [
                {
                  "id": 666397,
                  "fullName": "Edouard Julien",
                  "link": "/api/v1/people/666397",
                  "firstName": "Edouard",
                  "lastName": "Julien",
                  "primaryPosition": {
                    "code": "10",
                    "name": "Designated Hitter",
                    "type": "Hitter",
                    "abbreviation": "DH"
                  },
                  "useName": "Edouard"
                },
                {
                  "id": 593871,
                  "fullName": "Jorge Polanco",
                  "link": "/api/v1/people/593871",
                  "firstName": "Jorge",
                  "lastName": "Polanco",
                  "primaryPosition": {
                    "code": "4",
                    "name": "Second Base",
                    "type": "Infielder",
                    "abbreviation": "2B"
                  },
                  "useName": "Jorge"
                },
                {
                  "id": 621043,
                  "fullName": "Carlos Correa",
                  "link": "/api/v1/people/621043",
                  "firstName": "Carlos",
                  "lastName": "Correa",
                  "primaryPosition": {
                    "code": "6",
                    "name": "Shortstop",
                    "type": "Infielder",
                    "abbreviation": "SS"
                  },
                  "useName": "Carlos"
                },
                {
                  "id": 596146,
                  "fullName": "Max Kepler",
                  "link": "/api/v1/people/596146",
                  "firstName": "Maximilian",
                  "lastName": "Kepler",
                  "primaryPosition": {
                    "code": "9",
                    "name": "Outfielder",
                    "type": "Outfielder",
                    "abbreviation": "RF"
                  },
                  "useName": "Max"
                },
                {
                  "id": 668904,
                  "fullName": "Royce Lewis",
                  "link": "/api/v1/people/668904",
                  "firstName": "Royce",
                  "lastName": "Lewis",
                  "primaryPosition": {
                    "code": "5",
                    "name": "Third Base",
                    "type": "Infielder",
                    "abbreviation": "3B"
                  },
                  "useName": "Royce"
                },
                {
                  "id": 670242,
                  "fullName": "Matt Wallner",
                  "link": "/api/v1/people/670242",
                  "firstName": "Matthew",
                  "lastName": "Wallner",
                  "primaryPosition": {
                    "code": "7",
                    "name": "Outfielder",
                    "type": "Outfielder",
                    "abbreviation": "LF"
                  },
                  "useName": "Matt"
                },
                {
                  "id": 680777,
                  "fullName": "Ryan Jeffers",
                  "link": "/api/v1/people/680777",
                  "firstName": "Ryan",
                  "lastName": "Jeffers",
                  "primaryPosition": {
                    "code": "2",
                    "name": "Catcher",
                    "type": "Catcher",
                    "abbreviation": "C"
                  },
                  "useName": "Ryan"
                },
                {
                  "id": 456781,
                  "fullName": "Donovan Solano",
                  "link": "/api/v1/people/456781",
                  "firstName": "Donovan",
                  "lastName": "Solano",
                  "primaryPosition": {
                    "code": "3",
                    "name": "First Base",
                    "type": "Infielder",
                    "abbreviation": "1B"
                  },
                  "useName": "Donovan"
                },
                {
                  "id": 608336,
                  "fullName": "Joey Gallo",
                  "link": "/api/v1/people/608336",
                  "firstName": "Joseph",
                  "lastName": "Gallo",
                  "primaryPosition": {
                    "code": "8",
                    "name": "Outfielder",
                    "type": "Outfielder",
                    "abbreviation": "CF"
                  },
                  "useName": "Joey"
                }
              ],
              "awayPlayers": [
                {
                  "id": 680757,
                  "fullName": "Steven Kwan",
                  "link": "/api/v1/people/680757",
                  "firstName": "Steven",
                  "lastName": "Kwan",
                  "primaryPosition": {
                    "code": "10",
                    "name": "Designated Hitter",
                    "type": "Hitter",
                    "abbreviation": "DH"
                  },
                  "useName": "Steven"
                },
                {
                  "id": 608070,
                  "fullName": "Jose Ramirez",
                  "link": "/api/v1/people/608070",
                  "firstName": "Jose",
                  "lastName": "Ramirez",
                  "primaryPosition": {
                    "code": "5",
                    "name": "Third Base",
                    "type": "Infielder",
                    "abbreviation": "3B"
                  },
                  "useName": "Jose"
                },
                {
                  "id": 594777,
                  "fullName": "Kole Calhoun",
                  "link": "/api/v1/people/594777",
                  "firstName": "Kole",
                  "lastName": "Calhoun",
                  "primaryPosition": {
                    "code": "3",
                    "name": "First Base",
                    "type": "Infielder",
                    "abbreviation": "1B"
                  },
                  "useName": "Kole"
                },
                {
                  "id": 657656,
                  "fullName": "Ramon Laureano",
                  "link": "/api/v1/people/657656",
                  "firstName": "Ramon",
                  "lastName": "Laureano",
                  "primaryPosition": {
                    "code": "9",
                    "name": "Outfielder",
                    "type": "Outfielder",
                    "abbreviation": "RF"
                  },
                  "useName": "Ramon"
                },
                {
                  "id": 665926,
                  "fullName": "Andres Gimenez",
                  "link": "/api/v1/people/665926",
                  "firstName": "Andres",
                  "lastName": "Gimenez",
                  "primaryPosition": {
                    "code": "4",
                    "name": "Second Base",
                    "type": "Infielder",
                    "abbreviation": "2B"
                  },
                  "useName": "Andres"
                },
                {
                  "id": 686823,
                  "fullName": "Will Brennan",
                  "link": "/api/v1/people/686823",
                  "firstName": "William",
                  "lastName": "Brennan",
                  "primaryPosition": {
                    "code": "7",
                    "name": "Outfielder",
                    "type": "Outfielder",
                    "abbreviation": "LF"
                  },
                  "useName": "Will"
                },
                {
                  "id": 672356,
                  "fullName": "Gabriel Arias",
                  "link": "/api/v1/people/672356",
                  "firstName": "Gabriel",
                  "lastName": "Arias",
                  "primaryPosition": {
                    "code": "6",
                    "name": "Shortstop",
                    "type": "Infielder",
                    "abbreviation": "SS"
                  },
                  "useName": "Gabriel"
                },
                {
                  "id": 606992,
                  "fullName": "Eric Haase",
                  "link": "/api/v1/people/606992",
                  "firstName": "Eric",
                  "lastName": "Haase",
                  "primaryPosition": {
                    "code": "2",
                    "name": "Catcher",
                    "type": "Catcher",
                    "abbreviation": "C"
                  },
                  "useName": "Eric"
                },
                {
                  "id": 664702,
                  "fullName": "Myles Straw",
                  "link": "/api/v1/people/664702",
                  "firstName": "Myles",
                  "lastName": "Straw",
                  "primaryPosition": {
                    "code": "8",
                    "name": "Outfielder",
                    "type": "Outfielder",
                    "abbreviation": "CF"
                  },
                  "useName": "Myles"
                }
              ]
            }
          },
          {
            "gamePk": 716782,
            "gameGuid": "bff33f1d-a57f-42f3-9a28-f6c4e9056476",
            "link": "/api/v1.1/game/716782/feed/live",
            "gameType": "R",
            "season": "2023",
            "gameDate": "2023-08-30T18:15:00Z",
            "officialDate": "2023-08-30",
            "status": {
              "abstractGameState": "Final",
              "codedGameState": "F",
              "detailedState": "Final",
              "statusCode": "F",
              "startTimeTBD": false,
              "abstractGameCode": "F"
            },
            "teams": {
              "away": {
                "leagueRecord": { "wins": 62, "losses": 72, "pct": ".463" },
                "score": 4,
                "team": {
                  "id": 135,
                  "name": "San Diego Padres",
                  "link": "/api/v1/teams/135"
                },
                "isWinner": false,
                "splitSquad": false,
                "seriesNumber": 43
              },
              "home": {
                "leagueRecord": { "wins": 58, "losses": 76, "pct": ".433" },
                "score": 5,
                "team": {
                  "id": 138,
                  "name": "St. Louis Cardinals",
                  "link": "/api/v1/teams/138"
                },
                "isWinner": true,
                "splitSquad": false,
                "seriesNumber": 43
              }
            },
            "venue": {
              "id": 2889,
              "name": "Busch Stadium",
              "link": "/api/v1/venues/2889"
            },
            "content": { "link": "/api/v1/game/716782/content" },
            "isTie": false,
            "gameNumber": 1,
            "publicFacing": true,
            "doubleHeader": "N",
            "gamedayType": "P",
            "tiebreaker": "N",
            "calendarEventID": "14-716782-2023-08-30",
            "seasonDisplay": "2023",
            "dayNight": "day",
            "scheduledInnings": 9,
            "reverseHomeAwayStatus": false,
            "inningBreakLength": 120,
            "gamesInSeries": 3,
            "seriesGameNumber": 3,
            "seriesDescription": "Regular Season",
            "recordSource": "S",
            "ifNecessary": "N",
            "ifNecessaryDescription": "Normal Game",
            "lineups": {
              "homePlayers": [
                {
                  "id": 669242,
                  "fullName": "Tommy Edman",
                  "link": "/api/v1/people/669242",
                  "firstName": "Thomas",
                  "lastName": "Edman",
                  "primaryPosition": {
                    "code": "8",
                    "name": "Outfielder",
                    "type": "Outfielder",
                    "abbreviation": "CF"
                  },
                  "useName": "Tommy"
                },
                {
                  "id": 502671,
                  "fullName": "Paul Goldschmidt",
                  "link": "/api/v1/people/502671",
                  "firstName": "Paul",
                  "lastName": "Goldschmidt",
                  "primaryPosition": {
                    "code": "3",
                    "name": "First Base",
                    "type": "Infielder",
                    "abbreviation": "1B"
                  },
                  "useName": "Paul"
                },
                {
                  "id": 575929,
                  "fullName": "Willson Contreras",
                  "link": "/api/v1/people/575929",
                  "firstName": "Willson",
                  "lastName": "Contreras",
                  "primaryPosition": {
                    "code": "10",
                    "name": "Designated Hitter",
                    "type": "Hitter",
                    "abbreviation": "DH"
                  },
                  "useName": "Willson"
                },
                {
                  "id": 571448,
                  "fullName": "Nolan Arenado",
                  "link": "/api/v1/people/571448",
                  "firstName": "Nolan",
                  "lastName": "Arenado",
                  "primaryPosition": {
                    "code": "5",
                    "name": "Third Base",
                    "type": "Infielder",
                    "abbreviation": "3B"
                  },
                  "useName": "Nolan"
                },
                {
                  "id": 691023,
                  "fullName": "Jordan Walker",
                  "link": "/api/v1/people/691023",
                  "firstName": "Jordan",
                  "lastName": "Walker",
                  "primaryPosition": {
                    "code": "9",
                    "name": "Outfielder",
                    "type": "Outfielder",
                    "abbreviation": "RF"
                  },
                  "useName": "Jordan"
                },
                {
                  "id": 668800,
                  "fullName": "Andrew Knizner",
                  "link": "/api/v1/people/668800",
                  "firstName": "Andrew",
                  "lastName": "Knizner",
                  "primaryPosition": {
                    "code": "2",
                    "name": "Catcher",
                    "type": "Catcher",
                    "abbreviation": "C"
                  },
                  "useName": "Andrew"
                },
                {
                  "id": 600301,
                  "fullName": "Taylor Motter",
                  "link": "/api/v1/people/600301",
                  "firstName": "Taylor",
                  "lastName": "Motter",
                  "primaryPosition": {
                    "code": "4",
                    "name": "Second Base",
                    "type": "Infielder",
                    "abbreviation": "2B"
                  },
                  "useName": "Taylor"
                },
                {
                  "id": 680700,
                  "fullName": "Richie Palacios",
                  "link": "/api/v1/people/680700",
                  "firstName": "Richard",
                  "lastName": "Palacios",
                  "primaryPosition": {
                    "code": "7",
                    "name": "Outfielder",
                    "type": "Outfielder",
                    "abbreviation": "LF"
                  },
                  "useName": "Richie"
                },
                {
                  "id": 691026,
                  "fullName": "Masyn Winn",
                  "link": "/api/v1/people/691026",
                  "firstName": "Masyn",
                  "lastName": "Winn",
                  "primaryPosition": {
                    "code": "6",
                    "name": "Shortstop",
                    "type": "Infielder",
                    "abbreviation": "SS"
                  },
                  "useName": "Masyn"
                }
              ],
              "awayPlayers": [
                {
                  "id": 673490,
                  "fullName": "Ha-Seong Kim",
                  "link": "/api/v1/people/673490",
                  "firstName": "Ha-Seong",
                  "lastName": "Kim",
                  "primaryPosition": {
                    "code": "4",
                    "name": "Second Base",
                    "type": "Infielder",
                    "abbreviation": "2B"
                  },
                  "useName": "Ha-Seong"
                },
                {
                  "id": 665742,
                  "fullName": "Juan Soto",
                  "link": "/api/v1/people/665742",
                  "firstName": "Juan",
                  "lastName": "Soto",
                  "primaryPosition": {
                    "code": "7",
                    "name": "Outfielder",
                    "type": "Outfielder",
                    "abbreviation": "LF"
                  },
                  "useName": "Juan"
                },
                {
                  "id": 592518,
                  "fullName": "Manny Machado",
                  "link": "/api/v1/people/592518",
                  "firstName": "Manuel",
                  "lastName": "Machado",
                  "primaryPosition": {
                    "code": "5",
                    "name": "Third Base",
                    "type": "Infielder",
                    "abbreviation": "3B"
                  },
                  "useName": "Manny"
                },
                {
                  "id": 665487,
                  "fullName": "Fernando Tatis",
                  "link": "/api/v1/people/665487",
                  "firstName": "Fernando",
                  "lastName": "Tatis",
                  "primaryPosition": {
                    "code": "9",
                    "name": "Outfielder",
                    "type": "Outfielder",
                    "abbreviation": "RF"
                  },
                  "useName": "Fernando"
                },
                {
                  "id": 593428,
                  "fullName": "Xander Bogaerts",
                  "link": "/api/v1/people/593428",
                  "firstName": "Xander",
                  "lastName": "Bogaerts",
                  "primaryPosition": {
                    "code": "6",
                    "name": "Shortstop",
                    "type": "Infielder",
                    "abbreviation": "SS"
                  },
                  "useName": "Xander"
                },
                {
                  "id": 643265,
                  "fullName": "Garrett Cooper",
                  "link": "/api/v1/people/643265",
                  "firstName": "Garrett",
                  "lastName": "Cooper",
                  "primaryPosition": {
                    "code": "3",
                    "name": "First Base",
                    "type": "Infielder",
                    "abbreviation": "1B"
                  },
                  "useName": "Garrett"
                },
                {
                  "id": 572761,
                  "fullName": "Matt Carpenter",
                  "link": "/api/v1/people/572761",
                  "firstName": "Matthew",
                  "lastName": "Carpenter",
                  "primaryPosition": {
                    "code": "10",
                    "name": "Designated Hitter",
                    "type": "Hitter",
                    "abbreviation": "DH"
                  },
                  "useName": "Matt"
                },
                {
                  "id": 669134,
                  "fullName": "Luis Campusano",
                  "link": "/api/v1/people/669134",
                  "firstName": "Luis",
                  "lastName": "Campusano",
                  "primaryPosition": {
                    "code": "2",
                    "name": "Catcher",
                    "type": "Catcher",
                    "abbreviation": "C"
                  },
                  "useName": "Luis"
                },
                {
                  "id": 663757,
                  "fullName": "Trent Grisham",
                  "link": "/api/v1/people/663757",
                  "firstName": "Trenton",
                  "lastName": "Grisham",
                  "primaryPosition": {
                    "code": "8",
                    "name": "Outfielder",
                    "type": "Outfielder",
                    "abbreviation": "CF"
                  },
                  "useName": "Trent"
                }
              ]
            }
          },
          {
            "gamePk": 716779,
            "gameGuid": "7ffd5060-666b-4915-a7ac-5acacdf080cb",
            "link": "/api/v1.1/game/716779/feed/live",
            "gameType": "R",
            "season": "2023",
            "gameDate": "2023-08-30T18:20:00Z",
            "officialDate": "2023-08-30",
            "status": {
              "abstractGameState": "Final",
              "codedGameState": "F",
              "detailedState": "Final",
              "statusCode": "F",
              "startTimeTBD": false,
              "abstractGameCode": "F"
            },
            "teams": {
              "away": {
                "leagueRecord": { "wins": 74, "losses": 59, "pct": ".556" },
                "score": 2,
                "team": {
                  "id": 158,
                  "name": "Milwaukee Brewers",
                  "link": "/api/v1/teams/158"
                },
                "isWinner": false,
                "splitSquad": false,
                "seriesNumber": 42
              },
              "home": {
                "leagueRecord": { "wins": 71, "losses": 62, "pct": ".534" },
                "score": 3,
                "team": {
                  "id": 112,
                  "name": "Chicago Cubs",
                  "link": "/api/v1/teams/112"
                },
                "isWinner": true,
                "splitSquad": false,
                "seriesNumber": 43
              }
            },
            "venue": {
              "id": 17,
              "name": "Wrigley Field",
              "link": "/api/v1/venues/17"
            },
            "content": { "link": "/api/v1/game/716779/content" },
            "isTie": false,
            "gameNumber": 1,
            "publicFacing": true,
            "doubleHeader": "N",
            "gamedayType": "P",
            "tiebreaker": "N",
            "calendarEventID": "14-716779-2023-08-30",
            "seasonDisplay": "2023",
            "dayNight": "day",
            "scheduledInnings": 9,
            "reverseHomeAwayStatus": false,
            "inningBreakLength": 120,
            "gamesInSeries": 3,
            "seriesGameNumber": 3,
            "seriesDescription": "Regular Season",
            "recordSource": "S",
            "ifNecessary": "N",
            "ifNecessaryDescription": "Normal Game",
            "lineups": {
              "homePlayers": [
                {
                  "id": 643565,
                  "fullName": "Mike Tauchman",
                  "link": "/api/v1/people/643565",
                  "firstName": "Michael",
                  "lastName": "Tauchman",
                  "primaryPosition": {
                    "code": "8",
                    "name": "Outfielder",
                    "type": "Outfielder",
                    "abbreviation": "CF"
                  },
                  "useName": "Mike"
                },
                {
                  "id": 663538,
                  "fullName": "Nico Hoerner",
                  "link": "/api/v1/people/663538",
                  "firstName": "Nicholas",
                  "lastName": "Hoerner",
                  "primaryPosition": {
                    "code": "4",
                    "name": "Second Base",
                    "type": "Infielder",
                    "abbreviation": "2B"
                  },
                  "useName": "Nico"
                },
                {
                  "id": 664023,
                  "fullName": "Ian Happ",
                  "link": "/api/v1/people/664023",
                  "firstName": "Ian",
                  "lastName": "Happ",
                  "primaryPosition": {
                    "code": "7",
                    "name": "Outfielder",
                    "type": "Outfielder",
                    "abbreviation": "LF"
                  },
                  "useName": "Ian"
                },
                {
                  "id": 641355,
                  "fullName": "Cody Bellinger",
                  "link": "/api/v1/people/641355",
                  "firstName": "Cody",
                  "lastName": "Bellinger",
                  "primaryPosition": {
                    "code": "3",
                    "name": "First Base",
                    "type": "Infielder",
                    "abbreviation": "1B"
                  },
                  "useName": "Cody"
                },
                {
                  "id": 621020,
                  "fullName": "Dansby Swanson",
                  "link": "/api/v1/people/621020",
                  "firstName": "James",
                  "lastName": "Swanson",
                  "primaryPosition": {
                    "code": "6",
                    "name": "Shortstop",
                    "type": "Infielder",
                    "abbreviation": "SS"
                  },
                  "useName": "Dansby"
                },
                {
                  "id": 673548,
                  "fullName": "Seiya Suzuki",
                  "link": "/api/v1/people/673548",
                  "firstName": "Seiya",
                  "lastName": "Suzuki",
                  "primaryPosition": {
                    "code": "9",
                    "name": "Outfielder",
                    "type": "Outfielder",
                    "abbreviation": "RF"
                  },
                  "useName": "Seiya"
                },
                {
                  "id": 600869,
                  "fullName": "Jeimer Candelario",
                  "link": "/api/v1/people/600869",
                  "firstName": "Jeimer",
                  "lastName": "Candelario",
                  "primaryPosition": {
                    "code": "10",
                    "name": "Designated Hitter",
                    "type": "Hitter",
                    "abbreviation": "DH"
                  },
                  "useName": "Jeimer"
                },
                {
                  "id": 663611,
                  "fullName": "Nick Madrigal",
                  "link": "/api/v1/people/663611",
                  "firstName": "Nicklaus",
                  "lastName": "Madrigal",
                  "primaryPosition": {
                    "code": "5",
                    "name": "Third Base",
                    "type": "Infielder",
                    "abbreviation": "3B"
                  },
                  "useName": "Nick"
                },
                {
                  "id": 665804,
                  "fullName": "Miguel Amaya",
                  "link": "/api/v1/people/665804",
                  "firstName": "Miguel",
                  "lastName": "Amaya",
                  "primaryPosition": {
                    "code": "2",
                    "name": "Catcher",
                    "type": "Catcher",
                    "abbreviation": "C"
                  },
                  "useName": "Miguel"
                }
              ],
              "awayPlayers": [
                {
                  "id": 592885,
                  "fullName": "Christian Yelich",
                  "link": "/api/v1/people/592885",
                  "firstName": "Christian",
                  "lastName": "Yelich",
                  "primaryPosition": {
                    "code": "7",
                    "name": "Outfielder",
                    "type": "Outfielder",
                    "abbreviation": "LF"
                  },
                  "useName": "Christian"
                },
                {
                  "id": 661388,
                  "fullName": "William Contreras",
                  "link": "/api/v1/people/661388",
                  "firstName": "William",
                  "lastName": "Contreras",
                  "primaryPosition": {
                    "code": "2",
                    "name": "Catcher",
                    "type": "Catcher",
                    "abbreviation": "C"
                  },
                  "useName": "William"
                },
                {
                  "id": 467793,
                  "fullName": "Carlos Santana",
                  "link": "/api/v1/people/467793",
                  "firstName": "Carlos",
                  "lastName": "Santana",
                  "primaryPosition": {
                    "code": "10",
                    "name": "Designated Hitter",
                    "type": "Hitter",
                    "abbreviation": "DH"
                  },
                  "useName": "Carlos"
                },
                {
                  "id": 686217,
                  "fullName": "Sal Frelick",
                  "link": "/api/v1/people/686217",
                  "firstName": "Salvatore",
                  "lastName": "Frelick",
                  "primaryPosition": {
                    "code": "8",
                    "name": "Outfielder",
                    "type": "Outfielder",
                    "abbreviation": "CF"
                  },
                  "useName": "Sal"
                },
                {
                  "id": 642715,
                  "fullName": "Willy Adames",
                  "link": "/api/v1/people/642715",
                  "firstName": "Willy",
                  "lastName": "Adames",
                  "primaryPosition": {
                    "code": "6",
                    "name": "Shortstop",
                    "type": "Infielder",
                    "abbreviation": "SS"
                  },
                  "useName": "Willy"
                },
                {
                  "id": 642133,
                  "fullName": "Rowdy Tellez",
                  "link": "/api/v1/people/642133",
                  "firstName": "Ryan",
                  "lastName": "Tellez",
                  "primaryPosition": {
                    "code": "3",
                    "name": "First Base",
                    "type": "Infielder",
                    "abbreviation": "1B"
                  },
                  "useName": "Rowdy"
                },
                {
                  "id": 592192,
                  "fullName": "Mark Canha",
                  "link": "/api/v1/people/592192",
                  "firstName": "Mark",
                  "lastName": "Canha",
                  "primaryPosition": {
                    "code": "9",
                    "name": "Outfielder",
                    "type": "Outfielder",
                    "abbreviation": "RF"
                  },
                  "useName": "Mark"
                },
                {
                  "id": 668930,
                  "fullName": "Brice Turang",
                  "link": "/api/v1/people/668930",
                  "firstName": "Brice",
                  "lastName": "Turang",
                  "primaryPosition": {
                    "code": "4",
                    "name": "Second Base",
                    "type": "Infielder",
                    "abbreviation": "2B"
                  },
                  "useName": "Brice"
                },
                {
                  "id": 655316,
                  "fullName": "Andruw Monasterio",
                  "link": "/api/v1/people/655316",
                  "firstName": "Andruw",
                  "lastName": "Monasterio",
                  "primaryPosition": {
                    "code": "5",
                    "name": "Third Base",
                    "type": "Infielder",
                    "abbreviation": "3B"
                  },
                  "useName": "Andruw"
                }
              ]
            }
          },
          {
            "gamePk": 716785,
            "gameGuid": "cab15ba4-107a-4942-8f9f-20b9c3653ca6",
            "link": "/api/v1.1/game/716785/feed/live",
            "gameType": "R",
            "season": "2023",
            "gameDate": "2023-08-30T19:07:00Z",
            "officialDate": "2023-08-30",
            "status": {
              "abstractGameState": "Final",
              "codedGameState": "F",
              "detailedState": "Final",
              "statusCode": "F",
              "startTimeTBD": false,
              "abstractGameCode": "F"
            },
            "teams": {
              "away": {
                "leagueRecord": { "wins": 62, "losses": 72, "pct": ".463" },
                "score": 0,
                "team": {
                  "id": 120,
                  "name": "Washington Nationals",
                  "link": "/api/v1/teams/120"
                },
                "isWinner": false,
                "splitSquad": false,
                "seriesNumber": 44
              },
              "home": {
                "leagueRecord": { "wins": 73, "losses": 61, "pct": ".545" },
                "score": 7,
                "team": {
                  "id": 141,
                  "name": "Toronto Blue Jays",
                  "link": "/api/v1/teams/141"
                },
                "isWinner": true,
                "splitSquad": false,
                "seriesNumber": 43
              }
            },
            "venue": {
              "id": 14,
              "name": "Rogers Centre",
              "link": "/api/v1/venues/14"
            },
            "content": { "link": "/api/v1/game/716785/content" },
            "isTie": false,
            "gameNumber": 1,
            "publicFacing": true,
            "doubleHeader": "N",
            "gamedayType": "P",
            "tiebreaker": "N",
            "calendarEventID": "14-716785-2023-08-30",
            "seasonDisplay": "2023",
            "dayNight": "day",
            "scheduledInnings": 9,
            "reverseHomeAwayStatus": false,
            "inningBreakLength": 120,
            "gamesInSeries": 3,
            "seriesGameNumber": 3,
            "seriesDescription": "Regular Season",
            "recordSource": "S",
            "ifNecessary": "N",
            "ifNecessaryDescription": "Normal Game",
            "lineups": {
              "homePlayers": [
                {
                  "id": 543807,
                  "fullName": "George Springer",
                  "link": "/api/v1/people/543807",
                  "firstName": "George",
                  "lastName": "Springer",
                  "primaryPosition": {
                    "code": "10",
                    "name": "Designated Hitter",
                    "type": "Hitter",
                    "abbreviation": "DH"
                  },
                  "useName": "George"
                },
                {
                  "id": 676914,
                  "fullName": "Davis Schneider",
                  "link": "/api/v1/people/676914",
                  "firstName": "Davis",
                  "lastName": "Schneider",
                  "primaryPosition": {
                    "code": "4",
                    "name": "Second Base",
                    "type": "Infielder",
                    "abbreviation": "2B"
                  },
                  "useName": "Davis"
                },
                {
                  "id": 665489,
                  "fullName": "Vladimir Guerrero",
                  "link": "/api/v1/people/665489",
                  "firstName": "Vladimir",
                  "lastName": "Guerrero",
                  "primaryPosition": {
                    "code": "3",
                    "name": "First Base",
                    "type": "Infielder",
                    "abbreviation": "1B"
                  },
                  "useName": "Vladimir"
                },
                {
                  "id": 593160,
                  "fullName": "Whit Merrifield",
                  "link": "/api/v1/people/593160",
                  "firstName": "Whitley",
                  "lastName": "Merrifield",
                  "primaryPosition": {
                    "code": "7",
                    "name": "Outfielder",
                    "type": "Outfielder",
                    "abbreviation": "LF"
                  },
                  "useName": "Whit"
                },
                {
                  "id": 672386,
                  "fullName": "Alejandro Kirk",
                  "link": "/api/v1/people/672386",
                  "firstName": "Alejandro",
                  "lastName": "Kirk",
                  "primaryPosition": {
                    "code": "2",
                    "name": "Catcher",
                    "type": "Catcher",
                    "abbreviation": "C"
                  },
                  "useName": "Alejandro"
                },
                {
                  "id": 662139,
                  "fullName": "Daulton Varsho",
                  "link": "/api/v1/people/662139",
                  "firstName": "Daulton",
                  "lastName": "Varsho",
                  "primaryPosition": {
                    "code": "8",
                    "name": "Outfielder",
                    "type": "Outfielder",
                    "abbreviation": "CF"
                  },
                  "useName": "Daulton"
                },
                {
                  "id": 676391,
                  "fullName": "Ernie Clement",
                  "link": "/api/v1/people/676391",
                  "firstName": "Ernie",
                  "lastName": "Clement",
                  "primaryPosition": {
                    "code": "6",
                    "name": "Shortstop",
                    "type": "Infielder",
                    "abbreviation": "SS"
                  },
                  "useName": "Ernie"
                },
                {
                  "id": 669289,
                  "fullName": "Santiago Espinal",
                  "link": "/api/v1/people/669289",
                  "firstName": "Santiago",
                  "lastName": "Espinal",
                  "primaryPosition": {
                    "code": "5",
                    "name": "Third Base",
                    "type": "Infielder",
                    "abbreviation": "3B"
                  },
                  "useName": "Santiago"
                },
                {
                  "id": 624415,
                  "fullName": "Cavan Biggio",
                  "link": "/api/v1/people/624415",
                  "firstName": "Cavan",
                  "lastName": "Biggio",
                  "primaryPosition": {
                    "code": "9",
                    "name": "Outfielder",
                    "type": "Outfielder",
                    "abbreviation": "RF"
                  },
                  "useName": "Cavan"
                }
              ],
              "awayPlayers": [
                {
                  "id": 682928,
                  "fullName": "CJ Abrams",
                  "link": "/api/v1/people/682928",
                  "firstName": "Paul",
                  "lastName": "Abrams",
                  "primaryPosition": {
                    "code": "6",
                    "name": "Shortstop",
                    "type": "Infielder",
                    "abbreviation": "SS"
                  },
                  "useName": "CJ"
                },
                {
                  "id": 657041,
                  "fullName": "Lane Thomas",
                  "link": "/api/v1/people/657041",
                  "firstName": "Lane",
                  "lastName": "Thomas",
                  "primaryPosition": {
                    "code": "9",
                    "name": "Outfielder",
                    "type": "Outfielder",
                    "abbreviation": "RF"
                  },
                  "useName": "Lane"
                },
                {
                  "id": 608841,
                  "fullName": "Joey Meneses",
                  "link": "/api/v1/people/608841",
                  "firstName": "Joey",
                  "lastName": "Meneses",
                  "primaryPosition": {
                    "code": "3",
                    "name": "First Base",
                    "type": "Infielder",
                    "abbreviation": "1B"
                  },
                  "useName": "Joey"
                },
                {
                  "id": 660688,
                  "fullName": "Keibert Ruiz",
                  "link": "/api/v1/people/660688",
                  "firstName": "Keibert",
                  "lastName": "Ruiz",
                  "primaryPosition": {
                    "code": "10",
                    "name": "Designated Hitter",
                    "type": "Hitter",
                    "abbreviation": "DH"
                  },
                  "useName": "Keibert"
                },
                {
                  "id": 666198,
                  "fullName": "Carter Kieboom",
                  "link": "/api/v1/people/666198",
                  "firstName": "Carter",
                  "lastName": "Kieboom",
                  "primaryPosition": {
                    "code": "5",
                    "name": "Third Base",
                    "type": "Infielder",
                    "abbreviation": "3B"
                  },
                  "useName": "Carter"
                },
                {
                  "id": 666906,
                  "fullName": "Jake Alu",
                  "link": "/api/v1/people/666906",
                  "firstName": "Jacob",
                  "lastName": "Alu",
                  "primaryPosition": {
                    "code": "7",
                    "name": "Outfielder",
                    "type": "Outfielder",
                    "abbreviation": "LF"
                  },
                  "useName": "Jake"
                },
                {
                  "id": 545121,
                  "fullName": "Ildemaro Vargas",
                  "link": "/api/v1/people/545121",
                  "firstName": "Ildemaro",
                  "lastName": "Vargas",
                  "primaryPosition": {
                    "code": "4",
                    "name": "Second Base",
                    "type": "Infielder",
                    "abbreviation": "2B"
                  },
                  "useName": "Ildemaro"
                },
                {
                  "id": 656180,
                  "fullName": "Riley Adams",
                  "link": "/api/v1/people/656180",
                  "firstName": "Riley",
                  "lastName": "Adams",
                  "primaryPosition": {
                    "code": "2",
                    "name": "Catcher",
                    "type": "Catcher",
                    "abbreviation": "C"
                  },
                  "useName": "Riley"
                },
                {
                  "id": 696285,
                  "fullName": "Jacob Young",
                  "link": "/api/v1/people/696285",
                  "firstName": "Jacob",
                  "lastName": "Young",
                  "primaryPosition": {
                    "code": "8",
                    "name": "Outfielder",
                    "type": "Outfielder",
                    "abbreviation": "CF"
                  },
                  "useName": "Jacob"
                }
              ]
            }
          },
          {
            "gamePk": 716789,
            "gameGuid": "a60ca66d-deb4-41b9-adbb-bdd1e880a70e",
            "link": "/api/v1.1/game/716789/feed/live",
            "gameType": "R",
            "season": "2023",
            "gameDate": "2023-08-30T19:45:00Z",
            "officialDate": "2023-08-30",
            "status": {
              "abstractGameState": "Final",
              "codedGameState": "F",
              "detailedState": "Final",
              "statusCode": "F",
              "startTimeTBD": false,
              "abstractGameCode": "F"
            },
            "teams": {
              "away": {
                "leagueRecord": { "wins": 69, "losses": 66, "pct": ".511" },
                "score": 4,
                "team": {
                  "id": 113,
                  "name": "Cincinnati Reds",
                  "link": "/api/v1/teams/113"
                },
                "isWinner": true,
                "splitSquad": false,
                "seriesNumber": 42
              },
              "home": {
                "leagueRecord": { "wins": 69, "losses": 64, "pct": ".519" },
                "score": 1,
                "team": {
                  "id": 137,
                  "name": "San Francisco Giants",
                  "link": "/api/v1/teams/137"
                },
                "isWinner": false,
                "splitSquad": false,
                "seriesNumber": 44
              }
            },
            "venue": {
              "id": 2395,
              "name": "Oracle Park",
              "link": "/api/v1/venues/2395"
            },
            "content": { "link": "/api/v1/game/716789/content" },
            "isTie": false,
            "gameNumber": 1,
            "publicFacing": true,
            "doubleHeader": "N",
            "gamedayType": "P",
            "tiebreaker": "N",
            "calendarEventID": "14-716789-2023-08-30",
            "seasonDisplay": "2023",
            "dayNight": "day",
            "scheduledInnings": 9,
            "reverseHomeAwayStatus": false,
            "inningBreakLength": 120,
            "gamesInSeries": 3,
            "seriesGameNumber": 3,
            "seriesDescription": "Regular Season",
            "recordSource": "S",
            "ifNecessary": "N",
            "ifNecessaryDescription": "Normal Game",
            "lineups": {
              "homePlayers": [
                {
                  "id": 664774,
                  "fullName": "LaMonte Wade",
                  "link": "/api/v1/people/664774",
                  "firstName": "LaMonte",
                  "lastName": "Wade",
                  "primaryPosition": {
                    "code": "3",
                    "name": "First Base",
                    "type": "Infielder",
                    "abbreviation": "1B"
                  },
                  "useName": "LaMonte"
                },
                {
                  "id": 642731,
                  "fullName": "Thairo Estrada",
                  "link": "/api/v1/people/642731",
                  "firstName": "Thairo",
                  "lastName": "Estrada",
                  "primaryPosition": {
                    "code": "4",
                    "name": "Second Base",
                    "type": "Infielder",
                    "abbreviation": "2B"
                  },
                  "useName": "Thairo"
                },
                {
                  "id": 527038,
                  "fullName": "Wilmer Flores",
                  "link": "/api/v1/people/527038",
                  "firstName": "Wilmer",
                  "lastName": "Flores",
                  "primaryPosition": {
                    "code": "10",
                    "name": "Designated Hitter",
                    "type": "Hitter",
                    "abbreviation": "DH"
                  },
                  "useName": "Wilmer"
                },
                {
                  "id": 592626,
                  "fullName": "Joc Pederson",
                  "link": "/api/v1/people/592626",
                  "firstName": "Joc",
                  "lastName": "Pederson",
                  "primaryPosition": {
                    "code": "7",
                    "name": "Outfielder",
                    "type": "Outfielder",
                    "abbreviation": "LF"
                  },
                  "useName": "Joc"
                },
                {
                  "id": 672275,
                  "fullName": "Patrick Bailey",
                  "link": "/api/v1/people/672275",
                  "firstName": "Patrick",
                  "lastName": "Bailey",
                  "primaryPosition": {
                    "code": "2",
                    "name": "Catcher",
                    "type": "Catcher",
                    "abbreviation": "C"
                  },
                  "useName": "Patrick"
                },
                {
                  "id": 573262,
                  "fullName": "Mike Yastrzemski",
                  "link": "/api/v1/people/573262",
                  "firstName": "Michael",
                  "lastName": "Yastrzemski",
                  "primaryPosition": {
                    "code": "9",
                    "name": "Outfielder",
                    "type": "Outfielder",
                    "abbreviation": "RF"
                  },
                  "useName": "Mike"
                },
                {
                  "id": 657557,
                  "fullName": "Paul DeJong",
                  "link": "/api/v1/people/657557",
                  "firstName": "Paul",
                  "lastName": "DeJong",
                  "primaryPosition": {
                    "code": "6",
                    "name": "Shortstop",
                    "type": "Infielder",
                    "abbreviation": "SS"
                  },
                  "useName": "Paul"
                },
                {
                  "id": 685133,
                  "fullName": "Wade Meckler",
                  "link": "/api/v1/people/685133",
                  "firstName": "Wade",
                  "lastName": "Meckler",
                  "primaryPosition": {
                    "code": "8",
                    "name": "Outfielder",
                    "type": "Outfielder",
                    "abbreviation": "CF"
                  },
                  "useName": "Wade"
                },
                {
                  "id": 669477,
                  "fullName": "Casey Schmitt",
                  "link": "/api/v1/people/669477",
                  "firstName": "Casey",
                  "lastName": "Schmitt",
                  "primaryPosition": {
                    "code": "5",
                    "name": "Third Base",
                    "type": "Infielder",
                    "abbreviation": "3B"
                  },
                  "useName": "Casey"
                }
              ],
              "awayPlayers": [
                {
                  "id": 670770,
                  "fullName": "TJ Friedl",
                  "link": "/api/v1/people/670770",
                  "firstName": "Terry",
                  "lastName": "Friedl",
                  "primaryPosition": {
                    "code": "8",
                    "name": "Outfielder",
                    "type": "Outfielder",
                    "abbreviation": "CF"
                  },
                  "useName": "TJ"
                },
                {
                  "id": 668715,
                  "fullName": "Spencer Steer",
                  "link": "/api/v1/people/668715",
                  "firstName": "Spencer",
                  "lastName": "Steer",
                  "primaryPosition": {
                    "code": "4",
                    "name": "Second Base",
                    "type": "Infielder",
                    "abbreviation": "2B"
                  },
                  "useName": "Spencer"
                },
                {
                  "id": 682829,
                  "fullName": "Elly De La Cruz",
                  "link": "/api/v1/people/682829",
                  "firstName": "Elly",
                  "lastName": "De La Cruz",
                  "primaryPosition": {
                    "code": "6",
                    "name": "Shortstop",
                    "type": "Infielder",
                    "abbreviation": "SS"
                  },
                  "useName": "Elly"
                },
                {
                  "id": 605361,
                  "fullName": "Nick Martini",
                  "link": "/api/v1/people/605361",
                  "firstName": "Nicholas",
                  "lastName": "Martini",
                  "primaryPosition": {
                    "code": "10",
                    "name": "Designated Hitter",
                    "type": "Hitter",
                    "abbreviation": "DH"
                  },
                  "useName": "Nick"
                },
                {
                  "id": 687952,
                  "fullName": "Christian Encarnacion-Strand",
                  "link": "/api/v1/people/687952",
                  "firstName": "Christian",
                  "lastName": "Encarnacion-Strand",
                  "primaryPosition": {
                    "code": "3",
                    "name": "First Base",
                    "type": "Infielder",
                    "abbreviation": "1B"
                  },
                  "useName": "Christian"
                },
                {
                  "id": 669222,
                  "fullName": "Nick Senzel",
                  "link": "/api/v1/people/669222",
                  "firstName": "Nicholas",
                  "lastName": "Senzel",
                  "primaryPosition": {
                    "code": "7",
                    "name": "Outfielder",
                    "type": "Outfielder",
                    "abbreviation": "LF"
                  },
                  "useName": "Nick"
                },
                {
                  "id": 666181,
                  "fullName": "Will Benson",
                  "link": "/api/v1/people/666181",
                  "firstName": "William",
                  "lastName": "Benson",
                  "primaryPosition": {
                    "code": "9",
                    "name": "Outfielder",
                    "type": "Outfielder",
                    "abbreviation": "RF"
                  },
                  "useName": "Will"
                },
                {
                  "id": 682622,
                  "fullName": "Noelvi Marte",
                  "link": "/api/v1/people/682622",
                  "firstName": "Noelvi",
                  "lastName": "Marte",
                  "primaryPosition": {
                    "code": "5",
                    "name": "Third Base",
                    "type": "Infielder",
                    "abbreviation": "3B"
                  },
                  "useName": "Noelvi"
                },
                {
                  "id": 571912,
                  "fullName": "Luke Maile",
                  "link": "/api/v1/people/571912",
                  "firstName": "Luke",
                  "lastName": "Maile",
                  "primaryPosition": {
                    "code": "2",
                    "name": "Catcher",
                    "type": "Catcher",
                    "abbreviation": "C"
                  },
                  "useName": "Luke"
                }
              ]
            }
          },
          {
            "gamePk": 716794,
            "gameGuid": "10d6ac72-eb8b-416e-906d-1ecba7b1e47a",
            "link": "/api/v1.1/game/716794/feed/live",
            "gameType": "R",
            "season": "2023",
            "gameDate": "2023-08-30T20:10:00Z",
            "officialDate": "2023-08-30",
            "status": {
              "abstractGameState": "Final",
              "codedGameState": "F",
              "detailedState": "Final",
              "statusCode": "F",
              "startTimeTBD": false,
              "abstractGameCode": "F"
            },
            "teams": {
              "away": {
                "leagueRecord": { "wins": 77, "losses": 58, "pct": ".570" },
                "score": 7,
                "team": {
                  "id": 117,
                  "name": "Houston Astros",
                  "link": "/api/v1/teams/117"
                },
                "isWinner": true,
                "splitSquad": false,
                "seriesNumber": 43
              },
              "home": {
                "leagueRecord": { "wins": 69, "losses": 65, "pct": ".515" },
                "score": 4,
                "team": {
                  "id": 111,
                  "name": "Boston Red Sox",
                  "link": "/api/v1/teams/111"
                },
                "isWinner": false,
                "splitSquad": false,
                "seriesNumber": 43
              }
            },
            "venue": {
              "id": 3,
              "name": "Fenway Park",
              "link": "/api/v1/venues/3"
            },
            "content": { "link": "/api/v1/game/716794/content" },
            "isTie": false,
            "gameNumber": 1,
            "publicFacing": true,
            "doubleHeader": "N",
            "gamedayType": "P",
            "tiebreaker": "N",
            "calendarEventID": "14-716794-2023-08-30",
            "seasonDisplay": "2023",
            "dayNight": "day",
            "scheduledInnings": 9,
            "reverseHomeAwayStatus": false,
            "inningBreakLength": 120,
            "gamesInSeries": 3,
            "seriesGameNumber": 3,
            "seriesDescription": "Regular Season",
            "recordSource": "S",
            "ifNecessary": "N",
            "ifNecessaryDescription": "Normal Game",
            "lineups": {
              "homePlayers": [
                {
                  "id": 678882,
                  "fullName": "Ceddanne Rafaela",
                  "link": "/api/v1/people/678882",
                  "firstName": "Ceddanne",
                  "lastName": "Rafaela",
                  "primaryPosition": {
                    "code": "6",
                    "name": "Shortstop",
                    "type": "Infielder",
                    "abbreviation": "SS"
                  },
                  "useName": "Ceddanne"
                },
                {
                  "id": 457759,
                  "fullName": "Justin Turner",
                  "link": "/api/v1/people/457759",
                  "firstName": "Justin",
                  "lastName": "Turner",
                  "primaryPosition": {
                    "code": "10",
                    "name": "Designated Hitter",
                    "type": "Hitter",
                    "abbreviation": "DH"
                  },
                  "useName": "Justin"
                },
                {
                  "id": 646240,
                  "fullName": "Rafael Devers",
                  "link": "/api/v1/people/646240",
                  "firstName": "Rafael",
                  "lastName": "Devers",
                  "primaryPosition": {
                    "code": "5",
                    "name": "Third Base",
                    "type": "Infielder",
                    "abbreviation": "3B"
                  },
                  "useName": "Rafael"
                },
                {
                  "id": 594807,
                  "fullName": "Adam Duvall",
                  "link": "/api/v1/people/594807",
                  "firstName": "Adam",
                  "lastName": "Duvall",
                  "primaryPosition": {
                    "code": "8",
                    "name": "Outfielder",
                    "type": "Outfielder",
                    "abbreviation": "CF"
                  },
                  "useName": "Adam"
                },
                {
                  "id": 608701,
                  "fullName": "Rob Refsnyder",
                  "link": "/api/v1/people/608701",
                  "firstName": "Robert",
                  "lastName": "Refsnyder",
                  "primaryPosition": {
                    "code": "7",
                    "name": "Outfielder",
                    "type": "Outfielder",
                    "abbreviation": "LF"
                  },
                  "useName": "Rob"
                },
                {
                  "id": 657077,
                  "fullName": "Alex Verdugo",
                  "link": "/api/v1/people/657077",
                  "firstName": "Alexander",
                  "lastName": "Verdugo",
                  "primaryPosition": {
                    "code": "9",
                    "name": "Outfielder",
                    "type": "Outfielder",
                    "abbreviation": "RF"
                  },
                  "useName": "Alex"
                },
                {
                  "id": 649966,
                  "fullName": "Luis Urias",
                  "link": "/api/v1/people/649966",
                  "firstName": "Luis",
                  "lastName": "Urias",
                  "primaryPosition": {
                    "code": "4",
                    "name": "Second Base",
                    "type": "Infielder",
                    "abbreviation": "2B"
                  },
                  "useName": "Luis"
                },
                {
                  "id": 671213,
                  "fullName": "Triston Casas",
                  "link": "/api/v1/people/671213",
                  "firstName": "Triston",
                  "lastName": "Casas",
                  "primaryPosition": {
                    "code": "3",
                    "name": "First Base",
                    "type": "Infielder",
                    "abbreviation": "1B"
                  },
                  "useName": "Triston"
                },
                {
                  "id": 657136,
                  "fullName": "Connor Wong",
                  "link": "/api/v1/people/657136",
                  "firstName": "Connor",
                  "lastName": "Wong",
                  "primaryPosition": {
                    "code": "2",
                    "name": "Catcher",
                    "type": "Catcher",
                    "abbreviation": "C"
                  },
                  "useName": "Connor"
                }
              ],
              "awayPlayers": [
                {
                  "id": 514888,
                  "fullName": "Jose Altuve",
                  "link": "/api/v1/people/514888",
                  "firstName": "Jose",
                  "lastName": "Altuve",
                  "primaryPosition": {
                    "code": "4",
                    "name": "Second Base",
                    "type": "Infielder",
                    "abbreviation": "2B"
                  },
                  "useName": "Jose"
                },
                {
                  "id": 608324,
                  "fullName": "Alex Bregman",
                  "link": "/api/v1/people/608324",
                  "firstName": "Alexander",
                  "lastName": "Bregman",
                  "primaryPosition": {
                    "code": "5",
                    "name": "Third Base",
                    "type": "Infielder",
                    "abbreviation": "3B"
                  },
                  "useName": "Alex"
                },
                {
                  "id": 670541,
                  "fullName": "Yordan Alvarez",
                  "link": "/api/v1/people/670541",
                  "firstName": "Yordan",
                  "lastName": "Alvarez",
                  "primaryPosition": {
                    "code": "7",
                    "name": "Outfielder",
                    "type": "Outfielder",
                    "abbreviation": "LF"
                  },
                  "useName": "Yordan"
                },
                {
                  "id": 663656,
                  "fullName": "Kyle Tucker",
                  "link": "/api/v1/people/663656",
                  "firstName": "Kyle",
                  "lastName": "Tucker",
                  "primaryPosition": {
                    "code": "9",
                    "name": "Outfielder",
                    "type": "Outfielder",
                    "abbreviation": "RF"
                  },
                  "useName": "Kyle"
                },
                {
                  "id": 676801,
                  "fullName": "Chas McCormick",
                  "link": "/api/v1/people/676801",
                  "firstName": "Chas",
                  "lastName": "McCormick",
                  "primaryPosition": {
                    "code": "8",
                    "name": "Outfielder",
                    "type": "Outfielder",
                    "abbreviation": "CF"
                  },
                  "useName": "Chas"
                },
                {
                  "id": 488726,
                  "fullName": "Michael Brantley",
                  "link": "/api/v1/people/488726",
                  "firstName": "Michael",
                  "lastName": "Brantley",
                  "primaryPosition": {
                    "code": "10",
                    "name": "Designated Hitter",
                    "type": "Hitter",
                    "abbreviation": "DH"
                  },
                  "useName": "Michael"
                },
                {
                  "id": 572138,
                  "fullName": "Jon Singleton",
                  "link": "/api/v1/people/572138",
                  "firstName": "Jonathan",
                  "lastName": "Singleton",
                  "primaryPosition": {
                    "code": "3",
                    "name": "First Base",
                    "type": "Infielder",
                    "abbreviation": "1B"
                  },
                  "useName": "Jon"
                },
                {
                  "id": 665161,
                  "fullName": "Jeremy Pena",
                  "link": "/api/v1/people/665161",
                  "firstName": "Jeremy",
                  "lastName": "Pena",
                  "primaryPosition": {
                    "code": "6",
                    "name": "Shortstop",
                    "type": "Infielder",
                    "abbreviation": "SS"
                  },
                  "useName": "Jeremy"
                },
                {
                  "id": 455117,
                  "fullName": "Martin Maldonado",
                  "link": "/api/v1/people/455117",
                  "firstName": "Martin",
                  "lastName": "Maldonado",
                  "primaryPosition": {
                    "code": "2",
                    "name": "Catcher",
                    "type": "Catcher",
                    "abbreviation": "C"
                  },
                  "useName": "Martin"
                }
              ]
            }
          },
          {
            "gamePk": 716788,
            "gameGuid": "01a993ef-eef7-45c4-930f-4b6409746d37",
            "link": "/api/v1.1/game/716788/feed/live",
            "gameType": "R",
            "season": "2023",
            "gameDate": "2023-08-30T20:10:00Z",
            "officialDate": "2023-08-30",
            "status": {
              "abstractGameState": "Final",
              "codedGameState": "F",
              "detailedState": "Final",
              "statusCode": "F",
              "startTimeTBD": false,
              "abstractGameCode": "F"
            },
            "teams": {
              "away": {
                "leagueRecord": { "wins": 39, "losses": 95, "pct": ".291" },
                "score": 4,
                "team": {
                  "id": 133,
                  "name": "Oakland Athletics",
                  "link": "/api/v1/teams/133"
                },
                "isWinner": false,
                "splitSquad": false,
                "seriesNumber": 43
              },
              "home": {
                "leagueRecord": { "wins": 76, "losses": 57, "pct": ".571" },
                "score": 5,
                "team": {
                  "id": 136,
                  "name": "Seattle Mariners",
                  "link": "/api/v1/teams/136"
                },
                "isWinner": true,
                "splitSquad": false,
                "seriesNumber": 43
              }
            },
            "venue": {
              "id": 680,
              "name": "T-Mobile Park",
              "link": "/api/v1/venues/680"
            },
            "content": { "link": "/api/v1/game/716788/content" },
            "isTie": false,
            "gameNumber": 1,
            "publicFacing": true,
            "doubleHeader": "N",
            "gamedayType": "P",
            "tiebreaker": "N",
            "calendarEventID": "14-716788-2023-08-30",
            "seasonDisplay": "2023",
            "dayNight": "day",
            "scheduledInnings": 9,
            "reverseHomeAwayStatus": false,
            "inningBreakLength": 120,
            "gamesInSeries": 3,
            "seriesGameNumber": 3,
            "seriesDescription": "Regular Season",
            "recordSource": "S",
            "ifNecessary": "N",
            "ifNecessaryDescription": "Normal Game",
            "lineups": {
              "homePlayers": [
                {
                  "id": 641487,
                  "fullName": "J.P. Crawford",
                  "link": "/api/v1/people/641487",
                  "firstName": "John",
                  "lastName": "Crawford",
                  "primaryPosition": {
                    "code": "6",
                    "name": "Shortstop",
                    "type": "Infielder",
                    "abbreviation": "SS"
                  },
                  "useName": "J.P."
                },
                {
                  "id": 553993,
                  "fullName": "Eugenio Suarez",
                  "link": "/api/v1/people/553993",
                  "firstName": "Eugenio",
                  "lastName": "Suarez",
                  "primaryPosition": {
                    "code": "5",
                    "name": "Third Base",
                    "type": "Infielder",
                    "abbreviation": "3B"
                  },
                  "useName": "Eugenio"
                },
                {
                  "id": 663728,
                  "fullName": "Cal Raleigh",
                  "link": "/api/v1/people/663728",
                  "firstName": "Caleb",
                  "lastName": "Raleigh",
                  "primaryPosition": {
                    "code": "2",
                    "name": "Catcher",
                    "type": "Catcher",
                    "abbreviation": "C"
                  },
                  "useName": "Cal"
                },
                {
                  "id": 606192,
                  "fullName": "Teoscar Hernandez",
                  "link": "/api/v1/people/606192",
                  "firstName": "Teoscar",
                  "lastName": "Hernandez",
                  "primaryPosition": {
                    "code": "9",
                    "name": "Outfielder",
                    "type": "Outfielder",
                    "abbreviation": "RF"
                  },
                  "useName": "Teoscar"
                },
                {
                  "id": 664034,
                  "fullName": "Ty France",
                  "link": "/api/v1/people/664034",
                  "firstName": "Tyler",
                  "lastName": "France",
                  "primaryPosition": {
                    "code": "3",
                    "name": "First Base",
                    "type": "Infielder",
                    "abbreviation": "1B"
                  },
                  "useName": "Ty"
                },
                {
                  "id": 686527,
                  "fullName": "Dominic Canzone",
                  "link": "/api/v1/people/686527",
                  "firstName": "Dominic",
                  "lastName": "Canzone",
                  "primaryPosition": {
                    "code": "7",
                    "name": "Outfielder",
                    "type": "Outfielder",
                    "abbreviation": "LF"
                  },
                  "useName": "Dominic"
                },
                {
                  "id": 645801,
                  "fullName": "Mike Ford",
                  "link": "/api/v1/people/645801",
                  "firstName": "Michael",
                  "lastName": "Ford",
                  "primaryPosition": {
                    "code": "10",
                    "name": "Designated Hitter",
                    "type": "Hitter",
                    "abbreviation": "DH"
                  },
                  "useName": "Mike"
                },
                {
                  "id": 664238,
                  "fullName": "Dylan Moore",
                  "link": "/api/v1/people/664238",
                  "firstName": "Dylan",
                  "lastName": "Moore",
                  "primaryPosition": {
                    "code": "8",
                    "name": "Outfielder",
                    "type": "Outfielder",
                    "abbreviation": "CF"
                  },
                  "useName": "Dylan"
                },
                {
                  "id": 668942,
                  "fullName": "Josh Rojas",
                  "link": "/api/v1/people/668942",
                  "firstName": "Joshua",
                  "lastName": "Rojas",
                  "primaryPosition": {
                    "code": "4",
                    "name": "Second Base",
                    "type": "Infielder",
                    "abbreviation": "2B"
                  },
                  "useName": "Josh"
                }
              ],
              "awayPlayers": [
                {
                  "id": 676116,
                  "fullName": "Ryan Noda",
                  "link": "/api/v1/people/676116",
                  "firstName": "Ryan",
                  "lastName": "Noda",
                  "primaryPosition": {
                    "code": "3",
                    "name": "First Base",
                    "type": "Infielder",
                    "abbreviation": "1B"
                  },
                  "useName": "Ryan"
                },
                {
                  "id": 680869,
                  "fullName": "Zack Gelof",
                  "link": "/api/v1/people/680869",
                  "firstName": "Zachary",
                  "lastName": "Gelof",
                  "primaryPosition": {
                    "code": "4",
                    "name": "Second Base",
                    "type": "Infielder",
                    "abbreviation": "2B"
                  },
                  "useName": "Zack"
                },
                {
                  "id": 667670,
                  "fullName": "Brent Rooker",
                  "link": "/api/v1/people/667670",
                  "firstName": "Terry",
                  "lastName": "Rooker",
                  "primaryPosition": {
                    "code": "10",
                    "name": "Designated Hitter",
                    "type": "Hitter",
                    "abbreviation": "DH"
                  },
                  "useName": "Brent"
                },
                {
                  "id": 664913,
                  "fullName": "Seth Brown",
                  "link": "/api/v1/people/664913",
                  "firstName": "Seth",
                  "lastName": "Brown",
                  "primaryPosition": {
                    "code": "9",
                    "name": "Outfielder",
                    "type": "Outfielder",
                    "abbreviation": "RF"
                  },
                  "useName": "Seth"
                },
                {
                  "id": 672478,
                  "fullName": "Jordan Diaz",
                  "link": "/api/v1/people/672478",
                  "firstName": "Jordan",
                  "lastName": "Diaz",
                  "primaryPosition": {
                    "code": "5",
                    "name": "Third Base",
                    "type": "Infielder",
                    "abbreviation": "3B"
                  },
                  "useName": "Jordan"
                },
                {
                  "id": 542208,
                  "fullName": "Carlos Perez",
                  "link": "/api/v1/people/542208",
                  "firstName": "Carlos",
                  "lastName": "Perez",
                  "primaryPosition": {
                    "code": "2",
                    "name": "Catcher",
                    "type": "Catcher",
                    "abbreviation": "C"
                  },
                  "useName": "Carlos"
                },
                {
                  "id": 671732,
                  "fullName": "Lawrence Butler",
                  "link": "/api/v1/people/671732",
                  "firstName": "Lawrence",
                  "lastName": "Butler",
                  "primaryPosition": {
                    "code": "8",
                    "name": "Outfielder",
                    "type": "Outfielder",
                    "abbreviation": "CF"
                  },
                  "useName": "Lawrence"
                },
                {
                  "id": 649557,
                  "fullName": "Aledmys Diaz",
                  "link": "/api/v1/people/649557",
                  "firstName": "Aledmys",
                  "lastName": "Diaz",
                  "primaryPosition": {
                    "code": "6",
                    "name": "Shortstop",
                    "type": "Infielder",
                    "abbreviation": "SS"
                  },
                  "useName": "Aledmys"
                },
                {
                  "id": 665923,
                  "fullName": "Esteury Ruiz",
                  "link": "/api/v1/people/665923",
                  "firstName": "Esteury",
                  "lastName": "Ruiz",
                  "primaryPosition": {
                    "code": "7",
                    "name": "Outfielder",
                    "type": "Outfielder",
                    "abbreviation": "LF"
                  },
                  "useName": "Esteury"
                }
              ]
            }
          },
          {
            "gamePk": 716783,
            "gameGuid": "b0cc5eef-a90a-4cbe-a54b-ae3123c70cfc",
            "link": "/api/v1.1/game/716783/feed/live",
            "gameType": "R",
            "season": "2023",
            "gameDate": "2023-08-30T22:40:00Z",
            "officialDate": "2023-08-30",
            "status": {
              "abstractGameState": "Final",
              "codedGameState": "F",
              "detailedState": "Final",
              "statusCode": "F",
              "startTimeTBD": false,
              "abstractGameCode": "F"
            },
            "teams": {
              "away": {
                "leagueRecord": { "wins": 75, "losses": 58, "pct": ".564" },
                "score": 5,
                "team": {
                  "id": 140,
                  "name": "Texas Rangers",
                  "link": "/api/v1/teams/140"
                },
                "isWinner": false,
                "splitSquad": false,
                "seriesNumber": 43
              },
              "home": {
                "leagueRecord": { "wins": 61, "losses": 73, "pct": ".455" },
                "score": 6,
                "team": {
                  "id": 121,
                  "name": "New York Mets",
                  "link": "/api/v1/teams/121"
                },
                "isWinner": true,
                "splitSquad": false,
                "seriesNumber": 43
              }
            },
            "venue": {
              "id": 3289,
              "name": "Citi Field",
              "link": "/api/v1/venues/3289"
            },
            "content": { "link": "/api/v1/game/716783/content" },
            "isTie": false,
            "gameNumber": 1,
            "publicFacing": true,
            "doubleHeader": "N",
            "gamedayType": "P",
            "tiebreaker": "N",
            "calendarEventID": "14-716783-2023-08-30",
            "seasonDisplay": "2023",
            "dayNight": "night",
            "scheduledInnings": 9,
            "reverseHomeAwayStatus": false,
            "inningBreakLength": 120,
            "gamesInSeries": 3,
            "seriesGameNumber": 3,
            "seriesDescription": "Regular Season",
            "recordSource": "S",
            "ifNecessary": "N",
            "ifNecessaryDescription": "Normal Game",
            "lineups": {
              "homePlayers": [
                {
                  "id": 607043,
                  "fullName": "Brandon Nimmo",
                  "link": "/api/v1/people/607043",
                  "firstName": "Brandon",
                  "lastName": "Nimmo",
                  "primaryPosition": {
                    "code": "8",
                    "name": "Outfielder",
                    "type": "Outfielder",
                    "abbreviation": "CF"
                  },
                  "useName": "Brandon"
                },
                {
                  "id": 596019,
                  "fullName": "Francisco Lindor",
                  "link": "/api/v1/people/596019",
                  "firstName": "Francisco",
                  "lastName": "Lindor",
                  "primaryPosition": {
                    "code": "6",
                    "name": "Shortstop",
                    "type": "Infielder",
                    "abbreviation": "SS"
                  },
                  "useName": "Francisco"
                },
                {
                  "id": 643446,
                  "fullName": "Jeff McNeil",
                  "link": "/api/v1/people/643446",
                  "firstName": "Jeff",
                  "lastName": "McNeil",
                  "primaryPosition": {
                    "code": "4",
                    "name": "Second Base",
                    "type": "Infielder",
                    "abbreviation": "2B"
                  },
                  "useName": "Jeff"
                },
                {
                  "id": 624413,
                  "fullName": "Pete Alonso",
                  "link": "/api/v1/people/624413",
                  "firstName": "Peter",
                  "lastName": "Alonso",
                  "primaryPosition": {
                    "code": "3",
                    "name": "First Base",
                    "type": "Infielder",
                    "abbreviation": "1B"
                  },
                  "useName": "Pete"
                },
                {
                  "id": 596129,
                  "fullName": "Daniel Vogelbach",
                  "link": "/api/v1/people/596129",
                  "firstName": "Daniel",
                  "lastName": "Vogelbach",
                  "primaryPosition": {
                    "code": "10",
                    "name": "Designated Hitter",
                    "type": "Hitter",
                    "abbreviation": "DH"
                  },
                  "useName": "Daniel"
                },
                {
                  "id": 621466,
                  "fullName": "DJ Stewart",
                  "link": "/api/v1/people/621466",
                  "firstName": "Demetrius",
                  "lastName": "Stewart",
                  "primaryPosition": {
                    "code": "9",
                    "name": "Outfielder",
                    "type": "Outfielder",
                    "abbreviation": "RF"
                  },
                  "useName": "DJ"
                },
                {
                  "id": 553882,
                  "fullName": "Omar Narvaez",
                  "link": "/api/v1/people/553882",
                  "firstName": "Omar",
                  "lastName": "Narvaez",
                  "primaryPosition": {
                    "code": "2",
                    "name": "Catcher",
                    "type": "Catcher",
                    "abbreviation": "C"
                  },
                  "useName": "Omar"
                },
                {
                  "id": 668901,
                  "fullName": "Mark Vientos",
                  "link": "/api/v1/people/668901",
                  "firstName": "Mark",
                  "lastName": "Vientos",
                  "primaryPosition": {
                    "code": "5",
                    "name": "Third Base",
                    "type": "Infielder",
                    "abbreviation": "3B"
                  },
                  "useName": "Mark"
                },
                {
                  "id": 542364,
                  "fullName": "Rafael Ortega",
                  "link": "/api/v1/people/542364",
                  "firstName": "Rafael",
                  "lastName": "Ortega",
                  "primaryPosition": {
                    "code": "7",
                    "name": "Outfielder",
                    "type": "Outfielder",
                    "abbreviation": "LF"
                  },
                  "useName": "Rafael"
                }
              ],
              "awayPlayers": [
                {
                  "id": 543760,
                  "fullName": "Marcus Semien",
                  "link": "/api/v1/people/543760",
                  "firstName": "Marcus",
                  "lastName": "Semien",
                  "primaryPosition": {
                    "code": "4",
                    "name": "Second Base",
                    "type": "Infielder",
                    "abbreviation": "2B"
                  },
                  "useName": "Marcus"
                },
                {
                  "id": 608369,
                  "fullName": "Corey Seager",
                  "link": "/api/v1/people/608369",
                  "firstName": "Corey",
                  "lastName": "Seager",
                  "primaryPosition": {
                    "code": "6",
                    "name": "Shortstop",
                    "type": "Infielder",
                    "abbreviation": "SS"
                  },
                  "useName": "Corey"
                },
                {
                  "id": 663993,
                  "fullName": "Nathaniel Lowe",
                  "link": "/api/v1/people/663993",
                  "firstName": "David",
                  "lastName": "Lowe",
                  "primaryPosition": {
                    "code": "3",
                    "name": "First Base",
                    "type": "Infielder",
                    "abbreviation": "1B"
                  },
                  "useName": "Nathaniel"
                },
                {
                  "id": 666969,
                  "fullName": "Adolis Garcia",
                  "link": "/api/v1/people/666969",
                  "firstName": "Jose",
                  "lastName": "Garcia",
                  "primaryPosition": {
                    "code": "9",
                    "name": "Outfielder",
                    "type": "Outfielder",
                    "abbreviation": "RF"
                  },
                  "useName": "Adolis"
                },
                {
                  "id": 641598,
                  "fullName": "Mitch Garver",
                  "link": "/api/v1/people/641598",
                  "firstName": "Mitchell",
                  "lastName": "Garver",
                  "primaryPosition": {
                    "code": "10",
                    "name": "Designated Hitter",
                    "type": "Hitter",
                    "abbreviation": "DH"
                  },
                  "useName": "Mitch"
                },
                {
                  "id": 641680,
                  "fullName": "Jonah Heim",
                  "link": "/api/v1/people/641680",
                  "firstName": "Jonah",
                  "lastName": "Heim",
                  "primaryPosition": {
                    "code": "2",
                    "name": "Catcher",
                    "type": "Catcher",
                    "abbreviation": "C"
                  },
                  "useName": "Jonah"
                },
                {
                  "id": 608671,
                  "fullName": "Travis Jankowski",
                  "link": "/api/v1/people/608671",
                  "firstName": "Travis",
                  "lastName": "Jankowski",
                  "primaryPosition": {
                    "code": "7",
                    "name": "Outfielder",
                    "type": "Outfielder",
                    "abbreviation": "LF"
                  },
                  "useName": "Travis"
                },
                {
                  "id": 677649,
                  "fullName": "Ezequiel Duran",
                  "link": "/api/v1/people/677649",
                  "firstName": "Ezequiel",
                  "lastName": "Duran",
                  "primaryPosition": {
                    "code": "5",
                    "name": "Third Base",
                    "type": "Infielder",
                    "abbreviation": "3B"
                  },
                  "useName": "Ezequiel"
                },
                {
                  "id": 665750,
                  "fullName": "Leody Taveras",
                  "link": "/api/v1/people/665750",
                  "firstName": "Leody",
                  "lastName": "Taveras",
                  "primaryPosition": {
                    "code": "8",
                    "name": "Outfielder",
                    "type": "Outfielder",
                    "abbreviation": "CF"
                  },
                  "useName": "Leody"
                }
              ]
            }
          },
          {
            "gamePk": 716778,
            "gameGuid": "7eb67de7-499c-4a7a-b27c-75c8d9bf0a0d",
            "link": "/api/v1.1/game/716778/feed/live",
            "gameType": "R",
            "season": "2023",
            "gameDate": "2023-08-30T22:40:00Z",
            "officialDate": "2023-08-30",
            "status": {
              "abstractGameState": "Final",
              "codedGameState": "F",
              "detailedState": "Final",
              "statusCode": "F",
              "startTimeTBD": false,
              "abstractGameCode": "F"
            },
            "teams": {
              "away": {
                "leagueRecord": { "wins": 82, "losses": 52, "pct": ".612" },
                "score": 3,
                "team": {
                  "id": 139,
                  "name": "Tampa Bay Rays",
                  "link": "/api/v1/teams/139"
                },
                "isWinner": true,
                "splitSquad": false,
                "seriesNumber": 43
              },
              "home": {
                "leagueRecord": { "wins": 66, "losses": 67, "pct": ".496" },
                "score": 0,
                "team": {
                  "id": 146,
                  "name": "Miami Marlins",
                  "link": "/api/v1/teams/146"
                },
                "isWinner": false,
                "splitSquad": false,
                "seriesNumber": 43
              }
            },
            "venue": {
              "id": 4169,
              "name": "loanDepot park",
              "link": "/api/v1/venues/4169"
            },
            "content": { "link": "/api/v1/game/716778/content" },
            "isTie": false,
            "gameNumber": 1,
            "publicFacing": true,
            "doubleHeader": "N",
            "gamedayType": "P",
            "tiebreaker": "N",
            "calendarEventID": "14-716778-2023-08-30",
            "seasonDisplay": "2023",
            "dayNight": "night",
            "scheduledInnings": 9,
            "reverseHomeAwayStatus": false,
            "inningBreakLength": 120,
            "gamesInSeries": 2,
            "seriesGameNumber": 2,
            "seriesDescription": "Regular Season",
            "recordSource": "S",
            "ifNecessary": "N",
            "ifNecessaryDescription": "Normal Game",
            "lineups": {
              "homePlayers": [
                {
                  "id": 650333,
                  "fullName": "Luis Arraez",
                  "link": "/api/v1/people/650333",
                  "firstName": "Luis",
                  "lastName": "Arraez",
                  "primaryPosition": {
                    "code": "4",
                    "name": "Second Base",
                    "type": "Infielder",
                    "abbreviation": "2B"
                  },
                  "useName": "Luis"
                },
                {
                  "id": 605137,
                  "fullName": "Josh Bell",
                  "link": "/api/v1/people/605137",
                  "firstName": "Joshua",
                  "lastName": "Bell",
                  "primaryPosition": {
                    "code": "10",
                    "name": "Designated Hitter",
                    "type": "Hitter",
                    "abbreviation": "DH"
                  },
                  "useName": "Josh"
                },
                {
                  "id": 669394,
                  "fullName": "Jake Burger",
                  "link": "/api/v1/people/669394",
                  "firstName": "Jacob",
                  "lastName": "Burger",
                  "primaryPosition": {
                    "code": "5",
                    "name": "Third Base",
                    "type": "Infielder",
                    "abbreviation": "3B"
                  },
                  "useName": "Jake"
                },
                {
                  "id": 665862,
                  "fullName": "Jazz Chisholm",
                  "link": "/api/v1/people/665862",
                  "firstName": "Jasrado",
                  "lastName": "Chisholm",
                  "primaryPosition": {
                    "code": "8",
                    "name": "Outfielder",
                    "type": "Outfielder",
                    "abbreviation": "CF"
                  },
                  "useName": "Jazz"
                },
                {
                  "id": 650559,
                  "fullName": "Bryan De La Cruz",
                  "link": "/api/v1/people/650559",
                  "firstName": "Bryan",
                  "lastName": "De La Cruz",
                  "primaryPosition": {
                    "code": "7",
                    "name": "Outfielder",
                    "type": "Outfielder",
                    "abbreviation": "LF"
                  },
                  "useName": "Bryan"
                },
                {
                  "id": 660821,
                  "fullName": "Jesus Sanchez",
                  "link": "/api/v1/people/660821",
                  "firstName": "Jesus",
                  "lastName": "Sanchez",
                  "primaryPosition": {
                    "code": "9",
                    "name": "Outfielder",
                    "type": "Outfielder",
                    "abbreviation": "RF"
                  },
                  "useName": "Jesus"
                },
                {
                  "id": 493329,
                  "fullName": "Yuli Gurriel",
                  "link": "/api/v1/people/493329",
                  "firstName": "Yulieski",
                  "lastName": "Gurriel",
                  "primaryPosition": {
                    "code": "3",
                    "name": "First Base",
                    "type": "Infielder",
                    "abbreviation": "1B"
                  },
                  "useName": "Yuli"
                },
                {
                  "id": 621563,
                  "fullName": "Joey Wendle",
                  "link": "/api/v1/people/621563",
                  "firstName": "Joseph",
                  "lastName": "Wendle",
                  "primaryPosition": {
                    "code": "6",
                    "name": "Shortstop",
                    "type": "Infielder",
                    "abbreviation": "SS"
                  },
                  "useName": "Joey"
                },
                {
                  "id": 663743,
                  "fullName": "Nick Fortes",
                  "link": "/api/v1/people/663743",
                  "firstName": "Nicholas",
                  "lastName": "Fortes",
                  "primaryPosition": {
                    "code": "2",
                    "name": "Catcher",
                    "type": "Catcher",
                    "abbreviation": "C"
                  },
                  "useName": "Nick"
                }
              ],
              "awayPlayers": [
                {
                  "id": 650490,
                  "fullName": "Yandy Diaz",
                  "link": "/api/v1/people/650490",
                  "firstName": "Yandy",
                  "lastName": "Diaz",
                  "primaryPosition": {
                    "code": "3",
                    "name": "First Base",
                    "type": "Infielder",
                    "abbreviation": "1B"
                  },
                  "useName": "Yandy"
                },
                {
                  "id": 668227,
                  "fullName": "Randy Arozarena",
                  "link": "/api/v1/people/668227",
                  "firstName": "Randy",
                  "lastName": "Arozarena",
                  "primaryPosition": {
                    "code": "7",
                    "name": "Outfielder",
                    "type": "Outfielder",
                    "abbreviation": "LF"
                  },
                  "useName": "Randy"
                },
                {
                  "id": 623912,
                  "fullName": "Harold Ramirez",
                  "link": "/api/v1/people/623912",
                  "firstName": "Harold",
                  "lastName": "Ramirez",
                  "primaryPosition": {
                    "code": "10",
                    "name": "Designated Hitter",
                    "type": "Hitter",
                    "abbreviation": "DH"
                  },
                  "useName": "Harold"
                },
                {
                  "id": 670623,
                  "fullName": "Isaac Paredes",
                  "link": "/api/v1/people/670623",
                  "firstName": "Isaac",
                  "lastName": "Paredes",
                  "primaryPosition": {
                    "code": "5",
                    "name": "Third Base",
                    "type": "Infielder",
                    "abbreviation": "3B"
                  },
                  "useName": "Isaac"
                },
                {
                  "id": 664040,
                  "fullName": "Brandon Lowe",
                  "link": "/api/v1/people/664040",
                  "firstName": "Brandon",
                  "lastName": "Lowe",
                  "primaryPosition": {
                    "code": "4",
                    "name": "Second Base",
                    "type": "Infielder",
                    "abbreviation": "2B"
                  },
                  "useName": "Brandon"
                },
                {
                  "id": 678545,
                  "fullName": "Osleivis Basabe",
                  "link": "/api/v1/people/678545",
                  "firstName": "Osleivis",
                  "lastName": "Basabe",
                  "primaryPosition": {
                    "code": "6",
                    "name": "Shortstop",
                    "type": "Infielder",
                    "abbreviation": "SS"
                  },
                  "useName": "Osleivis"
                },
                {
                  "id": 642350,
                  "fullName": "Jose Siri",
                  "link": "/api/v1/people/642350",
                  "firstName": "Jose",
                  "lastName": "Siri",
                  "primaryPosition": {
                    "code": "8",
                    "name": "Outfielder",
                    "type": "Outfielder",
                    "abbreviation": "CF"
                  },
                  "useName": "Jose"
                },
                {
                  "id": 542194,
                  "fullName": "Christian Bethancourt",
                  "link": "/api/v1/people/542194",
                  "firstName": "Christian",
                  "lastName": "Bethancourt",
                  "primaryPosition": {
                    "code": "2",
                    "name": "Catcher",
                    "type": "Catcher",
                    "abbreviation": "C"
                  },
                  "useName": "Christian"
                },
                {
                  "id": 660644,
                  "fullName": "Vidal Brujan",
                  "link": "/api/v1/people/660644",
                  "firstName": "Vidal",
                  "lastName": "Brujan",
                  "primaryPosition": {
                    "code": "9",
                    "name": "Outfielder",
                    "type": "Outfielder",
                    "abbreviation": "RF"
                  },
                  "useName": "Vidal"
                }
              ]
            }
          },
          {
            "gamePk": 716781,
            "gameGuid": "a7f46127-01e6-47c8-821b-4b69ca40943b",
            "link": "/api/v1.1/game/716781/feed/live",
            "gameType": "R",
            "season": "2023",
            "gameDate": "2023-08-30T22:40:00Z",
            "officialDate": "2023-08-30",
            "status": {
              "abstractGameState": "Final",
              "codedGameState": "F",
              "detailedState": "Final",
              "statusCode": "F",
              "startTimeTBD": false,
              "abstractGameCode": "F"
            },
            "teams": {
              "away": {
                "leagueRecord": { "wins": 65, "losses": 68, "pct": ".489" },
                "score": 6,
                "team": {
                  "id": 147,
                  "name": "New York Yankees",
                  "link": "/api/v1/teams/147"
                },
                "isWinner": true,
                "splitSquad": false,
                "seriesNumber": 43
              },
              "home": {
                "leagueRecord": { "wins": 59, "losses": 74, "pct": ".444" },
                "score": 2,
                "team": {
                  "id": 116,
                  "name": "Detroit Tigers",
                  "link": "/api/v1/teams/116"
                },
                "isWinner": false,
                "splitSquad": false,
                "seriesNumber": 44
              }
            },
            "venue": {
              "id": 2394,
              "name": "Comerica Park",
              "link": "/api/v1/venues/2394"
            },
            "content": { "link": "/api/v1/game/716781/content" },
            "isTie": false,
            "gameNumber": 1,
            "publicFacing": true,
            "doubleHeader": "N",
            "gamedayType": "P",
            "tiebreaker": "N",
            "calendarEventID": "14-716781-2023-08-30",
            "seasonDisplay": "2023",
            "dayNight": "night",
            "scheduledInnings": 9,
            "reverseHomeAwayStatus": false,
            "inningBreakLength": 120,
            "gamesInSeries": 4,
            "seriesGameNumber": 3,
            "seriesDescription": "Regular Season",
            "recordSource": "S",
            "ifNecessary": "N",
            "ifNecessaryDescription": "Normal Game",
            "lineups": {
              "homePlayers": [
                {
                  "id": 668731,
                  "fullName": "Akil Baddoo",
                  "link": "/api/v1/people/668731",
                  "firstName": "Akil",
                  "lastName": "Baddoo",
                  "primaryPosition": {
                    "code": "7",
                    "name": "Outfielder",
                    "type": "Outfielder",
                    "abbreviation": "LF"
                  },
                  "useName": "Akil"
                },
                {
                  "id": 682985,
                  "fullName": "Riley Greene",
                  "link": "/api/v1/people/682985",
                  "firstName": "Riley",
                  "lastName": "Greene",
                  "primaryPosition": {
                    "code": "9",
                    "name": "Outfielder",
                    "type": "Outfielder",
                    "abbreviation": "RF"
                  },
                  "useName": "Riley"
                },
                {
                  "id": 679529,
                  "fullName": "Spencer Torkelson",
                  "link": "/api/v1/people/679529",
                  "firstName": "Spencer",
                  "lastName": "Torkelson",
                  "primaryPosition": {
                    "code": "3",
                    "name": "First Base",
                    "type": "Infielder",
                    "abbreviation": "1B"
                  },
                  "useName": "Spencer"
                },
                {
                  "id": 681481,
                  "fullName": "Kerry Carpenter",
                  "link": "/api/v1/people/681481",
                  "firstName": "Kerry",
                  "lastName": "Carpenter",
                  "primaryPosition": {
                    "code": "10",
                    "name": "Designated Hitter",
                    "type": "Hitter",
                    "abbreviation": "DH"
                  },
                  "useName": "Kerry"
                },
                {
                  "id": 656716,
                  "fullName": "Zach McKinstry",
                  "link": "/api/v1/people/656716",
                  "firstName": "Zachary",
                  "lastName": "McKinstry",
                  "primaryPosition": {
                    "code": "6",
                    "name": "Shortstop",
                    "type": "Infielder",
                    "abbreviation": "SS"
                  },
                  "useName": "Zach"
                },
                {
                  "id": 663837,
                  "fullName": "Matt Vierling",
                  "link": "/api/v1/people/663837",
                  "firstName": "Matthew",
                  "lastName": "Vierling",
                  "primaryPosition": {
                    "code": "5",
                    "name": "Third Base",
                    "type": "Infielder",
                    "abbreviation": "3B"
                  },
                  "useName": "Matt"
                },
                {
                  "id": 678009,
                  "fullName": "Parker Meadows",
                  "link": "/api/v1/people/678009",
                  "firstName": "Parker",
                  "lastName": "Meadows",
                  "primaryPosition": {
                    "code": "8",
                    "name": "Outfielder",
                    "type": "Outfielder",
                    "abbreviation": "CF"
                  },
                  "useName": "Parker"
                },
                {
                  "id": 628451,
                  "fullName": "Andy Ibanez",
                  "link": "/api/v1/people/628451",
                  "firstName": "Andy",
                  "lastName": "Ibanez",
                  "primaryPosition": {
                    "code": "4",
                    "name": "Second Base",
                    "type": "Infielder",
                    "abbreviation": "2B"
                  },
                  "useName": "Andy"
                },
                {
                  "id": 668670,
                  "fullName": "Jake Rogers",
                  "link": "/api/v1/people/668670",
                  "firstName": "Jacob",
                  "lastName": "Rogers",
                  "primaryPosition": {
                    "code": "2",
                    "name": "Catcher",
                    "type": "Catcher",
                    "abbreviation": "C"
                  },
                  "useName": "Jake"
                }
              ],
              "awayPlayers": [
                {
                  "id": 518934,
                  "fullName": "DJ LeMahieu",
                  "link": "/api/v1/people/518934",
                  "firstName": "David",
                  "lastName": "LeMahieu",
                  "primaryPosition": {
                    "code": "3",
                    "name": "First Base",
                    "type": "Infielder",
                    "abbreviation": "1B"
                  },
                  "useName": "DJ"
                },
                {
                  "id": 592450,
                  "fullName": "Aaron Judge",
                  "link": "/api/v1/people/592450",
                  "firstName": "Aaron",
                  "lastName": "Judge",
                  "primaryPosition": {
                    "code": "9",
                    "name": "Outfielder",
                    "type": "Outfielder",
                    "abbreviation": "RF"
                  },
                  "useName": "Aaron"
                },
                {
                  "id": 650402,
                  "fullName": "Gleyber Torres",
                  "link": "/api/v1/people/650402",
                  "firstName": "Gleyber",
                  "lastName": "Torres",
                  "primaryPosition": {
                    "code": "4",
                    "name": "Second Base",
                    "type": "Infielder",
                    "abbreviation": "2B"
                  },
                  "useName": "Gleyber"
                },
                {
                  "id": 519317,
                  "fullName": "Giancarlo Stanton",
                  "link": "/api/v1/people/519317",
                  "firstName": "Giancarlo",
                  "lastName": "Stanton",
                  "primaryPosition": {
                    "code": "10",
                    "name": "Designated Hitter",
                    "type": "Hitter",
                    "abbreviation": "DH"
                  },
                  "useName": "Giancarlo"
                },
                {
                  "id": 683011,
                  "fullName": "Anthony Volpe",
                  "link": "/api/v1/people/683011",
                  "firstName": "Anthony",
                  "lastName": "Volpe",
                  "primaryPosition": {
                    "code": "6",
                    "name": "Shortstop",
                    "type": "Infielder",
                    "abbreviation": "SS"
                  },
                  "useName": "Anthony"
                },
                {
                  "id": 664056,
                  "fullName": "Harrison Bader",
                  "link": "/api/v1/people/664056",
                  "firstName": "Harrison",
                  "lastName": "Bader",
                  "primaryPosition": {
                    "code": "8",
                    "name": "Outfielder",
                    "type": "Outfielder",
                    "abbreviation": "CF"
                  },
                  "useName": "Harrison"
                },
                {
                  "id": 677592,
                  "fullName": "Everson Pereira",
                  "link": "/api/v1/people/677592",
                  "firstName": "Everson",
                  "lastName": "Pereira",
                  "primaryPosition": {
                    "code": "7",
                    "name": "Outfielder",
                    "type": "Outfielder",
                    "abbreviation": "LF"
                  },
                  "useName": "Everson"
                },
                {
                  "id": 672724,
                  "fullName": "Oswald Peraza",
                  "link": "/api/v1/people/672724",
                  "firstName": "Oswald",
                  "lastName": "Peraza",
                  "primaryPosition": {
                    "code": "5",
                    "name": "Third Base",
                    "type": "Infielder",
                    "abbreviation": "3B"
                  },
                  "useName": "Oswald"
                },
                {
                  "id": 666163,
                  "fullName": "Ben Rortvedt",
                  "link": "/api/v1/people/666163",
                  "firstName": "Benjamin",
                  "lastName": "Rortvedt",
                  "primaryPosition": {
                    "code": "2",
                    "name": "Catcher",
                    "type": "Catcher",
                    "abbreviation": "C"
                  },
                  "useName": "Ben"
                }
              ]
            }
          },
          {
            "gamePk": 716780,
            "gameGuid": "6206ff17-3316-4325-809a-2d6cb1ad2f42",
            "link": "/api/v1.1/game/716780/feed/live",
            "gameType": "R",
            "season": "2023",
            "gameDate": "2023-08-31T00:10:00Z",
            "officialDate": "2023-08-30",
            "status": {
              "abstractGameState": "Final",
              "codedGameState": "F",
              "detailedState": "Final",
              "statusCode": "F",
              "startTimeTBD": false,
              "abstractGameCode": "F"
            },
            "teams": {
              "away": {
                "leagueRecord": { "wins": 61, "losses": 73, "pct": ".455" },
                "score": 4,
                "team": {
                  "id": 134,
                  "name": "Pittsburgh Pirates",
                  "link": "/api/v1/teams/134"
                },
                "isWinner": true,
                "splitSquad": false,
                "seriesNumber": 43
              },
              "home": {
                "leagueRecord": { "wins": 41, "losses": 94, "pct": ".304" },
                "score": 1,
                "team": {
                  "id": 118,
                  "name": "Kansas City Royals",
                  "link": "/api/v1/teams/118"
                },
                "isWinner": false,
                "splitSquad": false,
                "seriesNumber": 43
              }
            },
            "venue": {
              "id": 7,
              "name": "Kauffman Stadium",
              "link": "/api/v1/venues/7"
            },
            "content": { "link": "/api/v1/game/716780/content" },
            "isTie": false,
            "gameNumber": 1,
            "publicFacing": true,
            "doubleHeader": "N",
            "gamedayType": "P",
            "tiebreaker": "N",
            "calendarEventID": "14-716780-2023-08-30",
            "seasonDisplay": "2023",
            "dayNight": "night",
            "scheduledInnings": 9,
            "reverseHomeAwayStatus": false,
            "inningBreakLength": 120,
            "gamesInSeries": 3,
            "seriesGameNumber": 3,
            "seriesDescription": "Regular Season",
            "recordSource": "S",
            "ifNecessary": "N",
            "ifNecessaryDescription": "Normal Game",
            "lineups": {
              "homePlayers": [
                {
                  "id": 672580,
                  "fullName": "Maikel Garcia",
                  "link": "/api/v1/people/672580",
                  "firstName": "Maikel",
                  "lastName": "Garcia",
                  "primaryPosition": {
                    "code": "5",
                    "name": "Third Base",
                    "type": "Infielder",
                    "abbreviation": "3B"
                  },
                  "useName": "Maikel"
                },
                {
                  "id": 677951,
                  "fullName": "Bobby Witt",
                  "link": "/api/v1/people/677951",
                  "firstName": "Robert",
                  "lastName": "Witt",
                  "primaryPosition": {
                    "code": "6",
                    "name": "Shortstop",
                    "type": "Infielder",
                    "abbreviation": "SS"
                  },
                  "useName": "Bobby"
                },
                {
                  "id": 669004,
                  "fullName": "MJ Melendez",
                  "link": "/api/v1/people/669004",
                  "firstName": "Mervyl",
                  "lastName": "Melendez",
                  "primaryPosition": {
                    "code": "7",
                    "name": "Outfielder",
                    "type": "Outfielder",
                    "abbreviation": "LF"
                  },
                  "useName": "MJ"
                },
                {
                  "id": 676369,
                  "fullName": "Nelson Velazquez",
                  "link": "/api/v1/people/676369",
                  "firstName": "Nelson",
                  "lastName": "Velazquez",
                  "primaryPosition": {
                    "code": "10",
                    "name": "Designated Hitter",
                    "type": "Hitter",
                    "abbreviation": "DH"
                  },
                  "useName": "Nelson"
                },
                {
                  "id": 607461,
                  "fullName": "Matt Beaty",
                  "link": "/api/v1/people/607461",
                  "firstName": "Matthew",
                  "lastName": "Beaty",
                  "primaryPosition": {
                    "code": "3",
                    "name": "First Base",
                    "type": "Infielder",
                    "abbreviation": "1B"
                  },
                  "useName": "Matt"
                },
                {
                  "id": 666023,
                  "fullName": "Freddy Fermin",
                  "link": "/api/v1/people/666023",
                  "firstName": "Freddy",
                  "lastName": "Fermin",
                  "primaryPosition": {
                    "code": "2",
                    "name": "Catcher",
                    "type": "Catcher",
                    "abbreviation": "C"
                  },
                  "useName": "Freddy"
                },
                {
                  "id": 680118,
                  "fullName": "Dairon Blanco",
                  "link": "/api/v1/people/680118",
                  "firstName": "Dairon",
                  "lastName": "Blanco",
                  "primaryPosition": {
                    "code": "9",
                    "name": "Outfielder",
                    "type": "Outfielder",
                    "abbreviation": "RF"
                  },
                  "useName": "Dairon"
                },
                {
                  "id": 669392,
                  "fullName": "Samad Taylor",
                  "link": "/api/v1/people/669392",
                  "firstName": "Samad",
                  "lastName": "Taylor",
                  "primaryPosition": {
                    "code": "4",
                    "name": "Second Base",
                    "type": "Infielder",
                    "abbreviation": "2B"
                  },
                  "useName": "Samad"
                },
                {
                  "id": 664728,
                  "fullName": "Kyle Isbel",
                  "link": "/api/v1/people/664728",
                  "firstName": "Kyle",
                  "lastName": "Isbel",
                  "primaryPosition": {
                    "code": "8",
                    "name": "Outfielder",
                    "type": "Outfielder",
                    "abbreviation": "CF"
                  },
                  "useName": "Kyle"
                }
              ],
              "awayPlayers": [
                {
                  "id": 656582,
                  "fullName": "Connor Joe",
                  "link": "/api/v1/people/656582",
                  "firstName": "Connor",
                  "lastName": "Joe",
                  "primaryPosition": {
                    "code": "9",
                    "name": "Outfielder",
                    "type": "Outfielder",
                    "abbreviation": "RF"
                  },
                  "useName": "Connor"
                },
                {
                  "id": 668804,
                  "fullName": "Bryan Reynolds",
                  "link": "/api/v1/people/668804",
                  "firstName": "Bryan",
                  "lastName": "Reynolds",
                  "primaryPosition": {
                    "code": "7",
                    "name": "Outfielder",
                    "type": "Outfielder",
                    "abbreviation": "LF"
                  },
                  "useName": "Bryan"
                },
                {
                  "id": 457705,
                  "fullName": "Andrew McCutchen",
                  "link": "/api/v1/people/457705",
                  "firstName": "Andrew",
                  "lastName": "McCutchen",
                  "primaryPosition": {
                    "code": "10",
                    "name": "Designated Hitter",
                    "type": "Hitter",
                    "abbreviation": "DH"
                  },
                  "useName": "Andrew"
                },
                {
                  "id": 682848,
                  "fullName": "Endy Rodriguez",
                  "link": "/api/v1/people/682848",
                  "firstName": "Endy",
                  "lastName": "Rodriguez",
                  "primaryPosition": {
                    "code": "2",
                    "name": "Catcher",
                    "type": "Catcher",
                    "abbreviation": "C"
                  },
                  "useName": "Endy"
                },
                {
                  "id": 678894,
                  "fullName": "Liover Peguero",
                  "link": "/api/v1/people/678894",
                  "firstName": "Liover",
                  "lastName": "Peguero",
                  "primaryPosition": {
                    "code": "4",
                    "name": "Second Base",
                    "type": "Infielder",
                    "abbreviation": "2B"
                  },
                  "useName": "Liover"
                },
                {
                  "id": 681962,
                  "fullName": "Vinny Capra",
                  "link": "/api/v1/people/681962",
                  "firstName": "Vincent",
                  "lastName": "Capra",
                  "primaryPosition": {
                    "code": "5",
                    "name": "Third Base",
                    "type": "Infielder",
                    "abbreviation": "3B"
                  },
                  "useName": "Vinny"
                },
                {
                  "id": 669261,
                  "fullName": "Jack Suwinski",
                  "link": "/api/v1/people/669261",
                  "firstName": "Jack",
                  "lastName": "Suwinski",
                  "primaryPosition": {
                    "code": "8",
                    "name": "Outfielder",
                    "type": "Outfielder",
                    "abbreviation": "CF"
                  },
                  "useName": "Jack"
                },
                {
                  "id": 675961,
                  "fullName": "Alika Williams",
                  "link": "/api/v1/people/675961",
                  "firstName": "Alexander",
                  "lastName": "Williams",
                  "primaryPosition": {
                    "code": "6",
                    "name": "Shortstop",
                    "type": "Infielder",
                    "abbreviation": "SS"
                  },
                  "useName": "Alika"
                },
                {
                  "id": 663845,
                  "fullName": "Alfonso Rivas",
                  "link": "/api/v1/people/663845",
                  "firstName": "Alfonso",
                  "lastName": "Rivas",
                  "primaryPosition": {
                    "code": "3",
                    "name": "First Base",
                    "type": "Infielder",
                    "abbreviation": "1B"
                  },
                  "useName": "Alfonso"
                }
              ]
            }
          },
          {
            "gamePk": 716773,
            "gameGuid": "7eaea7ff-bd3e-4a4c-9aeb-8acc83777658",
            "link": "/api/v1.1/game/716773/feed/live",
            "gameType": "R",
            "season": "2023",
            "gameDate": "2023-08-31T00:40:00Z",
            "officialDate": "2023-08-30",
            "status": {
              "abstractGameState": "Final",
              "codedGameState": "F",
              "detailedState": "Final",
              "statusCode": "F",
              "startTimeTBD": false,
              "abstractGameCode": "F"
            },
            "teams": {
              "away": {
                "leagueRecord": { "wins": 87, "losses": 45, "pct": ".659" },
                "score": 7,
                "team": {
                  "id": 144,
                  "name": "Atlanta Braves",
                  "link": "/api/v1/teams/144"
                },
                "isWinner": true,
                "splitSquad": false,
                "seriesNumber": 43
              },
              "home": {
                "leagueRecord": { "wins": 49, "losses": 84, "pct": ".368" },
                "score": 3,
                "team": {
                  "id": 115,
                  "name": "Colorado Rockies",
                  "link": "/api/v1/teams/115"
                },
                "isWinner": false,
                "splitSquad": false,
                "seriesNumber": 43
              }
            },
            "venue": {
              "id": 19,
              "name": "Coors Field",
              "link": "/api/v1/venues/19"
            },
            "content": { "link": "/api/v1/game/716773/content" },
            "isTie": false,
            "gameNumber": 1,
            "publicFacing": true,
            "doubleHeader": "N",
            "gamedayType": "P",
            "tiebreaker": "N",
            "calendarEventID": "14-716773-2023-08-30",
            "seasonDisplay": "2023",
            "dayNight": "night",
            "scheduledInnings": 9,
            "reverseHomeAwayStatus": false,
            "inningBreakLength": 120,
            "gamesInSeries": 3,
            "seriesGameNumber": 3,
            "seriesDescription": "Regular Season",
            "recordSource": "S",
            "ifNecessary": "N",
            "ifNecessaryDescription": "Normal Game",
            "lineups": {
              "homePlayers": [
                {
                  "id": 453568,
                  "fullName": "Charlie Blackmon",
                  "link": "/api/v1/people/453568",
                  "firstName": "Charles",
                  "lastName": "Blackmon",
                  "primaryPosition": {
                    "code": "10",
                    "name": "Designated Hitter",
                    "type": "Hitter",
                    "abbreviation": "DH"
                  },
                  "useName": "Charlie"
                },
                {
                  "id": 678662,
                  "fullName": "Ezequiel Tovar",
                  "link": "/api/v1/people/678662",
                  "firstName": "Ezequiel",
                  "lastName": "Tovar",
                  "primaryPosition": {
                    "code": "6",
                    "name": "Shortstop",
                    "type": "Infielder",
                    "abbreviation": "SS"
                  },
                  "useName": "Ezequiel"
                },
                {
                  "id": 641857,
                  "fullName": "Ryan McMahon",
                  "link": "/api/v1/people/641857",
                  "firstName": "Ryan",
                  "lastName": "McMahon",
                  "primaryPosition": {
                    "code": "5",
                    "name": "Third Base",
                    "type": "Infielder",
                    "abbreviation": "3B"
                  },
                  "useName": "Ryan"
                },
                {
                  "id": 553869,
                  "fullName": "Elias Diaz",
                  "link": "/api/v1/people/553869",
                  "firstName": "Elias",
                  "lastName": "Diaz",
                  "primaryPosition": {
                    "code": "2",
                    "name": "Catcher",
                    "type": "Catcher",
                    "abbreviation": "C"
                  },
                  "useName": "Elias"
                },
                {
                  "id": 666134,
                  "fullName": "Nolan Jones",
                  "link": "/api/v1/people/666134",
                  "firstName": "Nolan",
                  "lastName": "Jones",
                  "primaryPosition": {
                    "code": "7",
                    "name": "Outfielder",
                    "type": "Outfielder",
                    "abbreviation": "LF"
                  },
                  "useName": "Nolan"
                },
                {
                  "id": 696100,
                  "fullName": "Hunter Goodman",
                  "link": "/api/v1/people/696100",
                  "firstName": "Hunter",
                  "lastName": "Goodman",
                  "primaryPosition": {
                    "code": "3",
                    "name": "First Base",
                    "type": "Infielder",
                    "abbreviation": "1B"
                  },
                  "useName": "Hunter"
                },
                {
                  "id": 669911,
                  "fullName": "Michael Toglia",
                  "link": "/api/v1/people/669911",
                  "firstName": "Michael",
                  "lastName": "Toglia",
                  "primaryPosition": {
                    "code": "9",
                    "name": "Outfielder",
                    "type": "Outfielder",
                    "abbreviation": "RF"
                  },
                  "useName": "Michael"
                },
                {
                  "id": 676701,
                  "fullName": "Alan Trejo",
                  "link": "/api/v1/people/676701",
                  "firstName": "Alan",
                  "lastName": "Trejo",
                  "primaryPosition": {
                    "code": "4",
                    "name": "Second Base",
                    "type": "Infielder",
                    "abbreviation": "2B"
                  },
                  "useName": "Alan"
                },
                {
                  "id": 686668,
                  "fullName": "Brenton Doyle",
                  "link": "/api/v1/people/686668",
                  "firstName": "Brenton",
                  "lastName": "Doyle",
                  "primaryPosition": {
                    "code": "8",
                    "name": "Outfielder",
                    "type": "Outfielder",
                    "abbreviation": "CF"
                  },
                  "useName": "Brenton"
                }
              ],
              "awayPlayers": [
                {
                  "id": 660670,
                  "fullName": "Ronald Acuna",
                  "link": "/api/v1/people/660670",
                  "firstName": "Ronald",
                  "lastName": "Acuna",
                  "primaryPosition": {
                    "code": "9",
                    "name": "Outfielder",
                    "type": "Outfielder",
                    "abbreviation": "RF"
                  },
                  "useName": "Ronald"
                },
                {
                  "id": 645277,
                  "fullName": "Ozzie Albies",
                  "link": "/api/v1/people/645277",
                  "firstName": "Ozhaino",
                  "lastName": "Albies",
                  "primaryPosition": {
                    "code": "4",
                    "name": "Second Base",
                    "type": "Infielder",
                    "abbreviation": "2B"
                  },
                  "useName": "Ozzie"
                },
                {
                  "id": 663586,
                  "fullName": "Austin Riley",
                  "link": "/api/v1/people/663586",
                  "firstName": "Michael",
                  "lastName": "Riley",
                  "primaryPosition": {
                    "code": "5",
                    "name": "Third Base",
                    "type": "Infielder",
                    "abbreviation": "3B"
                  },
                  "useName": "Austin"
                },
                {
                  "id": 621566,
                  "fullName": "Matt Olson",
                  "link": "/api/v1/people/621566",
                  "firstName": "Matthew",
                  "lastName": "Olson",
                  "primaryPosition": {
                    "code": "3",
                    "name": "First Base",
                    "type": "Infielder",
                    "abbreviation": "1B"
                  },
                  "useName": "Matt"
                },
                {
                  "id": 542303,
                  "fullName": "Marcell Ozuna",
                  "link": "/api/v1/people/542303",
                  "firstName": "Marcell",
                  "lastName": "Ozuna",
                  "primaryPosition": {
                    "code": "10",
                    "name": "Designated Hitter",
                    "type": "Hitter",
                    "abbreviation": "DH"
                  },
                  "useName": "Marcell"
                },
                {
                  "id": 518595,
                  "fullName": "Travis d'Arnaud",
                  "link": "/api/v1/people/518595",
                  "firstName": "Travis",
                  "lastName": "d'Arnaud",
                  "primaryPosition": {
                    "code": "2",
                    "name": "Catcher",
                    "type": "Catcher",
                    "abbreviation": "C"
                  },
                  "useName": "Travis"
                },
                {
                  "id": 606115,
                  "fullName": "Orlando Arcia",
                  "link": "/api/v1/people/606115",
                  "firstName": "Orlando",
                  "lastName": "Arcia",
                  "primaryPosition": {
                    "code": "6",
                    "name": "Shortstop",
                    "type": "Infielder",
                    "abbreviation": "SS"
                  },
                  "useName": "Orlando"
                },
                {
                  "id": 607680,
                  "fullName": "Kevin Pillar",
                  "link": "/api/v1/people/607680",
                  "firstName": "Kevin",
                  "lastName": "Pillar",
                  "primaryPosition": {
                    "code": "7",
                    "name": "Outfielder",
                    "type": "Outfielder",
                    "abbreviation": "LF"
                  },
                  "useName": "Kevin"
                },
                {
                  "id": 671739,
                  "fullName": "Michael Harris",
                  "link": "/api/v1/people/671739",
                  "firstName": "Michael",
                  "lastName": "Harris",
                  "primaryPosition": {
                    "code": "8",
                    "name": "Outfielder",
                    "type": "Outfielder",
                    "abbreviation": "CF"
                  },
                  "useName": "Michael"
                }
              ]
            }
          },
          {
            "gamePk": 716774,
            "gameGuid": "05b18c30-4a43-481f-9e70-9dbf7fc20fc5",
            "link": "/api/v1.1/game/716774/feed/live",
            "gameType": "R",
            "season": "2023",
            "gameDate": "2023-08-31T02:10:00Z",
            "officialDate": "2023-08-30",
            "status": {
              "abstractGameState": "Final",
              "codedGameState": "F",
              "detailedState": "Final",
              "statusCode": "F",
              "startTimeTBD": false,
              "abstractGameCode": "F"
            },
            "teams": {
              "away": {
                "leagueRecord": { "wins": 69, "losses": 65, "pct": ".515" },
                "score": 0,
                "team": {
                  "id": 109,
                  "name": "Arizona Diamondbacks",
                  "link": "/api/v1/teams/109"
                },
                "isWinner": false,
                "splitSquad": false,
                "seriesNumber": 44
              },
              "home": {
                "leagueRecord": { "wins": 83, "losses": 49, "pct": ".629" },
                "score": 7,
                "team": {
                  "id": 119,
                  "name": "Los Angeles Dodgers",
                  "link": "/api/v1/teams/119"
                },
                "isWinner": true,
                "splitSquad": false,
                "seriesNumber": 43
              }
            },
            "venue": {
              "id": 22,
              "name": "Dodger Stadium",
              "link": "/api/v1/venues/22"
            },
            "content": { "link": "/api/v1/game/716774/content" },
            "isTie": false,
            "gameNumber": 1,
            "publicFacing": true,
            "doubleHeader": "N",
            "gamedayType": "P",
            "tiebreaker": "N",
            "calendarEventID": "14-716774-2023-08-30",
            "seasonDisplay": "2023",
            "dayNight": "night",
            "scheduledInnings": 9,
            "reverseHomeAwayStatus": false,
            "inningBreakLength": 120,
            "gamesInSeries": 3,
            "seriesGameNumber": 3,
            "seriesDescription": "Regular Season",
            "recordSource": "S",
            "ifNecessary": "N",
            "ifNecessaryDescription": "Normal Game",
            "lineups": {
              "homePlayers": [
                {
                  "id": 605141,
                  "fullName": "Mookie Betts",
                  "link": "/api/v1/people/605141",
                  "firstName": "Markus",
                  "lastName": "Betts",
                  "primaryPosition": {
                    "code": "4",
                    "name": "Second Base",
                    "type": "Infielder",
                    "abbreviation": "2B"
                  },
                  "useName": "Mookie"
                },
                {
                  "id": 518692,
                  "fullName": "Freddie Freeman",
                  "link": "/api/v1/people/518692",
                  "firstName": "Frederick",
                  "lastName": "Freeman",
                  "primaryPosition": {
                    "code": "3",
                    "name": "First Base",
                    "type": "Infielder",
                    "abbreviation": "1B"
                  },
                  "useName": "Freddie"
                },
                {
                  "id": 444482,
                  "fullName": "David Peralta",
                  "link": "/api/v1/people/444482",
                  "firstName": "Senger",
                  "lastName": "Peralta",
                  "primaryPosition": {
                    "code": "7",
                    "name": "Outfielder",
                    "type": "Outfielder",
                    "abbreviation": "LF"
                  },
                  "useName": "David"
                },
                {
                  "id": 571970,
                  "fullName": "Max Muncy",
                  "link": "/api/v1/people/571970",
                  "firstName": "Maxwell",
                  "lastName": "Muncy",
                  "primaryPosition": {
                    "code": "10",
                    "name": "Designated Hitter",
                    "type": "Hitter",
                    "abbreviation": "DH"
                  },
                  "useName": "Max"
                },
                {
                  "id": 518792,
                  "fullName": "Jason Heyward",
                  "link": "/api/v1/people/518792",
                  "firstName": "Jason",
                  "lastName": "Heyward",
                  "primaryPosition": {
                    "code": "9",
                    "name": "Outfielder",
                    "type": "Outfielder",
                    "abbreviation": "RF"
                  },
                  "useName": "Jason"
                },
                {
                  "id": 571771,
                  "fullName": "Enrique Hernandez",
                  "link": "/api/v1/people/571771",
                  "firstName": "Enrique",
                  "lastName": "Hernandez",
                  "primaryPosition": {
                    "code": "5",
                    "name": "Third Base",
                    "type": "Infielder",
                    "abbreviation": "3B"
                  },
                  "useName": "Enrique"
                },
                {
                  "id": 681546,
                  "fullName": "James Outman",
                  "link": "/api/v1/people/681546",
                  "firstName": "James",
                  "lastName": "Outman",
                  "primaryPosition": {
                    "code": "8",
                    "name": "Outfielder",
                    "type": "Outfielder",
                    "abbreviation": "CF"
                  },
                  "useName": "James"
                },
                {
                  "id": 500743,
                  "fullName": "Miguel Rojas",
                  "link": "/api/v1/people/500743",
                  "firstName": "Miguel",
                  "lastName": "Rojas",
                  "primaryPosition": {
                    "code": "6",
                    "name": "Shortstop",
                    "type": "Infielder",
                    "abbreviation": "SS"
                  },
                  "useName": "Miguel"
                },
                {
                  "id": 605131,
                  "fullName": "Austin Barnes",
                  "link": "/api/v1/people/605131",
                  "firstName": "Austin",
                  "lastName": "Barnes",
                  "primaryPosition": {
                    "code": "2",
                    "name": "Catcher",
                    "type": "Catcher",
                    "abbreviation": "C"
                  },
                  "useName": "Austin"
                }
              ],
              "awayPlayers": [
                {
                  "id": 682998,
                  "fullName": "Corbin Carroll",
                  "link": "/api/v1/people/682998",
                  "firstName": "Corbin",
                  "lastName": "Carroll",
                  "primaryPosition": {
                    "code": "9",
                    "name": "Outfielder",
                    "type": "Outfielder",
                    "abbreviation": "RF"
                  },
                  "useName": "Corbin"
                },
                {
                  "id": 606466,
                  "fullName": "Ketel Marte",
                  "link": "/api/v1/people/606466",
                  "firstName": "Ketel",
                  "lastName": "Marte",
                  "primaryPosition": {
                    "code": "4",
                    "name": "Second Base",
                    "type": "Infielder",
                    "abbreviation": "2B"
                  },
                  "useName": "Ketel"
                },
                {
                  "id": 502054,
                  "fullName": "Tommy Pham",
                  "link": "/api/v1/people/502054",
                  "firstName": "Thomas",
                  "lastName": "Pham",
                  "primaryPosition": {
                    "code": "7",
                    "name": "Outfielder",
                    "type": "Outfielder",
                    "abbreviation": "LF"
                  },
                  "useName": "Tommy"
                },
                {
                  "id": 572233,
                  "fullName": "Christian Walker",
                  "link": "/api/v1/people/572233",
                  "firstName": "Christian",
                  "lastName": "Walker",
                  "primaryPosition": {
                    "code": "3",
                    "name": "First Base",
                    "type": "Infielder",
                    "abbreviation": "1B"
                  },
                  "useName": "Christian"
                },
                {
                  "id": 677950,
                  "fullName": "Alek Thomas",
                  "link": "/api/v1/people/677950",
                  "firstName": "Alek",
                  "lastName": "Thomas",
                  "primaryPosition": {
                    "code": "8",
                    "name": "Outfielder",
                    "type": "Outfielder",
                    "abbreviation": "CF"
                  },
                  "useName": "Alek"
                },
                {
                  "id": 666971,
                  "fullName": "Lourdes Gurriel",
                  "link": "/api/v1/people/666971",
                  "firstName": "Lourdes",
                  "lastName": "Gurriel",
                  "primaryPosition": {
                    "code": "10",
                    "name": "Designated Hitter",
                    "type": "Hitter",
                    "abbreviation": "DH"
                  },
                  "useName": "Lourdes"
                },
                {
                  "id": 607054,
                  "fullName": "Jace Peterson",
                  "link": "/api/v1/people/607054",
                  "firstName": "Jace",
                  "lastName": "Peterson",
                  "primaryPosition": {
                    "code": "5",
                    "name": "Third Base",
                    "type": "Infielder",
                    "abbreviation": "3B"
                  },
                  "useName": "Jace"
                },
                {
                  "id": 645444,
                  "fullName": "Jose Herrera",
                  "link": "/api/v1/people/645444",
                  "firstName": "Jose",
                  "lastName": "Herrera",
                  "primaryPosition": {
                    "code": "2",
                    "name": "Catcher",
                    "type": "Catcher",
                    "abbreviation": "C"
                  },
                  "useName": "Jose"
                },
                {
                  "id": 672695,
                  "fullName": "Geraldo Perdomo",
                  "link": "/api/v1/people/672695",
                  "firstName": "Geraldo",
                  "lastName": "Perdomo",
                  "primaryPosition": {
                    "code": "6",
                    "name": "Shortstop",
                    "type": "Infielder",
                    "abbreviation": "SS"
                  },
                  "useName": "Geraldo"
                }
              ]
            }
          }
        ],
        "events": []
      }
    ]
  }
  */


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

    // const queryString = window.location.search;
    // // const url = window.location.href;
    // const urlParams = new URLSearchParams(queryString);
    // urlParams.append('x', 55);
    // console.log(urlParams);
    // const team = urlParams.get('team');
    // console.log('x');




    // window.location.search += thisPage.searchParams.append('yourKey', 'someValue');

    const teamsContainer = document.getElementsByClassName("team-container");

    // document.getElementsByClassName("pagetitle")[0].innerHTML = team;


    fetch('https://statsapi.mlb.com/api/v1/schedule?sportId=1&language=en&hydrate=lineups', {

    })

    .then(res => res.json())
  .then(data => {
    obj = data;

//    obj = this.bigThing;


    console.log(data);

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
                teamContainer.className = "team-container"
                teamContainer.id = teamName.replace(/\s+/g, '').replace('.','')+ gameNum;
                teamContainer.innerHTML = `
                    <h2 class="teamName">${teamName}</h2>
                    <div class="lineup-container">
                        <div class="column">
                            <h3 class="center">Fanduel</h3>
                            <ul id="${teamName.replace(/\s+/g, '').replace('.','')}Guess${gameNum}" class="order-list">
                                <li><input type="text" name="${teamName.replace(/\s+/g, '').replace('.','')}Guess${gameNum}" placeholder="1st" onchange="testParams(this.name)"></li>
                                <li><input type="text" name="${teamName.replace(/\s+/g, '').replace('.','')}Guess${gameNum}" placeholder="2nd" onchange="testParams(this.name)"></li>
                                <li><input type="text" name="${teamName.replace(/\s+/g, '').replace('.','')}Guess${gameNum}" placeholder="3rd" onchange="testParams(this.name)"></li>
                                <li><input type="text" name="${teamName.replace(/\s+/g, '').replace('.','')}Guess${gameNum}" placeholder="4th" onchange="testParams(this.name)"></li>
                                <li><input type="text" name="${teamName.replace(/\s+/g, '').replace('.','')}Guess${gameNum}" placeholder="5th" onchange="testParams(this.name)"></li>
                                <li><input type="text" name="${teamName.replace(/\s+/g, '').replace('.','')}Guess${gameNum}" placeholder="6th" onchange="testParams(this.name)"></li>
                                <li><input type="text" name="${teamName.replace(/\s+/g, '').replace('.','')}Guess${gameNum}" placeholder="7th" onchange="testParams(this.name)"></li>
                                <li><input type="text" name="${teamName.replace(/\s+/g, '').replace('.','')}Guess${gameNum}" placeholder="8th" onchange="testParams(this.name)"></li>
                                <li><input type="text" name="${teamName.replace(/\s+/g, '').replace('.','')}Guess${gameNum}" placeholder="9th" onchange="testParams(this.name)"></li>

                            </ul>
                            <textarea id="txtArea" name="${teamName.replace(/\s+/g, '').replace('.','')}Paste${gameNum}" placeholder="copy/paste lineup as vertical column from spreadsheet" rows="3" cols="20" align = 'center' ></textarea>
                            <button id="${teamName.replace(/\s+/g, '').replace('.','')}Paste${gameNum}" onclick="paste(this.id)">Use Pasted Lineup</button></br>
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


    // if(actualList.length != 9){return;}
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
                actualInput.style.backgroundColor = 'lightblue';
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

    // console.log('_____________________________________________');
    // console.log(batter);

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


    // console.log(actualAllThreeAhead);
    // console.log(fdAllThreeAhead);

    actualAllThreeAhead.forEach(actual => {

        // if(!fdAllThreeAhead.includes(actual)){
        //     threeAheadDiffs.push(actual);
        // }

        if(findBatterInLineup(fdAllThreeAhead, actual) < 0  && findBatterInLineup(fdLineup, actual) >= 0){
            // console.log('PUSHING .... ' + actual);
            threeAheadDiffs.push(actual);
        }

    });



    // console.log('difffffffffffffffs');
    // console.log(threeAheadDiffs);

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
        // console.log(lowercaseBatter);
        // console.log(lowercaseLineup);
        // console.log(lowercaseLineup.indexOf(lastNameOnly(lowercaseBatter)));
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


var lineupsWeHave = [];




function getLineups(){
    console.log('getting lineups');
    lineupsWeHave = [];
    // console.log('pizza');
    // console.log(alreadyAdded.length);
    var alreadyAdded = [];
    // console.log(alreadyAdded);
    // console.log(alreadyAdded.length);

    // const interval = setInterval(function() {
    //     // method to be executed;
    //     getLineups();
    //   }, 5000);

    //  clearInterval(interval);


    var obj;
    // var lineupsWeHave = [];
    // var lineupsWeHave = ['Tampa Bay Rays'];
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

    // obj = this.bigThing;
    //console.log(data);

   })
  .then(() => {
    //console.log(obj);
    // console.log(obj.dates[0].games);
    // console.log(obj.dates[0].games.length);

    obj.dates[0].games.forEach(game => {

        // console.log(lineupsWeHave.length);

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

        // console.log(game.lineups);
        // console.log(game.hasOwnProperty("lineups"));
        // console.log(game.lineups.hasOwnProperty("awayPlayers"));
        // console.log(game.teams.away.team.name);
        // console.log(game.teams.home.team.name);

        // console.log(game.hasOwnProperty("lineups") && game.lineups.hasOwnProperty("awayPlayers"));
        // console.log(game.hasOwnProperty("lineups") && game.lineups.hasOwnProperty("homePlayers"));
        // console.log(game.lineups.length);

        // if(game.lineups.awayPlayers !== undefined){
        if(game.hasOwnProperty("lineups") && game.lineups.hasOwnProperty("awayPlayers")){
            var awayCounter =  0;
            lineupsWeHave.push(game.teams.away.team.name);

            // console.log(game.teams.away.team.name);

            game.lineups.awayPlayers.forEach(player => {
                // //console.log(player.fullName);
                // awayLineup.push(player.fullName);
                //console.log(player.fullName);
                // awaySelector.children[awayCounter].value = player.fullName;
                awayElements[awayCounter].value = player.fullName;
                awayCounter += 1;

            })
        }

        // if(game.lineups.homePlayers !== undefined){
        if(game.hasOwnProperty("lineups") && game.lineups.hasOwnProperty("homePlayers")){
            var homeCounter = 0;
            lineupsWeHave.push(game.teams.home.team.name);

            // console.log(game.teams.home.team.name);

            game.lineups.homePlayers.forEach(player => {
                // //console.log(player.fullName);
                // homeLineup.push(player.fullName);
                homeElements[homeCounter].value = player.fullName;
                homeCounter += 1;
            })
        }


        })
    })
    .then(() => {
        // var teamsContainer = document.getElementsByClassName("team-container");
        // var teamName = 'Tampa Bay Rays';

        // var alreadyAdded = [];

        // const guessedList = document.querySelector(`#${teamName.replace(/\s+/g, '').replace('.','')}` + gameNum);
        // console.log(guessedList);
        // console.log(teamsContainer);
        // console.log(teamsContainer[0]);
        // console.log(lineupsWeHave);
        // teamsContainer.forEach(teamContainer => {
        //     if(lineupsWeHave.includes(teamContainer.querySelector("h2").textContent)){
        //         teamContainer.querySelector("h2").backgroundColor = 'blue';
        //     }
        // });

        // for (let i = 0; i < teamsContainer.length; i++) {
        //     if(lineupsWeHave.includes(teamsContainer[i].querySelector("h2").textContent)){
        //         console.log('am i in here');
        //         teamsContainer[i].style.backgroundColor = 'gray';
        //     }
        // }


        lineupsWeHave.forEach(teamName => {

            // console.log(teamName);
            // console.log(alreadyAdded);
            var gameNum = 1;
            if(alreadyAdded.includes(teamName)){
                gameNum = 2;
            }
            // console.log(alreadyAdded.length);
            // console.log(teamName);
            // console.log(`#${teamName.replace(/\s+/g, '').replace('.','')}` + gameNum);
            // console.log(document.querySelector(`#${teamName.replace(/\s+/g, '').replace('.','')}` + gameNum));
            document.querySelector(`#${teamName.replace(/\s+/g, '').replace('.','')}` + gameNum).style.backgroundColor = 'gray';
            alreadyAdded.push(teamName);
        });


    })
    .then(() => {compareLineups();})

    // .then(() => {
    //     console.log('set');
        // const interval = setInterval(function() {
        //     console.log('set');
        //     // method to be executed;
        //     this.getLineups();
        //   }, 5000);

        //  clearInterval(interval);

        // const interval = setInterval(keepGoing(), 20000);
        // clearInterval(interval);
    // })



}

// function paste() {
    // var awayElements = document.querySelectorAll("textarea[name=copy]");
    // var x = awayElements[0].value;
    // console.log(x);
    // var rows = x.split("\n");
    // console.log(rows);


    // rows.forEach(row => {
    //     console.log(row);
    // })
// }


function paste(clicked_id){




    var pastedData = document.querySelector("textarea[name=" + clicked_id + "]");
    var splitPastedData = (pastedData.value.split("\n"));

    var pastedDataName = clicked_id.replace('Paste', 'Guess');

    var fdInputs = document.querySelectorAll("input[name=" + pastedDataName + "]");

    var batterCount = 0

    splitPastedData.forEach(batter => {

        if(batterCount > 8){return;}
        fdInputs[batterCount].value = batter;



        batterCount += 1;
        pastedData.value = ''

    })




}


// function keepGoing(){
//     console.log('keepGoing');
//     this.getLineups();
// }


function testParams(name){
    // console.log('on change');
    // console.log(name);
    // var awayElements = document.querySelectorAll("input[name=" + name + "]");
    // console.log(awayElements);

    // awayElements.forEach(element => {
    //     console.log(element.value);
    // });
}

function hideUpdatedLineups() {
    // console.log('hiding');
    // console.log(this.lineupsWeHave);
    var alreadyAdded = [];
    lineupsWeHave.forEach(teamName => {

        var gameNum = 1;
        if(alreadyAdded.includes(teamName)){
            gameNum = 2;
        }

        var lineupDiv = document.querySelector(`#${teamName.replace(/\s+/g, '').replace('.','')}` + gameNum);

        lineupDiv.style.display = "none";

        // if (lineupDiv.style.display === "none") {
        //     lineupDiv.style.display = "block";
        //   } else {
        //     lineupDiv.style.display = "none";
        //   }


        // document.querySelector(`#${teamName.replace(/\s+/g, '').replace('.','')}` + gameNum).style.display = 'none';
        alreadyAdded.push(teamName);
    });
}

function showUpdatedLineups() {
    // console.log('showing');
    // console.log(this.lineupsWeHave);
    var alreadyAdded = [];
    lineupsWeHave.forEach(teamName => {

        var gameNum = 1;
        if(alreadyAdded.includes(teamName)){
            gameNum = 2;
        }

        var lineupDiv = document.querySelector(`#${teamName.replace(/\s+/g, '').replace('.','')}` + gameNum);

        lineupDiv.style.display = "block";

        // if (lineupDiv.style.display === "none") {
        //     lineupDiv.style.display = "block";
        //   } else {
        //     lineupDiv.style.display = "none";
        //   }


        // document.querySelector(`#${teamName.replace(/\s+/g, '').replace('.','')}` + gameNum).style.display = 'none';
        alreadyAdded.push(teamName);
    });
}


function myFunction() {
    console.log("Hello World!");
}

function startTimer(){
    // setInterval(getLineups, 5000);
    this.showMessage('Pizza');
}

function showMessage(message) {
    console.log('show messgae');
    if (!("Notification" in window)) {
        console.log('a');
      // Code to run if notifications are not
      // supported by the visitor's browser
    } else {
      if (Notification.permission === "granted") {
        console.log('B');
        var notification = new Notification(message);
      } else if (Notification.permission !== "denied") {
        console.log('C');
        console.log(Notification.permission);
        Notification.requestPermission().then(function (permission) {
          if (permission === "granted") {
            console.log('d');
            var notification = new Notification(message);
          }
    });
      }
    }
  }

  // showMessage("This is an important message.");
