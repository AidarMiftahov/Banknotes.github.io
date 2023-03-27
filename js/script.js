const slides = document.querySelectorAll('.slide');
const prevSlideBtn = document.querySelector('.prev-slide');
const nextSlideBtn = document.querySelector('.next-slide');
let currentSlide = 0;

// Функция для показа слайда
function showSlide() {
    // Скрываем все слайды
    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove('active');
    }
    // Показываем текущий слайд
    slides[currentSlide].classList.add('active');
}

// Функция для переключения на предыдущий слайд
function prevSlide() {
    currentSlide--;
    if (currentSlide < 0) {
        currentSlide = slides.length - 1;
    }
    showSlide();
}

// Функция для переключения на следующий слайд
function nextSlide() {
    currentSlide++;
    if (currentSlide > slides.length - 1) {
        currentSlide = 0;
    }
    showSlide();
}

// Обработчики событий для кнопок переключения слайдов
prevSlideBtn.addEventListener('click', prevSlide);
nextSlideBtn.addEventListener('click', nextSlide);

// Показываем первый слайд при загрузке страницы
showSlide();
