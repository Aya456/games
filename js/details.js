import { Ui } from "./ui.js";

export class Details {
    constructor(id){
        this.ui = new Ui
        document.getElementById("btnClose").addEventListener("click" , ()=>{
            document.querySelector(".games").classList.remove("d-none")
            document.querySelector(".details").classList.add("d-none")
        })
        this.getdetails(id)
    }
    async getdetails(id){
        const loading = document.querySelector(".loading");
        loading.classList.remove("d-none");
        const options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': 'a86254edf1msh3158a58ecf014e1p1b1072jsna64e8c16fbe9',
                'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
            }
        };
        const api = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}` , options)
        const respons = await api.json()
        this.ui.displayDetails(respons)
        loading.classList.add("d-none");
    }
}