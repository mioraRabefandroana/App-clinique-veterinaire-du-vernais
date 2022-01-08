<script>
    import { activeMenu, MENU } from "../store";
    $activeMenu = $MENU.CONTACT;
</script>
<div class="content page">
    <h2>CONTACTS</h2>
    <div > 
        <i class="fas fa-lg fa-phone"> </i> <span>07-00-00-00-00</span> 
    </div>

    <div > 
        <i class="fas fa-lg fa-envelope"> </i> <span>contact@clinivernais.com</span> 
    </div>

    <div>
        <h4>Formulaire de contact</h4>
        <label for="name">Nom complet</label>
        <input name="name">
        
        <label for="mail">E-mail</label>
        <input name="mail">

        <label for="msg">Message</label>
        <textarea name="msg"></textarea>
    </div>
    <button type="submit">Envoyer</button>
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
</style>