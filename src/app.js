let golfoxHealth = 50;
const golfoxMeter = $('.healthMeter');

const tablet = $('<div></div>', {class: 'tablet'});
$('body').append(tablet);

const tabletInner = $('<div></div', {class: 'tabletInner'});


const p1 = $('<p></p>', {class: 'p1'});
const p2 = $('<p></p>', {class: 'p2'});
const p3 = $('<p></p>', {class: 'p3'});

const treatments = document.createElement('h2');
const instruments = document.createElement('h2');

const treatment1 = document.createElement('h2');
const treatment2 = document.createElement('h2');
const treatment3 = document.createElement('h2');
const tBack = document.createElement('h2');

const instrument1 = document.createElement('h2');
const instrument2 = document.createElement('h2');
const iBack = document.createElement('h2');

const ghostParticle = document.createElement('div');
const darkMatter = document.createElement('div');
const bioComputer = document.createElement('div');

const laser = document.createElement('div');
const picobots = document.createElement('div');

const alienTarget = $('.alien');
const laserTarget = $('.laserTarget');

const counter1 = document.createElement('div');
const counter2 = document.createElement('div');
const counter3 = document.createElement('div');
const counter4 = document.createElement('div');
const counter5 = document.createElement('div');

const winMessage = document.createElement('div');
const loseMessage = document.createElement('div');

const playAgain = document.createElement('div');
const lossPlayAgain = document.createElement('div');

const redoFunction = function() {
  window.location.reload();
}

const winInit = function() {
  $(tablet).append(winMessage);
  $(winMessage).addClass('gameover');
  $(winMessage).html('You did it! You saved Golfox 5.1! Congratulations, you win!');
  $(winMessage).css('display', 'none');
  $(winMessage).append(playAgain);
  $(playAgain).addClass('playagain');
  $(playAgain).html('Play Again');
  $(playAgain).on('click', redoFunction);
}

winInit();

const loseInit = function() {
  $(tablet).append(loseMessage);
  $(loseMessage).addClass('gameover');
  $(loseMessage).html('Oh no! Golfox 5.1 died in your care. Guess you\'re not as good as they say. Sorry, you lose.');
  $(loseMessage).css('display', 'none');
  $(loseMessage).append(lossPlayAgain);
  $(lossPlayAgain).addClass('playagain');
  $(lossPlayAgain).html('Play Again');
  $(lossPlayAgain).on('click', redoFunction);
}

loseInit();

const counter1Init = function() {
  $(tablet).append(counter1);
  $(counter1).addClass('countersAll');
  $(counter1).html('Oh no! Golfox 5.1\'s crystal matrix lost alignment!');
  $(counter1).css('display', 'none');
}

counter1Init();

const counter2Init = function() {
  $(tablet).append(counter2);
  $(counter2).addClass('countersAll');
  $(counter2).html('Golfox 5.1\'s adaptronic neuromodule has overloaded!');
  $(counter2).css('display', 'none');
}

counter2Init();

const counter3Init = function() {
  $(tablet).append(counter3);
  $(counter3).addClass('countersAll');
  $(counter3).html('Oops! Your treatment compromised the alien\'s plasma replication globules!'
);
  $(counter3).css('display', 'none');
}

counter3Init();

const counter4Init = function() {
  $(tablet).append(counter4);
  $(counter4).addClass('countersAll');
  $(counter4).html('Shoot! Now the mucosal macro-tube is perforated!'
);
  $(counter4).css('display', 'none');
}

counter4Init();

const counter5Init = function() {
  $(tablet).append(counter5);
  $(counter5).addClass('countersAll');
  $(counter5).html('Alert! Golfox 5.1\'s digital meta-skeleton has sustained critical damage.'
);
  $(counter5).css('display', 'none');
}

counter5Init();

const ghostParticleInit = function() {
  $(tabletInner).append(ghostParticle);
  $(ghostParticle).addClass('gpi');
  $(ghostParticle).html('You used a Ghost Particle Infusion! It\'s not very effective!');
  $(ghostParticle).css('display', 'none');
}

ghostParticleInit();

const darkMatterInit = function() {
  $(tabletInner).append(darkMatter);
  $(darkMatter).addClass('darkmatter');
  $(darkMatter).html('You used a Dark Matter Retroversion! It\'s very effective!');
  $(darkMatter).css('display', 'none');
}

darkMatterInit();

const bioComputerInit = function() {
  $(tabletInner).append(bioComputer);
  $(bioComputer).addClass('biocomp');
  $(bioComputer).html('You asked the Biogenic Computer! It says to try a Dark Matter Retroversion.');
  $(bioComputer).css('display', 'none');
}

bioComputerInit();

const laserInit = function() {
  $(tabletInner).append(laser);
  $(laser).addClass('laser');
  $(laser).html('Choose a spot on Golfox 5.1 to target with the Laser!')
  $(laser).css('display', 'none');
}

