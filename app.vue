<template>
  <div>
    <NuxtLoadingIndicator/>
    <NuxtRouteAnnouncer/>
    <NuxtLayout>
      <Toast/>
      <ConfirmPopup></ConfirmPopup>
      <NuxtPage/>
      <ScrollTop behavior="smooth"/>
    </NuxtLayout>
  </div>
</template>
<script setup lang="ts">


</script>