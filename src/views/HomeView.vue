<template>
  <div class="home">
    <!-- <div class="users-index">
      <div v-for="user in users">
        <p> First Name: {{user.first_name}}</p>
        <p> Last Name: {{user.last_name}}</p>
      </div>
    </div> -->

    <div class="reviews-index">
      <div v-for="review in reviews">
        <p> Bathroom Location: {{review.bathroom.park}}</p>
        <p> Comment: {{review.comment}}</p>
        <p> Commenter: "{{review.user.first_name}} {{review.user.last_name}}"</p>
      </div>
    </div>
  
  </div>
</template>

<script>
// @ is an alias to /src
import * as VueGoogleMaps from "vue2-google-maps";
import Map from '../components/GoogleMap.vue';
import axios from "axios";
const startMarker = ('http://www.pngall.com/wp-content/uploads/2017/05/Map-Marker-Free-PNG-Image.png');

export default {
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
};
</script>
