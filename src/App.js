import React, { Suspense } from "react";
import { createResource } from "./PersonAPi";
import { Person } from "./Person";

const resource = createResource();

function App() {
  return (
    <div className="App">
      <div>Another random</div>
      <Suspense fallback={<h1>loading person...</h1>}>
        <Person resource={resource} />
      </Suspense>
    </div>
  );
}

export default App;
