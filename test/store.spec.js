import { shallowMount, createLocalVue, mount } from "@vue/test-utils";
import Vuex from "vuex";
import indexPage from "../pages/index.vue";
import SortBy from '../components/molecules/sortby.vue'
import Search from '../components/molecules/Search.vue'
import Filters from "../components/molecules/Filters.vue";

const localVue = createLocalVue();

localVue.use(Vuex);


describe("Actions.vue", () => {
  let actions;
  let store;

  beforeEach(() => {
    actions = {
      loadData: jest.fn(),
      sortBy: jest.fn(),
      search: jest.fn(),
      applyFilter: jest.fn()
    };
    store = new Vuex.Store({
      actions
    });
  });

  it('Load page results on page load', () => {
    const wrapper = shallowMount(indexPage, {
      store,
      localVue
    });
    expect(actions.loadData).toHaveBeenCalled();
  });


  it('dispatches "sortby" when select value is "changed"', () => {
    const wrapper = mount(SortBy, {
      store,
      localVue
    });
    const select = wrapper.get(".order select");
    select.setValue("descending");
    select.trigger('change');
    expect(actions.sortBy).toHaveBeenCalled();
  });

   it('dispatches "search" on search button click', () => {
     const wrapper = mount(Search, {
       store,
       localVue,
       data() {
         return {
           searching: "Ricky"
         };
       }
     });
     const button = wrapper.get("button");
     button.trigger("click");
     expect(actions.search).toHaveBeenCalled();
   });
   it('"search" button not disabled initially', () => {
     const wrapper = mount(Search, {
       store,
       localVue,
       data() {
         return {
           searching: ""
         };
       }
     });
     const button = wrapper.get("button");
     button.trigger("click");
     expect(actions.search).not.toHaveBeenCalled();
   });
   it('dispatches "applyFilter" when filter selected', () => {
     const wrapper = mount(Filters, {
       store,
       localVue,
       data() {
         return {
           renderFilters: {
             species: [
               {
                 type: "Human",
                 enabled: false
               }
             ]
           }
         };
       }
     });
      const checkBox = wrapper.get("#Human");
     checkBox.setChecked();
     checkBox.trigger("click");
     expect(actions.applyFilter).toHaveBeenCalled();
   });
});

