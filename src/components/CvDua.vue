<template>
    <div class="all">
        <div class="bg"></div>
    <div class="res">RESUME</div>
    <div class="jud">
      <div class="gb">
        <img class="gm" src="https://www.pngitem.com/pimgs/m/504-5040528_empty-profile-picture-png-transparent-png.png">
      </div>
        <div class="name">
            <h1>MUHAMMAD <br> ARDI<span class="lastn">SETIAWAN</span></h1>
        </div>
        <div class="kotak">
           <h1>PROGRAMMER</h1><hr class="lm"> 
        <div class="right">
        <h2>WORK EXPREIENCE<hr class="dashed"></h2>
            <div class="kurung">
        <div style="display: flex; margin-left: 20px; margin-right: 20px;">
                    <p><b>CREATIVE ROOMS</b><br>Feb 2013 - Jun 2014</p>
                    <div style="margin-left: 50px;">
                        <p><b>SENIOR ART DIRECTOR</b></p>
                        <p v-for="datadiri in bio" :key="datadiri">
                        {{ datadiri.sad }}</p>
                    </div>
                </div>
        <div style="display: flex; margin-left: 20px; margin-right: 20px;">
                    <p><b>CREATIVE ROOMS</b><br>Feb 2013 - Jun 2014</p>
                    <div style="margin-left: 50px;">
                        <p><b>SENIOR ART DIRECTOR</b></p>
                        <p v-for="datadiri in bio" :key="datadiri">
                        {{ datadiri.sad }}</p>
                    </div>
                </div>
        <div style="display: flex; margin-left: 20px; margin-right: 20px;">
                    <p><b>CREATIVE ROOMS</b><br>Feb 2013 - Jun 2014</p>
                    <div style="margin-left: 50px;">
                        <p><b>SENIOR ART DIRECTOR</b></p>
                        <p v-for="datadiri in bio" :key="datadiri">
                        {{ datadiri.sad }}</p>
                    </div>
                </div>
        </div>
        </div>
        <br>
        <div class="right2">
        <h2>EDUCATION <hr class="dashed"></h2>
            <div class="kurung">
                <div style="display: flex; margin-left: 20px; margin-right: 20px;">
                    <p><b>MASTER DEGREE</b><br>Feb 2011 - Jun 2014</p>
                    <div style="margin-left: 50px;">
                        <p><b>UNIVERSITY OF CREATIVE MINDS</b></p>
                        <p v-for="datadiri in bio" :key="datadiri">
                        {{ datadiri.un }}</p>
                    </div>
                </div>
                <div style="display: flex; margin-left: 20px; margin-right: 20px;">
                    <p><b>MASTER DEGREE</b><br>Feb 2011 - Jun 2014</p>
                    <div style="margin-left: 50px;">
                        <p><b>UNIVERSITY OF CREATIVE MINDS</b></p>
                        <p v-for="datadiri in bio" :key="datadiri">
                        {{ datadiri.un }}</p>
                    </div>
                </div>
                <div style="display: flex; margin-left: 20px; margin-right: 20px;">
                    <p><b>MASTER DEGREE</b><br>Feb 2011 - Jun 2014</p>
                    <div style="margin-left: 50px;">
                        <p><b>UNIVERSITY OF CREATIVE MINDS</b></p>
                        <p v-for="datadiri in bio" :key="datadiri">
                        {{ datadiri.un }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
    <div class="prof">
        <h2>PROFILE<hr class="dashed"></h2>
        <div class="kurung">
            <h3 class="h">NAME</h3>
        <p v-for="datadiri in bio" :key="datadiri">
            {{ datadiri.nama }}</p><br>
            <h3 class="h">ADDRESS</h3>
        <p v-for="datadiri in bio" :key="datadiri">
            {{ datadiri.alamat }}
            {{ datadiri.alam }}
            {{ datadiri.mat }}
            </p><br>
            <h3 class="h">WEBSITE</h3>
        <p v-for="datadiri in bio" :key="datadiri">
            {{ datadiri.web }}</p>
        </div>
        <h2>CONTACT<hr class="dashed"></h2>
        <div class="kurung">
            <h3 class="h">PHONE NUMBER</h3>
        <p v-for="datadiri in bio" :key="datadiri">
           <i class="fa-solid fa-phone"></i> {{ datadiri.phone }}</p>
            <h3 class="h">EMAIL</h3>
        <p v-for="datadiri in bio" :key="datadiri">
            {{ datadiri.email }}</p>
            </div>
    </div>

    </div>
</template>

<script>
export default {
    name: 'CvDua',
    computed: {
            bio() {
                return this.$store.state.bio
            }
    }
}
</script>
<style>
.all {
    height: 960px;
    padding-bottom: 20px;
    font-family: 'Courier New', Courier, monospace;
    margin-left: 100px;
    margin-right: 100px;
}
      .bg {
        background-color: darkslateblue;
        height: 40px;
      }
      .res {
        background-color: darkslateblue;
        height: 1px;
        margin-left: 50px;
        width: 130px;
        color: white;
        font-size: 30px;
        text-align: center;
        padding-bottom: 40px;
      }
      .jud {
        background-color: darkslateblue;
        height: 150px;
        color: white;
        display: flex;
      }
      .gb {
        padding-top: 30px;
      }
      .gm {
        width: 200px;
        height: 200px;
        display: flex;
        border-radius: 50%;
        margin-left: 20px;
      }
      .name {
          font-size: 30px;
          padding-top: 20px;
          padding-left: 20px;
      }
      .lastn {
          padding-left: 7px;
      }
     .prof {
      height: 960px;
      width: 450px;
      padding-top: 100px;
      border: none;
      background-color: white;
      text-align: right;
      padding-left: 40px;
      padding-right: 20px;
     }
     .dashed {
         border-top: dashed 1px;
     }
     .h {
         color: gray;
     }
     .kurung {
      font-family: sans-serif;
      padding-right: 10px;
     }
     .kotak {
         color: black;
         padding-top: 200px;
     }
     .lm {
         border: 1px solid black;
         width: 15cm;
     }
.right {
    height: 500px;
    width: 600px;
    border: none;
    background-color: darkgray;
    padding: 20px;
    padding: 25px;
    font-family: 'Courier New', Courier, monospace;
}
    .p {
        display: flex;
    }
.right2 {
    height: 400px;
    width: 600px;
    border: none;
    background-color: darkgray;
    padding: 20px;
    padding: 25px;
    font-family: 'Courier New', Courier, monospace;
}
    
</style>