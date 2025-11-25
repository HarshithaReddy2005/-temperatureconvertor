function convertTemp() {
    let temp = document.getElementById("tempInput").value;
    let option = document.getElementById("unitSelect").value;
    let result = document.getElementById("result");

    if (temp === "") {
        result.innerHTML = "Please enter a value!";
        return;
    }

    temp = parseFloat(temp);
    let output;

    switch(option) {
        case "CtoF":
            output = (temp * 9/5) + 32;
            result.innerHTML = `${temp}°C = ${output.toFixed(2)}°F`;
            break;

        case "FtoC":
            output = (temp - 32) * 5/9;
            result.innerHTML = `${temp}°F = ${output.toFixed(2)}°C`;
            break;

        case "CtoK":
            output = temp + 273.15;
            result.innerHTML = `${temp}°C = ${output.toFixed(2)}K`;
            break;

        case "KtoC":
            output = temp - 273.15;
            result.innerHTML = `${temp}K = ${output.toFixed(2)}°C`;
            break;
    }
}
