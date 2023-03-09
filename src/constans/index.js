import {
    Apps,
    Menu,
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
    API: <SettingsInputComponent />
}

export const descriptionSubMenuContent = ["frontend", "backend"];
