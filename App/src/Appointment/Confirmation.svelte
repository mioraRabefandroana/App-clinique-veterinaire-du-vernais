<script>
    import { workingAppointment } from "./appointmentData"

    function appointmentFormatedDateHour(appointment){
        return appointment.date + " à " + appointment.hour.replace(":","h")
    }
</script>
<style>

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