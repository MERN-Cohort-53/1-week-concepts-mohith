const form = document.getElementById('form')
form.addEventListener('submit', onsubmit)
function onsubmit(e){
  e.preventDefault()
  let weight = document.querySelector('#weight').value 
  console.log(weight)
  let select = document.querySelector('.planets').value
  console.log(select)
  let message = document.querySelector(".text")
  const image = document.querySelector('.container')
  console.log(image)
// weight on different planet conversion
  let merc = weight * 0.38
  let ven = weight * 0.91
  let ert = weight * 1.00
  let mar = weight * 0.38
  let jup = weight * 2.34
  let satu = weight * 1.06
  let urn = weight * 0.92
  let nept = weight * 1.19
  let plu = weight * 0.06

  if(weight == "" || weight == null){
    message.innerText = "Please Enter The Mass"
    setTimeout(() => message.remove(), 5000)
  }
  else if(select == "mercury"){
    message.innerText = `The Weight of the object on Mercury is ${merc} kg`
    image.src= " images/mercury.png"
    setTimeout(() => message.remove(), 5000)
  }
  else if(select == "venus"){
    message.innerText = `The Weight of the object on Venus is ${ven} kg`
    image.src= " images/venus.png"
    setTimeout(() => message.remove(), 5000)
  }
  else if(select == "earth"){
    message.innerText = `The Weight of the object on Earth is ${ert} kg`
    image.src= " images/earth.png"
    setTimeout(() => message.remove(), 5000)
  }
  else if(select == "mars"){
    message.innerText = `The Weight of the object on Mars is ${mar} kg`
    image.src= " images/mars.png"
    setTimeout(() => message.remove(), 5000)
  }
  else if(select == "jupiter"){
    message.innerText = `The Weight of the object on Jupiter is ${jup} kg`
    image.src= " images/jupiter.png"
    setTimeout(() => message.remove(), 5000)
  }
  else if(select == "saturn"){
    message.innerText = `The Weight of the object on Saturn is ${satu} kg`
    image.src= " images/saturn.png"
    setTimeout(() => message.remove(), 5000)
  }
  else if(select == "uranus"){
    message.innerText = `The Weight of the object on Uranus is ${urn} kg`
    image.src= " images/uranus.png"
    setTimeout(() => message.remove(), 5000)
  }
  else if(select == "neptune"){
    message.innerText = `The Weight of the object on Neptune is ${nept} kg`
    image.src= " images/neptune.png"
    setTimeout(() => message.remove(), 5000)
  }
  else if(select == "pluto"){
    message.innerText = `The Weight of the object on Pluto is ${plu} kg`
    image.src= " images/pluto.png"
    setTimeout(() => message.remove(), 5000)
  }
}