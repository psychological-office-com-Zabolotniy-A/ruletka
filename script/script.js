document.getElementById('spinButton').addEventListener('click', function () {
    // Сгенерировать случайное число для поворота
    const randomDegree = Math.floor(Math.random() * 360) + 720; // Минимум 720 градусов, чтобы колесо сильно крутилось
  
    // Применить трансформацию к колесу
    const wheel = document.getElementById('wheel');
    wheel.style.transform = `rotate(${randomDegree}deg)`;
  
    // Вычислить результат
    setTimeout(function () {
      const resultIndex = Math.floor((randomDegree % 360) / (360 / 37)); // Определить какой сектор
      const numbers = document.querySelectorAll('.number');
      const resultText = numbers[resultIndex].textContent;
      document.getElementById('result').textContent = `Результат: ${resultText}`;
    }, 4000); // Задержка, чтобы результат отображался после завершения анимации
  });
  