<template>
    <div class="flex justify-end mt-10 mb-5">
        <Button class="!bg-black border-black rounded-md" label="Create Post" @click="open"/>
    </div>
    <Dialog v-model:visible="visible" modal header="Create Post" class="w-fit">
        <Form @submit="handleSubmit">
            <label for="title" class="font-semibold">title</label>
            <div class="flex gap-4 mb-4">
                <InputText id="title" v-model="post.title" class="flex-auto" autocomplete="off"/>
            </div>

            <div class="flex items-center gap-4 my-2">
                <Editor v-model="post.description" editorStyle="height: 320px"/>
            </div>

            <div class="flex items-center gap-4 mb-8">
                <div class="flex-1 border bg-[#F8FAFC] flex items-center h-10  px-2 <!--justify-{{ !display ? 'center': 'start'}}--> border-gray-200 rounded-md w-44">
                    <label for="file-upload"
                           class="cursor-pointer  text-black py-2  rounded-md transition">
                        <div class="flex items-center gap-2">
                            <svg v-if="!display" class="w-5" viewBox="0 0 24 24" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                                <g id="SVGRepo_iconCarrier">
                                    <path d="M12 15L12 2M12 2L15 5.5M12 2L9 5.5" stroke="#1C274C" stroke-width="1.5"
                                          stroke-linecap="round"
                                          stroke-linejoin="round"></path>
                                    <path
                                            d="M8 22.0002H16C18.8284 22.0002 20.2426 22.0002 21.1213 21.1215C22 20.2429 22 18.8286 22 16.0002V15.0002C22 12.1718 22 10.7576 21.1213 9.8789C20.3529 9.11051 19.175 9.01406 17 9.00195M7 9.00195C4.82497 9.01406 3.64706 9.11051 2.87868 9.87889C2 10.7576 2 12.1718 2 15.0002L2 16.0002C2 18.8286 2 20.2429 2.87868 21.1215C3.17848 21.4213 3.54062 21.6188 4 21.749"
                                            stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"></path>
                                </g>
                            </svg>
                            <span v-if="!display">Attach a presentation image</span>

                        </div>

                        <input id="file-upload" class="hidden" type="file" @change="onUpload">
                    </label>
                    <div class="flex items-center justify-between  gap-4 my-2" v-if="display">
                        <Image :src="display" alt="Image" width="40" preview/>
                        <span>{{ filename }}</span>
                        <i class="pi pi-trash text-red-800" @click="display=''"></i>
                    </div>
                </div>
                <div>
                    <Select v-model="post.category_id" fluid :options="storeCate.categories" optionLabel="name"
                            placeholder="Select a Cate"
                            class="w-full md:w-56"/>
                </div>
            </div>
            <div class="flex justify-end gap-2">
                <Button type="button" label="Cancel" severity="info" @click="visible=!visible"></Button>
                <Button type="submit" :loading="loading" severity="contrast" label="Save"></Button>
            </div>
        </Form>
    </Dialog>

    <Dialog v-model:visible="visibleEdit" modal header="Edit Post" class="w-fit">
        <Form @submit="handleUpdate">
            <label for="title" class="font-semibold">title</label>
            <div class="flex gap-4 mb-4">
                <InputText id="title" v-model="editPost.title" class="flex-auto" autocomplete="off"/>
            </div>

            <div class="flex items-center gap-4 mb-8">
                <Editor v-model="editPost.description" editorStyle="height: 320px"/>

            </div>
            <!--            <div class="flex items-center gap-4 mb-8">
														<Select v-model="editPost.category_id" option-value="id" :options="storeCate.categories"
																		optionLabel="name"
																		placeholder="Select a Cate"
																		class="w-full md:w-56"/>
												</div>-->
            <div class="flex items-center gap-4 mb-8">
                <div class="flex-1 border bg-[#F8FAFC] flex items-center h-10  px-2 <!--justify-{{ !display ? 'center': 'start'}}--> border-gray-200 rounded-md w-44">
                    <label for="file-upload"
                           class="cursor-pointer  text-black py-2  rounded-md transition">
                        <div class="flex items-center gap-2">
                            <svg v-if="!editPost.image" class="w-5" viewBox="0 0 24 24" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                                <g id="SVGRepo_iconCarrier">
                                    <path d="M12 15L12 2M12 2L15 5.5M12 2L9 5.5" stroke="#1C274C" stroke-width="1.5"
                                          stroke-linecap="round"
                                          stroke-linejoin="round"></path>
                                    <path
                                            d="M8 22.0002H16C18.8284 22.0002 20.2426 22.0002 21.1213 21.1215C22 20.2429 22 18.8286 22 16.0002V15.0002C22 12.1718 22 10.7576 21.1213 9.8789C20.3529 9.11051 19.175 9.01406 17 9.00195M7 9.00195C4.82497 9.01406 3.64706 9.11051 2.87868 9.87889C2 10.7576 2 12.1718 2 15.0002L2 16.0002C2 18.8286 2 20.2429 2.87868 21.1215C3.17848 21.4213 3.54062 21.6188 4 21.749"
                                            stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"></path>
                                </g>
                            </svg>
                            <span v-if="!editPost.image">Attach a presentation image</span>

                        </div>

                        <input id="file-upload" class="hidden" type="file" @change="onUploadUpdate">
                    </label>
                    <div class="flex items-center justify-between  gap-4 my-2" v-if="editPost.image">
                        <Image v-if="editPost.image" :src="image  ? image  : editPost.image" alt="Image" width="40"
                               preview/>
                        <span>{{ editPost.image }}</span>
                        <i class="pi pi-trash text-red-800" @click="editPost.image=''"></i>
                    </div>
                </div>
                <div>
                    <Select v-model="editPost.category_id" option-value="id" :options="storeCate.categories"
                            optionLabel="name"
                            placeholder="Select a Cate"
                            class="w-full md:w-56"/>
                </div>
            </div>
            <!--            <div class="flex items-center gap-4 mb-8">
														<label for="file-upload"
																	 class="cursor-pointer  text-white px-4 py-2 rounded-md transition">
																<Image v-if="editPost.image" :src="image  ? image  : editPost.image" alt="Image" width="250"
																			 preview/>
																<input id="file-upload" type="file" class="hidden" @change="onUploadUpdate">
																<svg v-if="!editPost.image" class="w-20" viewBox="0 0 24 24" fill="none"
																		 xmlns="http://www.w3.org/2000/svg">
																		<g id="SVGRepo_bgCarrier" stroke-width="0"></g>
																		<g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
																		<g id="SVGRepo_iconCarrier">
																				<path d="M12 15L12 2M12 2L15 5.5M12 2L9 5.5" stroke="#1C274C" stroke-width="1.5"
																							stroke-linecap="round"
																							stroke-linejoin="round"></path>
																				<path
																								d="M8 22.0002H16C18.8284 22.0002 20.2426 22.0002 21.1213 21.1215C22 20.2429 22 18.8286 22 16.0002V15.0002C22 12.1718 22 10.7576 21.1213 9.8789C20.3529 9.11051 19.175 9.01406 17 9.00195M7 9.00195C4.82497 9.01406 3.64706 9.11051 2.87868 9.87889C2 10.7576 2 12.1718 2 15.0002L2 16.0002C2 18.8286 2 20.2429 2.87868 21.1215C3.17848 21.4213 3.54062 21.6188 4 21.749"
																								stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"></path>
																		</g>
																</svg>
														</label>

												</div>-->
            <div>

            </div>
            <div class="flex justify-end gap-2">
                <Button type="button" label="Cancel" severity="info" @click="visibleEdit = false"></Button>
                <Button type="submit" :loading="loading" severity="contrast" label="Update"></Button>
            </div>
        </Form>
    </Dialog>
    <div class="card">
        <Card>
            <template #content>
                <DataTable
                        dataKey="id"
                        sortMode="multiple"
                        :value="storePost.posts"
                        :paginator="true"
                        :rows="storePost.pagination.per_page"
                        :totalRecords="storePost.pagination.total"
                        :lazy="true"
                        :first="(storePost.pagination.current_page - 1) * storePost.pagination.per_page"
                        :rowsPerPageOptions="[10, 20, 50]"
                        @page="(event) => storePost.fetchPosts(Math.floor(event.first / event.rows) + 1)"
                        stripedRows
                >
                    <template #header>
                        <div class="flex justify-end">
                            <IconField>
                                <InputIcon>
                                    <span class="pi pi-search"></span>
                                </InputIcon>
                                <InputText
                                        v-model.trim="searchQuery"
                                        @input="fetchDebouncedPosts"
                                        placeholder="Keyword Search"
                                />
                            </IconField>
                        </div>
                    </template>
                    <Column field="id" header="ID" :sortable="true" filter>
                        <template #body="{ data}">
                            <span>{{ data.id }}</span>
                        </template>
                    </Column>

                    <Column field="title" header="Title" :sortable="true" filter>
                        <template #body="{ data}">
                            <span>{{ data.title }}</span>
                        </template>
                    </Column>
                    <Column field="description" header="Description" :sortable="true" filter>
                        <template #body="{ data}">
                            <span>{{ data.description }}</span>
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
                                       @click.prevent="deletePost($event,data.id)"
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

