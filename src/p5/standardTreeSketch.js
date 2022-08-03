import p5 from 'p5'

export default function standardTreeSketch(p) {
  let root
  let tree = []

  p.setup = function () {
    const cnv = p.createCanvas(550, 300)

    const a = p.createVector(p.width / 2, p.height)
    const b = p.createVector(p.width / 2, p.height - 100)
    root = new Branch(a, b)

    tree[0] = root

    cnv.mousePressed(() => {
      for (let i = tree.length - 1; i >= 0; i--) {
        if (!tree[i].finished) {
          tree.push(tree[i].branchA())
          tree.push(tree[i].branchB())
        }
        tree[i].finished = true
      }
    })
  }

  p.draw = function () {
    p.background(220)

    for (let i = 0; i < tree.length; i++) {
      tree[i].show()
    }
  }

  class Branch {
    constructor(begin, end) {
      this.begin = begin
      this.end = end
      this.finished = false
    }

    show() {
      p.stroke(24, 52, 70)
      p.line(this.begin.x, this.begin.y, this.end.x, this.end.y)
    }

    branchA() {
      let dir = p5.Vector.sub(this.end, this.begin)
      dir.rotate(p.PI / 6)
      dir.mult(0.67)
      let newEnd = p5.Vector.add(this.end, dir)
      let b = new Branch(this.end, newEnd)
      return b
    }

    branchB() {
      let dir = p5.Vector.sub(this.end, this.begin)
      dir.rotate(-p.PI / 4)
      dir.mult(0.67)
      let newEnd = p5.Vector.add(this.end, dir)
      let b = new Branch(this.end, newEnd)
      return b
    }
  }
}
