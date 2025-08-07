// Date: 21-07-25(Topic JS-2)
//operators and type conversion
let a=10;
// console.log(a);

// console.log(10+20);
let b=10;
let c=b;
let d=(b=20);
console.log(b,c,d);

//(++,--,+=,-=,....)
let i=0;
i++;
console.log(i);
let m=i++;
console.log(m);

//(==,===)
console.log(6!="6","jj");//it is a bug
console.log(6!=="6");//it check datatype and data

/** Operator precedence */

let m1 = 20;
let m2 = 15;
let m3 = 10;

let avg = (m1 + m2 + m3) / 3;
console.log(avg);

//example of operatiors
function isEligible(mathScore, englishScore, scienceScore) {
  // Count how many subjects have scores greater than 80
  let countAbove80 = 0;

    if (mathScore > 80 || englishScore > 80 || scienceScore > 80) {
        countAbove80++;
    }


  // Check scholarship eligibility: at least two subjects > 80
  let eligibleForScholarship = countAbove80 >= 2;

  // Check science fair eligibility: total score >= 250
  let totalScore = mathScore + englishScore + scienceScore;
  let qualifiesForScienceFair = totalScore >= 250;

  // Eligible for award if any one of the above conditions is true
  let eligibleForAward = eligibleForScholarship || qualifiesForScienceFair;

  return eligibleForAward;
}
console.log(isEligible(76,86,93),"yes");

//Type coercion

console.log("5"+2);//String
console.log("5"-1);//number
console.log("4"*2);//number

//String()

console.log(String(106));

//toString()
let num=100;
console.log(num.toString());

//Number()

console.log(Number("1234"));
console.log(Number(true));


//parsInt()
console.log(parseInt("123rr"));

//parsFloat()
console.log(parseFloat("12.5235"));












