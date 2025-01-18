<template>
    <div>
        <NuxtLoadingIndicator/>
        <NuxtRouteAnnouncer/>
        <NuxtLayout>
            <NuxtPwaManifest/>

            <Toast/>
            <ConfirmPopup></ConfirmPopup>
            <NuxtPage/>
            <ScrollTop behavior="smooth"/>
        </NuxtLayout>
    </div>
</template>
<script setup lang="ts">



</script>