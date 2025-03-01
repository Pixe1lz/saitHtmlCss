function validateEntry () {
	const name = document.getElementById("getName").value; // получаем имя
	const password = document.getElementById("getPassword").value; // получаем пароль
	const errorMessageName = document.getElementById("errorMessageName");
	const errorMessagePassword = document.getElementById("errorMessagePassword");

	const accessDate = "admin"; // правильные данные

	if (name === accessDate && password != accessDate) { // Вход по правильным данным
		errorMessagePassword.textContent = "Неверный пароль";
		errorMessageName.textContent = "";
	} else if (name != accessDate && password === accessDate) {
		errorMessageName.textContent = "Неверное имя";
		errorMessagePassword.textContent = "";
	} else if (name != accessDate && password != accessDate) {
		errorMessageName.textContent = "Неверное имя";
		errorMessagePassword.textContent = "Неверный пароль";
	} else if (name === accessDate && password == accessDate) {
		window.location.href = "index.html";
	}
}