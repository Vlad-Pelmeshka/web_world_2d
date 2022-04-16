var canvas = document.getElementById('map'); // объявляем обьект полотно
var context = canvas.getContext('2d'); // указываем тип полотна
GenerateMap();

  function ShowGamer(clear_x = null, clear_y = null){
    if(clear_x && clear_y){
      ShowGridPosition(clear_y,clear_x);
    }
    context.drawImage(image_arr['gamer1'],gridder(gamer_y),gridder(gamer_x),grid,grid);
  }

  function ShowGridPosition(y,x){
    if(texture != 0)
      context.drawImage(image_arr[arr[y][x]],gridder(y),gridder(x),grid,grid);
    else{
      switch(arr[y][x]){
        case 'g':
        context.fillStyle = "darkgreen";
        break;
        case 'w':
        context.fillStyle = "rgb(71,133,200)";
        break;
      }

      //context.fillStyle = "rgb(" + arr[y][x] +"," + arr[y][x] +"," + arr[y][x] + ")";
      context.fillRect(gridder(y),gridder(x),grid,grid);
    }
  }

  function ShowMap(hi,wi,arr){
    for(let y = 0; y < hi; y++){
      for(let x = 0; x < wi; x++){
        ShowGridPosition(y,x);
      }
    }
    ShowGamer();
  }

$(document).ready(function() { //как только документ полностью отрисуется (загрузился)

  $("body").keypress(function(e) {
    //console.log(e.which); // получить номер нажатой клавиши

    let gemer_last_pos_x = gamer_x;
    let gemer_last_pos_y = gamer_y;
  console.log(e.code);
    switch(e.code){
      case "KeyW":
        console.log('top'); // w
        gamer_x--;
        break;
      case "KeyA":
        console.log('left'); // a
        gamer_y--;
        break;
      case "KeyS":
        console.log('bottom'); // s
        gamer_x++;
        break;
      case "KeyD":
        console.log('right'); // d
        gamer_y++;
        break;
    }

    ShowGamer(gemer_last_pos_x,gemer_last_pos_y);
  });

});
