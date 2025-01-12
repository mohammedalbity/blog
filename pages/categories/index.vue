<script setup lang="ts">

import Card from "primevue/card";
import {Form} from "@primevue/forms";
import Dialog from "primevue/dialog";
import {useToast} from "primevue/usetoast";
import {useConfirm} from "primevue/useconfirm";

const toast = useToast();

const category = ref({
  name: ''
})

const storeCategory = CategoryStore()
const handleSubmit = () => {
  storeCategory.addCategory(category.value);
  storeCategory.message = null
  if (category.value.name !== '') {
    toast.add({
      severity: 'success',
      detail: storeCategory.message ?? 'Category created successful',
      summary: 'success',
      life: 3000
    });
    category.value.name = ''

  } else {
    storeCategory.errors.forEach((error) => {
      toast.add({severity: 'error', detail: error, summary: 'error', life: 3000});
    })
  }
}
const visibleDialog = ref(false);
const openDialog = () => {
  visibleDialog.value = true
}
const openModal = (category: any) => {
  categoryEdit.value = {...category}
  visible.value = true
}

const categoryEdit = ref({
  id: 0,
  name: '',
})
const confirmingCategoryId = ref();
const confirm = useConfirm();
const deleteCategory = (event: any, id: number) => {
  confirmingCategoryId.value = id;
  confirm.require({
    target: event.currentTarget,
    message: 'Do you want to delete this record?',
    icon: 'pi pi-info-circle',
    rejectProps: {
      label: 'Cancel',
      severity: 'secondary',
      outlined: true
    },
    acceptProps: {
      label: 'Delete',
      severity: 'danger'
    },
    accept: () => {
      storeCategory.deleteCategory(confirmingCategoryId.value)
      toast.add({severity: 'info', summary: 'Confirmed', detail: 'Record deleted', life: 3000});
    },
    reject: () => {
      toast.add({severity: 'error', summary: 'Rejected', detail: 'You have rejected', life: 3000});
    }
  });
};

const handleUpdate = async () => {
  await storeCategory.updateCategory(categoryEdit.value)
  if (storeCategory.message !== null) {
    toast.add({
      severity: 'success',
      detail: storeCategory.message ?? 'Category updated successful',
      summary: 'success',
      life: 3000
    });
    storeCategory.message = null
  } else {
    storeCategory.errors.forEach((error) => {
      toast.add({severity: 'error', detail: error, summary: 'error', life: 3000});
    })
    storeCategory.errors = []
  }
}
await callOnce(storeCategory.fetchCategories);
const visible = ref(false)
definePageMeta({
  middleware: ['sanctum:auth'],
})
</script>

<template>
  <!--Create Tag  -->
  <div class="flex justify-end mt-10 mb-5">
    <Button class="bg-black border-black rounded-md" label="Create Category" @click="openDialog"/>
  </div>
  <Dialog v-model:visible="visibleDialog" modal header="Create Category" class="w-fit">
    <Form @submit="handleSubmit">
      <label for="name" class="font-semibold">Name</label>
      <div class="flex gap-4 mb-5">
        <InputText id="name" v-model="category.name" class="flex-auto" autocomplete="off"/>
      </div>
      <div class="flex justify-end gap-2 mt-10">
        <Button type="button" label="Cancel" severity="info" @click="visibleDialog=!visibleDialog"></Button>
        <Button type="submit" severity="contrast" label="Create"></Button>
      </div>
    </Form>
  </Dialog>
  <!-- Edit Category -->
  <Dialog v-model:visible="visible" modal header="Edit Category" class="w-fit">
    <Form @submit="handleUpdate">
      <label for="name" class="font-semibold">Name</label>
      <div class="flex gap-4 mb-5">
        <InputText id="name" v-model="categoryEdit.name" class="flex-auto" autocomplete="off"/>
      </div>
      <div class="flex justify-end gap-2 mt-10">
        <Button type="button" label="Cancel" severity="info" @click="visible=!visible"></Button>
        <Button type="submit" severity="contrast" label="Update"></Button>
      </div>
    </Form>
  </Dialog>
  <div class="card">
    <Card>
      <template #content>
        <DataTable
            sortMode="multiple"
            :value="storeCategory.categories"
            :paginator="true"
            :rows="storeCategory.pagination.per_page"
            :totalRecords="storeCategory.pagination.total"
            :lazy="true"
            :first="(storeCategory.pagination.current_page - 1) * storeCategory.pagination.per_page"
            @page="(event)=> storeCategory.fetchCategories(Math.ceil(event.first / event.rows) + 1,storeCategory.searchQuery)"
            stripedRows
        >
          <template #header>
            <div class="flex justify-end">
              <IconField>
                <InputIcon>
                  <span class="pi pi-search"></span>
                </InputIcon>
                <InputText
                    v-model.trim="storeCategory.searchQuery"
                    @input="()=>storeCategory.fetchCategories( 1,storeCategory.searchQuery)"
                    placeholder="Keyword Search"
                />
              </IconField>
            </div>
          </template>
          <Column field="id" header="ID" :sortable="true" filter>
            <template #body="{data}">
              <span>{{ data.id }}</span>
            </template>
          </Column>

          <Column field="name" header="Name" :sortable="true" filter>
            <template #body="{ data}">
              <span>{{ data.name }}</span>
            </template>
          </Column>
          <Column header="Action">
            <template #body="{ data }">
              <div class="flex gap-2 items-center">
                <div class="border border-gray-200 rounded-md p-1 outlined">
                  <i class="pi pi-pen-to-square"
                     @click.prevent="openModal(data)"
                     style="font-size: 1.5rem">
                  </i>
                </div>
                <div class="border border-gray-200 rounded-md p-1">
                  <i class="pi pi-times"
                     @click.prevent="deleteCategory($event,data.id)"
                     style="font-size: 1.5rem">

                  </i>
                </div>
              </div>
            </template>
          </Column>
        </DataTable>
      </template>
    </Card>
  </div>
</template>

<style scoped>

</style>