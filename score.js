var matches = [
    {
        date:"8/3/2020",
        time:"20:00 JST",
        league:"Asia City League",
        score:"1 - 2",
        oLogo:"https://cdn.royaleapi.com/static/img/team/logo/jakarta-bandits.png?t=2d9e93c62ac734ed9485cb360caeb598b5f02935",
        oName:"Jakarta Babies"
    },
    {
        date:"8/4/2020",
        time:"23:00 JST",
        league:"GKR Leagues",
        score:" - ",
        oLogo:"https://lh3.googleusercontent.com/d/1rkzypLL4a6mLRETdGl4_OrL_1fxScsvn",
        oName:"Clash2IT APAC"
    },
    {
        date:"8/6/2020",
        time:"23:00 JST",
        league:"GKR Leagues",
        score:" - ",
        oLogo:"https://lh3.googleusercontent.com/d/1PhWr4blgFoRaOeQ9EbDwDvBQCAYj7Rvi",
        oName:"ISW Team"
    },
    {
        date:"8/8/2020",
        time:"6:00 JST",
        league:"SSG Cup",
        score:" - ",
        oLogo:"http://cdn.esportsify.com/teamdignitasv2/images/logos/main-logov2.png",
        oName:"Dignitas"
    },
    {
        date:"8/8/2020",
        time:"22:00 JST",
        league:"Gem League",
        score:" - ",
        oLogo:"https://lh3.googleusercontent.com/d/1mEj9xsqoHuSoRlmdtWTKsc3hRcYbVVxF",
        oName:"EGS Phoenix"
    },
    {
        date:"8/9/2020",
        time:"6:00 JST",
        league:"SSG Cup",
        score:" - ",
        oLogo:"http://cdn.esportsify.com/teamdignitasv2/images/logos/main-logov2.png",
        oName:"Dignitas"
    },
    {
        date:"8/11/2020",
        time:"23:00 JST",
        league:"GKR Leagues",
        score:" - ",
        oLogo:"https://lh3.googleusercontent.com/d/1fgjtsMcjJUjQ6NFqJL_H3xuJKY11TA2W",
        oName:"AUN Gaming"
    },
    {
        date:"8/13/2020",
        time:"22:00 JST",
        league:"GKR Leagues",
        score:" - ",
        oLogo:"https://lh3.googleusercontent.com/d/1K1nPTYNm1a-fg-xBhtNcHunwwWV8w2_n",
        oName:"KIX Academy APAC"
    },
    {
        date:"8/18/2020",
        time:"22:00 JST",
        league:"GKR Leagues",
        score:" - ",
        oLogo:"https://lh3.googleusercontent.com/d/1LXt9Ht1Jxx2T3Q8B9y2qBgTHeSFS2t53",
        oName:"Vietnam Elite"
    },
    {
        date:"8/19/2020",
        time:"18:00 JST",
        league:"GKR Leagues",
        score:" - ",
        oLogo:"https://lh3.googleusercontent.com/d/1cP0Rnv1BNnWao8Ed0UQ6A2JW-31dXOyE",
        oName:"Team NZ"
    },
    {
        date:"8/24/2020",
        time:"19:00 JST",
        league:"GKR Leagues",
        score:" - ",
        oLogo:"https://lh3.googleusercontent.com/d/1_chvnnbAkh1n98mrqJVu1sd9TSsSWA9P",
        oName:"Team MCA"
    },
    {
        date:"8/26/2020",
        time:"20:00 JST",
        league:"GKR Leagues",
        score:" - ",
        oLogo:"https://lh3.googleusercontent.com/d/10qI4nD8KsE6EoXlq3PijVqbUy_RgUe3L",
        oName:"Gulf Slayers ESports"
    },
    {
        date:"8/31/2020",
        time:"21:00 JST",
        league:"GKR Leagues",
        score:" - ",
        oLogo:"https://lh3.googleusercontent.com/d/1g4EDbHxSDFEcd3X-m4POEviiyxW2Jw71",
        oName:"ER Esports"
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


// ================ JULY MATCHES ====================== //
// {
//     date:"7/2/2020",
//     time:"18:00 JST",
//     league:"GKR Leagues",
//     score:"2-1",
//     oLogo:"https://lh3.googleusercontent.com/d/1CKXchiEUUe_8_HuRbZ--rM92v3e_hcl5",
//     oName:"Manado Reborn"
// },
// {
//     date:"7/7/2020",
//     time:"19:00 JST",
//     league:"GKR Leagues",
//     score:"3-0",
//     oLogo:"https://lh3.googleusercontent.com/d/1bVkusUecsDbRmAxqaEM6RasBo406vGtm",
//     oName:"KIX JP"
// },
// {
//     date:"7/9/2020",
//     time:"19:00 JST",
//     league:"GKR Leagues",
//     score:"3-0",
//     oLogo:"https://lh3.googleusercontent.com/d/1gR-aQTYnNaJnrbeA6EUSqgDujPbZhI2S",
//     oName:"Team TyrNE"
// },
// {
//     date:"7/14/2020",
//     time:"20:00 JST",
//     league:"GKR Leagues",
//     score:"2 - 1",
//     oLogo:"https://lh3.googleusercontent.com/d/1BMA0rGYuzdnlm80iOQGzNak83Er3B3O2",
//     oName:"WESS"
// },
// {
//     date:"7/16/2020",
//     time:"20:00 JST",
//     league:"GKR Leagues",
//     score:"1 - 2",
//     oLogo:"https://lh3.googleusercontent.com/d/1oo2hpjF-iELKulmgFTf5OxiF_mtBOYkO",
//     oName:"Team CMC"
// },
// {
//     date:"7/20/2020",
//     time:"21:30 JST",
//     league:"Asia City League",
//     score:"2 - 0",
//     oLogo:"https://cdn.royaleapi.com/static/img/team/logo/islamabad-allstar.png?t=464034903c4ad4176910eccf1ed48efee4e9ad1d",
//     oName:"Islamabad All Star"
// },
// {
//     date:"7/20/2020",
//     time:"23:30 JST",
//     league:"Clash Cup",
//     score:"9 - 8",
//     oLogo:"https://lh3.googleusercontent.com/d/1gR-aQTYnNaJnrbeA6EUSqgDujPbZhI2S",
//     oName:"Team TyrNE"
// },
// {
//     date:"7/21/2020",
//     time:"20:00 JST",
//     league:"Asia City League",
//     score:"2 - 0",
//     oLogo:"https://cdn.royaleapi.com/static/img/team/logo/seoul-celestials.png?t=32193704acb2d1a991f1ccde231d4cb138f368ed",
//     oName:"Seoul Celestials"
// },
// {
//     date:"7/21/2020",
//     time:"21:00 JST",
//     league:"GKR Leagues",
//     score:"3 - 0",
//     oLogo:"https://lh3.googleusercontent.com/d/11jqLJyrxOvwRVBfDE6yBqlCx9sj-csFu",
//     oName:"Stalwart Esports"
// },
// {
//     date:"7/22/2020",
//     time:"21:30 JST",
//     league:"Neo Clash League",
//     score:"0 - 2",
//     oLogo:"https://lh3.googleusercontent.com/d/1lqQKWR-E0_RN0GG-mfa-Ob0X0KxyN4Yr",
//     oName:"Intellectuals Gulfnation"
// },
// {
//     date:"7/23/2020",
//     time:"21:00 JST",
//     league:"GKR Leagues",
//     score:"3 - 0",
//     oLogo:"https://lh3.googleusercontent.com/d/19OuJJv2fzvQIofKuplog7eGrbzVom40M",
//     oName:"Team STK"
// },
// {
//     date:"7/25/2020",
//     time:"00:00 JST",
//     league:"Neo Clash League",
//     score:"0 - 2",
//     oLogo:"https://lh3.googleusercontent.com/d/1gR-aQTYnNaJnrbeA6EUSqgDujPbZhI2S",
//     oName:"Team TyrNE"
// },
// {
//     date:"7/27/2020",
//     time:"20:45 JST",
//     league:"Asia City League",
//     score:"2 - 0",
//     oLogo:"https://cdn.royaleapi.com/static/img/team/logo/hongkong-noobies.png?t=54e61d970babe79edf4db47bfb7f8926301de0f5",
//     oName:"Hong Kong Noobies"
// },
// {
//     date:"7/28/2020",
//     time:"22:00 JST",
//     league:"GKR Leagues",
//     score:"3 - 0",
//     oLogo:"https://cdn.royaleapi.com/static/img/team/logo/team-barbie.png?t=0a0eb52a3f84463aa68695a269815f143fa00cd6",
//     oName:"Team Barbie"
// },
// {
//     date:"7/30/2020",
//     time:"22:00 JST",
//     league:"GKR Leagues",
//     score:"2 - 1",
//     oLogo:"https://lh3.googleusercontent.com/d/13buDXG5y1lQWs4B2x7VOT3AO7jnZAKGJ",
//     oName:"ERN APAC"
// },