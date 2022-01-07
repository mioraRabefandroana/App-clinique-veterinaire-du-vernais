<script>
	import { DB } from '../db';
    import { link, navigate} from "svelte-routing";
 
    import {animalData, animalType, currentUser} from '../store';
	export let active_step;
    // let categories = ['Chien','Chat','Poisson','Oiseau','Rongeur','Reptile'];
    let categories = Object.values(animalType);
    const handleSubmit = () => {		
        // create user
        let newAnimal = {...animalData, ...{
            id: Date.now(),
			catetegory: animalData.category.toLowerCase()
		}}

		$currentUser.animals = $currentUser.animals || [];
		$currentUser.animals = [...$currentUser.animals, newAnimal];
		
		$DB.users = $DB.users.map(u => {
			if(u.id == $currentUser.id)
			{
				u.animals = [...u.animals, newAnimal]
			}
		})

		console.log($currentUser.animals)
        navigate("/animal");
	}

</script>

<form action='/' class="form-container" on:submit|preventDefault={handleSubmit}>
	{#if active_step == 'Catégorie'}
        {#each categories as category }
            <input type=radio bind:group={animalData.category} name="type" value={category} />
            {category}  
        {/each}
    {:else if active_step == 'Info'}   
        <label>Nom</label>
           <input class="input" label="Nom" type="text" name="firstname" bind:value={animalData.name} placeholder="Le nom de l'animal"/>       
        <label>Race</label>
           <input class="input" type="text" name="breed" bind:value={animalData.breed} placeholder="La race" />
        <label>Poids</label>
           <input class="input" type="text" name="weight" bind:value={animalData.weight} placeholder="Le poids" />
        <label>Date de naissance</label>
           <input class="input" type="text" name="birth" bind:value={animalData.dateOfBirth} placeholder="Date de naissance" />
    {:else if active_step == 'Image'}
         <label>Image</label>
            <input type="text" name="image" bind:value={animalData.image} placeholder="Url de l'image"/>        
	{:else if active_step == 'Confirmation' }
		<div class="message">
			<!-- <h2>Votre compte a été créé avec succès!</h2> -->
			<button class="btn submit">Valider l'ajout </button>
		</div>
	{/if}
</form>

<style>

	.form-container {
		background-color: #fff;
		border-radius: 10px;
		box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1), 0 6px 6px rgba(0, 0, 0, 0.1);
		padding: 50px 20px;
		text-align: center;
		max-width: 100%;
		width: 350px;
	}
	.btn{
		color: white;
		padding: 0.5rem 0;
		margin-top: 0.5rem;
		display: inline-block;
		width: 100%;
		border-radius: 0.25rem;
		cursor:pointer;
	}
	.submit{
		background:linear-gradient(to bottom, #3498db 5%, #3498db 100%);
		background-color:var(--c_blue);
	}
	.submit:hover {
		background:linear-gradient(to bottom, #3498db 5%, #3498db 100%);
		background-color:#3498db;
	}

    input[type=radio] {
    border: 0px;
    font-size: 20px;
    margin: 10px;
    padding: 10px;
}

	.message{
		text-align: center;
        color: var(--c_green);
	}
    label{
        text-align: left;
        color: var(--c_blue);
    }
    input[type=text]{
		width: 100%;
		/* display: block; */
		padding: 0.5rem 0;
		margin-top: 0.5rem;
		border-width: 1px;
		border-radius: 0.25rem;
	}
</style>