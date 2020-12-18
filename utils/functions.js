module.exports={
    calculator: function(num1,type,num2){
        if(type=='*') return Number(num1) * Number(num2)
        if(type=='-') return Number(num1) - Number(num2)
        if(type=='+') return Number(num1) + Number(num2)
        if(type=='/') return Number(num1) / Number(num2)
        if(type=='^') return Number(num1) ^ Number(num2)
    }
}