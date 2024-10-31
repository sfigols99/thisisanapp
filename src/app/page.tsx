import SideMenu from "@/components/Menu/SideMenu";
import AppNavbar from "@/components/Navigation/AppNavar";
import AppTheme from "./theme/AppTheme";
import {
  chartsCustomizations,
  dataGridCustomizations,
  datePickersCustomizations,
  treeViewCustomizations,
} from "./theme/customizations";

const xThemeComponents = {
  ...chartsCustomizations,
  ...dataGridCustomizations,
  ...datePickersCustomizations,
  ...treeViewCustomizations,
};

export default function Home() {
  return (
    <AppTheme themeComponents={xThemeComponents}>
      <AppNavbar />
      <SideMenu />
    </AppTheme>
  );
}
