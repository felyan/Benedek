/* let aboutMe = document.querySelector('#about_me.d2');

aboutMe.addEventListener('mouseover', function (e) {
    aboutMe.classList.add('blue_bg');
    
    const newB = document.createElement('b');
    newB.append('Rólam');
});

aboutMe.addEventListener('mouseout', function (e) {
    aboutMe.classList.remove('blue_bg');
});




const langEl = document.querySelector('.langWrap');
const link = document.querySelectorAll('.langLink');
const home = document.querySelectorAll('.home');
const about = document.querySelectorAll('.about');
const galery = document.querySelectorAll('.galery');
const contact = document.querySelectorAll('.contact');
const cardTitle = document.querySelector('.cardTitle');
const cardText = document.querySelector('.cardText');

link.forEach(el => {
    el.addEventListener('click', () => {
        langEl.querySelector('.active').classList.remove('active');
        el.classList.add('active');

        const attr = el.getAttribute('language');

        home.textContent = data[attr].home;
        about.textContent = data[attr].about;
        galery.textContent = data[attr].galery;
        contact.textContent = data[attr].contact;
        cardTitle.textContent = data[attr].cardTitle;
        cardText.textContent = data[attr].cardText;
    });
});

let data = {
    "hun":
    {
        "home": "Főoldal",
        "about": "Rólam",
        "galery": "Galéria",
        "contact": "Kapcsolat",
        "cardTitle": "Rólam",
        "cardText": "Kállai Benedek vagyok, 19 éves, és a Budapesti Műszaki- és Gazdaságtudományi Egyetem hallgatója. Ipari termék- és formatervezői szakon tanulok. Számos dolog érdekel, több is mint amennyire időm van. Elhivatott hajómakett építő és tervező vagyok már 7 éve, innen jött az elhatározás is, hogy a jövőben is a hajókkal, kiváltképp a vitorlás hajókkal akarok foglalkozni. Az alapdiploma megszerzése után tanulmányaimat Olaszországban akarom folytatni, ilyen irányú mesterképzésen. Másik szenvedélyem a gördeszkázás és a falmászás. A szabadidőmet különböző képzőművészeti tevékenységekkel töltöm szívesen, a teljesség igénye nélkül: a makettozás melett szoktam pirográffal égetni, festeni, rajzolni. Tagja vagyok a MensaHungarIQa-nak."
    },
    "eng":
    {
        "home": "Home",
        "about": "About",
        "galery": "Galery",
        "contact": "Contact",
        "cardTitle": "About",
        "cardText": "I am Benedek Kállai, 19 years old, and a student at the Budapest University of Technology and Economics. I am studying industrial product and design. I am interested in many things, more than I have time for. I have been a dedicated ship model builder and designer for 7 years, hence the decision that I want to deal with ships, especially sailing ships, in the future as well. After obtaining my bachelor's degree, I want to continue my studies in Italy, with a master's degree in this field. My other passion is skateboarding and wall climbing. I like to spend my free time with various fine art activities, without the need for completeness: in addition to modeling, I usually burn, paint and draw with pyrographs. I am a member of MensaHungarIQa."
    }
};

 */


// https://colorlib.com/preview/theme/seogo/

const buttonsWrapper = document.querySelector(".map");
const slides = document.querySelector(".inner");

buttonsWrapper.addEventListener("click", e => {
  if (e.target.nodeName === "BUTTON") {
    Array.from(buttonsWrapper.children).forEach(item =>
      item.classList.remove("active")
    );
    if (e.target.classList.contains("first")) {
      slides.style.transform = "translateX(-0%)";
      e.target.classList.add("active");
    } else if (e.target.classList.contains("second")) {
      slides.style.transform = "translateX(-33.33333333333333%)";
      e.target.classList.add("active");
    } else if (e.target.classList.contains('third')){
      slides.style.transform = 'translatex(-66.6666666667%)';
      e.target.classList.add('active');
    }
  }
});
