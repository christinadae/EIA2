namespace  BlumenwieseAdvanced {

export class Moveable {
    public posX: number;
    public posY: number;

    public speedX: number;
    public speedY: number;

    constructor(_posX: number, _posY: number, _speedX: number, _speedY: number) {
        this.posX = _posX;
        this.posY = _posY;
        this.speedX = _speedX;
        this.speedY = _speedY;
    }
    draw(): void {
        //Draw
    }
    
    update(): void {
        //Update
    }
}

}