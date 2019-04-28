import { mount } from '@vue/test-utils';
import Tab from '@/components/base/Tab.vue';

describe('Tab', () => {
  it('renders', () => {
    const wrapper = mount(Tab, {
      propsData: {
      },
    });
    expect(wrapper.element).toMatchSnapshot();
  });
});
