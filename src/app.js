const tablet = $('<div></div>', {class: 'tablet'});
$('body').append(tablet);


const tabletInner = $('<div></div', {class: 'tabletInner'});
$('body').append(tabletInner);
$(tabletInner).html('> Good morning, Doctor, and welcome to Saint Sirius Galactic Hospital. This is today\'s first patient, Golfox 5.1' );


const init = $(document).ready(function() {
    $('.tabletInner').typewrite({
        'callback': function(){
            $('.tabletInner').css('color','red');
        },
        'delay': 40
    });
});


