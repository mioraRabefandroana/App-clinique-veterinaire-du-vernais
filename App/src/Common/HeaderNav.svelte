<script>
    import { activeMenu, MENU } from "../store";
    export let user=null;
    export let title= $MENU.HOME;
</script>
<style>
    nav{
        display: grid;
        grid-auto-flow: column;
    }
    #header-nav{
        display: grid;
        grid-auto-flow: column;
        grid-auto-columns: max-content;
        grid-template-columns: 1fr max-content max-content;
        grid-column-gap: 10px;  
        padding: 5px;

        position: fixed;
        top: 0px;
        right: 0px;
    }
    
    #header-nav div{
        width: fit-content;
        color: rebeccapurple;

        justify-self: end;
        /* cursor: pointer; */
    }
    .header-nav-item i{
        color: var(--c_blue);
    }
    .header-nav-item{
        text-align: center;
    }

    .header-nav-icon,
    #home-title{
        color: var(--c_blue)
    }
    #home-title{
        margin: unset;
        text-align: center;
    }
    #header-nav.header-nav-authenticated{
        display: grid;
        grid-template-columns: max-content 1fr max-content !important;
        align-items: center;
        padding-left: 10px;
        padding-right: 10px;
        left: 0px;
        /* right: 0px; */
    }
</style>
<header>
    <!-- { $activeMenu } -->
    {#if !user}
        <nav id="header-nav">
            <div></div>
            <div class="header-nav-item" title="rechercher"><i class="fas fa-lg fa-search"></i></div>
            <div class="header-nav-item" title="connexion"><i class="fas fa-lg fa-user"></i></div>
        </nav>
    {:else}
        <nav id="header-nav" class="header-nav-authenticated">
            <div id="menu">
                <i class="header-nav-icon fas fa-lg fa-bars"></i>
            </div>
            <h2 id="home-title">{ $activeMenu || title }</h2>
            <div id="search">
                <i class="header-nav-icon fas fa-lg fa-search"></i>
            </div>
        </nav>
    {/if}
</header>