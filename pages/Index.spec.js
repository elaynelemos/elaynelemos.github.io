import { createLocalVue, mount } from '@vue/test-utils'
import Index from '.'

const localVue = createLocalVue()

describe('Index', () => {
  test('properly mounted', () => {
    const wrapper = mount(Index, {
      localVue,
    })
    expect(wrapper.html()).toMatchSnapshot()
  })
})
