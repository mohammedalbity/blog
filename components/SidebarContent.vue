<script setup lang="ts">
const {logout, isAuthenticated} = useSanctumAuth();


const formLogout = () => {
  logout()
}

interface User {
  name: string | null;
  avatar_url: string;
}

const user = useSanctumUser<User>();
</script>

<template class="relative">
  <div
      class="sticky top-0 hidden md:flex  w-full max-w-[20rem] min-h-screen flex-col rounded-xl bg-white bg-clip-border p-4 text-gray-700  border">
    <div class="flex justify-center items-center gap-4 p-4 mb-2">
      <h5 class="block font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
        {{ user?.name }}
      </h5>
      <Avatar :image="user?.avatar_url ?? '/favicon.ico'" class="mr-2" size="large" shape="circle"/>

    </div>
    <nav class="flex min-w-[240px] flex-col gap-1 p-2 font-sans text-base font-normal text-blue-gray-700">
      <div class="relative block w-full">
        <div role="button"
             class="flex items-center w-full p-0 leading-tight transition-all rounded-lg outline-none text-start hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900">
          <NuxtLink to="/dashboard"
                    class="flex items-center justify-between w-full p-3 font-sans text-xl antialiased font-semibold leading-snug text-left transition-colors border-b-0 select-none border-b-blue-gray-100 text-blue-gray-700 hover:text-blue-gray-900">
            <div class="grid mr-4 place-items-center">
              <svg class="w-5 h-5" fill="#000000" height="200px" width="200px" version="1.1" id="Layer_1"
                   xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                   viewBox="0 0 512.001 512.001" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                <g id="SVGRepo_iconCarrier"> <g> <g> <path
                    d="M426.56,0H85.44C38.251,0,0,38.26,0,85.44v341.141C0,473.76,38.249,512,85.44,512h341.12 c47.191,0,85.44-38.24,85.44-85.419V85.44C512,38.26,473.749,0,426.56,0z M85.44,42.667h341.12 c23.623,0,42.773,19.155,42.773,42.773v77.752l-63.737,79.671l-11.426-14.737c7.039-10.28,11.163-22.714,11.163-36.118 c0-35.355-28.645-64-64-64c-35.355,0-64,28.645-64,64c0,7.765,1.383,15.205,3.914,22.09l-48.209,54.283l-43.044-39.083 c1.308-5.101,2.005-10.447,2.005-15.957c0-35.355-28.645-64-64-64s-64,28.645-64,64c0,9.882,2.241,19.238,6.238,27.592 l-27.571,27.571V85.44C42.667,61.822,61.817,42.667,85.44,42.667z M324.08,204.528c-0.015-0.02-0.03-0.04-0.045-0.061 c-2.529-3.506-4.035-7.8-4.035-12.458c0-11.791,9.542-21.333,21.333-21.333c11.791,0,21.333,9.542,21.333,21.333 s-9.542,21.333-21.333,21.333C334.227,213.342,327.956,209.863,324.08,204.528z M112.997,228.508 c-0.027-0.028-0.05-0.058-0.077-0.085s-0.058-0.05-0.085-0.077c-3.812-3.853-6.167-9.149-6.167-15.003 c0-11.791,9.542-21.333,21.333-21.333s21.333,9.542,21.333,21.333c0,2.659-0.507,5.193-1.394,7.539 c-1.637,1.926-2.879,4.059-3.721,6.306c-3.911,4.578-9.718,7.488-16.218,7.488C122.146,234.676,116.85,232.32,112.997,228.508z M426.56,469.334H85.44c-23.629,0-42.773-19.14-42.773-42.752v-97.736l57.741-57.741c8.354,3.997,17.71,6.238,27.592,6.238 c14.151,0,27.22-4.598,37.814-12.369l54.512,49.496c0.029,0.027,0.061,0.048,0.091,0.075c0.029,0.026,0.054,0.056,0.084,0.082 c0.242,0.215,0.5,0.398,0.748,0.6c0.288,0.234,0.57,0.478,0.867,0.695c0.283,0.207,0.578,0.386,0.869,0.576 c0.307,0.202,0.608,0.414,0.923,0.598c0.301,0.176,0.611,0.324,0.918,0.484c0.317,0.165,0.63,0.341,0.953,0.49 c0.317,0.146,0.642,0.263,0.965,0.392c0.323,0.129,0.643,0.27,0.971,0.383c0.332,0.114,0.669,0.201,1.005,0.298 c0.327,0.095,0.651,0.2,0.981,0.279c0.341,0.081,0.686,0.135,1.031,0.2c0.33,0.062,0.659,0.135,0.991,0.181 c0.345,0.048,0.692,0.068,1.039,0.099c0.335,0.03,0.668,0.071,1.004,0.085c0.344,0.014,0.689,0.002,1.033,0 c0.339-0.002,0.677,0.006,1.015-0.012c0.339-0.018,0.676-0.063,1.014-0.097c0.342-0.035,0.684-0.059,1.024-0.11 c0.331-0.05,0.658-0.126,0.987-0.191c0.342-0.068,0.685-0.126,1.024-0.21c0.325-0.081,0.642-0.189,0.963-0.285 c0.336-0.101,0.674-0.192,1.006-0.31c0.319-0.113,0.629-0.253,0.943-0.382c0.324-0.133,0.651-0.255,0.969-0.405 c0.313-0.147,0.615-0.32,0.922-0.483c0.307-0.163,0.619-0.316,0.919-0.495c0.306-0.182,0.599-0.391,0.897-0.59 c0.287-0.191,0.579-0.372,0.858-0.578c0.293-0.217,0.57-0.46,0.854-0.694c0.268-0.221,0.543-0.43,0.802-0.666 c0.271-0.247,0.525-0.52,0.786-0.783c0.226-0.228,0.463-0.438,0.681-0.678c0.027-0.029,0.048-0.061,0.075-0.091 c0.026-0.029,0.056-0.054,0.082-0.084l58.303-65.649c9.507,5.595,20.58,8.816,32.413,8.816c6.391,0,12.557-0.948,18.38-2.691 l28.76,37.095c0.059,0.076,0.126,0.142,0.186,0.217c0.259,0.324,0.535,0.637,0.815,0.948c0.22,0.245,0.439,0.491,0.667,0.724 c0.23,0.233,0.472,0.455,0.715,0.679c0.307,0.285,0.615,0.565,0.935,0.829c0.074,0.061,0.139,0.129,0.214,0.19 c0.139,0.112,0.288,0.202,0.43,0.31c0.357,0.272,0.717,0.537,1.088,0.783c0.238,0.158,0.479,0.305,0.721,0.453 c0.348,0.212,0.697,0.418,1.055,0.609c0.291,0.156,0.585,0.298,0.881,0.439c0.316,0.15,0.633,0.296,0.956,0.43 c0.343,0.143,0.688,0.272,1.036,0.396c0.29,0.103,0.58,0.203,0.873,0.293c0.375,0.116,0.753,0.218,1.132,0.312 c0.284,0.07,0.567,0.137,0.853,0.196c0.382,0.078,0.764,0.144,1.149,0.201c0.3,0.045,0.6,0.085,0.902,0.117 c0.365,0.038,0.729,0.066,1.094,0.086c0.332,0.018,0.663,0.03,0.996,0.033c0.333,0.002,0.665-0.004,0.998-0.017 c0.365-0.014,0.729-0.036,1.094-0.069c0.302-0.028,0.603-0.063,0.904-0.103c0.385-0.051,0.769-0.111,1.152-0.184 c0.287-0.054,0.571-0.117,0.855-0.183c0.381-0.089,0.76-0.185,1.138-0.295c0.294-0.086,0.585-0.181,0.876-0.279 c0.35-0.119,0.698-0.243,1.043-0.381c0.324-0.129,0.642-0.27,0.959-0.414c0.299-0.137,0.596-0.275,0.89-0.427 c0.36-0.185,0.711-0.385,1.061-0.591c0.245-0.144,0.489-0.287,0.73-0.443c0.375-0.241,0.738-0.501,1.1-0.767 c0.143-0.105,0.293-0.193,0.434-0.303c0.076-0.059,0.141-0.126,0.216-0.186c0.325-0.259,0.638-0.535,0.949-0.816 c0.245-0.22,0.491-0.438,0.724-0.667c0.233-0.23,0.455-0.473,0.679-0.715c0.285-0.307,0.565-0.615,0.829-0.935 c0.061-0.074,0.129-0.139,0.19-0.214l47.341-59.177v195.09C469.333,450.194,450.189,469.334,426.56,469.334z"></path> </g> </g> </g></svg>
            </div>
            <p class="block mr-auto font-sans text-base antialiased font-normal leading-relaxed text-blue-gray-900">
              Dashboard
            </p>
          </NuxtLink>
        </div>
      </div>
      <div class="relative block w-full">
        <div role="button"
             class="flex items-center w-full p-0 leading-tight transition-all rounded-lg outline-none text-start hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900">
          <NuxtLink to="/blog"
                    class="flex items-center justify-between w-full p-3 font-sans text-xl antialiased font-semibold leading-snug text-left transition-colors border-b-0 select-none border-b-blue-gray-100 text-blue-gray-700 hover:text-blue-gray-900">
            <div class="grid mr-4 place-items-center">
              <svg class="w-5 h-5" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
                   xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 32.00 32.00"
                   enable-background="new 0 0 32 32" xml:space="preserve" fill="#000000" stroke="#000000"
                   stroke-width="0.288"><g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                <g id="SVGRepo_iconCarrier"> <g> <path fill="#000000"
                                                       d="M30.5,0h-29C0.673,0,0,0.673,0,1.5v8C0,10.327,0.673,11,1.5,11h29c0.827,0,1.5-0.673,1.5-1.5v-8 C32,0.673,31.327,0,30.5,0z M31,9.5c0,0.275-0.225,0.5-0.5,0.5h-29C1.225,10,1,9.775,1,9.5v-8C1,1.225,1.225,1,1.5,1h29 C30.775,1,31,1.225,31,1.5V9.5z"></path>
                  <path fill="#000000"
                        d="M31.5,12.5c-0.276,0-0.5,0.224-0.5,0.5v17.5c0,0.275-0.225,0.5-0.5,0.5h-29C1.225,31,1,30.775,1,30.5V13 c0-0.276-0.224-0.5-0.5-0.5S0,12.724,0,13v17.5C0,31.327,0.673,32,1.5,32h29c0.827,0,1.5-0.673,1.5-1.5V13 C32,12.724,31.776,12.5,31.5,12.5z"></path>
                  <path fill="#000000"
                        d="M13.5,27c0.827,0,1.5-0.673,1.5-1.5v-8c0-0.827-0.673-1.5-1.5-1.5h-8C4.673,16,4,16.673,4,17.5v8 C4,26.327,4.673,27,5.5,27H13.5z M5,25.5v-8C5,17.225,5.225,17,5.5,17h8c0.275,0,0.5,0.225,0.5,0.5v8c0,0.275-0.225,0.5-0.5,0.5h-8 C5.225,26,5,25.775,5,25.5z"></path>
                  <path fill="#000000"
                        d="M18,18h9c0.276,0,0.5-0.224,0.5-0.5S27.276,17,27,17h-9c-0.276,0-0.5,0.224-0.5,0.5S17.724,18,18,18z"></path>
                  <path fill="#000000"
                        d="M18,22h9c0.276,0,0.5-0.224,0.5-0.5S27.276,21,27,21h-9c-0.276,0-0.5,0.224-0.5,0.5S17.724,22,18,22z"></path>
                  <path fill="#000000"
                        d="M18,26h9c0.276,0,0.5-0.224,0.5-0.5S27.276,25,27,25h-9c-0.276,0-0.5,0.224-0.5,0.5S17.724,26,18,26z"></path> </g> </g></svg>
            </div>

            <p class="block mr-auto font-sans text-base antialiased font-normal leading-relaxed text-blue-gray-900">
              Blog
            </p>
          </NuxtLink>
        </div>
      </div>
      <div class="relative block w-full">
        <div role="button"
             class="flex items-center w-full p-0 leading-tight transition-all rounded-lg outline-none text-start hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900">
          <NuxtLink to="/users"
                    class="flex items-center justify-between w-full p-3 font-sans text-xl antialiased font-semibold leading-snug text-left transition-colors border-b-0 select-none border-b-blue-gray-100 text-blue-gray-700 hover:text-blue-gray-900">
            <div class="grid mr-4 place-items-center">
              <svg class="w-5 h-5" viewBox="0 0 24 24" fill="#000000" xmlns="http://www.w3.org/2000/svg">
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
            <p class="block mr-auto font-sans text-base antialiased font-normal leading-relaxed text-blue-gray-900">
              Users
            </p>
          </NuxtLink>
        </div>
      </div>
      <div class="relative block w-full">
        <div role="button"
             class="flex items-center w-full p-0 leading-tight transition-all rounded-lg outline-none text-start hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900">
          <NuxtLink to="/posts" type="button"
                    class="flex items-center justify-between w-full p-3 font-sans text-xl antialiased font-semibold leading-snug text-left transition-colors border-b-0 select-none border-b-blue-gray-100 text-blue-gray-700 hover:text-blue-gray-900">
            <div class="grid mr-4 place-items-center">
              <svg class="w-5 h-5" version="1.1" id="_x32_" xmlns="http://www.w3.org/2000/svg"
                   xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xml:space="preserve" fill="#000000">
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round">
              </g>
                <g id="SVGRepo_iconCarrier"><g>
                <path class="st0"
                      d="M421.073,221.719c-0.578,11.719-9.469,26.188-23.797,40.094v183.25c-0.016,4.719-1.875,8.719-5.016,11.844 c-3.156,3.063-7.25,4.875-12.063,4.906H81.558c-4.781-0.031-8.891-1.844-12.047-4.906c-3.141-3.125-4.984-7.125-5-11.844V152.219 c0.016-4.703,1.859-8.719,5-11.844c3.156-3.063,7.266-4.875,12.047-4.906h158.609c12.828-16.844,27.781-34.094,44.719-49.906 c0.078-0.094,0.141-0.188,0.219-0.281H81.558c-18.75-0.016-35.984,7.531-48.25,19.594c-12.328,12.063-20.016,28.938-20,47.344 v292.844c-0.016,18.406,7.672,35.313,20,47.344C45.573,504.469,62.808,512,81.558,512h298.641c18.781,0,36.016-7.531,48.281-19.594 c12.297-12.031,20-28.938,19.984-47.344V203.469c0,0-0.125-0.156-0.328-0.313C440.37,209.813,431.323,216.156,421.073,221.719z"></path> <path
                    class="st0"
                    d="M498.058,0c0,0-15.688,23.438-118.156,58.109C275.417,93.469,211.104,237.313,211.104,237.313 c-15.484,29.469-76.688,151.906-76.688,151.906c-16.859,31.625,14.031,50.313,32.156,17.656 c34.734-62.688,57.156-119.969,109.969-121.594c77.047-2.375,129.734-69.656,113.156-66.531c-21.813,9.5-69.906,0.719-41.578-3.656 c68-5.453,109.906-56.563,96.25-60.031c-24.109,9.281-46.594,0.469-51-2.188C513.386,138.281,498.058,0,498.058,0z"></path> </g> </g></svg>
            </div>
            <p class="block mr-auto font-sans text-base antialiased font-normal leading-relaxed text-blue-gray-900">
              Posts
            </p>
          </NuxtLink>
        </div>
      </div>
      <div class="relative block w-full">
        <div role="button"
             class="flex items-center w-full p-0 leading-tight transition-all rounded-lg outline-none text-start hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900">
          <NuxtLink to="/categories" type="button"
                    class="flex items-center justify-between w-full p-3 font-sans text-xl antialiased font-semibold leading-snug text-left transition-colors border-b-0 select-none border-b-blue-gray-100 text-blue-gray-700 hover:text-blue-gray-900">
            <div class="grid mr-4 place-items-center">
              <svg class="w-5 h-5" version="1.1" id="_x32_" xmlns="http://www.w3.org/2000/svg"
                   xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xml:space="preserve" fill="#000000">
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round">
              </g>
                <g id="SVGRepo_iconCarrier"><g>
                <path class="st0"
                      d="M421.073,221.719c-0.578,11.719-9.469,26.188-23.797,40.094v183.25c-0.016,4.719-1.875,8.719-5.016,11.844 c-3.156,3.063-7.25,4.875-12.063,4.906H81.558c-4.781-0.031-8.891-1.844-12.047-4.906c-3.141-3.125-4.984-7.125-5-11.844V152.219 c0.016-4.703,1.859-8.719,5-11.844c3.156-3.063,7.266-4.875,12.047-4.906h158.609c12.828-16.844,27.781-34.094,44.719-49.906 c0.078-0.094,0.141-0.188,0.219-0.281H81.558c-18.75-0.016-35.984,7.531-48.25,19.594c-12.328,12.063-20.016,28.938-20,47.344 v292.844c-0.016,18.406,7.672,35.313,20,47.344C45.573,504.469,62.808,512,81.558,512h298.641c18.781,0,36.016-7.531,48.281-19.594 c12.297-12.031,20-28.938,19.984-47.344V203.469c0,0-0.125-0.156-0.328-0.313C440.37,209.813,431.323,216.156,421.073,221.719z"></path> <path
                    class="st0"
                    d="M498.058,0c0,0-15.688,23.438-118.156,58.109C275.417,93.469,211.104,237.313,211.104,237.313 c-15.484,29.469-76.688,151.906-76.688,151.906c-16.859,31.625,14.031,50.313,32.156,17.656 c34.734-62.688,57.156-119.969,109.969-121.594c77.047-2.375,129.734-69.656,113.156-66.531c-21.813,9.5-69.906,0.719-41.578-3.656 c68-5.453,109.906-56.563,96.25-60.031c-24.109,9.281-46.594,0.469-51-2.188C513.386,138.281,498.058,0,498.058,0z"></path> </g> </g></svg>
            </div>
            <p class="block mr-auto font-sans text-base antialiased font-normal leading-relaxed text-blue-gray-900">
              Categories
            </p>
          </NuxtLink>
        </div>
      </div>
      <hr class="my-2 border-blue-gray-50"/>
      <div role="button"
           class="flex items-center w-full p-3 leading-tight transition-all rounded-lg outline-none text-start hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900">
        <div class="grid mr-4 place-items-center">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"
               class="w-5 h-5">
            <path fill-rule="evenodd"
                  d="M6.912 3a3 3 0 00-2.868 2.118l-2.411 7.838a3 3 0 00-.133.882V18a3 3 0 003 3h15a3 3 0 003-3v-4.162c0-.299-.045-.596-.133-.882l-2.412-7.838A3 3 0 0017.088 3H6.912zm13.823 9.75l-2.213-7.191A1.5 1.5 0 0017.088 4.5H6.912a1.5 1.5 0 00-1.434 1.059L3.265 12.75H6.11a3 3 0 012.684 1.658l.256.513a1.5 1.5 0 001.342.829h3.218a1.5 1.5 0 001.342-.83l.256-.512a3 3 0 012.684-1.658h2.844z"
                  clip-rule="evenodd"></path>
          </svg>
        </div>
        Inbox
        <div class="grid ml-auto place-items-center justify-self-end">
          <div
              class="relative grid items-center px-2 py-1 font-sans text-xs font-bold uppercase rounded-full select-none whitespace-nowrap bg-blue-gray-500/20 text-blue-gray-900">
            <span class="">14</span>
          </div>
        </div>
      </div>
      <NuxtLink to="/profile">
        <div role="button"
             class="flex items-center w-full p-3 leading-tight transition-all rounded-lg outline-none text-start hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900">
          <div class="grid mr-4 place-items-center">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"
                 class="w-5 h-5">
              <path fill-rule="evenodd"
                    d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                    clip-rule="evenodd"></path>
            </svg>
          </div>
          Profile
        </div>
      </NuxtLink>

      <NuxtLink to="/setting" role="button"
                class="flex items-center w-full p-3 leading-tight transition-all rounded-lg outline-none text-start hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900">
        <div class="grid mr-4 place-items-center">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"
               class="w-5 h-5">
            <path fill-rule="evenodd"
                  d="M11.078 2.25c-.917 0-1.699.663-1.85 1.567L9.05 4.889c-.02.12-.115.26-.297.348a7.493 7.493 0 00-.986.57c-.166.115-.334.126-.45.083L6.3 5.508a1.875 1.875 0 00-2.282.819l-.922 1.597a1.875 1.875 0 00.432 2.385l.84.692c.095.078.17.229.154.43a7.598 7.598 0 000 1.139c.015.2-.059.352-.153.43l-.841.692a1.875 1.875 0 00-.432 2.385l.922 1.597a1.875 1.875 0 002.282.818l1.019-.382c.115-.043.283-.031.45.082.312.214.641.405.985.57.182.088.277.228.297.35l.178 1.071c.151.904.933 1.567 1.85 1.567h1.844c.916 0 1.699-.663 1.85-1.567l.178-1.072c.02-.12.114-.26.297-.349.344-.165.673-.356.985-.57.167-.114.335-.125.45-.082l1.02.382a1.875 1.875 0 002.28-.819l.923-1.597a1.875 1.875 0 00-.432-2.385l-.84-.692c-.095-.078-.17-.229-.154-.43a7.614 7.614 0 000-1.139c-.016-.2.059-.352.153-.43l.84-.692c.708-.582.891-1.59.433-2.385l-.922-1.597a1.875 1.875 0 00-2.282-.818l-1.02.382c-.114.043-.282.031-.449-.083a7.49 7.49 0 00-.985-.57c-.183-.087-.277-.227-.297-.348l-.179-1.072a1.875 1.875 0 00-1.85-1.567h-1.843zM12 15.75a3.75 3.75 0 100-7.5 3.75 3.75 0 000 7.5z"
                  clip-rule="evenodd"></path>
          </svg>
        </div>
        Settings
      </NuxtLink>
      <NuxtLink to="/tags" role="button"
                class="flex items-center w-full p-3 leading-tight transition-all rounded-lg outline-none text-start hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900">
        <div class="grid mr-4 place-items-center">
          <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
            <g id="SVGRepo_iconCarrier">
              <path
                  d="M8.5 3H11.5118C12.2455 3 12.6124 3 12.9577 3.08289C13.2638 3.15638 13.5564 3.27759 13.8249 3.44208C14.1276 3.6276 14.387 3.88703 14.9059 4.40589L20.5 10M7.5498 10.0498H7.5598M9.51178 6H8.3C6.61984 6 5.77976 6 5.13803 6.32698C4.57354 6.6146 4.1146 7.07354 3.82698 7.63803C3.5 8.27976 3.5 9.11984 3.5 10.8V12.0118C3.5 12.7455 3.5 13.1124 3.58289 13.4577C3.65638 13.7638 3.77759 14.0564 3.94208 14.3249C4.1276 14.6276 4.38703 14.887 4.90589 15.4059L8.10589 18.6059C9.29394 19.7939 9.88796 20.388 10.5729 20.6105C11.1755 20.8063 11.8245 20.8063 12.4271 20.6105C13.112 20.388 13.7061 19.7939 14.8941 18.6059L16.1059 17.3941C17.2939 16.2061 17.888 15.612 18.1105 14.9271C18.3063 14.3245 18.3063 13.6755 18.1105 13.0729C17.888 12.388 17.2939 11.7939 16.1059 10.6059L12.9059 7.40589C12.387 6.88703 12.1276 6.6276 11.8249 6.44208C11.5564 6.27759 11.2638 6.15638 10.9577 6.08289C10.6124 6 10.2455 6 9.51178 6ZM8.0498 10.0498C8.0498 10.3259 7.82595 10.5498 7.5498 10.5498C7.27366 10.5498 7.0498 10.3259 7.0498 10.0498C7.0498 9.77366 7.27366 9.5498 7.5498 9.5498C7.82595 9.5498 8.0498 9.77366 8.0498 10.0498Z"
                  stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
            </g>
          </svg>
        </div>
        Tags
      </NuxtLink>
      <div v-if="isAuthenticated" role="button"
           @click.prevent="formLogout"
           class="flex items-center w-full p-3 leading-tight transition-all rounded-lg outline-none text-start hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900">
        <div class="grid mr-4 place-items-center">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"
               class="w-5 h-5">
            <path fill-rule="evenodd"
                  d="M12 2.25a.75.75 0 01.75.75v9a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM6.166 5.106a.75.75 0 010 1.06 8.25 8.25 0 1011.668 0 .75.75 0 111.06-1.06c3.808 3.807 3.808 9.98 0 13.788-3.807 3.808-9.98 3.808-13.788 0-3.808-3.807-3.808-9.98 0-13.788a.75.75 0 011.06 0z"
                  clip-rule="evenodd"></path>
          </svg>
        </div>
        Log Out
      </div>
    </nav>

  </div>
</template>

<style scoped>
body {
  background-color: #fff;
  color: rgba(0, 0, 0, 0.8);
}

.dark-mode body {
  background-color: #091a28;
  color: #ebf4f1;
}

.sepia-mode body {
  background-color: #f1e7d0;
  color: #433422;
}
</style>