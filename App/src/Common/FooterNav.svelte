<script>
    import Contact from "../Infos/Contact.svelte";
    import { Router, Link, link, Route } from "svelte-routing";
    import { activeMenu, ANIMAL_TYPE, MENU } from "../store";

    export let user=null;
    function goToHome()
    {
        $activeMenu = $MENU.HOME;
    }
    function goToContact()
    {
        // new Contact({
        //     target: document.querySelector("#home")
        // });
        $activeMenu = $MENU.CONTACT;
    }
    function goToMap()
    {
        $activeMenu = $MENU.MAP;
    }
    function goToHour()
    {
        $activeMenu = $MENU.HOUR;
    }
    function goToAppointment()
    {
        $activeMenu = $MENU.APPOINTMENT;
    }
    function goToAnimal()
    {
        $activeMenu = $MENU.ANIMAL;
    }
    function goToInfo()
    {
        $activeMenu = $MENU.INFO;
    }

    let url="";

</script>
<style>
    nav{
        display: grid;
        grid-auto-flow: column;
    }
    #footer-nav{
        position: fixed;
        bottom: 0px;
        left: 0px;

        grid-auto-columns: auto;
        align-content: center;
        margin: auto;
        text-align: center;
        background: white;
        width: 100%;

        box-shadow: 0px -1px 3px silver;
    }
    .footer-nav-item i{
        color: var(--c_blue);
    }
    .footer-nav-item{
        padding-top: 10px;
        text-align: center;
    }

    .footer-nav-item[activeMenu=true]{
        background-color: blue;
        color: white;
    }
    .footer-nav-item[activeMenu=true] i{
        color: white
    }
    #footer-nav a{
        text-decoration: unset;
        color: inherit;
    }
</style>
<footer>
    <nav id="footer-nav">
        <a href="/" use:link>
            <div 
                class="footer-nav-item" 
                on:click={ goToHome }
                activeMenu={ $activeMenu == $MENU.HOME }>
                <i class="fas fa-lg fa-home"></i>
                <div>Accueil</div>
            </div>
        </a>
        {#if !user}
            <!-- user not authenticated-->
            <a href="contact" use:link>
                <div 
                    class="footer-nav-item" 
                    on:click={ goToContact }
                    activeMenu={ $activeMenu == $MENU.CONTACT }>
                    <i class="fas fa-lg fa-phone"></i>
                    <div>Contacts</div>
                </div>
            </a>

            <a href="map" use:link>
                <div 
                    class="footer-nav-item"                    
                    on:click={ goToMap }
                    activeMenu={ $activeMenu == $MENU.MAP }>
                    <i class="fas fa-lg fa-map-marker-alt"></i>
                    <div>S'y rendre</div>
                </div>
            </a>
            <a href="hours" use:link>
                <div 
                    class="footer-nav-item"
                    on:click={ goToHour }
                    activeMenu={ $activeMenu == $MENU.HOUR }>
                    <i class="fas fa-lg fa-info-circle"></i>
                    <div>Horaire</div>
                </div>
            </a>
        {:else}
            <!-- user not authenticated-->
            <a href="myappointment" use:link>
                <div 
                    class="footer-nav-item"
                    on:click={ goToAppointment }
                    activeMenu={ $activeMenu == $MENU.APPOINTMENT }>
                    <i class="fas fa-lg fa-calendar"></i>
                    <div>Rendez-vous</div>
                </div>
            </a>
            <a href="animal" use:link>
                <div 
                    class="footer-nav-item"
                    on:click={ goToAnimal }
                    activeMenu={ $activeMenu == $MENU.ANIMAL }>
                    <i class="fas fa-lg fa-folder"></i>
                    <div>Animaux</div>
                </div>
            </a>
            <a href="infos" use:link>
                <div 
                    class="footer-nav-item"
                    on:click={ goToInfo }
                    activeMenu={ $activeMenu == $MENU.INFO }>
                    <i class="fas fa-lg fa-info-circle"></i>
                    <div>Infos</div>
                </div>
            </a>
        {/if}
    </nav>
</footer>