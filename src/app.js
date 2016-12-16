const tablet = $('<div></div>', {class: 'tablet'});
$('body').append(tablet);

const tabletInner = $('<div></div', {class: 'tabletInner'});

const p1 = $('<p></p>', {class: 'p1'});
const p2 = $('<p></p>', {class: 'p2'});
const p3 = $('<p></p>', {class: 'p3'});


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

const wipeSlateClean = function() {
  $(tabletInner).remove();

  const treatmentOption = document.createElement('h2');
  $(treatmentOption).html('Use a Treatment');
  const instrumentOption = document.createElement('h2');
  $(instrumentOption).html('Use an Instrument');

}

const playButton = setTimeout(function(){
  const theButton = document.createElement('button');
  $(theButton).html('I\'ll do my best');
  $(theButton).attr('id', 'doMyBest');
  $(tabletInner).append(theButton);
  theButton.addEventListener('click', wipeSlateClean)
}, 0); //29000


























