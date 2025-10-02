function temperature(){
temp = document.getElementById("tempinput").value
temp = Number(temp)
if (temp < 0){
    document.getElementById("text").innerText = "temperature is extremely cold,please stay indoors";
    image = document.getElementById("myimage");
    image.src = "coldertemp.jpg";
}
else if (temp < 15){
    document.getElementById("text").innerText = "it is a cold temperature,wear warm clothes";
    image = document.getElementById("myimage");
    image.src = "coldtemp.jpg";
}
else if (temp < 25){
    document.getElementById("text").innerText = "temperature is normal, enjoy your lovely day";
    image = document.getElementById("myimage");
    image.src = "moderatetemp.jpg";
}
else if (temp < 40){
    document.getElementById("text").innerText = "it is a hot temperature,wear vests";
    image = document.getElementById("myimage");
    image.src = "hottemp.jpg";
}
else if (temp >= 40){
    document.getElementById("text").innerText = "temperature is extremely hot,please find a coder please";
    image = document.getElementById("myimage");
    image.src = "hottertemp.jpg";
}
else{
    image = document.getElementById("myimage");
    image.src = "beauty.jpg"
}
}