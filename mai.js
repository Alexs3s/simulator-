
document.addEventListener("DOMContentLoaded", function() {
  let jes = [{
          "inglih": "father",
          "rus": "отец"
      },
      {
          "inglih": "boy",
          "rus": "мальчик"
      },
      {
        "inglih": "with",
        "rus": "с"
    },
    {
      "inglih": "that",
      "rus": "что"
  },
  {
    "inglih": "t",
    "rus": "ну"
},
  ];
  let inp = document.querySelector("#iin");
  let word = document.querySelector(".word");
  let aut = document.querySelector(".aut")
  let batt = document.querySelector(".sadm");
  let b = -1;

  function more() {
      b = ++b % jes.length;
      let ru = jes[b].rus;
      word.innerHTML = `${ru}`;
      aut.innerHTML = '';
      inp.value='';
      batt.dataset.txt = "Go"
  }
  more();
  batt.addEventListener("click", function() {
      let res = inp.value;
      let wo = jes[b].inglih;
      if (batt.dataset.txt === "More") more();
      else if (res === wo) {
          aut.classList.remove("coll");
          batt.dataset.txt = "More";
          aut.innerHTML = `Молодец!Все правильно`;
          
      } else {
          aut.classList.add("coll")
          aut.innerHTML = `Не верно,попробуй еще`;
      };
  })
});

