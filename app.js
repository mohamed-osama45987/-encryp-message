document.querySelector('form').addEventListener('submit', (e) => {
	e.preventDefault();
	const messageForm = document.querySelector('#message-form');
	const linkForm = document.querySelector('#link-form');

	messageForm.classList.add('hide');
	linkForm.classList.remove('hide');

	const input = document.querySelector('#message-input');
	const message = btoa(input.value);

	const link = document.querySelector('#link-input');

	link.value = `${window.location}#${message}`;

	link.select();
});

const { hash } = window.location;

const message = atob(hash.replace('#', ''));

if (message) {
	document.querySelector('#message-form').classList.add('hide');
	document.querySelector('#message-show').classList.remove('hide');

	document.querySelector('h1').innerHTML = message;
}
