<template>
  <div
    class="w-[336px] max-w-sm bg-white border border-gray-200 rounded-[10px] shadow px-[24px] pt-[24px] pb-[16PX]"
  >
    <div class="flex flex-col items-center pb-10 pt-11">
      <img
        class="w-[170px] h-[170px] mb-3 rounded-full shadow-lg"
        src="../assets/imagen/talentpitch.png"
        alt="Bonnie image"
      />
      <h5 class="mb-2 text-xl font-bold text-primary1 h-[30px] w-[159px]">
        A.C Telecom
      </h5>
      <span class="mb-2 text-sm text-gray-400 dark:text-gray-400 h-[18px]"
        >@ac-telecom</span
      >
      <span class="mb-2 text-[13px] text-primary3 dark:text-gray-400"
        >Startup - tecnologia</span
      >
      <div class="mb-2 flex items-center">
        <span class="w-[7px] h-[7px] bg-textactive rounded-full mr-2"></span>
        <span class="text-sm text-textactive dark:text-gray-400">
          Empresa activa</span
        >
      </div>

      <div class="mb-2 flex">
        <svg
          class="w-[21px] h-[21px] text-gray-400 dark:text-white"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 17 21"
        >
          <g
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1.4"
          >
            <path d="M8 12a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
            <path
              d="M13.8 12.938h-.01a7 7 0 1 0-11.465.144h-.016l.141.17c.1.128.2.252.3.372L8 20l5.13-6.248c.193-.209.373-.429.54-.66l.13-.154Z"
            />
          </g>
        </svg>
        <span class="text-sm text-gray-400 dark:text-gray-400">
          Florida - Colombia
        </span>
      </div>
      <div class="flex mb-2">
        <div class="flex items-center space-x-1">
          <div v-for="i in 5" :key="i" :class="{ 'mr-1': i < 5 }">
            <svg
              class="block h-4 w-4 text-yellow-300"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path
                d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"
              />
            </svg>
          </div>
        </div>

        <span class="text-sm text-gray-400 dark:text-gray-400">
          (10 reviwers)
        </span>
      </div>

      <div class="flex flex-wrap items-center mb-2">
        <a href="" class="mr-2"
          ><svg
            class="w-[16px] h-[16px] text-gray-800 dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 8 19"
          >
            <path
              fill-rule="evenodd"
              d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
              clip-rule="evenodd"
            />
          </svg>
        </a>

        <a href="" class="mr-2"
          ><svg
            class="w-[16px] h-[16px] text-gray-800 dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              fill="currentColor"
              d="M12.186 8.672 18.743.947h-2.927l-5.005 5.9-4.44-5.9H0l7.434 9.876-6.986 8.23h2.927l5.434-6.4 4.82 6.4H20L12.186 8.672Zm-2.267 2.671L8.544 9.515 3.2 2.42h2.2l4.312 5.719 1.375 1.828 5.731 7.613h-2.2l-4.699-6.237Z"
            />
          </svg>
        </a>

        <svg
          class="w-[16px] h-[16px] text-gray-800 dark:text-white"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 15 15"
        >
          <path
            fill-rule="evenodd"
            d="M7.979 5v1.586a3.5 3.5 0 0 1 3.082-1.574C14.3 5.012 15 7.03 15 9.655V15h-3v-4.738c0-1.13-.229-2.584-1.995-2.584-1.713 0-2.005 1.23-2.005 2.5V15H5.009V5h2.97ZM3 2.487a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
            clip-rule="evenodd"
          />
          <path d="M3 5.012H0V15h3V5.012Z" />
        </svg>
      </div>
      <div class="flex">
        <svg
          class="w-[16px] h-[16px] text-gray-800 dark:text-white mr-2"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 19 19"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1.4"
            d="M11.013 7.962a3.519 3.519 0 0 0-4.975 0l-3.554 3.554a3.518 3.518 0 0 0 4.975 4.975l.461-.46m-.461-4.515a3.518 3.518 0 0 0 4.975 0l3.553-3.554a3.518 3.518 0 0 0-4.974-4.975L10.3 3.7"
          />
        </svg>
        <a href="" class="text-sm text-gray-400">www.asaslsallsa.com</a>
      </div>
      <div class="mb-4 mt-4">
        <video
          class="w-[288px] h-[306px] border border-gray-200 rounded-lg dark:border-gray-700"
          controls
        >
          <source src="/docs/videos/flowbite.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div class="w-[288px] h-[306px] border border-gray-200 rounded-lg">
        <img src="../assets/imagen/qr.png" alt="" />
      </div>
      <div class="w-full mt-5">
        <button
          type="button"
          class="px-3 py-2 text-white h-[40px] w-full bg-primary2 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          <svg
            class="w-[17px] h-[17px] text-white mr-4"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 18 16"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1.248 15C.22 11.77 2.275 4.232 9.466 4.232V2.079a1.025 1.025 0 0 1 1.644-.862l5.479 4.307a1.108 1.108 0 0 1 0 1.723l-5.48 4.307a1.026 1.026 0 0 1-1.643-.861V8.539C2.275 9.616 1.248 15 1.248 15Z"
            />
          </svg>
          Compartir perfil
        </button>

        <div class="flex mt-4">
          <span
            class="inline-flex items-center px-3 text-sm text-gray-900 bg-primary2 border border-r-0 border-gray-300 rounded-l-md bg-primary2"
          >
            <svg
              class="w-[17px] h-[17px] text-gray-800 text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 16 18"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M8 1v11m0 0 4-4m-4 4L4 8m11 4v3a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-3"
              />
            </svg>
          </span>
          <input
            type="text"
            id="website-admin"
            class="text-xs rounded-none rounded-r-lg bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Bonnie Green"
          />
        </div>
      </div>

      <div class="w-full pt-4 bg-white">
        <div class="flow-root">
          <ul role="list" class="divide-y divide-gray-200 dark:divide-gray-700">
            <li class="mb-2">
              <div class="flex space-x-4 items-center">
                <div class="">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.5 9C5.59375 9 4.78125 8.53125 4.3125 7.75C3.875 7 3.875 6.03125 4.3125 5.25C4.78125 4.5 5.59375 4 6.5 4C7.375 4 8.1875 4.5 8.65625 5.25C9.09375 6.03125 9.09375 7 8.65625 7.75C8.1875 8.53125 7.375 9 6.5 9ZM18 9C17.0938 9 16.2812 8.53125 15.8125 7.75C15.375 7 15.375 6.03125 15.8125 5.25C16.2812 4.5 17.0938 4 18 4C18.875 4 19.6875 4.5 20.1562 5.25C20.5938 6.03125 20.5938 7 20.1562 7.75C19.6875 8.53125 18.875 9 18 9ZM2 13.3438C2 11.5 3.46875 10 5.3125 10H6.65625C7.15625 10 7.625 10.125 8.0625 10.3125C8 10.5312 8 10.7812 8 11C8 12.2188 8.5 13.2812 9.34375 14H9.3125H2.65625C2.28125 14 2 13.7188 2 13.3438ZM14.6562 14H14.625C15.4688 13.2812 16 12.2188 16 11C16 10.7812 15.9688 10.5312 15.9375 10.3125C16.3438 10.125 16.8125 10 17.3125 10H18.6562C20.5 10 22 11.5 22 13.3438C22 13.7188 21.6875 14 21.3125 14H14.6562ZM12 9.5C11.4375 9.5 10.9688 9.8125 10.6875 10.25C10.4062 10.7188 10.4062 11.3125 10.6875 11.75C10.9688 12.2188 11.4375 12.5 12 12.5C12.5312 12.5 13 12.2188 13.2812 11.75C13.5625 11.3125 13.5625 10.7188 13.2812 10.25C13 9.8125 12.5312 9.5 12 9.5ZM12 14C10.9062 14 9.9375 13.4375 9.375 12.5C8.84375 11.5938 8.84375 10.4375 9.375 9.5C9.9375 8.59375 10.9062 8 12 8C13.0625 8 14.0312 8.59375 14.5938 9.5C15.125 10.4375 15.125 11.5938 14.5938 12.5C14.0312 13.4375 13.0625 14 12 14ZM10.1562 16.5C8.90625 16.5 7.875 17.375 7.5625 18.5H16.4062C16.0938 17.375 15.0625 16.5 13.8125 16.5H10.1562ZM10.1562 15H13.8125C16.125 15 18 16.875 18 19.1875C18 19.6562 17.625 20 17.1562 20H6.8125C6.34375 20 6 19.625 6 19.1875C6 16.875 7.84375 15 10.1562 15Z"
                      fill="#666666"
                    />
                  </svg>
                </div>
                <div class="flex-1 min-w-0">
                  <p class="text-[10px] text-gray-500 text-justify">Talentos</p>
                </div>
                <div class="inline-flex items-center text-xs">20</div>
              </div>
            </li>
            <li class="mb-2">
              <div class="flex space-x-4 items-center">
                <div class="">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 6.5C9.9375 6.5 8.28125 7.4375 7 8.625C5.78125 9.75 4.96875 11.0625 4.53125 12C4.96875 12.9375 5.78125 14.2812 7 15.4062C8.28125 16.5938 9.9375 17.5 12 17.5C14.0312 17.5 15.6875 16.5938 16.9688 15.4062C18.1875 14.2812 19.0312 12.9375 19.4375 12C19.0312 11.0625 18.1875 9.75 17 8.625C15.6875 7.4375 14.0312 6.5 12 6.5ZM5.96875 7.53125C7.4375 6.15625 9.46875 5 12 5C14.5 5 16.5312 6.15625 18 7.53125C19.4688 8.90625 20.4375 10.5 20.9062 11.625C21 11.875 21 12.1562 20.9062 12.4062C20.4375 13.5 19.4688 15.125 18 16.5C16.5312 17.875 14.5 19 12 19C9.46875 19 7.4375 17.875 5.96875 16.5C4.5 15.125 3.53125 13.5 3.0625 12.4062C2.96875 12.1562 2.96875 11.875 3.0625 11.625C3.53125 10.5 4.5 8.875 5.96875 7.53125ZM12 14.5C13.375 14.5 14.5 13.4062 14.5 12C14.5 10.625 13.375 9.5 12 9.5C11.9688 9.5 11.9375 9.5 11.9375 9.5C11.9688 9.6875 12 9.84375 12 10C12 11.125 11.0938 12 10 12C9.8125 12 9.65625 12 9.5 11.9375C9.5 11.9688 9.5 12 9.5 12C9.5 13.4062 10.5938 14.5 12 14.5ZM12 8C13.4062 8 14.7188 8.78125 15.4375 10C16.1562 11.25 16.1562 12.7812 15.4375 14C14.7188 15.25 13.4062 16 12 16C10.5625 16 9.25 15.25 8.53125 14C7.8125 12.7812 7.8125 11.25 8.53125 10C9.25 8.78125 10.5625 8 12 8Z"
                      fill="#666666"
                    />
                  </svg>
                </div>
                <div class="flex-1 min-w-0">
                  <p class="text-[10px] text-gray-500 text-justify">
                    Vistas del perfil
                  </p>
                </div>
                <div class="inline-flex items-center text-xs">20</div>
              </div>
            </li>
            <li class="mb-2">
              <div class="flex space-x-4 items-center">
                <div class="">
                  <svg
                    width="24"
                    height="25"
                    viewBox="0 0 24 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5 8C4.71875 8 4.5 8.25 4.5 8.5V16.5C4.5 16.7812 4.71875 17 5 17H13C13.25 17 13.5 16.7812 13.5 16.5V8.5C13.5 8.25 13.25 8 13 8H5ZM3 8.5C3 7.40625 3.875 6.5 5 6.5H13C14.0938 6.5 15 7.40625 15 8.5V9.53125V15.4688V16.5C15 17.625 14.0938 18.5 13 18.5H5C3.875 18.5 3 17.625 3 16.5V8.5ZM19.5 15.875V9.15625L16 10.7188V9.09375L19.25 7.625C19.4062 7.5625 19.5625 7.5 19.75 7.5C20.4375 7.5 21 8.0625 21 8.75V16.2812C21 16.9688 20.4375 17.5 19.75 17.5C19.5625 17.5 19.4062 17.4688 19.25 17.4062L16 15.9375V14.2812L19.5 15.875Z"
                      fill="#666666"
                    />
                  </svg>
                </div>
                <div class="flex-1 min-w-0">
                  <p class="text-[10px] text-gray-500 text-justify">
                    Pitches recibidos
                  </p>
                </div>
                <div class="inline-flex items-center text-xs">20</div>
              </div>
            </li>
            <li class="mb-2">
              <div class="flex space-x-4 items-center">
                <div class="">
                  <svg
                    width="16"
                    height="17"
                    viewBox="0 0 16 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14.75 0.71875L15 1.5L15.7812 1.75C15.9062 1.78125 16 1.875 16 2C16 2.125 15.9062 2.25 15.7812 2.28125L15 2.5L14.75 3.3125C14.7188 3.4375 14.625 3.5 14.5 3.5C14.375 3.5 14.25 3.4375 14.2188 3.3125L14 2.5L13.1875 2.28125C13.0625 2.25 13 2.125 13 2C13 1.875 13.0625 1.78125 13.1875 1.75L14 1.5L14.2188 0.71875C14.25 0.59375 14.3438 0.5 14.5 0.5C14.625 0.5 14.7188 0.59375 14.75 0.71875ZM1.75 2.71875L2 3.5L2.78125 3.75C2.90625 3.78125 3 3.875 3 4C3 4.125 2.90625 4.25 2.78125 4.28125L2 4.5L1.75 5.3125C1.71875 5.4375 1.625 5.5 1.5 5.5C1.375 5.5 1.25 5.4375 1.21875 5.3125L1 4.5L0.1875 4.28125C0.0625 4.25 0 4.15625 0 4C0 3.875 0.0625 3.78125 0.1875 3.75L1 3.5L1.21875 2.71875C1.25 2.59375 1.34375 2.5 1.5 2.5C1.625 2.5 1.71875 2.59375 1.75 2.71875ZM3 15.75C3 15.3438 3.3125 15 3.75 15H12.25C12.6562 15 13 15.3438 13 15.75C13 16.1875 12.6562 16.5 12.25 16.5H3.75C3.3125 16.5 3 16.1875 3 15.75ZM6.5 2C6.5 1.46875 6.78125 1 7.25 0.71875C7.6875 0.4375 8.28125 0.4375 8.75 0.71875C9.1875 1 9.5 1.46875 9.5 2C9.5 2.5625 9.1875 3.03125 8.75 3.3125C8.28125 3.59375 7.6875 3.59375 7.25 3.3125C6.78125 3.03125 6.5 2.5625 6.5 2ZM7.5 10.5V14H6V7.03125L4.34375 9.21875C4.09375 9.5625 3.625 9.625 3.28125 9.375C2.96875 9.125 2.875 8.625 3.125 8.3125L5.1875 5.59375C5.71875 4.90625 6.53125 4.5 7.375 4.5H8.59375C9.4375 4.5 10.25 4.90625 10.7812 5.59375L12.8438 8.3125C13.0938 8.65625 13.0312 9.125 12.6875 9.375C12.375 9.625 11.875 9.53125 11.625 9.21875L10 7.03125V14H8.5V10.5H7.5ZM7.5 9H8.5V6H7.5V9Z"
                      fill="#666666"
                    />
                  </svg>
                </div>
                <div class="flex-1 min-w-0">
                  <p class="text-[10px] text-gray-500 text-justify">
                    Exibiciones
                  </p>
                </div>
                <div class="inline-flex items-center text-xs">20</div>
              </div>
            </li>
            <li class="mb-2">
              <div class="flex space-x-4 items-center">
                <div class="">
                  <svg
                    width="12"
                    height="17"
                    viewBox="0 0 12 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.5 15H10C10.25 15 10.5 14.7812 10.5 14.5V5.5H8C7.4375 5.5 7 5.0625 7 4.5V2H2C1.71875 2 1.5 2.25 1.5 2.5V14.5C1.5 14.7812 1.71875 15 2 15H2.5C2.5 13.625 3.59375 12.5 5 12.5H7C8.375 12.5 9.5 13.625 9.5 15ZM2 0.5H7.15625C7.6875 0.5 8.1875 0.71875 8.5625 1.09375L11.4062 3.9375C11.7812 4.3125 12 4.8125 12 5.34375V14.5C12 15.625 11.0938 16.5 10 16.5H2C0.875 16.5 0 15.625 0 14.5V2.5C0 1.40625 0.875 0.5 2 0.5ZM8 9.5C8 10.2188 7.59375 10.875 7 11.25C6.375 11.5938 5.59375 11.5938 5 11.25C4.375 10.875 4 10.2188 4 9.5C4 8.8125 4.375 8.15625 5 7.78125C5.59375 7.4375 6.375 7.4375 7 7.78125C7.59375 8.15625 8 8.8125 8 9.5Z"
                      fill="#666666"
                    />
                  </svg>
                </div>
                <div class="flex-1 min-w-0">
                  <p class="text-[10px] text-gray-500 text-justify">Vacantes</p>
                </div>
                <div class="inline-flex items-center text-xs">20</div>
              </div>
            </li>
            <li class="mb-3">
              <div class="flex space-x-4 items-center">
                <div class="">
                  <svg
                    width="24"
                    height="25"
                    viewBox="0 0 24 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10 6C9.71875 6 9.5 6.25 9.5 6.5V13.5C9.5 13.7812 9.6875 14 9.96875 14L12.125 11.0625C12.2812 10.875 12.5 10.75 12.75 10.75C12.9688 10.75 13.1875 10.875 13.3438 11.0625L13.875 11.7812L15.625 9.09375C15.75 8.875 16 8.75 16.25 8.75C16.5 8.75 16.7188 8.875 16.875 9.09375L20.0625 14C20.3125 13.9688 20.5 13.75 20.5 13.5V6.5C20.5 6.25 20.25 6 20 6H10ZM8 6.5C8 5.40625 8.875 4.5 10 4.5H20C21.0938 4.5 22 5.40625 22 6.5V13.5C22 14.625 21.0938 15.5 20 15.5H10C8.875 15.5 8 14.625 8 13.5V6.5ZM6.25 8.5H7V10V12.75V16.25V16.5V19H13V16.5H14.5V19H16C16.25 19 16.5 18.7812 16.5 18.5V16.5H18V18.5C18 19.625 17.0938 20.5 16 20.5H14.5H13.75H13H7H6.25H5.5H4C2.875 20.5 2 19.625 2 18.5V10.5C2 9.40625 2.875 8.5 4 8.5H5.5H6.25ZM5.5 10H4C3.71875 10 3.5 10.25 3.5 10.5V12H5.5V10ZM5.5 19V17H3.5V18.5C3.5 18.7812 3.71875 19 4 19H5.5ZM3.5 15.5H5.5V13.5H3.5V15.5ZM11.5 7C12.0312 7 12.5 7.46875 12.5 8C12.5 8.5625 12.0312 9 11.5 9C10.9375 9 10.5 8.5625 10.5 8C10.5 7.46875 10.9375 7 11.5 7Z"
                      fill="#666666"
                    />
                  </svg>
                </div>
                <div class="flex-1 min-w-0">
                  <p class="text-[10px] text-gray-500 text-justify">
                    Contenidos
                  </p>
                </div>
                <div class="inline-flex items-center text-xs">20</div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
  
  <script>
export default {
  name: "CardData",
  props: {},
};
</script>