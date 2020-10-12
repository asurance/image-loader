import { url, width } from './loading.png'
const image = document.createElement('img')
image.src = url
console.log(width)
document.body.appendChild(image)