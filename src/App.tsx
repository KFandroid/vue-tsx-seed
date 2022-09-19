import { withModifiers, defineComponent, ref } from 'vue'
import { test } from './api/mini-app'
import './styles/index.less'
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
        <el-container>
          <el-aside class="aside" width="200px">
            <Menu />
          </el-aside>

          <el-container>
            <el-header>
              <div class="header">
                <div>面包屑招租</div>
                <div>个人设置招租</div>
              </div>
              <div>tabs卡招租</div>
            </el-header>

            <el-main>
              <router-view></router-view>
              <div onClick={withModifiers(inc, ['self'])}>{count.value}</div>
              <el-button type="primary" onClick={releaseExVersion}>
                发布体验版
              </el-button>
            </el-main>
          </el-container>
        </el-container>
      </>
    )
  },
})

export default App
