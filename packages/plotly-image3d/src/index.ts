import { createImage3dTrace } from "./convert"
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
      const image = new Image()
      if(new URL(traceIn.source).origin!==location.origin) {
        image.crossOrigin = ''
      }
      image.src = traceIn.source
      traceOut.texture = image
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
