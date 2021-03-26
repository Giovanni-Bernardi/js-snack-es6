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

//EXERCISE2

function getRandomValue(min, max) {
    const localMin = min;
    const localMax = max - min + 1;
    return Math.floor(Math.random() * localMax) + localMin;
}

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
    


    // Generare numeri random al posto degli 0 nelle proprietà:
    // punti fatti e falli subiti    
    for (let i=0;i<teams.length;i++) {
        const team = teams[i];
        
        team['score'] = getRandomValue(0, 50);
        team['fouls'] = getRandomValue(0, 50);
    }

    // Usando la destrutturazione creiamo un nuovo array 
    // i cui elementi contengono solo nomi e falli subiti 
    // e stampiamo tutto in console.
    const resArr = [];
    for (let i=0;i<teams.length;i++) {

        const team = teams[i];

        let { score, fouls } = team;
        let resObj = { score, fouls };

        resArr.push(resObj);
    }
    console.log(teams, resArr);
}



//FUNCTIONS INIT
function init() {
    //exercise1();
    exercise2();
}

// JQUERY
$(document).ready(init);