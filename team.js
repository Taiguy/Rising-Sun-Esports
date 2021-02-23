// APAC ---------------------------------

var apac = [
    {
        flag:"",
        name:"PANDORA",
        twitter:"https://twitter.com/PandoraRa11",
        link:"https://www.royaleapi.com/player/88RUCCQLC"
    },
    {
        flag:"",
        name:"ぐりこ",
        twitter:"https://twitter.com/miku_cr1",
        link:"https://www.royaleapi.com/player/2LJ0ULYCC "
    },
    {
        flag:"",
        name:"Kou.h",
        twitter:"https://twitter.com/kOuh34506753",
        link:"https://www.royaleapi.com/player/2PLJGLLO"
    },
    {
        flag:"",
        name:"kikutti",
        twitter:"https://twitter.com/kikutti_cr",
        link:"https://royaleapi.com/player/2V029LGP"
    },
    {
        flag:"",
        name:"ゆぽん",
        twitter:"https://twitter.com/yupon_cr",
        link:"https://royaleapi.com/player/8CVJPRY2C"
    },
    {
        flag:"",
        name:"CanCam",
        twitter:"https://twitter.com/Can_7se_Cam",
        link:"https://royaleapi.com/player/2GGGGU2P2"
    },
    {
        flag:"",
        name:"なーにをしているぅー？！",
        twitter:"https://twitter.com/genshinameko",
        link:"https://royaleapi.com/player/8P8892290"
    },
    {
        flag:"",
        name:"ショウダイ",
        twitter:"https://twitter.com/SHODAI_CR",
        link:"https://royaleapi.com/player/2C0PJR29Y"
    },
    {
        flag:"",
        name:"wataporon",
        twitter:"https://twitter.com/wataporooon",
        link:"https://royaleapi.com/player/8G9C9ULG"
    },
    {
        flag:"",
        name:"ひまわり",
        twitter:"https://twitter.com/HimawariCR",
        link:"https://royaleapi.com/player/2PQ20R02Y"
    },
    {
        flag:"",
        name:"Yuto",
        twitter:"https://twitter.com/yuto_cr",
        link:"https://royaleapi.com/player/CGQ9J2G"
    },
    {
        flag:"",
        name:"こむこむ",
        twitter:"https://twitter.com/komukomu_CR",
        link:"https://royaleapi.com/player/2Y0QL8VVJ"
    },
    {
        flag:"",
        name:"ピロったん",
        twitter:"https://twitter.com/piroooCR",
        link:"https://royaleapi.com/player/2P0C8YLPL"
    },
    {
        flag:"",
        name:"Starry",
        twitter:"https://twitter.com/StarryWish_CR",
        link:"https://royaleapi.com/player/8PJGCJUJU"
    },
    {
        flag:"",
        name:"HERO",
        twitter:"https://twitter.com/HERO98714996",
        link:"https://www.royaleapi.com/player/22L8UUV0Q"
    },
    {
        flag:"",
        name:"zumishie™️",
        twitter:"https://twitter.com/zumishiecr",
        link:"https://www.royaleapi.com/player/2U08UYCRP"
    },
    {
        flag:"",
        name:"ひろねる",
        twitter:"https://twitter.com/CR_NAgahama",
        link:"https://www.royaleapi.com/player/2GQCLYPUV"
    },
    {
        flag:"",
        name:"Takashi⊿ ",
        twitter:"https://twitter.com/takashi_cr",
        link:"https://www.royaleapi.com/player/2JVG0C298 "
    },
    {
        flag:"",
        name:"ウィル",
        twitter:"https://twitter.com/will___cr",
        link:"https://www.royaleapi.com/player/2UV9G0L80"
    },
    {
        name:"YUYA",
        twitter:"https://twitter.com/YUU_YUYA_CR",
        link:"https://royaleapi.com/player/980RC809"
    },
    // {
    //     name:"",
    //     twitter:"",
    //     link:"https://royaleapi.com/player/"
    // },
]

