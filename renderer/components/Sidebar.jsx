import {
    Divider,
    Drawer,
    IconButton,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText
} from "@mui/material";
import {AcUnit, ChevronLeft} from "@mui/icons-material";
import {useRouter} from "next/router";


export default function Sidebar({open, onClose, menus}) {
    const router = useRouter();
    const items = menus.map((menu, i) => {
        return (
            <ListItem disablePadding key={i}>
                <ListItemButton onClick={() => router.push(menu.route)}>
                    <ListItemIcon>
                        {menu.icon}
                    </ListItemIcon>
                    <ListItemText primary={menu.text}/>
                </ListItemButton>
            </ListItem>
        )
    })

    return (
        <>
            <Drawer open={open}>
                <List>
                    <ListItem disablePadding style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'flex-end',
                    }}>
                        <IconButton onClick={onClose}>
                            <ChevronLeft/>
                        </IconButton>
                    </ListItem>
                </List>
                <Divider/>
                <List>
                    {items}
                </List>
            </Drawer>
        </>
    )
}