laserInit();

const picobotsInit = function() {
  $(tabletInner).append(picobots);
  $(picobots).addClass('picobots');
  $(picobots).html('You increased your equipment\'s efficiency with Picobots! Your next treatment will be doubly effective!');
  $(picobots).css('display', 'none');
}

picobotsInit();

const tBackInit = function() {
  $(tBack).html('Back');
  $(tBack).css('display', 'none');
}

const iBackInit = function() {
  $(iBack).html('Back');
  $(iBack).css('display', 'none');
}

tBackInit();
iBackInit();


$('body').append(tabletInner);

$(tabletInner).append(p1, p2, p3);

$(p1).html('> Good morning, Doctor, and welcome to Saint Sirius Galactic Hospital. This is today\'s first patient, Golfox 5.1');
$(p2).html('> Golfox 5.1 was admitted at 2100 hours sol for plasma matrix pain. After a quantum foam scan, it was determined that Golfox 5.1 is suffering from acute Dark Matter Axionic Recursion');
$(p3).html('> You\'re the only doctor in the sector who has any experience with Dark Matter disorders. Can you use the treatments and equipment available to save their life?'  );

const init = function(){
  $(document).ready(function() {
    $('.p1').typewrite({
        'callback': function(){
            $('.p1').css('color','red');
        },
        'delay': 10
    });
  });
};

const init2 = setTimeout(function(){
  $(document).ready(function() {
    $('.p2').typewrite({
        'callback': function(){
            $('.p2').css('color','red');
        },
        'delay': 10
    });
  });
}, 0); //7000

const init3 = setTimeout(function(){
  $(document).ready(function() {
    $('.p3').typewrite({
        'callback': function(){
            $('.p3').css('color','red');
        },
        'delay': 10
    });
  });
}, 0); //18500

init();


const playButton = setTimeout(function(){
  const theButton = document.createElement('button');
  $(theButton).html('I\'ll do my best');
  $(theButton).attr('id', 'doMyBest');
  $(tabletInner).append(theButton);
  theButton.addEventListener('click', function() {
  $(p1).remove();
  $(p2).remove();
  $(p3).remove();
  $(theButton).remove();
  treatmentOption();
}
)
}, 0); //28000




const treatmentOption = function() {
  $(tabletInner).append(treatments)
  $(tabletInner).append(instruments)
  $(treatments).css('display', 'block')
  $(instruments).css('display', 'block')
}

const listTreatments = function() {
  $(treatments).css('display', 'none');
  $(instruments).css('display', 'none');
  $(tabletInner).append(treatment1, treatment2, treatment3, tBack);
  $(treatment1).css('display', 'block');
  $(treatment2).css('display', 'block');
  $(treatment3).css('display', 'block');
  $(tBack).css('display', 'block');
}

const listInstruments = function() {
  $(instruments).css('display', 'none');
  $(treatments).css('display', 'none');
  $(tabletInner).append(instrument1, instrument2, iBack);
  $(instrument1).css('display', 'block');
  $(instrument2).css('display', 'block');
  $(iBack).css('display', 'block');
}


const treatmentInit = function(){
  $(treatments).html('Use a Treatment');
  $(treatments).on('click', listTreatments);
  $(instruments).html('Use an Instrument');
  $(instruments).on('click', listInstruments);
};

treatmentInit();

const clearReset = function resetFunction() {
  setTimeout(function() {
  $(treatment1).css('display', 'none');
  $(treatment2).css('display', 'none');
  $(treatment3).css('display', 'none');
  $(instrument1).css('display', 'none');
  $(instrument2).css('display', 'none');
  $(ghostParticle).css('display', 'none');
  $(darkMatter).css('display', 'none');
  $(bioComputer).css('display', 'none');
  $(laser).css('display', 'none');
  $(picobots).css('display', 'none');
  $(laser).html('Choose a spot on Golfox 5.1 to target with the Laser!');
  $(alienTarget).off('click', noLaserWorks);
  $(tBack).css('display', 'none');
  $(iBack).css('display', 'none');
  $(tabletInner).css('display', 'block');
  $(counter1).css('display', 'none');
  $(counter2).css('display', 'none');
  $(counter3).css('display', 'none');
  $(counter4).css('display', 'none');
  $(counter5).css('display', 'none');
  treatmentOption();
}, 1000);
};

const immediateReset = function quickReset() {
  $(treatment1).css('display', 'none');
  $(treatment2).css('display', 'none');
  $(treatment3).css('display', 'none');
  $(instrument1).css('display', 'none');
  $(instrument2).css('display', 'none');
  $(ghostParticle).css('display', 'none');
  $(darkMatter).css('display', 'none');
  $(bioComputer).css('display', 'none');
  $(laser).css('display', 'none');
  $(picobots).css('display', 'none');
  $(laser).html('Choose a spot on Golfox 5.1 to target with the Laser!');

  $(alienTarget).off('click', noLaserWorks);
  $(tBack).css('display', 'none');
  $(iBack).css('display', 'none');
  $(tabletInner).css('display', 'block');
  $(counter1).css('display', 'none');
  treatmentOption();
};