apac = apac.sort(nameSort);
for(i = 0; i < apac.length; i++){
    $('.apac').append(
        '<div class="player">' +
            '<div class="name"><h6>'+ (i+1) +'. '+apac[i].name +'</h6></div>'+
            '<div class="icon twitter"><a href="'+ apac[i].twitter +'"><img src="twitter.png" class="stats-icon"></img></a></div>'+
            '<div class="icon api"><a href="'+ apac[i].link +'"><img src="royaleapi-logo.png" class="stats-icon"></a></div>'+
        '</div>')
}



// PastSinner --------------------------------------------
var pastSinner = [
    {
        flag:"",
        name:"팝콘TVBJ한상일",
        twitter:"https://twitter.com/MENTAL_PSR",
        link:"https://royaleapi.com/player/800YLPGYU"
    },
    {
        flag:"",
        name:"KAIST",
        twitter:"https://twitter.com/KAISTCR",
        link:"https://royaleapi.com/player/2298CLV2R"
    },
    {
        flag:"",
        name:"TOÝ",
        twitter:"https://twitter.com/toy_68",
        link:"https://royaleapi.com/player/P8RPLU08"
    },
    {
        flag:"",
        name:"PIVOT",
        twitter:"https://twitter.com/YoungheonL",
        link:"https://royaleapi.com/player/9QJVR20G"
    },
    {
        flag:"",
        name:"Munch",
        twitter:"https://twitter.com/munchcr",
        link:"https://royaleapi.com/player/82PY20YY"
    },
    {
        flag:"",
        name:"JESTER€Ro(Ya)Ri",
        twitter:"https://twitter.com/JESTER_RoYaRi",
        link:"https://royaleapi.com/player/8L8CC2VJ2"
    },
    {
        flag:"",
        name:"Greed",
        twitter:"https://twitter.com/Greed_crl",
        link:"https://royaleapi.com/player/2PQJYJV80"
    },
    {
        flag:"",
        name:"김재투",
        twitter:"https://twitter.com/jaetwokim",
        link:"https://royaleapi.com/player/RUQGRYUJ"
    },
    {
        flag:"",
        name:"최소무덤장인",
        twitter:"https://twitter.com/xIzqZW8srr2T5sy",
        link:"https://royaleapi.com/player/PRQLUGJU"
    },
    {
        flag:"",
        name:"Delta Kor",
        twitter:"https://twitter.com/dQcOBbUsZAZlDIt",
        link:"https://royaleapi.com/player/2GQJGLCQP"
    },
    {
        flag:"",
        name:"엘티노",
        twitter:"https://twitter.com/junhyeok_2003",
        link:"https://royaleapi.com/player/2GR0JUL0V"
    },
    {
        flag:"",
        name:"Ra sena",
        twitter:"https://twitter.com/sena040817",
        link:"https://royaleapi.com/player/90CRLJP"
    },
    {
        flag:"",
        name:"KÄİ",
        twitter:"https://twitter.com/Kai15911613",
        link:"https://royaleapi.com/player/Y9J809JR"
    },
    {
        flag:"",
        name:"Wimpy Kid",
        twitter:"https://twitter.com/ytwimpykidcr",
        link:"https://royaleapi.com/player/YVGQVC9Y"
    },
    {
        flag:"",
        name:"RoThy",
        twitter:"https://twitter.com/XCB6ADK93x4vUkF",
        link:"https://royaleapi.com/player/JPRRUQVQ"
    },
    {
        flag:"",
        name:"ice wizard",
        twitter:"https://twitter.com/nonno950917",
        link:"https://royaleapi.com/player/20P0VLJL8"
    },
    {
        flag:"",
        name:"N A V E R",
        twitter:"https://twitter.com/naver_cr",
        link:"https://royaleapi.com/player/2GL2PCGGY"
    },
    {
        flag:"",
        name:"즹앙이",
        twitter:"https://twitter.com/Lu4suCqy5PZx8ZU",
        link:"https://royaleapi.com/player/PUG99PUJ"
    },
    {
        flag:"",
        name:"아쿠아",
        twitter:"https://twitter.com/omichrom",
        link:"https://royaleapi.com/player/9VGUL0PR"
    }
]

