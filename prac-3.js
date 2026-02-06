const radius = [3, 1, 2, 4];

function Circle(){
    this.calculateArea = function (radius) {
        const ans = [];
        for(let i=0;i<radius.length;i++){
            ans.push(Math.PI *radius[i]*radius[i]);
        }
        return ans;
    }

    this.calculateCircumference = function(radius){
        const ans = [];
        for(let i=0;i<radius.length;i++){
            ans.push(2*Math.PI*radius[i]);
        }
        return ans;
    }

    this.diameter = function(radius){
        const ans = [];
        for(let i=0;i<radius.length;i++){
            ans.push(2*radius[i]);
        }
        return ans;
    }
}
var c = new Circle();
console.log(c.calculateArea(radius));
console.log(c.calculateCircumference(radius));
console.log(c.diameter(radius));