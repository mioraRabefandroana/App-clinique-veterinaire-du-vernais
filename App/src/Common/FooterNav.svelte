<script>

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
        padding-top: 10px;

        box-shadow: 0px -1px 3px silver;
    }
    .footer-nav-item i{
        color: var(--c_blue);
    }
    .footer-nav-item{
        text-align: center;
    }
</style>
<nav id="footer-nav">
    <div class="footer-nav-item">
        <i class="fas fa-lg fa-home"></i>
        <div>Accueil</div>
    </div>
    <div class="footer-nav-item">
        <i class="fas fa-lg fa-phone"></i>
        <div>Contacts</div>
    </div>
    <div class="footer-nav-item">
        <i class="fas fa-lg fa-map-marker-alt"></i>
        <div>S'y rendre</div>
    </div>
    <div class="footer-nav-item">
        <i class="fas fa-lg fa-info-circle"></i>
        <div>Horaire</div>
    </div>
</nav>