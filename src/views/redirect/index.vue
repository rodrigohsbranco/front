<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  name: 'Redirect'
})
export default class extends Vue {
  created() {
    console.log("passou aqui")
    const { params, query } = this.$route
    const { path } = params
    this.$router.replace({ path: '/' + path, query }).catch(err => {
      // console.warn(err)
      console.log("passou aqui")
    })
  }

  render() {
    // Avoid warning for missing template
  }
}
</script>
