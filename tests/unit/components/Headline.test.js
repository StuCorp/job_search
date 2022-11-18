import { mount } from "@vue/test-utils";
import { nextTick } from "vue";
import Headline from "@/components/Headline";

describe("Headline", () => {
  beforeEach(() => {
    // automatically replaces any timers used with jest mock functions
    // global test setting
    jest.useFakeTimers("legacy");
  });

  afterEach(() => {
    // reset global test setting once finished - good practice
    jest.useRealTimers();
  });

  it("displays introductory action verb", () => {
    // console.log(clearInterval);
    const wrapper = mount(Headline);
    const actionPhrase = wrapper.find("[data-test='action-phrase']");
    expect(actionPhrase.text()).toBe("Build for everyone");
  });

  it("changes action verb at a consistent interval", () => {
    // console.log(clearInterval);
    // once the component is mounted,
    // it's lifecycle hook 'oncreated' runs setInterval
    mount(Headline);
    expect(setInterval).toHaveBeenCalled();
  });

  it("swaps action verb after first interval", async () => {
    const wrapper = mount(Headline);
    // 'vm' gets you access to the wrapped component and its props etc
    console.log(wrapper.vm.action);
    // move forward to the next interval
    jest.runOnlyPendingTimers();
    // wait for the next DOM update to flush
    // bc when you mutate reactive state in Vue,`
    // DOM changes are not immediate but buffered to next tick
    await nextTick();
    const actionPhrase = wrapper.find("[data-test='action-phrase']");
    expect(actionPhrase.text()).toBe("Create for everyone");
  });

  it("removes interval when component disappears", () => {
    const wrapper = mount(Headline);
    wrapper.unmount();
    expect(clearInterval).toHaveBeenCalled();
  });
});
