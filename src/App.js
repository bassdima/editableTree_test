import "./App.scss";
import { useState, useEffect } from "react";
import {
  Sidebar,
  MainHeader,
  ModalWindows
} from "./components";
import { PageEditableTree, Description } from "./pages";
import { useUserId } from "./hooks";
import { getNodes } from './API';
import { Routes, Route } from 'react-router-dom';

export const App = () => {
  const [node, setNode] = useState("");
  const [activeId, setActiveId] = useState(null);
  const [inputText, setInputText] = useState("");
  const [modalWindowName, setModalWindowName] = useState("");
  const [isModalWindowOpen, setIsModalWindowOpen] = useState(false);
  const [itemName, setItemName] = useState("");
  const [largeWindowErrorMessage, setLargeWindowErrorMessage] = useState("");
  const [smallWindowErrorMessage, setSmallWindowErrorMessage] = useState("");
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const userId = useUserId();

  useEffect(() => {
    setIsLoading(true);
    setIsError(false);
    getNodes(userId)
      .then((response) => {
        setNode(response.data)
        setIsLoading(false);
      })
      .catch((e) => {
        setIsError(true);
        setLargeWindowErrorMessage(e.response.data.data.message);
        setSmallWindowErrorMessage(`${e.response.data.data.message} (id=${e.response.data.id})`)
      })
  }, [userId])

  return (
    <div className="app-container">
      <Sidebar />
      <div className='page-wrapper'>
        <MainHeader />
        <Routes>
          <Route path='/' element={
            <PageEditableTree
              data={node}
              activeId={activeId}
              setActiveId={setActiveId}
              setModalWindowName={setModalWindowName}
              setIsModalWindowOpen={setIsModalWindowOpen}
              userId={userId}
              setItemName={setItemName}
            />
          } />
          <Route path='/description' element={<Description />} />
        </Routes>
      </div>
      <ModalWindows
        isModalWindowOpen={isModalWindowOpen}
        inputText={inputText}
        setInputText={setInputText}
        modalWindowName={modalWindowName}
        setLargeWindowErrorMessage={setLargeWindowErrorMessage}
        setIsModalWindowOpen={setIsModalWindowOpen}
        setNode={setNode}
        setIsLoading={setIsLoading}
        setIsError={setIsError}
        setSmallWindowErrorMessage={setSmallWindowErrorMessage}
        userId={userId}
        activeId={activeId}
        largeWindowErrorMessage={largeWindowErrorMessage}
        isError={isError}
        smallWindowErrorMessage={smallWindowErrorMessage}
        itemName={itemName}
        isLoading={isLoading}
      />
    </div>
  );
}
