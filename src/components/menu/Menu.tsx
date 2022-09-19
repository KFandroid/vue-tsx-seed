import { withModifiers, defineComponent, ref } from 'vue'
export default defineComponent({
  name: 'Menu',
  setup() {
    const count = ref(0)

    const inc = () => {
      count.value++
    }

    const activeIndex = ref('1')
    const handleSelect = (key: string, keyPath: string[]) => {
      console.log(key, keyPath)
    }

    return () => (
      <>
        <el-menu
          default-active={activeIndex.value}
          active-text-color="#fff"
          background-color="#545c64"
          text-color="#85afb6"
          onSelect={handleSelect}>
          <el-menu-item index="1">Processing Center</el-menu-item>
          <el-sub-menu index="2">
            {{
              default: () => (
                <>
                  <el-menu-item index="2-1">item one</el-menu-item>
                  <el-menu-item index="2-2">item two</el-menu-item>
                  <el-menu-item index="2-3">item three</el-menu-item>
                  <el-sub-menu index="2-4">
                    {{
                      default: () => (
                        <>
                          <el-menu-item index="2-4-1">item one</el-menu-item>
                          <el-menu-item index="2-4-2">item two</el-menu-item>
                          <el-menu-item index="2-4-3">item three</el-menu-item>
                        </>
                      ),
                      title: () => '11111',
                    }}
                  </el-sub-menu>
                </>
              ),
              title: () => <strong style={{ color: 'red' }}>not easy</strong>,
            }}
          </el-sub-menu>
          <el-menu-item index="3" disabled>
            Info
          </el-menu-item>
          <el-menu-item index="4">Orders</el-menu-item>
        </el-menu>
      </>
    )
  },
})
