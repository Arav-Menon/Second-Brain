import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Signup } from "./Components/Auth/Signup";
import { AppBar } from "./Components/AppBar";
import { Main } from "./Components/Main";
import { Signin } from "./Components/Auth/Signin";
import { Note } from "./Components/Note";
import { AddContent } from "./Components/AddContent";

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
          <Route path="/note/add-content" element={<AddContent />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
