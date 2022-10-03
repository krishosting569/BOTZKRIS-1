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

~> [ *OWNER-BOT* (👨)]
[ @${ownerNumber.split('@')[0]} ]
 
~> [ *THX-TO* (👍)]
• *ALLAH SWT*
• *ORTU*
• *LORD R1YNZ*
• *MEGAWATI*
[ @0 ]

By *@adiwajshing/baileys*`
}
// THX-TO JANGAN DI UBAH YA BANH:3 
// WEB : https://md-devs.herokuapp.com
