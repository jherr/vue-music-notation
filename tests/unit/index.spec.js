import vueMusic from '@/index.js';

describe('index', () => {
  it('returns components', () => {
    expect(vueMusic.Tabulature).not.toBeNull();
  });

  it('registers components', () => {
    const component = jest.fn();
    vueMusic.install({
      component,
    })
    expect(component).toBeCalled();
  });
});
