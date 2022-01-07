<script>
    import { createEventDispatcher } from "svelte";

    import { APPOINTMENT_REASON } from "./appointmentData";
    const dispatch = createEventDispatcher()
    function onChange(e){
        dispatch("change", {reason: e.target.value})
    }
</script>
<style>
    /* #reason{
        display: grid;
        grid-row-gap: 5px;
    } */
    .reason-radio{
        /* display: none; */
    }
    .reason{
        display: grid;
        grid-template-columns: max-content max-content auto;
        align-items: center;
        grid-column-gap: 10px;
        padding: 5px 10px;
        border: 2px solid blue;
        border-radius:  15px;
        background: rgba(51, 102, 255, 0.2);

        margin-bottom: 5px;
    }
    .reason i{
        color: var(--c_blue)
    }
    
</style>

<div id="reason">    
    <h3>Motif du rendez-vous</h3>
    <label class="reason">
        <input class="reason-radio" type="radio" name="reason" value={APPOINTMENT_REASON.REMOTE_CONSULTATION}
            on:change={onChange}>
        <i class="fas fa-lg fa-video"></i>
        <span class="reason-text">{ APPOINTMENT_REASON.REMOTE_CONSULTATION }</span>
    </label>

    <label class="reason">
        <input class="reason-radio" type="radio" name="reason" value={APPOINTMENT_REASON.CARE}
            on:change={onChange}>
        <i class="fas fa-lg fa-user-md"></i>
        <span class="reason-text">{ "Soins et suivis" }</span>
    </label>

    <label class="reason">
        <input class="reason-radio" type="radio" name="reason" value={APPOINTMENT_REASON.VACCINE}
            on:change={onChange}
            on:change={onChange}>
        <i class="fas fa-lg fa-syringe"></i>
        <span class="reason-text">{ "Vaccination"}</span>
    </label>

    <label class="reason">
        <input class="reason-radio" type="radio" name="reason" value={APPOINTMENT_REASON.ADVICE}
            on:change={onChange}>
        <i class="fas fa-lg fa-comments"></i>
        <span class="reason-text">{ "Conseils" }</span>
    </label>

    <label class="reason">
        <input class="reason-radio" type="radio" name="reason" value={APPOINTMENT_REASON.INTERVENTION}
            on:change={onChange}>
        <i class="fas fa-lg fa-video"></i>
        <span class="reason-text">{ "Opération" }</span>
    </label>
</div>