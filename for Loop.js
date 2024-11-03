for (let i = 0; i <= 10; i += 2) {
  console.log(i);
}
const limit = 10; 
Array.from({ length: Math.floor(limit / 2) + 1}, (_,i) => i * 2).forEach(console.log);