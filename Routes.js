import React from "react";
import { Router, Stack, Scene } from "react-native-router-flux";
import Jobs from "./components/Jobs";
import Detail from "./components/Detail";

export default function Routes() {
  return (
    <Router>
      <Stack key="root" hideNavBar>
        <Scene key="List" component={Jobs} title="Job List" initial={true} />
        <Scene key="Detail" component={Detail} title="Detail Page" />
      </Stack>
    </Router>
  );
}
