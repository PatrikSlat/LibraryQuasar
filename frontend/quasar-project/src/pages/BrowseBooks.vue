<template>
  <div class="browse-book-page">
    <h1>Browse Books</h1>
    <div v-if="loading">Loading books...</div>
    <div v-else-if="error" class="error">{{ error }}</div>
    <div v-else>
      <div v-for="book in books" :key="book.id" class="book-card">
        <h2>{{ book.title }}</h2>
        <h3>By {{ book.author }}</h3>
        <p>{{ book.description }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      books: [],
      loading: true,
      error: null,
    };
  },
  methods: {
    async fetchBooks() {
      try {
        const response = await fetch("http://localhost:3000/api/books/all");
        if (!response.ok) {
          throw new Error("Failed to fetch books. Please try again later.");
        }
        const data = await response.json();
        this.books = data;
      } catch (err) {
        this.error = err.message;
      } finally {
        this.loading = false;
      }
    },
  },
  created() {
    this.fetchBooks();
  },
};
</script>

<style scoped>
.browse-book-page {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}
.book-card {
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 15px;
  margin-bottom: 15px;
}
.error {
  color: red;
  font-weight: bold;
}
</style>
