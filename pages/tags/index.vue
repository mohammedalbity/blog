<script setup lang="ts">

import Card from "primevue/card";
import {Form} from "@primevue/forms";
import Dialog from "primevue/dialog";
import {useToast} from "primevue/usetoast";
import {useConfirm} from "primevue/useconfirm";

const toast = useToast();

const tag = reactive({
    name: ''
})

const storeTag = TagStore()
const handleSubmit = () => {
    storeTag.addTag(tag);
    storeTag.message = null
    if (tag.name !== '') {
        toast.add({
            severity: 'success',
            detail: storeTag.message ?? 'Tag created successful',
            summary: 'success',
            life: 3000
        });
        tag.name = ''

    } else {
        storeTag.errors.forEach((error) => {
            toast.add({severity: 'error', detail: error, summary: 'error', life: 3000});
        })
    }
}
const visibleDialog = ref(false);
const openDialog = () => {
    visibleDialog.value = true
}
const openModal = (tag: any) => {
    tagEdit.value = {...tag}
    visible.value = true
}

const tagEdit = ref({
    id: 0,
    name: '',
})
const confirmingTagId = ref();
const confirm = useConfirm();
const deleteTag = (event: any, id: number) => {
    confirmingTagId.value = id;
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
            storeTag.deleteTag(confirmingTagId.value)
            toast.add({severity: 'info', summary: 'Confirmed', detail: 'Record deleted', life: 3000});
        },
        reject: () => {
            toast.add({severity: 'error', summary: 'Rejected', detail: 'You have rejected', life: 3000});
        }
    });
};

const handleUpdate = () => {
    storeTag.updateTag(tagEdit.value)
    if (storeTag.message !== '') {
        toast.add({
            severity: 'success',
            detail: storeTag.message ?? 'Tag updated successful',
            summary: 'success',
            life: 3000
        });

    } else {
        storeTag.errors.forEach((error) => {
            toast.add({severity: 'error', detail: error, summary: 'error', life: 3000});
        })
    }
}
await callOnce(storeTag.fetchTags);
const visible = ref(false)
</script>

<template>
    <!--Create Tag  -->
    <div class="flex justify-end mt-10 mb-5">
        <Button class="bg-black border-black rounded-md" label="Create Tag" @click="openDialog"/>
    </div>
    <Dialog v-model:visible="visibleDialog" modal header="Create Tag" class="w-fit">
        <Form @submit="handleSubmit">
            <label for="name" class="font-semibold">Name</label>
            <div class="flex gap-4 mb-5">
                <InputText id="name" v-model="tag.name" class="flex-auto" autocomplete="off"/>
            </div>
            <div class="flex justify-end gap-2 mt-10">
                <Button type="button" label="Cancel" severity="info" @click="visibleDialog=!visibleDialog"></Button>
                <Button type="submit" severity="contrast" label="Create"></Button>
            </div>
        </Form>
    </Dialog>
    <!-- Edit Tag -->
    <Dialog v-model:visible="visible" modal header="Edit Post" class="w-fit">
        <Form @submit="handleUpdate">
            <label for="name" class="font-semibold">Name</label>
            <div class="flex gap-4 mb-5">
                <InputText id="name" v-model="tagEdit.name" class="flex-auto" autocomplete="off"/>
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
                        dataKey="id"
                        sortMode="multiple"
                        :value="storeTag.tags"
                        :paginator="true"
                        :rows="storeTag.pagination.per_page"
                        :totalRecords="storeTag.pagination.total"
                        :lazy="true"
                        :first="(storeTag.pagination.current_page - 1) * storeTag.pagination.per_page"
                        @page="(event)=> storeTag.fetchTags(Math.ceil(event.first / event.rows) + 1)"
                        :rowsPerPageOptions="[10, 20, 50]"
                        stripedRows
                >
                    <template #header>
                        <div class="flex justify-end">
                            <IconField>
                                <InputIcon>
                                    <span class="pi pi-search"></span>
                                </InputIcon>
                                <InputText
                                        v-model.trim="storeTag.searchQuery"
                                        @input="()=>storeTag.fetchTags( 1,storeTag.searchQuery)"
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
                                       @click.prevent="deleteTag($event,data.id)"
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