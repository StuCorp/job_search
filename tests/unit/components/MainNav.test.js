import { mount, shallowMount } from "@vue/test-utils";
import MainNav from "@/components/MainNav.vue";

describe("MainNav", () => {
  it("displays company name", async () => {
    // mount renders entire component tree: all of MainNav's children
    // shallowMount just renders that one component
    const wrapper = shallowMount(MainNav);
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

describe("when user is logged out", () => {
  it("prompts user to sign in", () => {
    const wrapper = shallowMount(MainNav);
    const loginButton = wrapper.find("[data-test='login-button']");
    // const profileImagin = wrapper.findComponent({ name: "ProfileImage" });
    const profileImagin = wrapper.findComponent("[data-test='profile-image']");
    expect(loginButton.exists()).toBe(true);
    expect(profileImagin.exists()).toBe(false);
  });
});

describe("when user logs in", () => {
  it("displays user profile picture", async () => {
    const wrapper = shallowMount(MainNav);
    let profileImagin = wrapper.findComponent("[data-test='profile-image']");
    expect(profileImagin.exists()).toBe(false);

    const loginButton = wrapper.findComponent("[data-test='login-button']");
    await loginButton.trigger("click");
    // the original reference is fixed its nullness, so need to search again
    profileImagin = wrapper.findComponent("[data-test='profile-image']");
    expect(profileImagin.exists()).toBe(true);
  });
});
