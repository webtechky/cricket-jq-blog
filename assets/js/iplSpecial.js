$(document).ready(function () {
    $('h1').css({ textAlign: 'center', fontSize: '30px', fontWeight: '800', margin: '20px 0' });

    $('.hero_special')
        .prepend('<img src="../assets/images/IPL.webp" alt="IPL" class="hero_img">')
        .append('<p class="hero_para">The Indian Premier League (IPL) is the most exciting T20 league in the world, showcasing some of the finest cricket talent from India and abroad. Its fast-paced matches, thrilling finishes, and team rivalries attract millions of fans globally.</p>')
        .append('<p class="hero_para">Explore all IPL teams, their rich histories, title wins, captains, star players, and distinctive team identities. Each franchise brings its own flavor, strategies, and loyal fan base, making the IPL a festival of cricket every year.</p>')
        .css({ width: '80%', maxWidth: '600px', padding: '15px 20px', margin: '20px auto', textAlign: 'center', border: '2px solid #ddd', borderRadius: '10px', backgroundColor: '#fefefe' })
        .hide()
        .slideDown(1000);

    $('.hero_img').hover(
        function () { $(this).fadeTo(500, 0.7); },
        function () { $(this).fadeTo(500, 1); }
    ).attr('title', 'IPL Logo');

    const teams = [
        { name: 'Royal Challengers Bangalore', desc: 'Royal Challengers Bangalore (RCB) is one of the most popular IPL franchises, known for its passionate fan base and high-profile star players like Virat Kohli and AB de Villiers. While RCB has not won an IPL title yet, the team consistently produces thrilling performances, explosive batting, and unforgettable moments. Their home ground, M. Chinnaswamy Stadium, is famous for hosting high-scoring matches, creating a spectacular cricketing atmosphere.' },
        { name: 'Chennai Super Kings', desc: 'Chennai Super Kings (CSK) is one of the most successful IPL franchises, winning multiple IPL titles under the leadership of MS Dhoni. Known for consistency, tactical brilliance, and strong team culture. CSK has a massive fan following, and their home ground, MA Chidambaram Stadium in Chennai, is a fortress.' },
        { name: 'Mumbai Indians', desc: 'Mumbai Indians (MI) is the most successful IPL team, with multiple title wins and a legacy of excellence. The franchise nurtures young talent while maintaining international stars like Rohit Sharma. Home ground: Wankhede Stadium.' },
        { name: 'Delhi Capitals', desc: 'Delhi Capitals (DC) is a young and ambitious team in IPL, with balanced squad of experienced internationals and promising youngsters. Known for aggressive batting, dynamic fielding, and strategic captaincy. Home ground: Feroz Shah Kotla Stadium.' },
        { name: 'Sunrisers Hyderabad', desc: 'Sunrisers Hyderabad (SRH) is known for strong bowling attack, winning IPL 2016. Focuses on cohesive unit with dependable batsmen and formidable bowling line-up. Home ground: Rajiv Gandhi International Cricket Stadium.' },
        { name: 'Kolkata Knight Riders', desc: 'Kolkata Knight Riders (KKR) is popular and glamorous, owned by Shah Rukh Khan. Won IPL twice. Known for dynamic performances, big-hitting batsmen, match-winning all-rounders. Home ground: Eden Gardens.' },
        { name: 'Punjab Kings', desc: 'Punjab Kings (PBKS) is known for aggressive batting and potential-filled squad. Yet to secure IPL title but produces exciting cricket. Home ground: Punjab Cricket Association IS Bindra Stadium.' },
        { name: 'Gujarat Titans', desc: 'Gujarat Titans (GT) is a new franchise with balanced squad. Known for disciplined bowling attack and aggressive batting strategies. Home ground: Narendra Modi Stadium.' },
        { name: 'Lucknow Super Giants', desc: 'Lucknow Super Giants (LSG) is another debutant team, nurturing young talent while maintaining experienced core. Home ground: Bharat Ratna Shri Atal Bihari Vajpayee Ekana Cricket Stadium.' }
    ];

    const teamLogos = {
        'Royal Challengers Bangalore': 'RCB.webp',
        'Chennai Super Kings': 'CSK.webp',
        'Mumbai Indians': 'MI.webp',
        'Delhi Capitals': 'DC.webp',
        'Sunrisers Hyderabad': 'SRH.webp',
        'Kolkata Knight Riders': 'KKR.webp',
        'Punjab Kings': 'Punjab.webp',
        'Gujarat Titans': 'GT.webp',
        'Lucknow Super Giants': 'LSG.webp'
    };

    $.each(teams, function (index, team) {
        const card = $('<div class="team_card"></div>');
        card.append('<h2 class="team_name">' + team.name + '</h2>');
        if (teamLogos[team.name]) {
            card.prepend('<img src="../assets/images/' + teamLogos[team.name] + '" alt="' + team.name + ' Logo" style="width:100px; display:block; margin:10px auto;">');
        }
        card.append('<p class="team_desc">' + team.desc + '</p>');

        if (team.name === 'Mumbai Indians') card.append('<div class="team_caption">Mumbai Indians - 5-time IPL Champion (Rohit Sharma)</div>');
        if (team.name === 'Chennai Super Kings') card.append('<div class="team_caption">Chennai Super Kings - 5-time IPL Champion (MS Dhoni)</div>');
        if (team.name === 'Kolkata Knight Riders') card.append('<div class="team_caption">Kolkata Knight Riders - 3-time IPL Champion</div>');
        if (team.name === 'Royal Challengers Bangalore') card.append('<div class="team_caption">Royal Challengers Bangalore - 1-time IPL Champion</div>');
        if (team.name === 'Lucknow Super Giants') card.append('<div class="team_caption">Lucknow Super Giants - 0 IPL Titles</div>');
        if (team.name === 'Gujarat Titans') card.append('<div class="team_caption">Gujarat Titans - 1-time IPL Champion</div>');
        if (team.name === 'Punjab Kings') card.append('<div class="team_caption">Punjab Kings - 0 IPL Titles</div>');
        if (team.name === 'Delhi Capitals') card.append('<div class="team_caption">Delhi Capitals - 0 IPL Titles</div>');
        if (team.name === 'Sunrisers Hyderabad') card.append('<div class="team_caption">Sunrisers Hyderabad - 1-time IPL Champion</div>');

        card.appendTo('.hero_teams').hide().fadeIn(1000).data('team-index', index);
    });

    $('.team_name').on('click', function () { $(this).next('.team_desc').slideToggle(500); });

    $('.hero_para').hover(
        function () { $(this).css({ color: 'blue', fontWeight: '600' }); },
        function () { $(this).css({ color: 'black', fontWeight: '400' }); }
    ).on('click', function () { $(this).toggleClass('highlight'); });

    $('.team_card').first().css({ backgroundColor: '#e0f7fa' });

    $('.team_card').on('click', function () { $(this).css({ border: '2px solid #ff9800' }).siblings().css({ border: '1px solid #ccc' }); });

    $('.team_card').hover(
        function () { $(this).animate({ padding: '20px' }, 300); },
        function () { $(this).animate({ padding: '10px' }, 300); }
    );

    const clonePara = $('.hero_para').first().clone().text('IPL is loved by millions!');
    $('.hero_special').append(clonePara);

    const champions = [
        { year: 2025, team: 'Royal Challengers Bangalore' },
        { year: 2024, team: 'Kolkata Knight Riders' },
        { year: 2023, team: 'Chennai Super Kings' },
        { year: 2022, team: 'Gujarat Titans' },
        { year: 2021, team: 'Chennai Super Kings' },
        { year: 2020, team: 'Mumbai Indians' }
    ];

    $('.hero_special').append('<h3>Recent IPL Champions</h3>');
    const championList = $('<ul class="unOrderLists"></ul>');
    $.each(champions, function (index, champ) { championList.append('<li><strong>' + champ.year + '</strong>: ' + champ.team + '</li>'); });
    $('.hero_special').append(championList);

    $('.unOrderLists').css('list-style-type','none');

    const funFacts = [
        "IPL started in 2008 and has become the most-watched cricket league in the world.",
        "MS Dhoni is the only captain to win 4 IPL titles.",
        "The highest individual score in IPL is 175* by Chris Gayle."
    ];
    $('.hero_special').append('<h3>Fun IPL Facts</h3>');
    $.each(funFacts, function (index, fact) { $('.hero_special').append('<p class="hero_para">' + fact + '</p>'); });

    $('#teamSearch').on('keyup', function () {
        const value = $(this).val().toLowerCase();
        $('.team_card').filter(function () { $(this).toggle($(this).find('.team_name').text().toLowerCase().indexOf(value) > -1); });
    });
});