import {
    ExpandMore,
    ExpandLess
} from '@mui/icons-material';
import "./styles.scss";

export const DescriptionChevron = ({ btnName, sidebarIsOpen, descriptionIsOpen }) => {
    return (
        <>
            {(btnName === "description" && sidebarIsOpen) &&
                <div className="description-chevron">
                    {descriptionIsOpen ?
                        <ExpandMore />
                        :
                        <ExpandLess />
                    }
                </div>
            }
        </>
    );
}
