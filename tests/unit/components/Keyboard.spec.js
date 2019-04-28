import { mount } from '@vue/test-utils';
import Keyboard from '@/components/Keyboard.vue';

describe('Keyboard', () => {
  it('renders', () => {
    const wrapper = mount(Keyboard, {
      propsData: {
        notes: [ 60, 70, 80],
      },
    });
    expect(wrapper.element).toMatchSnapshot();
  });
});
