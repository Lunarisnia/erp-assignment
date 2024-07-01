import {
    Box,
    Divider,
    Drawer,
    IconButton,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText
} from "@mui/material";
import {ChevronLeft} from "@mui/icons-material";
import {useRouter} from "next/router";


export default function Sidebar({menus, open, onToggle}) {
    const router = useRouter();
    const items = menus.map((menu, i) => {
        return (
            <ListItem disablePadding key={i}>
                <ListItemButton onClick={() => {
                    router.push(menu.route)
                    onToggle()
                }}>
                    <ListItemIcon>
                        {menu.icon}
                    </ListItemIcon>
                    <ListItemText primary={menu.text}/>
                </ListItemButton>
            </ListItem>
        )
    })

    return (
        <Drawer variant="temporary" open={open}>
            <List>
                <ListItem disablePadding style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'flex-end',
                }}>
                    <IconButton onClick={onToggle}>
                        <ChevronLeft/>
                    </IconButton>
                </ListItem>
            </List>
            <Divider />
            <List>
                {items}
            </List>
        </Drawer>
    )
}