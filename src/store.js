// Management State
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        kata: [
            { alamat: "JL.Bringin Raya" },
            { phone: "+62 821 353 282 77" },
            { email: "mhmmdard01@gmail.com" },
            { ringkasan: "SMA Bina Nusantara Semarang students who are participating in Bootcamp training" },
            { bahasa1: "Indonesia" },
            { bahasa2: "English" },
            { hob: "Gaming"},
            { hobi: "Listen Music"}
        ],
        bio: [
            { nama: "Muhammad Ardi Setiawan"},
            { alamat: "JL.Bringin Raya" },
            { alam: "Semarang"},
            { mat: "Indonesia"},
            { web: "https://www.w3schools.com"},
            { email: "mhmmdard01@gmail.com"},
            { phone: "+62 821 353 282 77"},
            { cr: "Feb 2013 - Jun 2014"},
            { sad: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima dicta velit adipisci eveniet, quibusdam, numquam harum sit"},
            { un: "Jakarta, Indonesia"}
        ]
    },
    mutations: {

    },
    actions: {

    }
})