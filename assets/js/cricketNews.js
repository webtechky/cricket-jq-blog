$('h1').css({
    textAlign: 'center',
    fontSize: '30px',
    fontWeight: '800',
    margin: '20px 0'
  });
  
  $('.news_main').css({
    textAlign: 'center',
    fontSize: '20px',
    fontWeight: '300'
  });
  
  $(document).ready(function () {
    $.ajax({
      url: 'http://localhost:3000/cricketFeeds',
      type: 'GET',
      success: function (res) {
        let htmlContent = '';
        res.forEach(element => {
          htmlContent += `
            <div class="news_Items">
              <h2>${element.title}</h2>
              <h5>${element.description}</h5>
              <p>${element.url}</p>
            </div>`;
        });
  
        $('.news_main').append(htmlContent);
  
        $('.news_Items').css({
          border: '2px solid black',
          borderRadius: '10px',
          padding: '15px 20px',
          margin: '10px 0'
        });

        $('.news_Items p').css({
           color: 'blue',
           cursor: 'pointer'
          }).on('dblclick', function () {
          window.location.href = 'https://www.bcci.tv/international';
      });

      },
      error: function () {
        $('.news_main').html('<p>Fetch Loading Error...</p>');
      }
    });
  });