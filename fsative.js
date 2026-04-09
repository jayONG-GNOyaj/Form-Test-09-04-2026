function ffunction() {
    //dengan bantuan AI
    let name = document.getElementById('name').value;
    if (name === "") name = "Name Not Found";
    let grade = document.getElementById('grade').value;
    if (grade === "") name = "Class Not Found";
    let gender = "Gender Not Found";
    if (document.getElementById("g1").checked) gender = "Male";
    if (document.getElementById("g2").checked) gender = "Female";
    let extra = "Gender Not Found";
    if ((document.getElementById("x1").checked) || (document.getElementById("x2").checked) || (document.getElementById("x3").checked)) extra = "";
    if (document.getElementById("x1").checked) extra += "Futsal, ";
    if (document.getElementById("x2").checked) extra += "Basketball, ";
    if (document.getElementById("x3").checked) extra += "Speech";
    let period = "Time Not Found";
    if (document.getElementById("t1").checked) period = "07:00-12:00";
    if (document.getElementById("t2").checked) period = "12:30-17:00";
    if (document.getElementById("t3").checked) period = "17:30-20:30";
    if (document.getElementById("t4").checked) period = "Mixed(Flexible)";
    let show = "Name: " + name + "<br>Class: " + grade + "<br>Gender: " + gender + "<br>Extracurricular: " + extra + "<br>Time: " + period;
    document.getElementById("result").innerHTML = show;
    element = document.getElementById("result");
    element.style.backgroundColor = "yellow";
}

