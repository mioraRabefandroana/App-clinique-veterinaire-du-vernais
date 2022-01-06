<script>
    import { link } from "svelte-routing";

    export let image = "";
    export let text = "";
    export let type = "";
</script>

<style>
    .animal-selection{
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
    .animal-selection img{
        height: 100%;
        width: 100%;
    }
    .animal-selection *{
        grid-area: area;
        /* margin: auto; */
    }
   
    .animal-selection .animal-selection-text{
        align-self: end;
        justify-self: center;
        background: rgba(20, 248, 20, 0.651);
        width: 100%;
        border-bottom-left-radius: 10px;
        border-bottom-right-radius: 10px;
    }

    .animal-selection:first-child{
        grid-row: 1/3;
        height: unset;

        display: grid;
        grid-template-rows: 1fr max-content;
    }
    .animal-selection:first-child img{
        width: 85px;
        text-align: center;
    }
</style>

<a href="{ "appointment/"+ type }" use:link
    class="animal-selection">
    <img src={image} alt="">
    <div class="animal-selection-text">{text}</div>
</a>