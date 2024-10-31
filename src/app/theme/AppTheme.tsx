import type { ThemeOptions } from "@mui/material/styles";
import { ThemeProvider } from "@mui/material/styles";
import * as React from "react";
import theme from "./theme";

interface AppThemeProps {
  children: React.ReactNode;
  /**
   * This is for the docs site. You can ignore it or remove it.
   */
  disableCustomTheme?: boolean;
  themeComponents?: ThemeOptions["components"];
}

export default function AppTheme({
  children,
  disableCustomTheme,
}: AppThemeProps) {
  if (disableCustomTheme) {
    return <React.Fragment>{children}</React.Fragment>;
  }
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
