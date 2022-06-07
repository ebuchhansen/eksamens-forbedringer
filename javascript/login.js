let objPeople = [
	{
		username: "amalie",
		password: "jensen"
	},
	{
		username: "andrea",
		password: "lyng"
	},
	{
		username: "julie",
		password: "bekker"
	},
    {
        username: "emilie",
        password: "hansen"
    }

];

function getInfo() {
	let username = document.getElementById('username').value;
	let password = document.getElementById('password').value;

	for(let i = 0; i < objPeople.length; i++) {

		if(username == objPeople[i].username && password == objPeople[i].password) {
			console.log(username + " er logget ind");

            location.href = "https://cillecamille.dk/projekt6/egen-side.html";

			return;
		}
	}
	console.log("forkert brugernavn eller kodeord");
}