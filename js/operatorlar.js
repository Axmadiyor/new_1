"use strict"

//incr and decr

let incr = 10;
let decr = 10;

incr++;
decr--;

console.log(incr);
console.log(decr);

console.log(14 % 3); //qoldiq nechiligini anglatadi.

console.log(5*5 == 25); //bir biriga teng yoki tengmasligini bildiradi.
console.log(5*5 == "25"); // "25" string ma'lumoti bo'lib kelsa va 2 ta tenglik belgisi qo'yilsa, bunda faqat qiymatga qarab natija chiqaradi consoleda true qiymati qaytariladi.

console.log(5*5 === "25"); // "25" string ma'lumoti bo'lib kelsa va 3 ta tenglik belgisi qo'yilsa, bunda qiymat va ma'lumot turi bilan solishtiradi, consoleda false qiymati qaytariladi.
console.log("----------------");
// && = va , || = yoki

const isAge = true;
const isClose = true;
const isChecked = false;
const isAlpha = false;

console.log(isAge && isClose); // bunda(&&) o'zgaruvchilar qiymatlar bir xil ya'ni true qiymatiga ega bo'lsa, consoleda true qaytariladi, agarda o'zgaruvchilardan birortasi boshqa qiymat yoki false ga ega bo'lsa consoleda false qaytariladi.
// Qachonki && ni ishlatsak hamma operatorlar(o'zgaruvchilar) bir xil true qiymatiga ega bo'lishi kerak. va consoleda true qaytaradi.

console.log(isAlpha || isChecked); // bunda(||) o'zgaruvchilar qiymatlari ichida bitta true bo'lsa va qolganlari false bo'lsa consoleda true qaytariladi. agar hammasi false bo'lsa consoleda false qaytariladi.

console.log("----------------");

// ! - bu belgini operatorlar(o'zgaruvchilar) oldidan ishlatsak uni teskari qiymatga almashtiradi.

const axmed = true;
console.log(!axmed);

console.log("----------------");

// !=  teng emasmi ma'nosida
console.log(2+2*2 === 8); // false qaytaradi
console.log(2+2*2 != 8); // teng emasmi deb so'rayapti va consoleda true qiymati qaytariladi.

// !== teng emasligini ma'lumot turiga qarab aniqlidi.



