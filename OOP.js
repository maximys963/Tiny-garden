class Plant {
   constructor(name){
       this.name = name;
       this.watered = false;
       this.planted = false;
       this.lvl = 0;
       this.vase = document.getElementById('vase');
   }
   planting(){
           console.log("planted");
           this.planted = true;
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

tomato.vase.addEventListener('mousemove', ()=>{
    if(seeds.taked){
        console.log("dropped");
        information.setInformation("Seeds was planted")
    }
    if(water.taked){
        console.log("dropped");
        information.setInformation("Soil was watered")
    }
});







