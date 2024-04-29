<template>
  <div>
    <div id="carouselExampleIndicators" class="carousel slide">
      <div class="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="0"
          class="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="https://img.freepik.com/free-photo/healthy-vegetables-wooden-table_1150-38014.jpg?t=st=1714399569~exp=1714403169~hmac=e6672db47c54a45844da8dd13cbd1ad40ddf8011af6f7b47556c340ee239fc22&w=740" class="d-block w-100"  height="600px" alt="..." />
        </div>
        <div class="carousel-item">
          <img src="https://img.freepik.com/free-photo/healthy-vegetables-wooden-table_1150-38006.jpg?t=st=1714399618~exp=1714403218~hmac=8e1d5e0e46f61410eb8bf91ddbd54630cf2f044ace693ccf76bf149068d6b518&w=740" class="d-block w-100"  height="600px"  alt="..." />
        </div>
        <div class="carousel-item">
          <img src="https://img.freepik.com/free-photo/overhead-shot-different-fresh-vegetables-put-together-black-background_181624-26067.jpg?t=st=1714399653~exp=1714403253~hmac=1e5ba47a85cdf04c086eeaf79e36206e95293fc812561ab6354156c042584f1e&w=740" class="d-block w-100" height="600px"  alt="..." />
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Carousel',
};
</script>

<style scoped>

</style>
