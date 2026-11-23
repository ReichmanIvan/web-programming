// Задание 2, вариант 14. Автор: Райхман И. А.
// Сценарий выводит в области подвала (footer) текущее время,
// обновляемое каждую секунду с помощью setInterval.
// Повторное нажатие кнопки останавливает таймер.
"use strict";

document.addEventListener("DOMContentLoaded", function () {
  // Ссылки на элементы страницы
  const btnClock = document.getElementById("btnClock");
  const clock = document.getElementById("clock");

  // Идентификатор таймера; null — таймер не запущен
  let timerId = null;

  // Выводит текущее время в подвал
  function showTime() {
    const now = new Date();
    clock.textContent = "Текущее время: " + now.toLocaleTimeString("ru-RU");
  }

  // Обработчик кнопки: запуск или остановка часов
  function toggleClock() {
    if (timerId === null) {
      showTime();                              // время появляется сразу
      timerId = setInterval(showTime, 1000);   // и обновляется каждую секунду
      btnClock.textContent = "Остановить время";
    } else {
      clearInterval(timerId);                  // остановка таймера
      timerId = null;
      btnClock.textContent = "Показать время";
      clock.textContent += " (часы остановлены)";
    }
  }

  // Назначение обработчика события click
  btnClock.addEventListener("click", toggleClock);
});
