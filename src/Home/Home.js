import React ,{Component} from 'react';
import { SearchBar, Icon, Flex} from 'antd-mobile';
import './home.scss';
import pic from './../images/default.jpg';

function drawSky(ctx){
    ctx.save();

    ctx.beginPath();
    ctx.moveTo(0, 400);
    ctx.bezierCurveTo(119, 345, 197, 459, 375, 401);
    ctx.lineTo(375, 0);
    ctx.lineTo(0, 0);
    ctx.closePath();

    var lineStyle = ctx.createRadialGradient(200, 0, 50, 200, 0, 150);
    lineStyle.addColorStop(0, '#42a9aa');
    lineStyle.addColorStop(1, '#2491aa');
    ctx.fillStyle = lineStyle;
    ctx.fill();
    ctx.restore();
}

function drawPrairie(ctx){
    ctx.save();
    ctx.beginPath();
    ctx.moveTo(0, 400);
    ctx.bezierCurveTo(119, 345, 197, 459, 375, 401);
    ctx.lineTo(375, 700);
    ctx.lineTo(0, 700);
    ctx.closePath();

    var lineStyle = ctx.createLinearGradient(0, -100, 800, 0);
    lineStyle.addColorStop(0, '#00aa58');
    lineStyle.addColorStop(0.1, '#63aa78');
    lineStyle.addColorStop(1, '#04aa00');

    ctx.fillStyle = lineStyle;
    ctx.fill();

    ctx.restore();

}


function drawCloud(ctx, cx, cy, cw){
    var maxWidth = 375;
    cx = cx % maxWidth;
    var ch = cw * 0.6;
    ctx.beginPath();
    ctx.fillStyle = "white";

    var grd = ctx.createLinearGradient(0, 0, 0, cy);
    grd.addColorStop(0, 'rgba(255,255,255,0.8)');
    grd.addColorStop(1, 'rgba(255,255,255,0.5)');
    ctx.fillStyle = grd;

    ctx.arc(cx, cy, cw * 0.19, 0, 360, false);
    ctx.arc(cx + cw * 0.08, cy - ch * 0.3, cw * 0.11, 0, 360, false);
    ctx.arc(cx + cw * 0.3, cy - ch * 0.25, cw * 0.25, 0, 360, false);
    ctx.arc(cx + cw * 0.6, cy, cw * 0.21, 0, 360, false);
    ctx.arc(cx + cw * 0.3, cy - ch * 0.1, cw * 0.28, 0, 360, false);

    ctx.closePath();
    ctx.fill();

}

function getColor(){
    const arr = [0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f'];
    let pos1 =  Math.floor(Math.random()*16);
    let pos2 =  Math.floor(Math.random()*16);
    let pos3 =  Math.floor(Math.random()*16);
    let pos4 =  Math.floor(Math.random()*16);
    let pos5 =  Math.floor(Math.random()*16);
    let pos6 =  Math.floor(Math.random()*16);

    let cr = '#'+arr[pos1]+arr[pos2]+arr[pos3]+arr[pos4]+arr[pos5]+arr[pos6];
    return cr;
}

function drawFlower( x, y){
    
    ctx.beginPath();
    ctx.lineWidth = 2;
    ctx.strokeStyle = getColor();
    ctx.moveTo(x,y);           // 创建开始点    

    ctx.beginPath();
    for (let i = 0; i < 2 * Math.PI; i += 0.314) {
        ctx.moveTo(x, y);
        ctx.lineTo(x + (5 * Math.random() + 12) * Math.cos(i), y + (5 * Math.random() + 12) * Math.sin(i));
    }
    ctx.stroke();
    
}


class Line {
    constructor(x, y, a) {
        this.x = x;
        this.y = y;
        this.ang = a;
        this.angVel = 0;
        this.angAcc = 0.4;
    }
    anim() {
        ctx.moveTo(this.x, this.y + 1);
        this.x += 6 * Math.cos(this.ang);
        this.y += 6 * Math.sin(this.ang);
        this.angVel += 0.2 * (Math.random() - Math.random());
        this.angVel *= this.angAcc;
        this.ang += this.angVel;
        ctx.lineWidth = 2;
        ctx.strokeStyle = '#8AC007';
        ctx.lineTo(this.x, this.y);
    }
}
var lines =  new Array();
var count = 0;
var ctx;
var num = 0;
var max = 0;
function draw(){
    setTimeout(()=>{
        requestAnimationFrame(draw);
        if(num == 50) return;
        
        if(lines.length<1){
            num++;
            max = Math.random()*20 + 5;
            lines.push(new Line(320* Math.random(), Math.random()*200+400, -Math.PI / 2));
        }
        count++;
        for (let line of lines) {
            ctx.beginPath();
            line.anim();
            ctx.stroke();
            if(count>max){
                drawFlower(line.x, line.y);
                count = 0;
                lines = [];
               
            }
        }

    },50)
   
    
}


function loading(x){
    ctx.beginPath();
    //ctx.arc(180, 250, 25, 0, 2*Math.PI);
    ctx.stroke(); 
    ctx.font = 'bold 35px Arial';
    ctx.fillStyle = "#000";
    ctx.fillText(x, 175, 250);
}

export default class Home extends Component{
    constructor(props){
        super(props);
        this.state={
        }
    }
    componentDidMount(){
        var c = document.getElementById("myCanvas");
        c.setAttribute("height",window.innerHeight-48);
        c.setAttribute("width",window.innerWidth);
        ctx = c.getContext('2d');
     
        drawPrairie(ctx);
        drawSky(ctx);
        for(let i = 0; i < 5; i++){
            let x0 = 300 * Math.random() + 10;
            let y0 = 200 * Math.random() + 10;
            let c0 = 100 * Math.random() + 10;
            drawCloud(ctx, x0, y0, c0);
        }
        
        for(var i = 1; i <= 12; i++){
            ctx.save();
            ctx.translate(250, 100);
            ctx.rotate(36 * i * Math.PI / 180);
            ctx.fillStyle = "rgba(247,218,62,.5)";
            ctx.fillRect(0, -30, 30, 30);
            ctx.restore();
        }
        // let start = 5;
        // let  inte= setInterval(()=>{
        //     if(start == 0){
        //         clearInterval(inte);
        //     }
        //     loading(start);
        //     start--;

        // },1000);
        

        draw();

        c.addEventListener("click", function(e){
            
            window.location.href = "/#/cover";
        })


    }

    componentWillUnmount(){
        num = 0;
    }

    


    render(){
        return (
            <div>
                 <canvas className="canvas" id="myCanvas">你的浏览器居然不支持Canvas？！赶快换一个吧！！</canvas>
            </div>
           
        )
    }
}