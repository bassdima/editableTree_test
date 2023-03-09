export const treeToogle = (isVisable, setIsVisable, setActiveId, data) => {
    setIsVisable(!isVisable);
    setActiveId(data.id);
}

export const cancelBtnEditList = (setIsModalWindowOpen, title, setInputText, isError, setLargeWindowErrorMessage) => {
    setIsModalWindowOpen(false);
    if(title !== "delete" && !isError) setInputText("");
    if(isError) setLargeWindowErrorMessage("");
  }
