$('.banner').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    dots: true,
  });

$('.Galeria').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
        }
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
});


document.querySelector(".abrirMenu").onclick = function(){
  document.documentElement.classList.add("menuAtivo");
}

document.querySelector(".fecharMenu").onclick = function(){
  document.documentElement.classList.remove("menuAtivo");
}

window.onscroll = function() {
  var top = window.pageYOffset || document.documentElement.scrollTop;
  //console.log(top);

  if (top > 600) {
      console.log("Menu Fixo");
      document.getElementById("topoFixo").classList.add("topo-Fixo");

  } else {
      console.log("Abaixo de 600");
      document.getElementById("topoFixo").classList.remove("topo-Fixo");
  }

}