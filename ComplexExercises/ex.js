/*EXERCISE 01 -
function getnote(nota){ 

    let notaa = nota >= 90 && nota <= 100
    let notab = nota < 90 && nota >= 80
    let notac = nota < 80 && nota >= 70
    let notad = nota < 70 && nota >= 60
    let notaf = nota < 60 && nota >= 0
    let finalnote = 0
    
    if(notaa){
        finalnote = "A"
    }else if(notab){
        finalnote ="B"
    }else if(notac){
        finalnote ="C"
    }else if(notad){
        finalnote ="D"
    }else if(notaf){
        finalnote ="F"
    }else{
        console.log("Type a valid number between 0 and 100")
    }
    return finalnote
}
console.log(getnote(90))
console.log(getnote(78))
console.log(getnote(69))
console.log(getnote(40))
console.log(getnote(58))
console.log(getnote(89))
console.log(getnote(99)) */

/*EXERCISE 02 
function familyresults (){
    let family = {
        incomes: [2800, 1250, 750],
        spend: [3000, 1250, 750]
    
}
 
    let totincomes = family.incomes[0] + family.incomes[1] + family.incomes[2]   
    let totspend = family.spend[0] + family.spend[1] + family.spend[2]
    let totmoney = totincomes - totspend


    if(totincomes > totspend){
        console.log(`Your total money is:`, totmoney, `your bank account are positive`)
    }else if(totincomes < totspend){
        console.log(`Your total money is:`, totmoney, `your bank account are negative`)
    }else if(totincomes = totspend){ 
        console.log(`Your total money is:`, totmoney, `your bank account are null`)
    }else{
        console.log(`Invalid sald`)
    }
}

familyresults()
*/
//C = (F - 32) * 5/9 
//F = C * 9/5 + 32

/* |EXERCICIO 3| 
function conversion(degree){
    let celsiusverify = degree.toUpperCase().includes(`C`)
    let fahrenverify = degree.toUpperCase().includes(`F`)
    let conversionf = Number(degree.toUpperCase().replace(`F`, ``))
    let conversionc = Number(degree.toUpperCase().replace(`C`, ``))
        if(celsiusverify == true){
            conversionc = conversionc * 9/5 + 32
            console.log(conversionc + `F`)
        }else if(fahrenverify == true){
            conversionf = (conversionf - 32) * 5/9
            console.log(conversionf + `C`)
        }else{
            console.log(`Type a existent degree coeficient`)
        }
}

conversion(`50q`)
*/
/*
const booksByCategory = [
    {

    category: `Riqueza`,
    books: [
        {
            title: `Os segredos da mente milinoaria`,
            author: `T. Harv Eker`,
        },
        {
            title: `O homem mais rico da Babilonia`,
            author: `Geroge S. Clason`,
        },
        {
            title: `Pai rico, pai pobre`,
            author: `Robert T. Kiyosaki e Sharon L. Lechter`,
        },
    ],
    },
    {

    category: `Inteligencia Emocional`,
    books: [
        {
            title: `Voce e Insubstituivel`,
            author: `Augusto Cury`,
        },
        {
            title: `Ansiedade - Como enfrentar o mal do seculo`,
            author: `Augusto Cury`,
        },
        {
            title: `Os 7 havitos das pessoas altamente eficazes`,
            author: `Stephen R. Covey`,
        },
    ],
    },
];
const qtdcategory = booksByCategory.length
console.log(qtdcategory)
for(let qtbook of booksByCategory){
    console.log(`Total de livros da Categoria:`, qtbook.category, `is`, qtbook.books.length)
}*/