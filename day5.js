console.log("1. JSON iterate over all loops" )

// for loop 
console.log("----for loop----")

const jsonIterate = {  

        "name":    "Rubin",   
        "salary":  56000,   
        "status": "single",
        "education" : "under gradutate",      
};


const values = Object.values(jsonIterate);


for(let i =0; i<values.length; i++){
    console.log(values[i]);
};

// forEach loop
//where the JSON is from above 
const jsonIterate = {  

        "name":    "Rubin",   
        "salary":  56000,   
        "status": "single",
        "education" : "under gradutate",      
};
*/

console.log("----forEach loop----")
values.forEach((info , index, array) => {
    console.log(`${info}`)
});

// for in loop 
console.log("----for in loop----");
/* Here the JSON is from above 
const jsonIterate = {  

        "name":    "Rubin",   
        "salary":  56000,   
        "status": "single",
        "education" : "under gradutate",      
};
*/

for(val in jsonIterate){
    console.log(`
${val} : ${jsonIterate[val]}`)
};

// for of loops
console.log("----for of loop----");

const alphabeticalLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

for(str of alphabeticalLetters){
    console.log(`
Letter : ${str}`)
}

console.log("2.create own resume in JSON format");

const resume = {
    "Name" : "Rubin",
    "Age" : 21,
    "Gender" : "Male",
    "Degree" : "B.E - CSE",
    "Year of passing" : 2023,
    "Experience" : "Intern at Nilla Apps",
    "Experience year" : "2 months",
    "Projects" : "E-commerece cosmetic store , Hotel booking website",
    "Skills" : "HTML5 , CSS, JS, MySQL , Python",
    "Soft Skills" : "Team player , ready for learning new things , Good communication",
    "Certifications" : "Python certification - GUVI , AI and Deep learning - PSGTech",
}



// Just loop to see in console for my reference
// for(mykey in resume){
//     console.log(`
// ${mykey} : ${resume[mykey]} `)
// }
