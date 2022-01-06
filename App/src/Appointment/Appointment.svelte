<script>
    import { ANIMAL_TYPE } from "../store";
    export let type="";
</script>
{#if type }
    <div>Rendez vous pour {type}</div>
{:else}
    <div>Rendez vous sans type</div>
{/if}