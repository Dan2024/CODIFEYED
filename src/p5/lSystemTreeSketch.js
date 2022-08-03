export default function customizableTreeSketch(p) {
  const lSystemTreeObj1 = {
    len: 110,
    lenMult: 0.6,
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
    clear: function (tree) {
      tree.len = 110
      tree.axiom = 'F'
    },
  }

  const lSystemTreeObj2 = {
    len: 110,
    lenMult: 0.83,
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
    clear: function (tree) {
      tree.len = 110
      tree.axiom = 'VZFFF'
    },
  }

  const lSystemTreeObj3 = {
    len: 110,
    lenMult: 0.63,
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
    clear: function (tree) {
      tree.len = 110
      tree.axiom = 'Y'
    },
  }

  const lSystemTreeObj4 = {
    len: 110,
    lenMult: 0.57,
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
    clear: function (tree) {
      tree.len = 110
      tree.axiom = 'X'
    },
  }

  const lSystemTreeObj5 = {
    len: 120,
    lenMult: 0.55,
    axiom: 'F',
    angle: p.radians(p.random(20, 30)),
    rules: [
      {
        a: 'F',
        b: 'F[+FF][-FF]F[-F][+F]F',
      },
    ],
    clear: function (tree) {
      tree.len = 120
      tree.axiom = 'F'
    },
  }

  const lSystemTreeObj6 = {
    len: 120,
    axiom: 'F',
    lenMult: 0.57,
    angle: p.radians(p.random(20, 30)),
    rules: [
      {
        a: 'F',
        b: 'FF+[+F-F-F]-[-F+F+F]',
      },
    ],
    clear: function (tree) {
      tree.len = 120
      tree.axiom = 'F'
    },
  }

  const lSystemTrees = [
    lSystemTreeObj1,
    lSystemTreeObj2,
    lSystemTreeObj3,
    lSystemTreeObj4,
    lSystemTreeObj5,
    lSystemTreeObj6,
  ]
  let num = 0
  p.getNewTree = function () {
    if (num < lSystemTrees.length) num++
    if (num === lSystemTrees.length) num = 0
    return lSystemTrees[[num]]
  }

  let tree = p.getNewTree()

  p.setup = function () {
    p.createCanvas(600, 700)
    p.background(220)
    p.drawTree()

    let button = p.createButton('generate')
    button.mousePressed(p.generate)

    let newTreeBtn = p.createButton('new tree')
    newTreeBtn.mousePressed(() => {
      tree = p.getNewTree()
      tree.clear(tree)
      p.clear()
      p.background(220)
    })
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
    p.background(220)
    p.resetMatrix()
    p.translate(p.width / 2, p.height)
    p.stroke(24, 52, 70)

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
