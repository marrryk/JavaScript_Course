class Keypad {

	header() {
		return `<header class="header">
					<div class="container top-radius">
						<h2>Keypad</h2>
					</div>
				</header>`;
	}
	main() {
		return `<main class="main">
		<div class="container">
			<div class="number">
				<span class="glyphicon glyphicon-plus-sign" aria-hidden="true"></span>
				<span class ="numbers">(050)5005050</span>
				<span class="glyphicon glyphicon-circle-arrow-left" aria-hidden="true"></span>
			</div>
			<div class="keypad-holder">
				<button class="key">1</button>
				<button class="key">2</button>
				<button class="key">3</button>
				<button class="key">4</button>
				<button class="key">5</button>
				<button class="key">6</button>
				<button class="key">7</button>
				<button class="key">8</button>
				<button class="key">9</button>
				<button class="key">*</button>
				<button class="key">0</button>
				<button class="key">#</button>
				<button class="key"> <span class="glyphicon glyphicon-earphone" aria-hidden="true"></span></button>
			</div>
		</div>
	</main>`
	}
	footer() {
		return `<footer class="footer">
		<div class="container bottom-radius">
			<nav class="main-nav">
				<a href="index.html" class="tab">
					<span class="glyphicon glyphicon-search" aria-hidden="true"></span>
					<span class = "tab-text">Contacts</span>
				</a>
				<a href="keypad.html" class="tab active">
					<span class="glyphicon glyphicon-th" aria-hidden="true"></span>
					<span class = "tab-text">Keypad</span>
				</a>
				<a href="edit-contact.html" class="tab">
					<span class="glyphicon glyphicon-pencil" aria-hidden="true"></span>
					<span class = "tab-text">Edit contact</span>
				</a>
				<a href="user.html" class="tab">
					<span class="glyphicon glyphicon-user" aria-hidden="true"></span>
					<span class = "tab-text">User</span>
				</a>
				<a href="add-user.html" class="tab">
					<span class="glyphicon glyphicon-plus" aria-hidden="true"></span>
					<span class = "tab-text">Add user</span>
				</a>
			</nav>
		</div>
	</footer>`;
	}
	render() {
		var app = document.getElementsByClassName('app')[0];
		app.innerHTML = `${this.header()}${this.main()}${this.footer()}`;
	}
}

let keypad = new Keypad();
keypad.render();


var button = document.querySelectorAll('.key');
for(let i=0; i<button.length-1; i++) {
	button[i].onclick = function(){
		var span = document.getElementsByClassName('numbers')[0];
		var num = button[i].textContent;
		console.log(num);
		span.innerHTML = num;
	};
}
