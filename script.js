let characters = ["q","w","e","r","t","y","u","i","o","a","s","d","f","g","h","j","k","l","z","x","c","v","b","n","m","1","2","3","4","5","6","7","8","9","0","Q","W","E","R","T","Y","U","I","O","P","A","S","D","F","G","H","J","K","L","Z","X","C","V","B","N","M","!","£","$","%","&","?","#","@","+","*"]

let password1 = document.getElementById("password1")
let password2 = document.getElementById("password2")
let password3 = document.getElementById("password3")
let password4 = document.getElementById("password4")

let passwordLength = 16

function generatePasswords(){
	
	let password = ""
	for (let i = 0; i < passwordLength; i ++){
		password += characters[Math.floor(Math.random()*characters.length)]
	}
	password1.textContent = password

	password = ""
	for (let i = 0; i < passwordLength; i ++){
		password += characters[Math.floor(Math.random()*characters.length)]
	}
	password2.textContent = password

	password = ""
	for (let i = 0; i < passwordLength; i ++){
		password += characters[Math.floor(Math.random()*characters.length)]
	}
	password3.textContent = password

	password = ""
	for (let i = 0; i < passwordLength; i ++){
		password += characters[Math.floor(Math.random()*characters.length)]
	}
	password4.textContent = password
}

