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
import Infos from './Infos/Infos.svelte';
    
    let url = "";

    export function getCurrentUser(){
        // return null; // DEBUG

        if("id" in $currentUser && $currentUser["id"])
            return currentUser;
        return null;
    }
</script>

<Router url="{url}">
    <Route path="/" component="{Home}" />
    <Route path="contact" component="{Contact}" />
    <Route path="map" component="{Map}" />
    <Route path="hour" component="{Hours}" />
    <Route path="appointment/:type" component="{Appointment}" let:params >
        <BlogPost type="{params.type}" />
    </Route>
    <Route path="animal/:type" component="{AnimalList}"/>
    <Route path="infos" component="{Infos}" />
</Router>
    

<FooterNav user={ getCurrentUser() }/>