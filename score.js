var matches = [
    {
        date:"7/2/2020",
        time:"18:00 JST",
        league:"GKR Leagues",
        score:"2-1",
        oLogo:"https://lh3.googleusercontent.com/d/1CKXchiEUUe_8_HuRbZ--rM92v3e_hcl5",
        oName:"Manado Reborn"
    },
    {
        date:"7/7/2020",
        time:"19:00 JST",
        league:"GKR Leagues",
        score:"3-0",
        oLogo:"https://lh3.googleusercontent.com/d/1bVkusUecsDbRmAxqaEM6RasBo406vGtm",
        oName:"KIX JP"
    },
    {
        date:"7/9/2020",
        time:"19:00 JST",
        league:"GKR Leagues",
        score:"3-0",
        oLogo:"https://lh3.googleusercontent.com/d/1gR-aQTYnNaJnrbeA6EUSqgDujPbZhI2S",
        oName:"Team TyrNE"
    },
    {
        date:"7/14/2020",
        time:"20:00 JST",
        league:"GKR Leagues",
        score:"2 - 1",
        oLogo:"https://lh3.googleusercontent.com/d/1BMA0rGYuzdnlm80iOQGzNak83Er3B3O2",
        oName:"WESS"
    },
    {
        date:"7/16/2020",
        time:"20:00 JST",
        league:"GKR Leagues",
        score:"1 - 2",
        oLogo:"https://lh3.googleusercontent.com/d/1oo2hpjF-iELKulmgFTf5OxiF_mtBOYkO",
        oName:"Team CMC"
    },
    {
        date:"7/20/2020",
        time:"21:30 JST",
        league:"Asia City League",
        score:" - ",
        oLogo:"https://cdn.royaleapi.com/static/img/team/logo/islamabad-allstar.png?t=464034903c4ad4176910eccf1ed48efee4e9ad1d",
        oName:"Islamabad All Star"
    },
    {
        date:"7/21/2020",
        time:"20:00 JST",
        league:"Asia City League",
        score:" - ",
        oLogo:"https://cdn.royaleapi.com/static/img/team/logo/seoul-celestials.png?t=32193704acb2d1a991f1ccde231d4cb138f368ed",
        oName:"Seoul Celestials"
    },
    {
        date:"7/21/2020",
        time:"21:00 JST",
        league:"GKR Leagues",
        score:" - ",
        oLogo:"https://lh3.googleusercontent.com/d/11jqLJyrxOvwRVBfDE6yBqlCx9sj-csFu",
        oName:"Stalwart Esports"
    },
    {
        date:"7/23/2020",
        time:"21:00 JST",
        league:"GKR Leagues",
        score:" - ",
        oLogo:"https://lh3.googleusercontent.com/d/19OuJJv2fzvQIofKuplog7eGrbzVom40M",
        oName:"Team STK"
    },
    {
        date:"7/27/2020",
        time:"20:45 JST",
        league:"Asia City League",
        score:" - ",
        oLogo:"https://cdn.royaleapi.com/static/img/team/logo/hongkong-noobies.png?t=54e61d970babe79edf4db47bfb7f8926301de0f5",
        oName:"Hong Kong Noobies"
    },
    {
        date:"7/28/2020",
        time:"22:00 JST",
        league:"GKR Leagues",
        score:" - ",
        oLogo:"https://cdn.royaleapi.com/static/img/team/logo/team-barbie.png?t=0a0eb52a3f84463aa68695a269815f143fa00cd6",
        oName:"Team Barbie"
    },
    {
        date:"7/30/2020",
        time:"22:00 JST",
        league:"GKR Leagues",
        score:" - ",
        oLogo:"https://lh3.googleusercontent.com/d/13buDXG5y1lQWs4B2x7VOT3AO7jnZAKGJ",
        oName:"ERN APAC"
    },
]

for(i = 0; i < matches.length; i++){
    $('.scoreboardList').append(
        '<div class="row">' +
            '<div class="list-date col-12 col-sm-2"><h5>'+matches[i].date+'</h5><h6>'+matches[i].time+'</h6></div>'+
            '<div class="list-RSname col-12 col-sm-3"><h6>Rising Sun Esports</h6></div>'+
            '<div class="list-RSlogo col-12 col-sm-1"><img class="teamLogo" src="https://lh3.googleusercontent.com/d/1jrfEuVtspWxIEt5vWFpmNSRMj_HM_kD0" alt="Rising Sun Esports"></div>'+
            '<div class="list-league col-12 col-sm-2"><h6>'+matches[i].league+'</h6><h3>'+matches[i].score+'</h3></div>'+
            '<div class="list-Ologo col-12 col-sm-1"><img class="teamLogo" src=" '+matches[i].oLogo + '" alt=" '+matches[i].oName+'"></a></div>'+
            '<div class="list-Oname col-12 col-sm-3"><h6>'+matches[i].oName+'</h6></div>'+
        '</div>'+
        '<hr>')
}