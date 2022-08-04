export default function pendulumSketch(p) {
  let a1 = 0
  let a2 = 0
  let a1_v = 0
  let a2_v = 0

  let px2 = -1
  let py2 = -1
  let cx, cy

  let cnv

  let gSlider = p.createSlider(0.1, 4, 1, 0.1)
  gSlider.style('width', '200px')

  let m1Slider = p.createSlider(1, 100, 10, 1)
  m1Slider.style('width', '200px')

  let m2Slider = p.createSlider(1, 100, 10, 1)
  m2Slider.style('width', '200px')

  let r1Slider = p.createSlider(1, 200, 120, 1)
  r1Slider.style('width', '200px')

  let r2Slider = p.createSlider(1, 300, 225, 1)
  r2Slider.style('width', '200px')

  let dampeningSlider = p.createSlider(0.99, 0.99999999, 0.99999999, 0.00001)
  dampeningSlider.style('width', '200px')

  p.setup = function () {
    p.createCanvas(800, 600)
    p.pixelDensity(1)
    a1 = p.PI / 2
    a2 = p.PI / 2
    cx = p.width / 2
    cy = 50

    cnv = p.createGraphics(p.width, p.height)
    cnv.background(220)
    cnv.translate(cx, cy)
  }

  p.draw = function () {
    let gVal = gSlider.value()
    let m1Val = m1Slider.value()
    let m2Val = m2Slider.value()
    let r1Val = r1Slider.value()
    let r2Val = r2Slider.value()

    p.background(220)
    p.imageMode(p.CORNER)
    p.image(cnv, 0, 0, p.width, p.height)

    let num1 = -gVal * (2 * m1Val + m2Val) * p.sin(a1)
    let num2 = -m2Val * gVal * p.sin(a1 - 2 * a2)
    let num3 = -2 * p.sin(a1 - a2) * m2Val
    let num4 = a2_v * a2_v * r2Val + a1_v * a1_v * r1Val * p.cos(a1 - a2)
    let den = r1Val * (2 * m1Val + m2Val - m2Val * p.cos(2 * a1 - 2 * a2))
    let a1_a = (num1 + num2 + num3 * num4) / den

    num1 = 2 * p.sin(a1 - a2)
    num2 = a1_v * a1_v * r1Val * (m1Val + m2Val)
    num3 = gVal * (m1Val + m2Val) * p.cos(a1)
    num4 = a2_v * a2_v * r2Val * m2Val * p.cos(a1 - a2)
    den = r2Val * (2 * m1Val + m2Val - m2Val * p.cos(2 * a1 - 2 * a2))
    let a2_a = (num1 * (num2 + num3 + num4)) / den

    p.translate(cx, cy)
    p.stroke(0)
    p.strokeWeight(2)

    let x1 = r1Val * p.sin(a1)
    let y1 = r1Val * p.cos(a1)

    let x2 = x1 + r2Val * p.sin(a2)
    let y2 = y1 + r2Val * p.cos(a2)

    p.line(0, 0, x1, y1)
    p.fill(0)
    p.ellipse(x1, y1, m1Val, m1Val)

    p.line(x1, y1, x2, y2)
    p.fill(0)
    p.ellipse(x2, y2, m2Val, m2Val)

    a1_v += a1_a
    a2_v += a2_a
    a1 += a1_v
    a2 += a2_v

    // dampening
    a1_v *= dampeningSlider.value()
    a2_v *= dampeningSlider.value()

    cnv.stroke(24, 52, 70)
    cnv.strokeWeight(1)
    if (p.frameCount > 1) {
      cnv.line(px2, py2, x2, y2)
    }

    px2 = x2
    py2 = y2
  }
}
