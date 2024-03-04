<template>
  <div>
    <h1>{{ message }}</h1>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  data() {
    return {
      message: "",
    };
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    async fetchData() {
      try {
        const response = await fetch(
          "https://2projonerepo-backend.vercel.app/"
          // OR "http://localhost:3000/"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok.");
        }
        const data = await response.text();
        this.message = data;
      } catch (error) {
        console.error("There was a problem fetching the data:", error);
      }
    },
  },
};
</script>

<style scoped>
/* Your styles here */
</style>
