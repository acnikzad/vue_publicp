<template>
  <div class="home">
    <GoogleMap :bathroomReviews="bathroomReviews"/>

    <!-- <div class="reviews-index">
      <div v-for="review in reviews">
        <p> Bathroom Location: {{review.bathroom.label}}</p>
        <p> Comment: {{review.comment}}</p>
        <p> Commenter: "{{review.user.first_name}} {{review.user.last_name}}"</p>
      </div>
    </div> -->
    <div class="reviews-new">
      <form v-on:submit.prevent="makeReview()">
        <p>Bathroom Location: <input type="text" v-model="name"></p>
        <p>Comment: <input type="text" v-model="description"></p>
        <p>Would you return? <input type="text" v-model="price"></p>
        <p>Rating out of 5 stars: <input type="text" v-model="price"></p>
        <button>Make a new product</button>
      </form>
    </div>


  </div>
</template>

<script>
// @ is an alias to /src
// import * as VueGoogleMaps from "vue2-google-maps";
import Map from '../components/GoogleMap.vue';
import axios from "axios";

export default {
  components: {
    Map,
  },
  data: function() {
    return {
      reviews: [],
      users: [],
      bathrooms:[]
  };
},

  created: function() {
    axios.get(`/api/users`, {
      params: {},
      headers: {
        'Content-Type': 'application/json'
     }     
    }).then(response => {
      this.users = response.data;
      console.log(response.data);
    });

    axios.get(`/api/reviews`, {
      params: {},
      headers: {
        'Content-Type': 'application/json'
     }     
    }).then(response => {
      this.reviews = response.data;
      console.log(response.data);
    });

    axios.get(`/api/bathrooms`, {
      params: {},
      headers: {
        'Content-Type': 'application/json'
     }     
    }).then(response => {
      this.bathrooms = response.data;
      console.log(response.data);
    });
    
  },
   methods: {
      showReviews: function() {
        console.log(location.id)
      }

    }
};
</script>
