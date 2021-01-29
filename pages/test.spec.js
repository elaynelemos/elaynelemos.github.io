import { createLocalVue, mount } from '@vue/test-utils'
import index from './'

const localVue = createLocalVue()

describe('IndexPage', () => {
  test('properly mounted', () => {
    const wrapper = mount(index, {
      localVue,
    })
    expect(wrapper.html()).toMatchSnapshot()
  })
})