const didYouWin = function winCheck() {
  setTimeout(function() {
  if (golfoxHealth >= 100) {
    $(tabletInner).css('display', 'none');
    $(winMessage).css('display', 'block');
  }
  else {
    counterChance();
  }
}, 1000)
}

const didYouLose = function loseCheck() {
  setTimeout(function() {
  if (golfoxHealth <= 0) {
    $(tabletInner).css('display', 'none');
    const counters = $('.countersAll');
    counters.css('display', 'none');
    $(loseMessage).css('display', 'block');
  }
  else {
    clearReset();
  }
}, 1000)
}




const noLaserWorks = function() {
  $(laser).html('It isn\'t effective!');
  $(instrument1).css('display', 'none');
  $(instrument2).css('display', 'none');
  $(tBack).css('display', 'none');
  counterChance();
}

let healthIncrement = 10;

const useGhostParticle = function() {
  $(ghostParticle).css('display', 'block');
  $(treatment1).css('display', 'none');
  $(treatment2).css('display', 'none');
  $(treatment3).css('display', 'none');
  $(tBack).css('display', 'none');
  golfoxHealth += healthIncrement;
  healthIncrement = 10;
  golfoxHealthNugs();
  didYouWin();
}
const useDarkMatter = function() {
  $(darkMatter).css('display', 'block');
  $(treatment1).css('display', 'none');
  $(treatment2).css('display', 'none');
  $(treatment3).css('display', 'none');
  $(tBack).css('display', 'none');
  golfoxHealth += healthIncrement*3;
  healthIncrement = 10;
  golfoxHealthNugs();
  didYouWin();
}
const useBiogenicComp = function() {
  $(bioComputer).css('display', 'block');
  $(treatment1).css('display', 'none');
  $(treatment2).css('display', 'none');
  $(treatment3).css('display', 'none');
  $(tBack).css('display', 'none');
  didYouWin();
}
const useLaser = function() {
  $(laser).css('display', 'block');
  $(instrument1).css('display', 'none');
  $(instrument2).css('display', 'none');
  $(iBack).css('display', 'none');
  $(laserTarget).click(function(event) {
    event.stopPropagation();
    $(laser).html('It\'s very effective!');
    golfoxHealth += healthIncrement*6;
    golfoxHealthNugs();
    didYouWin();
  });
  $(alienTarget).on('click', noLaserWorks);
}

const usePicobots = function(){
  $(instrument1).css('display', 'none');
  $(instrument2).css('display', 'none');
  $(iBack).css('display', 'none');
  $(picobots).css('display', 'block');
  healthIncrement = 20;
  counterChance();
}

const backFunction = function() {
  immediateReset();
}



const listInit = function() {
  $(treatment1).html('Ghost Particle Infusion');
  $(treatment1).on('click', useGhostParticle);
  $(treatment2).html('Dark Matter Retroversion');
  $(treatment2).on('click', useDarkMatter);
  $(treatment3).html('Ask Biogenic Computer');
  $(treatment3).on('click', useBiogenicComp);
  $(instrument1).html('UltraCold Mirror Laser');
  $(instrument1).on('click', useLaser);
  $(instrument2).html('Picobot Catalysts')
  $(instrument2).on('click', usePicobots);
  $(tBack).on('click', backFunction);
  $(iBack).on('click', backFunction);
}

listInit();



//////relaxxxxx


///nugs



