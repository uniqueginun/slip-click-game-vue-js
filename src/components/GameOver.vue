<template>
  <div
    class="mt-6 flex flex-col w-11/12 md:w-1/2 py-6 rounded shadow justify-center items-center bg-gray-200"
  >
    <h2 class="font-bold mt-2 mb-6 text-gray-700 text-2xl">Game Over</h2>
    <div class="bg-gray-500 mx-4 p-4 rounded shadow flex flex-row w-11/12 justify-around">
      <button
        type="button"
        class="bg-purple-600 text-white p-2 rounded leading-none flex items-center"
      >
        Wrong Clicks
        <span
          class="bg-white p-1 rounded text-blue-600 text-xs ml-2"
        >{{ falseAttempts }}</span>
      </button>
      <button
        type="button"
        class="bg-orange-600 text-white p-2 rounded leading-none flex items-center"
      >
        Time
        <span class="bg-white p-1 rounded text-blue-600 text-xs ml-2">{{ timing }}</span>
      </button>
    </div>
    <div class="flex flex-col pt-8">
      <button
        @click="$emit('startOver')"
        type="button"
        class="bg-blue-900 text-white p-4 rounded leading-none text-center hover:bg-transparent hover:text-gray-800 hover:font-bold hover:underline"
      >Start Over</button>
    </div>
  </div>
</template>

<script>
export default {
  props: ["falseAttempts", "timing"]
};
</script>