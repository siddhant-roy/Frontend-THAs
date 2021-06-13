class Cylinder {
  constructor(cylHeight, cylDiameter) {
    this.cylHeight = cylHeight;
    this.cylDiameter = cylDiameter;
  }
  Volume() {
    var radius = this.cylDiameter / 2;
    return this.cylHeight * Math.PI * radius * radius;
  }
}

var cyl = new Cylinder(7, 4);
console.log("volume =", cyl.Volume().toFixed(4));
