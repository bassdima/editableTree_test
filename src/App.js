import './App.scss';
import { useState, useEffect } from "react";
import {
  EditListModalWindow,
  Sidebar,
  MainHeader,
  LoaderModalWindow,
  LargeErrorModalWindow,
  SmallErrorModalWindow
} from "./components";
import { PageEditableTree } from "./pages";
import { useUserId } from './hooks';
import {
  getNodes,
  postNode,
  renameNode,
  deleteNode
} from './API';

export const App = () => {
  const [node, setNode] = useState();
  const [activeId, setActiveId] = useState();
  const [inputText, setInputText] = useState("");
  const [modalWindowName, setModalWindowName] = useState();
  const [isModalWindowOpen, setIsModalWindowOpen] = useState();
  const [itemName, setItemName] = useState();
  const [largeWindowErrorMessage, setLargeWindowErrorMessage] = useState("");
  const [smallWindowErrorMessage, setSmallWindowErrorMessage] = useState("");
  const [isError, setIsError] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const userId = useUserId();

  useEffect(() => {
    getNodes(
      setNode,
      setIsLoading,
      setIsError,
      setLargeWindowErrorMessage,
      setSmallWindowErrorMessage,
      userId
    );
  }, [userId])

  return (
    <div className="app-container">
      <Sidebar />
      <div className='page-wrapper'>
        <MainHeader />
        <PageEditableTree
          data={node}
          activeId={activeId}
          setActiveId={setActiveId}
          setModalWindowName={setModalWindowName}
          setIsModalWindowOpen={setIsModalWindowOpen}
          userId={userId}
          setItemName={setItemName}
        />
      </div>
      {modalWindowName === "add" && isModalWindowOpen &&
        <EditListModalWindow
          title="add"
          label="node name"
          inputText={inputText}
          setInputText={setInputText}
          modalWindowName={modalWindowName}
          clickHandler={postNode}
          setNode={setNode}
          setIsLoading={setIsLoading}
          setIsError={setIsError}
          setLargeWindowErrorMessage={setLargeWindowErrorMessage}
          setSmallWindowErrorMessage={setSmallWindowErrorMessage}
          userId={userId}
          activeId={activeId}
          setIsModalWindowOpen={setIsModalWindowOpen}
        />
      }
      {modalWindowName === "rename" && isModalWindowOpen &&
        <EditListModalWindow
          title="rename"
          label="new node name"
          inputText={inputText}
          setInputText={setInputText}
          modalWindowName={modalWindowName}
          clickHandler={renameNode}
          setNode={setNode}
          setIsLoading={setIsLoading}
          setIsError={setIsError}
          setLargeWindowErrorMessage={setLargeWindowErrorMessage}
          setSmallWindowErrorMessage={setSmallWindowErrorMessage}
          userId={userId}
          activeId={activeId}
          setIsModalWindowOpen={setIsModalWindowOpen}
        />
      }
      {modalWindowName === "delete" && isModalWindowOpen &&
        <EditListModalWindow
          title="delete"
          label={`Do you want to delete ${itemName}?`}
          modalWindowName={modalWindowName}
          clickHandler={deleteNode}
          setNode={setNode}
          setIsLoading={setIsLoading}
          setIsError={setIsError}
          setLargeWindowErrorMessage={setLargeWindowErrorMessage}
          setSmallWindowErrorMessage={setSmallWindowErrorMessage}
          userId={userId}
          activeId={activeId}
          setIsModalWindowOpen={setIsModalWindowOpen}
          itemName={itemName}
        />
      }
      {isLoading &&
        <LoaderModalWindow />
      }
      {largeWindowErrorMessage.length > 0 &&
        <LargeErrorModalWindow
          title={modalWindowName}
          error={largeWindowErrorMessage}
          setError={setLargeWindowErrorMessage}
        />
      }
      {smallWindowErrorMessage.length > 0 &&
        <SmallErrorModalWindow
          error={smallWindowErrorMessage}
          setError={setSmallWindowErrorMessage}
        />
      }
    </div>
  );
}
