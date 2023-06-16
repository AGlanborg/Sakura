<script>
	import sakura from "$lib/images/blooming-season.png";
	import { mode } from "$lib/light-mode.js"

	let modeValue = 1

	mode.subscribe(value => {
		modeValue = value;
	});

	function toggle() {
		mode.update(n => n ? 0 : 1)
		console.log(modeValue)
	}
</script>

<header>
	<nav>
		<!-- Nav Buttons Container -->
		<div>
			<div class="navSakuraContainer">
				<img src={sakura} alt="sakura" />
			</div>
			<div class="navIcon">
				<span class="material-icons">home</span>
			</div>
			<div class="navIcon">
				<span class="material-icons">folder</span>
			</div>
			<div class="navIcon">
				<span class="material-icons">table_rows</span>
			</div>
		</div>

		<!-- Nav Settings Container -->
		<div>
			<div class="navDevideContainer" />
			<div class="navIcon">
				<button on:click={toggle}>
					<span class="material-icons">wb_sunny</span>
				</button>
			</div>
			<div class="navIcon">
				<span class="material-icons">settings</span>
			</div>
		</div>
	</nav>
</header>

<style>
	@import "material-icons/iconfont/material-icons.css";

	header {
		min-width: 100px;
		width: 5vw;
		max-width: 5vw;
		height: 100vh;
		background-color: rgb(220, 220, 220);
		border-right: 2px solid rgb(150, 150, 150);
	}

	header.dark-mode {
		background-color: rgb(100, 100, 100);
	}

	nav {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		height: 100%;
	}

	.navSakuraContainer,
	.navIcon {
		display: flex;
		justify-content: center;
	}

	.navSakuraContainer {
		padding: 20px 0 10px;
	}

	.navIcon {
		margin: 45px 0;
	}

	.material-icons {
		user-select: none;
		cursor: pointer;
		font-size: 35px;
	}

	.navDevideContainer {
		height: 3px;
		width: 70%;
		margin: 15%;
		border-radius: 5px;
		background-color: rgb(150, 150, 150);
	}
</style>
