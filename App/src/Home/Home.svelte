<script>
import FooterNav from "../Common/FooterNav.svelte";
import HeaderNav from "../Common/HeaderNav.svelte";
import AnimalTypeSelection from "../Animal/AnimalTypeSelection.svelte"
    import { Router, Link, link, Route } from "svelte-routing";

import {animalTypeSelections, currentUser, promotions} from "../store.js"
import Services from "../Common/Services.svelte";
import HomeIntro from "./HomeIntro.svelte";


export function getCurrentUser(){
    return null; // DEBUG

    if("id" in $currentUser && $currentUser["id"])
        return $currentUser;
    return null;
}

function isAuthenticated(){
    // debugger;
    return getCurrentUser();
}

</script>

<style>
    #services-content{
        display: grid;
        grid-auto-flow: row;
        grid-row-gap: 3px;
    }

    #home-intro{
        border: unset !important;
    }
    /* wrapper */
    #home-content{
        margin-bottom: 80px;
    }
    /* content */
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

    .home-content{
        /* border: 1px solid red; */
        margin-bottom: 5px;
    }

    #animal-type-selection{
        display: grid;
        grid-template-rows: auto auto;
        grid-auto-flow: column;
        grid-auto-columns: max-content;
        grid-gap: 5px;

        padding: 5px;
        overflow: hidden;
    }

    #promotion{
        width: 100%;
        /* margin-left: -8px;
        margin-right: -8px; */

        border: unset;
        padding: unset;
    }
    .promotion{
        background: red;
        font-size: 13px;
        width: 100%;
        display: block;
        text-decoration: unset;
        color: white;
        text-align: center;
        padding-top: 3px;
        padding-bottom: 3px;
    }

</style>
<div id="home">
    <div id="home-header">
        
    </div>
    <div id="home-content">
        <div id="home-intro" class="home-content">
            {#if !isAuthenticated()}
                <HomeIntro/>
            {/if}            
        </div>

        <div id="promotion" class="home-content">
            {#each $promotions as promotion}
                <a class="promotion" href={ promotion.url }>{ promotion.text }</a>
            {/each}
        </div>

        <div id="making-appointment" class="home-content">
            <h2 id="making-appointment-title"><span>Prise de rendez-vous</span><i class="fas fa-calendar-alt"></i></h2>
            <div id="animal-type-selection">
                {#each $animalTypeSelections as animalTypeSelection}
                    <AnimalTypeSelection text={ animalTypeSelection.text } image={ animalTypeSelection.image } type={ animalTypeSelection.type }/>
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
        <!-- <FooterNav user={ $currentUser }/> -->
    </div>
</div>