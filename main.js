// 1-masala
// let kun = +prompt("Hafta kunini kiriting!")

// switch (kun) {
//     case 1:
//         console.log("Dushanba");
//         break;
//     case 2:
//         console.log("Seshanba");
//         break;
//     case 3:
//         console.log("Chorshanba");
//         break;
//     case 4:
//         console.log("Payshanba");
//         break;
//     case 5:
//         console.log("Juma");
//         break;
//     case 6:
//         console.log("Shanba");
//         break;
//     case 7:
//         console.log("Yakshanba");
//         break;
//     default:
//         console.log("xato kun kiritdingiz...");

//         break;
// }



// 2-masala
// let k = +prompt("k sonini kiriting!")

// switch (k) {
//     case 1:
//         console.log("Yomon");

//         break;
//     case 2:
//         console.log("qoniqarsiz");

//         break;
//     case 3:
//         console.log("qoniqarli");

//         break;
//     case 4:
//         console.log("yaxshi");

//         break;
//     case 5:
//         console.log("a'lo");

//         break;
//     default:
//         console.log("xato");

//         break;
// }


// 3-masala

// let oy = +prompt("oyni raqamini kiriting?")


// switch (oy) {
//     case 12:
//     case 1:
//     case 2:
//         console.log("Qish");
//         break;
//     case 3:
//     case 4:
//     case 5:
//         console.log("Baxor");
//         break;
//     case 6:
//     case 7:
//     case 8:
//         console.log("Yoz");
//         break;
//     case 9:
//     case 10:
//     case 11:
//         console.log("Kuz");
//         break;

//     default:
//         console.log("notogri oy");

//         break;
// }


// 4-masala

// let month = +prompt("Oy raqamini kiriting!")

// switch (month) {
//     case 1:
//         console.log("Yanvar: 31 kun");
//         break;
//     case 2:
//         console.log(" Fevral: 28 yoki 29 kun");
//         break;
//     case 3:
//         console.log("Mart: 31 kun");
//         break;
//     case 4:
//         console.log("Aprel: 30 kun");
//         break;
//     case 5:
//         console.log("May: 31 kun");
//         break;
//     case 6:
//         console.log("Iyun: 30 kun");
//         break;
//     case 7:
//         console.log("Iyul: 31 kun");
//         break;
//     case 8:
//         console.log("Avgust: 31 kun");
//         break;
//     case 9:
//         console.log(" Sentabr: 30 kun");
//         break;
//     case 10:
//         console.log(" Oktabr: 31 kun");
//         break;
//     case 11:
//         console.log(" Noyabr: 30 kun");
//         break;
//     case 12:
//         console.log(" Dekabr: 31 kun");
//         break;

//     default:
//         console.log("xato oy");

//         break;
// }



// 5-masala
// let a = +prompt("a sonini kiriting")

// let b = +prompt("b sonini kiriting")

// let v = +prompt("arifmetik qiymatning raqamini kiriting (1, 2, 3, 4)")

// switch (v) {
//     case 1:
//         console.log(a + b);
//         break;
//     case 2:
//         console.log(a - b);
//         break;
//     case 3:
//         console.log(a / b);
//         break;
//     case 4:
//         console.log(a * b);
//         break;
//     default:
//         console.log("EROR: Amalni tekshiring xatolik bor");

//         break;
// }

// 6-masala

// let birlik = +prompt("Uzunlik birligini kiriting (1-5): 1: desimetr 2: kilometr 3: metr 4: millimetr 5: santimetr")
// let uzunlik = +prompt("Uzunlik uchun son kiriting")

// let metr = 0

// switch (birlik) {
//     case 1:
//         console.log(metr = uzunlik / 10);
//         break;
//     case 2:
//         console.log(metr = uzunlik * 1000);
//         break;
//     case 3:
//         console.log(metr = uzunlik * 1) ;
//         break;
//     case 4:
//         console.log(metr = uzunlik / 1000);
//         break;
//     case 5:
//         console.log(metr = uzunlik / 100);
//         break;
//     default:
//         console.log("xatolik ro'y berdi");

