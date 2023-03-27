const slides2 = document.querySelectorAll('.slide-2');
const prevSlideBtn2 = document.querySelector('.prev-slide-2');
const nextSlideBtn2 = document.querySelector('.next-slide-2');
let currentSlide2 = 0;

// Функция для показа слайда
function showSlide2() {
    // Скрываем все слайды
    for (let i = 0; i < slides2.length; i++) {
        slides2[i].classList.remove('active');
    }
    // Показываем текущий слайд
    slides2[currentSlide2].classList.add('active');
}

// Функция для переключения на предыдущий слайд
function prevSlide2() {
    currentSlide2--;
    if (currentSlide2 < 0) {
        currentSlide2 = slides2.length - 1;
    }
    showSlide2();
}

// Функция для переключения на следующий слайд
function nextSlide2() {
    currentSlide2++;
    if (currentSlide2 > slides2.length - 1) {
        currentSlide2 = 0;
    }
    showSlide2();
}

// Обработчики событий для кнопок переключения слайдов
prevSlideBtn2.addEventListener('click', prevSlide2);
nextSlideBtn2.addEventListener('click', nextSlide2);

// Показываем первый слайд при загрузке страницы
showSlide2();
