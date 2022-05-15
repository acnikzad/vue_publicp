<template>
  <GoogleMap api-key="AIzaSyC8FHHNjdqdpY9kzMeSzSKqRiiKEBa-Cyk" style="width: 100%; height: 750px" :center="center" :zoom="13">
    <Marker :options="markerOptions" />
  </GoogleMap>
</template>

<script>

import { defineComponent } from "vue";
import { GoogleMap, Marker } from "vue3-google-map";
import axios from "axios";
import GmapCustomMarker from 'vue3-gmap-custom-marker';

export default defineComponent({
  components: { GoogleMap, Marker },
  setup() {
    const center = { lat: 38.5816, lng: -121.4944 };
    const markerOptions = { position: center, label: "L", title: "LADY LIBERTY" };
    const parks = {}

    return { center, markerOptions };
  },

});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/*h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}*/
</style>
