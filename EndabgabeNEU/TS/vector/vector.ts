namespace Endabgabe {

  export class Vector {
    public x: number; // x-Koordinate
    public y: number; // y-Koordinate

    public constructor(_x: number = 0, _y: number = 0) {
      this.set(_x, _y);
    }

    public static getDifference(_v0: Vector, _v1: Vector): Vector {
      return new Vector(_v0.x - _v1.x, _v0.y - _v1.y); // Vektor 1 (_v0) erhält x und y Wert; Vektor 2 (_v1) erhält x und y Wert; -> neuer Vektor wird erschaffen
    }

    public static getDistance(_v0: Vector, _v1: Vector): number {
      let distanceX: number = _v0.x - _v1.x;
      let distanceY: number = _v0.y - _v1.y;
      return Math.hypot(distanceX, distanceY);
       // Neuer Vektor wird ermittelt, indem die Distanz von Vektor 1 zu Vektor 2 errechnet wird. 
      // Distanz von Ball zu Spieler wird somit ermittelt (hypothenuse)
    }

    public set(_x: number, _y: number): void {
      this.x = _x;
      this.y = _y;
    }

    public scale(_factor: number): void {
      this.x *= _factor;
      this.y *= _factor;
    }

    public add(_addend: Vector): void {
      this.x += _addend.x;
      this.y += _addend.y;
    }

    public copy(): Vector {
      return new Vector(this.x, this.y);
    }
  }
}