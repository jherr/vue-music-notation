import { mount } from '@vue/test-utils';
import Tabulature from '@/components/Tabulature.vue';

describe('Tabulature', () => {
  it('renders default', () => {
    const wrapper = mount(Tabulature, {
      propsData: {
      },
    });
    expect(wrapper.element).toMatchSnapshot();
  });

  it('renders', () => {
    const wrapper = mount(Tabulature, {
      propsData: {
        chords: [ [ 0, 2, 2, 1, 0, 0 ], [ -1, -1, -1, 1, 2, 1 ] ],
      },
    });
    expect(wrapper.element).toMatchSnapshot();
  });
});
