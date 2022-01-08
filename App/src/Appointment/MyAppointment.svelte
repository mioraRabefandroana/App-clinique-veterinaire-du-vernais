<script>
    import { link, navigate } from "svelte-routing";
    import { DB } from "../db";
    import { activeMenu, ANIMAL_TYPE, currentUser, MENU } from "../store";

    let passed = false

    // filter past|future appointment
    // $currentUser = $DB.users.filter(u=>(u.id != $currentUser.id))[0]; //{...$curentUser, $DB.users.filter(u=>(u.id != $currentUser.id)[0]);
    let userAppointments = $DB.users.map(u=>{
        // debugger;
        if(u.id != $currentUser.id)
            return [];
        return u.appointments;
    })[0]

    $activeMenu = $MENU.APPOINTMENT

    if(!$currentUser || !("id" in $currentUser))
    {
        navigate("/login");
    }

    $: appointments = userAppointments.filter(a => (a.passed.toString() == passed.toString()));

</script>

<style>
    h2{
        margin: unset;

        display: grid;
        grid-template-columns: 1fr max-content;
        align-items: center;
    }

    i{
        color: var(--c_blue)
    }
    #myappointment i{
        color: var(--c_green)
    }
    #myappointment{
        border: 2px solid blue;
        border-radius: 20px;
        padding: 10px;
    }

    .filter{
        display: grid;
        grid-auto-flow: column;
        grid-auto-columns: max-content;
        grid-column-gap: 5px;
    }

    .appointment{
        box-shadow: 0px 2px 6Px -3px black;
        padding: 5px;
        border-radius: 5px;        
        margin-bottom: 7px;

    }
    .details{
        display: grid;
        grid-auto-flow: column;
        grid-auto-columns: max-content 1fr;
        grid-column-gap: 5px;
    }
    .reason{
        /* border: 1px solid; */
    }
    .animal div{
        font-weight: bold;
    }
    .animal img{
        width: 60px;
        height: 60px;
        border-radius: 60px;
    }

    .appointment-title{
        background-color: var(--c_blue);
        color: white;
        font-weight: bold;
        padding: 10px;

        display: grid;
        grid-template-columns: max-content 1fr;
    }

    .edit-btn{
        justify-self: end;
    }
    .edit-btn i{
        color: white !important;
    }

    #new-appointment{
        display: block;
        background: var(--c_blue);
        color: white;
        border-radius: 35px;
        text-align: center;
        padding: 15px;
        margin-bottom: 5px;
        font-size: 24px;
    }
    i{
        color: white;
    }
    /* #new-appointment{
        padding: 10px;
        margin-bottom: 10px;
        display: block;
        font-size: 24px;
        background-color: white;
    } */
</style>

<div class="page">

<a
    href="{"/appointment/"+$ANIMAL_TYPE.SEVERAL}"
    use:link
>
 <div  id="new-appointment">
    <i class="fas fa-lg fa-calendar-plus"></i>
    <span>Prendre rendez-vous</span>
 </div>
    
</a>

<div id="myappointment">
    <h2 id="title"><span>Mes rendez-vous</span><i class="fas fa-first-aid"></i></h2>
    <div class="filter">
        <label>
            <input type="radio" name="passed" bind:group={passed} value={false} >
            A venir
        </label>
        <label>
            <input type="radio" name="passed" bind:group={passed} value={true} >
            Passés
        </label>
    </div>
    <div class="list">
        {#each appointments as a}
            <div class="appointment">
                <div class="appointment-title">
                    <span class="date-hour">{ a.date + " à " +  a.hour}</span>
                    {#if !passed}
                        <a href="#" class="edit-btn" title="modifier">
                            <!-- modifier -->
                            <i class="fas fa-lg fa-edit"></i>
                        </a>
                    {/if}
                </div>
                
                <div class="details">
                    <div class="animal">              
                        {#each a.animals as animal}  
                            <img src={animal.image} alt={animal.name}>
                            <div>{ animal.name }</div>
                        {/each}
                    </div>
                    <div class="reason">
                        Détails: <br>
                        { a.reason }
                    </div>
                </div>
                
            </div>
        {/each}
    </div>
</div>
</div>