<template>
  <form @submit.prevent="submitForm" class="flex flex-col gap-4">
    <div class="flex flex-col gap-2">
      <label for="name">Name <span class="text-red-500">*</span></label>
      <input type="text" name="name" id="name" v-model="form.name" required />
    </div>
    <div class="flex flex-col gap-2">
      <label for="email">Email <span class="text-red-500">*</span></label>
      <input
        type="email"
        name="email"
        id="email"
        v-model="form.email"
        required
      />
    </div>
    <div class="flex flex-col gap-2">
      <label for="phone">Phone Number</label>
      <input type="tel" name="phone" id="phone" v-model="form.phone" />
    </div>
    <div class="flex flex-col gap-2">
      <label for="school"
        >School/Organization <span class="text-red-500">*</span></label
      >
      <input
        type="text"
        name="school"
        id="school"
        v-model="form.school"
        required
      />
    </div>
    <div class="flex flex-col gap-2">
      <label for="message">Message <span class="text-red-500">*</span></label>
      <textarea
        name="message"
        id="message"
        :placeholder="
          locale === 'en'
            ? 'What make the Falcon\'s Wings program a good fit for my school?'
            : 'لماذا يعتبر برنامج فالكونز وينجز مناسباً لمدرستنا؟'
        "
        v-model="form.message"
        required
      ></textarea>
    </div>
    <Button type="submit" variant="primary" class="mt-8">{{
      locale === "en" ? "Send Message" : "إرسال الرسالة"
    }}</Button>
    <p
      v-if="result"
      :class="{
        'text-green-500': status === 'success',
        'text-red-500': status === 'error',
      }"
    >
      {{ result }}
    </p>
  </form>
</template>

<script setup>
import Button from "@/components/base/Button.vue";
const form = ref({
  access_key: "YOUR_ACCESS_KEY_HERE", // Security issue: API key should be in env variables
  subject: "New Submission from Web3Forms",
  name: "",
  email: "",
  phone: "",
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

    result.value = response.message;
    status.value = response.success ? "success" : "error";

    if (response.success) {
      form.value = {
        access_key: form.value.access_key,
        subject: form.value.subject,
        name: "",
        email: "",
        phone: "",
        message: "",
        school: "",
      };
    }
  } catch (error) {
    console.error(error);
    status.value = "error";
    result.value = "Something went wrong!";
  } finally {
    setTimeout(() => {
      result.value = "";
      status.value = "";
    }, 5000);
  }
};

const { locale } = useI18n();
</script>

<style scoped>
form label {
  font-size: theme("fontSize.sm");
  color: theme("colors.neutral.300/80%");
}

form input,
form textarea,
form select {
  border-radius: theme("borderRadius.lg");
  border: 1px solid theme("colors.white/10%");
  padding: theme("spacing.2");
  background-color: theme("colors.neutral.600/40%");
  color: theme("colors.neutral.100");
}

form input {
  padding-inline: theme("spacing.4");
}

@media (width >= 768px) {
  form label {
    font-size: theme("fontSize.base");
  }
}
</style>