pastSinner = pastSinner.sort(nameSort);
for(i = 0; i < pastSinner.length; i++){
    $('.pastSinner').append(
        '<div class="player">' +
            '<div class="name"><h6>'+ (i+1) +'. '+pastSinner[i].name +'</h6></div>'+
            '<div class="icon twitter"><a href="'+ pastSinner[i].twitter +'"><img src="twitter.png" class="stats-icon"></img></a></div>'+
            '<div class="icon api"><a href="'+ pastSinner[i].link +'"><img src="royaleapi-logo.png" class="stats-icon"></a></div>'+
        '</div>')
}

// Valorant  --------------------------------------------

var Valorant = [
    {
        flag:"",
        name:"Aadrastos",
        twitter:"",
        
    },
    {
        flag:"",
        name:"Chogpamp",
        twitter:"",
       
    },
    {
        flag:"",
        name:"Googol",
        twitter:"",
        
    },
    {
        flag:"",
        name:"Skyon",
        twitter:"",
       
    },
    {
        flag:"",
        name:"Oxioxioculus",
        twitter:"https://twitter.com/OculusOxi",
        
    }
]

Valorant = Valorant.sort(nameSort);
for(i = 0; i < Valorant.length; i++){
    twitterLine = "";
    if(Valorant[i].twitter != ""){
        twitterLine = "<div class=\"icon twitter\"><a href=\""+ Valorant[i].twitter +"\"><img src=\"twitter.png\" class=\"stats-icon\"></img></a></div>";
    }
    $('.Valorant').append(
        '<div class="player">' +
            '<div class="name"><h6>'+ (i+1) +'. '+Valorant[i].name +'</h6></div>'+
            twitterLine +
        '</div>')
}

// // NA Academy --------------------------------------------

// var naAcademy = [
//     {
//         flag:"",
//         name:"Name",
//         twitter:"https://twitter.com/###",
//         link:"https://royaleapi.com/player/###"
//     },
// ]

// for(i = 0; i < naAcademy.length; i++){
//     $('.naAcademy').append(
//         '<div class="player">' +
//             '<div class="name"><h6>'+ (i+1) +'. '+naAcademy[i].name +'</h6></div>'+
//             '<div class="icon twitter"><a href="'+ naAcademy[i].twitter +'"><img src="twitter.png" class="stats-icon"></img></a></div>'+
//             '<div class="icon api"><a href="'+ naAcademy[i].link +'"><img src="royaleapi-logo.png" class="stats-icon"></a></div>'+
//         '</div>')
// }

// Wild Rift  --------------------------------------------

var RSB = [
    {
        flag:"",
        name:"Coming Soon...",
        twitter:"",
        
    },
    // {
    //     flag:"",
    //     name:"",
    //     twitter:"",
       
    // },
    // {
    //     flag:"",
    //     name:"",
    //     twitter:"",
        
    // },
]

RSB = RSB.sort(nameSort);
for(i = 0; i < RSB.length; i++){
    twitterLine = "";
    if(RSB[i].twitter != ""){
        twitterLine = "<div class=\"icon twitter\"><a href=\""+ RSB[i].twitter +"\"><img src=\"twitter.png\" class=\"stats-icon\"></img></a></div>";
    }
    $('.RSB').append(
        '<div class="player">' +
            '<div class="name"><h6>'+ (i+1) +'. '+RSB[i].name +'</h6></div>'+
            twitterLine +
        '</div>')
}

$('a[data-toggle="tab"]').on('show.bs.tab',function(e){
    localStorage.setItem('activeTab', $(e.target).attr('href'));
})
var activeTab = localStorage.getItem('activeTab');
if(activeTab){
    $('#member-tabs a[href="'+activeTab + '"]').tab('show');
}

function nameSort(a,b){
    a.name = a.name.toLowerCase();
    b.name = b.name.toLowerCase();
    if(a.name < b.name)
        return -1
    else
        return 1
}







