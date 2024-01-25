function headerAnchor() {
    document.querySelector('#header').scrollIntoView({
        behavior: 'smooth'
    })
};

function footerAnchor() {
    document.querySelector('#footer').scrollIntoView({
        behavior: 'smooth'
      })
};

function aboutAnchor() {
    document.querySelector('#about').scrollIntoView({
        behavior: 'smooth'
    })
};

document.addEventListener('DOMContentLoaded', function() {
    const reviews = [
        ["Анна Иванова", "“Основы программирования”", "Мы с дочкой долго сомневались с выбором подходящего тарифа, но отзывчивая поддержка всё объяснила и помогла нам определиться! Уроки увлекательные и понятные, а учителя отвечают на любой вопрос! В итоге мы все остались очень довольными, большое спасибо!!"],
        ["Борис Харитонович", "“Ввод в дизайн”","Интерактивные занятия долго держат внимание ребёнка. Учавствуя в групповых проектах наша дочка завела новых знакомых. Ей нравится, а мы только и рады!"],
        ["Сергей Лихачёв", "“Продвинутый игрострой”", "Заранее поговорил с поддержкой, поспрашивал что да как. Сын увлёкся видеоиграми, ну вот я и решил ему подарок сделать... В итоге даже самому интересно стало. Советую."]
    ];
    let currentIndex = 0;
    function updateReview() {
        document.querySelector('#name').textContent = reviews[currentIndex][0];
        document.querySelector('#course').textContent = reviews[currentIndex][1];
        document.querySelector('#review').textContent = reviews[currentIndex][2];
    }
    document.querySelector('#next').addEventListener('click', function() {
        currentIndex = (currentIndex + 1) % reviews.length;
        updateReview();
    });
    document.querySelector('#previous').addEventListener('click', function() {
        currentIndex = (currentIndex - 1 + reviews.length) % reviews.length;
        updateReview();
    });
    updateReview();
});

document.querySelector("#myButton1").addEventListener("click", function () {
    myPopup1.classList.add("show");
});
closePopup1.addEventListener("click", function () {
    myPopup1.classList.remove("show");
});
window.addEventListener("click", function (event) {
    if (event.target == myPopup1) {
        myPopup1.classList.remove("show");
    }
});
document.querySelector("#myButton2").addEventListener("click", function () {
    myPopup2.classList.add("show");
});
closePopup2.addEventListener("click", function () {
    myPopup2.classList.remove("show");
});
window.addEventListener("click", function (event) {
    if (event.target == myPopup2) {
        myPopup2.classList.remove("show");
    }
});
document.querySelector("#myButton3").addEventListener("click", function () {
    myPopup3.classList.add("show");
});
closePopup3.addEventListener("click", function () {
    myPopup3.classList.remove("show");
});
window.addEventListener("click", function (event) {
    if (event.target == myPopup3) {
        myPopup3.classList.remove("show");
    }
});
document.querySelector("#myButton4").addEventListener("click", function () {
    myPopup4.classList.add("show");
});
closePopup4.addEventListener("click", function () {
    myPopup4.classList.remove("show");
});
window.addEventListener("click", function (event) {
    if (event.target == myPopup4) {
        myPopup4.classList.remove("show");
    }
});
document.querySelector("#myButton5").addEventListener("click", function () {
    myPopup5.classList.add("show");
});
closePopup5.addEventListener("click", function () {
    myPopup5.classList.remove("show");
});
window.addEventListener("click", function (event) {
    if (event.target == myPopup5) {
        myPopup5.classList.remove("show");
    }
});
document.querySelector("#myButton6").addEventListener("click", function () {
    myPopup6.classList.add("show");
});
closePopup6.addEventListener("click", function () {
    myPopup6.classList.remove("show");
});
window.addEventListener("click", function (event) {
    if (event.target == myPopup6) {
        myPopup6.classList.remove("show");
    }
});
document.querySelector("#myButton7").addEventListener("click", function () {
    myPopup7.classList.add("show");
});
closePopup7.addEventListener("click", function () {
    myPopup7.classList.remove("show");
});
window.addEventListener("click", function (event) {
    if (event.target == myPopup7) {
        myPopup7.classList.remove("show");
    }
});
document.querySelector("#myButton8").addEventListener("click", function () {
    myPopup8.classList.add("show");
});
closePopup8.addEventListener("click", function () {
    myPopup8.classList.remove("show");
});
window.addEventListener("click", function (event) {
    if (event.target == myPopup8) {
        myPopup8.classList.remove("show");
    }
});
document.querySelector("#myButton9").addEventListener("click", function () {
    myPopup9.classList.add("show");
});
closePopup9.addEventListener("click", function () {
    myPopup9.classList.remove("show");
});
window.addEventListener("click", function (event) {
    if (event.target == myPopup9) {
        myPopup9.classList.remove("show");
    }
});

document.querySelector("#blink").animate(
    [{opacity: 1}, {opacity: 0.1}],
    {
        duration: 450,
        easing: "ease-in",
        iterations: Infinity,
        direction: "alternate",
    },
);

