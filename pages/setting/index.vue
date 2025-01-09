<script setup lang="ts">
import Textarea from "primevue/textarea";
import {Form} from "@primevue/forms";


const store = SettingStore()
const display = ref('')

const setting = ref({
  id: 1,
  websiteName: '',
  description: '',
  postCount: '',
  logo: ref()
})

const {status} = await useLazyAsyncData('setting', () => store.fetchSettings())
setting.value.description = store.description
setting.value.postCount = store.postCount
setting.value.websiteName = store.websiteName
setting.value.logo = store.logo


const onUpload = (event: any) => {
  setting.value.logo = event.target.files[0];
  console.log(setting.value.logo)
  display.value = URL.createObjectURL(event.target.files[0]);
}
const handleSubmit = () => {
  store.updateSettings(setting.value)
}

</script>

<template>
  <Card class="mt-5">
    <template #title>
      <h1>Setting</h1>
    </template>
    <template #content>
      <Form @submit="handleSubmit">
        <label for="websiteName" class="font-semibold">websiteName</label>
        <div class="flex gap-4 mb-5">
          <Skeleton v-show="status=='pending'" animation="wave" height="2.5rem" shape="rectangle"></Skeleton>
          <InputText id="name" v-show="status=='success'" v-model="setting.websiteName" class="flex-auto"
                     autocomplete="off"/>
        </div>

        <label for="description" class="font-semibold">Description</label>
        <div class="flex gap-4 mb-5">
          <Skeleton v-show="status=='pending'" height="10rem" animation="wave"></Skeleton>
          <Textarea id="description" v-show="status=='success'" class="flex-auto" v-model="setting.description" rows="5"
                    cols="30"/>
        </div>
        <label for="post count" class="font-semibold">post Count</label>
        <div class="flex gap-4 mb-5">
          <Skeleton v-show="status=='pending'" animation="wave" height="2.5rem" shape="rectangle"></Skeleton>
          <InputText id="postCount" v-show="status=='idle'" type="number" v-model="setting.postCount"
                     class="flex-auto" autocomplete="off"/>
        </div>
        <Skeleton v-show="status=='pending'" animation="wave" height="11rem" width="11rem" shape="rectangle">
        </Skeleton>
        <div v-show="status=='success'" class="flex items-center gap-4 mb-8 ">
          <div
              class="border-dotted border-4 flex items-center py-2 px-2 justify-center border-gray-200 rounded-md h-44 w-44">
            <label for="file-upload"
                   class="cursor-pointer  text-white px-4 py-2 rounded-md transition">
              <Image v-if="!display" :src="display ? display : setting.logo" alt="Image" class="w-fit" preview/>
              <input id="file-upload" class="hidden" type="file" @change="onUpload">
              <svg v-if="display" class="w-20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
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
          </div>
        </div>
        <div class="flex justify-start gap-2 mt-10">
          <Button type="submit" severity="contrast" label="Save"></Button>
        </div>
      </Form>
    </template>
  </Card>
</template>

<style scoped>

</style>