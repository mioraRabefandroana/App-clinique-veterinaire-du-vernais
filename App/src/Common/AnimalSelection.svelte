<script>
export let image = "";
export let text = "";
</script>

<style>
    .animal-selection{
        display: grid;
        grid-template-areas: "area";
        grid-template-columns: max-content;
        width: fit-content;
        border: 1px solid black;
        text-align: center;
        align-content: center;
        width: 120px;
        height: 90px;
    }
    .animal-selection img{
        height: 100%;
    }
    .animal-selection *{
        grid-area: area;
        margin: auto;
    }
    .animal-selection div{
        align-self: end;
    }
</style>

<div class="animal-selection">
    <img src={image} alt="">
    <div>{text}</div>
</div>