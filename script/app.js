

function borderValue() {
  const topLeft = document.getElementById("topLeft").value
  const topRight = document.getElementById("topRight").value
  const bottomRight = document.getElementById("bottomRight").value
  const bottomLeft = document.getElementById("bottomLeft").value




  document.getElementById("box").style.borderRadius = `${topLeft}px ${topRight}px ${bottomRight}px ${bottomLeft}px`

  const copyRadius = `border-radius:
  ${topLeft}px 
  ${topRight}px 
  ${bottomRight}px 
  ${bottomLeft}px;`

  document.getElementById("borderValue").value = copyRadius

}

document.getElementById("copy").addEventListener('click', () => {
  document.getElementById("borderValue").select()
  document.execCommand("copy")
})