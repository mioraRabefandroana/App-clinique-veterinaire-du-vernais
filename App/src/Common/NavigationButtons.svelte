<script>
    import { createEventDispatcher } from "svelte";
    import { Router, Link, link, Route } from "svelte-routing";


    export let next=true;
    export let previous=true;
    export let confirmation=false;
    export let ok=false;

    const dispatch = createEventDispatcher();

    function onNext(){
        dispatch("onNext");
    }
    function onPrevious(){
        dispatch("onPrevious")
    }
    function onConfirmation(){
        dispatch("onConfirmation")
    }
    function onOK(){
        dispatch("onOK")
    }

</script>

<style>

    #navigation-btn{
        display: grid;
        /* grid-template-columns: 120px 120px; */
        /* grid-template-columns: auto auto; */
        grid-auto-flow: column;
        grid-column-gap: 20px;
        width: fit-content;
        margin: auto;
        margin-top: 20px;
        /* width: 100%; */
    }
    .btn{
        color: white;
        background: var(--c_blue);
        padding:  5px;
        width: 120px
    }
    .btn i{
        color: white
    }
    .btn-next{
        text-align: right;
        justify-self: left;
        /* margin: auto; */
    }
    .btn-previous{
        justify-self: right;
    }
    .btn-confirmation,
    .btn-ok{
        text-align: center;
    }
</style>

<div id="navigation-btn">
    {#if previous}
        <div class="btn btn-previous" on:click={onPrevious}>
            <i class="fas fa-chevron-circle-left"></i>
            <span>Précédent</span>
        </div>
    {/if}
    {#if next}
        <div class="btn btn-next" on:click={onNext}>
            <span>Suivant</span>
            <i class="fas fa-chevron-circle-right"></i>
        </div>
    {/if}
    {#if confirmation}
        <div class="btn btn-confirmation" on:click={onConfirmation}>
            <span>Confirmer</span>
        </div>
    {/if}
    {#if ok}
        <a href="/myappointment" use:link
            class="btn btn-ok" on:click={onOK}>
            <span>OK</span>
        </a>
    {/if}
</div>
