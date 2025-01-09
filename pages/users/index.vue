<template>
  <div class="flex justify-end mt-10">
    <Button class="bg-black border-black rounded-md" label="Create User" @click="open"/>
  </div>
  <Dialog v-model:visible="visible" modal header="Create User" class="w-[500px]">
    <Form @submit="handleSubmit">
      <label for="name" class="font-semibold">name</label>
      <div class="flex gap-4 mb-4">
        <InputText id="name" v-model="user.name" class="flex-auto" autocomplete="off"/>
      </div>
      <label for="email" class="font-semibold">email</label>
      <div class="flex gap-4 mb-4">
        <InputText id="email" type="email" v-model="user.email" class="flex-auto" autocomplete="off"/>
      </div>
      <label for="password" class="font-semibold">Password</label>
      <div class="flex gap-4 mb-4">
        <InputText id="password" type="password" v-model="user.password" class="flex-auto" autocomplete="off"/>
      </div>
      <label for="phone" class="font-semibold">Phone</label>
      <div class="flex gap-4 mb-4">
        <InputText id="phone" v-model="user.phone" class="flex-auto" autocomplete="off"/>
      </div>
      <label for="message" class="font-semibold">Message</label>
      <div class="flex gap-4 mb-4">
        <InputText id="message" v-model="user.message" class="flex-auto" autocomplete="off"/>
      </div>

      <div class="flex items-center gap-4 mb-8">
        <div
            class="border-dotted border-4 flex items-center py-2 px-2 justify-center border-gray-200 rounded-md h-44 w-44">
          <label for="file-upload"
                 class="cursor-pointer  text-white px-4 py-2 rounded-md transition">
            <Image v-if="display" :src="display" alt="Image" width="250"
                   preview/>
            <svg v-if="!display" class="w-20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                <path d="M12 15L12 2M12 2L15 5.5M12 2L9 5.5" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"
                      stroke-linejoin="round"></path>
                <path
                    d="M8 22.0002H16C18.8284 22.0002 20.2426 22.0002 21.1213 21.1215C22 20.2429 22 18.8286 22 16.0002V15.0002C22 12.1718 22 10.7576 21.1213 9.8789C20.3529 9.11051 19.175 9.01406 17 9.00195M7 9.00195C4.82497 9.01406 3.64706 9.11051 2.87868 9.87889C2 10.7576 2 12.1718 2 15.0002L2 16.0002C2 18.8286 2 20.2429 2.87868 21.1215C3.17848 21.4213 3.54062 21.6188 4 21.749"
                    stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"></path>
              </g>
            </svg>
          </label>
          <input id="file-upload" type="file" class="hidden" @change="onUpload">
          <span id="file-name" class="text-gray-500"></span>
        </div>
      </div>
      <div class="flex justify-end gap-2">
        <Button type="button" label="Cancel" severity="info" @click="visible = false"></Button>
        <Button type="submit" severity="contrast" label="save"></Button>
      </div>
    </Form>
  </Dialog>
  <Dialog v-model:visible="visibleEdit" modal header="Edit User" class="min-w-[500px]">
    <Form @submit="handleUpdate">
      <label for="name" class="font-semibold">Name</label>
      <div class="flex gap-4 mb-4">
        <InputText id="name" v-model="editUser.name" class="flex-auto" autocomplete="off"/>
      </div>
      <label for="email" class="font-semibold">Email</label>
      <div class="flex gap-4 mb-4">
        <InputText id="email" type="email" v-model="editUser.email" class="flex-auto" autocomplete="off"/>
      </div>
      <label for="password" class="font-semibold">Password</label>
      <div class="flex gap-4 mb-4">
        <InputText id="password" type="password" v-model="editUser.password" class="flex-auto" autocomplete="off"/>
      </div>
      <label for="phone" class="font-semibold">Phone</label>
      <div class="flex gap-4 mb-4">
        <InputText id="pone" v-model="editUser.phone" class="flex-auto" autocomplete="off"/>
      </div>
      <label for="message" class="font-semibold">Message</label>
      <div class="flex gap-4 mb-4">
        <InputText id="message" v-model="editUser.message" class="flex-auto" autocomplete="off"/>
      </div>

      <div class="flex items-center gap-4 mb-8">
        <div
            class="border-dotted border-4 flex items-center py-2 px-2 justify-center border-gray-200 rounded-md h-44 w-44">
          <label for="file-upload"
                 class="cursor-pointer  text-white px-4 py-2 rounded-md transition">
            <Image v-if="editUser.avatar||avatar!=null" :src="avatar  ? avatar  : editUser.avatar" alt="Image"
                   width="250"
                   preview/>
            <svg v-if="avatar==null&&editUser.avatar==null" class="w-20" viewBox="0 0 24 24" fill="none"
                 xmlns="http://www.w3.org/2000/svg">
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                <path d="M12 15L12 2M12 2L15 5.5M12 2L9 5.5" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"
                      stroke-linejoin="round"></path>
                <path
                    d="M8 22.0002H16C18.8284 22.0002 20.2426 22.0002 21.1213 21.1215C22 20.2429 22 18.8286 22 16.0002V15.0002C22 12.1718 22 10.7576 21.1213 9.8789C20.3529 9.11051 19.175 9.01406 17 9.00195M7 9.00195C4.82497 9.01406 3.64706 9.11051 2.87868 9.87889C2 10.7576 2 12.1718 2 15.0002L2 16.0002C2 18.8286 2 20.2429 2.87868 21.1215C3.17848 21.4213 3.54062 21.6188 4 21.749"
                    stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"></path>
              </g>
            </svg>
          </label>
          <input id="file-upload" type="file" class="hidden" @change="onUploadUpdate">
          <span id="file-name" class="text-gray-500"></span>
        </div>
      </div>
      <div>

      </div>
      <div class="flex justify-end gap-2">
        <Button type="button" label="Cancel" severity="info" @click="visibleEdit = false"></Button>
        <Button type="submit" severity="contrast" label="Update"></Button>
      </div>
    </Form>
  </Dialog>

  <div class="card">
    <Suspense>
      <template #default>
        <DataTable dataKey="id" sortMode="multiple" :value="store.users" paginator
                   :rows="store.pagination.per_page"
                   :totalRecords="store.pagination.total"
                   :lazy="true"
                   :first="(store.pagination.current_page - 1) * store.pagination.per_page"
                   :rowsPerPageOptions="[10, 20, 50]"
                   @page="onPage"
                   :globalFilterFields="['title','description']"
                   stripedRows>
          <template #header>
            <div class="flex justify-end">
              <IconField>
                <InputIcon>
                  <span class="pi pi-search"></span>
                </InputIcon>
                <InputText @input="()=>store.fetchUsers(1, store.searchQuery)" v-model.live.trim="store.searchQuery"
                           placeholder="Keyword Search"/>
              </IconField>
            </div>
          </template>
          <Column field="id" header="ID"></Column>
          <Column field="name" header="Name"></Column>
          <Column field="email" header="Email"></Column>
          <Column field="phone" header="Phone"></Column>
          <Column field="message" header="Message"></Column>
          <Column header="action">
            <template #body="{ data }">
              <div class="flex gap-2 items-center">
                <div class="border border-gray-200 rounded-md p-1">
                  <i class="pi pi-pen-to-square"
                     @click.prevent="openModal(data)"
                     style="font-size: 1.5rem">

                  </i>
                </div>
                <div class="border border-gray-200 rounded-md p-1">
                  <i class="pi pi-times"
                     @click.prevent="deleteUser($event,data.id)"
                     style="font-size: 1.5rem">

                  </i>
                </div>
              </div>
            </template>
          </Column>
        </DataTable>
      </template>
      <template #fallback>
        <TableSkeleton></TableSkeleton>
      </template>
    </Suspense>

  </div>
