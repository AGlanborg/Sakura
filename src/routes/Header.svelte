<script>
    import sakura from "$lib/images/blooming-season.png";

    function toggleMode() {
        window.document.body.classList.toggle('dark')
    }
</script>

<header class="default-background">
    <nav>
        <!-- Nav Buttons Container -->
        <div>
            <div class="navSakuraContainer">
                <img src={sakura} alt="sakura" />
            </div>
            <div class="navIcon">
                <span class="material-icons">home</span
                >
            </div>
            <div class="navIcon">
                <span class="material-icons">folder</span
                >
            </div>
            <div class="navIcon">
                <span class="material-icons">table_rows</span
                >
            </div>
        </div>

        <!-- Nav Settings Container -->
        <div>
            <div class="navDevide inverted-background" />
            <div class="navIcon">
                <button on:click={toggleMode}>
                    <span class="material-icons">wb_sunny</span
                    >
                </button>
            </div>
            <div class="navIcon">
                <span class="material-icons">settings</span
                >
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
        border-right-width: 2px;
        border-right-style: solid;
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
        font-size: 35px;
    }

    .navDevide {
        height: 3px;
        width: 70%;
        margin: 15%;
        border-radius: 5px;
    }
</style>
