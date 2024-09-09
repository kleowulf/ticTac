let grid = {
    upperLeftImg: document.getElementById('upperLeftImg').src,
    upperMiddleImg: document.getElementById('upperMiddleImg').src,
    upperRightImg: document.getElementById('upperRightImg').src,
    middleLeftImg: document.getElementById('middleLeftImg').src,
}

function updateGrid () {
    grid.upperLeftImg = document.getElementById('upperLeftImg').src;
    grid.upperMiddleImg = document.getElementById('upperMiddleImg').src;
    grid.upperRightImg = document.getElementById('upperRightImg').src;
    grid.middleLeftImg = document.getElementById('middleLeftImg').src;
}


class Trainer {
    constructor(name){
        this._name = name
        this.location = ""
        this.image = document.getElementById(`${this._name}`).src

    }
    get name (){
        return this._name
    }


    placement () {
        this.location.src = this.image;
        updateGrid();
        if(grid.upperLeftImg === this.image && grid.upperMiddleImg ===  this.image && grid.upperRightImg === this.image){
            document.querySelector('h2').innerText = `${this._name} wins`
        }

        console.log(this.image)
        

    }
    
    turn(){

        document.querySelectorAll('.cell').forEach(occurance => {
            occurance.addEventListener('click', (e)=>{
                let targetLocation = e.target.id
                let imageId = `${targetLocation}Img`
                this.location = document.getElementById(imageId)
                this.placement()      
            })
        })
    }


}

let ash = new Trainer("ash")
let gary = new Trainer("gary")

document.getElementById("ash").addEventListener('click', ()=> ash.turn())
document.getElementById("gary").addEventListener('click', ()=> gary.turn())