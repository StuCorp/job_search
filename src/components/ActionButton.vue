<template>
  <button :class="buttonClass" @click="handleClick">
    {{ text }}
  </button>
</template>

<script>
export default {
  name: "ActionButton",
  // props convert from camelcase - e.g. is-primary
  props: {
    text: { type: String, required: true },
    type: {
      type: String,
      default: "primary",
      // validator returns bool and thus checks values input
      validator(value) {
        return ["primary", "secondary"].includes(value);
      },
    },
  },
  // data is for independent data
  // data() {
  //   return {
  //     // set data based on isPrimary prop
  //     primary: this.isPrimary,
  //   };
  // },
  // computed for dependent data
  computed: {
    buttonClass() {
      return {
        // dynamic property reference: it's going to set the key as the string and the value as true
        // this will lead to the computed prop returning the string -e.g. primary or secondary etc
        [this.type]: true,
        // return 'primary' or 'secondary' based on the data primary value
        // primary: this.type === "primary",
        // secondary: this.type === "secondary",
      };
    },
  },
};
</script>

<style scoped>
button {
  @apply px-5 py-3 font-medium rounded;
}

.primary {
  @apply text-white  bg-brand-blue-1 hover:shadow-blue;
}

.secondary {
  @apply text-brand-blue-1 bg-transparent hover:bg-brand-blue-2 hover:text-white;
}
</style>
