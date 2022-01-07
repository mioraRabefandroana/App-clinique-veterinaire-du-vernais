<script>
    import { activeMenu, MENU } from "../store";
    $activeMenu = $MENU.MAP;
</script>

<style>
    #map{
        color: white;
        background-color: var(--c_blue);
        display: grid;
        grid-template-areas: "t t""x i""c c";
        padding: 5px;
    }
    h2{
        grid-area: t;
        text-align: center;
    }
    .details div{
        grid-area: x;
    }
    i{
        padding: 10px;
    }
    a{    
        justify-self: end;
        grid-area: i;
        text-decoration: unset;
        color: inherit
    }
    img{
        width: 100%;
        margin: auto;
        grid-area: c
    }
</style>
<div id="map" class="page">
    <h2>ADRESSE</h2>
    <div class="details">
        02 Impasse de l'EPI <br>
        18210 Vernais
        <div>Accès parking derrère le bâtiment</div>
    </div>
    <a target="_blank" href="https://www.google.fr/maps/place/16+La+Croix+Saint-Marc,+18210+Vernais/@46.7672032,2.7060968,14.63z/data=!4m5!3m4!1s0x47f0873041deb901:0x5a1f5dbec5ba05e8!8m2!3d46.7655809!4d2.7131517">
        <i class="fas fa-5x fa-directions"></i>
    </a>
    
    <img src="/images/map.png" alt="">
</div>