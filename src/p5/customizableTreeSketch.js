export default function customizableTreeSketch(p) {
  p.setup = function () {
    p.createCanvas(500, 500)
    p.angleMode(p.DEGREES)
    p.noLoop()
  }

  p.draw = function () {
    p.background(112, 128, 144)
    p.translate(p.width / 2, p.height / 2 + 150)
    p.branch(70)
  }

  p.branch = function (len) {
    p.push()
    if (len > 4) {
      p.strokeWeight(p.map(len, 10, 100, 1, 15))
      p.stroke(70, 40, 20)
      p.line(0, 0, 0, -len)
      p.translate(0, -len)
      p.rotate(p.random(-20, -30))
      p.branch(len * p.random(0.7, 0.9))
      p.rotate(p.random(50, 60))
      p.branch(len * p.random(0.7, 0.9))
    } else {
      p.ellipse(0, 0, 4)
      p.fill(14, 60, 28, 150)
      p.noStroke()
    }
    p.pop()

    p.newRandomTree = function () {
      p.clear()
      p.background(112, 128, 144)
      p.branch(70)
    }
  }
}
