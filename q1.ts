let cupSize: string = "M";
let ownCup: boolean = true;
let basePrice: number = 0;
if (cupSize === "S") {
    basePrice = 60;
} else if (cupSize === "M") {
    basePrice = 80;
} else if (cupSize === "L") {
    basePrice = 100;
}
let discountPercent: number = ownCup ? 5 : 0;
let discountAmount: number = (basePrice * discountPercent) / 100;
let netPrice: number = basePrice-discountAmount;

console.log(`กาแฟขนาด ${cupSize} ราคาปกติ ${basePrice} บาท`);
console.log(`ได้รับส่วนลด ${discountPercent}% ราคาสุทธิ ${netPrice}  บาท`);