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
import {ChevronLeft} from "@mui/icons-material";
import {useRouter} from "next/router";


export default function Sidebar({menus}) {
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
            <Drawer variant="permanent">
                <List>
                    {items}
                </List>
            </Drawer>
        </>
    )
}