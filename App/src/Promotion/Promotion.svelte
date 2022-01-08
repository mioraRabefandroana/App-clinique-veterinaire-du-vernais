<script>
    import { link } from "svelte-routing";
    import { activeMenu, MENU } from "../store";
    $activeMenu = $MENU.HOME;
</script>
<div class="content">
    <h2>Promotions</h2>
    <div>
       <p>Super promo de bienvenue
-25% pour votre première consultation
Prenez-rendez vous dès maintenant </p>
    </div>
    <a href="appointment/several" use:link>
        Prendre rendez-vous!
    </a>
   
 </div>  
<style>
    div{
        margin: 8px;
    }
    .content{
        background-color: var(--c_blue);
        border-radius: 10px;
        box-shadow: 0 10px 20px rgb(0 0 0 / 10%), 0 6px 6px rgb(0 0 0 / 10%);
        /* padding: 30px 10px; */
        /* margin: 31px; */
        text-align: center;
        max-width: 100%;
        color: white;
    }

    a{
        padding: 10px;
        background-color: white;
        display: block;
        /* border-radius: 5px;
        margin: 5px;
        margin-bottom: 5px; */
    }
    /* button{
        color: var(--c_blue);
        text-align: center;
    } */
</style>