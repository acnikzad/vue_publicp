<template>
  <GoogleMap api-key="AIzaSyC8FHHNjdqdpY9kzMeSzSKqRiiKEBa-Cyk" style="width: 100%; height: 750px" :center="center" :zoom="13" v-if="done">
    <MarkerCluster>
      <Marker v-for="(location, i) in locations" :options="{ position: location }" :key="i" />
    </MarkerCluster>
  </GoogleMap>
</template>

<script>

import { defineComponent, ref } from "vue";
import { GoogleMap, Marker, MarkerCluster } from "vue3-google-map";
import axios from "axios";
import GmapCustomMarker from 'vue3-gmap-custom-marker';

export default defineComponent({
  components: { GoogleMap, Marker, MarkerCluster },
  setup(props) {
    var done = ref(false)
    const center = { lat: 38.5816, lng: -121.4944 };
    var locations = [
    // {lat: 38.508932359829, lng: -121.483599357993},
    // {lat: 38.51822717043, lng: -121.505121809116},
    // {lat: 38.527262952937, lng: -121.416895069333},
    // {lat: 38.478240312181, lng: -121.452453434246},
    // {lat: 38.570852677373, lng: -121.489110243271},
    // {lat: 38.51328132117, lng: -121.414827906638},
    // {lat: 38.565932960766, lng: -121.504516970667},
    // {lat: 38.634681964794, lng: -121.440453827359},
    // {lat: 38.610279414091, lng: -121.465195736377},
    // {lat: 38.497937913602, lng: -121.492588493131},
    // {lat: 38.471066246466, lng: -121.501818754725},
    // {lat: 38.634681964794, lng: -121.440453827359},
    // {lat: 38.478602967397, lng: -121.542041328892},
    // {lat: 38.617692791026, lng: 38.617692791026},
    // {lat: 38.629054347935, lng: 38.629054347935},
    // {lat: 38.579577552784, lng: -121.42618885835},
    // {lat: 38.576930043097, lng: -121.443520684396},
    // {lat: 38.445465504786, lng: -121.407682293152},
    // {lat: 38.542276703359, lng: -121.501109833454},
    // {lat: 38.528469127033, lng: -121.450092782806},
    // {lat: 38.521676332303, lng: -121.48940084104}
    ]
    axios.get(`/api/bathrooms`, {
    params: {},
    headers: {
      'Content-Type': 'application/json'
   }     
  }).then(response => {
    var result = response.data
    var num = 0
    result.forEach((data) => {
      var payload = {
        lat: parseFloat(data.lat),
        lng: parseFloat(data.lng)
      }
      locations.push(payload)
      num += 1
      if (num === result.length) {
        done.value = !done.value
      }
      console.log(done, 'this is done')
    })
    console.log("location", locations)
    // data = response.data
    // this.bathrooms = response.data;
    //console.log(markerOptions, "This is the component file");
  });

    return { done, center, locations };
  },
  // async mounted() {
  //   await this.$nextTick();
  //   console.log(this.mapData)
  // }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

