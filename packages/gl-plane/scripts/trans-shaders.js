#!env node
const fs = require('fs')
const path = require("path")
const glslify = require("glslify")
const shadersPath = path.resolve(
  __dirname,"../shaders"
)
const outputPath = path.resolve(
  __dirname,"../src/shaders"
)

fs.readdirSync(shadersPath)
  .filter(f=>f.endsWith("glsl"))
  .forEach(f=>{
    const {name} = path.parse(f)
    const result = glslify(`${shadersPath}/${f}`)
    fs.writeFileSync(
      `${outputPath}/${name}.ts`,
      `export default \`${result}\``,
      {
        flag:'w'
      }
    )
  })


//fs.readdirSync(path.resolve(
//  __dirname,
//  "../shaders"
//))
//  .forEach(f=>{
//    console.log(f)
//  })
