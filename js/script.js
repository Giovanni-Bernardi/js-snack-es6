//EXERCISE1
function exercise1() {
// Creare un array di oggetti: ogni oggetto descriverà 
// una bike da corsa con le seguenti proprietà: name e weight. 
// Stampare a schermo la bici con peso minore.

    const bikes = [
        {
            'name': 'bike1',
            'weight': 5
        },
        {
            'name': 'bike2',
            'weight': 7
        },
        {
            'name': 'bike3',
            'weight': 2.5
        },
    ];
    let lightestBike = {
        'name': '',
        'weight': Number.MAX_SAFE_INTEGER
    };
    for (let i=0;i<bikes.length;i++) {
        const bike = bikes[i]; 
        const { weight } = bike;
        if (weight < lightestBike.weight) { 

            lightestBike = bike; 
        }
    }
    console.log(lightestBike); //EXPECTED LOG:
                               // {name: "bike3", weight: 2.5}
                               // 'name': 'bike3',
                               // 'weight': 2.5
  }

//--------------------------------------------------------------//

//ESERCIZIO2
function exercise2() {
    // Creare un array di oggetti di squadre di calcio. 
    // Ogni squadra avrà diverse proprietà: 
    // nome, punti fatti, falli subiti.
    // Nome sarà l'unica proprietà da compilare, 
    // le altre saranno tutte settate a 0.

    let teams = [
        {
            'name': 'Lucchese',
            'score': 0,
            'fouls': 0
        },
        {
            'name': 'Civitavecchia',
            'score': 0,
            'fouls': 0
        },
        {
            'name': 'Pistoiese',
            'score': 0,
            'fouls': 0
        },
        {
            'name': 'TeamOlesto',
            'score': 0,
            'fouls': 0
        }
    ];                      
    console.log(teams);     //EXPECTED LOG
                            //0: {name: "Lucchese", score: 0, fouls: 0}
                            //1: {name: "Civitavecchia", score: 0, fouls: 0}
                            //2: {name: "Pistoiese", score: 0, fouls: 0}
                            //3: {name: "TeamOlesto", score: 0, fouls: 0}
}

//FUNCTIONS INIT
function init() {
    //exercise1();
    exercise2()
}

// JQUERY
$(document).ready(init);