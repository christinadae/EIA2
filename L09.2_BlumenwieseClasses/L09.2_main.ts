
namespace L09_BlumenwieseClasses {

    window.addEventListener("load", handleLoad);


    export let crc2: CanvasRenderingContext2D;
    export let canvas: HTMLCanvasElement;

    function handleLoad(): void {

        canvas = <HTMLCanvasElement>document.querySelector("canvas");
        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        setBackground();

    }

    function setBackground(): void {

        createBackground();
        createCloud();
        createMountains();

    }
}