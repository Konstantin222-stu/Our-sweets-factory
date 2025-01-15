new Splide( '#splideCatalog',{
    arrows: true,
    perPage: 1,
    pagination: false,
    breakpoints:{
        860:{
            pagination:true,
            arrows: false,
            perPage: 1, 
        }
    }
  } ).mount();

  new Splide( '#splidePhoto',{
    arrows: false,
    perPage: 2,
    gap:"120px",
    pagination: true,
    breakpoints:{
        860:{
            pagination:true,
            arrows: false,
            perPage: 1, 
        }
    }
  } ).mount();


