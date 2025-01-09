<script setup lang="ts">

</script>

<template>
  <div class="card">
    <DataTable>
      <Column field="code" header="Code">
        <template #body>
          <Skeleton height="2rem" class="mb-2"></Skeleton>
        </template>
      </Column>
      <Column field="name" header="Name">
        <template #body>
          <Skeleton height="2rem" class="mb-2"></Skeleton>
        </template>
      </Column>
      <Column field="category" header="Category">
        <template #body>
          <Skeleton height="2rem" class="mb-2"></Skeleton>
        </template>
      </Column>
      <Column field="quantity" header="Quantity">
        <template #body>
          <Skeleton height="2rem" class="mb-2"></Skeleton>
        </template>
      </Column>
    </DataTable>
  </div>
</template>
<style scoped>

</style>