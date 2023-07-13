function reload(){
    location.reload();
}
function refresh(){
    var d = new Date();
    var s = d.getSeconds();
    if (s == 0) {setTimeout(reload,1100)};
}
let timeout;
function createrandom(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}
const group = document.querySelector('.group');
const clockbox = document.querySelector('.clockbox');
const clockbox1 = document.querySelector('.clockbox1');

function createclock() {
    const div = document.createElement('div');
    div.setAttribute('class', 'clock');

    const big = document.createElement('div');
    big.setAttribute('class', 'big');
    big.setAttribute('style','transform: rotate('+createrandom(0,360)+'deg)');

    const dot = document.createElement('div');
    dot.setAttribute('class', 'dot');

    const small = document.createElement('div');
    small.setAttribute('class', 'small');
    small.setAttribute('style','transform: rotate('+createrandom(0,360)+'deg)');
    div.appendChild(big);
    div.appendChild(dot);
    div.appendChild(small);
    return div;
}
for (let i = 0; i < 108; i++) {
    clockbox.append(createclock());
}
const minute = document.querySelectorAll('.big');
const hour = document.querySelectorAll('.small');
let o = [[90,0,180,0,180,0,180,90,  270,90,90,0,180,90,270,90,   270,90,270,90,270,90,270,90,  270,90,270,90,270,90,270,90,  270,90,270,0,180,270,270,90,  270,0,180,0,180,0,180,270]
,[120,120,120,120,90,0,180,90,  120,120,120,120,180,90,270,90,   120,120,120,120,270,90,270,90,  120,120,120,120,270,90,270,90,  120,120,120,120,90,270,270,90,  120,120,120,120,270,0,180,270]
,[90,0,180,0,180,0,180,90,  270,0,180,0,180,90,270,90,   90,0,180,0,270,180,270,90,  270,90,90,0,180,0,270,180,  270,90,270,0,180,0,180,90,  270,0,180,0,180,0,180,270]
,[90,0,180,0,180,0,180,90,  270,0,180,0,180,90,270,90,   90,0,180,0,270,180,270,90,  270,0,180,0,180,90,270,90,  90,0,180,0,180,270,270,90,  270,0,180,0,180,0,180,270]
,[90,0,180,90,90,0,180,90,  270,90,270,90,270,90,270,90,   270,90,270,0,270,180,270,90,  270,0,180,0,180,90,270,90,  120,120,120,120,270,90,270,90,  120,120,120,120,270,0,180,270]
,[90,0,180,0,180,0,180,90,  270,90,90,0,180,0,270,180,  270,90,270,0,180,0,180,90,  270,0,180,0,180,90,270,90,   90,0,180,0,270,180,270,90,  270,0,180,0,180,0,180,270]
,[90,0,180,0,180,0,180,90,  270,90,90,0,180,0,270,180,  270,90,270,0,180,0,180,90,  270,90,90,0,180,90,270,90,   270,90,270,0,270,180,270,90,  270,0,180,0,180,0,180,270]
,[90,0,180,0,180,0,180,90,  270,0,180,0,180,90,270,90,   120,120,120,120,270,90,270,90,  120,120,120,120,270,90,270,90,  120,120,120,120,90,270,270,90,  120,120,120,120,270,0,180,270]
,[90,0,180,0,180,0,180,90,  270,90,90,0,180,90,270,90,  270,90,270,0,270,180,270,90,  270,90,90,0,180,90,270,90,   270,90,270,0,270,180,270,90,  270,0,180,0,180,0,180,270]
,[90,0,180,0,180,0,180,90,  270,90,90,0,180,90,270,90,   270,90,270,0,270,180,270,90,  270,0,180,0,180,90,270,90,  90,0,180,0,270,180,270,90,  270,0,180,0,180,0,180,270]
,[90,0,180,90,  270,0,180,270,   120,120,120,120,   120,120,120,120,   90,0,180,90,  270,0,180,270]];
function hello() {
    let i = 0;
    let x = 0;
    while(i <= 108){
        for (let j = 0;j<4;j++){
            if (i > 108){
                break;
            }
            i += 1;
            minute[i-1].setAttribute('style', 'transform: rotate(' +o[h2][x] + 'deg)');
            hour[i-1].setAttribute('style', 'transform: rotate(' +o[h2][x+1] + 'deg)');
            x += 2;
        }
        i = i + 14;
    }
}
function hello1() {
    let i = 4;
    let x = 0;
    while(i <= 108){
        for (let j = 0;j<4;j++){
            if (i > 108){
                break;
            }
            i += 1;
            minute[i-1].setAttribute('style', 'transform: rotate(' +o[h1][x] + 'deg)');
            hour[i-1].setAttribute('style', 'transform: rotate(' +o[h1][x+1] + 'deg)');
            x += 2;
        }
        i = i + 14;
    }
}
function hello2() {
    let i = 10;
    let x = 0;
    while(i <= 108){
        for (let j = 0;j<4;j++){
            if (i > 108){
                break;
            }
            i += 1;
            minute[i-1].setAttribute('style', 'transform: rotate(' +o[m2][x] + 'deg)');
            hour[i-1].setAttribute('style', 'transform: rotate(' +o[m2][x+1] + 'deg)');
            x += 2;
        }
        i = i + 14;
    }
}
function hello3() {
    let i = 14;
    let x = 0;
    while(i <= 108){
        for (let j = 0;j<4;j++){
            if (i > 108){
                break;
            }
            i += 1;
            minute[i-1].setAttribute('style', 'transform: rotate(' +o[m1][x] + 'deg)');
            hour[i-1].setAttribute('style', 'transform: rotate(' +o[m1][x+1] + 'deg)');
            x += 2;
        }
        i = i + 14;
    }
}
function dot(){
    i = 8;
    x = 0;
    while(i <= 108){
        for (let j = 0;j<2;j++){
            if (i > 108){
                break;
            }
            i += 1;
            minute[i-1].setAttribute('style', 'transform: rotate(' +o[10][x] + 'deg)');
            hour[i-1].setAttribute('style', 'transform: rotate(' +o[10][x+1] + 'deg)');
            x += 2;
        }
        i = i + 16;
    }
}


timeout = setTimeout(hello,400);
timeout = setTimeout(hello1,400);
timeout = setTimeout(hello2,400);
timeout = setTimeout(hello3,400);
timeout = setTimeout(dot,400);
const d = new Date();
let h = d.getHours();
let m = d.getMinutes();
let h1 = h%10;
let h2 = Math.trunc(h/10);
let m1 = m%10;
let m2 = Math.trunc(m/10);
const res = document.getElementsByClassName("big");
