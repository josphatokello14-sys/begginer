//let birthDate = prompt('Enter your birth date')
function agee() {
let birthDate
birthDate = document.getElementById("enter").value
birthDate = parseInt(birthDate)
let age = 2025 - birthDate
document.getElementById("text").innerText = `YOU ARE ${age} YEARS OLD`
}