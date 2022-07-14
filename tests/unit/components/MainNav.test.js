import { mount } from "@vue/test-utils";
import MainNav from "@/components/MainNav.vue";

describe("MainNav", () => {
  it("displays company name", async () => {
    const wrapper = mount(MainNav);
    // const wrapper = mount(MainNav, {
    //   data() {
    //     return {
    //       company: "Super Corp",
    //     };
    //   },
    // });
    // setData is async , so the name won't complete before test runs unless you make test async
    // await wrapper.setData({
    //   company: "Super Corp",
    // });
    expect(wrapper.text()).toMatch("Eggman Careers");
    // console.log(wrapper.html());
  });

  it("displays menu items for navigation", () => {
    const wrapper = mount(MainNav);
    const navigationMenuItems = wrapper.findAll(
      "[data-test='main-nav-list-item']"
    );
    const navigationMenuTexts = navigationMenuItems.map((item) => item.text());
    expect(navigationMenuTexts).toEqual([
      "Teams",
      "Locations",
      "Life at Eggman",
      "How we hire",
      "Students",
      "Jobs",
    ]);
  });
});
