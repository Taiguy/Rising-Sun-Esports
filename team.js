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


// Wild Rift  --------------------------------------------

var RSB = [
    {
        flag:"",
        name:"Tori",
        twitter:"https://twitter.com/Fw_tori3",
        
    },
    {
        flag:"",
        name:"Dragon",
        twitter:"",
       
    },
    {
        flag:"",
        name:"Magic",
        twitter:"https://twitter.com/Magic_0119",
    },
    {
        flag:"",
        name:"Paseri",
        twitter:"https://twitter.com/wildrift3150",
    },
    {
        flag:"",
        name:"SugarDog",
        twitter:"https://twitter.com/satoh_inu",
    },
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







