<form class="login" action="changePassword.php?id=<?=$_GET['id']?>"" method="post">
	<fieldset>
		<ul>
			<li>
				<input required type="text" placeholder="email" name="email"/>
			</li>
			<li>
				<input required type="password" placeholder="password" name="psw"/>
			</li>
			<li>
        <input required type="password" placeholder="check password" name="psw"/>
      </li>
			<li>
				<input type="submit" value="connect"/>
			</li>
		</ul>
	</fieldset>
</form>
