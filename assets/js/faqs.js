
document.addEventListener("DOMContentLoaded", function () {
    document.querySelector(".toggler-btn").addEventListener("click", function () {
        document.getElementById("sidebar").classList.toggle("collapsed");
    });

    document.getElementById("inp").addEventListener("change", function () {
        let img = document.querySelector(".img");
        let text = document.getElementById("text");
        if (this.checked) {
            img.style.display = "block";
            text.classList.add("on")
            text.classList.remove("off")
        } else {
            img.style.display = "none";
            text.classList.add("off")
            text.classList.remove("on")
        }
    });

    document.getElementById('value').addEventListener('input', function () {
        const value = this.value;
        document.querySelector('a.btn').disabled = isNaN(value) || value.trim() === '';
    });
});

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('loader').style.display = 'none';
});

document.querySelectorAll('.sidebar-all').forEach(link => {
    link.addEventListener('click', function (event) {
        event.preventDefault(); // Prevent the default link behavior
        document.getElementById('loader').style.display = 'block'; // Show the loader

        // Redirect to the clicked link's href after a short delay
        setTimeout(() => {
            window.location.href = this.href;
        }, 3000); // Increased delay time to 3000ms (3 seconds)
    });
});

window.addEventListener('load', function () {
    document.getElementById('loader').style.display = 'none';
});

window.addEventListener('pageshow', function (event) {
    if (event.persisted) {
        document.getElementById('loader').style.display = 'none';
    }
});
