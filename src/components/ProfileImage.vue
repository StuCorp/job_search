<template>
  <img :src="imageLink" class="w-8 h-8 object-contain rounded-3xl" />
</template>

<script>
export default {
  name: "ProfileImage",
  data() {
    return {
      imageLink:
        "https://pm1.narvii.com/6213/598fb5e9254000ea1653e0fa8057a65cffbd5c54_128.jpg",
    };
  },
};
</script>
