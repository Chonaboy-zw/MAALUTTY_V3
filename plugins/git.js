/* Copyright (C) nijin-husni
Mwonu credits kalayalle
Maalutty-nijin-husni
*/

const Maalutty = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('wallpaper');

Maalutty.addCommand({pattern: 'git', fromMe: false, desc: Lang.WP}, (async (message, match) => {

    var r_text = new Array ();
    
    
    r_text[0] = "https://i.ibb.co/6tbmPj1/maaluttty.jpg";
    
    
    var i = Math.floor(1*Math.random())

    var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: `◄━⦁💝 MAALUTTY_V3💝⦁━►


*owner number chonaboy* :https://wa.me/263718530881.
            

*owner number chonaboy* :https://wa.me/263718530881.


*owner id instagram* :https://instagram.com/_husni_ser_.


*github* : https://github.com/chonaboy-zw/MAALUTTY_V3.


*audio commands* :https://github.com/nijin-husni/media/tree/main/bgm.


*sticker commands* :https://github.com/nijin-husni/media/tree/main/stickers.

◄━⦁💝 MAALUTTY_V3💝⦁━►
■□ ~chonaboy~ AND ~njin~■□ 

`}) 

}));
