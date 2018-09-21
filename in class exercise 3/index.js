

let heroes ;
  
  const moreHeroes = [
     {'name' : 'Cyclops', 'twitter' : '@oneye', 'pic' : 'http://www.animatedimages.org/data/media/450/animated-marvel-avatar-image-0005.gif'},
     {'name' : 'Storm', 'twitter' : '@rainsitpours', 'pic' : 'http://www.animatedimages.org/data/media/450/animated-marvel-avatar-image-0007.gif'},
     {'name' : 'Phoenix', 'twitter' : '@jeangrey', 'pic' : 'http://www.animatedimages.org/data/media/450/animated-marvel-avatar-image-0016.gif'}
  ];


  





fetch('https://my.api.mockaroo.com/heroes.json?key=85694220')
.then(function(response) {
return response.json();

})

.then(function(data){

heroes = data;

console.log(data);

const HtmlSninnet=heroes.map ((  ab ,index)   => 
     `



  <article class="dt w-100 bb b--black-05 pb2 mt2" href="#0">
  <div class="dtc w2 w3-ns v-mid">
    <img src=${ab.pic} class="ba b--black-10 db br-100 w2 w3-ns h2 h3-ns"/>
  </div>
  <div class="dtc v-mid pl3">
    <h1 class="f6 f5-ns fw6 lh-title black mv0">${ab.name} </h1>
    <h2 class="f6 fw4 mt0 mb0 black-60">${ab.twitter}</h2>
  </div>
  <div class="dtc v-mid">
    <form class="w-100 tr">
      <button data-whatever="${index}" class="f6 button-reset bg-white ba b--black-10 dim pointer pv1 black-60" type="submit">+ Follow</button>
    </form>
  </div>
</article>
` );





const main = document.querySelector("main");    
main.innerHTML= HtmlSninnet;

const btns = [...document.querySelectorAll("main button")];
btns.map (btn => 
btn.addEventListener ("click", function() {
console.log('you clicked on ${heroes[this.dataset.whatever].name}');

})
);


});