</template>
<script setup lang="ts">
import {Form} from "@primevue/forms";
import Dialog from "primevue/dialog";
import DataTable from "primevue/datatable"


import {useToast} from "primevue/usetoast";
import {useConfirm} from "primevue/useconfirm";

definePageMeta({
  middleware: ['sanctum:auth'],
})
const toast = useToast();
let avatar = ref()
const display = ref()
const store = storeUser()
const loading = ref(true);
const visibleEdit = ref(false);
const visible = ref(false);
const confirmingUserId = ref()
const confirm = useConfirm();
const deleteUser = async (event: any, id: number) => {
  confirmingUserId.value = id;
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
    accept: async () => {
      await store.deleteUser(confirmingUserId.value)
      toast.add({severity: 'info', summary: 'Confirmed', detail: 'Record deleted', life: 3000});
    },
    reject: () => {
      toast.add({severity: 'error', summary: 'Rejected', detail: 'You have rejected', life: 3000});
    }
  });
};

const editUser = ref({
  id: 0,
  name: '',
  email: '',
  phone: '',
  password: '',
  message: '',
  avatar: ref(),
})
const user = ref({
  id: 0,
  name: '',
  email: '',
  phone: '',
  password: '',
  message: '',
  avatar
})
const open = () => {
  visible.value = true;
  display.value = '';
  user.value.avatar.value = '';
}

const handleSubmit = async () => {
  store.messages = null
  console.log('user', user.value)
  await store.addUser(user.value)
  if (user.value.name !== '' && user.value.email !== '' && user.value.avatar) {
    toast.add({
      severity: 'success',
      detail: store.messages ?? 'User created successful',
      summary: 'success',
      life: 3000
    });
  } else {
    store.errors.forEach((error) => {
      toast.add({
        severity: 'error',
        detail: error,
        summary: 'success',
        life: 3000
      });
    })

  }
}
const handleUpdate = async () => {

  await store.updateUser(editUser.value)
  if (editUser.value.name !== '' && editUser.value.email !== '' && editUser.value.avatar) {
    toast.add({
      severity: 'success',
      detail: store.messages ?? 'User updated successful',
      summary: 'success',
      life: 3000
    });
  } else {
    store.errors.forEach((error) => {
      toast.add({
        severity: 'error',
        detail: error,
        summary: 'success',
        life: 3000
      });
    })

  }
  visibleEdit.value = true;
}
const onUploadUpdate = (event: any) => {
  editUser.value.avatar = event.target.files[0];
  avatar.value = URL.createObjectURL(event.target.files[0]);
}

const onUpload = (event: any) => {
  avatar.value = event.target.files[0];
  display.value = URL.createObjectURL(event.target.files[0]);
}
const openModal = (data: any) => {
  console.log(data)
  editUser.value = {...data}
  visibleEdit.value = true;
}
const onPage = (event: any) => {
  store.fetchUsers(Math.ceil(event.first / event.rows) + 1);
}

useLazyAsyncData("UserStore", () => store.fetchUsers());


</script>
<style scoped>

</style>