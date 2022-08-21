exports.allmenu = (prefix, MyData, sender, ownerNumber) => {
if (MyData("status", sender) == false) { var sts = "USER FREE"
var x = "[🔒]" }
if (MyData("status", sender) == true) { var sts = "USER PREMIUM"
 var x = "" }
return `[ *BOT* (🥶) ]

~> [ *YOUR-INFO* (❓)]
> *Status* : ${sts}
> *Energi* : ${MyData("energi", sender)}
> *Karakter* : ${MyData("karakter", sender)}
> *Medali* : ${MyData("medali", sender)}
> *Exp* : ${MyData("exp", sender)}
> *Uang* : ${MyData("uang", sender)}

~> [ *GROUP* (📌)]
> *${prefix}antilink*
> *${prefix}editinfo*
> *${prefix}group*
> *${prefix}promote*
> *${prefix}demote*
> *${prefix}add*
> *${prefix}kick*
> *${prefix}resetlink*
> *${prefix}linkgroup*
> *${prefix}setdesc*
> *${prefix}setname*

~> [ *GAME* (🕴)]
> *${prefix}buykarakter*
> *${prefix}buyenergi*
> *${prefix}theworld*
> *${prefix}judi*
> *${prefix}sell*
> *${prefix}tebakgambar*

~> [ *CEK* (⭐)]
> *${prefix}mykarakter*
> *${prefix}myuang*
> *${prefix}mymedali*
> *${prefix}myexp*
> *${prefix}myenergi*
> *${prefix}claim* ${x}

~> [ *CREATIF(1)* (🎨)]
> *${prefix}anjing1*
> *${prefix}anjing2*
> *${prefix}anjing3*
> *${prefix}meme1*
> *${prefix}meme2*
> *${prefix}tampar*
> *${prefix}cerdas*
> *${prefix}tokdalang*
> *${prefix}tom*
> *${prefix}ampun*
• *Note* : Input(Text)

~> [ *CREATIF(2)* (🎨)]
> *${prefix}curiga*
> *${prefix}anda*
> *${prefix}anjing4*
> *${prefix}heran*
> *${prefix}macan*
> *${prefix}mobil*
Note : Input(Text1 & text2)

~> [ *CREATIF(3)* (🎨)]
> *${prefix}maker1* 
> *${prefix}maker2* 
> *${prefix}maker3* 
> *${prefix}maker4* 
> *${prefix}maker5* 
> *${prefix}maker6* 
> *${prefix}maker7* 
> *${prefix}maker8* 
> *${prefix}maker9* 
> *${prefix}maker10* 
Note : Input(image & text)

~> [ *ISLAMIC* (🕋)]
> *${prefix}tahlil*
> *${prefix}asmaulhusna*
> *${prefix}doaharian*
> *${prefix}ayatkursi*
> *${prefix}niatshalat*
> *${prefix}bacaanshalat*

~> [ *NSFW-NEW* (🔞)]
> *${prefix}kanmusunights* ${x} 
> *${prefix}arknuts* ${x} 
> *${prefix}rule34* ${x} 
> *${prefix}pokeporn* ${x} 
> *${prefix}inumimi* ${x} 
> *${prefix}dtittytouching* ${x} 
> *${prefix}handbras* ${x} 
> *${prefix}taihou* ${x} 
> *${prefix}christmascake* ${x} 
> *${prefix}officelady* ${x} 
> *${prefix}nekomimi* ${x} 
> *${prefix}waifusgonewild* ${x} 
> *${prefix}gameovergirls* ${x} 
> *${prefix}sukebei* ${x} 
> *${prefix}corruptionhentai* ${x} 
> *${prefix}tentai* ${x} 
> *${prefix}atago* ${x} 
> *${prefix}yaoi* ${x} 
> *${prefix}netorare* ${x} 
> *${prefix}kemonomimi* ${x} 
> *${prefix}yuri* ${x} 
> *${prefix}ahegao* ${x} 
> *${prefix}pantsu* ${x} 
> *${prefix}hentai* ${x} 
> *${prefix}ecchi* ${x}

~>[ *BERITA* (🌏)]
> *${prefix}beritanews1*
> *${prefix}beritanews2*
> *${prefix}beritanews3*
> *${prefix}beritanews4*
> *${prefix}beritanews5*
> *${prefix}beritanews6*
> *${prefix}beritanews7*
> *${prefix}beritanews8*
> *${prefix}beritanews9*
> *${prefix}beritanews10*
> *${prefix}beritanews11*
> *${prefix}beritanews12*
> *${prefix}beritanews13*
> *${prefix}beritanews14*
> *${prefix}beritanews15*
> *${prefix}beritanews16*
> *${prefix}beritanews17*
> *${prefix}beritanews18*
> *${prefix}beritanews19*
> *${prefix}beritanews20*

~>[ *RECIPES* (🍱)]
> *${prefix}recipes*
> *${prefix}recipespage*
> *${prefix}recipeslimit*
> *${prefix}recipescategory*
> *${prefix}searchcategory*

~>[ *MENFESS* (💌)]
> *${prefix}chat* <chat>
> *${prefix}simi* <chat>

~> [ *RANDOM* (💫)]
> *${prefix}brainly* <soal>
> *${prefix}script*
> *${prefix}setemote* ${x}
> *${prefix}getprem*

~> [ *AUDIO* (🎶)]
> Pilih audio 1-20
> *Contoh* : ${prefix}audio7

~> [ *OWNER-BOT* (👨)]
[ @${ownerNumber.split('@')[0]} ]
 
~> [ *THX-TO* (👍)]
• *RIMURUBOTZ*
[ @6282347260729 ]
• *LOLIKILLERS*
[ @6285785445412 ]
• *LORD R1YNZ*
[ @6283856085455 ]
• *MEGAWATI*
[ @0 ]

By *@adiwajshing/baileys*`
}
// THX-TO JANGAN DI UBAH YA BANH:3 
// WEB : https://md-devs.herokuapp.com
