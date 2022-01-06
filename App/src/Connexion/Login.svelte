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
          background-color: var(--c_blue);
          color: var(--c_white);
          margin: 4px 2px;
          cursor: pointer; 
      }
      :disabled{
          background-color: var(--c_gray);
      }
      .form-content{
        display: grid;
        grid-auto-flow: row;
        grid-row-gap: 3px; 
        align-content: center;
        background-color: var(--c_white);    
      }
      .form-header{
        color: var(--c_blue);
        align-content: center;
        text-align: center;
      }
      div{
          text-align: center;
          font-size: x-large;
      }
     a{
         text-align: right;
     }
  </style>