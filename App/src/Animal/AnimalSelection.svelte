<script>
import { createEventDispatcher } from "svelte";

    import { link } from "svelte-routing";

    export let animal = {
        selected: false
    };

    // defaut animal image
    const defaultAnimalImage = "images/paw.png"

    const dispatch = createEventDispatcher()

    function onChange(e){
        console.log("change");
        dispatch("change", {selected: animal.selected});
    }

</script>

<style>
    .animal-selection{
        display: grid;
        grid-template-columns: 30px max-content;
        align-items: center;
        grid-column-gap: 0px;
        width: fit-content;
        padding: 5px;
        padding-left: 15px;

        background-color: var(--c_blue);
        border-radius: 10px;
    }
    .animal-selection-details{
        display: grid;
        grid-template-rows: max-content max-content;
    }
    .animal-selection-img{
        width: 80px;
        height: 80px;
        border-radius: 40px;
    }
    .animal-selection-name{
        text-align: center;
        color: white;
        font-weight: bold;
    }
    .animal-selection-check{
        /* border: 2px solid white; */
        transform: scale(2.5);
    }

    .new-animal-btn{
        display: grid;
        align-items: center;
        border: 1px dashed gray;
        padding:  5px;
        border-radius: 10px;
        text-align: center;
        vertical-align: middle;
    }
</style>
<!-- animal selection -->
{#if (animal.id)}
    <label class="animal-selection">
        <input class="animal-selection-check" 
            type="checkbox" 
            name="animal" 
            value={ animal.id }  
            bind:checked={ animal.selected } 
            on:change={ onChange }>
        <div class="animal-selection-details">
            <img class="animal-selection-img" src={ animal.image || defaultAnimalImage } alt="{ animal.name }">
            <div class="animal-selection-name">{ animal.name }</div>
        </div>
    </label>
{:else}
<!-- new animal link -->
    <a class="new-animal-btn" 
        href="/animal/new" 
        use:link>
        <i class="fas fa-lg fa-plus"></i>
        <div>Ajouter <br>un animal</div>
    </a>
{/if}