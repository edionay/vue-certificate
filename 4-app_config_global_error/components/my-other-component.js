import { ref } from 'vue'

export default {
    setup() {
        const count = ref(0)

        throw new Error('This is an error!')

        return { count }
    },
    template: `<div>The other count is {{ count / 0 }}</div>`
}
