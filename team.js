// CLASH ROYALE ---------------------------------

var crMem = [
    {
        flag:"jp",
        name:"OYASSUU",
        twitter:"https://twitter.com/CRoyassuu",
        link:"https://www.royaleapi.com/player/PCG229PC"
    },
    {
        flag:"",
        name:"Kou.h",
        twitter:"https://twitter.com/kOuh34506753",
        link:"https://www.royaleapi.com/player/2PLJGLLO"
    },
    {
        flag:"",
        name:"Minadora",
        twitter:"http://twitter.com/pando_ra11",
        link:"https://www.royaleapi.com/player/88RUCCQLC"
    },
    {
        flag:"",
        name:"グッドナイト下川",
        twitter:"https://twitter.com/Goodnight4093",
        link:"https://www.royaleapi.com/player/2GU8GL80C"
    },
    {
        flag:"",
        name:"ひろねる",
        twitter:"http://twitter.com/CR_NAgahama",
        link:"https://www.royaleapi.com/player/2GQCLYPUV"
    },
    {
        flag:"",
        name:"Yoshii",
        twitter:"https://twitter.com/yoshii_CR",
        link:"https://www.royaleapi.com/player/QGURU8QC"
    },
    {
        flag:"",
        name:"ゆぽん",
        twitter:"https://twitter.com/yupon_cr",
        link:"https://royaleapi.com/player/8CVJPRY2C"
    },
    {
        flag:"",
        name:"こさかなりた",
        twitter:"https://twitter.com/Rita__cr",
        link:"https://royaleapi.com/player/22Y8J9PUR"
    },
    {
        flag:"",
        name:"かめ",
        twitter:"https://twitter.com/kameballoon",
        link:"https://royaleapi.com/player/RY9UPG2L"
    },
    {
        flag:"",
        name:"wataporon",
        twitter:"https://twitter.com/wataporooon",
        link:"https://royaleapi.com/player/8G9C9ULG"
    },
    {
        flag:"",
        name:"Choco:Chip",
        twitter:"https://twitter.com/ChocoChip_Asuka",
        link:""
    },
    {
        flag:"",
        name:"Rian",
        twitter:"https://twitter.com/Rian_HAYUIKOTO",
        link:"https://royaleapi.com/player/JJ2290JR"
    },
    {
        flag:"",
        name:"なーにをしているぅー？！",
        twitter:"https://twitter.com/genshinameko",
        link:"https://royaleapi.com/player/8P8892290"
    },
    {
        flag:"",
        name:"フワッティー",
        twitter:"http://twitter.com/FUWA_CR",
        link:"https://royaleapi.com/player/8Y9RCCPLR"
    },
    {
        flag:"",
        name:"zumishie",
        twitter:"https://twitter.com/zumishiecr",
        link:"https://royaleapi.com/player/2U08UYCRP"
    },
    {
        flag:"",
        name:"メントス",
        twitter:"https://twitter.com/mentos193",
        link:"https://royaleapi.com/player/JY228GY9"
    },
    {
        flag:"",
        name:"dobby",
        twitter:"https://twitter.com/bobby90415867",
        link:"https://royaleapi.com/player/2QCQ29VR"
    },
    {
        flag:"",
        name:"ひか",
        twitter:"https://twitter.com/hikaskeleton",
        link:"https://royaleapi.com/player/8J9LQVVYJ"
    },
    {
        flag:"",
        name:"CanCam",
        twitter:"https://twitter.com/Can_7se_Cam",
        link:"https://royaleapi.com/player/2GGGGU2P2"
    },
    {
        flag:"",
        name:"Gai",
        twitter:"https://twitter.com/gaimizuame_16",
        link:"https://royaleapi.com/player/8UYC22JG"
    },
    {
        flag:"",
        name:"NERV",
        twitter:"https://twitter.com/Nerv3M_CR",
        link:"https://royaleapi.com/player/R9082R8J"
    },
    {
        flag:"",
        name:"Lewis",
        twitter:"https://twitter.com/semeko_coc",
        link:"https://royaleapi.com/player/8Q020U0U"
    },
    {
        flag:"",
        name:"Runadora",
        twitter:"https://twitter.com/kuboshi__cr",
        link:"https://royaleapi.com/player/C2Q2VGR"
    },
    {
        flag:"",
        name:"kikutti",
        twitter:"https://twitter.com/kikutti_cr",
        link:"https://royaleapi.com/player/2V029LGP"
    },
    {
        flag:"",
        name:"MAG",
        twitter:"https://twitter.com/magtyan_",
        link:"https://royaleapi.com/player/2QGYJ90G"
    },
]

for(i = 0; i < crMem.length; i++){
    var flagLink = "";
    if(crMem[i].flag == "us"){
        flagLink = "us-flag.png";
    }else{
        flagLink="jp-flag.png";
    }
    $('.crMem').append(
        '<div class="row">' +
            '<div class="list-num col-2 col-sm-1"><h3>'+ (i+1) +'</h3></div>'+
            '<div class="list-flag col-2 col-sm-1"><img class="flag" src="'+ flagLink +'"></div>'+
            '<div class="list-name col-8 col-sm-8"><h3>'+ crMem[i].name +'</h3></div>'+
            '<div class="list-icon col-6 col-sm-1"><a href="'+ crMem[i].twitter +'"><img src="twitter-blue.png" class="stats-icon"></img></a></div>'+
            '<div class="list-img col-6 col-sm-1"><a href="'+ crMem[i].link +'"><img src="https://brand.royaleapi.com/logo/royaleapi-logo.png?b501a80b417cb2e8" class="stats-icon"></a></div>'+
        '</div>')
}


// BRAWL STARS --------------------------------------------

var bsMem = [
    {
        flag:"jp",
        name:"Lil.Dembsey",
        twitter:"https://twitter.com/denden_BS",
        
    },
    {
        flag:"jp",
        name:"あかつき",
        twitter:"https://twitter.com/Akatsuki_bbrack",
       
    },
    {
        flag:"jp",
        name:"Shanaku",
        twitter:"https://twitter.com/ishana0",
        
    },
]

for(i = 0; i < bsMem.length; i++){
    var flagLink = "";
    if(bsMem[i].flag == "us"){
        flagLink = "us-flag.png";
    }else{
        flagLink="jp-flag.png";
    }
    $('.bsMem').append( 
        '<div class="row">'+
            '<div class="list-num col-2 col-sm-1"><h3>' + (i+1) + '</h3></div>'+
            '<div class="list-flag col-2 col-sm-1"><img class="flag" src="'+flagLink+'"></div>'+
            '<div class="list-name col-8 col-sm-8"><h3>'+ bsMem[i].name +'</h3></div>'+
            '<div class="list-icon col-6 col-sm-1"><a href="'+ bsMem[i].twitter +'"><img src="twitter-blue.png" class="stats-icon"></img></a></div>'+
        '</div>');
}

$('a[data-toggle="tab"]').on('show.bs.tab',function(e){
    localStorage.setItem('activeTab', $(e.target).attr('href'));
})
var activeTab = localStorage.getItem('activeTab');
if(activeTab){
    $('#member-tabs a[href="'+activeTab + '"]').tab('show');
}