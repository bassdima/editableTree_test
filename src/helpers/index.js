export const descriptionToggle = (e, isOpen, setIsOpen) => {
    if (e.target.id === "description") setIsOpen(true);
    if (e.target.id !== "description" && e.target.checked && isOpen) setIsOpen(false);
}

export const treeToogle = (isVisable, setIsVisable, setActiveId, data) => {
    setIsVisable(!isVisable);
    setActiveId(data.id);
}
