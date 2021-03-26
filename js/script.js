//EXERCISE1
function es1() {
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
                            //    {name: "bike3", weight: 2.5}
                            //    'name': 'bike3',
                            //    'weight': 2.5
  }

  function init() {
    es1();
}


// JQUERY
$(document).ready(init);