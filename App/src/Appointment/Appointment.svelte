<script>
import { createEventDispatcher } from "svelte";

    import AnimalSelection from "../Animal/AnimalSelection.svelte";
    import NavigationButtons from "../Common/NavigationButtons.svelte";

    import { DB } from "../db";

    import { activeMenu, ANIMAL_TYPE, currentUser, MENU } from "../store";
    
    import { workingAppointment } from "./appointmentData"
    import Confirmation from "./Confirmation.svelte";
    import DateHourSelection from "./DateHourSelection.svelte";
    import FinalMessage from "./FinalMessage.svelte";
    import ReasonSelection from "./ReasonSelection.svelte";

    

    // set active menu
    $activeMenu = $MENU.APPOINTMENT

    // type param
    export let type="";

    // curent user animals
    let animals = $currentUser.animals || [];
    // console.log(animals);

    function setAppointment(detail){
        $workingAppointment = {...$workingAppointment, ...detail}
    }
    function animalSelectionChange(animal, detail){
        const selectedAnimals = $workingAppointment.animals
        if(detail.selected)
        {
            $workingAppointment.animals = [...$workingAppointment.animals, animal]
        }
        else
        {
            $workingAppointment.animals = $workingAppointment.animals.filter( a => a != animal );
        }
    }
    

    const APPOINTMENT_FORM = {
        ANIMAL_SELCTION: "ANIMAL_SELCTION",
        REASON_SELECTION: "REASON",
        DATE_HOUR_SELECTION: "DATE_SELECTION",
        CONFIRMATION: "CONFIRMATION",
        FINAL_MESSAGE: "FINAL_MESSAGE"
    }
    const appointmentFormList = [
        APPOINTMENT_FORM.ANIMAL_SELCTION,
        APPOINTMENT_FORM.REASON_SELECTION,
        APPOINTMENT_FORM.DATE_HOUR_SELECTION,
        APPOINTMENT_FORM.CONFIRMATION,
        APPOINTMENT_FORM.FINAL_MESSAGE
    ]

    let formIndex = 0;

    function onNext(){        
        if(formIndex == (appointmentFormList.length-1))
            return;
        formIndex++
        console.log($workingAppointment);
    }
    function onPrevious(){
        if(formIndex == 0)
            return;
        formIndex--
    }
    function onConfirmation(){
        // if(formIndex == 0)
        //     return;
        console.log($DB)
        console.log(";;;;;;;;;;;;;;;;;;;;")
        $workingAppointment = {...$workingAppointment, ...{id: Date.now()}};
        $DB.users.map(u => {
            if(u.id == $currentUser.id)
            {
                u.appointments = [...u.appointments, $workingAppointment];
            }
                
            return u;
        }) 
        formIndex++
        console.log($DB)
    }
    function onOK(){
        console.log("OK")
    }
</script>

<style>
    #animal-selection{
        display: grid;
        grid-template-columns: max-content max-content;
        grid-gap: 20px;
        align-content: center;
        width: fit-content;
        margin: auto;
    }
</style>

<div id="appointment" class="page">

{#if type }
    <!-- <div>Rendez vous pour {type}</div> -->
{:else}
    <div>Rendez vous sans type</div>
{/if}

{#if appointmentFormList[formIndex] == APPOINTMENT_FORM.ANIMAL_SELCTION}   
    <h3>Choix de l'animal</h3>
    <div id="animal-selection">     
        {#each animals as animal}
            <AnimalSelection {animal} on:change={ (e)=>{ animalSelectionChange(animal, e.detail) } }/>
            <!-- {JSON.stringify(animal)} -->
        {/each}
        <!-- add appointment link -->
        <AnimalSelection />
    </div>
{:else if appointmentFormList[formIndex] == APPOINTMENT_FORM.REASON_SELECTION }
    <ReasonSelection on:change={ (e)=>{ setAppointment(e.detail) } }/>
{:else if appointmentFormList[formIndex] == APPOINTMENT_FORM.DATE_HOUR_SELECTION }
    <DateHourSelection on:change={ (e)=>{ setAppointment(e.detail) } }/>
{:else if appointmentFormList[formIndex] == APPOINTMENT_FORM.CONFIRMATION }
    <Confirmation/>
{:else if appointmentFormList[formIndex] == APPOINTMENT_FORM.FINAL_MESSAGE }
    <FinalMessage/>
{/if}
    <NavigationButtons 
        previous={ formIndex != 0 && formIndex < (appointmentFormList.length-2)} 
        next={ formIndex < (appointmentFormList.length-2) }
        confirmation={ appointmentFormList[formIndex] == APPOINTMENT_FORM.CONFIRMATION }
        ok={ appointmentFormList[formIndex] == APPOINTMENT_FORM.FINAL_MESSAGE }
        on:onNext={()=>{onNext()}} 
        on:onPrevious={() =>{onPrevious()}}
        on:onConfirmation={() =>{onConfirmation()}}
        on:onOK={() =>{onOK()}}
        />
</div>