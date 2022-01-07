<script>
    import { currentUser } from "../store";



    $: animals = $currentUser.animals
</script>

<style>
    .animal img{
        width: 60px;
        height: 60px;
        border-radius: 60px;
    }

    .animal{
        display: grid;
        grid-template-areas: "img details""name details";
        grid-template-columns: max-content auto;
        grid-column-gap: 20px;
        margin-bottom: 10px;
        border: 1px solid;
        padding: 5px;
    }

    .animal-name{
        grid-area: name;
        font-weight: bold;
        text-align: center;
    }
    .animal-details{
        grid-area: details;
        /* font-size: 12px; */
    }
</style>

<div class="page">
    <!-- TODO : rediriger vers new animal  -->
    <a href="/animal/new">
        <div id="new-animal-btn">
            <i class="fas fa-lg fa-plus"></i>
            <span>Ajouter un animal</span>
        </div>
    </a>
    <div id="animal-list">
        {#each animals as animal}
            <div class="animal">
                <img src={animal.image} alt={animal.name}>
                <div class="animal-name">{ animal.name }</div>
                <div class="animal-details">
                    <div>- Né le : { animal.dateOfBirth }</div>
                    <div>- Catégorie : { animal.category }</div>
                    <div>- Race : { animal.breed }</div>
                    <div>- Poids :{ animal.weight }</div>
                </div>
            </div>
        {/each}
    </div>
</div>