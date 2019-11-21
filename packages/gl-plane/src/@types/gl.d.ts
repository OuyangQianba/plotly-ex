
type GLBuffer = {
  bind: () => void
  dispose: () => void
  update: (data:number[], offset?:number) => void
  type: number
}

declare module "gl-buffer" {
  const def: (gl:WebGLRenderingContext,data?:number[]) => GLBuffer 
  export default def
}

declare module "gl-vao" {
  export type GLVAO = {
    bind:()=>void
    unbind: ()=>void
    draw: (mode: number,count: number, offset?:number) => void
    update: typeof def
    dispose: () => void
  }
  type Attribute = {
    buffer: GLBuffer
    type: number
    size: number
  }
  type A1 = [number]
  type A2 = [number,number]
  type A3 = [number,number,number]
  type A4 = [number,number,number]
  
  const def: (gl: WebGLRenderingContext,
    attributes: (Attribute|A1|A2|A3|A4) [],
  )=> GLVAO
  export default def
}

declare module "gl-shader" {
  type ShaderAttribute = {
    location: number
  }
  type Attributes = {
    [name: string]: ShaderAttribute
  }
  type Uniforms = {
    [name:string]: any
  }


  export type GLShader<U extends Uniforms,A extends string> = {
    attributes: {
      [name in A]: ShaderAttribute
    },
    uniforms: U,
    fragShader: WebGLShader,
    vertShader: WebGLShader,
    program: WebGLShader,
    gl: WebGLRenderingContext,
    bind: () => void
    unbind: () => void
    dispose: () => void
  }
  const def : <U extends Uniforms,A extends string>(gl:WebGLRenderingContext,vertxSrc: string, fragSrc: string) => GLShader<U,A>
  export default def
}
type GLTexture = {
  dispose: () => void
  bind: (unit:number) => void
  minFilter:number
  magFilter:number
}
declare module "gl-texture2d" {
  type Width = number
  type Height = number
  type Shape = [Width,Height]
  function createTexture(gl: WebGLRenderingContext,
    image: HTMLImageElement | HTMLCanvasElement | ImageData | HTMLVideoElement | Shape
  ): GLTexture
  export default createTexture 
}
