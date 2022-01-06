<script>
import FooterNav from "../Common/FooterNav.svelte";
import HeaderNav from "../Common/HeaderNav.svelte";
import AnimalSelection from "../Common/AnimalSelection.svelte";
import Login from "../Connexion/Login.svelte";
import {animalSelections} from "../store.js"
import Services from "../Common/Services.svelte";
import Register from "../Connexion/Register.svelte";

</script>

<style>
    #services-content{
        display: grid;
        grid-auto-flow: row;
        grid-row-gap: 3px;
    }

    #home-intro img{
        width: 100%;
    }
    #home-intro p{
        text-align: center;
        margin: unset;
    }

    .home-content{
        border: 2px solid blue;
        border-radius: 20px;
        padding: 10px;
    }
    .home-content h2{
        margin: unset;

        display: grid;
        grid-template-columns: 1fr max-content;
        align-items: center;
    }

    .home-content i{
        color: var(--c_green)
    }

    #animal-selection{
        display: grid;
        grid-template-rows: auto auto;
        grid-auto-flow: column;
        grid-auto-columns: max-content;
        grid-gap: 5px;
    }
</style>
<div id="home">
    <div id="promotion"></div>
    <div id="home-header">
        <HeaderNav/>
    </div>
    <div id="home-content">
        <Login/>
    </div>
    <div id="home-footer">
        <FooterNav/>
    </div>
</div>