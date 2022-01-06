<script>

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
</style>
<nav id="header-nav">
    <div></div>
    <div class="header-nav-item" title="rechercher"><i class="fas fa-lg fa-search"></i></div>
    <div class="header-nav-item" title="connexion"><i class="fas fa-lg fa-user"></i></div>
</nav>