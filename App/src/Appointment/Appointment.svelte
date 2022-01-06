<script>
    import { DB } from "../db";

    import { ANIMAL_TYPE, currentUser } from "../store";
    export let type="";
    let animals = $currentUser.animals || [];
    console.log(animals);
</script>
<!-- {JSON.stringify($DB)} -->
{#if type }
    <div>Rendez vous pour {type}</div>
    {#each animals as animal}
        {JSON.stringify(animal)}
    {/each}
{:else}
    <div>Rendez vous sans type</div>
{/if}