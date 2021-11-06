<template>
    <div class="kiri">
        <span></span>
        <div style="display: flex;">
            <div class="1">
            <h1 class="tex">Muhammad <br><span class="nama">Ardi</span><span class="nama2">Setiawan</span></h1><br>
            <img src="https://asset-a.grid.id/crop/0x0:0x0/x/photo/2018/09/12/1506637489.jpg">
            <h2 class="tex">Contact<hr class="line"></h2>
            <p class="tex">
                <strong>Address:</strong><br>
            </p>
            <p v-for="datadiri in kata" :key="datadiri" class="tex"> 
                {{ datadiri.alamat }}
            </p>
                <strong class="tex">Phone:</strong>
            <p v-for="datadiri in kata" :key="datadiri" class="tex">
                {{ datadiri.phone}} 
            </p>
            <strong class="tex">Email:</strong>
            <p v-for="datadiri in kata" :key="datadiri" class="tex">
            {{ datadiri.email }} 
            </p>
            <h2 class="tex">Languages<hr class="line"></h2>
                <p v-for="datadiri in kata" :key="datadiri" class="tex">
                    {{ datadiri.bahasa1 }}</p> 
                <p v-for="datadiri in kata" :key="datadiri" class="tex">
                    {{ datadiri.bahasa2 }}</p> 
            <h2 class="tex">Hobbies<hr class="line"></h2>
                <ul class="tex2">
                    <li>Gaming</li>
                    <li>Listen Music</li>
                </ul>
            </div>
        <div class="kanan">
             <h2 class="kata">Summary<hr class="line">
            </h2>
            <p class="kata" v-for="datadiri in kata" :key="datadiri">
                {{ datadiri.ringkasan }}
            </p>
               <h2 class="kata">Skill Highlights<hr class="line">
               </h2>
               <ul class="tex2">
                   <li>Project management</li>
                   <li>Innovative</li>
               </ul>
               <br>
               <h2 class="kata">Experience<hr class="line">
               </h2>
               <p class="kata"><strong>None</strong> - ../../.. to ../../..</p>
               <ul class="tex2">
                   <li><strong>Didn't join any Project yet...</strong></li>
               </ul>
               <br>
               <h2 class="kata">Education<hr class="line">
               </h2>
               <p class="kata">SMK :<strong> Bina Nusantara Semarang</strong> - 2021</p>
               <br>
               <h2 class="kata">Certifications<hr class="line">
               </h2>
               <p class="kata">Programming : <strong>HTML, CSS, JavaScript.</strong></p>
    </div>
    </div>
</div>
</template>
<script>
    export default {
        name: 'CvSatu',
        computed: {
            kata() {
                return this.$store.state.kata
            }
        }
    }
</script>
<style>
.kiri {
    margin-left: 200px;
    height: 960px;
    width: 750px;
    border: none;
    background-color: darkgray;
    padding-bottom: 20px;
    font-family: sans-serif;
}
img {
    height: 200px;
    width: 300px;
}
.kanan {
    height: 960px;
    width: 450px;
    border: none;
    background-color: white;
    text-align: left;
}
.nama {
    color: coral;
}   
.nama2 {
    color: aliceblue;
}
.line {
    height: 2px;
    background-color:  darkgray;
}
.kata {
    padding-left: 20px;
    padding-right: 20px;
}
.tex {
    padding-left: 20px;
    padding-right: 10px;
}
.tex2 {
    padding-left: 100px;
    padding-right: 10px;
}
</style>