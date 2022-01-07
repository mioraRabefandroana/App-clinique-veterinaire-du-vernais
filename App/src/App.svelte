<script>
    import Home from './Home/Home.svelte'
    import { Router, Link, link, Route } from "svelte-routing";

    import FooterNav from './Common/FooterNav.svelte';

    import Map from './Infos/Map.svelte';
    import Hours from './Infos/Hours.svelte';
    import Contact from './Infos/Contact.svelte';
    
    import { currentUser } from './store';
    import Appointment from './Appointment/Appointment.svelte';
    import AnimalList from './Animal/AnimalList.svelte';
    import NewAnimal from './Animal/NewAnimal.svelte';
    import EditAnimal from './Animal/EditAnimal.svelte';

    import Remote from './Service/Remote.svelte';
    import Care from './Service/Care.svelte';
    import Vaccination from './Service/Vaccination.svelte';
    import Advice from './Service/Advice.svelte';
    import MyAppointment from './Appointment/MyAppointment.svelte';

    import Infos from './Infos/Infos.svelte';
    import Login from './Connexion/Login.svelte';
    import HeaderNav from './Common/HeaderNav.svelte';
import Register from './Connexion/Register.svelte';
import Promotion from './Promotion/Promotion.svelte';
    
    let url = "";

    export function getCurrentUser(){
        // return null; // DEBUG

        if("id" in $currentUser && $currentUser["id"])
            return $currentUser;
        return null;
    }

    $: user = $currentUser;
    console.log("----APP-----", $currentUser);
    console.log("----APPZZ-----", $currentUser);
</script>



<Router url="{url}">
    <HeaderNav user={ getCurrentUser() } />
    <Route path="/" component="{Home}" />
    <Route path="contact" component="{Contact}" />
    <Route path="map" component="{Map}" />
    <Route path="hour" component="{Hours}" />
    <Route path="hours" component="{Hours}" />
    <Route path="appointment/:type" component="{Appointment}" let:params >
        <BlogPost type="{params.type}" />
    </Route>
    <Route path="myappointment" component="{MyAppointment}" />
    <Route path="animal" component="{AnimalList}"/>
    <Route path="animal/new" component="{NewAnimal}"/>
    <Route path="animal/edit" component="{EditAnimal}"/>
    <Route path="infos" component="{Infos}" />


    <Route path="remote" component="{Remote}" />
    <Route path="care" component="{Care}" />
    <Route path="vaccination" component="{Vaccination}" />
    <Route path="advice" component="{Advice}" />

    <Route path="login" component="{Login}" />

    
    <Route path="login" component="{Login}" />
    <Route path="register" component="{Register}"/>
    <Route path="promotions" component="{Promotion}"/>

</Router>
    

<FooterNav user={ getCurrentUser() }/>