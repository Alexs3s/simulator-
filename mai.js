
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

/*let jes=[
  {"inglih":"father","rus":"отец"},
  {"inglih":"boy" ,"rus":"мальчик"}, 
];

let inp=document.querySelector("#iin");
let word=document.querySelector(".word");
let aut=document.querySelector(".aut")
let batt=document.querySelector(".sadm");

let b=-1;


let wo=jes[b].inglih;
let ru=jes[b].rus;
word.innerHTML=`${ru}`;
  
 batt.addEventListener( "click",function(){
    let res=inp.value;
    if(res==wo){
      if(aut.classList.contains("coll")){
        aut.classList.remove("coll");
                  }
    aut.innerHTML=`Молодец!Все правильно`;
  }
   else {
       aut.classList.add("coll")
       aut.innerHTML=`Не верно,попробуй еще`;
       
  };})

  
  
/*for (let i = 0; i < jes.length; i++) {
  console.log(i);
  let t=jes[i] ;
  let trans;
  for (let value of Object.values(t)) {
     trans=value; // John, затем 30
     word.innerHTML=`${trans}`;
  }

  
  
  let d= t["inglih"];
  batt.addEventListener("click",function(){
    let res=inp.value;
    
    if(res==d){if(aut.classList.contains("coll")){
        aut.classList.remove("coll");
    };
    aut.innerHTML=`Молодец!Все правильно`;}
   else {
       aut.classList.add("coll")
       aut.innerHTML=`Не верно,попробуй еще`;
       
   }
   })
 


}

//код ниже не доделанный проверка вводимых знаков на лету
/*let  ns=te.length;
let s=inp.addEventListener("input",function(){
    let d= this.value;
 let n=d.length-1;
 
 let har=(te[n]==d[n]);
 
 console.log(d);
 console.log(te[n]);
});*/
