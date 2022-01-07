<script>
    import { useForm, validators, Hint, required } from "svelte-use-form";
    import {formData} from '../store.js'

	export let active_step;
    let types = ['Particulier','Professionnel'];
    let selectedType = 'Particulier';
    let gender = ['Homme','Femme'];
    let registerForm = useForm();
    const handleSubmit = () => {
		console.log("Voici vos données => ",formData);
	}

</script>

<form use:registerForm class="form-container" on:submit={handleSubmit}>
	{#if active_step == 'Info'}
        {#each types as type }
            <input type=radio bind:group={formData.type} name="type" value={type} use:validators={[required]} />
            {type}  
        {/each}
       
       <!-- If user is a person -->
       {#if selectedType == 'Particulier'}
       <label>Nom</label>
           <input class="input" label="Nom" type="text" name="firstname" bind:value={formData.firstname} use:validators={[required]} placeholder="Votre nom de famille"/>
           <Hint for="firstname" on="required">Le nom est obligatoire</Hint>
       
      <label>Prénom</label>
       
           <input class="input" type="text" name="lastname" bind:value={formData.lastname} placeholder="Votre prénom" use:validators={[required]} />
           <Hint for="lastname" on="required">Le prénom est obligatoire</Hint>
       
       
        <label>Profession</label>
     
           <input class="input" type="text" name="profession" bind:value={formData.profession} placeholder="Votre profession" use:validators={[required]} />
           <Hint for="profession" on="required">La profession est obligatoire</Hint> <br/>
    
           {#each gender as gender }
               <input type=radio bind:group={formData.gender} id="gender" name="gender" value={gender} use:validators={[required]}>
               {gender}  
           {/each}
   
        {:else if selectedType == 'Professionnel'}
            <label>Nom</label>
                <input class="input" type="text" name="companyname" bind:value={formData.companyname} use:validators={[required]} placeholder="Le nom de votre entreprise ou association"/>
                <Hint for="firstname" on="required">Le nom est obligatoire</Hint>
           <label>Activité</label>
                <textarea  name="activity" placeholder="Decrivez votre activité" use:validators={[required]} >
                </textarea>
                <Hint for="activity" on="required">L'activité est obligatoire</Hint>
        {/if}

    {:else if active_step == 'Contact'}
         <label>Adresse</label>
            <input type="text" name="address" use:validators={[required]} bind:value={formData.address} placeholder="Votre adresse"/>
            <Hint for="address" on="required">L'adresse est obligatoire</Hint>
        
        <label>Numéro de téléphone</label>
            <input type="text" name="phonenumber" placeholder="Votre numéro de téléphone" use:validators={[required]}  bind:value={formData.phone}/>
            <Hint for="phonenumber" on="required">Le numéro est obligatoire</Hint>
        
        <label>Mail</label>
            <input type="email" name="mail" placeholder="Votre mail" use:validators={[required]} bind:value={formData.mail}/>
            <Hint for="mail" on="required">L'adresse mail est obligatoire</Hint>
	{:else if active_step == 'Mot de passe'}
        <label>Mot de passe</label>
            <input type="password" name="password" use:validators={[required]} bind:value={formData.password} placeholder="Entrer un mot de passe"/>
            <Hint for="password" on="required">Le mot de passe est obligatoire</Hint>
        <label>Confirmation mot de passe</label>
            <input type="password" name="password" placeholder="Confirmer le mot de passe" bind:value={formData.confirmationPass} use:validators={[required]} />
            <Hint for="password" on="required">Ce champ est obligatoire</Hint>
        <label>Code de vérification</label>
            <input type="text" name="code" placeholder="Veuillez saisir le code reçu" bind:value={formData.code} use:validators={[required]} />
            <Hint for="code" on="required">Ce champ est obligatoire</Hint>
	{:else if active_step == 'Confirmation' }
		<div class="message">
			<!-- <h2>Votre compte a été créé avec succès!</h2> -->
			<button class="btn submit">Valider l'inscription </button>
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
    /* width: 100%; */
    /* height: 8em; */
    /* size: 10px; */
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
    input[type=text],input[type=email],input[type=password]{
		width: 100%;
		/* display: block; */
		padding: 0.5rem 0;
		margin-top: 0.5rem;
		border-width: 1px;
		border-radius: 0.25rem;
	}
</style>