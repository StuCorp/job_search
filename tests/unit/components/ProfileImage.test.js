import { shallowMount } from "@vue/test-utils";
import ProfileImage from "@/components/ProfileImage";

// Just checks component renders
describe("ProfileImage", () => {
  it("renders", () => {
    const wrapper = shallowMount(ProfileImage, () => {
      expect(wrapper.exists()).toBe(true);
    });
  });
});
