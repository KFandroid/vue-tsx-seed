import { withModifiers, defineComponent, ref } from 'vue'
import { test } from './api/mini-app'
import Menu from './components/menu/Menu'
const App = defineComponent({
  setup() {
    const count = ref(0)

    const inc = () => {
      count.value++
    }
    const releaseExVersion = () => {
      test()
    }

    return () => (
      <>
        <div class="common-layout">
          <el-container>
            <el-header>Header</el-header>
            <el-container>
              <el-aside width="200px">
                <Menu />
              </el-aside>
              <el-main>
                <router-view></router-view>
                <div onClick={withModifiers(inc, ['self'])}>{count.value}</div>
                <el-button type="primary" onClick={releaseExVersion}>
                  发布体验版
                </el-button>
              </el-main>
            </el-container>
          </el-container>
        </div>
      </>
    )
  },
})

export default App
