namespace  BlumenwieseAdvanced {

export abstract class Moveable {
    protected posX: number;
    protected posY: number;

    protected speedX: number;
    protected speedY: number;

    constructor(_posX: number, _posY: number, _speedX: number, _speedY: number) {
        this.posX = _posX;
        this.posY = _posY;
        this.speedX = _speedX;
        this.speedY = _speedY;
    }
    public draw(): void {
        //Draw
    }
    
    public update(): void {
        //Update
    }
}

}