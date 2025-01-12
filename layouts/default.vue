<script setup lang="ts">
const route = useRoute()

interface User {
  name: string | null;
  avatar_url: string;
}

const isExcludedRoute = (path: any) => {
  const excludedPatterns = [
    /^\/login$/,
    /^\/blog$/,
    /^\/blog\/.*$/
  ];
  return excludedPatterns.some((pattern) => pattern.test(path));
}

const user = useSanctumUser<User>();
const items = ref([
  {
    label: 'Home',
    icon: 'pi pi-home',
    href: '/blog',
  },
  {
    label: 'Local News',
    icon: 'pi pi-map',
    href: '/blog/local',
  },
  {
    label: 'World News',
    icon: 'pi pi-globe',
    href: '/blog/world',
  },
  {
    label: 'Sports',
    icon: 'pi pi-football',
    href: '/blog/sports',
  },
  {
    label: 'Health',
    icon: 'pi pi-heart',
    href: '/blog/health',
  },
  {
    label: 'Business',
    icon: 'pi pi-briefcase',
    href: '/blog/business',
  },
  {
    label: 'Technology',
    icon: 'pi pi-mobile',
    href: '/blog/technology',
  },
  {
    label: 'Entertainment',
    icon: 'pi pi-star',
    href: '/blog/entertainment',
  },
  {
    label: 'Science',
    icon: 'pi pi-compass',
    href: '/blog/science',
  },
  {
    label: 'Travel',
    icon: 'pi pi-send',
    href: '/blog/travel',
  },
]);
</script>

<template>
  <div v-if="isExcludedRoute(route.path)" class="card  sticky top-0 z-10">
    <Menubar :model="items" class="!border">
      <!-- القالب الخاص بالعناصر -->
      <template #item="{ item, props }">
        <!-- إذا كان هناك عناصر فرعية -->
        <template v-if="item.items">
          <div v-bind="props" class="menu-dropdown">
            <div v-for="child in item.items" key="child.label || child.separator" class="menu-item">
              <!-- رابط NuxtLink إذا كان موجود -->
              <NuxtLink
                  v-if="child.href"
                  :to="child.href"
                  class="flex items-center gap-1 px-2 py-2 hover:bg-gray-100 rounded"
              >
                <span :class="child.icon"/>
                <span>{{ child.label }}</span>
              </NuxtLink>
            </div>
          </div>
        </template>
        <!-- العناصر الرئيسية -->
        <NuxtLink
            v-else-if="item.href"
            :to="item.href"
            class="flex items-center gap-1 px-3 py-2 hover:bg-gray-100 rounded"
        >
          <span :class="item.icon" class="mr-2"/>
          <span>{{ item.label }}</span>
        </NuxtLink>
      </template>

      <!-- الشعار في بداية القائمة -->
      <template #start>
        <svg
            width="35"
            height="40"
            viewBox="0 0 35 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="h-8"
        >
          <path
              d="M25.87 18.05L23.16 17.45L25.27 20.46V29.78L32.49 23.76V13.53L29.18 14.73L25.87 18.04V18.05ZM25.27 35.49L29.18 31.58V27.67L25.27 30.98V35.49ZM20.16 17.14H20.03H20.17H20.16ZM30.1 5.19L34.89 4.81L33.08 12.33L24.1 15.67L30.08 5.2L30.1 5.19ZM5.72 14.74L2.41 13.54V23.77L9.63 29.79V20.47L11.74 17.46L9.03 18.06L5.72 14.75V14.74ZM9.63 30.98L5.72 27.67V31.58L9.63 35.49V30.98ZM4.8 5.2L10.78 15.67L1.81 12.33L0 4.81L4.79 5.19L4.8 5.2ZM24.37 21.05V34.59L22.56 37.29L20.46 39.4H14.44L12.34 37.29L10.53 34.59V21.05L12.42 18.23L17.45 26.8L22.48 18.23L24.37 21.05ZM22.85 0L22.57 0.69L17.45 13.08L12.33 0.69L12.05 0H22.85Z"
              fill="var(--p-primary-color)"
          />
          <path
              d="M30.69 4.21L24.37 4.81L22.57 0.69L22.86 0H26.48L30.69 4.21ZM23.75 5.67L22.66 3.08L18.05 14.24V17.14H19.7H20.03H20.16H20.2L24.1 15.7L30.11 5.19L23.75 5.67ZM4.21002 4.21L10.53 4.81L12.33 0.69L12.05 0H8.43002L4.22002 4.21H4.21002ZM21.9 17.4L20.6 18.2H14.3L13 17.4L12.4 18.2L12.42 18.23L17.45 26.8L22.48 18.23L22.5 18.2L21.9 17.4ZM4.79002 5.19L10.8 15.7L14.7 17.14H14.74H15.2H16.85V14.24L12.24 3.09L11.15 5.68L4.79002 5.2V5.19Z"
              fill="var(--p-text-color)"
          />
        </svg>
      </template>

      <!-- البحث والأفاتار -->
      <template #end>
        <div class="flex items-center gap-2">
          <InputText placeholder="Search" type="text" class="w-32 sm:w-auto"/>
          <Avatar class="mr-2 w-10 h-10" :image="user?.avatar_url ?? '/favicon.ico'" size="large" shape="circle"/>
        </div>
      </template>
    </Menubar>

  </div>
  <div class="flex min-h-screen bg-[#F5F6F7]">
    <div v-if="!isExcludedRoute(route.path)">
      <SidebarContent/>
    </div>
    <div v-if="route.path!=='/login' && route.path=='/blog'" class="flex-1 mb-5 mx-2 md:mx-44 ">
      <slot/>
    </div>
    <div v-else class="flex-1 mb-5 mx-9 ">
      <slot/>
    </div>
  </div>
</template>

<style scoped>

</style>