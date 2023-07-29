
import AddUsersCont from "../pages/Admin/AddUsers/AddUsersCont";
import ProfileSettings from "../pages/Admin/ProfileSettings/ProfileSettings";
import UsersCont from "../pages/Admin/Users/UsersCont";

export const AdminFunctions = [
    {
        name: 'Videos',
        type: 'client',
        icon: 'video_library',
        id: 'users',
        comp: (<UsersCont/>),
    },
    {
        name: 'Add Video',
        icon: 'library_add',
        type: 'client',
        id: 'users_add',
        comp: (<AddUsersCont />),
    },

    {
        name: 'Profile Settings',
        icon: 'settings',
        type: 'client',
        id: 'settings',
        comp: (<ProfileSettings/>),
    },
];