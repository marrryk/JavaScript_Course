class Contacts {

	header() {
		return `<header class="header">
					<div class="container top-radius">
						<h2>Contacts</h2>
					</div>
				</header>`;
	}
	main() {
		return `<main>
		<div class="container">
			<form class="form-inline search-form">
				<div class="form-group">
					<label class="sr-only" for="search">Search</label>
					<input type="text" class="form-control" id= "search" placeholder="Search">
				</div>
			</form>
			<table class="table table-hover contacts">
				<thead>
					<tr>
						<th>Name</th>
						<th>Last name</th>
						<th>Email</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>Иван</td>
						<td>Петров</td>
						<td>IvanPetrov@ec.ua</td>
					</tr>
					<tr>
						<td>Сергей</td>
						<td>Сергеев</td>
						<td>SergeiSergeev@ec.ua</td>
					</tr>
					<tr>
						<td>Иван</td>
						<td>Иванов</td>
						<td >IvanIvanov@ec.ua</td>
					</tr>
					<tr>
						<td>Александр</td>
						<td>Александров</td>
						<td >AlexAlex@ec.ua</td>
					</tr>
					<tr>
						<td>Алекс</td>
						<td>Смирнов</td>
						<td>AlexSmirnov@ec.ua</td>
					</tr>
					<tr>
						<td>Сергей</td>
						<td>Волков</td>
						<td>VolkovSergey@ec.ua</td>
					</tr>
					<tr>
						<td>Светлана</td>
						<td>Шарапова</td>
						<td>MariyaSharapova@ec.ua</td>
					</tr>
					<tr>
						<td>Александр</td>
						<td>Винник</td>
						<td>AlexVinnik@ec.ua</td>
					</tr>
					<tr>
						<td>Дарий</td>
						<td>Смирнов</td>
						<td>DariySmirnov@ec.ua</td>
					</tr>
					<tr>
						<td>Елена</td>
						<td>Лещенко</td>
						<td>ElenaLeshenko@ec.ua</td>
					</tr>
					<tr>
						<td>Ольга</td>
						<td>Новикова</td>
						<td>OlgaNovikova@ec.ua</td>
					</tr>
					<tr>
						<td>Наталья</td>
						<td>Шемякина</td>
						<td>ShemyakinaN@ec.ua</td>
					</tr>
					<tr>
						<td>Анна</td>
						<td>Донцова</td>
						<td>AnnaDontsova@ec.ua</td>
					</tr>
					<tr>
						<td>Влад</td>
						<td>Яма</td>
						<td>VladYama@ec.ua</td>
					</tr>
					<tr>
						<td>Кира</td>
						<td>Воробьева</td>
						<td>Kira1990@ec.ua</td>
					</tr>
					<tr>
						<td>Виктор</td>
						<td>Кривенко</td>
						<td>ViktorKriv@ec.ua</td>
					</tr>
				</tbody>
			</table>
		</div>
	</main>`
	}
	footer() {
		return `<footer class="footer">
		<div class="container bottom-radius">
			<nav class="main-nav">
				<a href="index.html" class="tab active">
					<span class="glyphicon glyphicon-search" aria-hidden="true"></span>
					<span class = "tab-text">Contacts</span>
				</a>
				<a href="keypad.html" class="tab">
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

let contacts = new Contacts();
contacts.render();