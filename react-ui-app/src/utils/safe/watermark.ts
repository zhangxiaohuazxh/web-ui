// @ts-nocheck
function createWatermark(
    text: string,
    color = 'rgba(0, 0, 0, 0.1)',
    rotate = -20,
) {
    const canvas = document.createElement('canvas')
    const ctx = canvas.getContext('2d')

    // 1. 设置 Canvas 尺寸 (决定水印平铺图案的大小)
    const width = 200
    const height = 150
    canvas.width = width
    canvas.height = height

    // 2. 绘制水印文本
    ctx.clearRect(0, 0, width, height)
    ctx.font = '16px Microsoft Yahei'
    ctx.fillStyle = color
    ctx.textAlign = 'center'
    ctx.textBaseline = 'middle'

    // 3. 旋转 (在中心点进行旋转)
    ctx.translate(width / 2, height / 2)
    ctx.rotate((Math.PI / 180) * rotate)
    ctx.fillText(text, 0, 0)
    ctx.translate(-width / 2, -height / 2) // 还原

    // 4. 导出为 Data URL
    return canvas.toDataURL()
}

export { createWatermark }
