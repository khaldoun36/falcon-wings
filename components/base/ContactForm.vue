<template>
  <form @submit.prevent="submitForm" class="flex flex-col gap-4">
    <div class="flex flex-col gap-2">
      <Label for="name">Name</Label>
      <input type="text" name="name" v-model="form.name" />
    </div>
    <div class="flex flex-col gap-2">
      <Label for="email">Email</Label>
      <input type="email" name="email" v-model="form.email" />
    </div>
    <div class="flex flex-col gap-2">
      <Label for="school">School/Organization</Label>
      <input type="text" name="school" v-model="form.school" />
    </div>
    <div class="flex flex-col gap-2">
      <Label for="message">Message</Label>
      <textarea name="message" v-model="form.message"></textarea>
    </div>
    <button type="submit" class="button mt-4 min-w-full">Send Message</button>
  </form>
</template>

<script setup>
import { ref } from "vue";

const form = ref({
  access_key: "YOUR_ACCESS_KEY_HERE",
  subject: "New Submission from Web3Forms",
  name: "",
  email: "",
  message: "",
  school: "",
});

const result = ref("");
const status = ref("");

const submitForm = async () => {
  result.value = "Please wait...";
  try {
    const response = await $fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: form.value,
    });

    console.log(response); // You can remove this line if you don't need it

    result.value = response.message;

    if (response.status === 200) {
      status.value = "success";
    } else {
      console.log(response); // Log for debugging, can be removed
      status.value = "error";
    }
  } catch (error) {
    console.log(error); // Log for debugging, can be removed
    status.value = "error";
    result.value = "Something went wrong!";
  } finally {
    // Reset form after submission
    form.value.name = "";
    form.value.email = "";
    form.value.message = "";
    form.value.school = "";
    // Clear result and status after 5 seconds
    setTimeout(() => {
      result.value = "";
      status.value = "";
    }, 5000);
  }
};
</script>

<style scoped>
form label {
  font-size: theme("fontSize.sm");
  color: theme("colors.neutral.300/80%");
}

form input,
form textarea {
  border-radius: theme("borderRadius.lg");
  border: 1px solid theme("colors.white/10%");
  padding: theme("spacing.2");
  background-color: theme("colors.neutral.600/40%");
  color: theme("colors.neutral.100");
}

@media (width >= 768px) {
  form label {
    font-size: theme("fontSize.base");
  }
}
</style>
