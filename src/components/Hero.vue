<template>
  <main>
    <section class="flex flex-col h-screen pt-10 pb-20">
      <div class="grid grid-cols-12">
        <!-- // 1, 5 , 5, 1 - plan for  -->
        <div class="col-start-1 col-span-1 border border-blue-700">
          1 column
        </div>
        <div class="col-start-2 col-span-5 border border-blue-700">
          <headline />
          <job-search-form />
        </div>
        <div class="col-start-7 col-span-5 border border-blue-700">
          5 column
        </div>
        <div class="col-start-12 col-span-1 border border-blue-700">
          1 column
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import Headline from "@/components/Headline.vue";
import JobSearchForm from "@/components/JobSearchForm.vue";

export default {
  name: "Hero",
  components: { Headline, JobSearchForm },
  // override / specify action for lifecycle hook
  // beforeCreate() {
  //   console.log("Component about to be created");
  // },
  // created() {
  //   console.log("Component has been created");
  // },
  // beforeMount() {
  //   console.log("Component about to be mounted");
  // },
  // mounted() {
  //   console.log("Component has been mounted");
  // },
};
</script>
