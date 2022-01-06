<script>
    export let icon = "";
    export let text = "";

    let iconClassName = "fas " + icon;
    console.log(icon);

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
</style>

<div class="service">
    <i class="fas fa-video"></i>
    <div>{"Consultation à distance"}</div>
</div>

<div class="service">
    <i class="fas fa-user-md"></i>
    <div>{"Soins et suivi"}</div>
</div>

<div class="service">
    <i class="fas fa-syringe"></i>
    <div>{"Vaccination"}</div>
</div>

<div class="service">
    <i class="fas fa-comments"></i>
    <div>{"Conseils"}</div>
</div>