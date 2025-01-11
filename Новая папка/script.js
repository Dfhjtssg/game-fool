// Получаем все кнопки навигации и экраны
const navItems = document.querySelectorAll(".nav-item");
const screens = document.querySelectorAll(".screen");

// Добавляем обработчик событий для каждой кнопки навигации
navItems.forEach((item) => {
    item.addEventListener("click", () => {
        // Удаляем активный класс со всех кнопок
        navItems.forEach((nav) => nav.classList.remove("active"));
        // Добавляем активный класс на текущую кнопку
        item.classList.add("active");

        // Определяем экран, который нужно показать
        const targetScreen = item.getAttribute("data-screen");

        // Скрываем все экраны
        screens.forEach((screen) => screen.classList.remove("active"));
        // Показываем выбранный экран
        document.getElementById(targetScreen).classList.add("active");
    });
});
