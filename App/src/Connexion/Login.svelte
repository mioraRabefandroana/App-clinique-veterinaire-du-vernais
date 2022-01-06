<script>
    import { useForm, validators, Hint, required } from "svelte-use-form@latest";
  
    const form = useForm();
  </script>
  <div class="content">
    <form use:form>
        <h1>Connexion</h1>
        <div>
            <span><i class="fas fa-user"></i></span> <input type="text" name="pseudo" use:validators={[required]} />
            <Hint for="pseudo" on="required">L'identifiant est obligatoire</Hint>
        </div>
        <div>
            <pan><i class="fas fa-lock"></i></pan><input type="password" name="password" use:validators={[required]} />
            <Hint for="password" on="required">Mot de passe obligatoire</Hint>
        </div>
        <div>
            <button disabled={!$form.valid}>Login</button>
        </div>
        <a href="">S'inscire</a>
    </form>
 </div>
  
  <style>
      :global(.touched:invalid) {
          border-color: red;
          outline-color: red;
      }
      button{
          background-color: cornflowerblue;
      }
  </style>