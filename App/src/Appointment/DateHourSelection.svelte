<script>
import { createEventDispatcher } from "svelte";

    import { DB } from "../db";
    const dispatch = createEventDispatcher();
    function onChange(date, hour)
    {
        dispatch("change", {date, hour})
    }

</script>
<style>

</style>

<div id="date-hour-selection">
    <h3>Choix d'une date</h3>
    {#each Object.keys($DB.disponibilities) as date}
        <div class="disponibility">
            <div class="disponibility-date">
                { date }
            </div>
            <div class="disponibility-hours">
                {#each $DB.disponibilities[date] as hours}
                    <label class="disponibility-hour">
                        <input type="radio" name="dateHour" value={ [date,hours[0]].join(":") }
                        on:change={onChange(date, hours[0])}>
                        <span>{hours[0]}</span>
                    </label>
                {/each}
            </div>
        </div>
    {/each}
</div>