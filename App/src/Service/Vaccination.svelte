<script>
    import { activeMenu, MENU } from "../store";
    $activeMenu = $MENU.HOME;
</script>
<div class="content page">
    <h2>VACCINATION</h2>

    <p>  La vaccination est très importante pour 
        assurer la bonne santé de vos animaux.
        Notre clinique prend en charge tout type 
        de vaccins.
    </p>
    <div > 
        <button><i class="fas fa-lg fa-calender"> </i> <span>Prendre rendez-vous</span> </button>
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