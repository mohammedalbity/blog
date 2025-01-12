<template>
  <div class="grid grid-cols-3 gap-4  my-10">
    <div class="bg-white font-semibold shadow-sm text-xl border capitalize border-gray-200 rounded-lg">
      <!--      <Skeleton v-show="status==='pending'" height="70px"></Skeleton>-->
      <div class="flex justify-between items-center py-5 px-5 ">
        Users
        <div>{{ Object.values(chart.chartUser).reduce((acc, value) => acc + value, 0) }}</div>
      </div>
      <div class="relative">
        <svg class="w-8 left-[18px] -top-[85px] absolute" viewBox="0 0 24 24" fill="#000000"
             xmlns="http://www.w3.org/2000/svg">
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
          <g id="SVGRepo_iconCarrier">
            <circle cx="12" cy="6" r="4" stroke="#1C274C" stroke-width="1.5"></circle>
            <path d="M18 9C19.6569 9 21 7.88071 21 6.5C21 5.11929 19.6569 4 18 4" stroke="#1C274C"
                  stroke-width="1.5" stroke-linecap="round"></path>
            <path d="M6 9C4.34315 9 3 7.88071 3 6.5C3 5.11929 4.34315 4 6 4" stroke="#1C274C" stroke-width="1.5"
                  stroke-linecap="round"></path>
            <path
                d="M17.1973 15C17.7078 15.5883 18 16.2714 18 17C18 19.2091 15.3137 21 12 21C8.68629 21 6 19.2091 6 17C6 14.7909 8.68629 13 12 13C12.3407 13 12.6748 13.0189 13 13.0553"
                stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"></path>
            <path d="M20 19C21.7542 18.6153 23 17.6411 23 16.5C23 15.3589 21.7542 14.3847 20 14" stroke="#1C274C"
                  stroke-width="1.5" stroke-linecap="round"></path>
            <path d="M4 19C2.24575 18.6153 1 17.6411 1 16.5C1 15.3589 2.24575 14.3847 4 14" stroke="#1C274C"
                  stroke-width="1.5" stroke-linecap="round"></path>
          </g>
        </svg>
      </div>
    </div>
    <div class="bg-white font-semibold shadow-sm text-xl border capitalize border-gray-200 rounded-lg">
      <!--      <Skeleton v-show="status==='pending'" height="70px"></Skeleton>-->
      <div class="flex justify-between items-center  py-5 px-5">
        Posts
        <div>{{ Object.values(chart.chartPost).reduce((acc, value) => acc + value, 0) }}</div>
      </div>
      <div class="relative">
        <svg class="w-8 left-[18px] -top-[85px] absolute" id="_x32_" xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512" xml:space="preserve" fill="#000000">
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round">
              </g>
          <g id="SVGRepo_iconCarrier"><g>
                <path class="st0"
                      d="M421.073,221.719c-0.578,11.719-9.469,26.188-23.797,40.094v183.25c-0.016,4.719-1.875,8.719-5.016,11.844 c-3.156,3.063-7.25,4.875-12.063,4.906H81.558c-4.781-0.031-8.891-1.844-12.047-4.906c-3.141-3.125-4.984-7.125-5-11.844V152.219 c0.016-4.703,1.859-8.719,5-11.844c3.156-3.063,7.266-4.875,12.047-4.906h158.609c12.828-16.844,27.781-34.094,44.719-49.906 c0.078-0.094,0.141-0.188,0.219-0.281H81.558c-18.75-0.016-35.984,7.531-48.25,19.594c-12.328,12.063-20.016,28.938-20,47.344 v292.844c-0.016,18.406,7.672,35.313,20,47.344C45.573,504.469,62.808,512,81.558,512h298.641c18.781,0,36.016-7.531,48.281-19.594 c12.297-12.031,20-28.938,19.984-47.344V203.469c0,0-0.125-0.156-0.328-0.313C440.37,209.813,431.323,216.156,421.073,221.719z"></path> <path
              class="st0"
              d="M498.058,0c0,0-15.688,23.438-118.156,58.109C275.417,93.469,211.104,237.313,211.104,237.313 c-15.484,29.469-76.688,151.906-76.688,151.906c-16.859,31.625,14.031,50.313,32.156,17.656 c34.734-62.688,57.156-119.969,109.969-121.594c77.047-2.375,129.734-69.656,113.156-66.531c-21.813,9.5-69.906,0.719-41.578-3.656 c68-5.453,109.906-56.563,96.25-60.031c-24.109,9.281-46.594,0.469-51-2.188C513.386,138.281,498.058,0,498.058,0z"></path> </g> </g></svg>
      </div>
    </div>
    <div class="bg-white font-semibold shadow-sm text-xl border  capitalize border-gray-200 rounded-lg">
      <!--      <Skeleton v-show="status==='pending'" height="70px"></Skeleton>-->
      <div class="flex justify-between items-center py-5 px-5">
        Tags
        <div>{{ Object.values(chart.chartTag).reduce((acc, value) => acc + value, 0) }}</div>
      </div>

      <div class="relative">
        <svg class="w-8 left-[18px] -top-[85px] absolute" viewBox="0 0 24 24" fill="none"
             xmlns="http://www.w3.org/2000/svg">
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
          <g id="SVGRepo_iconCarrier">
            <path
                d="M8.5 3H11.5118C12.2455 3 12.6124 3 12.9577 3.08289C13.2638 3.15638 13.5564 3.27759 13.8249 3.44208C14.1276 3.6276 14.387 3.88703 14.9059 4.40589L20.5 10M7.5498 10.0498H7.5598M9.51178 6H8.3C6.61984 6 5.77976 6 5.13803 6.32698C4.57354 6.6146 4.1146 7.07354 3.82698 7.63803C3.5 8.27976 3.5 9.11984 3.5 10.8V12.0118C3.5 12.7455 3.5 13.1124 3.58289 13.4577C3.65638 13.7638 3.77759 14.0564 3.94208 14.3249C4.1276 14.6276 4.38703 14.887 4.90589 15.4059L8.10589 18.6059C9.29394 19.7939 9.88796 20.388 10.5729 20.6105C11.1755 20.8063 11.8245 20.8063 12.4271 20.6105C13.112 20.388 13.7061 19.7939 14.8941 18.6059L16.1059 17.3941C17.2939 16.2061 17.888 15.612 18.1105 14.9271C18.3063 14.3245 18.3063 13.6755 18.1105 13.0729C17.888 12.388 17.2939 11.7939 16.1059 10.6059L12.9059 7.40589C12.387 6.88703 12.1276 6.6276 11.8249 6.44208C11.5564 6.27759 11.2638 6.15638 10.9577 6.08289C10.6124 6 10.2455 6 9.51178 6ZM8.0498 10.0498C8.0498 10.3259 7.82595 10.5498 7.5498 10.5498C7.27366 10.5498 7.0498 10.3259 7.0498 10.0498C7.0498 9.77366 7.27366 9.5498 7.5498 9.5498C7.82595 9.5498 8.0498 9.77366 8.0498 10.0498Z"
                stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
          </g>
        </svg>
      </div>
    </div>
  </div>
  <Card>
    <template #content>
      <!--      <Skeleton class="w-full" height="28rem" v-show="status==='pending'"></Skeleton>-->
      <chart-data :chartDataInput="chartData1" title="Dashboard Chart"></chart-data>
    </template>
  </Card>

