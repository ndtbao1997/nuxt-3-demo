// store/index.js
import { reactive, ref } from 'vue'

// Tạo một đối tượng reactive để lưu trữ trạng thái
const state = reactive({
    count: ref(0),
    isLoading: ref(false),
    error: ref(null)
})

// Xuất các hàm action
const increment = () => {
    state.count++
}

const setLoading = (value) => {
    state.isLoading = value
}

const setError = (value) => {
    state.error = value
}

export { state, increment, setLoading, setError }
