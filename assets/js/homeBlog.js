$('.hero_main p').addClass('hero_heading').css({
    'text-align': 'center',
    'font-size': '30px',
    'font-weight': ' 800',
    margin: '20px 0',
})

$('.hero_right').css({
    display: 'flex',
    gap: '20px',
    margin: '10px 0',
})

$('.hero_right img').css({
    'max-width': "100%",
    height: "auto",
    'border-radius': '5%',
});

$('.hero_left').css({
    'font-size': '25px',
    'font-weight': '400',
    'min-width': '250px',
    flex: 1,
}).append('The 19th century saw the game spreading globally, with countries like Australia, India, South Africa, and the West Indies adopting it.').append('<br/>')
    .append('<button>Read More...</button>');

$('.hero_left button').addClass('bth_Clicked').on('click', function () {
    window.location.href = 'https://en.wikipedia.org/wiki/List_of_international_cricket_grounds_in_India'
}).css({
    padding: '10px 20px',
    'border-radius': '10px',
    border: 'none',
    cursor: 'pointer',
    'background-color': '#333',
    color: '#fff',
    margin: '20px 0 0 0',
})

const cricketTimeline = [
    '<li><b>13th Century – </b>Shepherds in southern England play early versions of cricket using sticks and balls.</li>',
    '<li><b>1597–1598 – </b>First definite reference to adult cricket appears in Surrey, England, in a legal document.</li>',
    '<li><b>17th Century – </b>Cricket becomes popular in villages and towns; competitive matches and betting on games begin.</li>',
    '<li><b>1744 – </b>The first official Laws of Cricket are written, standardizing rules like wickets, overs, and scoring.</li>',
    '<li><b>1787 – </b>Marylebone Cricket Club (MCC) is founded in London and becomes the guardian of cricket rules worldwide.</li>',
    '<li><b>1877 – </b>The first official Test match takes place between England and Australia in Melbourne.</li>',
    '<li><b>20th Century – </b>Cricket spreads globally, with countries like India, West Indies, Pakistan, and South Africa becoming strong cricketing nations.</li>',
    '<li><b>1971 – </b>Introduction of One Day Internationals (ODIs), a faster-paced format of the game.</li>',
    '<li><b>2003 – </b>Twenty20 (T20) format gains popularity, revolutionizing cricket with shorter, high-energy matches.</li>'
];

$('.hero_main .unOrder_lists').append(cricketTimeline).css({
    color: "#fff",
    background:'#333',
    border: "2px solid #fff",
    borderRadius: "10px",
    padding: "15px 20px",
    margin: "10px 0",
    textAlign: "center",
    fontSize: "18px",
    lineHeight: 2.5,
    'list-style-type':'none',
});