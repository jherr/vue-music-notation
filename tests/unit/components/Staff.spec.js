import { mount } from '@vue/test-utils';
import Staff from '@/components/Staff.vue';
import utilities from '@/components/utilities.js';

describe('Staff', () => {
  it('renders', () => {
    const wrapper = mount(Staff, {
      propsData: {
      },
    });
    expect(wrapper.element).toMatchSnapshot();
  });

  it('emits a click', () => {
    const wrapper = mount(Staff, {
      propsData: {
        showBrace: true,
        showEnd: true,
      },
      provide: () => ({
        showTrebleClef: true,
        showBassClef: true,
      }),
    });
    wrapper.find('.container').trigger('click');
  });

  it('renders a brace', () => {
    const wrapper = mount(Staff, {
      propsData: {
        showBrace: true,
        showEnd: true,
      },
      provide: () => ({
        showTrebleClef: true,
        showBassClef: true,
      }),
    });
    expect(wrapper.element).toMatchSnapshot();
  });

  it('renders an end', () => {
    const wrapper = mount(Staff, {
      propsData: {
        showBrace: false,
        showEnd: true,
      },
      provide: () => ({
        showTrebleClef: false,
        showBassClef: false,
      }),
    });
    expect(wrapper.element).toMatchSnapshot();
  });

  it('renders some sharps', () => {
    const wrapper = mount(Staff, {
      propsData: {
        notes: [
          utilities.noteToMIDI('C#'),
          utilities.noteToMIDI('D#'),
          utilities.noteToMIDI('F#'),
          utilities.noteToMIDI('G#'),
          utilities.noteToMIDI('A#'),
        ],
      },
      provide: () => ({
        showTrebleClef: true,
        showBassClef: false,
      }),
    });
    expect(wrapper.element).toMatchSnapshot();
  });

  it('renders treble notes', () => {
    const wrapper = mount(Staff, {
      propsData: {
        notes: [ 60, 63, 67 ],
      },
      provide: () => ({
        showTrebleClef: true,
        showBassClef: false,
      }),
    });
    expect(wrapper.element).toMatchSnapshot();
  });

  it('renders bass notes', () => {
    const wrapper = mount(Staff, {
      propsData: {
        notes: [ 40, 43, 47 ],
      },
      provide: () => ({
        showTrebleClef: false,
        showBassClef: true,
      }),
    });
    expect(wrapper.element).toMatchSnapshot();
  });

  it('renders bass note range', () => {
    const notes = [];
    for (let note = 30; note < 60; note++) {
      if (!utilities.isSharp(note)) {
        notes.push(note);
      }
    }
    const wrapper = mount(Staff, {
      propsData: {
        notes,
      },
      provide: () => ({
        showTrebleClef: true,
        showBassClef: true,
      }),
    });
    expect(wrapper.element).toMatchSnapshot();
  });

  it('renders treble note range', () => {
    const notes = [];
    for (let note = 58; note <= 84; note++) {
      if (!utilities.isSharp(note)) {
        notes.push(note);
      }
    }
    const wrapper = mount(Staff, {
      propsData: {
        notes,
      },
      provide: () => ({
        showTrebleClef: true,
        showBassClef: true,
      }),
    });
    expect(wrapper.element).toMatchSnapshot();
  });
});
