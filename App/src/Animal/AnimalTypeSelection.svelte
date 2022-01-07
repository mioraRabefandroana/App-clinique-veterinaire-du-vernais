<script>
    import { link } from "svelte-routing";

    export let image = "";
    export let text = "";
    export let type = "";
</script>

<style>
    .animal-type-selection{
        display: grid;
        grid-template-areas: "area";
        grid-template-columns: max-content;
        /* width: fit-content; */
        border: 1px solid black;
        text-align: center;
        align-content: center;
        width: 84px;
        height: 87;
        border-radius: 10px;
        overflow: hidden;
        cursor: pointer;
        text-decoration: none;
        color: inherit;
    }
    .animal-type-selection img{
        height: 100%;
        width: 100%;
    }
    .animal-type-selection *{
        grid-area: area;
        /* margin: auto; */
    }
   
    .animal-type-selection .animal-type-selection-text{
        align-self: end;
        justify-self: center;
        background: rgba(20, 248, 20, 0.651);
        width: 100%;
        border-bottom-left-radius: 10px;
        border-bottom-right-radius: 10px;
    }

    .animal-type-selection:first-child{
        grid-row: 1/3;
        height: unset;

        display: grid;
        grid-template-rows: 1fr max-content;
    }
    .animal-type-selection:first-child img{
        width: 85px;
        text-align: center;
    }
</style>

<a href="{ "appointment/"+ type }" use:link
    class="animal-type-selection">
    <img src={image} alt="">
    <div class="animal-type-selection-text">{ text }</div>
</a>