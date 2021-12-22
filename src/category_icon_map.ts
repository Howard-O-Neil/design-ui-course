export interface category_map_t {
  icon: string;
  des: string;
  name: string;
}

import finance from "./resource/icon/finance.png";
import computer_science from "./resource/icon/computer_science.png";
import code from "./resource/icon/code.png";
import data_science from "./resource/icon/data_science.png";
import design from "./resource/icon/design.png";
import multimedia from "./resource/icon/multimedia.png";
import sale from "./resource/icon/sale.png";
import cook from "./resource/icon/cook.png";
import fitness from "./resource/icon/fitness.png";
import health from "./resource/icon/health.png";
import diet from "./resource/icon/diet.png";
import sport from "./resource/icon/sport.png";
import gym from "./resource/icon/gym.png";
import game from "./resource/icon/game.png";
import web from "./resource/icon/web.png";
import mobile from "./resource/icon/mobile.png";
import edit_video from "./resource/icon/edit_video.png";
import ui from "./resource/icon/ui.png";
import draw from "./resource/icon/draw.png";
import marketing from "./resource/icon/marketing.png";

export const CATEGORY_ICON_MAP_DB: Record<string, category_map_t> = {
  "Finance": { name: "Finance", icon: finance, des: "lorem" },
  "Computer Science": { name: "Computer Science", icon: computer_science, des: "lorem" },
  "Code": { name: "Code", icon: code, des: "lorem", },
  "Data Science": {
    name: "Data Science", icon: data_science, des: "lorem",
  },
  "Design": {
    name: "Design", icon: design,
    des: "lorem",
  },
  "Multimedia": {
    name: "Multimedia", icon: multimedia,
    des: "lorem",
  },
  "Sale": {
    name: "Sale", icon: sale,
    des: "lorem",
  },
  "Cooking": {
    name: "Cooking", icon: cook,
    des: "lorem",
  },
  "Fitness": {
    name: "Fitness", icon: fitness,
    des: "lorem",
  },
  "Health": {
    name: "Health", icon: health,
    des: "lorem",
  },
  "Diet": {
    name: "Diet", icon: diet,
    des: "lorem",
  },
  "Sport": {
    name: "Sport", icon: sport,
    des: "lorem",
  },
  "Gymnastic": {
    name: "Gymnastic", icon: gym,
    des: "lorem",
  },
  "Game Development": {
    name: "Game Development", icon: game,
    des: "lorem",
  },
  "Web Development": {
    name: "Web Development", icon: web,
    des: "lorem",
  },
  "Mobile Development": {
    name: "Mobile Development", icon: mobile,
    des: "lorem",
  },
  "Video Design": {
    name: "Video Design", icon: edit_video,
    des: "lorem",
  },
  "UI": {
    name: "UI", icon: ui,
    des: "lorem",
  },
  "Drawing": {
    name: "Drawing", icon: draw,
    des: "lorem",
  },
  "Marketing": {
    name: "Marketing", icon: marketing,
    des: "lorem",
  },
}
