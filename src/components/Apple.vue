<template>
  <svg
    @click="$emit('userSelected', isCurrent)"
    enable-background="new 0 0 24 24"
    height="70"
    viewBox="0 0 24 24"
    width="70"
    class="m-2 cursor-pointer"
  >
    <path
      d="m11.466 22.776c.141.144.333.224.534.224s.393-.08.534-.224l9.594-9.721c4.001-4.053 1.158-11.055-4.532-11.055-3.417 0-4.985 2.511-5.596 2.98-.614-.471-2.172-2.98-5.596-2.98-5.672 0-8.55 6.984-4.531 11.055z"
      :fill="isCurrent ? '#f0f8ff' : '#f44336'"
    />
  </svg>
</template>

<script>
export default {
  props: {
    isCurrent: {
      type: Boolean,
      required: true
    }
  }
};
</script>