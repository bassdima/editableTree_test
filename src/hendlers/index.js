export const handleHiddenListButtonClick = (
    isVisable,
    setIsVisable,
    setActiveId,
    data
) => {
    setIsVisable(!isVisable);
    setActiveId(data.id);
}

export const handleCancelButtonClick = (
    e,
    setIsModalWindowOpen,
    title,
    setInputText,
    isError,
    setLargeWindowErrorMessage
) => {
    e.preventDefault();
    setIsModalWindowOpen(false);
    if (title !== "delete" && !isError) setInputText("");
    if (isError) setLargeWindowErrorMessage("");
}
