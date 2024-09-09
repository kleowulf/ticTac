let grid = {
    upperLeftImg: document.getElementById('upperLeftImg').src,
    upperMiddleImg: document.getElementById('upperMiddleImg').src,
    upperRightImg: document.getElementById('upperRightImg').src,
    middleLeftImg: document.getElementById('middleLeftImg').src,
    middleMiddleImg: document.getElementById('middleMiddleImg').src,
    middleRightImg: document.getElementById('middleRightImg').src,
    lowerLeftImg: document.getElementById('lowerLeftImg').src,
    lowerMiddleImg: document.getElementById('lowerMiddleImg').src,
    lowerRightImg: document.getElementById('lowerRightImg').src,
}

function updateGrid () {
    grid.upperLeftImg = document.getElementById('upperLeftImg').src;
    grid.upperMiddleImg = document.getElementById('upperMiddleImg').src;
    grid.upperRightImg = document.getElementById('upperRightImg').src;
    grid.middleLeftImg = document.getElementById('middleLeftImg').src;
    grid.middleMiddleImg = document.getElementById('middleMiddleImg').src;
    grid.middleRightImg = document.getElementById('middleMiddleImg').src;
    grid.lowerLeftImg = document.getElementById('lowerLeftImg').src;
    grid.lowerMiddleImg = document.getElementById('lowerMiddleImg').src;
    grid.lowerRightImg = document.getElementById('lowerRightImg').src;
}

function checkWinConditions(trainerImage) {
    return {
        topRow: grid.upperLeftImg === trainerImage && grid.upperMiddleImg === trainerImage && grid.upperRightImg === trainerImage,
        middleRow: grid.middleLeftImg === trainerImage && grid.middleMiddleImg === trainerImage && grid.middleRightImg === trainerImage,
        bottomRow: grid.lowerLeftImg === trainerImage && grid.lowerMiddleImg === trainerImage && grid.lowerRightImg === trainerImage,
        leftColumn: grid.upperLeftImg === trainerImage && grid.middleLeftImg === trainerImage && grid.lowerLeftImg === trainerImage,
        middleColumn: grid.upperMiddleImg === trainerImage && grid.middleMiddleImg === trainerImage && grid.lowerMiddleImg === trainerImage,
        rightColumn: grid.upperRightImg === trainerImage && grid.middleRightImg === trainerImage && grid.lowerRightImg === trainerImage,
        leftCross: grid.upperLeftImg === trainerImage && grid.middleMiddleImg === trainerImage && grid.lowerRightImg === trainerImage,
        rightCross: grid.upperRightImg === trainerImage && grid.middleMiddleImg ===trainerImage && grid.lowerLeftImg === trainerImage,
    }
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
        const winConditions = checkWinConditions(this.image);

        if(winConditions.topRow || winConditions.middleRow || winConditions.bottomRow || winConditions.leftColumn || winConditions.middleColumn || winConditions.rightColumn || winConditions.rightCross || winConditions.leftCross){
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