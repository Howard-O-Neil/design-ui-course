import React from "react";
import { CATEGORY_ICON_MAP_DB, category_map_t } from "./category_icon_map";
import { COURSES_DB, course_t } from "./seed";

interface AppState_t {
    sign_in: boolean;
    username: string;
    email: string;
    password: string;
    search_key: string;
    top_4_categories: category_map_t[];
    top_20_courses: course_t[];
    is_open_signup: boolean;
    is_open_signin: boolean;
    is_open_resetForm: boolean;
    // categories: 
}

interface AppAction_t {
    type: string;
    value: any
}

const reducer = (state: AppState_t, action: AppAction_t): AppState_t => {
  switch (action.type) {
    case "update_top_4_cate":
      const categories_map = new Map<string, number>()

      COURSES_DB.forEach(x => {
        for (let cate in x.categories) {
          if (categories_map.get(x.categories[cate]) == undefined) {
            categories_map.set(x.categories[cate], x.num_students);
          }
          else categories_map.set(x.categories[cate], x.num_students + categories_map.get(x.categories[cate]));
        }
      })

      const mapSort1 = Array.from(categories_map, ([name, value]) => ({ name, value }))
        .sort((a, b) => b["value"] - a["value"]);

      return {
        ...state,
        top_4_categories: mapSort1.slice(0, 4).map(x => {
          return CATEGORY_ICON_MAP_DB[x["name"]]
        })
      }
    case "update_top_20_courses":
      COURSES_DB.sort((a, b) => b.num_students + b.liked - (a.num_students - a.liked))

      return {
        ...state,
        top_20_courses: COURSES_DB.length > 20 ? COURSES_DB.slice(0, 20) : COURSES_DB.slice(0, COURSES_DB.length)
      }

    case "handle_close_signup":
      return {
        ...state,
        is_open_signup: false,
      }

    case "handle_open_signup":
      return {
        ...state,
        is_open_signup: true,
        is_open_signin: false,
        is_open_resetForm: false,
      }
  
    case "handle_close_signin":
      return {
        ...state,
        is_open_signin: false,
      }

    case "handle_open_signin":
      return {
        ...state,
        is_open_signin: true,
        is_open_signup: false,
        is_open_resetForm: false,
      }
    case "handle_open_resetForm":
      return {
        ...state,
        is_open_resetForm: true,
        is_open_signin: false,
        is_open_signup: false,
      }
    
    case "handle_close_resetForm":
      return {
        ...state,
        is_open_resetForm: false,
      }
  
    default:
      return state;
  }
};

const initialState: AppState_t = {
  sign_in: false,
  username: "",
  email: "",
  password: '"',
  search_key: "",
  top_4_categories: [],
  top_20_courses: [],
  is_open_signup: false,
  is_open_signin: false,
  is_open_resetForm: false,
};


export const AppContext = React.createContext<[
  AppState_t,
  React.Dispatch<AppAction_t>
]>([
  initialState, () => null,
])

export const AppProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(reducer, initialState)

  return (
    <AppContext.Provider value={[state, dispatch]}>
    	{ children }
    </AppContext.Provider>
  )
}