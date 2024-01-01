import loadable from "@loadable/component";
import { IconBaseProps, IconType } from "react-icons";
import { LoadableComponent } from "next/dynamic";

export type DynamicIconType = LoadableComponent<IconBaseProps>;
export const getDynamicIcon = (iconName: string): DynamicIconType => {
  let lib = iconName
    .replace(/([a-z0-9])([A-Z])/g, "$1 $2")
    .split(" ")[0]
    .toLocaleLowerCase();
  if (lib == "io") {
    lib = "io5";
  }
  if (lib == "fa") {
    lib = "fa6";
  }
  return loadable(() => import(`react-icons/${lib}/index.js`), {
    resolveComponent: (loadedModule) => loadedModule[iconName] as IconType,
  });
};
