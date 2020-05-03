// event pada saat link di klik

$('.page-scroll').on('click', function(e) {

    //ambil isi href
    var tujuan = $(this).attr('href');
    //tangkap elemen ybs
    var elemenTujuan = $(tujuan);

    //pindahkan scroll

    $('html,body').animate({
        scrollTop: elemenTujuan.offset().top - 50
    }, 1250, 'swing');

    e.preventDefault();

});

$('.nav-item').on('click', function() {
    $('.nav-item').removeClass('active');
    $(this).addClass('active');

});

$(document).ready(function() {

    // Scroll spy
    $('body').scrollspy({
        target: "#main-nav",
        offset: 60
    });

});


// paralax

// about
$(window).on('load', function() {

    $('.pJumbo').addClass('pMuncul');
    $('.aJumbo').addClass('aMuncul');

    $('.pProfil').addClass('pMuncul');
    $('.aProfil').addClass('aMuncul');
});

$(window).scroll(function() {
    var wScroll = $(this).scrollTop();

    // Jumbotron
    $('.jumbotron a').css({
        'transform': 'translate(0px, ' + wScroll + '%)'
    });
    $('.jumbotron p').css({
        'transform': 'translate(0px, ' + wScroll / 2 + '%)'
    });

    // Profil
    $('.profil h1').css({
        'transform': 'translate(0px, ' + wScroll / 4 + '%)'
    });

    $('.profil p').css({
        'transform': 'translate(0px, ' + wScroll / 2 + '%)'
    });

    $('.profil a').css({
        'transform': 'translate(0px, ' + wScroll / 1.2 + '%)'
    });



    // Client

    if (wScroll > $('.client').offset().top - 400) {
        $('.client .img-client').each(function(i) {
            setTimeout(function() {
                $('.client .img-client').eq(i).addClass('muncul');
            }, 300 * (i + 1));
        });

    }


    //Who We Are
    //else if( wScroll > $('.about').offset().top - 600 ) {
    //$('.pAbout').addClass('pMuncul');
    //} 




});