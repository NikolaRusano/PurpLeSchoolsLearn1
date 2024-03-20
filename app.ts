interface User {
	name: string;
	email: string;
	login: string;
}

const user: User = {
	name: 'Vasya',
	email: 'vasiliy@yandex.ru',
	login: 'vasia'
}

interface Admin {
	name: string,
	role: number
}


function logId(id: string | number) {
	if (typeof id === 'string') {
		console.log(id);
	} else if (typeof id === 'number') {
		console.log(id);
	}
	id
}

function isString(x: string | number): x is string {
	return typeof x === 'string';
}

function isAdmin(user: User | Admin): user is Admin {
	return 'role' in user;
}

function setRole(user: User | Admin) {
	if (user)
}