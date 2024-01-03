import { ref } from 'vue'
import MyComponent from "./components/my-component.js";
import MyOtherComponent from "./components/my-other-component.js";

export default {
  // Register the components to be used by the template
  components: { MyComponent, MyOtherComponent },
  setup() {
    const count = ref(0)

    return { count }
  },
  template: `
    <MyComponent />
    <MyOtherComponent />`
}
