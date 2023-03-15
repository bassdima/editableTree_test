import "./App.scss";
import { useState } from "react";
import {
  Sidebar,
  MainHeader,
  ModalWindows
} from "./components";
import { PageEditableTree, Description } from "./pages";
import { useUserId } from "./hooks";
import { Routes, Route } from 'react-router-dom';
import { ContextProvider } from "./context";

export const App = () => {
  const [modalWindowName, setModalWindowName] = useState("");
  const [itemName, setItemName] = useState("");

  const userId = useUserId();

  return (
    <ContextProvider userId={userId}>
      <div className="app-container">
        <Sidebar />
        <div className='page-wrapper'>
          <MainHeader />
          <Routes>
            <Route path='/' element={
              <PageEditableTree
                setModalWindowName={setModalWindowName}
                userId={userId}
                setItemName={setItemName}
              />
            } />
            <Route path='/description' element={<Description />} />
          </Routes>
        </div>
        <ModalWindows
          modalWindowName={modalWindowName}
          itemName={itemName}
        />
      </div>
    </ContextProvider>
  );
}
