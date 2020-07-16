//Navigation Bar
var nav = {
    name : {
        home: "home 1",
        about: "",
        team: "",
        achievements:"",
        lang: "",
    },
    link: {
        home: "",
        about: "",
        team: "",
        achievements:"",
        rsl: "",
    }
}
if($("nav").attr('id') == "en"){
    nav.name.home = "HOME";
    nav.name.about = "ABOUT";
    nav.name.team = "TEAMS";
    nav.name.achievements = "ACHIEVEMENTS";
    nav.name.lang = "LANG";
    nav.link.home = "index.html";
    nav.link.about = "about.html";
    nav.link.team = "team.html";
    nav.link.achievements = "achievements.html";
    nav.link.rsl = "rsl-1.html";
}else{
    nav.name.home = "ホーム";
    nav.name.about = "チームについて";
    nav.name.team = "部門紹介";
    nav.name.achievements = "実績";
    nav.name.lang = "言語";
    nav.link.home = "index-jp.html";
    nav.link.about = "about-jp.html";
    nav.link.team = "team-jp.html";
    nav.link.achievements = "achievements-jp.html";
    nav.link.rsl = "rsl-1-jp.html";
}
$('nav').html(
    '<a class="navbar-brand" href="index.html">'+
        '<img id="nav-logo" src="https://cdn.royaleapi.com/static/img/team/logo/rising-sun-esports.png?t=2eb256a2bcfa35871d9292596a14a8805f3bf9b2" alt="Rising-Sun-Logo" loading="lazy">'+
    '</a>'+
    '<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">'+
        '<span class="navbar-toggler-icon"></span>'+
    '</button>'+
    '<div class="collapse navbar-collapse" id="navbarSupportedContent">'+
        '<ul class="navbar-nav ml-auto">'+
            '<li class="nav-item active">'+
                '<a class="nav-link" href="'+nav.link.home+'">'+nav.name.home+'</a>'+
            '</li>'+
            '<li class="nav-item active dropdown">'+
                '<a class="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">'+nav.name.about+'</a>'+
                '<div class="dropdown-menu" style="right:0; left:auto;" aria-labelledby="navbarDropdown">'+
                    '<a class="dropdown-item" href="' + nav.link.about + '">' + nav.name.about + '</a>' +
                    '<a class="dropdown-item" href="' + nav.link.team+ '">' + nav.name.team +'</a>'+
                    '<a class="dropdown-item" href="' + nav.link.achievements+'">' + nav.name.achievements +'</a>'+
                '</div>'+
            '</li>'+
            '<li class="nav-item active">'+
                '<a class="nav-link" href="'+nav.link.rsl+'">RSL</a>'+
            '</li>'+
            '<li class="nav-item active dropdown">'+
                '<a class="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">'+nav.name.lang+'</a>'+
                '<div class="dropdown-menu" style="right:0; left:auto;" aria-labelledby="navbarDropdown">'+
                    '<a class="dropdown-item" href="index.html">English</a>'+
                    '<a class="dropdown-item" href="index-jp.html">日本語</a>'+
                '</div>'+
            '</li>'+
        '</ul>'+
    '</div>'
);


//Footer
$('footer').html(
    '<div class="container">'+
        '<div class="row">'+
            '<div class="col-2"><a href="mailto:EsportsRisingSun@gmail.com"><img src="envelope.png"></a></div>'+
            '<div class="col-2"><a href="https://twitter.com/RisingSun_GG"><img src="twitter.png"></a></div>'+
            '<div class="col-2"><a href="https://www.youtube.com/channel/UCDR1w977aMhXXej7Rvt8pjA"><img src="youtube.png"></a></div>'+
            '<div class="col-2"><a href="https://discord.gg/vNwSRNA"><img src="discord.png"></a></div>'+
            '<div class="col-2"><a href="https://royaleapi.com/team/rising-sun-esports"><img src="royaleapi-logo.png"></a></div>'+
        '</div>'+
    '</div>'
);