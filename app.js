let tab = [
    {image: "https://fr.web.img4.acsta.net/medias/nmedia/18/35/16/02/18380826.jpg",
     name: "spider Man"
    },
    {image: "https://fr.web.img3.acsta.net/pictures/21/05/04/15/43/5215186.jpg",
     name: "drunk"
    },
    {image: "https://fr.web.img5.acsta.net/pictures/16/11/03/09/31/126744.jpg",
     name: "lastman"
    }
];

let area = document.querySelector('.zone')
let plus = document.querySelector('.plus')
let moins = document.querySelector('.moins')
let screen = document.querySelector('.vitre')
let i = 0;
screen.style.backgroundImage = `url('${tab[0].image}')`
screen.style.backgroundPosition = "center"
screen.style.backgroundPosition = "center"

let target = ()=>{
   tab.forEach(el => {
    createTarget(el)
   });
}
let afficher = (a)=>{
    let objet = tab.find((obj)=>obj.name === a.target.id)
    let e = tab.indexOf(objet)
    console.log(objet)
    screen.style.backgroundImage = `url('${objet.image}')`
    screen.style.backgroundSize = "cover"
    i = e
    // console.log(a.target.id)
}


let createTarget = (element)=>{
   let btn = document.createElement('button')
   btn.setAttribute('id', element.name)
   btn.textContent = element.name
   area.appendChild(btn)

   btn.addEventListener('click', afficher)
}


target()

let go = ()=>{
        i++
        if(i < tab.length){
            console.log(tab[i].image)
            screen.style.backgroundImage = `url('${tab[i].image}')`
            screen.style.backgroundSize = "cover"
        }else{
            i=0
            screen.style.backgroundImage = `url('${tab[i].image}')`
            screen.style.backgroundSize = "cover"
            // console.log([i])
        }
}
let back = ()=>{
        i--
        console.log(tab.length)
        if(i > -1){
            // console.log(tab[i].color)
            screen.style.backgroundImage = `url('${tab[i].image}')`
            screen.style.backgroundSize = "cover"
            screen.style.backgroundPosition = "center"

        }else{
            i= (tab.length - 1)
            screen.style.backgroundImage = `url('${tab[i].image}')`
            screen.style.backgroundPosition = "center"
            screen.style.backgroundSize = "cover"
            // console.log([i])
        }
}


        plus.addEventListener('click', go)
        moins.addEventListener('click', back)
          
          
    


// tab.forEach(daspo => {
//     screen.textContent = display
// });

