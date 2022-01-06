<script>
     import { useForm, validators, Hint, required } from "svelte-use-form";
    
     const form = useForm();
  </script>

  <div class="form-content">
    <div class="form-header">Connexion</div>
    <form use:form>
        <div>
            <span><i class="fas fa-user"></i></span> <input type="text" name="pseudo" placeholder="Identifiant" use:validators={[required]} />
            <Hint for="pseudo" on="required">L'identifiant est obligatoire</Hint>
        </div>
        <div>
            <pan><i class="fas fa-lock"></i></pan> <input type="password" name="password" placeholder="Mot de passe" use:validators={[required]} />
            <Hint for="password" on="required">Mot de passe obligatoire</Hint>
        </div>
        <div>
            <button disabled={!$form.valid}>Se connecter</button>
        </div>
    </form>
    <a href="#" >S'inscire</a>
 </div>

  <style>
      :global(.touched:invalid) {
          border-color: red;
          outline-color: red;
      }
      button{
        color: white;
		padding: 0.5rem 0;
		margin-top: 0.5rem;
		display: inline-block;
		width: 100%;
		border-radius: 0.25rem;
		cursor:pointer; 
        background-color: var(--c_blue);
      }
      :disabled{
          background-color: var(--c_gray);
      }
      .form-content{
        background-color: #fff;
		border-radius: 10px;
		box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1), 0 6px 6px rgba(0, 0, 0, 0.1);
		padding: 50px 20px;
		text-align: center;
		max-width: 100%;
		width: 350px;    
      }
      .form-header{
        color: var(--c_blue);
        align-content: center;
        text-align: center;
      }
      input[type=text],input[type=password]{
		padding: 0.5rem 0;
		margin-top: 0.5rem;
		border-width: 1px;
		border-radius: 0.25rem;
	}
      div{
          text-align: center;
          font-size: x-large;
      }
     a{
         text-align: right;
     }
  </style>