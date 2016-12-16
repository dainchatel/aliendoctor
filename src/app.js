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

const instrument1 = document.createElement('h2');
const instrument2 = document.createElement('h2');

const ghostParticle = document.createElement('div');
const darkMatter = document.createElement('div');
const bioComputer = document.createElement('div');

const ghostParticleInit = function() {
  $(tabletInner).append(ghostParticle);
  $(ghostParticle).addClass('gpi');
  $(ghostParticle).html('You used a Ghost Particle Injection!')
  $(ghostParticle).css('display', 'none');
}

ghostParticleInit();

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
        'delay': 10 //60
    });
  });
};

const init2 = setTimeout(function(){
  $(document).ready(function() {
    $('.p2').typewrite({
        'callback': function(){
            $('.p2').css('color','red');
        },
        'delay': 10 //60
    });
  });
}, 0); //7000

const init3 = setTimeout(function(){
  $(document).ready(function() {
    $('.p3').typewrite({
        'callback': function(){
            $('.p3').css('color','red');
        },
        'delay': 10 //60
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
}, 0); //29000


const treatmentOption = function() {
  $(tabletInner).append(treatments)
  $(tabletInner).append(instruments)
  $(treatments).css('display', 'block')
  $(treatments).css('display', 'block')
}

const listTreatments = function() {
  $(treatments).css('display', 'none');
  $(instruments).css('display', 'none');
  $(tabletInner).append(treatment1, treatment2, treatment3);
}

const listInstruments = function() {
  $(instruments).css('display', 'none');
  $(treatments).css('display', 'none');
  $(tabletInner).append(instrument1, instrument2);
}


const treatmentInit = function(){
  $(treatments).html('Use a Treatment');
  $(treatments).on('click', listTreatments);
  $(instruments).html('Use an Instrument');
  $(instruments).on('click', listInstruments);
};

treatmentInit();


const useGhostParticle = function() {
  $(ghostParticle)
}

// const useDarkMatter = function() {

// }

// const useBiogenicComp = function() {

// }

// const useLaser = function() {

// }

// const usePicobots = function(){

// }





const listInit = function() {
  $(treatment1).html('Ghost Particle Infusion');
  $(treatment1).on('click', useGhostParticle);
  $(treatment2).html('Dark Matter Retroversion');
  //$(treatment2).on('click', useDarkMatter);
  $(treatment3).html('Ask Biogenic Computer');
  //$(treatment3).on('click', useBiogenicComp);
  $(instrument1).html('UltraCold Mirror Laser');
  //$(instrument1).on('click', useLaser);
  $(instrument2).html('Picobot Catalysts')
  //$(instrument2).on('click', usePicobots);
}

listInit();
























