/*
 * Chika Bot for Discord
 * Copyright (C) 2020 Kemal H.
 * This software is licensed under Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International
 * For more information, see README.md and LICENSE
  */
module.exports={
    calculator: function(num1,type,num2){
        if(type=='*') return Number(num1) * Number(num2)
        if(type=='-') return Number(num1) - Number(num2)
        if(type=='+') return Number(num1) + Number(num2)
        if(type=='/') return Number(num1) / Number(num2)
        if(type=='^') return Number(num1) ^ Number(num2)
    }
}

