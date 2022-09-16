<template>
  <section>
    <h1 class="font-bold tracking-tighter text-8xl mb-14">
      <span :class="[actionClasses]">{{ action }}</span>
      <br />
      for everyone
    </h1>
    <h2 class="text-3xl font-light">Find your next job at Eggman</h2>
  </section>
</template>

<script>
export default {
  name: "Headline",
  data() {
    return {
      action: "Build",
      interval: null,
    };
  },
  computed: {
    actionClasses() {
      return {
        // using dynamic object properties
        // so essentially you are defining the key of the js object keyvalue pair as the value produced by the statement inside the array
        // so - ignore the tolowercase - rather than the reference, we want the value it points to
        [this.action.toLowerCase()]: true,
      };
    },
  },
  created() {
    console.log("Hey m i've bene created", this.sample);
    this.changeTitle();
  },
  beforeUnmount() {
    clearInterval(this.interval);
  },
  methods: {
    changeTitle() {
      this.interval = setInterval(() => {
        const actions = ["Build", "Create", "Design", "Code"];
        const currentActionIndex = actions.indexOf(this.action);
        const nextActionIndex = (currentActionIndex + 1) % actions.length;
        const nextAction = actions[nextActionIndex];
        this.action = nextAction;
      }, 3000);
    },
  },
};
</script>

<style scoped>
.build {
  color: #1a73e8;
}

.create {
  color: #34a853;
}

.design {
  color: #f9ab00;
}

.code {
  color: #d93025;
}
</style>
