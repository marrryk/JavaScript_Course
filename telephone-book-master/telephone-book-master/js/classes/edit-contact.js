class editContact {

	header() {
		return `<header class="header">
					<div class="container top-radius">
						<nav class="user-top-line">
							<a href="user.html">Cansel</a>
							<button  type = "submit" form = "edit-contact" formaction="#" formmethod="get" class = "done-btn">Done</button>
						</nav>
					</div>
				</header>`;
	}
	main() {
		return `<main class="main">
		<div class="container">
			<div class="edit-main-info">
				<div class="edit-foto"><img src="images/user-face.png" alt="#" class=" user-img img-circle center-block"></div>
				<div class="main-info-holder">
					<div class="edit-field">
						<button href="#" class="add-btn"><span class="glyphicon glyphicon-plus-sign" aria-hidden="true"></span>
							<span>First Name</span>
						</button>
					</div>
					<div class="edit-field">
						<button href="#" class="add-btn"><span class="glyphicon glyphicon-plus-sign" aria-hidden="true"></span>
							<span>Last Name</span>
						</button>
					</div>
					<div class="edit-field">
						<button href="#" class="add-btn"><span class="glyphicon glyphicon-plus-sign" aria-hidden="true"></span>
							<span>Company</span>
						</button>
					</div>
				</div>
			</div>
			<div class="scroll-holder">
				<div class="edit-info">
					<div class="edit-field">
						<button href="#" class="delete-btn"><span class="glyphicon glyphicon-minus-sign" aria-hidden="true"></span>
							<span>phone</span>
							<span>+38 (063) 733 44 55</span>
							</button>
						</div>
						<div class="edit-field">
							<button href="#" class="add-btn"><span class="glyphicon glyphicon-plus-sign" aria-hidden="true"></span>
								<span>add  home phone</span>
							</button>
						</div>
						<div class="edit-field">
							<button href="#" class="add-btn"><span class="glyphicon glyphicon-plus-sign" aria-hidden="true"></span>
								<span>add email</span>
							</button>
						</div>
						<div class="edit-field">
							<button href="#" class="add-btn"><span class="glyphicon glyphicon-plus-sign" aria-hidden="true"></span>
								<span>add address</span>
							</button>
						</div>
						<div class="edit-field">
							<button href="#" class="add-btn"><span class="glyphicon glyphicon-plus-sign" aria-hidden="true"></span>
								<span>add birthday</span>
							</button>
						</div>
						<div class="edit-field">
							<button href="#" class="add-btn"><span class="glyphicon glyphicon-plus-sign" aria-hidden="true"></span>
								<span>add social profile</span>
							</button>
						</div>
						<div class="edit-field">
							<button href="#" class="add-btn"><span class="glyphicon glyphicon-plus-sign" aria-hidden="true"></span>
								<span>add field</span>
							</button>
						</div>
						<div class="edit-field">
							<button href="#" class="delete-contact">delete contact</button>
						</div>
					</div>
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
							<a href="keypad.html" class="tab">
								<span class="glyphicon glyphicon-th" aria-hidden="true"></span>
								<span class = "tab-text">Keypad</span>
							</a>
							<a href="edit-contact.html" class="tab active">
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

let editcontact = new editContact();
editcontact.render();