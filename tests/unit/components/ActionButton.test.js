import { mount } from "@vue/test-utils";

import ActionButton from "@/components/ActionButton";

describe("ActionButton", () => {
  it("renders text", () => {
    const testText = "I'm so clickable";
    const wrapper = mount(ActionButton, {
      props: {
        text: testText,
        type: "primary",
      },
    });
    expect(wrapper.text()).toMatch(testText);
  });

  it("applies one of several styles to button", () => {
    const wrapper = mount(ActionButton, {
      props: {
        text: "wurp",
        type: "primary",
      },
    });
    const button = wrapper.find("button");
    expect(button.classes("primary")).toBe(true);
  });
});
