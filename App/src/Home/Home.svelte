<script>
import FooterNav from "../Common/FooterNav.svelte";
import HeaderNav from "../Common/HeaderNav.svelte";
import AnimalSelection from "../Common/AnimalSelection.svelte";

import {animalSelections} from "../store.js"
import Services from "../Common/Services.svelte";

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
        <div id="home-intro">
            <img src="images/background_clinique.png" alt="clinique">
            <p>
                Sauver l'espoir, sauver les animaux qui sont notre espoir <br>
                "Konnar Lorenz" <br>
                La bien être de vos animaux de compagnie est notre priorité
            </p>
        </div>
        <div id="making-appointment" class="home-content">
            <h2 id="making-appointment-title"><span>Prise de rendez-vous</span><i class="fas fa-calendar-alt"></i></h2>
            <div id="animal-selection">
                {#each $animalSelections as animalSelection}
                    <AnimalSelection text={animalSelection.text} image={animalSelection.image}/>
                {/each}                
            </div>
        </div>
        <div id="services" class="home-content">
            <h2 id="services-title"><span>Nos services</span><i class="fas fa-first-aid"></i></h2>
            <div id="services-content">
                <Services/>
            </div>
        </div>
    </div>
    <div id="home-footer">
        <FooterNav/>
    </div>
</div>