//         break;
// }


// 7 - masala

// let birlik = +prompt("Og'irlik birliklarini kiriting: 1: Kilogram 2: Milligram 3: gramm 4: tonna 5: sentner")

// let son = +prompt("Son kiriting (hozirgi soningiz kgda ifodalanadi)")

// let kg = 0

// switch (birlik) {
//     case 1:
//         console.log(kg = son * 1 + "Kilogram");
//         break;
//     case 2:
//         console.log(kg = son * 1000000 + "Milligram");
//         break;
//     case 3:
//         console.log(kg = son * 1000 + "gramm");
//         break;
//     case 4:
//         console.log(kg = son / 1000 + "Tonna");
//         break;
//     case 5:
//         console.log(kg = son / 100 + "Sentner");
//         break;
//     default:
//         console.log("xato son");
//         break;
// }



// 8 - masala

// if (oy < 1 || oy > 12 || kun < 0 || kun > 31) {
//     console.log("xatolik roy berdi");
// } else {
//     switch (oy) {
//         case 1:
//             jami = 31 + kun
//             break;
//         case 2:
//             jami = 28 + kun
//             break;
//         case 3:
//             jami = 31 + kun
//             break;
//         case 4:
//             jami = 30 + kun
//             break;
//         case 5:
//             jami = 31 + kun
//             break;
//         case 6:
//             jami = 30 + kun
//             break;
//         case 7:
//             jami = 31 + kun
//             break;
//         case 8:
//             jami = 31 + kun
//             break;
//         case 9:
//             jami = 30 + kun
//             break;
//         case 10:
//             jami = 31 + kun
//             break;
//         case 11:
//             jami = 30 + kun
//             break;
//         case 12:
//             jami = 31 + kun
//             break;
//         default:
//             break;
//     }
//     console.log(`yil davomida shuncha kun  o'ti : ${jami}`);
// }


// 9-masala

// let D = +prompt("D kunni kiriting")
// let M = +prompt("M kunni kiriting")


// if (M < 1 || M > 12 || D < 1) {
//     console.log("Noto'g'ri sana kiritildi!");
// }  else {
//     switch (M) {
//         case 1: case 3: case 5: case 7: case 8: case 10: case 12:
//         if(D < 31) {
//             D++
//         } else {
//             D = 1
//             M++
//         }
//             break;
//         case 2:
//             if(D < 28){
//                 D++
//             } else {
//                 D = 1
//                 M++
//             }
//         break;
//         case 4: case 6: case 9: case 11: 
//         if(D < 30) {
//             D++
//         } else {
//             D = 1
//             M++
//         }
//         break;
//         case 12:
//                 if (D < 31) {
//                     D++;
//                 } else {
//                     D = 1;
//                     M = 1;
//                 }
//                 break;

//         default:
//             console.log("Noto'g'ri sana!");
//             break;
//     }
//     console.log(`Ertangi sana: ${D}-${M}`);
// }

// 10-masala


// let Y = prompt("Robot yo'nalishini kiriting! s-shimol, j-janub, g-garb, sh-sharq")
// let K = +prompt("Kamanadani kiriting! 0.1.2")
// let y = "xato ishlandi"
// let k = "xato ishlandi"




// if (k > 2 && k < 0) {
//     console.log("siz xato kiritdingiz!");
// } else {

//     switch (Y) {
//         case "s":
//             y = "Yo'nalish shimol";
//             break;
//         case "j":
//             y = "Yo'nalish janub";
//             break;
//         case "g":
//             y = "Yo'nalish g'arb";
//             break;
//         case "sh":
//             y = "Yo'nalish sharq";
//             break;
//         default:
//             y = "yo'nalish xato kiritildi"
//             break;
//     }

//     switch (K) {
//         case 0:
//             k = "xarakatni davom ettiring";
//             break;
//         case 1:
//             k = "Chapga buril";
//             break;
//         case 2:
//             k = "ongga buril";
//             break;
//         default:
//             console.log("kamanda xato kiritildi");
//             break;
//     }
//     console.log(`${y}    ${k}`);
// }



