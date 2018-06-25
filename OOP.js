class Plant {
   constructor(name){
       this.name = name;
       this.watered = false;
       this.lvl = 0;
       // this.setWaterPosition = this.setWaterPosition.bind(this)

   }

}

let tomato = new Plant("Tomato");
console.log(tomato.lvl);

class Water {
constructor(){
 this.waterImage = document.getElementById('water');
}
getWaterPosition (){
    let waterImage = document.getElementById('water');
    let position = waterImage.getBoundingClientRect();
    return{
        top: position.top,
        left: position.left,
    }
}
setWaterPosition(e){
    console.log('it works');
    let posX = e.clientX ;
    let posY = e.clientY ;
    let waterImage = document.getElementById('water');
    let position = waterImage.getBoundingClientRect();
    console.log(posX);
    console.log(posY);
    console.log(waterImage.style.left);
    console.log(waterImage.style.top);
    waterImage.style.left = `${posX - waterImage.offsetWidth/4}px`;
    waterImage.style.top = `${posY  - waterImage.offsetHeight/4}px`;
    // this.moveWater(e)

}

}
let water = new Water();
console.log(water.waterImage);
console.log(water.getWaterPosition());
console.log(water.getWaterPosition().left);

 water.waterImage.onmousedown = (e) => water.waterImage.onmousemove = (e) => water.setWaterPosition(e);
 water.waterImage.onmouseup = () =>{
     water.waterImage.onmousemove = null;
};

