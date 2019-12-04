# `plotly-image3d`

> Plot 3d-image 

## Usage

```
const { registerImage3d } = require("plotly-image3d")
const plotly = require('plotly.js')
registerImage3d(Plotly.register, Plotly.Plots.getModule)

plotly.rect(document.body,
    [{
      type: 'image3d',
      x: [0, 0, 1, 1, 0],
      y: [0, 0, 1, 1, 0],
      z: [0, 1, 1, 0, 0],
      opacity: 1,
      source: 'url to image'
    }]
    )
```
