export default function customizableTreeSketch(p) {
  const lSystemTreeObj1 = {
    len: 100,
    lenMult: 0.55,
    axiom: 'F',
    angle: p.radians(p.random(20, 30)),
    rules: [
      {
        a: 'F',
        b: 'FF-[XY]+[XY]',
      },
      {
        a: 'X',
        b: '+FY',
      },
      {
        a: 'Y',
        b: '-FX',
      },
    ],
  }

  const lSystemTreeObj2 = {
    len: 100,
    lenMult: 0.79,
    axiom: 'VZFFF',
    angle: p.radians(p.random(20, 30)),
    rules: [
      {
        a: 'V',
        b: '[+++W][---W]YV',
      },
      {
        a: 'W',
        b: '+X[-W]Z',
      },
      {
        a: 'X',
        b: '-W[+X]Z',
      },
      {
        a: 'Y',
        b: 'YZ',
      },
      {
        a: 'Z',
        b: '[-FFF][+FFF]F',
      },
    ],
  }

  const lSystemTreeObj3 = {
    len: 100,
    lenMult: 0.55,
    axiom: 'Y',
    angle: p.radians(p.random(20, 30)),
    rules: [
      {
        a: 'X',
        b: 'X[-FFF][+FFF]FX',
      },
      {
        a: 'Y',
        b: 'YFX[+Y][-Y]',
      },
    ],
  }

  const lSystemTreeObj4 = {
    len: 100,
    lenMult: 0.53,
    axiom: 'X',
    angle: p.radians(p.random(20, 30)),
    rules: [
      {
        a: 'F',
        b: 'FF',
      },
      {
        a: 'X',
        b: 'F-[[X]+X]+F[+FX]-X',
      },
    ],
  }

  const lSystemTreeObj5 = {
    len: 100,
    lenMult: 0.45,
    axiom: 'F',
    angle: p.radians(p.random(20, 30)),
    rules: [
      {
        a: 'F',
        b: 'F[+FF][-FF]F[-F][+F]F',
      },
    ],
  }

  const lSystemTreeObj6 = {
    len: 100,
    lenMult: 0.5,
    axiom: 'F',
    angle: p.radians(p.random(20, 30)),
    rules: [
      {
        a: 'F',
        b: 'FF+[+F-F-F]-[-F+F+F]',
      },
    ],
  }

  const lSystemTrees = [
    lSystemTreeObj1,
    lSystemTreeObj2,
    lSystemTreeObj3,
    lSystemTreeObj4,
    lSystemTreeObj5,
    lSystemTreeObj6,
  ]

  p.getRandomTree = function () {
    return lSystemTrees[[Math.floor(Math.random() * lSystemTrees.length)]]
  }

  let tree = p.getRandomTree()

  p.setup = function () {
    p.createCanvas(400, 400)
    p.background(51)
    p.drawTree()

    let button = p.createButton('generate')
    button.mousePressed(p.generate)

    // let newTreeBtn = p.createButton('new tree')
    // newTreeBtn.mousePressed(() => {

    //   tree = p.getRandomTree
    // })
  }

  p.generate = function () {
    tree.len *= tree.lenMult
    let nextLSystemStr = ''

    for (let i = 0; i < tree.axiom.length; i++) {
      let current = tree.axiom[i]
      let found = false

      for (let j = 0; j < tree.rules.length; j++) {
        if (current === tree.rules[j].a) {
          found = true
          nextLSystemStr += tree.rules[j].b
          break
        }
      }
      if (!found) {
        nextLSystemStr += current
      }
    }
    tree.axiom = nextLSystemStr
    p.drawTree()
  }

  p.drawTree = function () {
    p.background(51)
    p.resetMatrix()
    p.translate(p.width / 2, p.height)
    p.stroke(255, 100)

    for (let i = 0; i < tree.axiom.length; i++) {
      switch (tree.axiom[i]) {
        case 'F':
          p.line(0, 0, 0, -tree.len)
          p.translate(0, -tree.len)
          break

        case '+':
          p.rotate(tree.angle)
          break

        case '-':
          p.rotate(-tree.angle)
          break

        case '[':
          p.push()
          break

        case ']':
          p.pop()
          break

        default:
          break
      }
    }
  }
}
