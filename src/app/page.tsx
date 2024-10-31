import SideMenu from "@/components/Menu/SideMenu";
import AppNavbar from "@/components/Navigation/AppNavar";
import AppTheme from "./theme/AppTheme";
import ColorModeIconDropdown from "./theme/ColorModeIconDropdown";
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
      <ColorModeIconDropdown
        sx={{
          position: "fixed",
          top: "1rem",
          right: "1rem",
          display: { xs: "none", md: "block" },
        }}
      />
      <AppNavbar />
      <SideMenu />
    </AppTheme>
  );
}
