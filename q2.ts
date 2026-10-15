export{};
let totalBonus: number = 0;

for (let year = 1; year <= 20; year++) {
    let yearlyBonus: number=year * 5000;
    totalBonus += yearlyBonus;
    console.log(`ปีที่: ${year} โบนัส = ${yearlyBonus} บาท`);
}
console.log(`ขอเเสดงความยินดีด้วย คุณทำงานได้ครบ 20 ปี ได้รับโบนัส${totalBonus}บาท `);