$('h1').css({
    textAlign: 'center',
    fontSize: '30px',
    fontWeight: '800',
    margin: '20px 0'
});

$('.hero_Categorized').css({
    display: 'flex',
    'justify-content': 'center',
    gap: '5px'
});

$('.Categorized').css({
    padding: '10px 20px',
    'border-radius': '10px',
    border: 'none',
    cursor: 'pointer',
    'background-color': '#333',
    color: '#fff',
    margin: '20px 0 0 0',
});

$('.hero-para').css({
    padding: '20px',
    width: '600px',
    maxWidth: '90%',
    margin: '40px auto',
    border: '2px solid #ddd',
    borderRadius: '12px',
    boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
    boxSizing: 'border-box',
    backgroundColor: '#f9f9f9',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '15px'
});

$('.hero-para .inter').css({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    gap: '15px'
});

$('.hero-para .inter img').css({
    borderRadius: '10px',
    maxWidth: '100%',
    height: 'auto'
});

$('.hero-para .inter p').css({
    fontSize: '16px',
    lineHeight: '1.6',
    color: 'black'
});

$('.hero-para .inter button').css({
    padding: '8px 16px',
    borderRadius: '8px',
    border: 'none',
    backgroundColor: '#007bff',
    color: '#fff',
    cursor: 'pointer',
    transition: 'background-color 0.3s'
});

$('.hero-para .inter button').hover(function () {
    $(this).css('background-color', '#0056b3');
}, function () {
    $(this).css('background-color', '#007bff');
});

$('.hero-para .inter').hide();

$('.icc').on('click', function () {
    $('.hero-para .inter').slideUp();
    $('.hero-para .inter.c1').slideDown();
});

$('.bcci').on('click', function () {
    $('.hero-para .inter').slideUp();
    $('.hero-para .inter.c2').slideDown();
});

$('.tnpl').on('click', function () {
    $('.hero-para .inter').slideUp();
    $('.hero-para .inter.c3').slideDown();
});

$('.ipl').on('click', function () {
    $('.hero-para .inter').slideUp();
    $('.hero-para .inter.c4').slideDown();
});