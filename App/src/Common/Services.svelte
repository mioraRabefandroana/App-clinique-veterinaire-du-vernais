<script>
    import { link } from "svelte-routing";

</script>

<style>
    .service{
        display: grid;
        grid-template-columns: max-content auto;
        align-items: center;
        grid-column-gap: 10px;
        padding: 5px 10px;
        border: 2px solid blue;
        border-radius:  15px;
        background: rgba(51, 102, 255, 0.2);
    }
    .service i{
        color: var(--c_blue)
    }
    .service a{
        color: inherit;
        text-decoration: unset;
    }
    .service a:hover{
        text-decoration: unset;
    }
</style>

<a href="remote" use:link
    class="service">
    <i class="fas fa-video"></i>
    <div>{"Consultation à distance"}</div>
</a>

<a href="care" use:link
    class="service">
    <i class="fas fa-user-md"></i>
    <div>{"Soins et suivi"}</div>
</a>

<a href="vaccination" use:link
    class="service">
    <i class="fas fa-syringe"></i>
    <div>{"Vaccination"}</div>
</a>

<a href="advice" use:link
    class="service">
    <i class="fas fa-comments"></i>
    <div>{"Conseils"}</div>
</a>