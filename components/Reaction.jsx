import { useEffect, useRef } from "react";

const Reaction = () => {
  // Canvas Reference
  const CanvasRef = useRef(null);

  // Canvas and scene config
  const Config = {
    canvasWidth: 300,
    canvasHeight: 400,
    sceneWidth: 265,
    sceneheight: 388
  };

  useEffect(() => {
    // scene Image
    if (typeof window === "undefined") {
      return;
    }
    const HoleScene = new Image();
    HoleScene.src = "./spirte.png";

    if (!CanvasRef) {
      return;
    }
    const canvas = CanvasRef.current;
    // create context
    const ctx = canvas.getContext("2d");
    if (!CanvasRef) {
      return;
    }
    ctx.canvas.width = Config.canvasWidth;
    ctx.canvas.height = Config.canvasHeight;
    // Scene Controlls
    let frameX = 0,
      framey = 0,
      loop = 0;
    let stagger = 10;
    function draw() {
      // clear previous Drawings
      ctx.clearRect(0, 0, Config.canvasWidth, Config.canvasHeight);

      let roll = frameX * Config.sceneWidth;
      let swap = framey * Config.sceneheight;
      // drawImage(image: CanvasImageSource, sx: number, sy: number, sw: number, sh: number, dx: number, dy: number, dw: number, dh: number)
      ctx.drawImage(
        HoleScene,
        roll,
        swap,
        Config.sceneWidth,
        Config.sceneheight,
        0,
        0,
        Config.canvasWidth,
        Config.canvasHeight
      );

      if (loop % stagger === 0) {
        // loop
        if (frameX < 13) {
          frameX++;
        } else {
          frameX = 0;
        }
      }
      loop++;

      requestAnimationFrame(draw);
    }
    draw();
  });

  return (
    <div className="">
      <h3 className="title"> Scarecrow </h3>
      <canvas ref={CanvasRef} />
    </div>
  );
};

export default Reaction;
