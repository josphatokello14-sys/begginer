//max to grade converter function
function grade_converter() {
max = document.getElementById("collect").value
max = parseInt(max)
if (max < 0) {
    document.getElementById("graderesult").innerText = `invalid max`
}
else if (max <= 29) {
    document.getElementById("graderesult").innerText = `E`
  
    document.getElementById("comment").innerText=`That's bad,stop being lazy just workhard and be smart`
}
else if (max >= 30 && max <= 34) {
    document.getElementById("graderesult").innerText = `D-`
    document.getElementById("comment").innerText=`far far behind,you need to atleast work hard`
}
else if (max >= 35 && max <= 39) {
    document.getElementById("graderesult").innerText = `D`
    document.getElementById("comment").innerText=`you are far behind ,work hard`
}
else if (max >= 40 && max <= 44) {
    document.getElementById("graderesult").innerText = `D+`
    document.getElementById("comment").innerText=`you are really behind,work hard`
}
else if (max >= 45 && max <= 49) {
    document.getElementById("graderesult").innerText = `C-`
    document.getElementById("comment").innerText=`you are far much lower but still you can make it to the top`
}
else if (max >= 50 && max <= 54) {
    document.getElementById("graderesult").innerText = `C`
    document.getElementById("comment").innerText=`Not that bad,you can make it,keep it up`
}
else if (max >= 55 && max <= 59) {
    document.getElementById("graderesult").innerText = `C+`
    document.getElementById("comment").innerText=`Not bad, keep it up`
}
else if (max >= 60 && max <= 64) {
    document.getElementById("graderesult").innerText = `B-`
    document.getElementById("comment").innerText=`Good trial,keep it up`
}
else if (max >= 65 && max <= 69) {
    document.getElementById("graderesult").innerText = `B`
    document.getElementById("comment").innerText=`Good result!Keep it up`
}
else if (max >= 70 && max <= 74) {
    document.getElementById("graderesult").innerText = `B+`
    document.getElementById("comment").innerText=`Awesome! That's good,keep the pase up`
}
else if (max >= 75 && max <= 79) {
    document.getElementById("graderesult").innerText = `A-`
    document.getElementById("comment").innerText=`Excellent! That's awesome,keep going `
}
else if (max >= 80 && max <= 100) {
    document.getElementById("graderesult").innerText = `A`
    document.getElementById("comment").innerText=`Excellent! You are a genius`
}
else{
   document.getElementById("graderesult").innerText =  `invalid max`
}
}

 

