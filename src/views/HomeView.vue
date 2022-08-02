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
      <form name="reviewForm" @submit.prevent="reviewForm">
        <select id="bathrooms" name="bathroom" class="form-select form-select-lg mb-3" aria-label=".form-select-lg example" v-model="bathroomID">
          <option value="" disabled selected>Select bathroom</option>
          <option id="theBathroom" v-for="bathroom in bathrooms" :value="bathroom.id">{{bathroom.label}}</option>
        </select>
        <p>Comment:</p> <textarea type="text" rows="4" cols="50" v-model="comment"></textarea>
        <p>Would you return? <input type="text" v-model="wouldReturn"></p>
        <p>Rating out of 5 stars: <input type="number" v-model="rating"></p>
        <button class="btn btn-primary btn-lg" id="submitButton" type="submit" value="Submit" v-on:click="reviewForm()">Submit Review</button>
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
      bathrooms:[],
      currentBathroom: [],

      bathroomID:"",
      wouldReturn:"",
      rating:"",
  };
},

  created: function() {
    axios.get("/api/users").then(response => {
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
      console.log(this.bathrooms);
    });
    
  },
   methods: {
      showReviews: function() {
        console.log(location.id)
      },

      selectBathroom: function(theBathroom) {
      console.log('selecting the bathroom...', theBathroom.target.value);
      if (theBathroom.target.value) {
        const id = parseInt(theBathroom.target.value, 10);
        axios.get(`/api/bathrooms/${id}`).then(response => {
          console.log('bathroom details ...', response.data);
          if (response.data) {
            this.currentBathroom= response.data;
            }
          });
        }
      },

      reviewForm: function(event) {
        event.preventDefault();
        const {bathroomID, comment, wouldReturn, rating} = this;
        console.log("Creating the review...", bathroomID, comment, wouldReturn, rating);
        let params = {
          bathroom_id: this.bathroomID,
          comment: this.comment,
          return: this.wouldReturn,
          rating: this.rating
        };

        axios.post("/api/reviews", params).then(response => {
        this.reviews.push(response.data);
        this.newTeacherFirstName = "";
        this.newTeacherLastName = "";
      })


      }

    }


};
</script>
