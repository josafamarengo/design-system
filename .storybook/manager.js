import { addons } from "@storybook/addons";
import { withInfo } from "@storybook/addon-info";
import theme from "./theme";
import centered from "@storybook/addon-centered/react";
import { addDecorator } from "@storybook/react";

addons.setConfig({
  theme: theme,
});

addDecorator(withInfo);
addDecorator(centered);
