let num = [5, 5, 5, 3, 3, 2, 7, 9, 13, 15]
let val3 = 0
let val5 = 0
let val2 = 0
let randonval = 0
for(let count in num){
    if(num[count] == 5){
        val5 += 1
    }else if(num[count] == 3){
        val3 += 1
    }else if(num[count] == 2){
        val2 += 1
    }else{
        randonval += 1
    }
}
console.log(`In this program have ${val5} values = 5, ${val3} values =  3, and ${val2} = 2`)
console.log(`And ${randonval} randon values`)
console.log(num)