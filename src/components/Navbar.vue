<template>
  <div>
    <!-- Navbar -->
    <nav class="navbar navbar-expand-lg navbar-light bg-body-tertiary">
      <!-- Container wrapper -->
      <div class="container-fluid">
        <!-- Toggle button -->
        <button
          data-mdb-collapse-init
          class="navbar-toggler"
          type="button"
          data-mdb-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i class="fas fa-bars"></i>
        </button>

        <!-- Collapsible wrapper -->
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <!-- Navbar brand -->
          <div class="navbar-brand mb-0 mt-2" href="#">
            <p :class="['logo']"><strong>SAYURMAYUR</strong></p>
          </div>
          <!-- Left links -->
          <ul class="navbar-nav me-auto mb-2 mt-0 mb-lg-0">
            <li class="nav-item">
            </li>
          </ul>
          <!-- Left links -->
        </div>
        <!-- Collapsible wrapper -->

        <!-- Right elements -->
        <div class="d-flex align-items-center">
        </div>
        <!-- Right elements -->
      </div>
      <!-- Container wrapper -->
    </nav>
    <!-- Navbar -->
  </div>
</template>

<script>
export default {
  name: "Navbar",
};
</script>

<style scoped>
.logo{
    color: rgb(0, 148, 35);
}
</style>
