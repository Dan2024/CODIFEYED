export default function standardTreeSketch(p) {
  let angle
  let slider

  p.setup = function () {
    p.createCanvas(400, 400)
    slider = p.createSlider(0, 2 * p.PI, p.PI / 2, 0.01)
    slider.position(20, p.height)
    slider.style('z-index: 10')
  }

  p.draw = function () {
    p.background(112, 128, 144)
    angle = slider.value()
    p.translate(p.width / 2, p.height - 20)
    p.branch(75)
  }

  p.branch = function (len) {
    p.stroke(255)
    p.line(0, 0, 0, -len)
    p.translate(0, -len)
    if (len > 4) {
      p.push()
      p.rotate(angle)
      p.branch(len * 0.75)
      p.pop()
      p.push()
      p.rotate(-angle)
      p.branch(len * 0.75)
      p.pop()
    }
  }
  //   let root
  //   let tree = []

  //   p.setup = function () {
  //     const cnv = p.createCanvas(550, 300)

  //     const a = p.createVector(p.width / 2, p.height)
  //     const b = p.createVector(p.width / 2, p.height - 100)
  //     root = new Branch(a, b)

  //     tree[0] = root

  //     cnv.mousePressed(() => {
  //       for (let i = tree.length - 1; i >= 0; i--) {
  //         if (!tree[i].finished) {
  //           tree.push(tree[i].branchA())
  //           tree.push(tree[i].branchB())
  //         }
  //         tree[i].finished = true
  //       }
  //       console.log(tree)
  //     })
  //   }

  //   p.draw = function () {
  //     p.background(51)

  //     for (let i = 0; i < tree.length; i++) {
  //       tree[i].show()
  //     }
  //   }

  //   class Branch {
  //     constructor(begin, end) {
  //       this.begin = begin
  //       this.end = end
  //       this.finished = false
  //     }

  //     jitter() {
  //       this.end.x += p.random(-1, 1)
  //       this.end.y += p.random(-1, 1)
  //     }

  //     show() {
  //       p.stroke(255)
  //       p.line(this.begin.x, this.begin.y, this.end.x, this.end.y)
  //     }

  //     branchA() {
  //       console.log(p)
  //       let dir = p.p5.Vector.sub(this.end, this.begin)
  //       dir.rotate(p.PI / 6) // opp for alteration
  //       dir.mult(0.67) // opp for alteration
  //       let newEnd = p.p5.Vector.add(this.end, dir)
  //       let branch = new Branch(this.end, newEnd)
  //       return branch
  //     }

  //     branchB() {
  //       let dir = p.p5.Vector.sub(this.end, this.begin)
  //       dir.rotate(-p.PI / 4)
  //       dir.mult(0.67)
  //       let newEnd = p.p5.Vector.add(this.end, dir)
  //       let branch = new Branch(this.end, newEnd)
  //       return branch
  //     }
  //   }
}
