
document.addEventListener("DOMContentLoaded", function () {
    document.querySelector(".toggler-btn").addEventListener("click", function () {
        document.getElementById("sidebar").classList.toggle("collapsed");
    });

    document.getElementById("inp").addEventListener("change", function () {
        let img = document.querySelector(".img");
        let text = document.getElementById("text");
        let text1 = document.getElementById("text1");
        let text2 = document.getElementById("text2");
        let text3 = document.getElementById("text3");
        let text4 = document.getElementById("text4");
        let text5 = document.getElementById("text5");
        let text6 = document.getElementById("text6");
        let box = document.getElementById("box");
        if (this.checked) {
            img.style.display = "block";
            text.classList.add("on")
            text.classList.remove("off")
            text1.classList.add("on")
            text1.classList.remove("off")
            text2.classList.add("on")
            text2.classList.remove("off")
            text3.classList.add("on")
            text3.classList.remove("off")
            text4.classList.add("on")
            text4.classList.remove("off")
            text5.classList.add("on")
            text5.classList.remove("off")
            text6.classList.add("on")
            text6.classList.remove("off")
            box.classList.add("boxOn");
            box.classList.remove("boxOff");
        } else {
            img.style.display = "none";
            text.classList.add("off")
            text.classList.remove("on")
            text1.classList.add("off")
            text1.classList.remove("on")
            text2.classList.add("off")
            text2.classList.remove("on")
            text3.classList.add("off")
            text3.classList.remove("on")
            text4.classList.add("off")
            text4.classList.remove("on")
            text5.classList.add("off")
            text5.classList.remove("on")
            text6.classList.add("off")
            text6.classList.remove("on")
            box.classList.add("boxOff");
            box.classList.remove("boxOn");
        }
    });

    document.getElementById('value').addEventListener('input', function () {
        const value = this.value;
        document.querySelector('a.btn').disabled = isNaN(value) || value.trim() === '';
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const hasVisited = sessionStorage.getItem('hasVisited');

    if (!hasVisited) {
        // First time visit, show loading animation
        document.body.classList.add('no-scroll');
        document.getElementById('loadingScreen').style.display = 'block';
        document.getElementById('initialView').style.display = 'block';

        setTimeout(function () {
            document.getElementById('loadingScreen').style.display = 'none';
            document.getElementById('initialView').classList.remove('hidden');
            document.getElementById('initialView').classList.add('show');
            document.body.classList.remove('no-scroll');
            sessionStorage.setItem('hasVisited', 'true');
        }, 9000); // Adjust the delay as needed

        setTimeout(function () {
            document.getElementById('initialView').classList.add('hidden');
        }, 9000); // Adjust the delay as needed
    } else {
        // User has visited before, skip loading animation
        document.getElementById('loadingScreen').style.display = 'none';
        document.getElementById('initialView').classList.remove('hidden');
        document.getElementById('initialView').classList.add('show');
        document.body.classList.remove('no-scroll');
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const counter3 = document.querySelector(".counter-3");

    for (let i = 0; i < 2; i++) {
        for (let j = 0; j < 10; j++) {
            const div = document.createElement("div");
            div.className = "num";
            div.textContent = j;
            counter3.appendChild(div);
        }
    }

    const finalDiv = document.createElement("div");
    finalDiv.className = "num";
    finalDiv.textContent = "0";
    counter3.appendChild(finalDiv);

    function animate(counter, duration, delay = 0) {
        const numHeight = counter.querySelector(".num").clientHeight;
        const totalDistance = (counter.querySelectorAll(".num").length - 1) * numHeight;
        gsap.to(counter, {
            y: -totalDistance,
            duration: duration,
            delay: delay,
            ease: "power2.inOut",
        });
    }

    animate(counter3, 5);
    animate(document.querySelector(".counter-2"), 6);
    animate(document.querySelector(".counter-1"), 2, 4);
});

gsap.to(".digit", {
    top: "-150px",
    stagger: {
        amount: 0.25,
    },
    delay: 6,
    duration: 1,
    ease: "power4.inOut",
});

gsap.from(".loader-1", {
    width: 0,
    duration: 6,
    ease: "power2.inOut",
});

gsap.from(".loader-2", {
    width: 0,
    delay: 1.9,
    duration: 2,
    ease: "power2.inOut",
});

gsap.to(".loader", {
    background: "none",
    delay: 6,
    duration: 0.1,
});

gsap.to(".loader-1", {
    rotate: 90,
    y: -50,
    duration: 0.5,
    delay: 6,
});

gsap.to(
    ".loader-2",
    {
        x: -75,
        y: 75,
        duration: 0.5,
    },
    "<"
);

gsap.to(".loader", {
    scale: 40,
    duration: 1,
    delay: 7,
    ease: "power2.inOut"
});

gsap.to(".loader", {
    rotate: 45,
    y: 500,
    x: 2000,
    duration: 1,
    delay: 7,
    ease: "power2.inOut",
});

gsap.to(".loading-screen", {
    opacity: 0,
    duration: 0.5,
    delay: 7.5,
    ease: "power1.inOut",
});

gsap.to("h1", 1.5, {
    delay: 7,
    y: -80,
    ease: "power4.inOut",
    stagger: {
        amount: 0.1,
    }
});

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



