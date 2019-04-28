import { mount } from '@vue/test-utils';
import Notation from '@/components/Notation.vue';

describe('Notation', () => {
  it('renders', () => {
    const wrapper = mount(Notation, {
      propsData: {
      },
    });
    expect(wrapper.element).toMatchSnapshot();
  });
});
