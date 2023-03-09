import {
    Apps,
    Menu,
    Warning,
    SettingsInputComponent,
    AddCircleOutline,
    ModeEdit,
    DeleteForever
} from '@mui/icons-material';

export const modalWindowContent = {
    add: <AddCircleOutline />,
    rename: <ModeEdit />,
    delete: <DeleteForever />
}

export const sidebarContent = {
    demo: <Apps />,
    description: <Menu />,
    journal: <Warning />,
    API: <SettingsInputComponent />
}

export const descriptionSubMenuContent = ["frontend", "backend"];
