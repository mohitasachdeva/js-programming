var prod = 1;
var power = 0;
var i = 0;
while(power < 256 ){    
    power = Math.pow(2,i);
    console.log(power);
    i++;
}