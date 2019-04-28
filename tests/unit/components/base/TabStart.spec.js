import { mount } from '@vue/test-utils';
import TabStart from '@/components/base/TabStart.vue';

describe('TabStart', () => {
  it('renders', () => {
    const wrapper = mount(TabStart, {
      propsData: {
      },
    });
    expect(wrapper.element).toMatchSnapshot();
  });
});