<script setup lang="ts">
import Dialog from 'primevue/dialog';
import Editor from 'primevue/editor';
import {Form} from '@primevue/forms';
import {useToast} from "primevue/usetoast";
import {useConfirm} from "primevue/useconfirm";
import 'primeicons/primeicons.css'
import Card from 'primevue/card';

const loading = ref(false);
const storeCate = CategoryStore()

const searchQuery = ref('');
const fetchDebouncedPosts = useDebounceFn(() => {
    storePost.fetchPosts(1, searchQuery.value);
}, 200);
const confirmingPostId = ref();
const confirm = useConfirm();
const deletePost = async (event: any, id: number) => {
    confirmingPostId.value = id;
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
            await storePost.deletePost(confirmingPostId.value)
            toast.add({severity: 'info', summary: 'Confirmed', detail: 'Record deleted', life: 3000});
        },
        reject: () => {
            toast.add({severity: 'error', summary: 'Rejected', detail: 'You have rejected', life: 3000});
        }
    });
};

const open = () => {
    visible.value = true;
    post.image = ''
    post.title = ''
    post.description = ''
    post.category_id = ''
    display.value = ''
    return storeCate.fetchCategories();
}
definePageMeta({
    middleware: ['sanctum:auth'],
})
const editPost = ref({
    id: 0,
    title: '',
    description: '',
    category_id: '',
    created_at: '',
    updated_at: '',
    image: ref(),
});
let image = ref()
const display = ref()
const filename = ref()

