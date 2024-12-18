<template>
  <div id="app">
    <header class="header">
      <nav class="navbar">
        <div class="logo">MyBrand</div>
        <ul class="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>

    <main>
      <section class="hero">
        <h1>Welcome to MyBrand</h1>
        <p>Your success starts here.</p>
        <button @click="scrollToSection('about')">Learn More</button>
      </section>

      <section id="about" class="about">
        <h2>About Us</h2>
        <p>We are dedicated to helping you achieve your goals with our cutting-edge solutions.</p>
      </section>

      <section id="services" class="services">
        <h2>Our Services</h2>
        <div class="service-cards">
          <div class="card" v-for="service in services" :key="service.id">
            <h3>{{ service.title }}</h3>
            <p>{{ service.description }}</p>
          </div>
        </div>
      </section>

      <section id="contact" class="contact">
        <h2>Contact Us</h2>
        <form @submit.prevent="handleSubmit">
          <input type="text" v-model="form.name" placeholder="Your Name" required />
          <input type="email" v-model="form.email" placeholder="Your Email" required />
          <textarea v-model="form.message" placeholder="Your Message" required></textarea>
          <button type="submit">Send</button>
        </form>
      </section>
    </main>

    <footer class="footer">
      <p>&copy; 2024 MyBrand. All rights reserved.</p>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      services: [
        { id: 1, title: 'Web Development', description: 'Build responsive and robust websites.' },
        { id: 2, title: 'Digital Marketing', description: 'Grow your brand with data-driven strategies.' },
        { id: 3, title: 'Consulting', description: 'Expert advice to solve your business challenges.' }
      ],
      form: {
        name: '',
        email: '',
        message: ''
      }
    };
  },
  methods: {
    scrollToSection(sectionId) {
      const section = document.getElementById(sectionId);
      section.scrollIntoView({ behavior: 'smooth' });
    },
    handleSubmit() {
      alert(`Thank you, ${this.form.name}! We will get back to you soon.`);
      this.form.name = '';
      this.form.email = '';
      this.form.message = '';
    }
  }
};
</script>

<style scoped>
body {
  margin: 0;
  font-family: Arial, sans-serif;
  line-height: 1.6;
}

.header {
  background: #333;
  color: #fff;
  padding: 1rem 0;
}

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  margin: 0 auto;
}

.logo {
  font-size: 1.5rem;
  font-weight: bold;
}

.nav-links {
  list-style: none;
  display: flex;
  gap: 1rem;
}

.nav-links a {
  color: #fff;
  text-decoration: none;
}

.hero {
  background: url('https://via.placeholder.com/1920x1080') no-repeat center center/cover;
  color: #fff;
  text-align: center;
  padding: 5rem 1rem;
}

.hero h1 {
  font-size: 3rem;
}

.about, .services, .contact {
  padding: 2rem 1rem;
  text-align: center;
}

.service-cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
}

.card {
  background: #f4f4f4;
  padding: 1rem;
  border: 1px solid #ddd;
  border-radius: 5px;
  width: 300px;
}

.footer {
  background: #333;
  color: #fff;
  text-align: center;
  padding: 1rem;
}
</style>
