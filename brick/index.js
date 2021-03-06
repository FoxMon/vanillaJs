// canvas
const canvas = document.getElementById("canvas")
const canvasContext = canvas.getContext("2d")

const width = 720
const height = 800
const uiOffset = 80

canvas.width = width
canvas.height = height

const CanvasDraw = {}
CanvasDraw.lineDraw = function(x1, y1, x2, y2, color="#000") {
    canvasContext.beginPath()
    canvasContext.strokeStyle = color
    canvasContext.lineWidth = 2
    canvasContext.moveTo(x1,y1)
    canvasContext.lineTo(x2, y2)
    canvasContext.stroke()
}

// 점선
CanvasDraw.dashLineDraw = function(x1, y1, x2, y2) {
    canvasContext.beginPath()
    canvasContext.setLineDash([5, 15])
    canvasContext.moveTo(x1, y1)
    canvasContext.lineTo(x2, y2)
    canvasContext.stroke()
    canvasContext.setLineDash([])
}

// 사각형
CanvasDraw.rectangle = function(x, y, w, h) {
    canvasContext.beginPath()
    canvasContext.rect(x, y, w, h)
    canvasContext.strokeStyle = "#000"
    canvasContext.stroke()
    canvasContext.closePath()
}

CanvasDraw.fillRectangle = function(x, y, w, h, color="#171717") {
    canvasContext.save()
    canvasContext.rec(x, y, w, h)
    canvasContext.strokeStyle = "#000"
    canvasContext.stroke()
    canvasContext.closePath()
}

CanvasDraw.circle = function(x, y, r, color="#000") {
    canvasContext.save()
    canvasContext.beginPath()
    canvasContext.arc(x, y, r, 0, Math.PI * 2)
    canvasContext.lineWidth = 3
    canvasContext.fillStyle = color
    canvasContext.strokeStyle = color
    canvasContext.fill()
    canvasContext.stroke()
    canvasContext.closePath()
    canvasContext.restore()
}

CanvasDraw.clear =  function() {
    canvasContext.clearRect(0, 0, width, height)
}

CanvasDraw.shuffle = function(arr) {
    return arr.sort(() => Math.random() - 0.5)
}
////

// ui
class Ui {
    constructor() {}

    show(state) {
        CanvasDraw.lineDraw(0, uiOffset, width, uiOffset)
        CanvasDraw.lineDraw(0, height - uiOffset, width, height - uiOffset)
        this.showBallCount(state)
        this.showScore(state)
    }

    showBallCount(state) {
        if(!state.ballMoving) {
            canvasContext.fillText(
                `x${state.ballCount}`,
                state.ballPosition.x - 10,
                height - 55
            );
        }
    }

    showScore(state) {
        canvasContext.fillText(`Current Score: ${state.level}`, 30, uiOffset / 2 + 7)
        canvasContext.fillText(
            `Top Socre: ${state.bestLevel}`,
            width - 150,
            uiOffset / 2 + 7
        )
    }
}
////

// game
class Game {
    constructor() {
        this.state = {}
    }
}