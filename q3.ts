export{}
let weight: number[] = [15,5.5,4.2,8.9,23,16,12.5,2.7,27.5,30];
let overweight: number = 0;
let totalWeight: number = 0;
for (let i=0;i< weight.length;i++) {
    totalWeight += weight[i];
    if (weight[i]>=20) {
    overweight++;
    }
}
let averageWeight: number = totalWeight / weight.length;
console.log(`พัสดุมีน้ำหนัก ดังนี้ ${weight.join(", ")}`);
console.log(`พัสดุที่มีน้ำหนักเกินเกณฑ์: ${overweight} ชิ้น`);
console.log(`น้ำหนักเฉลี่ยของพัสดุ: ${averageWeight} กิโลกรัม`);
