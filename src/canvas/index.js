import React ,{Component} from 'react';
import './canvas.scss';
var numLines = 0;
var y = 0;
var lines=null ;
var width = 0;
var height  = 0;
var canvas = null;
var ctx = null;
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
        // if (Math.random() > 0.98) {
        //     if (this.angAcc === 0.4) this.angAcc = 0.98;
        //     else this.angAcc = 0.4;
        // }
        ctx.lineTo(this.x, this.y);
        // if (Math.random() > 0.96 && numLines < 20) {
        //     lines.add(new Line(width / 2, height, -Math.PI / 2));
        //     numLines++;
        // }
        console.log(this.x, this.y);
        if (this.x < -20 || this.x > width + 20 || this.y > height || this.y < 30) {
            if (numLines > 1) {
                numLines--;
               // lines.delete(this);
                ctx.beginPath();
                for (let i = 0; i < 2 * Math.PI; i += 0.314) {
                    ctx.moveTo(this.x, this.y);
                    ctx.lineTo(this.x + (5 * Math.random() + 12) * Math.cos(i), this.y + (5 * Math.random() + 12) * Math.sin(i));
                }
                ctx.stroke();
            }
        }
    }
}


function run() {
    requestAnimationFrame(run);
    //ctx.drawImage(canvas, 0, 1);
    //for (let line of lines) {
        ctx.beginPath();
        lines.anim();
        ctx.stroke();
  //  }
}


export default class Home extends Component{
    constructor(props){
        super(props);
        this.state={
        }
    }

    componentDidMount(){
         canvas = document.getElementById('myCanvas');
         ctx = canvas.getContext('2d');
         width = canvas.width = canvas.offsetWidth * 1;
         height = canvas.height = canvas.offsetHeight * 1;
         ctx.strokeStyle = "#654";
        
        
        ctx.fillStyle = "#fff";
        ctx.fillRect(0, 0, width, height);
        //lines.add(new Line(width / 2, height, -Math.PI / 2));
        lines = new Line(width / 2, height, -Math.PI /2);
        run();
    }


    
    render(){
        return (
            <canvas className="canvas" id="myCanvas">你的浏览器居然不支持Canvas？！赶快换一个吧！！</canvas>
        )
    }
}