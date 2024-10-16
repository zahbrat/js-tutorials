import "@pnotify/core/dist/BrightTheme.css";
import "@pnotify/core/dist/Material.css";
import "@pnotify/core/dist/Angeler.css";
import "@pnotify/core/dist/PNotify.css";
import "@pnotify/mobile/dist/PNotifyMobile.css";
import { alert, defaultModules, notice, info } from "@pnotify/core";
import * as PNotifyMobile from "@pnotify/mobile";
import { defaults } from "@pnotify/core";
defaults.closerHover = false;
defaults.styling = "angeler";
defaults.icons = "angeler";

defaultModules.set(PNotifyMobile, {});

alert({
  text: "Notice me, senpai!",
});

notice({
  title: "Привіт",
  text: "Вітаю тебе на цьому сайті!",
});

info({
  title: "New Thing",
  text: "Just to let you know, something happened.",
});
