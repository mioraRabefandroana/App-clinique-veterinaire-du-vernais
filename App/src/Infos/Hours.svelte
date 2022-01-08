<script>
    import { activeMenu, MENU } from "../store";
    $activeMenu = $MENU.HOUR;
</script>
<div class="page">
    <h2>Horaires</h2>
    <div class="content">
        <ul>
            <li> Du lundi au vendredi: 09h00-18h00</li>
            <li> Samedi: 09h00-14h00</li>
            <li> Dimanches et jours fériés : Fermé</li>
        </ul>
    </div>
 </div>  
<style>
    
    div{
        margin: 8px;
    }
    h2{
        /* color: white; */
        text-align: center;
    }
    .content{
        background-color: var(--c_blue);
        border-radius: 10px;
        box-shadow: 0 10px 20px rgb(0 0 0 / 10%), 0 6px 6px rgb(0 0 0 / 10%);
        /* padding: 30px 10px; */
        /* margin: 31px; */
        /* text-align: center; */
        max-width: 100%;
        padding: 20px;
        color: white;
    }
</style>