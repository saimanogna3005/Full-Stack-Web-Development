localStorage.setItem('name',"Girish")

const P= ["Sai","Vaishu","Kesavapriya","Shakthisree","Sreeashika"]
localStorage.setItem('employees',JSON.stringify(P));

sessionStorage.setItem('name',"girish");
sessionStorage.setItem('age',25);

console.log(localStorage.getItem('name'))
console.log(localStorage.getItem('employees'))
console.log(P)