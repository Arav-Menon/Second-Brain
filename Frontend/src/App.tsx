import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Signup } from "./Components/Auth/Signup";
import { AppBar } from "./Components/AppBar";
import { Main } from "./Components/Main";
import { Signin } from "./Components/Auth/Signin";
import { Note } from "./Components/Note";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <AppBar /> <Main />
              </>
            }
          />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/Note" element={<Note />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
