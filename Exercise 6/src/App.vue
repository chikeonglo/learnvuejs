<template>
    <div class="container">
        <app-header></app-header>
        <hr>
        <div class="row">
            <app-server></app-server>
            <app-serverdetails></app-serverdetails>
        </div>
        <hr>
        <app-footer></app-footer>
    </div>
</template>

<script>
    import Header from "./Header.vue";
    import Footer from "./Footer.vue";
    import Servers from "./Servers.vue";
    import ServersDetails from "./ServersDetails.vue";

    export default {
        components: {
            "app-header": Header,
            "app-footer": Footer,
            "app-server": Servers,
            "app-serverdetails": ServersDetails,
        }
    }
</script>

<style>

</style>
