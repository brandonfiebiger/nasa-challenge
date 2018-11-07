import { mount, shallow } from '@vue/test-utils';
import Picture from '../../src/components/Picture.vue';

describe('HelloWorld', () => {
  let wrapper;
  beforeEach(() => {
    window.fetch = jest.fn()
    wrapper = mount(Picture);
  })
  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('should fire todayToggle on button click', () => {
    wrapper.find('button').trigger('click');
    console.log(wrapper.find('button'))
    wrapper.vm.todayToggle = jest.fn()
    expect(wrapper.vm.todayToggle).toHaveBeenCalled();
  })


})