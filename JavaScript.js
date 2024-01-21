document.addEventListener("DOMContentLoaded", function() {
    const burgerMenu = document.querySelector('.burger-menuD');
    const dropdownMenu = document.querySelector('.dropdown-menuD');

    burgerMenu.addEventListener('click', () => {
        dropdownMenu.classList.toggle('active');
    });
    
const slides = document.querySelectorAll('.slide')
for(const slide of slides){
slide.addEventListener('click', () =>{ 
    clearActiveClasses()
    
    slide.classList.add('active')

})
}
function clearActiveClasses(){
    slides.forEach((slide) =>{
        slide.classList.remove('active')
    })
}
});

function changeLanguage(lang) {
    if (lang === 'ru') {
      document.getElementById('a').textContent = 'Главная';
      document.getElementById('b').textContent = 'Контакты';
      document.getElementById('c').textContent = 'О нас';
      document.getElementById('d').textContent = 'Поддержать';
      document.getElementById('ru_kz').textContent = 'Ru';
      document.getElementById('glav').textContent = 'Главная';
      document.getElementById('kont').textContent = 'Контакты';
      document.getElementById('our').textContent = 'О нас';
      document.getElementById('podd').textContent = 'Поддержка';
      document.getElementById('foot-glav').textContent = 'Главная';
      document.getElementById('foot-our').textContent = 'О нас';
      document.getElementById('foot-podd').textContent = 'Поддержать';
      document.getElementById('foot-kont').textContent = 'Контакты';
      document.getElementById('sub-com').textContent = 'Мы являемся благотворительным проектом “Jyly Jurek”, который открылся в сентябре 2023 года.';
      document.getElementById('txt0').textContent = 'Наши цели на каждую четверть:';
      document.getElementById('txt1').textContent = 'Посещение детских домов';
      document.getElementById('txt2').textContent = 'Помощь нуждающимся семьям';
      document.getElementById('txt3').textContent = 'Посещение домов престарелых';

    } else if (lang === 'kz') {
        document.getElementById('a').textContent = 'Басты бет';
        document.getElementById('b').textContent = 'Байланыс';
        document.getElementById('c').textContent = 'Біз туралы';
        document.getElementById('d').textContent = 'Қолдау';
        document.getElementById('ru_kz').textContent = 'Kz';
        document.getElementById('glav').textContent = 'Басты бет';
        document.getElementById('our').textContent = 'Біз туралы';
        document.getElementById('kont').textContent = 'Байланыс';
        document.getElementById('podd').textContent = 'Қолдау';
        document.getElementById('foot-glav').textContent = 'Басты бет';
        document.getElementById('foot-our').textContent = 'Біз туралы';
        document.getElementById('foot-podd').textContent = 'Қолдау';
        document.getElementById('foot-kont').textContent = 'Байланыс';
        document.getElementById('sub-com').textContent = 'Біз 2023 жылдың қыркүйек айында ашылған “Jyly Jurek” қайырымдылық жобасымыз.';
        document.getElementById('txt0').textContent = 'Әр тоқсанға қойылатын мақсаттарымыз:';
        document.getElementById('txt1').textContent = 'Балалар үйіне бару';
        document.getElementById('txt2').textContent = 'Мұқтаж отбасыға көмектесу';
        document.getElementById('txt3').textContent = 'Қарттар үйін зиярет ету';
    }

  }

  document.addEventListener("DOMContentLoaded", function() {
    const quotes = [
        "Благотворительность — это инвестиция в счастье.",
        "Делиться — это заботиться.",
        "Сделай что-то сегодня, что сделает мир лучше завтра.",
        "Благотворительность — это язык любви.",
        "Маленькие добрые дела делают большие перемены.",
    ];

    // Функция для генерации случайной цитаты
    function generateQuote() {
        const quoteElement = document.getElementById("quote");
        const randomIndex = Math.floor(Math.random() * quotes.length);
        quoteElement.textContent = quotes[randomIndex];
    }

    // Вызываем функцию при загрузке страницы
    generateQuote();
});


    