</template>

<script setup>
import Card from "primevue/card";

const chart = useChartStore();
useSeoMeta({
  title: 'Dashboard',
})
definePageMeta({
  middleware: ['sanctum:auth'],
});
const chartData1 = reactive({
  labels: [],
  datasets: []
});
await callOnce(chart.fetchChart)

chartData1.labels = [
  ...new Set([
    ...Object.keys(chart.chartPost),
    ...Object.keys(chart.chartUser),
    ...Object.keys(chart.chartTag)
  ])
]
chartData1.datasets = [
  {
    label: 'Posts',
    data: Object.values(chart.chartPost),
    fill: false,
    borderWidth: 2,
    borderColor: '#5C6578',
    backgroundColor: '#5C6578',
    tension: 0.4,
    pointRadius: 5,
    pointStyle: 'circle',
  }, {
    label: 'Users',
    data: Object.values(chart.chartUser),
    fill: false,
    borderWidth: 2,
    borderColor: '#06B6D4',
    borderDash: [5, 5],
    tension: 0.4,
    backgroundColor: '#06B6D4',
    pointRadius: 5,
    pointStyle: 'circle',
  }, {
    label: 'Tags',
    data: Object.values(chart.chartTag),
    fill: false,
    borderWidth: 2,
    borderColor: '#030303',
    backgroundColor: '#030303',
    tension: 0.4,
    pointRadius: 5,
    pointStyle: 'circle',
  }
];


</script>

