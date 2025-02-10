"use strict";

// Modellerin listesi
let models = [
  {
    name: "ID.7",
    image: "img/1.jpg",
    description: "Elektriğin yeniden doğuşu.",
    link: "https://binekarac.vw.com.tr/tr/modeller-fiyatlar/arac-modelleri/id-7.html",
  },
  {
    name: "ID.4",
    image: "img/2.jpg",
    description: "Elektriğin yeniden doğuşu.",
    link: "https://binekarac.vw.com.tr/tr/modeller-fiyatlar/arac-modelleri/id4.html",
  },
  {
    name: " Yeni Golf R",
    image: "img/3.jpg",
    description: "Güç tutkunlarına.",
    link: "https://binekarac.vw.com.tr/tr/modeller-fiyatlar/arac-modelleri/vw-yeni-golf-r.html",
  },
  {
    name: "Yeni Golf GTR",
    image: "img/4.jpg",
    description: "Kırmızı çizgimiz. ",
    link: "https://binekarac.vw.com.tr/tr/modeller-fiyatlar/arac-modelleri/yeni-golf-gti.html",
  },
  {
    name: "Yeni Golf",
    image: "img/5.jpg",
    description: "Her gün, ilk günkü heyecan.",
    link: "https://binekarac.vw.com.tr/tr/modeller-fiyatlar/arac-olusturucu.html/__app/yeni-golf.app",
  },
];

// Başlangıç indeksi ve slayt sayısı
let index = 0;
let slideCount = models.length;
let interval;

// Ayarlar
let settings = {
  duration: "2000", // Slayt geçiş süresi
  random: false, // Rastgele slayt geçişi
};

// Başlatma fonksiyonu
init(settings);

// Sol ok tıklama olayı
document
  .querySelector(".fa-arrow-circle-left")
  .addEventListener("click", function () {
    index--;
    showSlide(index);
    console.log(index);
  });

// Sağ ok tıklama olayı
document
  .querySelector(".fa-arrow-circle-right")
  .addEventListener("click", function () {
    index++;
    showSlide(index);
    console.log(index);
  });

// Oklar üzerine gelindiğinde slayt geçişini durdurma
document.querySelectorAll(".arrow").forEach(function (item) {
  item.addEventListener("mouseenter", function () {
    clearInterval(interval);
  });
});

// Oklar üzerinden çıkıldığında slayt geçişini başlatma
document.querySelectorAll(".arrow").forEach(function (item) {
  item.addEventListener("mouseleave", function () {
    init(settings);
  });
});

// Başlatma fonksiyonu
function init(settings) {
  let prev;
  interval = setInterval(function () {
    if (settings.random) {
      // Rastgele slayt seçimi
      do {
        index = Math.floor(Math.random() * slideCount);
      } while (index == prev);
      prev = index;
    } else {
      // Sıralı slayt seçimi
      if (slideCount == index + 1) {
        index = 0;
      }
      showSlide(index);
      console.log(index);

      index++;
    }

    showSlide(index);
  }, settings.duration);
}

// Slayt gösterme fonksiyonu
function showSlide(i) {
  index = i;

  if (i < 0) {
    index = slideCount - 1;
  }
  if (i >= slideCount) {
    index = 0;
  }
  document.querySelector(".card-title").textContent = models[index].name;
  document
    .querySelector(".card-img-top")
    .setAttribute("src", models[index].image);
  document.querySelector(".card-text").textContent = models[index].description;
  document.querySelector(".card-link").setAttribute("href", models[index].link);
}
