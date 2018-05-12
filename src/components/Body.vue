<template>
  <main role="main">
    <div class="carousel"></div>
    <div class="container marketing">
      <div class="row">
        <div v-for="item in cards" v-bind:key="item.index" item class="col-lg-4">
          <h2>{{ item.header }}</h2>
          <p>{{ item.content }}</p>
          <p><a class="btn btn-secondary" :href="item.button.link" role="button">{{ item.button.name }}</a></p>
        </div>
      </div>
      <hr>
    </div>
    <footer class="container">
      <p class="float-right"><a href="#">Back to top</a></p>
      <p>&copy; 2017-2018 Company, Inc. &middot; <a href="#">Privacy</a> &middot; <a href="#">Terms</a></p>
    </footer>
  </main>
</template>

<script>
export default {
  name: 'Body',
  data () {
    return {
      cards: [
        {
          header: 'Heading 1', 
          content: 'Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna.',
          button: { link: '#', name: 'View details' }
        },
        {
          header: 'Heading 2', 
          content: 'Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh.',
          button: { link: '#', name: 'View details' }
        },
        {
          header: 'Heading 3', 
          content: 'Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.',
          button: { link: '#', name: 'View details' }
        }
      ]
    }
  }
}
</script>

<style>
.container {
  padding: 2rem;
}

.carousel {
  width: 100%;
  height: 32.0rem;
  background-color: #777;
}

.marketing .col-lg-4 {
  margin-bottom: 1.5rem;
  text-align: center;
}
.marketing h2 {
  font-weight: 400;
}
.marketing .col-lg-4 p {
  margin-right: .75rem;
  margin-left: .75rem;
}

@media (min-width: 40em) {
  .carousel-caption p {
    margin-bottom: 1.25rem;
    font-size: 1.25rem;
    line-height: 1.4;
  }

  .featurette-heading {
    font-size: 50px;
  }
}

@media (min-width: 62em) {
  .featurette-heading {
    margin-top: 7rem;
  }
}
</style>