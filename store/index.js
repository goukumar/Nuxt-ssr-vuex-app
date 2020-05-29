// export const strict = false;


const siteFilters = {
  species: [
    {
      type: "Human",
      enabled: false
    },
    {
      type: "Mytholog",
      enabled: false
    },
    {
      type: "Other Species",
      enabled: false
    }
  ],
  gender: [
    {
      type: "Male",
      enabled: false
    },
    {
      type: "Female",
      enabled: false
    }
  ],
  origin: [
    {
      type: "Unknown",
      enabled: false
    },
    {
      type: "Post-Apocalyptic Earth",
      enabled: false
    },
    {
      type: "Nuptia 4",
      enabled: false
    },
    {
      type: "Other origins",
      enabled: false
    }
  ]
};
import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

const validate = qry => {
  if (
    (typeof qry === "number" && Number.isInteger(qry)) ||
    Array.isArray(qry)
  ) {
    return `/${qry}`;
  }

  if (typeof qry === "object") {
    return `/?${Object.keys(qry)
      .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(qry[key])}`)
      .join("&")}`;
  }
  throw new Error(
    `As argument use an object, an array, an integer or leave it blank`
  );
};
export const state = () => ({
        filters: [],
         results: [],
         activeFilters: {
           species: [],
           gender: [],
           origin: []
         },
         filteredResults: []
});
export const getters = {
         getResults: state => {
           if (
             state.activeFilters.species.length > 0 ||
             state.activeFilters.gender.length > 0 ||
             state.activeFilters.origin.length > 0
           ) {
             return state.filteredResults;
           } else {
             return state.results;
           }
         },
         getActiveTags: state => {
           let tags = Object.keys(state.activeFilters)
             .map(item => {
               return state.activeFilters[item];
             })
             .reduce((result, current) => {
               return [...current, ...result];
             });
           return tags;
         },
        getFilters: state => {
           return state.filters;
         }
};
export const mutations = {
         SET_RESULTS(state, response) {
           state.results = response;
         },
         RENDER_SITE_FILTERS(state, filters) {
          state.filters = filters;
         },
         SET_FILTERED_DATA(state, filteredResult) {
           state.filteredResults = filteredResult;
         },
         SET_SELECTED_FILTERS(state, updatedState) {
           state.activeFilters = updatedState;
         },
        SORT_ITEMS(state, data) {
          state.filteredResults = data.filteredResults;
          state.results = data.results;
        }

};
export const actions = {
         async nuxtServerInit({ commit,dispatch }) {
           commit("RENDER_SITE_FILTERS", siteFilters);
         },
         loadData: async ({ commit }) => {
           axios
             .get("https://rickandmortyapi.com/api/character")
             .then(response => {
               return response.data;
             })
             .then(data => {
               commit("SET_RESULTS", data.results);
             });
         },
         search: ({ commit, $axios }, qry) => {
           axios
             .get("https://rickandmortyapi.com/api/character" + validate(qry))
             .then(response => {
               return response.data;
             })
             .then(data => {
               commit("SET_RESULTS", data.results);
             })
             .catch(function() {
               // handle error
               commit("SET_RESULTS", []);
             });
         },
         applyFilter: ({ commit, state }, filter) => {
           if (filter == null && typeof filter != Object) {
             throw new Error(`As argument use an object`);
           }

           // active filters
           let currentFilter;
           if (filter.status) {
             currentFilter = {
               ...state.activeFilters,
               [filter.category]: [
                 ...state.activeFilters[filter.category],
                 filter.value
               ]
             };
           } else {
             currentFilter = {
               ...state.activeFilters,
               [filter.category]: [...state.activeFilters[filter.category]]
             };
             const index = currentFilter[filter.category].indexOf(filter.value);
             if (index > -1) {
               currentFilter[filter.category].splice(index, 1);
             }
           }
           commit("SET_SELECTED_FILTERS", currentFilter);

           //filter data based on user selection
           let filteredResults;

           const filterKeys = Object.keys(state.activeFilters);
           filteredResults = state.results.filter(item => {
             return filterKeys.every(key => {
               if (!state.activeFilters[key].length) {
                 return true;
               }
               if (key == "name") {
                 return item[key].includes(state.activeFilters[key]);
               } else {
                 return state.activeFilters[key].includes(item[key]);
               }
             });
           });
           commit("SET_FILTERED_DATA", filteredResults);
         },
         removeFilter: ({ commit, state }, filter) => {
           let event = new Event("change");
           document.querySelector(
             ".filters input[id='" + filter.value + "']"
           ).checked = false;
           document
             .querySelector(".filters input[id='" + filter.value + "']")
             .dispatchEvent(event);

           let currentFilter = { ...state.activeFilters };
           const index = currentFilter[filter.category].indexOf(filter.value);
           if (index > -1) {
             currentFilter[filter.category].splice(index, 1);
           }

           commit("SET_SELECTED_FILTERS", currentFilter);
         },
         sortBy: function({ commit, state }, payload) {
           // Check, what direction now should be
           const sortDirection =
             payload.direction === "descending" ? "desc" : "asc";
           const isFilterEnabled = state.filteredResults.length > 0;
           let data = {
             filteredResults: [...state.filteredResults],
             results: [...state.results]
           };
           if (sortDirection === "asc") {
             if (isFilterEnabled) {
               data.filteredResults.sort(function(a, b) {
                 return a.id - b.id;
               });
             } else {
               data.results.sort(function(a, b) {
                 return a.id - b.id;
               });
             }
           } else {
             if (isFilterEnabled) {
               data.filteredResults.sort(function(a, b) {
                 return b.id - a.id;
               });
             } else {
               data.results.sort(function(a, b) {
                 return b.id - a.id;
               });
             }
           }
           commit("SORT_ITEMS", data);
         }
       };