const golfoxHealthNugs = function() {
  switch(golfoxHealth) {
    case (-30):
        $('.healthNug').css('background-color', 'white');
        $(golfoxMeter).html('0/10');
        break;
    case (-20):
        $('.healthNug').css('background-color', 'white');
        $(golfoxMeter).html('0/10');
        break;
    case (-10):
        $('.healthNug').css('background-color', 'white');
        $(golfoxMeter).html('0/10');
        break;
    case 0:
        $('.healthNug').css('background-color', 'white');
        $(golfoxMeter).html('0/10');
        break;
    case 10:
        $('.healthNug').css('background-color', 'white');
        $('#nug1').css('background-color', 'red');
        $(golfoxMeter).html('1/10');
        break;
    case 20:
        $('.healthNug').css('background-color', 'white');
        $('#nug1').css('background-color', 'red');
        $('#nug2').css('background-color', 'red');
        $(golfoxMeter).html('2/10');
        break;
    case 30:
        $('.healthNug').css('background-color', 'white');
        $('#nug1').css('background-color', 'red');
        $('#nug2').css('background-color', 'red');
        $('#nug3').css('background-color', 'red');
        $(golfoxMeter).html('3/10');
        break;
    case 40:
        $('.healthNug').css('background-color', 'white');
        $('#nug1').css('background-color', 'yellow');
        $('#nug2').css('background-color', 'yellow');
        $('#nug3').css('background-color', 'yellow');
        $('#nug4').css('background-color', 'yellow');
        $(golfoxMeter).html('4/10');
        break;
    case 50:
        $('.healthNug').css('background-color', 'white');
        $('#nug1').css('background-color', 'yellow');
        $('#nug2').css('background-color', 'yellow');
        $('#nug3').css('background-color', 'yellow');
        $('#nug4').css('background-color', 'yellow');
        $('#nug5').css('background-color', 'yellow');
        $(golfoxMeter).html('5/10');
        break;
    case 60:
        $('.healthNug').css('background-color', 'white');
        $('#nug1').css('background-color', 'yellow');
        $('#nug2').css('background-color', 'yellow');
        $('#nug3').css('background-color', 'yellow');
        $('#nug4').css('background-color', 'yellow');
        $('#nug5').css('background-color', 'yellow');
        $('#nug6').css('background-color', 'yellow');
        $(golfoxMeter).html('6/10');
        break;
    case 70:
        $('.healthNug').css('background-color', 'white');
        $('#nug1').css('background-color', 'green');
        $('#nug2').css('background-color', 'green');
        $('#nug3').css('background-color', 'green');
        $('#nug4').css('background-color', 'green');
        $('#nug5').css('background-color', 'green');
        $('#nug6').css('background-color', 'green');
        $('#nug7').css('background-color', 'green');
        $(golfoxMeter).html('7/10');
        break;
    case 80:
        $('.healthNug').css('background-color', 'white');
        $('#nug1').css('background-color', 'green');
        $('#nug2').css('background-color', 'green');
        $('#nug3').css('background-color', 'green');
        $('#nug4').css('background-color', 'green');
        $('#nug5').css('background-color', 'green');
        $('#nug6').css('background-color', 'green');
        $('#nug7').css('background-color', 'green');
        $('#nug8').css('background-color', 'green');
        $(golfoxMeter).html('8/10');
        break;
    case 90:
        $('.healthNug').css('background-color', 'white');
        $('#nug1').css('background-color', 'green');
        $('#nug2').css('background-color', 'green');
        $('#nug3').css('background-color', 'green');
        $('#nug4').css('background-color', 'green');
        $('#nug5').css('background-color', 'green');
        $('#nug6').css('background-color', 'green');
        $('#nug7').css('background-color', 'green');
        $('#nug8').css('background-color', 'green');
        $('#nug9').css('background-color', 'green');
        $(golfoxMeter).html('9/10');
        break;
    case 100:
        $('.healthNug').css('background-color', 'green');
        $(golfoxMeter).html('10/10');
        break;
    case 110:
        $('.healthNug').css('background-color', 'green');
        $(golfoxMeter).html('10/10');
        break;
    case 120:
        $('.healthNug').css('background-color', 'green');
        $(golfoxMeter).html('10/10');
        break;
    case 130:
        $('.healthNug').css('background-color', 'green');
        $(golfoxMeter).html('10/10');
        break;
    case 140:
        $('.healthNug').css('background-color', 'green');
        $(golfoxMeter).html('10/10');
        break;
    case 150:
        $('.healthNug').css('background-color', 'green');
        $(golfoxMeter).html('10/10');
        break;
}
}

golfoxHealthNugs();


const chance1 = function() {
  $(tabletInner).css('display', 'none');
  $(counter1).css('display', 'block');
  golfoxHealth -= healthIncrement;
  golfoxHealthNugs();
  didYouLose();
}

const chance2 = function() {
  $(tabletInner).css('display', 'none');
  $(counter2).css('display', 'block');
  golfoxHealth -= 40;
  golfoxHealthNugs();
  didYouLose();
}

const chance3 = function() {
  $(tabletInner).css('display', 'none');
  $(counter3).css('display', 'block');
  golfoxHealth -= 20;
  golfoxHealthNugs();
  didYouLose();
}

const chance4 = function() {
  $(tabletInner).css('display', 'none');
  $(counter4).css('display', 'block');
  golfoxHealth -= 30;
  golfoxHealthNugs();
  didYouLose();
}

const chance5 = function() {
  $(tabletInner).css('display', 'none');
  $(counter5).css('display', 'block');
  golfoxHealth -= 70;
  golfoxHealthNugs();
  didYouLose();
}

const counterAttacks = [chance1, chance2, chance3, chance4, chance5];

const counterChance = function counterFunction() {
  setTimeout(function() {
  counterAttacks[Math.floor(Math.random()*5)]();
}, 1000);
}









