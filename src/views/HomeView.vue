<template>
  <div class="home">
    <GmapMap
      :center="{lat:10, lng:10}"
      :zoom="7"
      map-type-id="terrain"
      style="width: 500px; height: 300px">
      <GmapMarker
        :key="index"
        v-for="(m, index) in markers"
        :position="m.position"
        :clickable="true"
        :draggable="true"
        @click="center=m.position"
      />
    </GmapMap>
  </div>
</template>

<script>
// @ is an alias to /src
import axios from "axios";
const startMarker = ('http://www.pngall.com/wp-content/uploads/2017/05/Map-Marker-Free-PNG-Image.png');

export default {
  data: function() {
    return {
      center: {lat:38.58166, lng:-121.49445},
      zoom: 13,
      markers:[],
      reviews:[],
      bathrooms: [],
      markerOptions: {
        url: startMarker,
        size: {width: 50, height: 50, f: 'px', b: 'px',},
        scaledSize: {width: 30, height: 30, f: 'px', b: 'px',}
      },
    };
  },
  name: 'Home',
  components: {

  },
  created: function() {
    axios.get(`/api/reviews`).then(response => {
      this.reviews = response.data;
      console.log(response);
    });

    axios.get(`/api/bathrooms`).then(response => {
      this.bathrooms = response.data;
      console.log(response);
      console.log(response["data"][0]);
      this.markers.push({
        park: response["data"][0]["park"],
        position: {lat:parseFloat(response["data"][0]["latitude"]), lng:parseFloat(response["data"][0]["longitude"])}});
      console.log(this.markers);
    });


    
  },
};
</script>
