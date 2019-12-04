import { createImage3dTrace } from "./convert"
import { Data } from "./types"
export function registerImage3d(
  register: (m: any) => void,
  getModule: (name: string) => any
) {
  const {attributes, basePlotModule, supplyDefaults } = getModule("scatter3d")
  register({
    attributes,
    basePlotModule,
    supplyDefaults(traceIn: any, traceOut: any, ...others: any[]) {
      supplyDefaults(traceIn, traceOut, ...others)
      traceOut.texture = new Image()
      traceOut.texture.src = traceIn.source
    },
    plot: createImage3dTrace,
    categories: ["gl3d"],
    moduleType: "trace",
    name: "image3d",
    meta: {
      description: "Show 3d image"
    }
  })
}
