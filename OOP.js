class Plant {
   constructor(name){
       this.name = name;
       this.watered = false;
       this.planted = false;
       this.lvl = 0;
       this.vase = document.getElementById('vase');
   }
   planting(){

           if(this.planted && this.watered){
               console.log("start");
               let time1 = 0;

              let timer =  setInterval(function () {
                   time1++;
                   console.log(time1);
                   information.setInformation("Your plant is growing");
                   let lvl1 = document.getElementById("lvl1");
                   let lvl2 = document.getElementById("lvl2");
                   let lvl3 = document.getElementById("lvl3");
                   let lvl4 = document.getElementById("lvl4");
                   let lvl5 = document.getElementById("lvl5");
                   let lvl6 = document.getElementById("lvl6");

                   if(time1 === 5){
                      lvl1.style.display = 'block';
                   }else if(time1 === 10){
                       lvl1.style.display = 'none';
                       lvl2.style.display = 'block';
                   }else if(time1 === 15){
                       lvl2.style.display = 'none';
                       lvl3.style.display = 'block';
                   }else if(time1 === 20){
                       lvl3.style.display = 'none';
                       lvl4.style.display = 'block';
                   }else if(time1 === 25){
                       lvl4.style.display = 'none';
                       lvl5.style.display = 'block';
                   }else if(time1 === 30){
                       lvl5.style.display = 'none';
                       lvl6.style.display = 'block';
                       clearInterval(timer);

                   }
                   return time1
               }, 1000);
               console.log(time1);
           }

   }
}
let tomato = new Plant("Tomato");
class Water {
constructor(){
 this.waterImage = document.getElementById('water');
 this.taked = false
}
setWaterPosition(e){
    let posX = e.clientX ;
    let posY = e.clientY ;
    let waterImage = document.getElementById('water');
    let position = waterImage.getBoundingClientRect();
    waterImage.style.left = `${posX - waterImage.offsetWidth/4}px`;
    waterImage.style.top = `${posY  - waterImage.offsetHeight/4}px`;
    // this.moveWater(e)
    this.taked = true;
}
}
let water = new Water();
class Seeds {
    constructor() {
        this.seedsImage = document.getElementById('seeds');
        this.taked = false;
    }
    setSeedPosition(e) {
        // console.log('it works');
        let posX = e.clientX;
        let posY = e.clientY;
        let seedsImage = document.getElementById('seeds');
        let position = seedsImage.getBoundingClientRect();
        seedsImage.style.left = `${posX - 20}px`;
        seedsImage.style.top = `${posY - 20}px`;
        this.taked = true;
    }
}
class Information {
    constructor(info){
        this.info = info
    }
    setInformation(information){
        let massage = document.getElementById('massage');
        massage.innerText = information;
    }
}
let information = new Information();
let seeds = new Seeds();
 water.waterImage.onmousedown = (e) => water.waterImage.onmousemove = (e) => water.setWaterPosition(e);
 water.waterImage.onmouseup = () =>{
     water.waterImage.onmousemove = null;
};
seeds.seedsImage.onmousedown = (e) => seeds.seedsImage.onmousemove = (e) => seeds.setSeedPosition(e);
seeds.seedsImage.onmouseup = () =>{
    seeds.seedsImage.onmousemove = null;
};

information.setInformation("plant seeds");

tomato.vase.addEventListener('mousemove', (e)=>{
    if(seeds.taked){

        information.setInformation("Seeds was planted")
        tomato.planted = true;

    }
    if(water.taked){

        information.setInformation("Soil was watered")
        tomato.watered = true;
        tomato.vase.onmousemove = null;

    }
});

tomato.vase.addEventListener("click", ()=>{
    tomato.planting();

});












