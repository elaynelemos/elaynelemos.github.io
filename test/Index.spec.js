import { mount } from '@vue/test-utils'
import Index from '../pages'

describe('Index', () => {
  test('properly mounted', () => {
    const wrapper = mount(Index)
    expect(wrapper.find('.links').exists()).toBe(true)
    expect(wrapper.find('.lds-ellipsis').exists()).toBe(true)
    expect(wrapper.html()).toContain('Website in progress! :D')
  })
})
