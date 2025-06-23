document.addEventListener('DOMContentLoaded', function() {
    // Находим все кнопки, которые должны открывать модальное окно
    const openModalBtns = document.querySelectorAll('.js-open-consult-modal');
    const modalBackdrop = document.getElementById('consult-modal');

    // Если на странице нет модального окна, ничего не делаем
    if (!modalBackdrop) {
        return;
    }

    const closeModalBtn = modalBackdrop.querySelector('.modal-close-btn');

    // Функция для открытия модального окна
    function openModal(event) {
        event.preventDefault();
        modalBackdrop.style.display = 'flex';
    }

    // Функция для закрытия модального окна
    function closeModal() {
        modalBackdrop.style.display = 'none';
    }

    // Назначаем обработчик на все кнопки открытия
    openModalBtns.forEach(btn => {
        btn.addEventListener('click', openModal);
    });

    // Закрываем окно по клику на крестик
    if (closeModalBtn) {
        closeModalBtn.addEventListener('click', closeModal);
    }

    // Закрываем окно по клику на затемненную область
    modalBackdrop.addEventListener('click', function(event) {
        if (event.target === modalBackdrop) {
            closeModal();
        }
    });

    // Закрываем окно по нажатию клавиши Esc
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape' && modalBackdrop.style.display === 'flex') {
            closeModal();
        }
    });

    // --- Слайдер из 3 слайдов по 9 технологий ---
    const slides = document.querySelectorAll('.tech-slide');
    const leftBtn = document.getElementById('simpleLeft');
    const rightBtn = document.getElementById('simpleRight');
    let currentSlide = 0;
    function showSlide(idx) {
        slides.forEach((slide, i) => {
            slide.style.display = (i === idx) ? '' : 'none';
        });
    }
    if (leftBtn && rightBtn && slides.length) {
        leftBtn.addEventListener('click', () => {
            currentSlide = (currentSlide - 1 + slides.length) % slides.length;
            showSlide(currentSlide);
        });
        rightBtn.addEventListener('click', () => {
            currentSlide = (currentSlide + 1) % slides.length;
            showSlide(currentSlide);
        });
        showSlide(currentSlide);
    }
}); 