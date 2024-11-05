
document.addEventListener("DOMContentLoaded", function () {
    document.querySelector(".toggler-btn").addEventListener("click", function () {
        document.getElementById("sidebar").classList.toggle("collapsed");
    });

    document.getElementById("inp").addEventListener("change", function () {
        let img = document.querySelector(".img");
        let text = document.getElementById("text");
        let text1 = document.getElementById("text1");
        let box = document.getElementById("box");
        if (this.checked) {
            img.style.display = "block";
            text.classList.add("on")
            text.classList.remove("off")
            text1.classList.add("on")
            text1.classList.remove("off")
            box.classList.add("boxOn");
            box.classList.remove("boxOff");
        } else {
            img.style.display = "none";
            text.classList.add("off")
            text.classList.remove("on")
            text1.classList.add("off")
            text1.classList.remove("on")
            box.classList.add("boxOff");
            box.classList.remove("boxOn");
        }
    });

    document.getElementById('value').addEventListener('input', function () {
        const value = this.value;
        document.querySelector('a.btn').disabled = isNaN(value) || value.trim() === '';
    });
});





document.getElementById("result2").innerText = "RESULT :"
function convert() {
    let value = document.getElementById('value').value;
    if (isNaN(value) || value.trim() === '') {
        document.getElementById('error').innerText = 'Please enter a valid number';
        document.getElementById('result').innerText = "";
        document.getElementById("result2").innerText = "RESULT :";
        return;
    }

    document.getElementById('error').innerText = '';
    document.getElementById('result2').innerText = "";
    document.getElementById('setting-icon').style.display = 'block';
    document.getElementById('setting-icon').classList.add('spin');
    document.getElementById('result').innerText = "";

    setTimeout(() => {
        let conversionType = document.getElementById('conversionType').value;
        let result;
        switch (conversionType) {
            case 'sqInchesToSqMillimeters':
                result = value * 645.16;
                break;
            case 'sqFeetToSqMeters':
                result = value * 0.092903;
                break;
            case 'sqYardsToSqMeters':
                result = value * 0.836127;
                break;
            case 'sqMilesToSqKilometers':
                result = value * 2.58999;
                break;
            default:
                result = 'Invalid conversion type';
        }
        document.getElementById('result').innerText = result.toFixed(2);
        document.getElementById('setting-icon').style.display = 'none';
        document.getElementById('setting-icon').classList.remove('spin');
        document.getElementById('result2').innerText = "";
    }, 5000);
}

function showFormula() {
    let conversionType = document.getElementById('conversionType').value;
    let formula;
    switch (conversionType) {
        case 'sqInchesToSqMillimeters':
            formula = "Formula: 1 sq inch = 645.16 sq millimeters";
            break;
        case 'sqFeetToSqMeters':
            formula = "Formula: 1 sq foot = 0.092903 sq meters";
            break;
        case 'sqYardsToSqMeters':
            formula = "Formula: 1 sq yard = 0.836127 sq meters";
            break;
        case 'sqMilesToSqKilometers':
            formula = "Formula: 1 sq mile = 2.58999 sq kilometers";
            break;
        default:
            formula = "";
    }
    document.getElementById('formula').innerText = formula;
}

window.onload = function () {
    const urlParams = new URLSearchParams(window.location.search);
    const section = urlParams.get('section');
    const dropdown = document.getElementById('conversionType');
    if (section && dropdown) {
        dropdown.value = section;
    }
    showFormula();  // Call your function to display the formula
}

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('loader100').style.display = 'none';
});

document.querySelectorAll('.sidebar-all').forEach(link => {
    link.addEventListener('click', function (event) {
        event.preventDefault(); // Prevent the default link behavior
        document.getElementById('loader100').style.display = 'block'; // Show the loader

        // Redirect to the clicked link's href after a short delay
        setTimeout(() => {
            window.location.href = this.href;
        }, 3000); // Increased delay time to 3000ms (3 seconds)
    });
});

window.addEventListener('load', function () {
    document.getElementById('loader100').style.display = 'none';
});

window.addEventListener('pageshow', function (event) {
    if (event.persisted) {
        document.getElementById('loader100').style.display = 'none';
    }
});
