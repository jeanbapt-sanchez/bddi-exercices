const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')

canvas.width = 200
canvas.height = 200

let counter = 0

/*function animate()
{
    requestAnimationFrame(animate)

    ctx.moveTo(counter, 0)
    ctx.lineTo(200, 100)
    ctx.stroke()

    counter++
}*/

function animate()
{
    canvas.width = canvas.width
    requestAnimationFrame(animate)

    ctx.moveTo(counter % canvas.width, 0)
    ctx.lineTo(canvas.width - (counter % canvas.width), 200)
    ctx.stroke()

    counter++
}

animate()