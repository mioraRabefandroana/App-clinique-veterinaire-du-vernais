<script>
    import { link, navigate} from "svelte-routing";
    import { useForm, validators, Hint, required } from "svelte-use-form";
    import { DB } from "../db";
    const form = useForm();
    let user = { loggedIn: false };

    let username = "user1";
    let password = "toor";
    
    import { activeMenu, currentUser, MENU } from "../store";

	function login(username, password) {
		// user.loggedIn = !user.loggedIn;
        // let user = {username, password}
        // let user = DB
        
        for( let u of $DB.users)
        {
            if(u.name == username && password==password)
            {
                $currentUser = {...u};
                
                console.log("UTILISATEUR CONNECTE");
                console.log($currentUser);

                navigate("/");
                return;
            }
        }

        alert("echec de l'authentification");
	}

    
 </script>

 <div class="form-content">
   <div class="form-header">Connexion</div>
   <form use:form method="post" action="/">
       <div>
           <span><i class="fas fa-user"></i></span>
           <input 
                type="text" 
                name="pseudo" placeholder="Identifiant" 
                bind:value={username}
                use:validators={[required]} />
           <Hint for="pseudo" on="required">L'identifiant est obligatoire</Hint>
       </div>
       <div>
           <span><i class="fas fa-lock"></i></span>
           <input 
                type="password" 
                name="password" 
                placeholder="Mot de passe"
                bind:value={password}
                use:validators={[required]} />
           <Hint for="password" on="required">Mot de passe obligatoire</Hint>
       </div>
       <div>
           <button disabled={!$form.valid} on:click|preventDefault={ ()=>{login(username, password)}}>Se connecter</button>
       </div>
   </form>
   <a href="/register" use:link >S'inscire</a>
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
        /* background-color: var(--c_gray); */
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