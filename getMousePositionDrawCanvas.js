(function(){
  window.onload = function(){
    var canvas = document.getElementById('mycanvas');
    if(!canvas || !canvas.getContext){
      return false;
    }
    var ctx = canvas.getContext('2d');

    //マウスの座標を取得
    var mouse = {
      startX: 0,
      startY: 0,
      x: 0,
      y: 0,
      color: "black",
      isDrawing: false
    };
    var borderWidth = 1;

    canvas.addEventListener("mousemove", function(e){
      //2.マウスが動いたら座標値を取得
      var rect = e.target.getBoundingClientRect();
      mouse.x = e.clientX - rect.left - borderWidth;
      mouse.y = e.clientY - rect.top - borderWidth;

      //3.情報をinfoに出力
      document.getElementById("info").innerHTML =
      " clientX = " + Math.floor(e.clientX) + "px" +
      " clientY = " + Math.floor(e.clientY) + "px" + '<br>' +
      " rect.left = " + Math.floor(rect.left) + "px" +
      " rect.top = " + Math.floor(rect.top) + "px" + '<br><br>' +

      " pageX = " + Math.floor(e.pageX) + "px" +
      " pageY = " + Math.floor(e.pageY) + "px" + '<br>' +
      ' offsetLeft = ' + Math.floor(canvas.offsetLeft) + "px" +
      ' offsetTop = ' + Math.floor(canvas.offsetTop) + "px" + '<br><br>' +

      " canvas x座標 = " + Math.floor(mouse.x) + "px" +
      " canvas y座標 = " + Math.floor(mouse.y) + "px" + '<br>';

      //4.isDrawがtrueのとき描画
      if (mouse.isDrawing){
        ctx.beginPath();
        ctx.moveTo(mouse.startX, mouse.startY);
        ctx.lineTo(mouse.x, mouse.y);
        ctx.strokeStyle = mouse.color;
        ctx.stroke();
        mouse.startX = mouse.x;
        mouse.startY = mouse.y;
      }
    });

    //5.マウスを押したら、描画OK(myDrawをtrue)
    canvas.addEventListener("mousedown", function(e){
      mouse.isDrawing = true;
      mouse.startX = mouse.x;
      mouse.startY = mouse.y;
    });

    //6.マウスを上げたら、描画禁止(myDrawをfalse)
    canvas.addEventListener("mouseup", function(e){
      mouse.isDrawing = false;
    });

    canvas.addEventListener('mouseleave', function(e){
      mouse.isDrawing = false;
    });
  }
})();
