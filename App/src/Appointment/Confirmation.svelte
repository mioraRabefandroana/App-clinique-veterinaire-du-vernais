<script>
    import { workingAppointment } from "./appointmentData"

    function appointmentFormatedDateHour(appointment){
        return appointment.date + " à " + appointment.hour.replace(":","h")
    }
</script>
<style>
    #confirmation{        
        padding: 20px;
        background: var(--c_blue);
        border-radius: 20px;
        font-size: 20px;
        font-weight: bold;

        display: grid;
        grid-row-gap: 5px;
        border-radius: 3;
    }
    #confirmation div{
        background-color: white;
        padding: 5px;
        border-radius: 12px;
        padding-left: 20px;
    }
</style>
<h3>Confirmation du rendez-vous</h3>
<div id="confirmation">
    <div class="confirmation-dateHour">
        Date: { appointmentFormatedDateHour($workingAppointment) }
    </div>
    <div class="confirmation-reason">
        Motif: { $workingAppointment.reason }
    </div>
    <div class="confirmation-reason">
        Animal: { $workingAppointment.animals.map(a => a.name).join(", ")}
    </div>
</div>