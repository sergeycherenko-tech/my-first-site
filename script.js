const title = document.getElementById('title');
const btn = document.getElementById('changeBtn');

let toggled = false;

btn.addEventListener('click', () => {
  toggled = !toggled;
  title.textContent = toggled
    ? 'Текст изменился! 🎯'
    : 'Привет! Всё работает 👋';
  console.log('Кнопка нажата, toggled =', toggled);
});
