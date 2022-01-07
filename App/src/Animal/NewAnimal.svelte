<!-- Inspired by svelte official website -->
<script>
	import AnimalForm from './AnimalForm.svelte';
	import Steps from '../RegisterForm/Steps.svelte';
	let steps = ['Catégorie', 'Info', 'Image', 'Confirmation'], currentActive = 1, progressBar;
	
	const handleProgress = (stepIncrement) => {
		progressBar.handleProgress(stepIncrement)
	}
	
</script>

<main>
	<div class="container">
        <h2>AJOUT D'ANIMAL</h2>
		<Steps {steps} bind:currentActive bind:this={progressBar}/>
		
		<AnimalForm active_step={steps[currentActive-1]}/>

		<div class="step-button">			
            <button class="btn" on:click={() => handleProgress(-1)} disabled={currentActive == 1}>Précédent</button>
			<button class="btn" on:click={() => handleProgress(+1)} disabled={currentActive == steps.length}>Suivant</button>
		</div>		
	</div>	  
</main>

<style>

	@import url('https://fonts.googleapis.com/css?family=Muli&display=swap');
	
	* {
		box-sizing: border-box;
	}

    h2{
        color: var(--c_blue);
        text-align: center;
    }

	main {
		font-family: 'Muli', sans-serif;
		display: flex;
		align-items: center;
		justify-content: center;
		height: 100vh;
		overflow: hidden;
		margin: 0;
	}

	.btn {
		background-color: #3498db;
		color: #fff;
		border: 0;
		border-radius: 6px;
		cursor: pointer;
		font-family: inherit;
		padding: 8px 30px;
		margin: 5px;
		font-size: 24px;
	}

	.btn:active {
		transform: scale(0.98);
	}

	.btn:focus {
		outline: 0;
	}

	.btn:disabled {
		background-color: #e0e0e0;
		cursor: not-allowed;
	}
	
	.step-button{
		margin-top: 1rem;
		text-align: center;
	}
</style>