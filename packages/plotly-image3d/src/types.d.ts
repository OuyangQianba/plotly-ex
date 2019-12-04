import { GLPlaneOption } from 'gl-plane'
export type Mat4 = [
  number,number,number,number,
  number,number,number,number,
  number,number,number,number,
  number,number,number,number,
]
export type GLDrawable = {
  draw:(param:any) => void
}
export type GLPlot = {
  gl: WebGLRenderingContext
  add: (glDrawable:GLDrawable) => void
  remove: (glDrawable: GLDrawable) => void
  redraw: () => void
}

type Axis = {
}

export type Scene = {
  camera: {
    matrix: Mat4
  },
  dataScale: [number,number,number],
  fullSceneLayout: {
    xaxis: Axis
    yaxis: Axis
    zaxis: Axis
  },
  glplot: GLPlot
}

export type Data = {
  type: 'image3d',
  x: [number,number,number,number],
  y: [number,number,number,number],
  z: [number,number,number,number],
  opacity?: number,
  source: string
  texture: HTMLImageElement
}
