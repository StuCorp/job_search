import { mount } from "@vue/test-utils";
import MainNav from "@/components/MainNav.vue";

describe("MainNav", () => {
  it("displays company name", () => {
    const wrapper = mount(MainNav, {
      data() {
        return {
          company: "Super Corp",
        };
      },
    });
    expect(wrapper.text()).toMatch("Eggman Careers");
    // console.log(wrapper.html());
  });
});
