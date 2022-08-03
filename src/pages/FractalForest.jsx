import StandardTree from '../Fractal-Tree-components/StandardTree'
import CustomizableTree from '../Fractal-Tree-components/CustomisableTree'
import LSystemTree from '../Fractal-Tree-components/LSystemTree'

export default function FractalForest() {
  return (
    <div>
      <StandardTree />
      <CustomizableTree />
      <LSystemTree />
    </div>
  )
}
