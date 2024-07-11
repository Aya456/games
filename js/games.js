import { Details } from "./details.js"
import { Ui } from "./ui.js"



export class Games {
    constructor(){
        this.getGames("mmorpg")
        document.querySelectorAll(".menu .nav-link").forEach((link)=>{
            link.addEventListener("click" , (e)=>{
                document.querySelector(".menu .active").classList.remove("active")
                e.target.classList.add("active")
                this.getGames(e.target.dataset.category)
            })
        })
        this.ui = new Ui()
    }

    async getGames(category){
        const loading = document.querySelector(".loading");
        loading.classList.remove("d-none");
        const options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': 'a86254edf1msh3158a58ecf014e1p1b1072jsna64e8c16fbe9',
                'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
            }
        };
        

        const api = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category}`, options);
        const respons = await api.json();
        this.ui.displayGames(respons)
        this.startShow()
        loading.classList.add("d-none");
    }
    startShow(){
        document.querySelectorAll(".card").forEach((x)=>{
            x.addEventListener("click" , ()=>{
                const id = x.dataset.id
                this.showGameDetails(id)
            })
        })
    }
    showGameDetails(id){
        const gameDetails = new Details(id)
        document.querySelector(".games").classList.add("d-none");
        document.querySelector(".details").classList.remove("d-none");
    }
}