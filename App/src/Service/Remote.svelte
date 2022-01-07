<script>
    import { activeMenu, MENU } from "../store";
    $activeMenu = $MENU.HOME;
</script>
<div class="content page">
    <h2>CONSULTATION A DISTANCE</h2>

    <p>  Notre service de consultation à distance 
        vous garantis un soutien sans avoir à se 
        déplacer:<br/>
        
        1. Je prends rendez-vous pour une consultation 
        à distance <br/>
        2. J'obtiens un lien de visioconférence <br/>
        3. Je me connecte au lien le jour du 
        rendez-vous pour la consultation
    </p>
    <div > 
        <button><i class="fas fa-lg fa-calender"> </i> <span>Rendez-vous</span> </button>
    </div>

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
        margin-top: 80px;
    }
</style>