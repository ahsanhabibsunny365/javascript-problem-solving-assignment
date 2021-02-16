/* Javascript Problem Solving Assignment:
https://github.com/ahsanhabibsunny365/javascript--problem-solving

1.kilometerToMeter
2.budgetCalculator
3.hotelCost
4.megaFriend
*/

//1.kilometerToMeter:

function kilometerToMeter(kilometer){
            if(kilometer>= 0){
            meter = kilometer * 1000; // 1 Kolometer = 1000 Meters.
            return meter;
        }
        else{
            console.log("you can't use negative value") // Don't input Nagative Value
           }
        }
        var result = kilometerToMeter(9); //Add your input ;
        console.log(result);

//2.budgetCalculator:
    
function budgetCalculator(watch, smartPhone, laptop){
    if(watch >=0, smartPhone>=0, laptop>=0){
        var watchPrice = watch * 50;
        var smartPhonePrice = smartPhone * 100;
        var laptopPrice = laptop * 500;
        var total = watchPrice + smartPhonePrice + laptopPrice;
    }
    else{
        console.log("don't use negative value")     //Negative Value Not Allow
    }
    return total;
}
var result = budgetCalculator(7,12,5);
console.log(result);

//3.hotelCost

function hotelCost(day){
    if(day <= 10){
       totalRent = day * 100;
    }
    else if(day <= 20){
        var rentPakage1 = 10 * 100;
        var remain = date -10;
        var rentPakage2 = remain * 80;
        totalRent = rentPakage1 + rentPakage2;
    }
    else {
        var rentPakage1 = 10 * 100;
        var rentPakage2 = 10 * 80;
        remain = day - 20;
        var rentPakage3 = remain * 50;
        totalRent = rentPakage1 + rentPakage3 + rentPakage2;

    }
    return totalRent;
}
var result = hotelCost(17);
console.log(result);

//4.megaFriend
            var friendName = ['Manna','Dipjol','Robal','Hero Alam','Dilder','Abdul'];
            function megaFriend(arr){
            return arr.reduce((max,name)=>{
                 return name.length > max.length? name: max
             },arr[0])
         }
         console.log(megaFriend(friendName));