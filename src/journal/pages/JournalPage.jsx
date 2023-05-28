import { MailOutline } from '@mui/icons-material';
import { Typography } from '@mui/material';
import { JournalLayout } from '../layout/JournalLayout';

const drawerWidth = 240;

export const JournalPage = () => {

    return (
        <JournalLayout>
            <Typography variant='h1' >Journal Page</Typography>
            <MailOutline />
        </JournalLayout>
        
    )

}


