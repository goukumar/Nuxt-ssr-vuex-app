import { mount } from "@vue/test-utils";


import Search from "../components/molecules/Search.vue";

describe("Search", () => {
  // Now mount the component and you have the wrapper
  const wrapper = mount(Search);
  test("has a form", () => {
    expect(wrapper.get("form"));
  });
  test("has a input", () => {
    expect(wrapper.get("input"))
  });
  test("Search Box to be empty", () => {
    expect(wrapper.get("input").text()).toBe('');
  });

  test("has a submit button", () => {
    expect(wrapper.get("button"));
    expect(wrapper.get("button").text()).toBe("Search");
    expect(wrapper.get("button").attributes("type")).toBe("submit");
  });
  test("To be button disabled", () => {
    expect(wrapper.get("button").attributes("disabled")).toBe("disabled");
  });

  test("Search Box not be empty and Search Button is not disabled", () => {

    let searchComponent = mount(Search, {
      data() {
        return {
          searching: "search"
        };
      }
    });
    expect(searchComponent.vm.searching).toBe("search");
    expect(searchComponent.get("button").attributes("disabled")).not.toBe("disabled");
  });

});
