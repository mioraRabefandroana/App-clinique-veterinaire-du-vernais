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

.disponibility{
    box-shadow: 0px 2px 6Px -3px black;
    padding: 5px;
    border-radius: 5px;        
    margin-bottom: 7px;
}
.disponibility-date{
    background-color: var(--c_blue);
    color:white;
    font-weight: bold;
    padding: 5px;
}
.disponibility-hours{
    display: grid;
    grid-auto-flow: column;
    text-align: center;
    justify-content: start;
    grid-column-gap: 10px;
    padding: 20px
}
.disponibility-hour{
    width: fit-content;
    background-color: black;
    color:white;
    /* font-weight: bold; */
    padding: 5px;
    border-radius: 5px;
    
}
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