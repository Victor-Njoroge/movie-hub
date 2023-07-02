let navbar=document.querySelector('.header')
window.onscroll=()=>{
    if (window.scrollY > 1){
        navbar.classList.add('nav-active');
    }else{
        navbar.classList.remove('nav-active')
    }
}

let menuMovie=document.querySelector(".shopping-cart");
document.querySelector(".fa-bars").onclick=()=>{
    menuMovie.classList.toggle("active")
}

const render=(video)=>{
    /*const videoContainer=document.createElement("div")
    videoContainer.innerHTML=`
    <h2>${video.name}</h2>
    <p class='description'>${video.description}</p>
    <p class='industry'>${video.industry}</p>
    <button class="IMD">IMD</button>
   `
    document.querySelector(".more").appendChild(videoContainer)*/
}

const theatre =(film)=>{

    const List=document.createElement("div")
    List.classList="box"
    List.innerHTML=`
    <img src="${film.poster}" >
    <div class="content">
    <h3>${film.title}</h3>
    <span>tickets sold    ${film.tickets_sold}</span>
    <br>
    <span>Theatre capacity ${film.capacity}</span>
    <br>
    <span>Show time ${film.showtime}</span>
    <br>
    <span>Run time ${film.runtime} minutes</span>
    <br>
    <button class="view">View Details</button>
    <button class="remove"><i class="fas fa-times"></i></button>
    </div>
    `
    document.querySelector(".shopping-cart").appendChild(List)

    List.querySelector(".view").addEventListener("click",()=>{
        card.style.display="block"

    })


    List.querySelector(".remove").addEventListener("click",()=>{
        card.style.display="none"

    })

    const card=document.createElement("div")

    card.className="box2"
    card.innerHTML=`
    <img src="${film.poster}" alt="">
    <h3>${film.title}</h3>
    <p class="description">${film.description}</p>
    <p>tickets sold <span class="sold">${film.tickets_sold}</span>  </p>
    <p> Theatre capacity <span class="capacity">${film.capacity}</span> </p>
    <button class="purchase">Buy Now</button>
    <button class="delete"><i class="fas fa-trash"></i>
    `
    document.querySelector(".box-container").appendChild(card)



   
  


        function Delete(){

            card.querySelector(".delete").addEventListener("click", ()=>{
                card.remove() 
                
            fetch(` http://localhost:3000/films/${film.id}`,{
             method:"DELETE",
             headers:{
                 'Content-Type': 'application/json',
             }
            })
            .then(res => res.json())
            .then(films => console.log(films))
            })
        }
     
        Delete()










function UpDate(){

    card.querySelector(".purchase").addEventListener("click",(e)=>{
        film.tickets_sold+=1
        film.capacity-=1


        if(film.capacity <=0){
            film.tickets_sold="Sold out"
        }


        card.querySelector(".sold").textContent=film.tickets_sold
        card.querySelector(".capacity").textContent=film.capacity

        fetch(`http://localhost:3000/films/${film.id}`,{
            method: "PATCH",
            headers:{
                'Content-Type': 'application/json',
            },
            body:JSON.stringify({tickets_sold:film.tickets_sold})
        })


        fetch(`http://localhost:3000/films/${film.id}`,{
            method: "PATCH",
            headers:{
                'Content-Type': 'application/json',
            },
            body:JSON.stringify({capacity:film.capacity})
        })
        e.preventDefault()
    })
 
}
UpDate()

  
}

const movieSection = (coming)=>{
    const videoCon=document.createElement("div")
    videoCon.className="box2"
    videoCon.innerHTML=`
   <video src="${coming.video}"autoplay muted loop></video>
    `
    console.log(videoCon)
    document.querySelector(".videoCon").appendChild(videoCon)





    const card=document.createElement("div")
    card.className="box2"
    card.innerHTML=`
    <img src="${coming.poster}">
    <h3>${coming.title}</h3>
    <p class="description">${coming.description}</p>
    <button class="watch">Watch trailer</button>
    <button class="remove"><i class="fas fa-times"></i></button>
    `
    document.querySelector(".box-Container").appendChild(card)

    card.querySelector(".watch").addEventListener("click",()=>{
        videoCon.style.display="block"

    })


    card.querySelector(".remove").addEventListener("click",()=>{
        videoCon.style.display="none"

    })
}











const getData=()=>{
    fetch("http://localhost:3000/home")
    .then((res)=>{
        res.json()
        .then(home => home.forEach(video=>render(video)));
    })


    fetch("http://localhost:3000/films")
    .then((res)=>{
        res.json()
       .then(films => films.forEach(film=>theatre(film)));
    })

    fetch("http://localhost:3000/movies")
    .then((res) =>{
        res.json()
        .then(movies => movies.forEach(coming=>movieSection(coming)));
    })



}

getData();


