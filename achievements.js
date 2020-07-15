var achievements = [
    {
        game:"BS",
        year:"2020",
        event:"Brawl Stars Championship June 2020 Qualifier",
        rank:"4th",
        description:"KIX Rising Sun, formerly known as きまぐれ P.R.O, competed in the June Qualifiers for the Brawl Stars Championship. 361 teams competed in the Qualifiers tournament, and KIX Rising Sun had a first-round bye. The team won comfortably, beating Panna Cotta, PSG Esports, Duy Anh Esport, IGC, Cloud Gaming, and Fire Scale Esports. In the semi-finals, KIX Rising Sun was defeated by 君が名はB-Boy指定, and for the third place match, SK Miracle took the win, resulting in a 4th place finish.",
        collapseNum:"one"
    },
    {
        game:"CR",
        year:"2020",
        event:"Clash Cup Season 4",
        rank:"1st",
        description:"Rising Sun Esports split into two teams - Alpha and Beta. 27 teams were split into 3 groups, where Alpha was placed into Group B and Beta was placed into Group C. Unlike other leagues, Clash Cup had a point-based ranking system. Alpha team finished at the top of their group scoring 74 points. 71 points by the Beta team was enough to secure them the 3rd place spot in their group and both teams advanced to the playoffs. Alpha received a first-round bye for their performance, and Beta was knocked out in the first round by Instinct NA. Alpha took revenge on Instinct in the quarter-finals and advanced to the semi-finals. Alpha team barely managed to get the victory over Evolve and faced Team TyrNE in the finals. In the finals, Rising Sun Esports lost to Team TyrNE, but later it was discovered Team TyrNE had violated the league rules so Rising Sun Esports was given the title.",
        collapseNum:"two"
    },
    {
        game:"CR",
        year:"2020",
        event:"Asia City League Season 1",
        rank:"2nd",
        description:"Representing Japan, Rising Sun Esports competed in a nation-based league for APAC. 8 countries were represented, and each team played against each other. Rising Sun Esports finished the regular season with a 4-3 record, placing 3rd. For the playoffs, the top 4 teams were placed in the top bracket, while the remaining 4 teams were placed in the bottom bracket. Top bracket was a double-elimination while the bottom bracket was single-elimination. Rising Sun Esports had a tough start to the playoffs getting defeated by India 3-1 and was sent down to the bottom bracket. From there, Rising Sun Esports did not give up, defeating South Korea, Malaysia, and Taiwan, reaching the grand finals. Seeking revenge from the first round, Rising Sun Esports faced off against India again in the finals, but was defeated once again and finished the season 2nd place. ",
        collapseNum:"three"
    },    
    {
        game:"CR",
        year:"2020",
        event:"Neo Clash League Season 2",
        rank:"3rd",
        description:"The second season of Neo Clash League featured 16 teams, split into two different groups. Rising Sun Esports split into teams - Alpha and Beta. This was the first time Rising Sun Esports split into two different teams. Alpha team finished 2nd in Group A at 5-2, and Beta team finished at the top of Group B at 6-1. Top 4 teams from each group advanced to the playoffs. Both Alpha and Beta won the first round, but lost in the semi-finals.",
        collapseNum:"four"
    },
    {
        game:"CR",
        year:"2020",
        event:"GKR Leagues Season 3",
        rank:"3rd",
        description:"10 of the top teams in APAC competed in the 3rd season of GKR Leagues. The league featured a double round-robin format with each team playing a total of 18 matches. Rising Sun Esports had a rough first half with a 5-4 record. However, Rising Sun Esports bounced back and only lost 2 matches in the second half, going 12-6 and finishing 4th place in the regular season. Top 5 teams advanced to the playoffs, where Rising Sun Esports was able to defeat Team CMC and Ako Roshi to claim the 3rd place spot.",
        collapseNum:"five"
    },
    {
        game:"CR",
        year:"2019",
        event:"World Cup Season 2",
        rank:"1st",
        description:"Hosted by LooT, the World Cup featured 52 countries. Rising Sun Esports became the representative of Japan after defeating Takeshi Japan 2-0. Rising Sun Esports went 4-2 and finished 2nd in the Group Qualifiers, advancing to the Group Stages. Rising Sun Esports faced Austria, Brazil, and Venezuela in the Group Stages, and advanced to the Finals bracket with a 2-1 record. The Finals tournament featured 8 countries - Australia, Hong Kong, Austria, Greece, Romania, Poland, Singapore, and Japan. Rising Sun Esports beat Singapore in the quarter-finals 3-1, Romania in the semi-finals 3-1, and Australia in the Finals 3-0. Overall, the team went 10-2 to become the World Champions!",
        collapseNum:"six"
    },
    {
        game:"CR",
        year:"2019",
        event:"Neo Clash League Season 1",
        rank:"2nd",
        description:"The inaugural season of Neo Clash League consisted of 10 teams. Each team played 6 matches in the regular season where Rising Sun Esports placed first with a 5-1 record. For the playoffs, 6 teams advanced and the top 2 teams received a first-round bye. In the semi-finals, Rising Sun Esports defeated Team Phoenix 3-1 to advance to the finals. In the finals, Rising Sun Esports fought hard but lost to Intellectuals 3-4, ending in 2nd place.",
        collapseNum:"seven"
    },
    {
        game:"CR",
        year:"2019",
        event:"Clash Star League",
        rank:"1st",
        description:"The group stages of Clash Star league included 10 teams in each group. Rising Sun Esports was placed in Group C which included some of the top EU teams. A round-robin was played with every team in the group, and Rising Sun Esports dominated the group going undefeated and placing 1st place.",
        collapseNum:"eight"
    }    
]

for(i = 0; i < achievements.length; i++) {
    var gameImage = "";
    if(achievements[i].game == "CR") {
        gameImage = "clash-royale.png";
    } else {
        gameImage = "brawl-stars.png";
    }

    var color = "";
    if(achievements[i].rank == "1st") {
        color = "gold";
    }else if(achievements[i].rank == "2nd") {
        color = "silver";
    }else if(achievements[i].rank == "3rd") {
        color = "bronze";
    }else{
        color = "white";
    }

    var crown = "";
    if(achievements[i].rank == "1st" || achievements[i].rank == "2nd" || achievements[i].rank == "3rd") {
        crown = "<i class=\"fas fa-crown\"></i>";
    } else {
        
    }
    $('#achievement').append(
        '<div class="card bg-transparent text-white">' +
            '<div class="card-header" id="heading'+achievements[i].collapseNum+'">' +
                '<div class="bg-transparent row" data-toggle="collapse" data-target="#collapse'+achievements[i].collapseNum+'" aria-expanded="false" aria-controls="collapse'+achievements[i].collapseNum+'">'+
                    '<div class="list-team col-2 text-center"><img src="'+ gameImage + '" class="game-icon"></div>'+
                    '<div class="list-event col-2 text-center"><h3>' + achievements[i].year + '</h3></div>' +
                    '<div class="list-event col-6 text-center"><h3>' + achievements[i].event + '</h3></div>' +
                    '<div class="list-placement col-2 '+color+' text-center"><h3>' + achievements[i].rank +" "+ crown +'</h3></div>'+
                '</div>'+
            '</div>'+
            '<div id="collapse'+achievements[i].collapseNum+'" class="collapse" aria-labelledby="heading'+achievements[i].collapseNum+'" data-parent="#achievement">'+
                '<div class="card-body">' + 
                    achievements[i].description+
                '</div>'+
            '</div>'+
        '</div>'
    );
}

$('#achievement .row').click(function(){
    $('#achievement .row').removeClass('selected');
    $(this).addClass('selected');
});
