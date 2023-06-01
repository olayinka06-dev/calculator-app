function display(value) {
    document.getElementById('show').value += value;
}
function calculate() {
    let p = document.getElementById('show').value;
    let q = eval(p);
    document.getElementById('show').value = q;
}
function del() {
    var show = document.getElementById('show');
    show.value = show.value.slice(0,-1);
}
function erase() {
    document.getElementById('show').value = '';
}


function menu() {
    var html =  document.querySelector('html');
    html.setAttribute('data-theme', 'first-theme');
    document.querySelector(".theme").style.backgroundColor = "rgb(37,44,70)";
    document.querySelector(".changeone").style.backgroundColor = "hsl(6, 63%, 50%)";
    document.querySelector(".changetwo").style.backgroundColor = "transparent";
    document.querySelector(".changeThree").style.backgroundColor = "transparent";
  }
  
  function greyshow() {
    var html =  document.querySelector('html');
    html.setAttribute('data-theme', 'second-theme');
    document.querySelector(".changeone").classList.remove("change-sub");
    document.querySelector(".theme").style.backgroundColor = "rgb(214,204,206)";
    document.querySelector(".changeone").style.backgroundColor = "transparent";
    document.querySelector(".changetwo").style.backgroundColor = "hsl(25, 98%, 40%)";
    document.querySelector(".changeThree").style.backgroundColor = "transparent";
  }
  
  function lastshow() {
    var html =  document.querySelector('html');
    html.setAttribute('data-theme', 'third-theme');
    document.querySelector(".changeone").classList.remove("change-sub");
    document.querySelector(".theme").style.backgroundColor = "rgb(30,8,54)";
    document.querySelector(".changeone").style.backgroundColor = "transparent";
    document.querySelector(".changetwo").style.backgroundColor = "transparent";
    document.querySelector(".changeThree").style.backgroundColor = "hsl(176, 100%, 44%)";
  }
  