const onUpload = (event: any) => {
    image.value = event.target.files[0];
    display.value = URL.createObjectURL(event.target.files[0]);
    filename.value = event.target.files[0].name;
};
const onUploadUpdate = (event: any) => {
    editPost.value.image = event.target.files[0];
    image.value = URL.createObjectURL(event.target.files[0]);
};
const openModal = (post: any) => {
    editPost.value = {...post}
    visibleEdit.value = true;
    return storeCate.fetchCategories();
}
const handleUpdate = () => {
    storePost.updatePost(editPost.value)
    if (storePost.messageUpdate !== '') {
        toast.add({
            severity: 'success',
            detail: storePost.messageUpdate ?? 'Post updated successful',
            summary: 'success',
            life: 3000
        });
        storePost.messageUpdate = null
    } else {
        storePost.errors.forEach((error) => {
            toast.add({severity: 'error', detail: error, summary: 'error', life: 3000});
        })
        storePost.errors = []
    }

}
const post = reactive({
    title: '',
    description: '',
    category_id: '',
    image
})
const toast = useToast();
const handleSubmit = async () => {
    loading.value = true;
    await storePost.addPost(post);
    loading.value = false;
    if (storePost.message !== null) {
        toast.add({
            severity: 'success',
            detail: storePost.message ?? 'Post created successful',
            summary: 'success',
            life: 3000
        });
        post.title = ''
        post.description = ''
        post.image = null
        display.value = null
        storePost.message = null
    } else {
        storePost.errors.forEach((error) => {
            toast.add({severity: 'error', detail: error, summary: 'error', life: 3000});
        })
        storePost.errors = [];
    }
}

const visible = ref(false);
const visibleEdit = ref(false);
const storePost = PostStore()

await callOnce(storePost.fetchPosts);

</script>
<style scoped>

</style>