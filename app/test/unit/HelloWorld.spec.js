import { mount } from '@vue/test-utils';
import HelloWorld from '../../src/components/HelloWorld.vue';

describe('HelloWorld', () => {

  beforeEach(() => {
    window.fetch = jest.fn()
  })
  it('should exist', () => {
    const wrapper = mount(HelloWorld);
    expect(wrapper).toMatchSnapshot()
  })
})